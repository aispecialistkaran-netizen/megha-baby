"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isZero, setIsZero] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2026-02-22T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsZero(false);
      } else {
        setIsZero(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center relative">
      {/* Heartbeat animation behind numbers */}
      <motion.div
        className="absolute inset-0 bg-pink-300/30 rounded-2xl blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 min-w-[100px] shadow-xl border-2 border-pink-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-5xl font-bold text-pink-600 text-center"
          >
            {value.toString().padStart(2, "0")}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-3 text-sm font-semibold text-pink-500 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );

  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 opacity-50" />

      {/* Glowing card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border-2 border-pink-200"
      >
        {/* Teddy bear decoration */}
        <motion.div
          className="absolute -top-12 -right-8 text-8xl"
          animate={{
            rotate: [-5, 5, -5],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🧸
        </motion.div>

        <AnimatePresence mode="wait">
          {!isZero ? (
            <motion.div
              key="countdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Header */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Our forever begins in… 💍
              </motion.h2>

              {/* Countdown timer */}
              <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
                <TimeUnit value={timeLeft.days} label="Days" />
                <span className="text-5xl text-pink-400 font-bold">:</span>
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <span className="text-5xl text-pink-400 font-bold">:</span>
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <span className="text-5xl text-pink-400 font-bold">:</span>
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
              </div>

              {/* Decorative hearts */}
              <motion.div
                className="flex justify-center gap-4 mt-8 text-3xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💖 💕 💖
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="text-center py-12"
            >
              {/* Celebration animation */}
              <div className="relative">
                {/* Floating hearts */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`heart-${i}`}
                    className="absolute text-4xl"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 400,
                      y: -200 - Math.random() * 100,
                      opacity: [0, 1, 0],
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    ❤️
                  </motion.div>
                ))}

                {/* Floating roses */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`rose-${i}`}
                    className="absolute text-4xl"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 500,
                      y: -250 - Math.random() * 100,
                      opacity: [0, 1, 0],
                      rotate: Math.random() * 720,
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    🌹
                  </motion.div>
                ))}

                <motion.h2
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent relative z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Today we become forever ❤️
                </motion.h2>

                <motion.div
                  className="mt-8 text-7xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  💑
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
