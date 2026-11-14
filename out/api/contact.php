<?php
// optona.tr iletişim formu: talebi MySQL'e kaydeder.
// Bağlantı ayarları web kökünün dışında: ~/.optona/db.php ve ~/.optona/smtp.php

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

// Yeni talep bildirimi: Kurumsal E-posta SMTP'si (info@optona.tr) ile gönderilir.
// Sunucuda mail() kapalı. Ayar ve şifre: ~/.optona/smtp.php (repoda yok).
// Gönderilemezse talep yine kayıtlıdır; hata log'a yazılır.
function notify(int $id, string $name, string $email, string $phone, string $company, string $message, string $lang): void
{
    $file = dirname(__DIR__, 2) . '/.optona/smtp.php';
    $cfg = is_file($file) ? require $file : [];
    if (empty($cfg['pass'])) {
        error_log("optona contact: SMTP sifresi ~/.optona/smtp.php icinde yok, bildirim gonderilmedi (#$id)");
        return;
    }
    $user = $cfg['user'] ?? 'info@optona.tr';
    $to = $cfg['to'] ?? $user;

    $body = implode("\r\n", [
        "optona.tr iletişim formundan yeni talep (#$id)",
        '',
        "Ad soyad : $name",
        'E-posta  : ' . ($email !== '' ? $email : '-'),
        'Telefon  : ' . ($phone !== '' ? $phone : '-'),
        'Şirket   : ' . ($company !== '' ? $company : '-'),
        'Dil      : ' . strtoupper($lang),
        'Tarih    : ' . date('Y-m-d H:i'),
        '',
        'Mesaj:',
        str_replace(["\r\n", "\r"], "\n", $message),
        '',
        '--',
        $email !== '' ? 'Bu e-postayı yanıtlarsanız yanıt doğrudan talep sahibine gider.' : 'Talep sahibi e-posta bırakmadı, telefonla dönün.',
        "Kayıt: phpMyAdmin > u1969788_optona > contact_requests (id $id)",
    ]);
    $enc = static fn(string $t): string => '=?UTF-8?B?' . base64_encode($t) . '?=';
    $data = implode("\r\n", [
        'Date: ' . date('r'),
        'From: ' . $enc('Optona Site') . " <$user>",
        "To: <$to>",
        ...($email !== '' ? ["Reply-To: $email"] : []),
        'Subject: ' . $enc("Yeni talep #$id: $name"),
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@optona.tr>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        rtrim(chunk_split(base64_encode($body), 76, "\r\n")),
    ]);

    smtp_send($cfg['host'] ?? 'mail.kurumsaleposta.com', (int)($cfg['port'] ?? 465), $user, (string)$cfg['pass'], $user, $to, $data);
}

// Basit SMTP istemcisi (SSL, AUTH LOGIN). Hata olursa istisna fırlatır.
function smtp_send(string $host, int $port, string $user, string $pass, string $from, string $to, string $data): void
{
    $s = @stream_socket_client("ssl://$host:$port", $errno, $errstr, 10);
    if (!$s) throw new RuntimeException("SMTP baglanti hatasi: $errstr");
    stream_set_timeout($s, 15);
    $read = static function () use ($s): string {
        $out = '';
        while (($line = fgets($s, 1024)) !== false) {
            $out .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return $out;
    };
    $cmd = static function (?string $line, int $expect) use ($s, $read): void {
        if ($line !== null) fwrite($s, $line . "\r\n");
        $r = $read();
        if ((int)substr($r, 0, 3) !== $expect) {
            throw new RuntimeException('SMTP beklenmeyen yanit: ' . trim($r));
        }
    };
    try {
        $cmd(null, 220);
        $cmd('EHLO optona.tr', 250);
        $cmd('AUTH LOGIN', 334);
        $cmd(base64_encode($user), 334);
        $cmd(base64_encode($pass), 235);
        $cmd("MAIL FROM:<$from>", 250);
        $cmd("RCPT TO:<$to>", 250);
        $cmd('DATA', 354);
        $cmd(preg_replace('/^\./m', '..', $data) . "\r\n.", 250);
        fwrite($s, "QUIT\r\n");
    } finally {
        fclose($s);
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    reply(405, ['ok' => false]);
}

$lang = ($_POST['lang'] ?? 'tr') === 'en' ? 'en' : 'tr';
$t = $lang === 'en'
    ? ['name' => 'Write your name.', 'email' => 'Write a valid email address.', 'phone' => 'Write a valid phone number.', 'contact' => 'Leave an email address or a phone number.', 'message' => 'Describe the task in at least a few words.', 'rate' => 'Too many requests. Please try again later.', 'server' => 'Could not save your request. Please email info@optona.tr.']
    : ['name' => 'Adınızı yazın.', 'email' => 'Geçerli bir e-posta adresi yazın.', 'phone' => 'Geçerli bir telefon numarası yazın.', 'contact' => 'E-posta veya telefon numaranızı yazın.', 'message' => 'İşi birkaç kelimeyle de olsa anlatın.', 'rate' => 'Çok fazla deneme yapıldı. Biraz sonra tekrar deneyin.', 'server' => 'Talebiniz kaydedilemedi. Lütfen info@optona.tr adresine yazın.'];

// Bot tuzağı: görünmeyen alan doluysa sessizce başarılı dön.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    reply(200, ['ok' => true]);
}

$clean = static fn(string $k, int $max): string =>
    mb_substr(trim(preg_replace('/\s+/u', ' ', (string)($_POST[$k] ?? '')) ?? ''), 0, $max);

$name = $clean('name', 120);
$email = mb_substr(trim((string)($_POST['email'] ?? '')), 0, 190);
$phone = $clean('phone', 40);
$company = $clean('company', 160);
$message = mb_substr(trim((string)($_POST['message'] ?? '')), 0, 4000);

$errors = [];
if (mb_strlen($name) < 2) $errors['name'] = $t['name'];
$phoneDigits = preg_replace('/\D+/', '', $phone) ?? '';
if ($email === '' && $phone === '') {
    $errors['email'] = $t['contact'];
} else {
    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = $t['email'];
    if ($phone !== '' && (strlen($phoneDigits) < 10 || strlen($phoneDigits) > 15 || !preg_match('/^[+0-9 ()\-.]+$/', $phone))) $errors['phone'] = $t['phone'];
}
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
        email VARCHAR(190) NULL,
        phone VARCHAR(40) NULL,
        company VARCHAR(160) NULL,
        message TEXT NOT NULL,
        lang CHAR(2) NOT NULL DEFAULT 'tr',
        ip VARCHAR(45) NULL,
        user_agent VARCHAR(255) NULL,
        status ENUM('yeni','okundu','yanitlandi') NOT NULL DEFAULT 'yeni',
        INDEX (created_at),
        INDEX (ip, created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");

    // Eski tabloyu güncelle: telefon sütunu, e-posta isteğe bağlı
    $cols = $db->query("SHOW COLUMNS FROM contact_requests")->fetchAll(PDO::FETCH_COLUMN);
    if (!in_array('phone', $cols, true)) {
        $db->exec('ALTER TABLE contact_requests ADD COLUMN phone VARCHAR(40) NULL AFTER email, MODIFY email VARCHAR(190) NULL');
    }

    $q = $db->prepare('SELECT COUNT(*) FROM contact_requests WHERE ip = ? AND created_at > NOW() - INTERVAL 1 HOUR');
    $q->execute([$ip]);
    if ((int)$q->fetchColumn() >= 5) reply(429, ['ok' => false, 'error' => $t['rate']]);

    $ins = $db->prepare('INSERT INTO contact_requests (name, email, phone, company, message, lang, ip, user_agent) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    $ins->execute([$name, $email !== '' ? $email : null, $phone !== '' ? $phone : null, $company !== '' ? $company : null, $message, $lang, $ip, $ua]);
    $id = (int)$db->lastInsertId();

    // Bildirim hatası talebi asla bozmasın
    try {
        notify($id, $name, $email, $phone, $company, $message, $lang);
    } catch (Throwable $e) {
        error_log('optona contact bildirim: ' . $e->getMessage());
    }

    reply(200, ['ok' => true]);
} catch (Throwable $e) {
    error_log('optona contact: ' . $e->getMessage());
    reply(500, ['ok' => false, 'error' => $t['server']]);
}
