import './Nav.css';

export function Nav() {
  return (
    <nav className="nav">
      <a href="#home" className="nav-mark">
        SK
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#writing">Writing</a>
        <a href="#photography">Photography</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
