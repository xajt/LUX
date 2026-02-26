'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import BookingModal from '../BookingModal';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-gradient-to-b from-lux-ocean to-lux-navy text-lux-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-lux-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Set Sail?
          </h2>
          <p className="text-lux-gold text-sm uppercase tracking-wider mb-6">
            Your Exclusive Charter Awaits
          </p>
          <p className="text-lux-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Doświadcz piękna Archipelagu La Maddalena na własnych warunkach.
            Skontaktuj się z nami, aby zaplanować niezapomniane doświadczenie na wodzie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-lux-gold text-lux-navy px-8 py-4 text-lg font-medium rounded hover:bg-lux-sand transition-all duration-300 hover:scale-105"
            >
              Request Your Charter
            </button>
            <a
              href="mailto:info@lux-charter.com"
              className="border-2 border-lux-white/30 text-lux-white px-8 py-4 text-lg font-medium rounded hover:border-lux-white hover:bg-lux-white/10 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <p className="text-lux-white/50 text-sm mt-8">
            Hours are flexible and can be adjusted based on route and weather conditions.
          </p>
        </motion.div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
