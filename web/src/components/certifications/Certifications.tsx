import { motion } from 'framer-motion';
import { certifications } from '../../data/certifications';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/scrollReveal';
import { RevealHeading } from '../common/RevealHeading';
import './Certifications.css';

export function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">Certifications</span>
          <RevealHeading className="section-title">Courses and credentials I've completed.</RevealHeading>
        </div>
        <motion.div
          className="cert-grid"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {certifications.map((cert) => (
            <motion.div className="cert-card" variants={fadeUp} key={cert.name}>
              <h3>{cert.name}</h3>
              <div className="cert-meta">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
