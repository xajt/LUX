'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const departurePoints = [
  { name: 'La Maddalena', note: 'Main departure point' },
  { name: 'Palau', note: 'Convenient access' },
  { name: 'Cannigione', note: 'Costa Smeralda gateway' },
  { name: 'Baja Sardinia', note: 'Hotel pickups available' },
  { name: 'Porto Cervo', note: 'Premium marina access' },
];

export default function PuntiDiPartenza() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="departure" className="py-20 md:py-32 px-6 bg-lux-cream">
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
            Punti di Partenza
          </h2>
          <p className="text-lux-gold text-sm uppercase tracking-wider mb-6">
            Flexible Departure Locations
          </p>
          <p className="text-lux-navy/70 max-w-2xl mx-auto">
            Bezpośredni boarding z wybranych hoteli i marin prywatnych.
            Inne punkty wzdłuż Costa Smeralda na żądanie.
          </p>
        </motion.div>

        {/* Departure Points Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {departurePoints.map((point, index) => (
            <motion.div
              key={point.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-lux-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-lux-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-lux-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-lux-navy">{point.name}</h3>
              <p className="text-xs text-lux-navy/50 mt-1">{point.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 aspect-[16/9] max-w-4xl mx-auto rounded-lg overflow-hidden bg-lux-sand flex items-center justify-center"
        >
          <div className="text-center">
            <svg className="w-16 h-16 text-lux-navy/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-lux-navy/30">Map Placeholder — La Maddalena Archipelago</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
