import React from 'react';
import { FadeUp } from '../components/ui/FadeUp';
import { Hero } from '../components/sections/Hero';
import { CapabilityBar } from '../components/sections/CapabilityBar';
import { Services } from '../components/sections/Services';
import { Solutions } from '../components/sections/Solutions';
import { Portfolio } from '../components/sections/Portfolio';
import { Process } from '../components/sections/Process';
import { Pricing } from '../components/sections/Pricing';
import { WhyBionoraDev } from '../components/sections/WhyBionoraDev';
import { TechStack } from '../components/TechStack';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';

export function Home({ locale, t }) {
  return (
    <main className="min-h-screen">
      <FadeUp>
        <Hero locale={locale} t={t} />
      </FadeUp>
      <FadeUp>
        <CapabilityBar t={t} />
      </FadeUp>
      <FadeUp>
        <Services locale={locale} t={t} />
      </FadeUp>
      <FadeUp>
        <Solutions locale={locale} t={t} />
      </FadeUp>
      <FadeUp>
        <Portfolio locale={locale} t={t} />
      </FadeUp>
      <FadeUp>
        <TechStack t={t} />
      </FadeUp>
      <FadeUp>
        <Process t={t} />
      </FadeUp>
      <FadeUp>
        <Pricing locale={locale} t={t} />
      </FadeUp>
      <FadeUp>
        <WhyBionoraDev t={t} />
      </FadeUp>
      <FadeUp>
        <Testimonials t={t} />
      </FadeUp>
      <FadeUp>
        <FAQ locale={locale} t={t} />
      </FadeUp>
      <FadeUp>
        <FinalCTA locale={locale} t={t} />
      </FadeUp>
    </main>
  );
}
