import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/scrollReveal';
import type { Role } from '../../data/experience';
import './RoleCard.css';

export function RoleCard({ role }: { role: Role }) {
  return (
    <motion.div className="role-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <span className="role-period">{role.period}</span>
      <h3>{role.title}</h3>
      <span className="role-org">{role.org}</span>
      <p>{role.description}</p>
    </motion.div>
  );
}
