'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const specs = [
  { label: 'Engine', value: '400 HP' },
  { label: 'Electric Table', value: 'Yes' },
  { label: 'Private Cabin', value: 'With Bathroom' },
  { label: 'Audio System', value: 'HERTZ 1000W' },
  { label: 'Amenities', value: 'Fridge & Sink' },
  { label: 'Bow Thruster', value: 'Yes' },
];

export default function IlMezzo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="boat" className="py-20 md:py-32 px-6 bg-lux-cream">
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
              Il Mezzo
            </h2>
            <p className="text-lux-gold text-sm uppercase tracking-wider mb-6">
              LUX UNIT — Built for Performance
            </p>
            <p className="text-lux-navy/70 leading-relaxed mb-8">
              Luksusowy RIB o wysokich osiągach zaprojektowany do długich tras dziennych.
              Skupienie na osiągach, autonomii i długim zasięgu dziennym (np. Bonifacio).
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-lux-white p-4 rounded-lg"
                >
                  <p className="text-xs text-lux-navy/50 uppercase tracking-wider">{spec.label}</p>
                  <p className="text-lux-ocean font-medium mt-1">{spec.value}</p>
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
              <span className="text-lux-navy/30 text-sm">RIB Boat Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
