'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Confetti from 'react-confetti';

export default function ProposalSection() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleYesClick = () => {
    setShowConfetti(true);
    setAnswered(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-300 via-pink-300 to-blush-300 py-20">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 1000}
          height={typeof window !== 'undefined' ? window.innerHeight : 1000}
          recycle={true}
          numberOfPieces={300}
          colors={['#fb7185', '#fda4af', '#fecdd3', '#ffe4e6', '#ff8fb3']}
        />
      )}

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Heartbeat Ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-8xl md:text-9xl mb-8"
        >
          💍
        </motion.div>

        {/* Main Question */}
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              {/* Glowing Background Box */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-rose-400 glow-pink mb-8">
                <motion.h2
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="font-romantic text-4xl md:text-6xl lg:text-7xl text-rose-600 leading-relaxed mb-4"
                >
                  Megha baby,
                </motion.h2>
                
                <motion.p
                  className="font-romantic text-3xl md:text-5xl lg:text-6xl text-rose-700 leading-relaxed animate-pulse-soft"
                >
                  Will you always be mine? 💖
                </motion.p>
              </div>

              {/* Yes Button with Sparkles */}
              <motion.div className="relative inline-block">
                {/* Sparkles around button */}
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -left-4 text-3xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                  className="absolute -top-4 -right-4 text-3xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 text-3xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                  className="absolute -bottom-4 -right-4 text-3xl"
                >
                  ✨
                </motion.div>

                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(251, 113, 133, 0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYesClick}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white font-romantic text-4xl md:text-5xl px-16 py-6 rounded-full shadow-2xl border-4 border-white hover:from-rose-600 hover:to-pink-600 transition-all duration-300 glow-pink"
                >
                  Yes! 💕
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border-4 border-rose-400 glow-pink"
            >
              {/* Hearts floating up */}
              <motion.div className="mb-8 flex justify-center gap-4">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ 
                      y: [-20, -100],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="text-5xl"
                  >
                    💖
                  </motion.span>
                ))}
              </motion.div>

              <motion.h3
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="font-cute text-5xl md:text-7xl text-rose-600 mb-6"
              >
                I love you endlessly 💖
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-romantic text-3xl md:text-4xl text-rose-700 leading-relaxed"
              >
                You are my today and all of my tomorrows
              </motion.p>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 flex justify-center gap-4 text-6xl"
              >
                <span className="animate-heartbeat">👫</span>
                <span className="animate-heartbeat" style={{ animationDelay: '0.3s' }}>💑</span>
                <span className="animate-heartbeat" style={{ animationDelay: '0.6s' }}>💝</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
