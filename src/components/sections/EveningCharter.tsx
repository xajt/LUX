'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    title: 'Less Traffic',
    description: 'Ikoniczne lokalizacje jak Porto Madonna i Spargi są mniej zatłoczone.',
  },
  {
    title: 'Perfect Temperature',
    description: 'Zmniejszony ruch nautyczny i niższe temperatury dla większego komfortu.',
  },
  {
    title: 'Better Access',
    description: 'Lepszy dostęp do chronionych zatok i restauracji osiągalnych drogą morską.',
  },
  {
    title: 'Exclusive Experience',
    description: 'Bardziej cicha i ekskluzywna doświadczenie żeglugi o zachodzie słońca.',
  },
];

export default function EveningCharter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="evening" className="py-20 md:py-32 px-6 bg-gradient-to-b from-lux-navy to-lux-ocean text-lux-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-lux-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Evening Charter
            </h2>
            <p className="text-lux-gold text-sm uppercase tracking-wider mb-6">
              Sunset Magic on the Water
            </p>
            <p className="text-lux-white/80 leading-relaxed mb-8">
              Od maja do sierpnia, wieczorne rejsy od 18:00 oferują unikalną perspektywę
              archipelagu. Doświadcz magii sardyńskich zachodów słońca z wody.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-lux-gold/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-lux-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lux-white">{benefit.title}</h3>
                    <p className="text-sm text-lux-white/60">{benefit.description}</p>
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
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-lux-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lux-gold/20 to-lux-ocean/50 flex items-center justify-center">
              <span className="text-lux-white/30 text-sm">Sunset Boat Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
