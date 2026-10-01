# AGENTS.md — Kontrak Proyek BionoraDev

## Misi
Membangun dan memelihara website company profile BionoraDev sebagai aplikasi React/Vite statis yang cepat, modern, bilingual, dan responsif dengan fokus pada komunikasi yang jelas dan perolehan prospek (lead generation) melalui WhatsApp.

## Sumber Kebenaran (Source of Truth / SOT)
Sebelum mengubah perilaku produk, baca:
1. `sot/01-PRD.md`
2. `sot/02-USER-FLOW.md`
3. `sot/03-UI-GUIDELINE.md`
4. `sot/04-API-SPEC.md`
5. `sot/05-IMPLEMENTATION-PLAN.md`

Jika kode dan SOT tidak selaras, jangan membuat interpretasi ketiga secara diam-diam. Perbarui SOT terlebih dahulu jika ada kebutuhan yang benar-benar berubah.

## Batasan Teknologi (Stack Constraints)
Gunakan hanya:
- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React atau pustaka ikon ringan lainnya
- React Router hanya jika perutean (routing) memang benar-benar dibutuhkan

Jangan menambahkan:
- backend framework
- database
- sistem autentikasi
- CMS
- framework komponen yang berat
- state library yang tidak diperlukan

## Aturan Arsitektur
- Utamakan komposisi sederhana daripada arsitektur yang terlalu sarat abstraksi.
- Simpan konten berulang di dalam modul data.
- Simpan konfigurasi dalam satu sumber tunggal.
- Pusatkan logika terjemahan (sentralisasi).
- Pusatkan logika tema (sentralisasi).
- Pusatkan pembuatan URL WhatsApp (sentralisasi).
- Jangan menduplikasi nomor telepon atau pesan CTA di dalam komponen-komponen.
- Hindari prop drilling yang dapat diselesaikan dengan komposisi lokal; hindari global state kecuali benar-benar diperlukan.

## Aturan Antarmuka (UI Rules)
- Ikuti token warna semantik.
- Jangan menyebarkan nilai hex brand mentah di seluruh JSX.
- Khusus teks brand "BionoraDev", gunakan font-family `Orbitron` Bold (700). Display heading dan konten lainnya menggunakan font utama (Inter).
- Pertahankan bahasa visual dari referensi logo BionoraDev yang diberikan.
- Gunakan gradien secukupnya.
- Utamakan ruang kosong (whitespace) dan hierarki daripada sekadar dekorasi.
- Setiap kontrol interaktif wajib memiliki state hover/focus/disabled yang relevan.
- Jangan mengandalkan hover untuk informasi yang esensial/penting.
- Hormati preferensi pengurangan gerakan pengguna (reduced-motion).

## Aturan Konten
Jangan pernah mengarang/memalsukan:
- testimoni
- logo klien
- hasil/pencapaian klien
- penghargaan (awards)
- peringkat (rankings)
- klaim "terbaik/nomor satu/termurah"
- alamat bisnis
- detail legalitas/pendaftaran perusahaan
- URL proyek

Karya konsep/demo wajib diberi label dengan jelas.

Harga placeholder harus tetap terlihat jelas dapat diedit.

## Aturan WhatsApp
Gunakan:
`src/config/siteConfig.js` → nomor/pesan terkonfigurasi  
`src/lib/whatsapp.js` → pembuat URL (URL builder)

Tidak boleh ada komponen yang memuat nomor WhatsApp kedua yang di-hardcode.

## Aturan Lokalisasi (Localization Rules)
- Bahasa yang didukung: `id`, `en`
- Pertahankan kunci terjemahan yang cocok antar-bahasa.
- Default ke ID jika tidak ada preferensi tersimpan.
- Jangan pernah merender kunci terjemahan yang hilang sebagai `undefined`.
- Teks yang menghadap ke pengguna tidak boleh di-hardcode di dalam komponen jika membutuhkan lokalisasi.

## Aturan Tema (Theme Rules)
Mendukung:
- `light`
- `dark`
- `system`

Gunakan token semantik. Kunjungan pertama harus mengikuti preferensi sistem. Pilihan manual harus disimpan secara persisten.

## Aturan Aksesibilitas
Ekspektasi minimum:
- landmark semantik
- hierarki heading yang benar
- navigasi keyboard
- fokus yang terlihat jelas
- semantik button/link yang tepat
- `aria-expanded` untuk UI yang dapat diperluas
- alt text jika bermakna
- dukungan reduced-motion
- kontras yang memadai

## Aturan Performa
- tidak ada video latar belakang yang diputar otomatis (autoplay)
- hindari pustaka yang tidak perlu
- muat gambar non-kritis secara lambat (lazy-load)
- sediakan ruang gambar untuk mencegah layout shift
- jaga agar animasi tetap ringan
- hindari perulangan JavaScript berkelanjutan yang berat

## Pengujian / Validasi
Sebelum menyelesaikan perubahan:
1. jalankan lint jika terkonfigurasi
2. jalankan production build
3. uji alur yang terdampak
4. periksa tata letak mobile
5. periksa interaksi keyboard untuk kontrol yang terdampak
6. periksa mode ID dan EN
7. periksa mode terang (light) dan gelap (dark) jika ada perubahan visual

## Kebersihan Git (Git Hygiene)
Gunakan commit yang terfokus. Jangan mencampur refaktor yang tidak terkait dengan pekerjaan fitur.

Gaya yang disukai:
```text
feat: ...
fix: ...
refactor: ...
chore: ...
docs: ...
```

## Perilaku Agen (Agent Behavior)
- Jangan meminta konfirmasi untuk pilihan implementasi rutin yang sudah ditentukan oleh SOT.
- Tanyakan hanya jika ada keputusan yang hilang dan benar-benar menghambat implementasi.
- Pilih perubahan terkecil yang sesuai standar.
- Jangan memperkenalkan arsitektur backend/API spekulatif.
- Jangan menulis ulang area kerja yang berfungsi baik dan tidak terkait dengan tugas saat ini.
- Ketika suatu kebutuhan berubah, perbarui dokumen SOT terkait dan kodenya secara bersamaan.

## Serah Terima Akhir (Final Handoff)
Tugas yang selesai harus menyatakan:
- apa yang diubah
- file/komponen yang terdampak
- validasi yang dilakukan
- placeholder tersisa yang masih dapat diedit
- apakah proses build berhasil