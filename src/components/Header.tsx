'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  locale?: string;
}

const navLinks = [
  { href: '#about', label: 'Chi Siamo' },
  { href: '#boat', label: 'Il Mezzo' },
  { href: '#pricing', label: 'Prezzi' },
  { href: '#departure', label: 'Partenza' },
  { href: '#contact', label: 'Contatti' },
];

export default function Header({ locale = 'en' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(locale);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const switchLocale = (newLocale: string) => {
    setCurrentLocale(newLocale);
    // In production, this would use next-intl routing
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-lux-white/90 backdrop-blur-md border-b border-lux-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span
              className="text-2xl md:text-3xl font-semibold text-lux-ocean tracking-wide"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              LUX
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lux-navy hover:text-lux-ocean transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentLocale === 'en'
                    ? 'text-lux-ocean font-medium'
                    : 'text-lux-navy/60 hover:text-lux-navy'
                }`}
              >
                EN
              </button>
              <span className="text-lux-navy/30">|</span>
              <button
                onClick={() => switchLocale('it')}
                className={`px-2 py-1 rounded transition-colors ${
                  currentLocale === 'it'
                    ? 'text-lux-ocean font-medium'
                    : 'text-lux-navy/60 hover:text-lux-navy'
                }`}
              >
                IT
              </button>
            </div>

            {/* CTA Button */}
            <a
              href="#booking"
              className="bg-lux-ocean text-lux-white px-6 py-2.5 rounded text-sm font-medium hover:bg-lux-navy transition-colors"
            >
              Request Charter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-lux-navy"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-lux-white border-t border-lux-sand/50"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2 text-lux-navy hover:text-lux-ocean transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 py-2 border-t border-lux-sand/50 mt-4 pt-4">
                <button
                  onClick={() => switchLocale('en')}
                  className={`px-3 py-1.5 rounded text-sm ${
                    currentLocale === 'en'
                      ? 'bg-lux-ocean text-lux-white'
                      : 'bg-lux-sand text-lux-navy'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => switchLocale('it')}
                  className={`px-3 py-1.5 rounded text-sm ${
                    currentLocale === 'it'
                      ? 'bg-lux-ocean text-lux-white'
                      : 'bg-lux-sand text-lux-navy'
                  }`}
                >
                  Italiano
                </button>
              </div>

              {/* Mobile CTA */}
              <a
                href="#booking"
                onClick={closeMenu}
                className="block w-full bg-lux-ocean text-lux-white px-6 py-3 rounded text-center font-medium mt-4"
              >
                Request Charter
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
