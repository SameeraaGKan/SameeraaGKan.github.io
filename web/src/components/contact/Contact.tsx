import { RevealHeading } from '../common/RevealHeading';
import './Contact.css';

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-tag">Get in Touch</span>
        </div>
        <RevealHeading className="contact-title">
          Let's build
          <br />
          something worth
          <br />
          shipping.
        </RevealHeading>
        <div className="contact-links">
          <a href="mailto:sameeraagk883@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/sameeraakan118/" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="https://github.com/SameeraaGKan" target="_blank" rel="noopener">
            GitHub
          </a>
          <a href="https://devpost.com/sameeraagk883" target="_blank" rel="noopener">
            Devpost
          </a>
        </div>
      </div>
    </section>
  );
}
