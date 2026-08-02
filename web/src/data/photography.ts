export interface Photo {
  id: string;
  src: string;
  caption: string;
}

// Drafted from what's actually in each shot — swap in the real story if these miss.
export const photos: Photo[] = [
  { id: 'nature1', src: '/photos/nature1.jpeg', caption: 'Looking straight up — One World Trade, from the base.' },
  { id: 'nature2', src: '/photos/nature2.jpeg', caption: 'Golden hour on the water, skyline catching the last light.' },
  { id: 'nature3', src: '/photos/nature3.jpeg', caption: 'The sky put on a show over the water that evening.' },
  { id: 'nature4', src: '/photos/nature4.jpeg', caption: 'String lights, a marina, and the city glowing across the water.' },
  { id: 'nature5', src: '/photos/nature5.jpeg', caption: 'Threading between towers at dusk.' },
  { id: 'nature6', src: '/photos/nature6.jpeg', caption: 'Wide Texas sky on an ordinary drive home.' },
  { id: 'nature7', src: '/photos/nature7.jpeg', caption: 'Bare branches, blurred motion, a sky on fire.' },
  { id: 'nature8', src: '/photos/nature8.jpeg', caption: 'Sunset over the lot after a long day on campus.' },
];
