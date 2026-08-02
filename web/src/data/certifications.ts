export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

// Synced from Comprehensive CV
export const certifications: Certification[] = [
  { name: 'AI Fluency Framework & Foundations', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Claude Code 101', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Claude 101', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM', date: 'Jun 2024' },
  { name: 'Technical Interview Prep (Intermediate)', issuer: 'CodePath', date: 'Aug 2025' },
  { name: 'Introductory Web Development', issuer: 'CodePath', date: 'Aug 2025' },
];
