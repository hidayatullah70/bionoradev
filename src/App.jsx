import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { Home } from './pages/Home';
import { useTheme } from './hooks/useTheme';
import { useLocale } from './hooks/useLocale';

export default function App() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const { locale, setLocale, toggleLocale, t } = useLocale();

  return (
    <div className="flex flex-col min-h-screen bg-bg text-txt font-sans">
      {/* Sticky Global Navigation */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        toggleTheme={toggleTheme}
        locale={locale}
        setLocale={setLocale}
        toggleLocale={toggleLocale}
        t={t}
      />

      {/* Main Single Page Content */}
      <div className="flex-1">
        <Home locale={locale} t={t} />
      </div>

      {/* Footer */}
      <Footer locale={locale} t={t} />

      {/* Accessible Floating WhatsApp Conversion Widget */}
      <FloatingWhatsApp locale={locale} t={t} />
    </div>
  );
}
