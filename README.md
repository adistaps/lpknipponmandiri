# LPK Nippon Mandiri — Website

Landing page + 3 halaman konten untuk **LPK Nippon Mandiri** (kerja ke Jepang mandiri lewat jalur resmi Tokutei Ginou). Dikonversi dari template `adistaps/ramahtour` (Next.js 16, React 19, Tailwind v4).

## Menjalankan Secara Lokal

Prasyarat: Node.js 18+ dan pnpm (atau npm).

```bash
pnpm install   # atau: npm install
pnpm dev       # atau: npm run dev
```

Buka `http://localhost:3000`. Build produksi: `pnpm build && pnpm start`.

## Struktur Halaman

| Route | Isi |
|---|---|
| `/` | Hero, Sektor, Keuntungan & Persyaratan, Tentang pendiri, Keunggulan, Alur 5 tahap, Mulai dari sini (3 CTA), FAQ, Checklist dokumen |
| `/cara-mandiri` | Panduan 6 tahap berangkat mandiri |
| `/bidang-pekerjaan` | 11 sektor Tokutei Ginou |
| `/blog` | Placeholder "Segera hadir" |

## Cara Update Konten

| Yang Ingin Diubah | File |
|---|---|
| Nama, domain, nomor WhatsApp, pesan WA default | `src/lib/site.ts` |
| Keuntungan, persyaratan (usia 18–35), alur 5 tahap, daftar sektor, isi artikel mandiri, checklist | `src/lib/content.ts` |
| Hero | `src/components/sections/Hero.tsx` |
| Profil & kutipan pendiri | `src/components/sections/Founder.tsx` |
| FAQ | `src/components/sections/FAQ.tsx` (array `faqs`) |
| Menu navigasi | `src/components/sections/Navbar.tsx` (array `links`) |
| SEO, JSON-LD | `src/app/layout.tsx`, `robots.ts`, `sitemap.ts` |

## Aset (belum diganti)

Foto dan logo masih memakai file bawaan template di `public/` (`logo.webp`, `icon.webp`, `1.webp`–`16.webp`). Timpa dengan nama file yang sama untuk mengganti. Foto pendiri ada di `public/11.webp`.

## Yang Perlu Diganti Sebelum Live

- `SITE_URL` dan `WA_NUMBER` di `src/lib/site.ts` (masih placeholder).
- Foto, logo, dan favicon.
- Verifikasi isi artikel ke sumber resmi (aturan Tokutei Ginou bisa berubah).
