# BionoraDev — Spesifikasi API / Integrasi

## 0. Cakupan (Scope)
BionoraDev v1 adalah situs statis React/Vite **tanpa backend khusus dan tanpa database**.

Oleh karena itu:
- Tidak memerlukan internal REST/GraphQL API.
- Tidak memerlukan sistem autentikasi.
- Tidak memerlukan persistensi data di sisi server.
- Aksi eksternal terbatas pada navigasi browser dan kontrak integrasi tautan.

Dokumen ini mendefinisikan antarmuka yang menjadi dasar ketergantungan frontend sehingga implementasi tetap deterministik dan mudah diganti di masa mendatang.

## 1. Konfigurasi Runtime
Sumber tunggal yang direkomendasikan:
`src/config/siteConfig.js`

Bentuk objek:
```js
export const siteConfig = {
  brand: {
    name: "BionoraDev",
    positioning: "Digital Solutions for Growing Businesses",
  },
  contact: {
    whatsappNumber: "6281384224733",
  },
  defaults: {
    whatsappMessage: {
      id: "Halo BionoraDev, saya ingin berdiskusi mengenai kebutuhan website untuk bisnis saya.",
      en: "Hello BionoraDev, I would like to discuss a website project.",
    },
  },
};
```

Nomor tersebut adalah placeholder dan harus dapat diganti tanpa perlu mengubah file komponen.

## 2. Kontrak Tautan WhatsApp

### Input
```ts
type WhatsAppLinkInput = {
  message?: string;
  locale?: "id" | "en";
};
```

### Output
URL HTTPS yang valid:
```text
https://wa.me/{WHATSAPP_NUMBER}?text={encodeURIComponent(message)}
```

### Kontrak Utilitas
```js
buildWhatsAppUrl({ locale, message })
```

Aturan:
- sanitasi spasi hanya jika diperlukan
- gunakan nomor yang telah dikonfigurasi
- pilih pesan default terjemahan saat pesan dikosongkan
- encode pesan menggunakan `encodeURIComponent`
- jangan pernah menggabungkan teks mentah yang terlihat pengguna langsung ke URL tanpa encoding

## 3. Pesan Kontekstual WhatsApp
CTA dapat memberikan konteks spesifik:
```js
buildWhatsAppUrl({
  locale: "id",
  message: "Halo BionoraDev, saya tertarik dengan layanan Business Website."
});
```

Templat pesan yang direkomendasikan:
- general (umum)
- landing page
- business website
- web application
- web dashboard
- custom project

Simpan templat di dalam data konfigurasi/i18n, bukan di dalam masing-masing komponen.

## 4. Tautan Proyek Eksternal

Kontrak data portofolio:
```ts
type PortfolioItem = {
  id: string;
  name: string;
  industry: string;
  category: "landing-page" | "website" | "web-app" | "dashboard";
  description: string;
  technologies: string[];
  image?: string;
  projectUrl?: string;
  status: "concept" | "demo" | "client";
};
```

Aturan:
- `projectUrl` bersifat opsional.
- Jika tidak ada, tombol "View Project" tidak boleh mengarahkan ke URL palsu.
- `status: "concept"` atau `"demo"` wajib diberi label yang jelas.
- `status: "client"` hanya boleh digunakan jika proyek tersebut memang merupakan proyek klien yang nyata.

## 5. Kontrak Data Harga (Pricing Data Contract)
```ts
type PricingPlan = {
  id: "starter" | "business" | "custom";
  name: string;
  service: string;
  price: string;
  features: string[];
  ctaLabel: string;
  whatsappContext?: string;
};
```

Harga adalah data konten, bukan logika. Pastikan selalu dapat diedit dalam satu sumber data tunggal.

## 6. Kontrak Data FAQ
```ts
type FAQItem = {
  id: string;
  question: {
    id: string;
    en: string;
  };
  answer: {
    id: string;
    en: string;
  };
};
```

## 7. Kontrak Lokalisasi
Struktur yang direkomendasikan:
```js
const messages = {
  id: {
    nav: {},
    hero: {},
    services: {},
    solutions: {},
    portfolio: {},
    process: {},
    pricing: {},
    why: {},
    technology: {},
    testimonials: {},
    faq: {},
    cta: {},
    footer: {},
  },
  en: {
    nav: {},
    hero: {},
    services: {},
    solutions: {},
    portfolio: {},
    process: {},
    pricing: {},
    why: {},
    technology: {},
    testimonials: {},
    faq: {},
    cta: {},
    footer: {},
  },
};
```

Kebutuhan:
- struktur kunci identik antar-bahasa
- tidak boleh ada komponen UI yang memuat pohon terjemahan lengkap kedua
- kunci yang hilang harus memiliki fallback yang aman
- locale adalah `id` atau `en`

## 8. Kontrak Preferensi Tema
Kunci local storage:
`bionoradev-theme`

Nilai yang diizinkan:
- `light`
- `dark`
- `system`

Kunci local storage untuk bahasa:
`bionoradev-locale`

Nilai yang diizinkan:
- `id`
- `en`

Implementasi harus menjaga API khusus-browser agar tooling build/SSR tidak gagal meskipun v1 dirender di sisi klien (client-rendered).

## 9. Hook Analitik Opsional
Analitik **tidak wajib untuk v1**.

Jika diaktifkan di kemudian hari:
```js
trackEvent("whatsapp_cta_click", {
  source: "hero",
  locale: "id",
});
```

Jaga analitik di balik sebuah adapter sehingga bagian aplikasi lainnya tidak bergantung pada vendor tertentu.

Jangan menambahkan kredensial analitik atau skrip pihak ketiga kecuali jika dikonfigurasi secara eksplisit.

## 10. Kontrak Metadata SEO
Konfigurasi dapat memuat:
```js
seo: {
  title: "...",
  description: "...",
  canonicalUrl: "...",
  ogImage: "...",
}
```

Tidak boleh ada alamat bisnis fiktif, rating palsu, jumlah ulasan yang dikarang, atau data registrasi hukum palsu.

## 11. Keamanan / Privasi API
Karena v1 tidak memiliki backend:
- jangan menaruh rahasia/kunci privat di kode frontend
- jangan mengumpulkan data pribadi yang sensitif
- jangan membuat API key tiruan
- URL eksternal harus eksplisit
- gunakan HTTPS untuk integrasi eksternal

## 12. Batasan Pengembangan Masa Depan
Antarmuka backend potensial di masa depan:
- formulir kontak / penangkapan prospek (lead capture)
- CMS
- manajemen portofolio
- portal klien dengan autentikasi
- dashboard analitik

Hal-hal tersebut sengaja berada di luar cakupan v1. Tambahkan fitur-fitur tersebut hanya sebagai revisi SOT baru yang telah disetujui daripada memperluas cakupan secara diam-diam.