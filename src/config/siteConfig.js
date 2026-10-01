/**
 * BionoraDev Site Configuration
 * Single source of truth for runtime variables, contact, branding, and defaults.
 */
export const siteConfig = {
  brand: {
    name: "BionoraDev",
    wordmarkFirst: "Bionora",
    wordmarkSecond: "Dev",
    tagline: "Web Development for a Better Tomorrow",
    taglineUppercase: "WEB DEVELOPMENT FOR A BETTER TOMORROW",
    kicker: "BUILD · DEVELOP · INNOVATE",
    taglineBullets: "Web Development for a Better Tomorrow",
    foundedYear: 2026,
    logo: "/assets/logo/logoAja.png",
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
      id: "BionoraDev — Web Development for a Better Tomorrow",
      en: "BionoraDev — Web Development for a Better Tomorrow",
    },
    description: {
      id: "Solusi web modern untuk bisnis Anda. Dari website profesional hingga aplikasi web yang scalable dan siap masa depan. Web Development for a Better Tomorrow.",
      en: "Modern web solutions for your business. From professional websites to scalable, future-ready web applications. Web Development for a Better Tomorrow.",
    },
  },
};
