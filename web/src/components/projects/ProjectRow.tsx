import { useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { viewportOnce } from '../../lib/scrollReveal';
import type { Project } from '../../data/projects';
import { ScrambleText, type ScrambleHandle } from '../common/ScrambleText';
import './ProjectRow.css';

function rowVariants(index: number): Variants {
  const rotate = index % 2 === 0 ? -1.5 : 1.5;
  return {
    hidden: { opacity: 0, y: 20, rotate },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };
}

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const href = project.url ?? project.repo;
  const scrambleRef = useRef<ScrambleHandle>(null);
  const handleHoverStart = () => scrambleRef.current?.scramble();

  const content = (
    <>
      <span className="project-num">{project.num}</span>
      <div className="project-title">
        <ScrambleText text={project.title} ref={scrambleRef} />
        <span>{project.description}</span>
      </div>
      <div className="project-tools">{project.tools.join(' · ')}</div>
    </>
  );

  const className = `project-row${project.flagship ? ' project-row-flagship' : ''}`;

  return href ? (
    <motion.a
      className={className}
      href={href}
      target="_blank"
      rel="noopener"
      variants={rowVariants(index)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      onHoverStart={handleHoverStart}
    >
      {content}
    </motion.a>
  ) : (
    <motion.div
      className={className}
      variants={rowVariants(index)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      onHoverStart={handleHoverStart}
    >
      {content}
    </motion.div>
  );
}
