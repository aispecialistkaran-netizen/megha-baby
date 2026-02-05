"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoveLetterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Main Button */}
      <div className="relative flex justify-center items-center py-16">
        <motion.button
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
          className="relative px-10 py-5 bg-gradient-to-r from-pink-400 via-pink-300 to-rose-400 text-white rounded-full text-xl font-semibold shadow-2xl overflow-hidden"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Heartbeat pulse effect */}
          <motion.div
            className="absolute inset-0 bg-pink-200 rounded-full opacity-50"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <span className="relative z-10">💌 Click to read my heart</span>

          {/* Floating hearts on hover */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    initial={{
                      bottom: "50%",
                      left: `${20 + i * 15}%`,
                      opacity: 0,
                    }}
                    animate={{
                      bottom: "150%",
                      opacity: [0, 1, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    💖
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Love Letter Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Floating rose petals */}
            <div className="fixed inset-0 pointer-events-none z-40">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-3xl"
                  initial={{
                    top: "-10%",
                    left: `${Math.random() * 100}%`,
                    rotate: 0,
                  }}
                  animate={{
                    top: "110%",
                    rotate: 360,
                    x: [0, 50, -50, 0],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  🌹
                </motion.div>
              ))}
            </div>

            {/* Envelope Container */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <div className="relative pointer-events-auto">
                {/* Envelope */}
                <motion.div className="relative w-[500px] max-w-[90vw]">
                  {/* Envelope back */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg shadow-2xl" />
                  
                  {/* Envelope flap - opens upward */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-pink-300 to-rose-300 origin-top"
                    style={{
                      clipPath: "polygon(0 0, 50% 60%, 100% 0)",
                    }}
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -180 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />

                  {/* Letter inside */}
                  <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: -50, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="relative bg-gradient-to-br from-pink-50 to-white p-10 rounded-lg shadow-xl mx-4 my-4"
                  >
                    {/* Handwritten style letter */}
                    <div className="font-serif text-gray-700 space-y-6">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className="text-2xl font-bold text-pink-600 italic"
                      >
                        Megha,
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        className="space-y-4 text-lg leading-relaxed"
                      >
                        <p className="italic">
                          Every smile of yours is my favorite view.
                        </p>
                        <p className="italic">
                          Every tear of yours is my responsibility.
                        </p>
                        <p className="italic font-semibold">
                          My heart chose you — again and again 💖
                        </p>
                      </motion.div>

                      {/* Decorative hearts */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.2, type: "spring" }}
                        className="flex justify-center gap-2 text-2xl pt-4"
                      >
                        💕 💖 💕
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Close button with sparkle effect */}
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, type: "spring" }}
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full text-white font-bold shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ✨
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
