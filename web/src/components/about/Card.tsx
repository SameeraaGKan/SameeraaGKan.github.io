import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, viewportOnce } from '../../lib/scrollReveal';
import './Card.css';

export function Card({ wide, children }: { wide?: boolean; children: ReactNode }) {
  return (
    <motion.div
      className={`card${wide ? ' card-wide' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}
