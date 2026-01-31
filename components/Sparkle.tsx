'use client';

import { motion } from 'framer-motion';

interface SparkleProps {
  delay?: number;
}

export default function Sparkle({ delay = 0 }: SparkleProps) {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-yellow-300 rounded-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
