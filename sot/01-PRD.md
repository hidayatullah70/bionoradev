# BionoraDev — Dokumen Kebutuhan Produk (PRD)

## 0. Kontrol Dokumen
- Produk: Website Company Profile & Perolehan Prospek (Lead Generation) BionoraDev
- Posisi Pasar: **Digital Solutions for Growing Businesses**
- Pasar Utama: UMKM, bisnis kecil, startup tahap awal, kebutuhan website bisnis, kebutuhan sistem web internal/dashboard
- Model Pengiriman: Website statis React/Vite, siap di-deploy ke Vercel
- Bahasa: Bahasa Indonesia (`id`), English (`en`)
- Tema: Light / Dark / System
- Backend: Tidak ada
- Database: Tidak ada
- Konversi Utama: Percakapan WhatsApp
- Sumber Kebenaran (SOT): Kumpulan SOT ini; implementasi tidak boleh membuat kebutuhan di luar dokumen ini tanpa persetujuan eksplisit.

## 1. Tujuan Produk
Membangun website company profile yang modern, premium, dan mudah didekati yang:
1. Menjelaskan layanan BionoraDev dengan jelas.
2. Mendemonstrasikan portofolio/karya konsep tanpa klaim klien palsu.
3. Menjelaskan harga indikatif tanpa berpura-pura bahwa harga placeholder tersebut bersifat final.
4. Menghasilkan prospek berkualitas melalui WhatsApp.
5. Membangun kepercayaan melalui proses, kapabilitas, teknologi, transparansi, dan UX yang jelas.
6. Berfungsi sama baiknya di perangkat mobile maupun desktop.
7. Mendukung mode ID/EN serta light/dark tanpa menduplikasi struktur halaman.

## 2. Pesan Utama (Core Message)
**Headline EN:** Build Your Business. Build Your Digital Presence.  
**Headline ID:** Bangun Bisnis Anda. Bangun Kehadiran Digital Anda.

**Copy pendukung EN:** We create modern websites, web applications, and business dashboards designed to help growing businesses operate, connect, and grow.  
**Copy pendukung ID:** Kami membuat website modern, aplikasi web, dan dashboard bisnis yang dirancang untuk membantu bisnis berkembang, beroperasi lebih efektif, dan terhubung dengan pelanggan.

Tagline pendukung:
**Landing Pages • Websites • Web Applications • Business Dashboards**

## 3. Kriteria Keberhasilan
Situs dianggap lengkap secara produk apabila:
- Semua bagian yang dibutuhkan tersedia dan dapat diakses dari navigasi.
- Setiap jalur pengguna yang diperlukan berfungsi di mobile dan desktop.
- Pergantian ID/EN mengubah semua teks tampilan pengguna, label, konten FAQ, dan pesan CTA.
- Tema tersimpan persisten dan mengikuti preferensi sistem pada kunjungan pertama.
- Semua CTA WhatsApp menggunakan satu konfigurasi global.
- Item portofolio secara jelas mengidentifikasi karya konsep/demo jika berlaku.
- Tidak ada testimoni palsu, logo klien fiktif, klaim performa yang dikarang, penghargaan, atau peringkat yang disajikan sebagai fakta.
- Placeholder harga tetap terlihat jelas dapat diedit dan tidak direpresentasikan sebagai harga final.
- Tidak ada interaksi kritis yang bergantung pada hover.
- Fokus keyboard terlihat jelas dan HTML semantik digunakan.
- Proses build lolos pemeriksaan production build dan siap untuk deployment Vercel.

## 4. Arsitektur Informasi
Situs pemasaran satu halaman (single-page) dengan bagian-bagian ber-anchor:
1. Navbar
2. Hero
3. Capability Bar
4. Layanan / Yang Kami Bangun (Services / What We Build)
5. Solusi (Solutions)
6. Portofolio / Karya Terpilih (Portfolio / Selected Work)
7. Proses (Process)
8. Harga (Pricing)
9. Mengapa BionoraDev (Why BionoraDev)
10. Teknologi (Technology)
11. Placeholder Testimoni (Testimonials)
12. FAQ
13. CTA Akhir (Final CTA)
14. Footer

Rute yang disarankan:
- `/` — halaman company profile utama
- Dukungan rute masa depan opsional melalui React Router, namun jangan membuat rute yang tidak perlu untuk v1.

## 5. Kebutuhan Fungsional

### FR-01 Navigasi
- Navbar sticky.
- Navigasi horizontal untuk desktop.
- Menu hamburger mobile dengan manajemen fokus dan perilaku penutupan yang baik.
- Anchor tautan: Layanan (Services), Solusi (Solutions), Portofolio (Portfolio), Harga (Pricing), Tentang (About), FAQ.
- "Tentang" dapat mengarah ke bagian Mengapa BionoraDev pada v1.
- CTA WhatsApp tetap terlihat di header desktop dan dapat diakses di menu mobile.

### FR-02 Hero
Wajib memuat:
- headline
- subheadline bilingual
- CTA utama: Start Your Project / Mulai Proyek Anda →
- CTA sekunder: View Portfolio / Lihat Portofolio
- poin kapabilitas:
  - Mobile Responsive
  - WhatsApp Integration
  - Modern UI/UX
  - Fast & Secure
- visual sisi kanan menggunakan mockup website/dashboard, kartu UI mengambang, serta grid/glow halus.
- Tidak menggunakan fotografi stok manusia sebagai visual fokus utama.

### FR-03 Layanan (Services)
Empat kartu layanan:
1. Landing Page
2. Business Website
3. Web Application
4. Web Dashboard

Setiap kartu memuat nomor, ikon, judul, deskripsi, daftar fitur, efek hover/focus, dan CTA.

### FR-04 Solusi (Solutions)
Lima kartu solusi:
1. Mulai Bisnis Anda Secara Online (Start Your Business Online)
2. Dapatkan Lebih Banyak Pertanyaan Pelanggan (Get More Customer Inquiries)
3. Kelola Bisnis Anda Lebih Baik (Manage Your Business Better)
4. Otomatiskan Alur Kerja Anda (Automate Your Workflow)
5. Bangun Merek Digital Anda (Build Your Digital Brand)

Menyajikan hubungan masalah → solusi digital.

### FR-05 Portofolio
Filter yang dibutuhkan:
- Semua (All)
- Landing Page
- Website
- Web App
- Dashboard

Item konsep/demo awal:
- LaundryKu — Laundry — Landing Page
- Catering Nusantara — Catering — Business Website
- Workforce Dashboard — Outsourcing — Web Dashboard
- InventoryPro — Retail — Web Application

Setiap item: pratinjau/mockup, nama, industri, tipe, deskripsi singkat, teknologi, tombol View Project, dan label eksplisit Concept Project / Demo Project jika bukan proyek klien nyata.

### FR-06 Proses
Lima tahapan:
1. Diskusi (Discuss)
2. Rencana (Plan)
3. Desain (Design)
4. Pengembangan (Develop)
5. Peluncuran (Launch)

Desktop: timeline horizontal. Mobile: timeline vertikal.

### FR-07 Harga (Pricing)
Tiga paket:
- STARTER — Landing Page — “Mulai dari Rp XXX.XXX” / “Starting from Rp XXX.XXX”
- BUSINESS — Business Website — “Mulai dari Rp X.XXX.XXX” / “Starting from Rp X.XXX.XXX”
- CUSTOM — Web Application / Dashboard — “Mari Berdiskusi” / “Let’s Discuss”

Nilai harga adalah placeholder dan harus dapat dikonfigurasi dari satu sumber data tunggal.

### FR-08 Kepercayaan / Mengapa BionoraDev (Why BionoraDev)
Lima kartu:
- Berorientasi Bisnis (Business First)
- Modern & Responsif (Modern & Responsive)
- Sederhana & Efektif (Simple & Effective)
- Terukur & Skalabel (Scalable)
- Komunikasi Langsung (Direct Communication)

Jangan menggunakan klaim "terbaik", "nomor satu", "termurah", "pasti sukses", atau klaim tanpa bukti lainnya.

### FR-09 Teknologi
Lencana (Badges):
- React
- Vite
- Tailwind CSS
- JavaScript
- Cloudflare
- GitHub

Copy pendukung:
“Kami menggunakan teknologi web modern untuk membangun produk digital yang cepat, mudah dirawat, dan terukur.” / “We use modern web technologies to build fast, maintainable and scalable digital products.”

### FR-10 Testimoni
Tampilkan placeholder yang ditandai dengan jelas:
“Testimoni klien akan muncul di sini.” / “Client testimonials will appear here.”

Jangan mengarang nama, perusahaan, rating, kutipan, atau hasil pencapaian.

### FR-11 FAQ
Daftar Pertanyaan:
1. Apakah BionoraDev melayani UMKM?
2. Apakah bisa membuat landing page saja?
3. Apakah website bisa terhubung ke WhatsApp?
4. Apakah website responsive?
5. Apakah bisa menggunakan domain sendiri?
6. Apakah bisa dibuatkan dashboard?
7. Apakah bisa dibuatkan sistem khusus?
8. Berapa lama pengerjaannya?

Setiap pertanyaan wajib memiliki jawaban dalam bahasa ID dan EN.

### FR-12 CTA Akhir (Final CTA)
Judul:
- EN: Ready to Take Your Business Online?
- ID: Siap Membawa Bisnis Anda ke Dunia Digital?

Deskripsi:
“Ceritakan apa yang sedang Anda bangun. Kami akan membantu mengubah ide Anda menjadi pengalaman digital.” / “Tell us what you're building. We'll help turn your idea into a digital experience.”

Aksi utama: Memulai Percakapan di WhatsApp (Start a Conversation on WhatsApp).

### FR-13 WhatsApp
Satu konfigurasi global:
- `WHATSAPP_NUMBER`: placeholder `6281384224733`
- Pesan default EN: `Hello BionoraDev, I would like to discuss a website project.`
- Pesan default ID: `Halo BionoraDev, saya ingin berdiskusi mengenai kebutuhan website untuk bisnis saya.`

Semua tautan CTA harus dibuat melalui satu utilitas tunggal. Nomor dan pesan tidak boleh di-hardcode di berbagai komponen.

### FR-14 Tema (Theme)
Mode:
- Light
- Dark
- System

Mode awal mengikuti preferensi sistem. Pilihan manual disimpan secara lokal. Komponen harus digerakkan oleh token desain semantik.

### FR-15 Lokalisasi (Localization)
Gunakan satu struktur kamus/objek terjemahan daripada menduplikasi pohon halaman (page tree). State bahasa harus terpusat dan mudah diperluas.

## 6. Kebutuhan Non-Fungsional

### Performa
- Hindari video latar belakang berukuran besar.
- Lazy-load aset visual portofolio non-kritis.
- Utamakan bentuk CSS/mockup UI atau aset lokal yang teroptimasi dibanding gambar stok yang berat.
- Jaga agar animasi tetap GPU-friendly dan berdurasi singkat.
- Hindari dependensi yang tidak diperlukan.

### Aksesibilitas
Target intensi WCAG 2.2 AA:
- landmark semantik
- navigasi keyboard
- fokus yang terlihat jelas
- kontras warna memadai
- label tombol yang jelas
- aria-expanded/aria-controls untuk menu mobile dan FAQ
- dukungan reduced-motion via `prefers-reduced-motion`
- visual dekoratif ditandai dengan tepat

### SEO
- Satu `<h1>` yang bermakna.
- Heading bagian yang semantik.
- Judul (title) dan deskripsi meta yang unik.
- Metadata Open Graph.
- alt text deskriptif untuk gambar yang bermakna.
- placeholder/konfigurasi canonical URL.
- JSON-LD Organization/LocalBusiness hanya jika data bisnis faktual tersedia; jangan mengarang alamat, rating, atau data legal.

### Kemudahan Perawatan (Maintainability)
- Bagian berulang berbasis data (data-driven).
- Primitif UI bersama.
- Konfigurasi terpusat.
- Tidak ada duplikasi logika WhatsApp/tema/i18n.
- Hindari abstraksi prematur.

## 7. Keamanan Konten / Kejujuran Informasi
Website wajib membedakan:
- karya klien nyata vs karya konsep/demo
- harga final vs placeholder yang dapat diedit
- testimoni nyata vs placeholder
- penggunaan teknologi faktual vs teknologi terencana/masa depan

Tidak boleh ada social proof yang direkayasa.

## 8. Di Luar Cakupan v1 (Out of Scope)
- Server backend / API
- Database
- CMS
- Autentikasi
- Dashboard admin untuk BionoraDev
- Checkout online
- Payment gateway
- Blog CMS
- Portal klien
- Obrolan real-time (live chat)
- Implementasi platform analitik selain hook siap-skrip opsional
- Backend pengiriman formulir

## 9. Daftar Periksa Penerimaan (Acceptance Checklist)
- [ ] Tata letak responsif 360px–desktop
- [ ] Navbar sticky + drawer mobile
- [ ] Pengalih ID/EN berfungsi secara global
- [ ] Light/Dark/System berfungsi dan tersimpan persisten
- [ ] Semua anchor navigasi menggulir dengan benar
- [ ] Utilitas WhatsApp menghasilkan link ter-encode
- [ ] Tombol floating WhatsApp aksesibel dan tidak menghalangi konten
- [ ] Filter portofolio berfungsi
- [ ] Akordeon FAQ dapat dioperasikan dengan keyboard
- [ ] Perilaku reduced-motion tersedia
- [ ] Harga/testimoni placeholder terlihat jelas sebagai placeholder
- [ ] Tidak ada klaim klien palsu
- [ ] Metadata SEO tersedia
- [ ] `npm run build` berhasil
- [ ] Siap deployment statis ke Vercel