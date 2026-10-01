/**
 * Pricing Data Contract (API-SPEC compliant)
 * Explicitly editable placeholder prices configured centrally.
 */
export const pricingData = [
  {
    id: "starter",
    popular: false,
    name: {
      id: "STARTER",
      en: "STARTER",
    },
    service: {
      id: "Landing Page Cepat",
      en: "Rapid Landing Page",
    },
    tagline: {
      id: "Ideal untuk promosi produk tunggal, event, atau validasi ide bisnis baru.",
      en: "Ideal for single product promotions, events, or fast idea validation.",
    },
    price: {
      id: "Rp 499.000",
      en: "Rp 499,000",
    },
    period: {
      id: "estimasi awal",
      en: "starting estimate",
    },
    features: {
      id: [
        "1 Halaman berfokus konversi tinggi",
        "Desain responsif desktop & mobile",
        "Integrasi tombol WhatsApp langsung",
        "Optimasi kecepatan loading",
        "Gratis revisi minor & panduan",
      ],
      en: [
        "1 High-converting single page",
        "Full desktop & mobile responsiveness",
        "Direct WhatsApp CTA integration",
        "Page speed optimization",
        "Minor revision & deployment guide",
      ],
    },
    whatsappContext: {
      id: "Halo BionoraDev, saya tertarik dengan paket STARTER (Landing Page).",
      en: "Hello BionoraDev, I am interested in the STARTER (Landing Page) plan.",
    },
  },
  {
    id: "business",
    popular: true,
    name: {
      id: "BUSINESS",
      en: "BUSINESS",
    },
    service: {
      id: "Business Website",
      en: "Business Website",
    },
    tagline: {
      id: "Solusi lengkap untuk membangun reputasi perusahaan dan menjaring klien profesional.",
      en: "Complete solution to build company credibility and attract qualified leads.",
    },
    price: {
      id: "Rp 1.499.000",
      en: "Rp 1,499,000",
    },
    period: {
      id: "estimasi awal",
      en: "starting estimate",
    },
    features: {
      id: [
        "Hingga 5 halaman profil bisnis terstruktur",
        "Desain modern, elegan & kredibel",
        "Optimasi SEO dasar & meta tag Google",
        "Integrasi WhatsApp & formulir kontak",
        "Dukungan domain kustom & hosting",
        "Garansi perbaikan bug & bantuan peluncuran",
      ],
      en: [
        "Up to 5 structured corporate profile pages",
        "Modern, elegant & authoritative visual design",
        "Basic SEO & Google metadata optimization",
        "WhatsApp CTAs & contact touchpoints",
        "Custom domain & hosting guidance",
        "Bug-fix warranty & deployment support",
      ],
    },
    whatsappContext: {
      id: "Halo BionoraDev, saya tertarik dengan paket BUSINESS (Business Website).",
      en: "Hello BionoraDev, I am interested in the BUSINESS (Business Website) plan.",
    },
  },
  {
    id: "custom",
    popular: false,
    name: {
      id: "CUSTOM",
      en: "CUSTOM",
    },
    service: {
      id: "Web App & Dashboard",
      en: "Web App & Dashboard",
    },
    tagline: {
      id: "Sistem khusus dengan alur kerja disesuaikan penuh dengan operasional bisnis Anda.",
      en: "Tailor-made dynamic web application or dashboard matching your exact operations.",
    },
    price: {
      id: "Sesuai Kebutuhan",
      en: "Custom Scope",
    },
    period: {
      id: "konsultasi gratis",
      en: "free consultation",
    },
    features: {
      id: [
        "Arsitektur logika bisnis kustom",
        "Dashboard visualisasi metrik & laporan",
        "Sistem formulir interaktif & kalkulasi dinamis",
        "Desain UI/UX eksklusif sesuai alur kerja",
        "Struktur kode modular siap skala besar",
        "Konsultasi teknis intensif & panduan implementasi",
      ],
      en: [
        "Tailored custom business logic architecture",
        "Metrics visualization dashboard & reporting",
        "Interactive forms & dynamic calculation workflows",
        "Exclusive UI/UX custom-built for your team",
        "Modular code foundation engineered for scale",
        "In-depth technical consultation & onboarding",
      ],
    },
    whatsappContext: {
      id: "Halo BionoraDev, saya ingin berdiskusi mengenai paket CUSTOM (Web Application / Dashboard).",
      en: "Hello BionoraDev, I want to discuss a CUSTOM (Web App / Dashboard) project.",
    },
  },
];
