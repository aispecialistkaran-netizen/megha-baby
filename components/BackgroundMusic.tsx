'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
  }, []);

  return (
    <>
      {/* Audio Element - You can replace with your own music URL */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/像晴天像雨天（电视剧《难哄》心动曲）.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Music Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', bounce: 0.5 }}
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-rose-400 to-pink-400 text-white p-4 rounded-full shadow-2xl hover:from-rose-500 hover:to-pink-500 transition-all duration-300 glow-pink"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl animate-pulse">🎵</span>
              <span className="text-sm font-romantic hidden sm:inline">Playing...</span>
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl">🎶</span>
              <span className="text-sm font-romantic hidden sm:inline">Play Music</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
