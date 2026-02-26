'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SupportoRistoranti() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="restaurants" className="py-20 md:py-32 px-6 bg-lux-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-lux-sand"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lux-ocean/20 to-lux-sand flex items-center justify-center">
              <span className="text-lux-navy/30 text-sm">Seaside Restaurant Image Placeholder</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-lux-navy mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Supporto Ristoranti
            </h2>
            <p className="text-lux-gold text-sm uppercase tracking-wider mb-6">
              Dining by the Sea
            </p>
            <div className="space-y-4 text-lux-navy/70 leading-relaxed">
              <p>
                Nie przewidziano usługi kuchennej na pokładzie, aby zachować elastyczność
                i pozwolić Ci wybrać najlepsze doświadczenia kulinarne.
              </p>
              <p>
                Możliwość wysadzenia w restauracjach osiągalnych drogą morską —
                od prostych trattorii po ekskluzywne restauracje z widokiem na morze.
              </p>
              <p>
                Wsparcie w rezerwacji zgodnie z preferencjami klienta.
                Dostęp do wybranych miejsc dzięki lokalnym relacjom operacyjnym.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-lux-navy/60">
                <svg className="w-5 h-5 text-lux-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Reservation Support</span>
              </div>
              <div className="flex items-center gap-2 text-lux-navy/60">
                <svg className="w-5 h-5 text-lux-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Sea Access Restaurants</span>
              </div>
              <div className="flex items-center gap-2 text-lux-navy/60">
                <svg className="w-5 h-5 text-lux-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Local Recommendations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
