import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectRow } from './ProjectRow';
import { Magnetic } from '../common/Magnetic';
import { RevealHeading } from '../common/RevealHeading';
import './Projects.css';

const VISIBLE_COUNT = 4;

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const initial = projects.slice(0, VISIBLE_COUNT);
  const rest = projects.slice(VISIBLE_COUNT);
  const remaining = rest.length;

  return (
    <section className="section" id="work">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">Selected Work</span>
          <RevealHeading className="section-title">A few things I've shipped.</RevealHeading>
        </div>
        <div className="project-list">
          {initial.map((project, i) => (
            <ProjectRow project={project} index={i} key={project.id} />
          ))}
          <AnimatePresence initial={false}>
            {expanded &&
              rest.map((project, i) => (
                <ProjectRow project={project} index={VISIBLE_COUNT + i} key={project.id} />
              ))}
          </AnimatePresence>
        </div>
        {remaining > 0 && (
          <Magnetic strength={0.25}>
            <motion.button className="project-more" onClick={() => setExpanded((v) => !v)} layout>
              {expanded ? 'Show less ↑' : `More projects (${remaining}) ↓`}
            </motion.button>
          </Magnetic>
        )}
      </div>
    </section>
  );
}
