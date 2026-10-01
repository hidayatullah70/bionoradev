import { useState, useEffect } from 'react';
import { messages } from '../i18n/messages';

const STORAGE_KEY = 'bionoradev-locale';

export function useLocale() {
  const [locale, setLocale] = useState(() => {
    if (typeof window === 'undefined') return 'id';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'id' || stored === 'en') {
      return stored;
    }
    return 'id'; // default to ID per SOT (Indonesian primary market)
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const updateLocale = (newLocale) => {
    if (newLocale === 'id' || newLocale === 'en') {
      setLocale(newLocale);
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, newLocale);
      }
    }
  };

  const toggleLocale = () => {
    updateLocale(locale === 'id' ? 'en' : 'id');
  };

  const t = messages[locale] || messages.id;

  return { locale, setLocale: updateLocale, toggleLocale, t };
}
