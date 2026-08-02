import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, viewportOnce } from '../../lib/scrollReveal';

export function RevealHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.h2>
  );
}
