import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useSessionIntroGate } from '../../hooks/useSessionIntroGate';
import './IntroMosaic.css';

const PHOTOS = [
  '/photos/nature1.jpeg',
  '/photos/nature2.jpeg',
  '/photos/nature3.jpeg',
  '/photos/nature4.jpeg',
  '/photos/nature5.jpeg',
  '/photos/nature6.jpeg',
  '/photos/nature7.jpeg',
  '/photos/nature8.jpeg',
];

const CELL_PITCH = 42; // px, matches grid-auto-rows (38) + gap (4)
const HOLD_MS = 1300;

export function IntroMosaic() {
  const { shouldPlay, markPlayed } = useSessionIntroGate();
  const [visible, setVisible] = useState(shouldPlay);
  const [cells, setCells] = useState<{ cols: number; photos: string[] }>({ cols: 0, photos: [] });
  const overlayRef = useRef<HTMLDivElement>(null);
  const mosaicRef = useRef<HTMLDivElement>(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (!shouldPlay) return;

    const cols = Math.ceil(window.innerWidth / CELL_PITCH) + 1;
    const rows = Math.ceil(window.innerHeight / CELL_PITCH) + 1;
    const count = cols * rows;
    setCells({ cols, photos: Array.from({ length: count }, (_, i) => PHOTOS[i % PHOTOS.length]) });
  }, [shouldPlay]);

  useEffect(() => {
    if (!visible || cells.photos.length === 0 || !mosaicRef.current) return;

    const cellEls = mosaicRef.current.querySelectorAll('.mosaic-cell');
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.delayedCall(HOLD_MS / 1000, finishIntro);
      },
    });

    const cols = cells.cols;
    const DIAG_STAGGER = 0.006; // seconds per diagonal step

    tl.to(cellEls, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
      stagger: (i: number) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return (row + col) * DIAG_STAGGER;
      },
    });

    function finishIntro() {
      if (finishedRef.current) return;
      finishedRef.current = true;
      markPlayed();

      const finishTl = gsap.timeline({
        onComplete: () => setVisible(false),
      });
      finishTl
        .to(mosaicRef.current, { y: '-100%', duration: 0.9, ease: 'power3.inOut' }, 0)
        .to(overlayRef.current, { opacity: 0, duration: 0.6, ease: 'power2.out' }, 0.3);
    }

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, cells]);

  const handleSkip = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    markPlayed();
    gsap.killTweensOf([mosaicRef.current, overlayRef.current]);
    gsap
      .timeline({ onComplete: () => setVisible(false) })
      .to(mosaicRef.current, { y: '-100%', duration: 0.7, ease: 'power3.inOut' }, 0)
      .to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power2.out' }, 0.15);
  };

  if (!visible) return null;

  return (
    <div className="intro-overlay" ref={overlayRef}>
      <div className="bg-grid" />
      <div
        className="intro-mosaic"
        ref={mosaicRef}
        style={{ gridTemplateColumns: `repeat(${cells.cols}, 1fr)` }}
      >
        {cells.photos.map((src, i) => (
          <div className="mosaic-cell" key={i}>
            <div className="fill" style={{ backgroundImage: `url('${src}')` }} />
          </div>
        ))}
      </div>
      <button className="intro-skip" onClick={handleSkip}>
        Skip intro
      </button>
    </div>
  );
}
