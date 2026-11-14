# Yayına alma

Site statik export'tur (`out/`). Natro sunucusunda bir cron her 5 dakikada bu repoyu
`/home/u1969788/repositories/optona.tr` klasörüne çeker; `main` değiştiyse `out/` içeriğini
`/home/u1969788/optona.tr/` klasörüne kopyalar.

Yani değişiklik yapınca:

```bash
npm run build
git add -A && git commit -m "..." && git push
```

En geç 5 dakika içinde optona.tr güncellenir. `out/` commit edilmezse site değişmez.
Sunucudan silinmesi gereken eski dosyalar otomatik silinmez.
