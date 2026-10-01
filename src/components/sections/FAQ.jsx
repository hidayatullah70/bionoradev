import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { faqData } from '../../data/faq';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { useReveal } from '../../hooks/useReveal';

export function FAQ({ locale, t }) {
  const [openId, setOpenId] = useState('faq-1');
  const revealRef = useReveal();

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const whatsAppUrl = buildWhatsAppUrl({
    locale,
    message: locale === 'id'
      ? "Halo BionoraDev, saya punya pertanyaan terkait pembuatan website yang belum ada di FAQ."
      : "Hello BionoraDev, I have a specific question not covered in the FAQ.",
  });

  return (
    <section id="faq" className="py-20 sm:py-28 relative scroll-mt-16 overflow-hidden">
      <Container className="max-w-4xl">
        <SectionHeading
          badge={t.faq.badge}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        {/* Accordion Container */}
        <div ref={revealRef} className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            const qText = item.question[locale] || item.question.id;
            const aText = item.answer[locale] || item.answer.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full min-h-[56px] px-6 py-4 flex items-center justify-between gap-4 text-left transition-colors hover:bg-surface-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="text-sm sm:text-base font-bold text-txt">
                    {qText}
                  </span>
                  <div
                    className={`p-1 rounded-full bg-surface-muted text-txt transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-accent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-6 pb-6 pt-2 text-xs sm:text-sm text-txt-muted leading-relaxed border-t border-border/50 animate-in fade-in duration-150"
                  >
                    {aText}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Helper / WhatsApp CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-muted/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-txt">
              {t.faq.moreQuestions}
            </h4>
            <p className="text-xs text-txt-muted mt-0.5">
              {locale === 'id' ? 'Tim kami siap berdiskusi langsung dan memberikan solusi terbaik.' : 'Our team is ready to discuss your specific requirements directly.'}
            </p>
          </div>

          <Button
            href={whatsAppUrl}
            variant="outline"
            size="sm"
            className="gap-2 shrink-0 group"
          >
            <WhatsAppIcon3D className="w-4 h-4 group-hover:scale-110 transition-transform" size={16} />
            <span>{t.faq.askWhatsapp}</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
