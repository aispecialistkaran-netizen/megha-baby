'use client';

import { motion } from 'framer-motion';
import FloatingRose from './FloatingRose';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-rose-300 to-orange-200">
      {/* Floating Roses */}
      <FloatingRose delay={0} x="10%" duration={10} />
      <FloatingRose delay={2} x="30%" duration={12} />
      <FloatingRose delay={4} x="50%" duration={9} />
      <FloatingRose delay={1} x="70%" duration={11} />
      <FloatingRose delay={3} x="90%" duration={10} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Teddy Bear */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
          className="text-9xl md:text-[12rem] mb-8 inline-block animate-float"
        >
          🧸
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-cute text-5xl md:text-7xl lg:text-8xl text-rose-600 mb-6 text-shadow-soft"
        >
          For My Forever
        </motion.h1>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, type: 'spring' }}
          className="font-romantic text-6xl md:text-8xl text-rose-700 mb-8 animate-pulse-soft"
        >
          Megha baby 💖
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-romantic text-2xl md:text-4xl text-rose-600 max-w-3xl mx-auto leading-relaxed"
        >
          Every heartbeat of mine whispers your name.
        </motion.p>

        {/* Decorative Hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 text-4xl space-x-4"
        >
          <span className="inline-block animate-heartbeat">💝</span>
          <span className="inline-block animate-heartbeat" style={{ animationDelay: '0.2s' }}>💗</span>
          <span className="inline-block animate-heartbeat" style={{ animationDelay: '0.4s' }}>💖</span>
        </motion.div>
      </div>

      {/* Soft Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-rose-300/30 pointer-events-none" />
    </section>
  );
}
