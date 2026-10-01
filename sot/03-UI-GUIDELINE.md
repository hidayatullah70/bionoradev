# BionoraDev — Panduan Desain & Antarmuka Pengguna (UI & Design Guideline)

> Dokumen tunggal komprehensif Sumber Kebenaran (Source of Truth) untuk arah visual, sistem desain, aturan interaksi, dan pedoman antarmuka pengguna website BionoraDev.
>
> Menggabungkan seluruh prinsip desain produk digital berkarakter manusia, pedoman anti-desain generik buatan AI, serta spesifikasi teknis UI ke dalam satu panduan utuh.

---

## 1. Arah Utama & Karakter Desain

BionoraDev dibangun dengan identitas visual:
**Modern · Futuristik · Profesional · Premium · Minimalis · Bersih · Bersahabat (Approachable)**

Situs web ini harus terasa seperti **studio digital independen yang andal dan memahami kebutuhan bisnis nyata**: modern, berorientasi teknis, mudah didekati, praktis, dan memperhatikan detail.

- **Reaksi yang diharapkan:** *“Ini terlihat seperti studio digital sungguhan yang punya karakter, sudut pandang, dan keahlian mendalam.”*
- **Bukan:** *“Ini terlihat seperti landing page templat SaaS generik buatan AI.”*

### Karakter Merek (Brand Persona)
- **BionoraDev Adalah:** Modern, praktis, teknis, ramah, lugas, memahami kebutuhan bisnis, dan memperhatikan detail.
- **BionoraDev Bukan:** Cyberpunk ekstrem, crypto/Web3 spekulatif, gim, fesyen mewah, birokrasi korporasi kaku, atau startup AI generik.
- **Bahasa Visual Inti:** *Studio Teknologi × Desain Produk × Solusi Nyata untuk Bisnis Berkembang*.

---

## 2. Aturan Anti-Desain Generik Buatan AI

Hindari penggunaan pola-pola generik tanpa pertimbangan:
1. Pola kaku: `Hero + tiga kartu bergradasi + deretan logo + harga + testimoni + CTA besar`.
2. Kartu membulat identik yang diulang tanpa variasi di setiap bagian halaman.
3. Badge/pil dekoratif yang disebarkan secara berlebihan.
4. Judul besar rata tengah (*centered*) di setiap section tanpa hierarki ritme editorial.
5. Gradasi ungu/biru atau pelangi di seluruh halaman.
6. Glassmorphism tebal di mana-mana yang menurunkan kontras keterbacaan.
7. Gumpalan bercahaya (*glow blobs*), bola 3D liar, partikel, atau ilustrasi teknologi tanpa tujuan fungsional.
8. Tangkapan layar dasbor fiktif yang tidak realistis.
9. Foto stok pebisnis tersenyum yang tidak relevan.
10. Statistik palsu, testimoni karangan, logo klien fiktif, penghargaan palsu, atau klaim "terbaik/nomor satu/termurah".
11. Kata-kata bombastis tanpa bukti seperti “revolusioner”, “tanpa hambatan”, “generasi berikutnya”, atau “bertenaga AI”.
12. Animasi hover seragam pada setiap elemen yang membuat antarmuka terasa ramai dan melelahkan.

> **Aturan Utama:** Jika suatu elemen tidak membantu pemahaman, kepercayaan, navigasi, atau konversi pengguna, **hapus elemen tersebut**.

---

## 3. DNA Visual & Referensi Brand

Sumber referensi utama: `/public/assets/bionoraDevUI.jpeg`  
Aset logo resmi: `/assets/logo/logoAja.png`

### 3.1 Makna Logo & 4 Pilar Utama Brand
Logo BionoraDev menggabungkan huruf "B" yang modern dengan elemen panah ke depan, melambangkan inovasi, pertumbuhan, dan perkembangan teknologi. Desain 3D dan gradien warna biru mencerminkan kepercayaan, profesionalisme, serta masa depan digital yang lebih baik.

Empat pilar utama:
1. **Inovasi:** *Selalu berkembang* (Ikon panah maju `>>>`)
2. **Teknologi:** *Solusi digital modern* (Ikon kode `< />`)
3. **Kepercayaan:** *Profesional & stabil* (Ikon perisai centang `ShieldCheck`)
4. **Pertumbuhan:** *Menuju masa depan* (Ikon tren naik `TrendingUp`)

### 3.2 Tagline Resmi & Kicker
- **Official Tagline:** `WEB DEVELOPMENT FOR A BETTER TOMORROW`
- **Kicker / Badge:** `BUILD · DEVELOP · INNOVATE`

### 3.3 Keseimbangan Visual (Visual Balance)
- **70–80%** Permukaan netral (*neutral dark navy surfaces* & whitespace lapang)
- **15–20%** Tipografi & struktur konten (*typography & editorial layout*)
- **5–10%** Warna aksen brand (*brand accents*)

Warna aksen adalah **penanda**, bukan warna latar di mana-mana. Gunakan aksen untuk aksi utama (CTA), status aktif, detail penanda penting, dan sorotan kecil pada produk.

---

## 4. Sistem Token Warna Semantik (Berdasarkan bionoraDevUI.jpeg)

Jangan pernah menyebarkan nilai hex mentah di dalam file JSX komponen. Gunakan selalu token semantik atau variabel CSS.

### 4.1 Token Inti Brand (Palet Warna Resmi)
```css
--brand-cyan: #00E5FF;       /* Cyan (Accent) */
--brand-blue: #00B4FF;       /* Primary Blue (Brand) */
--brand-deep-blue: #0066FF;  /* Deep Blue (Brand) */
--brand-dark-navy: #0B1220;  /* Dark Navy (Background) */
--brand-slate: #94A3B8;      /* Slate (Text/Secondary) */
--brand-white: #F8FAFC;      /* Putih bersih gading */
```

### 4.2 Tema Semantik Terang (Light Mode)
```css
:root {
  --bg: #F8FAFC;              /* Latar kanvas putih lembut */
  --surface: #FFFFFF;         /* Kartu & permukaan utama */
  --surface-muted: #F1F5F9;   /* Latar sekunder/hover halus */
  --text: #0B1220;            /* Teks judul & pembacaan utama */
  --text-muted: #64748B;      /* Teks deskripsi & keterangan */
  --border: #E2E8F0;          /* Garis batas kartu/pembagi */
  --accent: var(--brand-blue);/* Aksen interaksi primer (#00B4FF) */
  --accent-strong: var(--brand-deep-blue); /* (#0066FF) */
  --accent-soft: #E0F2FE;
}
```

### 4.3 Tema Semantik Gelap (Dark Mode - Default)
```css
.dark {
  --bg: #0B1220;              /* Dark Navy pekat (#0B1220) */
  --surface: #0E1726;         /* Permukaan kartu gelap dengan kontras rapi */
  --surface-muted: #131F33;   /* Permukaan sekunder sedikit terangkat */
  --text: #F8FAFC;            /* Teks putih bersih gading */
  --text-muted: #94A3B8;      /* Slate (#94A3B8) mudah dibaca */
  --border: #1E293B;          /* Garis batas semantik halus */
  --accent: var(--brand-cyan);/* Aksen sian menyala (#00E5FF) */
  --accent-strong: var(--brand-blue); /* (#00B4FF) */
  --accent-soft: #08283A;
}
```

### 4.4 Penggunaan Gradien (Gradient Usage)
Gradien brand resmi:
```text
linear-gradient(135deg, #00E5FF 0%, #00B4FF 50%, #0066FF 100%) /* Text Gradient */
linear-gradient(135deg, #00B4FF 0%, #0066FF 100%)              /* Button Primary Gradient */
```
Gunakan gradien secara terukur untuk:
- Tombol aksi utama (CTA primer / Primary Button)
- Aksen teks judul dan simbol 3D
- Sorotan garis tipis atau kilau (*ambient rim glow*) halus
- Dilarang membuat latar belakang satu layar penuh bergradasi pekat

---

## 5. Tipografi & Hierarki Font (Berdasarkan bionoraDevUI.jpeg)

### 5.1 Definisi Font Family
```css
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

/* 1. Font Heading, Subheading, Button, & Navbar */
font-family: 'Orbitron', sans-serif;

/* 2. Font Isi Konten & Paragraf */
font-family: 'Inter', sans-serif;
```

### 5.2 Aturan Penggunaan Font Sesuai bionoraDevUI.jpeg
1. **Heading / Judul Utama (H1 - H2):**
   - `font-family: 'Orbitron', sans-serif;`
   - `font-weight: 800;` (H1) / `700;` (H2)
   - `letter-spacing: -0.02em;`
2. **Subheading / Judul Section & Card (H3 - H4):**
   - `font-family: 'Orbitron', sans-serif;`
   - `font-weight: 700;` (H3) / `600;` (H4)
   - `letter-spacing: -0.02em;`
3. **Isi Konten / Paragraf:**
   - `font-family: 'Inter', sans-serif;`
   - `font-weight: 400;`
   - `line-height: 1.7;`
   - `color: var(--text-muted);`
4. **Tombol (Button):**
   - `font-family: 'Orbitron', sans-serif;`
   - `font-weight: 700;`
   - `letter-spacing: 0.05em;`
5. **Navbar / Menu:**
   - `font-family: 'Orbitron', sans-serif;`
   - `font-weight: 600;`
   - `letter-spacing: 0.03em;`

### 5.3 Skala Hirarki Tipografi Resmi (Typography Hierarchy)
| Tingkatan | Elemen | Ukuran (Size) | Bobot (Weight) | Font Family | Keterangan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | Heading Utama | 48px (Desktop) / 36px (Mobile) | 800 (ExtraBold) | Orbitron | Letter-spacing: -0.02em |
| **H2** | Judul Section | 36px (Desktop) / 28px (Mobile) | 700 (Bold) | Orbitron | Letter-spacing: -0.02em |
| **H3** | Sub Judul | 24px (Desktop) / 20px (Mobile) | 700 (Bold) | Orbitron | Letter-spacing: -0.02em |
| **H4** | Judul Card | 20px (Desktop) / 18px (Mobile) | 600 (SemiBold) | Orbitron | Judul kartu layanan & solusi |
| **Body** | Paragraf | 16px | 400 (Regular) | Inter | Line-height: 1.7 |
| **Small** | Keterangan | 14px | 400 (Regular) | Inter | Deskripsi sekunder |
| **Caption** | Label / Tag | 12px | 500 (Medium) | Inter / Orbitron | Chip status, tag kategori |

---

## 6. Tata Letak (Layout) & Skala Jarak (Spacing)

Situs harus terasa **dirancang dengan sengaja**, bukan sekadar dirakit dari blok-blok instan.

### 6.1 Dimensi Wadah (Container)
- Lebar maksimum konten utama: `1200–1280px` (`max-w-7xl`).
- Padding horizontal:
  - Mobile: `20–24px` (`px-5` / `px-6`)
  - Tablet: `32px` (`px-8`)
  - Desktop: `40–56px` (`px-10` / `px-14`)

### 6.2 Skala Jarak Konsisten (8pt / 4pt System)
Skala spasi: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120px`.
- Jarak vertikal antar-bagian (*section rhythm*):
  - Desktop: `96–128px`
  - Mobile: `64–88px`
- Hindari pola monoton `CENTERED TITLE → SUBTITLE → 3 CARDS → CTA`. Selingi dengan komposisi dua kolom editorial, grid bento asimetris, dan tata letak bertahap.

---

## 7. Radius, Border, & Elevasi (Shadow / Glow)

### 7.1 Radius Sudut
- **Kartu (Cards):** `16–24px` (`rounded-2xl` / `rounded-3xl` / `rounded-card`)
- **Tombol (Buttons):** `10–14px` (`rounded-xl` / `rounded-btn`)
- **Pill / Kapsul / Dock / Floating:** `999px` (`rounded-full`) untuk navbar dock, chip tag status, tombol ikon 3D, dan filter
- **Input Kontrol:** `12–14px`

### 7.2 Border & Elevasi
- Garis batas semantik: `1px solid var(--border)` atau `border border-border/80 dark:border-white/10`.
- Bayangan (*Shadow*):
  - Terang: `shadow-[0_12px_36px_-6px_rgba(11,18,32,0.08)]` lembut tanpa noda kotor.
  - Gelap: `shadow-[0_12px_36px_-6px_rgba(0,0,0,0.7)]` dengan ring specular tipis `ring-1 ring-white/5`.
  - Aksen Cahaya: `shadow-glow-cyan` (`0 0 25px -5px rgba(0, 240, 240, 0.25)`) dan `shadow-glow-blue` (`0 0 25px -5px rgba(0, 128, 240, 0.25)`).

---

## 8. Spesifikasi Komponen Tingkat Halaman (Page Components)

Arsitektur halaman dibangun dari 15 komponen terstruktur:
```text
Navbar → Hero → CapabilityBar → ServicesSection → SolutionsSection → PortfolioSection →
ProcessSection → PricingSection → WhyBionoraDev → TechnologySection → TestimonialSection →
FAQSection → FinalCTA → Footer → FloatingWhatsApp
```

### 8.1 Navbar (Floating Pill Dock)
- **Struktur:** Kapsul melayang (*floating pill dock*) berpusat di bagian atas viewport (`fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center`).
- **Glassmorphism:** `backdrop-blur-xl` dengan `bg-surface/85` (mode terang) dan `dark:bg-brand-ink/85 dark:border-white/10` (mode gelap).
- **Brand Logo & Wordmark:** Logo resmi `/assets/logo/logoAja.png` dengan tipografi `Orbitron` Bold (700). Teks "Bionora" netral dan "Dev" berwarna biru brand.
- **Nav Links (Segmented Pill Style):**
  - **Mode Gelap saat Hover:** Border berubah menjadi **`brand-blue`** (`dark:hover:border-brand-blue`), latar halus `dark:hover:bg-brand-blue/20`, teks putih, dan ikon sian (`dark:group-hover:text-brand-cyan`).
  - **Mode Terang saat Hover:** Border berubah menjadi **`brand-blue`** (`hover:border-brand-blue`), latar terisi biru **`bg-brand-blue`**, dan teks menu menjadi putih bersih **`text-brand-white`** serta ikon `group-hover:text-brand-white` untuk kontras maksimal.
  - **Status Aktif (*ScrollSpy*):** Mengikuti token yang sama sesuai mode yang aktif dengan bayangan aksen lembut.
- **Kontrol:** Pembagi vertikal (`|`), tombol switch bahasa (`id`/`en`), toggle tema (Sun/Moon/Monitor), dan tombol CTA WhatsApp.
- **Mobile Menu Drawer:** Kapsul ringkas dengan tombol hamburger yang membuka kartu drawer kaca melayang (`floating glass card`) animasi fade/zoom, menutup otomatis saat tautan diklik atau tombol `Escape` ditekan.

### 8.2 Floating WhatsApp & Quick Action Controls
Kolom kontrol mengambang vertikal di pojok kanan bawah (`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none pointer-events-none`):
1. **Tombol CTA WhatsApp 3D:**
   - Desain bola 3 dimensi hijau WhatsApp berukuran ringkas (`w-11 h-11 sm:w-12 sm:h-12`) dengan pantulan lengkung kaca (*specular glass gloss*), rim glow bawah, dan bezel putih bersih (`border-2 border-white`).
   - Dilengkapi gelombang sonar radar konsentris (`animate-radar-1`, `animate-radar-2`, `animate-radar-3`) dan sapuan radar 360° hijau WhatsApp (`#25D366`).
   - Efek Hover Kapsul "Chat Konsultasi": Kapsul bergaris batas hijau brand (`border-2 border-[#25D366]`) yang muncul halus saat hover/focus.
   - Pemicu Muncul: Tampil halus setelah pengguna mulai menggulir halaman (`scrollY > 80px`).
2. **Tombol CTA Back To Top 3D:**
   - Posisi tepat di bawah tombol WhatsApp dengan ukuran identik (`w-11 h-11 sm:w-12 sm:h-12`).
   - Desain bola 3 dimensi `brand-blue` (*glossy royal-blue sphere*) dengan border lingkaran `border-2 border-brand-blue`, kilau atas kaca, dan ikon panah chevron tebal berwarna `brand-white` (`#F5F7FA`) dengan drop shadow.
   - **Pemicu Scroll 1/3 Layar:** Muncul secara dinamis dan mulus hanya setelah layar di-scroll ke bawah minimal **1/3 tinggi layar** (`window.innerHeight / 3`), dan menghilang halus saat kembali ke atas. Bebas dari label teks "Ke Atas" agar tampilan tetap bersih dan minimalis.

### 8.3 Bagian Hero (Hero Section)
- Komposisi desktop dua kolom asimetris:
  - **Sisi Kiri:** Badge kategori, judul utama H1 tebal (`Inter`), deskripsi singkat bernilai bisnis tinggi, dua tombol CTA (Konsultasi WhatsApp dan Jelajahi Portofolio), serta mikro-metrik kapabilitas.
  - **Sisi Kanan:** Pratinjau visual produk web/dasbor interaktif yang dirancang khusus: bingkai browser realistis (*window chrome dots*), kartu analitik mini, metrik status, dan aksen glow cyan/blue yang halus.
- Dilarang menggunakan bola 3D generik, video autoplay berat, atau statistik fiktif.

### 8.4 Capability Bar
- Strip kapabilitas pendukung bisnis yang ringkas, menghubungkan hero dengan bagian layanan tanpa kesan kaku.

### 8.5 Layanan (Services Section)
- Grid 4-kartu terstruktur rapi.
- Setiap kartu menyajikan nomor urut (`01`, `02`, ...), ikon representatif, judul layanan, deskripsi bernilai bisnis, daftar fitur kunci, dan tautan konsultasi WhatsApp yang terkonfigurasi otomatis dengan pesan spesifik layanan tersebut.

### 8.6 Solusi Bisnis (Solutions Section)
- Berfokus pada pemecahan masalah bisnis nyata:
  $$\text{Tantangan Bisnis} \longrightarrow \text{Solusi Digital Tepat Sasaran} \longrightarrow \text{Hasil Pertumbuhan Nyata}$$
- Disajikan dalam tata letak kartu bento asimetris yang dinamis dan mudah dipindai.

### 8.7 Portofolio (Portfolio Section)
- Pratinjau produk digital berskala penuh dengan rasio aspek konsisten (16:10 / 16:9).
- Setiap entri proyek mencantumkan:
  - Tangkapan layar/mockup informatif berkualitas tinggi
  - Nama proyek & industri
  - Masalah yang diselesaikan & arsitektur solusi
  - Tag tumpukan teknologi (*tech stack*)
  - Label status yang jujur dan transparan (`Live Project`, `Proyek Konsep`, `Proyek Demo`)
  - Tautan aktif ke proyek langsung (misal: *Washup Laundry*, *Dewi Catering*, *Rumah Berubat*, *Bimasena Adhiraja Saradika*).

### 8.8 Alur Proses Kerja (Process Section)
- Linimasa 5 langkah editorial terstruktur:
  `01 Konsultasi — 02 Perencanaan — 03 Desain UI/UX — 04 Pengembangan — 05 Peluncuran & Dukungan`
- Susunan horizontal pada desktop dengan garis penghubung tipis, dan tersusun vertikal pada layar mobile.
- Bebas dari slider/carousel auto-advance yang mengganggu pengguna.

### 8.9 Paket Investasi / Harga (Pricing Section)
- Tiga kartu transparan: *Starter*, *Business*, dan *Custom*.
- Paket *Business* dapat diberikan penanda visual sebagai rekomendasi populer secara proporsional.
- Menjunjung tinggi etika desain: **tanpa diskon palsu, tanpa timer hitung mundur palsu, dan tanpa klaim ROI manipulatif**.
- Placeholder harga ditandai jelas dan mudah diperbarui.

### 8.10 Nilai & Prinsip Kerja (WhyBionoraDev)
- Menyampaikan prinsip kerja, komitmen kualitas, performa kode, dan komunikasi transparan melalui tata letak editorial tipografis yang tegas, bukan sekadar 5 kotak ikon generik.

### 8.11 Tumpukan Teknologi (Technology Section)
- Menyajikan badge teknologi modern pendukung (React, Vite, Tailwind CSS, JavaScript, Cloudflare, GitHub) secara proporsional sebagai pilar kredibilitas, bukan sebagai display kode yang berlebihan.

### 8.12 Testimoni (Testimonial Section)
- Kebijakan autentisitas ketat: **dilarang memalsukan nama, ulasan, foto, atau rating klien**.
- Menampilkan placeholder atau ulasan nyata berlabel jujur.

### 8.13 FAQ (Tanya Jawab Umum)
- Komponen akordeon fungsional yang bersih dengan garis batas halus.
- Target sentuh nyaman (tinggi interaktif minimal 48px), transisi ekspansi halus, dan atribut aksesibilitas lengkap (`aria-expanded`, `aria-controls`).

### 8.14 CTA Penutup (Final CTA)
- Penutup halaman yang elegan dan meyakinkan: judul deklaratif kuat, penjelasan ringkas, tombol WhatsApp primer dengan efek glow, serta ruang kosong yang lapang.

### 8.15 Footer
- Tata letak multi-kolom yang rapi: wordmark BionoraDev (`Orbitron` Bold dengan "Dev" biru), deskripsi misi, tautan navigasi cepat, kategori layanan, kontak email/WhatsApp terpusat, dan baris hak cipta tahun berjalan.

---

## 9. Animasi, Transisi, & Scroll Reveal

Animasi bertujuan menyampaikan perubahan status dan orientasi pengguna, bukan sekadar dekorasi visual yang memperlambat browsing.

### 9.1 Durasi & Kurva Gerakan
- **Mikro-interaksi (Hover, Focus, Active):** `150–220ms` (`ease-out`)
- **Transisi Komponen (Drawer, Accordion, Tab):** `220–320ms` (`cubic-bezier(0.16, 1, 0.3, 1)`)
- **Kemunculan Gulir (Scroll Reveal):** `350–500ms`

### 9.2 Utilitas Scroll Reveal (.reveal-init & .reveal-visible)
```css
.reveal-init {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
```
- Gunakan `IntersectionObserver` ringan satu kali per masuk viewport.
- Dilarang menganimasikan setiap huruf/kata secara terpisah.

### 9.3 Gerakan yang Dilarang
- Kartu memantul (*bouncing cards*)
- Ikon yang terus berputar tanpa henti
- Efek bola dekoratif yang mengikuti kursor mouse
- Parallax berlebihan yang menyebabkan mual gerak (*motion sickness*)
- Tombol magnetik berat

### 9.4 Dukungan Preferensi Pengurangan Gerakan
Wajib mematuhi preferensi sistem pengguna:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 10. Desain Responsif (Responsive Design)

Breakpoint ditentukan berdasarkan kenyamanan pembacaan konten (*content-driven*), bukan sekadar nama merk gadget.

### 10.1 Target Resolusi Minimum
- **Ponsel Kecil:** `360px` – `390px`
- **Ponsel Standar:** `390px` – `430px`
- **Tablet / Layar Lipat:** `768px` – `1024px`
- **Desktop:** `1024px` – `1280px`
- **Monitor Lebar:** `1440px+`

### 10.2 Prioritas Antarmuka Ponsel (Mobile Priorities)
1. Keterbacaan instan judul utama tanpa pemenggalan kata yang janggal.
2. Jangkauan jempol (*thumb-zone*) yang nyaman untuk tombol aksi WhatsApp.
3. Kejelasan navigasi drawer satu tangan.
4. Rasio visual portofolio proporsional (tidak kekecilan).
5. Area sentuh kontrol interaktif minimal `44 × 44px`.
6. Tombol mengambang (WhatsApp & Back To Top) tidak menutupi teks penting atau tombol aksi halaman.

---

## 11. Integrasi WhatsApp & Komunikasi Terpusat

Sebagai kanal konversi utama, seluruh tautan dan nomor WhatsApp wajib dikelola melalui satu sumber kebenaran tunggal:
- Konfigurasi: `src/config/siteConfig.js`
- Pembangun URL: `src/lib/whatsapp.js`

```javascript
// Contoh pemanggil tautan terpusat
import { buildWhatsAppUrl } from '../../lib/whatsapp';
const whatsAppUrl = buildWhatsAppUrl({ locale, messageKey: 'services', context: 'Landing Page' });
```

### Aturan Ketat:
- **Dilarang keras** menulis nomor telepon WhatsApp mentah di dalam file komponen JSX.
- Pesan otomatis harus terdengar profesional, sopan, dan langsung pada topik konsultasi.

---

## 12. Desain Konten & Editorial (Copywriting)

Teks mencerminkan studio profesional yang tulus dan berorientasi solusi nyata.

| Utamakan Bahasa yang Spesifik & Membumi | Hindari Ungkapan Klise & Bombastis |
| :--- | :--- |
| *“Ceritakan kebutuhan bisnis Anda kepada kami, dan kami siapkan solusi web yang tepat.”* | *“Wujudkan transformasi digital generasi berikutnya bersama kami.”* |
| *“Kami membangun website cepat dan sistem operasional yang mempermudah kerja Anda.”* | *“Berdayakan bisnis Anda dengan ekosistem solusi mutakhir tanpa batas.”* |
| *“Desain berbobot ringan, struktur kode bersih, dan mudah ditemukan calon pelanggan di Google.”* | *“Platform revolusioner masa depan dengan performa spektakuler.”* |

---

## 13. Desain Bilingual (Bilingual Support: ID & EN)

- Mendukung penuh dua bahasa: **Bahasa Indonesia (`id`)** sebagai default utama dan **Bahasa Inggris (`en`)**.
- Struktur kunci terjemahan di `src/config/translations.js` wajib 100% simetris antar-bahasa.
- Dilarang membiarkan teks yang menghadap pengguna me-render `undefined` atau kunci string mentah.
- Terjemahan harus mengalir alami secara kontekstual, bukan terjemahan mesin kaku yang menghasilkan panjang baris timpang.

---

## 14. Aksesibilitas & Standar Semantik Web (A11y)

Ekspektasi minimum yang wajib dipenuhi:
1. **Landmark Semantik:** Gunakan elemen `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, dan `<footer>`.
2. **Hierarki Heading:** Tepat satu `<h1>` per halaman, diikuti urutan `<h2>` dan `<h3>` yang runtut.
3. **Semantik Tombol & Tautan:** Gunakan `<button>` untuk aksi/state dan `<a>` untuk navigasi/tautan eksternal. Jangan membuat `<div>` atau `<span>` yang dipasangi `onClick` tanpa perlakuan keyboard/ARIA.
4. **Indikator Fokus:** Setiap elemen interaktif wajib memiliki `focus-visible:ring-2 focus-visible:ring-brand-blue` yang terlihat jelas.
5. **Kontras Warna:** Rasio kontras teks minimum `4.5:1` terhadap latar belakang untuk teks normal dan `3:1` untuk teks besar sesuai WCAG 2.1 AA.
6. **Alternatif Teks:** Seluruh gambar bermakna wajib memiliki atribut `alt` deskriptif; ikon murni dekoratif wajib dilengkapi `aria-hidden="true"`.

---

## 15. Optimasi Kinerja Web (Performance)

Kekayaan estetika modern tidak boleh mengorbankan kecepatan akses pengguna:
- Memanfaatkan styling efisien Tailwind CSS dengan CSS variables.
- Pemuatan aset gambar menggunakan format modern terkompresi serta atribut `loading="lazy"` untuk gambar di bawah lipatan layar (*below-the-fold*).
- Menetapkan atribut `width` dan `height` eksplisit pada gambar untuk mencegah pergeseran tata letak (*Cumulative Layout Shift / CLS*).
- Tanpa video hero berukuran besar yang diputar otomatis.
- Dependensi ringan tanpa pustaka animasi pihak ketiga yang berlebihan.

---

## 16. Arsitektur Konten Berbasis Data (Data-Driven Architecture)

Konten yang berulang (layanan, solusi, portofolio, proses, harga, testimonial, FAQ) disimpan dalam modul data terstruktur di `src/data/`:
```javascript
export const servicesData = [
  { id: 'web-development', title: 'Web Development', ... },
];
```
Pemisahan data ini memudahkan pembaruan berkala tanpa risiko merusak komponen atau menimbulkan inkonsistensi visual.

---

## 17. Elemen yang Dilarang Tanpa Alasan Terdokumentasi

Dilarang menambahkan elemen-elemen berikut ke dalam proyek:
- Carousel testimoni otomatis yang bergerak sendiri
- Deretan logo partner fiktif atau running banner tanpa izin
- Metrik statistik atau counter angka palsu
- Timer hitung mundur (*countdown timer*) palsu
- Latar belakang partikel 3D interaktif yang boros CPU/baterai
- Efek kursor mouse kustom yang memperlambat responsivitas
- Kotak formulir newsletter atau popup modal yang tidak tertera pada SOT
- Widget chat pihak ketiga di luar integrasi resmi WhatsApp BionoraDev

---

## 18. Prioritas Pengambilan Keputusan Desain

Jika dihadapkan pada dua pilihan implementasi visual, utamakan berdasarkan urutan:
1. **Kejelasan (Clarity):** Apakah pengguna langsung memahami informasi dan pesan yang disampaikan?
2. **Kepercayaan (Trust):** Apakah tampilan mencerminkan profesionalisme dan kejujuran studio nyata?
3. **Kemudahan Penggunaan (Usability & A11y):** Apakah navigasi dan kontrol mudah dioperasikan di semua perangkat?
4. **Pengenalan Brand (Brand Distinctiveness):** Apakah ciri khas warna, logo, dan tipografi BionoraDev terpancar kuat?
5. **Kemudahan Pemeliharaan (Maintainability):** Apakah kode dan data mudah dirawat serta bersih dari abstraksi berlebihan?

---

## 19. Daftar Periksa Jaminan Kualitas (QA Checklist)

Sebelum merilis atau menyelesaikan perubahan antarmuka, jalankan verifikasi berikut:

### 19.1 Visual & Estetika
- [ ] Apakah tampilan mencerminkan studio teknologi modern yang profesional dan berkarakter?
- [ ] Apakah proporsi aksen cyan/blue berada di rentang yang terkendali (5–10%) dan tidak mendominasi seluruh kanvas?
- [ ] Apakah teks wordmark "BionoraDev" konsisten menggunakan font `Orbitron` Bold (700) dengan kata "Dev" berwarna biru?
- [ ] Apakah seluruh judul section dan heading utama menggunakan font `Inter`?
- [ ] Apakah ritme vertikal dan ruang kosong terasa lapang dan nyaman?

### 19.2 Interaksi & Navigasi
- [ ] Apakah hover pada menu navbar di mode gelap menampilkan border **brand-blue**?
- [ ] Apakah hover pada menu navbar di mode terang menampilkan border **brand-blue**, latar **bg-brand-blue**, dan teks **brand-white**?
- [ ] Apakah tombol floating Back To Top hanya muncul setelah layar di-scroll minimal **1/3 tinggi layar**?
- [ ] Apakah tombol floating WhatsApp 3D berfungsi membuka chat dengan pesan yang sesuai konteks?
- [ ] Apakah alur scroll halus (*smooth scrolling*) ke setiap section berjalan tanpa hambatan?

### 19.3 Tema & Bahasa
- [ ] Apakah mode terang dan mode gelap memiliki hierarki kontras yang tajam dan seimbang?
- [ ] Apakah peralihan bahasa ID ↔ EN berjalan mulus tanpa teks yang hilang atau berstatus `undefined`?

### 19.4 Aksesibilitas & Responsivitas
- [ ] Apakah seluruh kontrol interaktif dapat diakses melalui keyboard (tombol Tab & Enter)?
- [ ] Apakah tampilan pada resolusi mobile (360px–430px) rapi tanpa overflow horizontal?
- [ ] Apakah mode `prefers-reduced-motion` dihormati dengan benar?

---

## 20. Kriteria Desain Selesai (Definition of Done)

Perubahan desain dan antarmuka pengguna dianggap **SELESAI (DONE)** hanya jika:
1. Tampilan desktop dan mobile sama-sama terasa dirancang secara matang dan sengaja.
2. Mode terang dan mode gelap memiliki kontras dan hierarki semantik yang teruji.
3. Tipografi konsisten: khusus teks "BionoraDev" memakai `Orbitron` Bold 700; seluruh heading dan teks lainnya memakai `Inter`.
4. Aksen warna brand digunakan secara terukur dan presisi.
5. Tombol floating WhatsApp 3D dan Back To Top 3D bekerja dinamis sesuai ketentuan scroll 1/3 layar.
6. Tidak ada data palsu, testimoni karangan, atau klaim yang tidak berdasar.
7. Tidak didominasi pola-pola generik templat AI.
8. Seluruh tautan WhatsApp terhubung ke konfigurasi sentral `siteConfig.js`.
9. Transisi visual berjalan mulus dengan performa rendering 60 FPS.
10. Lolos kompilasi production build (`npm run build`) dengan **0 error**.

---

## 21. Spesifikasi Ikon & Tautan Media Sosial (Footer Social Media)

Ikon media sosial diletakkan tepat di bawah tombol CTA *"WhatsApp Langsung"* pada kolom brand Footer dengan spesifikasi interaksi:

### 21.1 Daftar Tautan, Warna Default & Background
1. **Instagram**:
   - URL: `https://www.instagram.com/prabu.nusantara/`
   - Warna Background Default: Merah (`#E1306C` / `#E4405F`)
   - Ikon: Kamera Putih (`#FFFFFF`)
2. **YouTube**:
   - URL: `https://www.youtube.com/@BionoraDev`
   - Warna Background Default: Merah YouTube (`#FF0000`)
   - Ikon: Kotak Merah dengan Panah Putih (`#FFFFFF`)
3. **TikTok**:
   - URL: `https://www.tiktok.com/@bionoradev`
   - Warna Background Default: Hitam (`#000000`)
   - Ikon: Putih (`#FFFFFF`)
4. **Facebook**:
   - URL: `https://web.facebook.com/BionoraDev`
   - Warna Background Default: Lingkaran Biru (`#1877F2`)
   - Ikon: Huruf "f" Putih (`#FFFFFF`)
5. **X**:
   - URL: `https://x.com/bionoradev/`
   - Warna Background Default: Hitam (`#000000`)
   - Ikon: Huruf "X" Putih (`#FFFFFF`)

### 21.2 Aturan Hover & Interaksi
- **Bentuk**: Lingkaran (`w-8 h-8 sm:w-9 sm:h-9 rounded-full border`).
- **State Default**: Warna solid sesuai identitas platform masing-masing dengan kontras tinggi (glyph putih pada container brand).
- **State Hover**:
  - Seluruh latar belakang ikon berubah menjadi **Brand Dark Navy** (`#0B1220`).
  - Border tombol memancarkan glow neon sesuai aksen brand masing-masing (`hover:shadow-[0_0_14px_rgba(...)]`).
  - Animasi transisi mikro dengan pembesaran lembut (`scale-110`).
- **Aksesibilitas**: Semua tautan wajib memiliki atribut `target="_blank"`, `rel="noopener noreferrer"`, serta `aria-label` dan `title` yang deskriptif.

> **Prinsip Pamungkas:** BionoraDev harus terlihat dirancang oleh manusia profesional yang memahami seluk-beluk bisnis nyata, bukan sekadar dirakit dari komponen UI generik.