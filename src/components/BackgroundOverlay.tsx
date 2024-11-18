import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundOverlay({ color }: { color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: color,
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
}
