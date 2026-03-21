# Optona Türkiye (optona.tr)

Optona Türkiye web sitesi Next.js (App Router) ile gelistirilmistir.

## Kurulum
1. Node.js 20+ kurulu oldugundan emin olun.
2. Bagimliliklari yukleyin:

```bash
npm install
```

## Gelistirme

```bash
npm run dev
```

Uygulama varsayilan olarak `http://localhost:3000` adresinde calisir.

## Uretim

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Kullanilan Teknolojiler
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Proje Yapisi
- `src/app/layout.tsx`: Koku layout.
- `src/app/page.tsx`: Ana sayfa (`/`).
- `src/app/services/page.tsx`: Hizmetler (`/services`).
- `src/app/solutions/page.tsx`: Cozumler (`/solutions`).
- `src/app/industries/page.tsx`: Sektorler (`/industries`).
- `src/app/success-stories/page.tsx`: Basari hikayeleri (`/success-stories`).
- `src/app/about/page.tsx`: Hakkimizda (`/about`).
- `src/app/contact/page.tsx`: Iletisim (`/contact`).
- `src/components/*`: Ortak UI ve layout bilesenleri.
- `src/lib/site-data.ts`: Sayfa icerikleri ve link verileri.

## Notlar
- Eski statik dosya yapisi (`index.html`, `style.css`, `script.js`) kaldirilmistir.
- Eski Turkce URL'ler `next.config.ts` icindeki redirect kurallariyla yeni İngilizce route'lara yonlendirilir.
