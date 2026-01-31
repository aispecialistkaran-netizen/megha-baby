'use client';

import { motion } from 'framer-motion';

export default function CuteCharactersSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-200 via-pink-200 to-blush-200 py-20">
      {/* Falling Roses */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-60"
          initial={{ y: -100, x: `${i * 12}%`, rotate: 0 }}
          animate={{
            y: '110vh',
            rotate: 360,
          }}
          transition={{
            duration: 8 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          🌹
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Cartoon Couple */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex justify-center items-end gap-4 mb-8"
        >
          {/* Boy */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-8xl md:text-9xl"
          >
            👨
          </motion.div>

          {/* Heart between them */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-6xl md:text-7xl mb-8"
          >
            ❤️
          </motion.div>

          {/* Girl */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-8xl md:text-9xl"
          >
            👩
          </motion.div>
        </motion.div>

        {/* Teddy Bear */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, type: 'spring', bounce: 0.6 }}
          className="text-7xl md:text-8xl mb-8 inline-block animate-float"
        >
          🧸
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-4 border-rose-300"
        >
          <p className="font-romantic text-4xl md:text-5xl text-rose-600 leading-relaxed">
            Together, always and forever 🌹
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex justify-center gap-6 text-5xl"
        >
          <span className="animate-heartbeat">💑</span>
          <span className="animate-heartbeat" style={{ animationDelay: '0.3s' }}>💕</span>
          <span className="animate-heartbeat" style={{ animationDelay: '0.6s' }}>🌸</span>
        </motion.div>
      </div>
    </section>
  );
}
