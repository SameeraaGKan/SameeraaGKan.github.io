import { Card } from './Card';
import { RevealHeading } from '../common/RevealHeading';
import './About.css';

export function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">About</span>
          <RevealHeading className="section-title">
            Systems that are useful and human-centered — not just functional.
          </RevealHeading>
        </div>
        <div className="about-grid">
          <Card>
            <h3>Focus</h3>
            <p>
              I build across the stack — React and Nuxt frontends, FastAPI and PostgreSQL backends, and ML
              pipelines with scikit-learn and XGBoost. Most recently: a production multiplayer app, a fine-tuned
              classifier, and a RAG pipeline over real student data.
            </p>
            <div className="tag-row">
              <span className="tag">React</span>
              <span className="tag">FastAPI</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Scikit-learn</span>
            </div>
          </Card>
          <Card>
            <h3>Education</h3>
            <p>
              B.S. Computer Science, Minor in Business Administration — The University of Texas at Dallas, Naveen
              Jindal School of Management. Graduating May 2027, CPT-eligible.
            </p>
          </Card>
          <Card wide>
            <h3>Currently</h3>
            <p>
              Founding-team software engineering experience at Predica Inc., paired with a design-first mindset —
              I care how systems feel to use, not just whether they function. Full detail on current roles is in
              Highlights below.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
