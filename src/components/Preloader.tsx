import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FawzaanaLogo } from './FawzaanaLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 550);
          }, 180);
          return 100;
        }
        const diff = Math.floor(Math.random() * 22) + 12;
        return Math.min(100, prev + diff);
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBFBF9] text-[#121212]"
        >
          <div className="flex flex-col items-center text-center px-4 max-w-md">
            {/* Authentic Gold Circular Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 drop-shadow-xl"
            >
              <FawzaanaLogo size={76} />
            </motion.div>

            {/* Brand Title with expanding tracking */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.15em' }}
              animate={{ opacity: 1, letterSpacing: '0.35em' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-bold tracking-[0.35em] text-[#121212] uppercase font-display pl-2"
            >
              FAWZAANA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.25em] text-neutral-400 mt-2 font-medium"
            >
              Office Furniture Solutions · Chennai
            </motion.p>

            {/* Subtle hairline progress line */}
            <div className="w-52 h-[2px] bg-neutral-200 mt-8 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-[#121212]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              />
            </div>

            <span className="text-[11px] font-mono tabular-nums text-neutral-400 mt-3 font-semibold">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
