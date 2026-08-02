import { motion } from 'framer-motion';
import { roles, award, leadership } from '../../data/experience';
import { RoleCard } from './RoleCard';
import { fadeUp, viewportOnce } from '../../lib/scrollReveal';
import { RevealHeading } from '../common/RevealHeading';
import './Highlights.css';

export function Highlights() {
  return (
    <section className="section section-jade" id="highlights">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">Highlights</span>
          <RevealHeading className="section-title jade-title">Roles, wins, and where I lead.</RevealHeading>
        </div>

        <div className="role-grid">
          {roles.map((role) => (
            <RoleCard role={role} key={role.id} />
          ))}
        </div>

        <motion.div
          className="award-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="award-badge">Award</span>
          <div>
            <h4>{award.title}</h4>
            <p>{award.description}</p>
            <span className="award-issuer">{award.issuer}</span>
          </div>
        </motion.div>

        {leadership.length > 0 && (
          <div className="leadership-grid">
            {leadership.map((item) => (
              <motion.div
                className="leadership-card"
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {item}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
