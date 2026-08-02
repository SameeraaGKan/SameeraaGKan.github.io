export interface Role {
  id: string;
  org: string;
  title: string;
  period: string;
  description: string;
}

// Synced from Comprehensive CV
export const roles: Role[] = [
  {
    id: 'utdesign',
    org: 'UTDesign: Quantitative Research in Engineering Education',
    title: 'Undergraduate Researcher',
    period: 'Fall 2024 — Spring 2025',
    description:
      'Analyzed survey and concept-map data from 570+ students to study undergraduate engineering identity formation, informing curriculum recommendations.',
  },
  {
    id: 'predica',
    org: 'Predica Inc.',
    title: 'Software Engineering Intern',
    period: 'Sept 2024 — Dec 2024',
    description:
      'Part of the founding engineering team; architected the Vite-based build pipeline, cutting build/dev latency 40%, and built 15+ reusable React/TypeScript UI components.',
  },
  {
    id: 'jindal',
    org: 'Naveen Jindal School of Management',
    title: 'Web Content Assistant',
    period: 'Aug 2025 — Present',
    description:
      'Drove 70% traffic growth over 6 months by restructuring site architecture, metadata, and internal linking, while resolving WCAG accessibility gaps.',
  },
  {
    id: 'wehack',
    org: 'WeHack',
    title: 'Development Coordinator',
    period: 'Jun 2025 — Present',
    description:
      'Architected the official WeHack 2026 website to support 800+ expected registrants, translating event vision into 25+ technical specifications.',
  },
  {
    id: 'acm-archives',
    org: 'ACM UTD',
    title: 'ACM Archives Officer, Community Division',
    period: 'Jun 2025 — Present',
    description:
      'Curated 500+ archival digital assets and designed a tagging/indexing system that cut content review cycles 20% across a 10-person editorial team.',
  },
  {
    id: 'litmp',
    org: 'Society of Women Engineers',
    title: 'Director, Ladies in Tech Mentoring Program',
    period: 'Jun 2025 — Present',
    description:
      "Promoted from Treasurer to Community Chair to Director; manages a $5,000+ budget with Excel-based financial models that cut manual reporting time 50%.",
  },
  {
    id: 'gdsc',
    org: 'Google Developer Student Clubs',
    title: 'Mentee, Sprints Program',
    period: 'Jan 2026 — Present',
    description:
      'Structured technical mentorship in applied software development and ML; completed the Airbnb SmartPrice project with peers under mentor guidance.',
  },
  {
    id: 'wwc',
    org: 'Women Who Compute',
    title: 'UX Designer',
    period: 'Jan 2025 — Present',
    description:
      "Designs promotional materials and event graphics in Figma, maintaining a consistent brand identity across the club's digital and print presence.",
  },
];

export const award = {
  title: 'Best Domain Name',
  issuer: 'Major League Hacking / GoDaddy Registry — WEHack 2024',
  description:
    'Awarded for Enchan Tobor — a freshman-onboarding platform for exploring 400+ campus orgs.',
};

export const leadership: string[] = [];
