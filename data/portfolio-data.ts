export type SocialLink = {
  label: string;
  href?: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type ResearchPillar = {
  id: string;
  lab: string;
  advisor: string;
  funding: string;
  period: string;
  tagline: string;
  focus: string;
  metrics: StatItem[];
  highlights: string[];
  stack: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  duration: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa: string;
  focus: string;
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  period: string;
  description: string;
  impact: string;
  highlights: string[];
  imagePath: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type ResearchPaper = {
  title: string;
  venue: string;
  year: string;
  authors?: string[];
  citation?: string;
  abstract: string;
  url?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const navItems = [
  { label: "Home", href: "#introduction" },
  { label: "Research", href: "#research-labs" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export const portfolioData = {
  basics: {
    name: "Neethika Prathigadapa",
    role: "ML Research · Safety-Critical AI · Full-Stack Engineering",
    location: "Gainesville, FL",
    phone: "+1 (352) 664-0252",
    email: "n.prathigadapa@ufl.edu",
    availability: "Open to Fall 2026 SWE / ML Co-op",
    tagline:
      "MS Computer Science at UF (GPA 3.94) building at the intersection of brain-aligned deep learning, safety-critical anomaly detection, and production AI platforms.",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/neethika12" },
      { label: "LinkedIn", href: "https://linkedin.com/in/neethika-prathigadapa-94b273281" },
    ] as SocialLink[],
  },

  introduction: {
    title: "Neural systems. Safe autonomy. Shipped software.",
    subtitle:
      "From fMRI-aligned video transformers on HiPerGator B200 GPUs to calibrated safety-confidence for cyber-physical systems — and full-stack RAG platforms on AWS.",
    metrics: [
      { label: "MS GPA @ UF", value: "3.94" },
      { label: "Models Benchmarked", value: "19" },
      { label: "Anomaly Detector AUC", value: "0.999" },
      { label: "HPC Runtime Cut", value: "30%" },
    ],
  },

  researchPillars: [
    {
      id: "cinebrain",
      lab: "Cognitive Neuroengineering Lab",
      advisor: "Prof. Mingzhou Ding",
      funding: "NIH / NSF",
      period: "Apr 2026 – Present",
      tagline: "Brain-aligned deep learning video models",
      focus:
        "Replicating and extending CineBrain — benchmarking video architectures against human fMRI with Representational Similarity Analysis on UF HiPerGator.",
      metrics: [
        { label: "CineBrain 2-way", value: "0.932" },
        { label: "Models vs. fMRI", value: "19" },
        { label: "RSA p < 0.0001", value: "14/15" },
        { label: "Best LOC R²", value: "0.097" },
      ],
      highlights: [
        "Replicated CogVideoX-5B + CineSync LoRA pipeline on B200 GPUs; matched all 3 Table 2 metrics within 1%.",
        "Benchmarked 19 CNNs and video Transformers on Bold Moments fMRI; reproduced 4/5 ICLR 2025 predictions.",
        "Identified R3D_18 as strongest brain-aligned model in Lateral Occipital Complex.",
        "Extending toward Cross-Temporal RSA on EEG (ICLR 2026 direction).",
      ],
      stack: ["PyTorch", "VideoMAE", "V-JEPA 2", "RSA", "HiPerGator", "SigLIP2", "CogVideoX"],
    },
    {
      id: "masc",
      lab: "Trustworthy Engineered Autonomy (TEA) Lab",
      advisor: "Prof. Ivan Ruchkin",
      funding: "NSF CPS — MASC",
      period: "May 2026 – Present",
      tagline: "Calibrated safety-confidence under runtime anomalies",
      focus:
        "Sequence anomaly detectors and uncertainty-aware models for autonomous systems — targeting ECE < 0.1 and AUC > 0.9 per MASC specifications.",
      metrics: [
        { label: "Transformer AUC", value: "0.999" },
        { label: "Detection Rate", value: "100%" },
        { label: "False Alarm Rate", value: "3.8%" },
        { label: "Detector Variants", value: "6" },
      ],
      highlights: [
        "Transformer detector (4 heads, 3 layers) outperformed linear baseline by 16-point AUC margin.",
        "Built heteroscedastic MLP-NLL and 10-member Deep Ensemble for aleatoric + epistemic uncertainty.",
        "LSTM trajectory predictor feeds MASC downstream calibrated safety-confidence pipeline.",
        "Full CartPole-v1 simulation-to-evaluation pipeline on HiPerGator with SLURM.",
      ],
      stack: ["PyTorch", "Transformers", "Deep Ensembles", "SLURM", "CartPole", "ECE / Brier"],
    },
  ] as ResearchPillar[],

  about: {
    summary: [
      "I am an MS Computer Science candidate at the University of Florida (GPA 3.94) working where neuroscience, safety-critical ML, and production engineering meet.",
      "In Prof. Mingzhou Ding's Cognitive Neuroengineering Lab, I build brain-aligned video models — replicating CineBrain on HiPerGator B200s and benchmarking 19 architectures against human fMRI with RSA.",
      "In Prof. Ivan Ruchkin's TEA Lab (NSF MASC), I engineer calibrated anomaly detection for autonomous systems. I also ship full-stack AI with FastAPI, React/TypeScript, RAG, and AWS.",
    ],
    highlights: [
      "Gold Medalist — Academic Excellence, B.Tech IT, MGIT Hyderabad (top of department, 4 years).",
      "Author of UF's official LinkedIn Manual for Master's students; career blog writer at Career Connections Center.",
      "CloudPulse AI: RAG over AWS costs, Isolation Forest anomalies, Terraform + ECS CI/CD.",
      "2 published papers in explainable AI and medical imaging.",
    ],
    stats: [
      { label: "Research Labs", value: "2 @ UF" },
      { label: "Publications", value: "2" },
      { label: "Certifications", value: "3" },
    ] as StatItem[],
    visualPath: "/about-visual.svg",
  },

  skills: {
    stats: [
      { label: "Languages", value: "8+" },
      { label: "Video / Brain Models", value: "10+" },
      { label: "Cloud & MLOps", value: "AWS · Docker · Terraform" },
    ] as StatItem[],
    groups: [
      {
        title: "Languages",
        skills: ["Python", "C++", "Go", "Java", "JavaScript", "TypeScript", "SQL", "Bash"],
      },
      {
        title: "AI / ML / Deep Learning",
        skills: [
          "PyTorch", "TensorFlow", "HuggingFace", "VideoMAE", "V-JEPA 2", "ViViT", "Swin3D",
          "R3D / MC3 / S3D", "CogVideoX", "LoRA", "SigLIP2", "LangChain", "RAG", "Grad-CAM", "SHAP",
          "Isolation Forest", "Anomaly Detection", "MLOps",
        ],
      },
      {
        title: "Neuroscience & Research ML",
        skills: [
          "RSA", "Cross-Temporal RSA", "fMRI / BOLD", "Brain-Model Alignment",
          "Noise-Ceiling Estimation", "Permutation Testing", "Net2Brain", "OpenNeuro", "BIDS", "NIfTI",
        ],
      },
      {
        title: "HPC & Engineering",
        skills: [
          "HiPerGator", "NVIDIA B200", "CUDA 12.8", "SLURM", "GPU Clusters",
          "Memory Profiling", "Runtime Optimization", "Conda",
        ],
      },
      {
        title: "Full-Stack & Cloud",
        skills: [
          "React", "Angular", "FastAPI", "Next.js", "WebSockets", "PostgreSQL", "MongoDB",
          "Redis", "pgvector", "Docker", "AWS (ECS, Lambda, S3, SES)", "Terraform", "GitHub Actions",
        ],
      },
      {
        title: "Data & Observability",
        skills: [
          "Pandas", "NumPy", "decord", "ffmpeg", "BeautifulSoup", "Prometheus", "Grafana",
          "Celery", "n8n", "CrewAI", "ServiceNow",
        ],
      },
    ] as SkillGroup[],
  },

  experienceStats: [
    { label: "Roles", value: "6" },
    { label: "Resume Reviews", value: "30+" },
    { label: "Employers Scraped", value: "500+" },
  ] as StatItem[],

  experience: [
    {
      role: "Graduate Research Assistant",
      company: "Cognitive Neuroengineering Lab · UF",
      location: "Gainesville, FL · Prof. Mingzhou Ding (NIH/NSF)",
      duration: "Apr 2026 – Present",
      summary:
        "Building brain-aligned deep learning video models that process visual information similarly to the human brain.",
      achievements: [
        "Replicated CineBrain (CogVideoX-5B + CineSync LoRA + SigLIP2) on HiPerGator B200; matched all 3 Table 2 metrics within 1% (2-way: 0.932, 50-way: 0.374, SSIM: 0.243).",
        "Benchmarked 19 models against Bold Moments fMRI via RSA; reproduced 4/5 Sartzetaki et al. (ICLR 2025) predictions; 14/15 models at p < 0.0001.",
        "Identified R3D_18 as strongest brain-aligned model (LOC R² = 0.097); validated VideoMAE 50-way score (0.502 vs. 0.51 published).",
        "Cut average HPC pipeline runtime by 30% via memory, batch, and parallelism tuning on shared B200 cluster.",
        "Extending toward Cross-Temporal RSA on EEG (ICLR 2026 direction); methodology validated in Net2Brain.",
      ],
      technologies: ["PyTorch", "CogVideoX", "RSA", "fMRI", "HiPerGator", "B200", "SLURM", "SigLIP2"],
    },
    {
      role: "Graduate Research Assistant",
      company: "TEA Lab · UF",
      location: "Gainesville, FL · Prof. Ivan Ruchkin (NSF MASC)",
      duration: "May 2026 – Present",
      summary:
        "Calibrated safety-confidence prediction for cyber-physical systems under runtime anomalies.",
      achievements: [
        "Built 6 anomaly detector variants on CartPole-v1 with 20K transitions and command-latency injection (0/2/6/15-step delays).",
        "Transformer detector: AUC 0.999, 100% detection at all latency levels, 3.8% false alarm rate — +16 AUC vs. linear baseline.",
        "Heteroscedastic MLP-NLL (AUC 0.916) and 10-member Deep Ensemble for aleatoric + epistemic uncertainty.",
        "LSTM trajectory predictor (10-step context, 15-step horizon) feeds MASC calibrated safety-confidence pipeline.",
        "Extending to ECE and Brier evaluation targeting ECE < 0.1 and AUC > 0.9 per MASC proposal.",
      ],
      technologies: ["PyTorch", "Transformers", "Deep Ensembles", "LSTM", "SLURM", "CartPole", "Uncertainty"],
    },
    {
      role: "Graduate Student Assistant",
      company: "UF Career Connections Center",
      location: "Gainesville, FL",
      duration: "Jan 2026 – Present",
      summary:
        "Career content, data analytics, and graduate student advising at UF's central career hub.",
      achievements: [
        "Authored UF's official LinkedIn Manual for all Master's students — distributed across graduate onboarding.",
        "Built Python scrapers parsing 500+ employer records from GatorCareerLink; built symposium analytics dashboard adopted by 3 advisors.",
        "Manage career blog (100+ readers); analyzed 20+ events to close engagement gaps; 30+ resume reviews and 5+ in-house guides.",
      ],
      technologies: ["Python", "BeautifulSoup", "Pandas", "Analytics", "Content Strategy"],
    },
    {
      role: "Machine Learning Intern",
      company: "SkillDzire",
      location: "Remote",
      duration: "Mar – Apr 2025",
      summary: "End-to-end ML pipelines with cross-validated hyperparameter search.",
      achievements: [
        "Improved baseline accuracy by 12% across Gradient Boosting, Random Forest, and Logistic Regression on 3 dataset variants.",
        "Reduced false positives by 18% via modular preprocessing and decision-threshold tuning.",
        "Presented experiment analysis across 10+ runs to a 5-person engineering team with prioritized next steps.",
      ],
      technologies: ["Python", "PyTorch", "scikit-learn", "Pandas"],
    },
    {
      role: "Software Engineering Intern — Full Stack",
      company: "TechnoHacks Edutech",
      location: "Remote",
      duration: "Nov 2024 – Jan 2025",
      summary: "Production React features for a student learning platform.",
      achievements: [
        "Shipped 4+ releases serving 100+ users — auth flows, validation, and dashboard components.",
        "Resolved 15+ bugs and refined API contracts; reduced integration rework by ~25% over 3 sprints.",
      ],
      technologies: ["React", "JavaScript", "REST APIs"],
    },
    {
      role: "ServiceNow Certified System Administrator",
      company: "Virtual Internship & Certification Program",
      location: "Remote",
      duration: "Apr – Sep 2024",
      summary: "ITSM workflows and Now Platform configuration.",
      achievements: [
        "Earned CSA credential covering Incident, Problem, and Change Management, service catalogs, business rules, and CMDB.",
      ],
      technologies: ["ServiceNow", "ITSM", "CMDB", "Workflow Automation"],
    },
  ] as ExperienceItem[],

  educationStats: [
    { label: "MS GPA", value: "3.94 / 4.0" },
    { label: "B.Tech GPA", value: "9.21 / 10" },
    { label: "Honors", value: "Gold + 2× Silver" },
  ] as StatItem[],

  education: [
    {
      degree: "M.S. Computer Science",
      institution: "University of Florida",
      duration: "Aug 2025 – May 2027 (Expected)",
      location: "Gainesville, FL",
      gpa: "3.94 / 4.00",
      focus:
        "Machine learning, multimodal deep learning, and safety-critical AI — active research in two NIH/NSF-funded labs.",
      highlights: [
        "Coursework: Machine Learning · Deep Learning · Advanced DSA · Distributed OS · Computer Architecture · Databases",
        "Research: brain-aligned video models (Ding Lab) and MASC anomaly detection (TEA Lab)",
      ],
    },
    {
      degree: "B.Tech Information Technology",
      institution: "Mahatma Gandhi Institute of Technology",
      duration: "Nov 2021 – Jun 2025",
      location: "Hyderabad, India",
      gpa: "9.21 / 10.00",
      focus: "Software engineering, data systems, and applied machine learning.",
      highlights: [
        "Gold Medalist — Academic Excellence (top of department, four-year ranking)",
        "2× Silver Medal recipient",
      ],
    },
  ] as EducationItem[],

  honors: [
    "Gold Medalist — Academic Excellence, B.Tech IT, MGIT (top of department, 4 years)",
    "2× Silver Medal recipient, MGIT Hyderabad",
    "NSF-funded MASC research contributor, TEA Lab @ UF",
    "Author — Official LinkedIn Manual for UF Master's students",
    "2 published research papers (explainable AI & medical imaging)",
  ],

  projectStats: [
    { label: "Flagship Builds", value: "4" },
    { label: "MRI Training Set", value: "7,023" },
    { label: "Best CV Accuracy", value: "99%" },
  ] as StatItem[],

  projects: [
    {
      title: "CloudPulse AI — Intelligent Cloud Cost & Ops",
      period: "2025 – Present",
      description:
        "Full-stack AI cloud cost monitoring with FastAPI, React/TypeScript, PostgreSQL on AWS ECS — Terraform IaC and GitHub Actions CI/CD.",
      impact:
        "RAG pipeline (LangChain + pgvector + OpenAI) for natural-language Q&A over live AWS data; Isolation Forest anomalies with LLM Slack alerts; Lambda weekly summaries via SES.",
      highlights: ["RAG Q&A", "Anomaly Alerts", "Terraform + ECS"],
      imagePath: "/projects/mercatocloud.svg",
      technologies: ["FastAPI", "React", "LangChain", "pgvector", "AWS", "Docker", "Terraform"],
    },
    {
      title: "Sentinent — Unified Notification Aggregator",
      period: "2025",
      description:
        "Real-time dashboard aggregating Slack, GitHub, Gmail, and Jira with OAuth 2.0 and WebSockets.",
      impact:
        "Owned Angular frontend; REST contracts across 4 sprints; Cypress E2E covering 80%+ critical flows; JWT RBAC and webhook ingestion.",
      highlights: ["4 Platforms", "WebSockets", "80%+ E2E"],
      imagePath: "/projects/sentinet.svg",
      technologies: ["Go", "Angular", "OAuth 2.0", "WebSockets", "SQLite", "Cypress"],
    },
    {
      title: "NeuroXAI — Explainable Brain Tumor Detection",
      period: "Jan – Apr 2025",
      description:
        "PyTorch CNN on 7,023 MRI images across 4 tumor categories with Grad-CAM and SHAP explainability.",
      impact:
        "99% validation accuracy; 22% reduction in unexplained false positives; reproducible per-class experiment logging across 10+ variants.",
      highlights: ["99% Accuracy", "Grad-CAM + SHAP", "7K+ MRIs"],
      imagePath: "/projects/neuroxai.svg",
      technologies: ["PyTorch", "Grad-CAM", "SHAP", "Medical Imaging"],
    },
    {
      title: "Agentic AI Workflow Prototypes",
      period: "Sep – Dec 2024",
      description:
        "5+ multi-step automations with LangChain, CrewAI, and n8n — document processing, summarization, and decision routing.",
      impact:
        "10+ prompt/RAG iteration cycles with versioned logs and documented failure modes for reproducible improvement.",
      highlights: ["5+ Workflows", "CrewAI", "RAG Design"],
      imagePath: "/projects/gator-scheduler.svg",
      technologies: ["LangChain", "CrewAI", "n8n", "OpenAI", "HuggingFace"],
    },
  ] as ProjectItem[],

  researchStats: [
    { label: "Publications", value: "2" },
    { label: "Domains", value: "XAI · Cardiac" },
    { label: "Co-authored", value: "Yes" },
  ] as StatItem[],

  researchPapers: [
    {
      title: "Brain Tumour Detection Using Advanced Explainable AI Algorithms",
      venue: "Journal of Data Engineering and Knowledge Discovery",
      year: "2025",
      authors: ["S. K. Kukunuri", "N. Prathigadapa", "G. N. Sujini"],
      abstract:
        "CNN-based brain tumor detection with Grad-CAM and SHAP for clinically interpretable decision support — transparent attribution for medical stakeholders.",
      citation:
        "S. K. Kukunuri, N. Prathigadapa, and G. N. Sujini, J. Data Eng. Knowl. Discov., vol. 2, no. 2, pp. 22–35, 2025.",
    },
    {
      title: "Automated Diagnosis of Cardiac Disease Using ECG Image Analysis",
      venue: "Research Publication",
      year: "2025",
      abstract:
        "Automated cardiac disease diagnosis from ECG image analysis using deep learning — extending medical imaging ML to electrophysiology signals.",
    },
  ] as ResearchPaper[],

  extracurricular: [
    "Author — Official LinkedIn Manual for UF Master's students (graduate onboarding)",
    "Content writer & editor — UF Career Connections Center career blog",
    "30+ peer resume reviews and mock interviews for graduate students",
    "Open-source ML systems; writing on brain-aligned video modeling, safety-critical ML, and full-stack AI",
  ],

  certifications: [
    "ServiceNow Certified System Administrator (CSA)",
    "Oracle Java Foundations",
    "Cisco Python Essentials",
  ],

  resumeStats: [
    { label: "MS GPA", value: "3.94" },
    { label: "Co-op Target", value: "Fall 2026" },
    { label: "Certifications", value: "3" },
  ] as StatItem[],

  resume: {
    pdf: "/resume-neethika.pdf",
    text: "/resume-neethika.txt",
  },
};
