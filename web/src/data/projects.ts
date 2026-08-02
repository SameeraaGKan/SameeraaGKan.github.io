export interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  tools: string[];
  url?: string;
  repo?: string;
  flagship?: boolean;
}

// Synced from Comprehensive CV
export const projects: Project[] = [
  {
    id: 'codeescape',
    num: '01',
    title: 'CodeEscape',
    description:
      'Production-grade multiplayer CS escape room across 12+ topics and 240+ questions, with 4 AI teammate personas and a server-side adaptive difficulty engine. Ran a post-launch security audit and fixed 8 vulnerabilities.',
    tools: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'NeonDB'],
    url: 'https://codeescape.vercel.app/',
    repo: 'https://github.com/SameeraaGKan/CodeScape_the_Algorithm_escape_room',
    flagship: true,
  },
  {
    id: 'takemeter',
    num: '02',
    title: 'TakeMeter',
    description:
      "Fine-tuned a DistilBERT classifier to assess Reddit discourse quality, achieving ~97% accuracy against a synthetic labeled dataset, benchmarked against a Groq-hosted zero-shot LLM baseline.",
    tools: ['Python', 'DistilBERT', 'Transformers'],
    repo: 'https://github.com/SameeraaGKan/ai201-project3-takemeter',
  },
  {
    id: 'unofficial-guide',
    num: '03',
    title: 'The Unofficial Guide',
    description:
      'A RAG pipeline over UT Dallas CS professor reviews, tuning chunking and retrieval against ChromaDB to ground answers and reduce hallucination.',
    tools: ['Python', 'ChromaDB', 'Llama-3.3-70B'],
  },
  {
    id: 'controlfleet',
    num: '04',
    title: 'ControlFleet',
    description:
      'A mobile fleet-management platform monitoring vehicle telemetry, battery health, and operations across a simulated multi-vehicle fleet.',
    tools: ['React Native', 'TypeScript', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 'utddash',
    num: '05',
    title: 'UTDDash',
    description: 'Full-stack delivery tracking platform with QR verification.',
    tools: ['FastAPI', 'PostgreSQL', 'React'],
    repo: 'https://github.com/Owen-Isenhart/utddash',
  },
  {
    id: 'airbnb-smartprice',
    num: '06',
    title: 'Airbnb SmartPrice',
    description:
      'Team ML project predicting Airbnb listing prices across multiple cities; Random Forest was the best performer (R² ≈ 0.71) against Linear Regression and XGBoost baselines.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost'],
  },
  {
    id: 'hitl-eval',
    num: '07',
    title: 'Human-in-the-Loop Evaluation',
    description:
      'A human-in-the-loop evaluation framework around a Flan-T5 model using the TruthfulQA benchmark to study truthfulness and failure modes.',
    tools: ['Python', 'Flan-T5', 'TruthfulQA'],
    repo: 'https://github.com/SameeraaGKan/LLM_Hallucination_detector',
  },
  {
    id: 'build-your-ride',
    num: '08',
    title: 'Build Your Ride',
    description: '3D vehicle configurator with 50+ real-world models, optimized for a consistent 60 FPS.',
    tools: ['Nuxt.js', 'MongoDB', 'TresJS', 'Blender', 'Figma'],
    repo: 'https://github.com/Spikestar05/BYR-BuildYourRide',
  },
  {
    id: 'healthcluster',
    num: '09',
    title: 'HealthCluster',
    description: 'Clustering health tweets with K-means and Jaccard similarity to surface trends.',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    repo: 'https://github.com/SameeraaGKan/K_Means_Jaccard_HealthCluster_ML',
  },
  {
    id: 'enchan-tobor',
    num: '10',
    title: 'Enchan Tobor',
    description:
      'A freshman-onboarding platform for exploring 400+ campus orgs. Awarded Best Domain Name at WEHack 2024.',
    tools: ['HTML', 'CSS', 'JS', 'R'],
    repo: 'https://github.com/SameeraaGKan/EnchanTobor',
  },
  {
    id: 'nexusmath',
    num: '11',
    title: 'NexusMath',
    description: 'Multi-threaded Java networking suite with a custom socket protocol and thread-safe task queue.',
    tools: ['Java', 'Multi-threading', 'Socket Programming'],
    repo: 'https://github.com/SameeraaGKan/NexusMath',
  },
  {
    id: 'chillax',
    num: '12',
    title: 'Chillax',
    description: 'Browser extension concept for mindful breaks during remote work.',
    tools: ['Figma'],
  },
  {
    id: '2048',
    num: '13',
    title: '2048 Game',
    description: 'A Python recreation of the sliding puzzle.',
    tools: ['Python'],
    repo: 'https://github.com/SameeraaGKan/2048-game',
  },
  {
    id: 'provenance-guard',
    num: '14',
    title: 'Provenance Guard',
    description: 'Dual-signal AI content detection combining stylometric analysis with a Groq LLM classifier.',
    tools: ['Flask', 'SQLite', 'Flask-Limiter'],
    repo: 'https://github.com/SameeraaGKan/ai201-project4-provenance-guard',
  },
];
