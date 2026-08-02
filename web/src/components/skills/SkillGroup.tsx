import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/scrollReveal';
import type { SkillGroup as SkillGroupType } from '../../data/skills';
import './SkillGroup.css';

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <motion.div className="skill-group" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <span className="skill-group-label">{group.label}</span>
      <div className="skill-tag-col">
        {group.items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
