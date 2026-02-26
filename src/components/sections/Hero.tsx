'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from '../BookingModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder: gradient background simulating ocean */}
        <div className="absolute inset-0 bg-gradient-to-b from-lux-ocean via-[#1a4a6e] to-lux-navy" />

        {/* Stock video placeholder - replace src with actual video */}
        {/*
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        */}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-lux-navy/30 via-lux-navy/40 to-lux-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-lux-white px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          LUX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-4 text-lux-sand"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Exclusive RIB Charter Experience
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl mb-10 opacity-80 max-w-2xl mx-auto leading-relaxed"
        >
          Discover the pristine waters of La Maddalena Archipelago, Costa Smeralda
          and Bonifacio with our premium charter experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-lux-gold text-lux-navy px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium rounded hover:bg-lux-sand transition-all duration-300 hover:scale-105"
          >
            Request Your Charter
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-lux-white/60"
        >
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
