import { useState } from 'react';

const INTRO_KEY = 'sk_intro_played';

export function useSessionIntroGate() {
  const [shouldPlay] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem(INTRO_KEY);
  });

  const markPlayed = () => {
    sessionStorage.setItem(INTRO_KEY, '1');
  };

  return { shouldPlay, markPlayed };
}
