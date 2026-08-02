import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Marquee.css';

const ITEMS = ['Full-Stack', 'Machine Learning', 'Design-First', 'Shipping Software', 'Open to 2027 Roles'];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 24,
      ease: 'linear',
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  const content = ITEMS.join('   ·   ');

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={trackRef}>
        <span>{content}&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
        <span>{content}&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
