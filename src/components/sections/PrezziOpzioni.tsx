'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const pricingOptions = [
  {
    title: 'Half Day',
    duration: '4 hours',
    description: 'Perfect for a quick escape to nearby coves',
    included: ['Local aperitif', '1 glass of wine per person', 'Sparkling & still water'],
    popular: false,
  },
  {
    title: 'Full Day',
    duration: '8 hours',
    description: 'Explore the full archipelago at your pace',
    included: ['Local aperitif', '1 glass of wine per person', 'Sparkling & still water', 'Flexible route'],
    popular: true,
  },
  {
    title: 'Evening Charter',
    duration: 'From 18:00',
    description: 'Sunset cruise with less traffic, more magic',
    included: ['Local aperitif', '1 glass of wine per person', 'Sparkling & still water', 'Sunset experience'],
    popular: false,
  },
];

export default function PrezziOpzioni() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="py-20 md:py-32 px-6 bg-lux-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-lux-navy mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Prezzi & Opzioni
          </h2>
          <p className="text-lux-gold text-sm uppercase tracking-wider mb-6">
            Transparent Pricing, Premium Experience
          </p>
          <p className="text-lux-navy/70 max-w-2xl mx-auto">
            Wynajem dostępny na Half Day, Full Day oraz Evening Charter (od maja do sierpnia od 18:00).
            Paliwo wyłączone z wynajmu.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative rounded-xl p-8 ${
                option.popular
                  ? 'bg-lux-ocean text-lux-white shadow-xl scale-105'
                  : 'bg-lux-cream text-lux-navy'
              }`}
            >
              {option.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lux-gold text-lux-navy text-xs font-medium px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {option.title}
              </h3>
              <p className={`text-sm mb-4 ${option.popular ? 'text-lux-sand' : 'text-lux-gold'}`}>
                {option.duration}
              </p>
              <p className={`text-sm mb-6 ${option.popular ? 'text-lux-white/80' : 'text-lux-navy/70'}`}>
                {option.description}
              </p>

              <div className="border-t pt-6 mb-6 border-current/20">
                <p className="text-xs uppercase tracking-wider mb-3 opacity-60">Included</p>
                <ul className="space-y-2">
                  {option.included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-lux-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded font-medium transition-colors ${
                  option.popular
                    ? 'bg-lux-gold text-lux-navy hover:bg-lux-sand'
                    : 'bg-lux-ocean text-lux-white hover:bg-lux-navy'
                }`}
              >
                Request Quote
              </a>
            </motion.div>
          ))}
        </div>

        {/* PDF Download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/pricing.pdf"
            className="inline-flex items-center gap-2 text-lux-ocean hover:text-lux-navy transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Price List (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
