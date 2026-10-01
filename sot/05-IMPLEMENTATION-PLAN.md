# BionoraDev — Rencana Implementasi (Implementation Plan)

## 0. Aturan Eksekusi
Implementasikan dalam potongan vertikal (vertical slices) kecil. Setelah setiap fase:
1. jalankan pemeriksaan terkait
2. periksa perilaku responsif
3. pertahankan kebutuhan yang ada
4. hindari dependensi spekulatif

Urutan sumber kebenaran (SOT):
1. PRD
2. USER FLOW
3. UI-GUIDELINE
4. API-SPEC
5. rencana implementasi ini

## 1. Struktur Proyek yang Diusulkan

```text
bionoradev/
├─ public/
│  ├─ favicon.*
│  └─ ...
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ navigation/
│  │  ├─ sections/
│  │  └─ ui/
│  ├─ config/
│  │  └─ siteConfig.js
│  ├─ data/
│  │  ├─ portfolio.js
│  │  ├─ pricing.js
│  │  └─ faq.js
│  ├─ hooks/
│  │  ├─ useTheme.js
│  │  ├─ useLocale.js
│  │  └─ useReveal.js
│  ├─ lib/
│  │  ├─ whatsapp.js
│  │  └─ utils.js
│  ├─ i18n/
│  │  └─ messages.js
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
└─ ...
```

Sesuaikan path dengan versi Tailwind yang terpasang. Jangan memperkenalkan lapisan arsitektur tambahan tanpa alasan yang jelas.

## 2. Fase 1 — Fondasi
Hasil yang diserahkan:
- React + Vite
- Tailwind CSS
- Lucide React
- variabel CSS global / token semantik
- tipografi dasar & konfigurasi font `Orbitron` Bold (700) khusus teks brand "BionoraDev" dan judul brand
- app shell
- `siteConfig`
- state i18n
- state tema
- komponen primitif bersama (button/card/container)

Pemeriksaan:
- dev server berjalan
- production build berhasil
- tidak ada console error

## 3. Fase 2 — Navigasi + Hero
Bangun:
- navbar sticky
- navigasi desktop
- drawer mobile
- pengalih bahasa
- toggle tema
- CTA WhatsApp
- teks hero
- mockup UI hero
- poin kapabilitas

Kriteria Penerimaan:
- menu mobile berfungsi
- CTA membuka pesan WhatsApp sesuai bahasa yang aktif
- tata letak hero tidak meluap (overflow) pada lebar 360px

## 4. Fase 3 — Konten Inti
Bangun:
- capability bar
- layanan (services)
- solusi (solutions)
- proses (process)
- mengapa BionoraDev (why BionoraDev)
- teknologi (technology)

Gunakan array berbasis data untuk kartu-kartu yang berulang.

## 5. Fase 4 — Konten Konversi
Bangun:
- filter portofolio
- harga (pricing)
- placeholder testimoni
- FAQ
- CTA akhir
- floating WhatsApp

Kriteria Penerimaan:
- state filter terprediksi
- interaksi keyboard FAQ berfungsi
- harga tetap terlihat jelas dapat diedit
- placeholder testimoni jujur

## 6. Fase 5 — Gerakan & Pemolesan (Motion + Polish)
Tambahkan:
- reveal berbasis Intersection Observer
- mikro-interaksi hover/focus
- animasi visual hero yang halus
- penanganan reduced-motion
- perilaku scroll
- transisi permukaan sticky-nav jika berguna

Jangan menambahkan animasi sebelum tata letak statis sudah benar.

## 7. Fase 6 — SEO + Aksesibilitas
Implementasikan:
- title
- meta description
- metadata OG
- heading semantik
- alt text
- focus states
- atribut aria
- reduced motion
- keamanan tautan eksternal

Jalankan:
- navigasi khusus keyboard
- pemeriksaan viewport mobile
- pemeriksaan manual gaya Lighthouse

## 8. Fase 7 — Matriks QA

### Fungsional
- [ ] anchor navbar
- [ ] menu mobile
- [ ] pergantian bahasa
- [ ] pergantian tema
- [ ] persistensi tema
- [ ] persistensi bahasa
- [ ] tautan WhatsApp
- [ ] filter portofolio
- [ ] akordeon FAQ
- [ ] floating CTA

### Responsif
- [ ] 360px
- [ ] 390px
- [ ] 430px
- [ ] 768px
- [ ] 1024px
- [ ] 1280px
- [ ] layar desktop lebar

### Aksesibilitas
- [ ] navigasi keyboard
- [ ] fokus yang terlihat jelas
- [ ] landmark semantik
- [ ] urutan heading
- [ ] semantik button/link
- [ ] aria-expanded
- [ ] reduced motion
- [ ] kontras warna

### Integritas Konten
- [ ] tidak ada lorem ipsum
- [ ] tidak ada testimoni palsu
- [ ] tidak ada klaim klien palsu
- [ ] label konsep/demo terlihat
- [ ] harga placeholder terlihat jelas dapat diedit
- [ ] semua string ID/EN tersedia

### Build
- [ ] `npm run build`
- [ ] pratinjau produksi (production preview)
- [ ] tidak ada path aset yang rusak
- [ ] tidak ada error konsol kritis

## 9. Anggaran Performa — Target Praktis v1
Ini adalah target teknis rekayasa, bukan klaim bisnis:
- jaga jumlah dependensi seminimal mungkin
- hindari library UI yang berat
- lazy-load aset visual di bawah layar (below-the-fold)
- hindari aset raster yang belum dioptimalkan jika SVG/CSS sudah memadai
- cegah layout shift dengan menentukan rasio aspek gambar
- hindari loop animasi yang berjalan terus-menerus kecuali dekorasi hero yang sangat halus

## 10. Penerapan (Deployment)
Target:
**Deployment statis Vercel**

Ekspektasi:
- `npm run build`
- keluaran (output) dari `dist/` Vite
- tidak memerlukan server runtime

Jika rute SPA ditambahkan nantinya, konfigurasikan rewrite Vercel sebagaimana mestinya. Untuk v1 yang hanya memiliki rute `/`, tidak diperlukan konfigurasi rewrite.

## 11. Definisi Selesai (Definition of Done)
Sebuah fase dianggap selesai hanya jika:
- kebutuhan telah diimplementasikan
- tampilan desktop + mobile telah diperiksa
- tidak ada masalah aksesibilitas kritis yang diketahui
- tidak ada konten palsu yang dimasukkan
- file source-of-truth terkait tetap konsisten
- build tetap sukses (hijau)

## 12. Manajemen Perubahan (Change Control)
Ketika ada kebutuhan baru yang bertentangan dengan SOT:
1. identifikasi pertentangannya
2. jangan mengubah arsitektur secara diam-diam
3. perbarui bagian SOT terkait terlebih dahulu
4. kemudian lakukan implementasi

Ketika ada kebutuhan yang ambigu:
- pilih implementasi terkecil yang memenuhi intensi terdokumentasi
- jaga data/konfigurasi agar tetap dapat diedit
- hindari penambahan fungsi backend

## 13. Urutan Commit yang Disarankan
```text
chore: initialize bionoradev vite app
feat: add theme and localization foundation
feat: add navbar and hero
feat: add services solutions and process
feat: add portfolio pricing and faq
feat: add whatsapp conversion flow
feat: add responsive polish and motion
feat: add seo and accessibility
chore: prepare vercel deployment
```