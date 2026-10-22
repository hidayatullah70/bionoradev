/**
 * BionoraDev Site Configuration
 * Single source of truth for runtime variables, contact, branding, and defaults.
 */
export const siteConfig = {
  brand: {
    name: "BionoraDev",
    wordmarkFirst: "Bionora",
    wordmarkSecond: "Dev",
    tagline: "Crafting Digital Spaces with Precision and Soul",
    taglineUppercase: "CRAFTING DIGITAL SPACES WITH PRECISION AND SOUL",
    kicker: "BUILD · DEVELOP · INNOVATE",
    taglineBullets: "Crafting Digital Spaces with Precision and Soul",
    foundedYear: 2026,
    logo: "/assets/logo/logoDark.png",
    logoLight: "/assets/logo/logoLight.png",
    logoDark: "/assets/logo/logoDark.png",
    websiteUrl: "https://bionora.my.id/",
    philosophy: {
      letterB: "Melambangkan Bionora (gabungan nama anak dan istri), juga merepresentasikan fondasi yang kuat, stabil, dan berorientasi pada masa depan.",
      codeSymbol: "Mewakili dunia teknologi, pengembangan web, dan semangat belajar yang terus berkembang.",
      dynamicShape: "Garis diagonal melambangkan gerak, pertumbuhan, kemajuan, dan kreativitas tanpa batas.",
      colorsNavySlate: "Biru navy melambangkan profesionalisme, kepercayaan, dan ketenangan. Abu melambangkan keseimbangan, ketelitian, dan teknologi. Bersama-sama mencerminkan solusi digital yang presisi namun tetap humanis.",
      overallMeaning: "Bionora Dev adalah simbol dari perjalanan, proses belajar, dan komitmen untuk menciptakan ruang digital yang fungsional, indah, dan bermakna — dengan presisi dan hati.",
    },
  },
  contact: {
    whatsappNumber: "6281384224733",
    email: "contact@bionoradev.com",
    githubUrl: "https://github.com",
  },
  socials: [
    {
      id: "instagram",
      name: "Instagram",
      label: "Instagram (@prabu.nusantara)",
      url: "https://www.instagram.com/prabu.nusantara/",
      color: "#E4405F",
    },
    {
      id: "youtube",
      name: "YouTube",
      label: "YouTube (@BionoraDev)",
      url: "https://www.youtube.com/@BionoraDev",
      color: "#FF0000",
    },
    {
      id: "tiktok",
      name: "TikTok",
      label: "TikTok (@bionoradev)",
      url: "https://www.tiktok.com/@bionoradev",
      color: "#FE2C55",
    },
    {
      id: "facebook",
      name: "Facebook",
      label: "Facebook (BionoraDev)",
      url: "https://web.facebook.com/BionoraDev",
      color: "#1877F2",
    },
    {
      id: "x",
      name: "X",
      label: "X (@bionoradev)",
      url: "https://x.com/bionoradev/",
      color: "#FFFFFF",
    },
  ],
  defaults: {
    locale: "id",
    theme: "dark",
    whatsappMessage: {
      id: "Halo BionoraDev, saya ingin berdiskusi mengenai kebutuhan website untuk bisnis saya.",
      en: "Hello BionoraDev, I would like to discuss a website project.",
    },
  },
  seo: {
    title: {
      id: "BionoraDev — Jasa Bikin Website Murah Untuk UMKM Mulai 500rb",
en: "BionoraDev — Affordable Website Service for SMEs Starting at 500k",
    },
    description: {
      id: "Solusi web modern untuk bisnis Anda. Dari website profesional hingga aplikasi web yang scalable dan siap masa depan. Web Development for a Better Tomorrow.",
      en: "Modern web solutions for your business. From professional websites to scalable, future-ready web applications. Web Development for a Better Tomorrow.",
    },
  },
};
