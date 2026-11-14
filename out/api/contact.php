<?php
// optona.tr iletişim formu: talebi MySQL'e kaydeder.
// Bağlantı ayarları web kökünün dışında: ~/.optona/db.php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function reply(int $code, array $body): never
{
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

// Yeni talep bildirimi. Gönderilemezse kayıt yine durur; hata log'a yazılır.
function notify(int $id, string $name, string $email, string $company, string $message, string $lang): void
{
    $to = 'info@optona.tr';
    $from = 'noreply@optona.tr';
    $subject = '=?UTF-8?B?' . base64_encode("Yeni talep #$id: $name") . '?=';
    $body = implode("\n", [
        "optona.tr iletişim formundan yeni talep (#$id)",
        '',
        "Ad soyad : $name",
        "E-posta  : $email",
        'Şirket   : ' . ($company !== '' ? $company : '-'),
        'Dil      : ' . strtoupper($lang),
        'Tarih    : ' . date('Y-m-d H:i'),
        '',
        'Mesaj:',
        $message,
        '',
        '--',
        'Bu e-postayı yanıtlarsanız yanıt doğrudan talep sahibine gider.',
        "Kayıt: phpMyAdmin > u1969788_optona > contact_requests (id $id)",
    ]);
    $headers = implode("\r\n", [
        'From: =?UTF-8?B?' . base64_encode('Optona Site') . "?= <$from>",
        "Reply-To: $email",
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
    ]);
    if (!@mail($to, $subject, $body, $headers, "-f$from")) {
        error_log("optona contact: bildirim e-postasi gonderilemedi (#$id)");
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    reply(405, ['ok' => false]);
}

$lang = ($_POST['lang'] ?? 'tr') === 'en' ? 'en' : 'tr';
$t = $lang === 'en'
    ? ['name' => 'Write your name.', 'email' => 'Write a valid email address.', 'message' => 'Describe the task in at least a few words.', 'rate' => 'Too many requests. Please try again later.', 'server' => 'Could not save your request. Please email info@optona.tr.']
    : ['name' => 'Adınızı yazın.', 'email' => 'Geçerli bir e-posta adresi yazın.', 'message' => 'İşi birkaç kelimeyle de olsa anlatın.', 'rate' => 'Çok fazla deneme yapıldı. Biraz sonra tekrar deneyin.', 'server' => 'Talebiniz kaydedilemedi. Lütfen info@optona.tr adresine yazın.'];

// Bot tuzağı: görünmeyen alan doluysa sessizce başarılı dön.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    reply(200, ['ok' => true]);
}

$clean = static fn(string $k, int $max): string =>
    mb_substr(trim(preg_replace('/\s+/u', ' ', (string)($_POST[$k] ?? '')) ?? ''), 0, $max);

$name = $clean('name', 120);
$email = mb_substr(trim((string)($_POST['email'] ?? '')), 0, 190);
$company = $clean('company', 160);
$message = mb_substr(trim((string)($_POST['message'] ?? '')), 0, 4000);

$errors = [];
if (mb_strlen($name) < 2) $errors['name'] = $t['name'];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = $t['email'];
if (mb_strlen($message) < 10) $errors['message'] = $t['message'];
if ($errors) reply(422, ['ok' => false, 'errors' => $errors]);

$ip = (string)($_SERVER['REMOTE_ADDR'] ?? '');
$ua = mb_substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255);

try {
    $cfg = require dirname(__DIR__, 2) . '/.optona/db.php';
    $db = new PDO($cfg['dsn'], $cfg['user'], $cfg['pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    $db->exec("CREATE TABLE IF NOT EXISTS contact_requests (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(190) NOT NULL,
        company VARCHAR(160) NULL,
        message TEXT NOT NULL,
        lang CHAR(2) NOT NULL DEFAULT 'tr',
        ip VARCHAR(45) NULL,
        user_agent VARCHAR(255) NULL,
        status ENUM('yeni','okundu','yanitlandi') NOT NULL DEFAULT 'yeni',
        INDEX (created_at),
        INDEX (ip, created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");

    $q = $db->prepare('SELECT COUNT(*) FROM contact_requests WHERE ip = ? AND created_at > NOW() - INTERVAL 1 HOUR');
    $q->execute([$ip]);
    if ((int)$q->fetchColumn() >= 5) reply(429, ['ok' => false, 'error' => $t['rate']]);

    $ins = $db->prepare('INSERT INTO contact_requests (name, email, company, message, lang, ip, user_agent) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $ins->execute([$name, $email, $company !== '' ? $company : null, $message, $lang, $ip, $ua]);
    $id = (int)$db->lastInsertId();

    notify($id, $name, $email, $company, $message, $lang);

    reply(200, ['ok' => true]);
} catch (Throwable $e) {
    error_log('optona contact: ' . $e->getMessage());
    reply(500, ['ok' => false, 'error' => $t['server']]);
}
