'use client';

import { motion } from 'framer-motion';
import FloatingHeart from './FloatingHeart';

export default function LoveMessageSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush-100 via-rose-100 to-pink-100 py-20">
      {/* Floating Hearts Background */}
      <FloatingHeart delay={0} x="15%" duration={8} />
      <FloatingHeart delay={1} x="35%" duration={7} size="text-4xl" />
      <FloatingHeart delay={2} x="55%" duration={9} size="text-2xl" />
      <FloatingHeart delay={1.5} x="75%" duration={8} size="text-5xl" />
      <FloatingHeart delay={0.5} x="85%" duration={7} />

      {/* Message Card */}
      <motion.div
        initial={{ scale: 0, rotate: -5 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className="relative z-10 max-w-3xl mx-4 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-rose-200"
      >
        {/* Decorative Corner Hearts */}
        <div className="absolute -top-4 -left-4 text-4xl animate-heartbeat">💝</div>
        <div className="absolute -top-4 -right-4 text-4xl animate-heartbeat" style={{ animationDelay: '0.3s' }}>💝</div>
        <div className="absolute -bottom-4 -left-4 text-4xl animate-heartbeat" style={{ animationDelay: '0.6s' }}>💝</div>
        <div className="absolute -bottom-4 -right-4 text-4xl animate-heartbeat" style={{ animationDelay: '0.9s' }}>💝</div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-romantic text-5xl md:text-6xl text-rose-600 mb-8 text-center"
        >
          Shivangi baby,
        </motion.h2>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="font-romantic text-3xl md:text-4xl text-rose-700 leading-relaxed text-center"
        >
          You are my peace, my chaos, my smile, my home.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="font-romantic text-3xl md:text-4xl text-rose-700 leading-relaxed text-center mt-6"
        >
          With you, forever feels too short 💕
        </motion.p>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, type: 'spring' }}
          className="mt-8 text-center text-6xl"
        >
          ❤️
        </motion.div>
      </motion.div>
    </section>
  );
}
