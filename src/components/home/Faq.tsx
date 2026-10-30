import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { FAQS } from '@/data/faqs';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-4xl mx-auto px-margin space-y-space-xl">
        <div className="text-center space-y-space-xs">
          <span className="font-label-md text-label-md text-tertiary font-semibold uppercase tracking-wider">
            Clarity &amp; Confidence
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Everything you need to know about our engagement structure, Core Web Vitals guarantees, and timelines.
          </p>
        </div>
        <div className="space-y-space-sm">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-space-md text-left px-space-lg py-space-md font-headline-sm text-headline-sm text-on-surface"
                >
                  {item.question}
                  <Icon name="expand_more" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-space-lg pb-space-md font-body-md text-body-md text-on-surface-variant">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
