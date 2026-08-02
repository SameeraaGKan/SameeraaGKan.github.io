import { RippleCanvas } from './RippleCanvas';
import { Magnetic } from '../common/Magnetic';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="home">
      <RippleCanvas containerId="home" />
      <div className="hero-container">
        <div className="hero-inner">
          <div className="eyebrow">Dallas, Texas — Open to 2027 New Grad Roles</div>
          <h1 className="hero-headline">
            Sameeraa <em>K</em>
          </h1>
          <p className="hero-tagline">Building systems that ship.</p>
          <p className="hero-sub">
            Computer science student building full-stack systems and ML-driven tools — with a design-first eye for
            how they should feel to use. Open to Forward Deployed Engineer / SWE roles for the 2027 new-grad cycle.
          </p>
          <div className="btn-row">
            <Magnetic>
              <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noopener">
                View Résumé
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href="#contact">
                Get in Touch
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span className="line"></span> SCROLL
      </div>
    </section>
  );
}
