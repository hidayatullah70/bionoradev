import { siteConfig } from '../config/siteConfig';

/**
 * Builds an encoded WhatsApp URL using central configuration.
 * @param {Object} options
 * @param {'id' | 'en'} [options.locale='id']
 * @param {string} [options.message]
 * @returns {string} WhatsApp HTTPS URL
 */
export function buildWhatsAppUrl({ locale = 'id', message } = {}) {
  const number = siteConfig.contact.whatsappNumber;
  const defaultMsg = siteConfig.defaults.whatsappMessage[locale] || siteConfig.defaults.whatsappMessage.id;
  const finalMsg = message ? message.trim() : defaultMsg;
  const encodedText = encodeURIComponent(finalMsg);
  
  return `https://wa.me/${number}?text=${encodedText}`;
}
