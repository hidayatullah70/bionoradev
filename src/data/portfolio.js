/**
 * Portfolio Data Contract (API-SPEC compliant)
 * Real live client & production projects with verifiable URLs.
 * Explicit status: "client" | "demo" | "concept"
 */
export const portfolioData = [
  {
    id: "washup-laundry",
    name: "Washup Laundry",
    url: "https://washup-laundry.vercel.app/",
    domain: "washup-laundry.vercel.app",
    industry: {
      id: "Jasa Laundry & Cuci Kering",
      en: "Laundry & Garment Care",
    },
    category: "landing-page",
    categories: ["landing-page"],
    description: {
      id: "Landing page modern dan responsif untuk layanan jasa laundry kiloan dan satuan. Dilengkapi dengan katalog paket cuci kilat, estimasi tarif transparan, pemesanan antar-jemput cucian (pick-up & delivery), serta integrasi tombol order langsung ke WhatsApp customer service.",
      en: "Modern and responsive landing page for laundry services. Features express package catalogs, transparent pricing breakdown, pick-up & delivery request flow, and seamless direct WhatsApp ordering integration.",
    },
    technologies: ["HTML5 / CSS3", "Tailwind CSS", "JavaScript", "Mobile-First UI", "Vercel"],
    status: "client",
    gradient: "from-cyan-500/25 via-blue-500/15 to-blue-600/10",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    stats: {
      id: "Pemesanan Antar-Jemput & WhatsApp Terintegrasi",
      en: "Pick-up Booking & Direct WhatsApp Integration",
    },
    mockupType: "mobile-landing",
  },
  {
    id: "dewi-catering",
    name: "Dewi Catering & Events",
    url: "https://dewicatering.netlify.app/",
    domain: "dewicatering.netlify.app",
    industry: {
      id: "Kuliner, Katering & Acara Spesial",
      en: "Culinary & Event Catering Services",
    },
    category: "landing-page",
    categories: ["landing-page", "website"],
    description: {
      id: "Website landing page katering profesional untuk acara pernikahan, syukuran, instansi pemerintah/swasta, dan sekolah. Menampilkan galeri menu prasmanan autentik, paket tumpeng & nasi kotak custom, kepuasan pelanggan, serta konsultasi menu dan reservasi tanggal acara via WhatsApp.",
      en: "Professional catering and event landing page for weddings, corporate gatherings, and private events. Features authentic culinary galleries, customizable buffet and tumpeng packages, customer reviews, and direct WhatsApp menu consultation.",
    },
    technologies: ["React", "Tailwind CSS", "Netlify", "Interactive Menu", "Responsive Layout"],
    status: "client",
    gradient: "from-amber-500/20 via-orange-500/15 to-red-500/10",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    stats: {
      id: "Katalog Menu Interaktif & Reservasi Tanggal Acara",
      en: "Interactive Menu Catalog & Event Date Inquiries",
    },
    mockupType: "desktop-website",
  },
  {
    id: "rumah-berubat",
    name: "Rumah Berubat — Terapi Syaraf Kejepit",
    url: "https://rumah-berubat.vercel.app/",
    domain: "rumah-berubat.vercel.app",
    industry: {
      id: "Klinik Kesehatan & Terapi Alami",
      en: "Healthcare & Natural Spine Therapy",
    },
    category: "landing-page",
    categories: ["landing-page", "website"],
    description: {
      id: "Landing page klinik terapi pengobatan alami untuk syaraf kejepit, persendian, dan tulang tanpa operasi. Dilengkapi dengan edukasi gejala penyakit, metode terapi bertahap, testimoni pemulihan pasien, jam operasional, peta lokasi, serta pendaftaran jadwal berobat online melalui WhatsApp.",
      en: "Comprehensive healthcare landing page for a natural spine, joint, and pinched-nerve therapy clinic offering non-surgical treatments. Features symptom awareness guides, holistic treatment stages, patient recovery stories, location maps, and instant WhatsApp appointment scheduling.",
    },
    technologies: ["HTML5 / CSS3", "Tailwind CSS", "JavaScript", "Dark/Light Mode", "Vercel"],
    status: "client",
    gradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/10",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    stats: {
      id: "Edukasi Gejala & Reservasi Jadwal Terapi Online",
      en: "Symptom Education & Online Therapy Booking",
    },
    mockupType: "medical-landing",
  },
  {
    id: "bimasena-adhiraja",
    name: "PT Bimasena Adhirajasa Radhika",
    url: "https://bimasenaadhirajasaradika.com/",
    domain: "bimasenaadhirajasaradika.com",
    industry: {
      id: "Badan Usaha Jasa Pengamanan (BUJP) & Corporate Security",
      en: "Accredited Security Services & Corporate Protection",
    },
    category: "website",
    categories: ["website", "dashboard", "web-app"],
    description: {
      id: "Website profil korporat resmi dan sistem informasi layanan pengamanan profesional untuk Badan Usaha Jasa Pengamanan (BUJP). Menghadirkan profil legalitas badan usaha, sertifikasi personel Satpam Gada Pratama/Madya, portofolio penjagaan aset industri & perkantoran, pengawalan VIP, serta alur pengajuan kontrak kerja sama pengamanan terpadu.",
      en: "Official corporate website and integrated service information platform for an accredited security services firm (BUJP). Features verified regulatory credentials, certified security personnel management, asset protection deployment portfolios, VIP escort solutions, and structured corporate security partnership inquiries.",
    },
    technologies: ["Corporate Architecture", "Tailwind CSS", "JavaScript", "FontAwesome", "Custom CSS"],
    status: "client",
    gradient: "from-blue-600/30 via-indigo-600/20 to-slate-900/30",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    stats: {
      id: "Profil Korporat Resmi & Portofolio Pengamanan Terpadu",
      en: "Accredited Corporate Profile & Integrated Security",
    },
    mockupType: "corporate-dashboard",
  },
];
