# BionoraDev — Alur Pengguna (User Flow)

## 0. Prinsip Alur
- Konversi utama: percakapan WhatsApp.
- Konversi sekunder: eksplorasi portofolio.
- Penjelajahan harus mengikuti satu jalur gulir dari nilai (value) → layanan → bukti (proof) → proses → harga → CTA.
- Tanpa pendaftaran paksa atau formulir pembatas.
- Semua alur harus mendukung mode ID/EN dan light/dark.

## 1. Alur Masuk Global (Global Entry Flow)

```text
Landing
  ↓
Hero
  ├─ Start Your Project → WhatsApp
  └─ View Portfolio → Portofolio
        ↓
Layanan → Solusi → Portofolio → Proses → Harga
        ↓
Mengapa BionoraDev → Teknologi → Testimoni → FAQ
        ↓
CTA Akhir → WhatsApp
        ↓
Percakapan di luar website
```

## 2. Alur Prospek Utama — WhatsApp

### Titik Pemicu (Trigger Points)
1. Navbar “WhatsApp Us” / “Hubungi WhatsApp”
2. Hero “Start Your Project” / “Mulai Proyek Anda”
3. CTA pada kartu layanan
4. CTA pada kartu harga
5. CTA akhir
6. Tombol floating WhatsApp

### Perilaku
```text
Pengguna menekan CTA WhatsApp
  ↓
Baca bahasa aktif saat ini
  ↓
Pilih pesan default sesuai bahasa
  ↓
Bentuk URL wa.me yang di-encode dari nomor global
  ↓
Buka WhatsApp
  ↓
Pengguna melanjutkan percakapan di luar website
```

### Aturan
- Jangan pernah mengekspos atau menduplikasi nomor telepon di dalam file komponen.
- Salinan teks CTA berubah sesuai bahasa.
- Pembuatan tautan ditangani oleh satu utilitas tunggal.
- Tautan eksternal harus aman dan aksesibel.

## 3. Alur Penemuan Layanan (Discovery Flow)

```text
Hero
  ↓
Capability Bar
  ↓
Yang Kami Bangun (What We Build)
  ↓
Pengguna mengidentifikasi layanan
  ├─ Landing Page
  ├─ Business Website
  ├─ Web Application
  └─ Web Dashboard
        ↓
CTA Layanan → WhatsApp
```

## 4. Alur Kesesuaian Solusi (Solution Fit Flow)

```text
Solusi (Solutions)
  ↓
Pengguna mengenali masalah bisnisnya
  ↓
Penjelasan Masalah → Solusi
  ↓
Layanan terkait / CTA
  ↓
WhatsApp
```

## 5. Alur Portofolio

```text
Portofolio
  ↓
Filter: Semua / Landing Page / Website / Web App / Dashboard
  ↓
Pilih kartu proyek
  ↓
Tampilan detail proyek / tautan demo eksternal jika tersedia
  ↓
Lihat Proyek (View Project)
  ↓
CTA Opsional → WhatsApp
```

Jika URL proyek nyata tidak tersedia, jangan membuat tautan tujuan palsu. Tampilkan "Concept Project" atau "Demo Project" dan jaga agar interaksi tidak menipu pengguna.

## 6. Alur Harga (Pricing Flow)

```text
Harga (Pricing)
  ↓
Starter / Business / Custom
  ↓
Membaca cakupan + fitur
  ↓
CTA
  ├─ Starter → WhatsApp dengan konteks paket starter
  ├─ Business → WhatsApp dengan konteks paket business
  └─ Custom → WhatsApp dengan konteks paket proyek custom
```

Informasi harga bersifat indikatif; cakupan dan harga final didiskusikan melalui WhatsApp.

## 7. Alur FAQ

```text
FAQ
  ↓
Buka pertanyaan
  ↓
Baca jawaban
  ↓
Tutup / buka pertanyaan lain
  ↓
CTA WhatsApp Opsional
```

Hanya satu atau beberapa item yang boleh terbuka tergantung pada pola akordeon yang dipilih; pola mana pun yang diimplementasikan harus dapat diakses melalui keyboard dan konsisten.

## 8. Alur Tema (Theme Flow)

```text
Kunjungan pertama
  ↓
Periksa preferensi tersimpan
  ├─ ada → gunakan preferensi tersebut
  └─ tidak ada → gunakan preferensi sistem
  ↓
Pengguna mengubah tema
  ↓
Terapkan token tema semantik
  ↓
Simpan preferensi secara lokal (persist)
```

## 9. Alur Bahasa (Language Flow)

```text
Pemuatan awal
  ↓
Periksa bahasa tersimpan
  ├─ ada → gunakan bahasa tersebut
  └─ tidak ada → default ke ID
  ↓
Pengguna memilih ID / EN
  ↓
Perbarui state i18n terpusat
  ↓
Simpan preferensi bahasa secara lokal (persist)
```

Default yang direkomendasikan: `id` jika tidak ada preferensi yang tersimpan, karena target pasar utama adalah Indonesia.

## 10. Alur Navigasi Mobile

```text
Ketuk tombol hamburger
  ↓
Buka menu
  ↓
Fokus pada elemen interaktif pertama
  ↓
Pilih anchor tujuan
  ↓
Tutup menu
  ↓
Gulir (scroll) ke bagian yang dituju
```

Tombol Escape harus menutup menu. Fokus tidak boleh terjebak lebih lama dari yang diperlukan, namun interaksi harus tetap aman untuk keyboard.

## 11. Penanganan Error / State Kosong (Empty States)
- Filter portofolio tanpa data yang cocok: tampilkan teks ringkas "Belum ada proyek dalam kategori ini." / "No projects in this category yet."
- URL proyek tidak tersedia: nonaktifkan navigasi eksternal dan tandai proyek sebagai konsep/demo.
- Gambar hilang/tidak ada: gunakan placeholder mockup UI yang stabil, bukan ikon gambar rusak.
- Kunci terjemahan hilang: gunakan fallback ke bahasa Inggris atau label yang aman; jangan pernah merender nilai mentah `undefined`.

## 12. Penerimaan Alur Pengguna (User Flow Acceptance)
- [ ] Pengunjung dapat menjangkau WhatsApp dari setidaknya 4 titik bermakna yang berbeda.
- [ ] Portofolio dapat difilter tanpa memuat ulang halaman.
- [ ] FAQ dapat dioperasikan menggunakan keyboard.
- [ ] Pilihan tema dan bahasa tersimpan secara persisten.
- [ ] Menu mobile dapat dibuka dan ditutup dengan mudah dan terprediksi.
- [ ] Setiap alur konversi tetap dapat digunakan tanpa bergantung pada hover.