import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '../../lib/scrollReveal';
import type { Photo } from '../../data/photography';
import './PhotoGrid.css';

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <motion.div
      className="photo-grid"
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {photos.map((photo) => (
        <motion.figure className="photo-tile" variants={fadeUp} key={photo.id}>
          <img src={photo.src} alt={photo.caption} loading="lazy" />
          <figcaption>{photo.caption}</figcaption>
        </motion.figure>
      ))}
    </motion.div>
  );
}
