'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: log form data (no backend)
    console.log('Booking request:', formData);
    alert('Thank you for your request! We will contact you shortly.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-lux-navy/80 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-lg sm:w-full bg-lux-white rounded-lg shadow-2xl z-50 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-lux-ocean text-lux-white px-6 py-4 flex items-center justify-between">
              <h2
                className="text-xl font-medium"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Request Your Charter
              </h2>
              <button
                onClick={onClose}
                className="text-lux-white/80 hover:text-lux-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-lux-navy mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-lux-sand rounded focus:outline-none focus:ring-2 focus:ring-lux-ocean focus:border-transparent text-lux-navy"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-lux-navy mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-lux-sand rounded focus:outline-none focus:ring-2 focus:ring-lux-ocean focus:border-transparent text-lux-navy"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-lux-navy mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-lux-sand rounded focus:outline-none focus:ring-2 focus:ring-lux-ocean focus:border-transparent text-lux-navy"
                    placeholder="+39 xxx xxx xxxx"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-lux-navy mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-lux-sand rounded focus:outline-none focus:ring-2 focus:ring-lux-ocean focus:border-transparent text-lux-navy"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-lux-navy mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-lux-sand rounded focus:outline-none focus:ring-2 focus:ring-lux-ocean focus:border-transparent text-lux-navy bg-lux-white"
                  >
                    <option value="">Select...</option>
                    <option value="1-2">1-2 guests</option>
                    <option value="3-4">3-4 guests</option>
                    <option value="5-6">5-6 guests</option>
                    <option value="7-8">7-8 guests</option>
                    <option value="8+">8+ guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-lux-navy mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-lux-sand rounded focus:outline-none focus:ring-2 focus:ring-lux-ocean focus:border-transparent text-lux-navy resize-none"
                  placeholder="Tell us about your ideal charter experience..."
                />
              </div>

              <p className="text-xs text-lux-navy/60 italic">
                * Hours are flexible and can be adjusted based on route and weather conditions.
              </p>

              <button
                type="submit"
                className="w-full bg-lux-ocean text-lux-white py-3 rounded font-medium hover:bg-lux-navy transition-colors"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
