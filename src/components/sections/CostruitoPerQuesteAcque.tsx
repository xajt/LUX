'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Locally Built',
    description: 'Jednostki zbudowane lokalnie w La Maddalena z najwyższą uwagę do detali.',
  },
  {
    title: 'Shallow Water Ready',
    description: 'Zaprojektowane do żeglugi w płytkich wodach i wąskich przejściach archipelagu.',
  },
  {
    title: 'Optimized Stability',
    description: 'Stabilność kadłuba i manewrowość zoptymalizowane dla Cieśniny Bonifacio.',
  },
];

export default function CostruitoPerQuesteAcque() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="built" className="py-20 md:py-32 px-6 bg-lux-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-lux-navy mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Costruito per Queste Acque
            </h2>
            <p className="text-lux-gold text-sm uppercase tracking-wider mb-6">
              Built for These Waters
            </p>
            <p className="text-lux-navy/70 leading-relaxed mb-8">
              Nasze jednostki nie są zwykłymi łodziami — to narzędzia precyzyjnie
              zaprojektowane dla specyficznych warunków Archipelagu La Maddalena
              i Cieśniny Bonifacio.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-lux-ocean rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-lux-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lux-navy">{feature.title}</h3>
                    <p className="text-sm text-lux-navy/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-lux-sand order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lux-ocean/20 to-lux-sand flex items-center justify-center">
              <span className="text-lux-navy/30 text-sm">Local Boat Building Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
