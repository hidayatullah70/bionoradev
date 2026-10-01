import React from 'react';
import { Hero } from '../components/sections/Hero';
import { CapabilityBar } from '../components/sections/CapabilityBar';
import { Services } from '../components/sections/Services';
import { Solutions } from '../components/sections/Solutions';
import { Portfolio } from '../components/sections/Portfolio';
import { Process } from '../components/sections/Process';
import { Pricing } from '../components/sections/Pricing';
import { WhyBionoraDev } from '../components/sections/WhyBionoraDev';
import { Technology } from '../components/sections/Technology';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';

export function Home({ locale, t }) {
  return (
    <main className="min-h-screen">
      <Hero locale={locale} t={t} />
      <CapabilityBar t={t} />
      <Services locale={locale} t={t} />
      <Solutions locale={locale} t={t} />
      <Portfolio locale={locale} t={t} />
      <Process t={t} />
      <Pricing locale={locale} t={t} />
      <WhyBionoraDev t={t} />
      <Technology t={t} />
      <Testimonials t={t} />
      <FAQ locale={locale} t={t} />
      <FinalCTA locale={locale} t={t} />
    </main>
  );
}
