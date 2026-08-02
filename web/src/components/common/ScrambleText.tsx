import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export interface ScrambleHandle {
  scramble: () => void;
}

export const ScrambleText = forwardRef<ScrambleHandle, { text: string }>(function ScrambleText({ text }, ref) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  useImperativeHandle(ref, () => ({
    scramble() {
      let iteration = 0;
      window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) return text[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );
        if (iteration >= text.length) {
          window.clearInterval(intervalRef.current);
          setDisplay(text);
        }
        iteration += 1 / 3;
      }, 30);
    },
  }));

  return <>{display}</>;
});
