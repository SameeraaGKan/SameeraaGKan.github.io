import { skillGroups } from '../../data/skills';
import { SkillGroup } from './SkillGroup';
import { RevealHeading } from '../common/RevealHeading';
import './Skills.css';

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">Skills</span>
          <RevealHeading className="section-title">Tools I reach for, grouped by where they earn their keep.</RevealHeading>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup group={group} key={group.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
