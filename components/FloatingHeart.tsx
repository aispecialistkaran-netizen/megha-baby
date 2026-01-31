'use client';

import { motion } from 'framer-motion';

interface FloatingHeartProps {
  delay?: number;
  duration?: number;
  x?: string;
  size?: string;
}

export default function FloatingHeart({ 
  delay = 0, 
  duration = 6, 
  x = '50%',
  size = 'text-3xl'
}: FloatingHeartProps) {
  return (
    <motion.div
      className={`absolute ${size} opacity-60`}
      initial={{ y: '100%', x, scale: 0 }}
      animate={{
        y: '-10%',
        scale: [0, 1, 1, 0],
        x: [x, `calc(${x} + 30px)`, `calc(${x} - 30px)`, x],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      💕
    </motion.div>
  );
}
