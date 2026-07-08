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
  { label: "About", href: "#hero" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Writing", href: "#writing" },
];

export const portfolioData = {
  basics: {
    name: "Neethika Prathigadapa",
    role: "ML Research · Safety-Critical AI · Full-Stack Engineering",
    location: "Gainesville, FL",
    phone: "+1 (352) 664-0252",
    email: "n.prathigadapa@ufl.edu",
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
      tagline: "Aligning deep learning video models with human fMRI",
      focus:
        "Investigating whether state-of-the-art video models perceive the world the way the human brain does, and building cortex-inspired modifications (lateral, feedback, multimodal connections) evaluated against human fMRI as ground truth, via Representational Similarity Analysis on UF HiPerGator.",
      metrics: [
        { label: "TRIBE vs. S3D Gain", value: "+26–79%" },
        { label: "Noise Ceiling Reached", value: "44%" },
        { label: "Horikawa Stimuli", value: "2,177" },
        { label: "Brain Regions (HCP360)", value: "360" },
      ],
      highlights: [
        "Benchmarked SigLIP2, VideoMAE, TimeSformer, and V-JEPA2 against Bold Moments fMRI; selected S3D as baseline after comparing R3D-18, S3D, and C3D on brain alignment and emotion prediction.",
        "Built a full RSA pipeline against Horikawa 2020 fMRI (5 subjects, 2,181 videos, HCP360 atlas); found S3D aligns best in motion and transmodal regions.",
        "Documented a negative result: end-to-end fine-tuning hurt brain alignment 14–26%, confirmed via linear probing, matched preprocessing, and noise-ceiling analysis.",
        "Evaluated Meta AI's multimodal TRIBE v2 encoder — beat S3D by 26–79% in RSA, reaching 40–44% of the noise ceiling, with confirmed cross-dataset transfer from Algonauts to Horikawa.",
        "Validated all findings on an independently reprocessed fMRI dataset (Δρ < 0.01).",
      ],
      stack: ["PyTorch", "S3D", "R3D-18", "V-JEPA 2", "TRIBE", "LLaMA-3.2", "Wav2Vec-BERT", "RSA", "HCP360", "HiPerGator B200", "SLURM"],
    },
    {
      id: "masc",
      lab: "Trustworthy Engineered Autonomy (TEA) Lab",
      advisor: "Prof. Ivan Ruchkin",
      funding: "NSF CPS — MASC",
      period: "May 2026 – Present",
      tagline: "Runtime safety monitoring for autonomous systems",
      focus:
        "Detecting dangerous command-latency anomalies early enough to keep autonomous systems safe — using CartPole-v1 as a proxy testbed for DonkeyCar Monaco, a self-driving miniature car, under the NSF CPS MASC grant.",
      metrics: [
        { label: "Best Detector AUC (MLP-NLL)", value: "0.905" },
        { label: "Safety Predictor AUC", value: "1.000" },
        { label: "Brier Score", value: "0.0019" },
        { label: "ECE", value: "0.0026" },
      ],
      highlights: [
        "Built and evaluated 6 anomaly detectors (Linear Mahalanobis, MLP-MSE, MLP-NLL, MLP-Energy, Deep Ensemble, LSTM Trajectory) trained only on nominal data, tested against command-latency anomalies (0/2/6/15-step delays).",
        "MLP-NLL performed best (AUC 0.905), capturing both prediction error and model overconfidence in a single uncertainty-aware score.",
        "Built a Safety Confidence Predictor combining frozen MLP-NLL + LSTM backbones — met all NSF CPS targets: AUC 1.000, Brier 0.0019, ECE 0.0026.",
        "Built an interpretable linear safety model (OLS over all 6 detector scores) at Prof. Ruchkin's request; found anomaly scores don't yet linearly predict future safety (R² = 0.04), and that the best anomaly detector isn't necessarily the best safety predictor.",
        "All experiments run on UF HiPerGator (NVIDIA B200 GPU, SLURM scheduler).",
      ],
      stack: ["PyTorch", "MLP", "LSTM", "Deep Ensembles", "OLS Regression", "HiPerGator B200", "SLURM", "CartPole-v1", "Gymnasium"],
    },
  ] as ResearchPillar[],

  about: {
    summary: [
      "I am an MS Computer Science candidate at the University of Florida (GPA 3.94) working where neuroscience, safety-critical ML, and production engineering meet.",
      "Across two research labs at UF, I work on brain-aligned deep learning and runtime safety monitoring for autonomous systems — you can find the full detail on each in the Experience section below.",
      "Outside the lab, I also ship full-stack AI products with FastAPI, React/TypeScript, RAG, and AWS.",
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
        "Investigating whether state-of-the-art video models perceive the world the way the human brain does, and what cortex-inspired architectural changes make them more brain-like, using human fMRI as ground truth.",
      achievements: [
        "Benchmarked SigLIP2, VideoMAE, TimeSformer, and V-JEPA2 against Bold Moments fMRI; selected S3D as baseline after comparing R3D-18, S3D, and C3D on brain alignment and emotion prediction.",
        "Built a full RSA pipeline against Horikawa 2020 fMRI (5 subjects, 2,181 videos, HCP360 atlas); found S3D aligns best in motion and transmodal cortical regions.",
        "Ran and validated a documented negative result: end-to-end fine-tuning hurt brain alignment 14–26% across all streams, confirmed via linear probing, matched preprocessing, and noise-ceiling analysis.",
        "Evaluated Meta AI's multimodal TRIBE v2 encoder, which outperformed S3D by 26–79% in RSA and reached 40–44% of the noise ceiling, with confirmed cross-dataset transfer from Algonauts to Horikawa.",
        "Validated all findings against an independently reprocessed fMRI dataset (Δρ < 0.01), completing a full robustness audit.",
      ],
      technologies: ["PyTorch", "S3D", "R3D-18", "V-JEPA 2", "TRIBE", "LLaMA-3.2", "Wav2Vec-BERT", "RSA", "HCP360", "fsaverage5", "HiPerGator B200", "SLURM"],
    },
    {
      role: "Graduate Research Assistant",
      company: "TEA Lab · UF",
      location: "Gainesville, FL · Prof. Ivan Ruchkin (NSF MASC)",
      duration: "May 2026 – Present",
      summary:
        "Investigating whether dangerous command-latency anomalies in autonomous systems can be detected early enough to keep the system safe, using CartPole-v1 as a proxy testbed for DonkeyCar Monaco under the NSF CPS MASC grant.",
      achievements: [
        "Built and evaluated 6 anomaly detectors (Linear Mahalanobis, MLP-MSE, MLP-NLL, MLP-Energy, Deep Ensemble, LSTM Trajectory), trained only on nominal data and tested against command-latency anomalies (0/2/6/15-step delays).",
        "MLP-NLL was the best-performing detector (AUC 0.905), capturing both prediction error and model overconfidence in a single score.",
        "Built a Safety Confidence Predictor (frozen MLP-NLL + LSTM backbones → safety head) that met all NSF CPS targets: AUC 1.000, Brier Score 0.0019, ECE 0.0026.",
        "Built an interpretable OLS linear model combining all 6 anomaly scores at Prof. Ruchkin's request; found current anomaly scores don't yet linearly predict future safety (R² = 0.04), revealing that ranking accuracy (AUC) and linear safety-predictiveness are distinct properties.",
        "Ran all experiments on UF HiPerGator (NVIDIA B200 GPU, SLURM scheduler); currently scaling toward real DonkeyCar Monaco hardware.",
      ],
      technologies: ["PyTorch", "MLP", "LSTM", "Deep Ensembles", "OLS Regression", "HiPerGator B200", "SLURM", "CartPole-v1", "Gymnasium"],
    },
    {
      role: "Graduate Student Assistant",
      company: "UF Career Connections Center",
      location: "Gainesville, FL",
      duration: "Jan 2026 – Present",
      summary:
        "Career content, data analytics, and graduate student advising at UF's central career hub.",
      achievements: [
        "Authored UF's official LinkedIn Manual — a structured, section-by-section guide covering profile optimization, networking outreach, and personal branding — distributed to 100% of incoming Master's students as part of the graduate onboarding curriculum.",
        "Built a Python + BeautifulSoup scraping pipeline to parse 500+ employer records from GatorCareerLink, normalizing inconsistent HTML structures into a clean tabular dataset for downstream analytics.",
        "Designed and shipped a symposium analytics dashboard in Pandas that aggregated attendance, engagement, and employer-interaction metrics across career fairs; adopted as a standing reporting tool by 3 career advisors.",
        "Grew and now manage the center's career blog to 100+ readers per post, owning the full content pipeline from topic research through editing and publishing.",
        "Ran a structured analysis across 20+ campus career events, cross-referencing attendance and feedback data to identify recurring engagement gaps and inform programming changes.",
        "Delivered 30+ one-on-one resume reviews and mock interviews for graduate students, translating technical experience into recruiter-facing language.",
        "Authored 5+ in-house career guides covering resume formatting, interview strategy, and LinkedIn best practices for graduate student advising staff.",
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
        "Built end-to-end ML pipelines in scikit-learn and PyTorch, benchmarking Gradient Boosting, Random Forest, and Logistic Regression with cross-validated hyperparameter search (grid + randomized search over regularization, depth, and learning-rate ranges), improving baseline accuracy by 12% across 3 distinct dataset variants.",
        "Engineered a modular preprocessing pipeline (missing-value imputation, feature scaling, categorical encoding) decoupled from model selection, enabling consistent evaluation across all three algorithms.",
        "Reduced false positives by 18% by combining the preprocessing improvements with systematic decision-threshold tuning based on precision-recall tradeoffs rather than default 0.5 cutoffs.",
        "Ran and logged 10+ controlled experiment iterations varying feature sets, thresholds, and model hyperparameters, tracking accuracy, precision, recall, and F1 across runs for reproducibility.",
        "Presented a full experiment analysis — including ablations and failure cases — to a 5-person engineering team, translating results into prioritized next steps for the following sprint.",
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
        "Shipped 4+ production releases to 100+ active users on a student learning platform, owning feature scope from implementation through QA and rollout.",
        "Built authentication flows (session handling, protected routes, form validation with client + server-side checks) and interactive dashboard components in React, consuming REST APIs for real-time student progress data.",
        "Triaged and resolved 15+ reported bugs across sprints, ranging from state-management race conditions to API response-shape mismatches.",
        "Worked directly with the backend team to refine REST API contracts — tightening response schemas and error-handling conventions — which reduced integration rework by roughly 25% over 3 sprints.",
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
        "Earned the ServiceNow Certified System Administrator (CSA) credential through a hands-on virtual internship covering core Now Platform administration.",
        "Configured Incident, Problem, and Change Management workflows end-to-end, including approval chains, SLA definitions, and state-transition logic.",
        "Built and customized service catalogs, catalog items, and business rules to automate routine ITSM request handling on the Now Platform.",
        "Studied and applied CMDB (Configuration Management Database) structure — CI classes, relationships, and dependency mapping — to support accurate asset and service tracking within workflow automation design.",
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
