export interface SkillGroup {
  label: string;
  items: string[];
}

// Synced from Comprehensive CV
export const skillGroups: SkillGroup[] = [
  {
    label: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'ML / NLP',
    items: [
      'DistilBERT',
      'Flan-T5',
      'RAG',
      'ChromaDB',
      'Scikit-learn',
      'XGBoost',
      'K-Means Clustering',
      'Pandas',
      'Matplotlib',
    ],
  },
  {
    label: 'ML Foundations',
    items: ['AdaBoost', 'K-Means', 'Hidden Markov Models', 'Bayes Nets', 'Artificial Neural Networks'],
  },
  {
    label: 'Frameworks & Tools',
    items: ['React', 'Next.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Vite', 'Figma'],
  },
  {
    label: 'Cloud & Dev Tools',
    items: [
      'Microsoft Azure',
      'Vercel',
      'Git',
      'GitHub',
      'Groq API',
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
      'Tableau',
      'Excel',
    ],
  },
];
