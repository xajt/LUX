'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ChiSiamo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-lux-white">
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
            {/* Placeholder image */}
            <div className="absolute inset-0 bg-gradient-to-br from-lux-ocean/20 to-lux-sand flex items-center justify-center">
              <span className="text-lux-navy/30 text-sm">Team Image Placeholder</span>
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
              Chi Siamo
            </h2>
            <p className="text-lux-gold text-sm uppercase tracking-wider mb-6">
              Local Experience, Professional Excellence
            </p>
            <div className="space-y-4 text-lux-navy/70 leading-relaxed">
              <p>
                Młody zespół z ponad 10-letnim doświadczeniem operacyjnym w sektorze nautycznym.
                Nasze tło w obsłudze jachtów i codziennej logistyce zapewnia najwyższą jakość usług.
              </p>
              <p>
                Głęboka znajomość terenu Archipelagu La Maddalena, Costa Smeralda i Bonifacio
                pozwala nam oferować unikalne doświadczenia dostosowane do Twoich potrzeb.
              </p>
              <p className="font-medium text-lux-navy">
                Wynajem RIB wsparty przez lokalnych profesjonalistów już aktywnych w sektorze premium.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
