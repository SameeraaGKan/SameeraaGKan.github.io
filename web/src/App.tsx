import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { IntroMosaic } from './components/intro/IntroMosaic';
import { CustomCursor } from './components/common/CustomCursor';
import { Marquee } from './components/common/Marquee';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Highlights } from './components/highlights/Highlights';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import { Certifications } from './components/certifications/Certifications';
import { Writing } from './components/writing/Writing';
import { Photography } from './components/photography/Photography';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <>
      <CustomCursor />
      <IntroMosaic />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Highlights />
      <Projects />
      <Skills />
      <Certifications />
      <Writing />
      <Photography />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
