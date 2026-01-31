'use client';

import { motion } from 'framer-motion';

interface FloatingRoseProps {
  delay?: number;
  duration?: number;
  x?: string;
}

export default function FloatingRose({ delay = 0, duration = 8, x = '0%' }: FloatingRoseProps) {
  return (
    <motion.div
      className="absolute text-4xl md:text-6xl opacity-70"
      initial={{ y: '-10%', x, rotate: 0 }}
      animate={{
        y: '110vh',
        rotate: 360,
        x: [x, `calc(${x} + 20px)`, `calc(${x} - 20px)`, x],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        x: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }
      }}
    >
      🌹
    </motion.div>
  );
}
