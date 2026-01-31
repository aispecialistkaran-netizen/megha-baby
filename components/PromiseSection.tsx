'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PromiseSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-blush-100 to-rose-100 py-20">
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Floating Hearts Around Envelope */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            x: [-20, 0, -20],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 left-1/4 text-4xl"
        >
          💝
        </motion.div>
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            x: [20, 0, 20],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-10 right-1/4 text-4xl"
        >
          💝
        </motion.div>

        {/* Envelope Container */}
        <div className="relative">
          {/* Envelope - Closed */}
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            >
              <div className="text-9xl md:text-[12rem] mb-4 inline-block animate-float">
                💌
              </div>
              <p className="font-romantic text-2xl md:text-3xl text-rose-600 mt-4">
                Click to open my promise...
              </p>
            </motion.div>
          )}

          {/* Envelope Content - Open */}
          {isOpen && (
            <motion.div
              initial={{ scale: 0, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-rose-300"
            >
              {/* Envelope Icon at top */}
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-7xl mb-6"
              >
                💌
              </motion.div>

              {/* Promise Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="font-romantic text-3xl md:text-5xl text-rose-600 leading-relaxed mb-6">
                  I promise to love you louder on your quiet days
                </p>
                <p className="font-romantic text-3xl md:text-5xl text-rose-600 leading-relaxed">
                  and hold you tighter on your hard ones ❤️
                </p>
              </motion.div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="mt-8 flex justify-center gap-3 text-5xl"
              >
                <span className="animate-heartbeat">💕</span>
                <span className="animate-heartbeat" style={{ animationDelay: '0.2s' }}>💖</span>
                <span className="animate-heartbeat" style={{ animationDelay: '0.4s' }}>💗</span>
              </motion.div>

              {/* Bottom decoration */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="font-romantic text-2xl text-rose-500 mt-6 italic"
              >
                Forever yours
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
