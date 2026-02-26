export type SocialLink = {
  label: string;
  href?: string;
};

export type StatItem = {
  label: string;
  value: string;
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
  { label: "Introduction", href: "#introduction" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const portfolioData = {
  basics: {
    name: "Neethika Prathigadapa",
    role: "Software Engineering Graduate Student | Backend, Full-Stack, Applied ML",
    location: "Gainesville, FL, USA",
    phone: "+1 352 664 0252",
    email: "n.prathigadapa@ufl.edu",
    tagline:
      "Software engineering graduate student specializing in backend systems, full-stack development, and applied machine learning with focus on performance, reliability, and scalable design.",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/neethika12" },
      { label: "LinkedIn", href: "https://linkedin.com/in/neethika-prathigadapa-94b273281" },
    ] as SocialLink[],
  },
  introduction: {
    title: "Technical Portfolio",
    subtitle:
      "Interactive resume showcasing measurable engineering outcomes across software development, systems, and machine learning.",
    metrics: [
      { label: "Internships", value: "3" },
      { label: "Flagship projects", value: "4" },
      { label: "Degrees", value: "2" },
      { label: "Top model accuracy", value: "99%" },
    ],
  },
  about: {
    summary: [
      "I specialize in backend systems, full-stack development, and applied machine learning, with practical experience building RESTful services, distributed pipelines, and containerized applications.",
      "My engineering approach prioritizes deterministic behavior, clean system design, and measurable outcomes such as lower error rates, faster response times, and better model quality.",
      "I am currently pursuing an M.S. in Computer Science at the University of Florida and continue to build projects that combine data structures, systems thinking, and production-ready execution.",
    ],
    highlights: [
      "Improved baseline ML classification accuracy by 12% and reduced false positives by 18%.",
      "Built full-stack services supporting 100+ active users with improved API reliability.",
      "Automated monitoring across 10+ services and reduced manual checks by 35%.",
    ],
    stats: [
      { label: "Certifications", value: "3" },
      { label: "Primary languages", value: "6" },
      { label: "Databases used", value: "4" },
    ] as StatItem[],
    visualPath: "/about-visual.svg",
  },
  skills: {
    stats: [
      { label: "Skill groups", value: "7" },
      { label: "Core technologies", value: "30+" },
      { label: "Cloud stack", value: "AWS + Docker + K8s" },
    ] as StatItem[],
    groups: [
      {
        title: "Languages",
        skills: ["Python 3.x", "Java 11", "JavaScript (ES6+)", "SQL", "Go", "Bash"],
      },
      {
        title: "Backend",
        skills: ["Go Microservices", "Node.js", "REST APIs", "JWT Auth", "Async Processing"],
      },
      {
        title: "Frontend",
        skills: ["React 18", "Angular 15+", "HTML5", "CSS3"],
      },
      {
        title: "ML / AI",
        skills: ["CNNs", "scikit-learn", "Pandas", "NumPy", "Grad-CAM", "SHAP"],
      },
      {
        title: "Cloud / DevOps",
        skills: ["AWS (EC2, S3 basics)", "Docker", "Kubernetes", "GitHub Actions", "Linux"],
      },
      {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
      },
      {
        title: "Engineering",
        skills: ["Data Structures", "Algorithms", "Unit Testing", "Debugging", "Agile/Scrum"],
      },
    ] as SkillGroup[],
  },
  experienceStats: [
    { label: "Internships", value: "3" },
    { label: "Largest user base", value: "100+ users" },
    { label: "Automation impact", value: "35% fewer manual checks" },
  ] as StatItem[],
  experience: [
    {
      role: "Machine Learning Intern",
      company: "SkillDzire",
      location: "Remote",
      duration: "Mar 2025 - Apr 2025",
      summary:
        "Developed supervised machine learning pipelines in Python for end-to-end classification workflows.",
      achievements: [
        "Improved baseline classification accuracy by 12% using scikit-learn model tuning and preprocessing improvements.",
        "Designed evaluation workflows with precision, recall, and confusion matrices, reducing false positives by 18%.",
        "Built repeatable pipeline scripts for cleaner training, validation, and metric tracking.",
      ],
      technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
    },
    {
      role: "Software Engineering Intern (Full Stack)",
      company: "TechnoHacks Edutech",
      location: "Remote",
      duration: "Nov 2024 - Jan 2025",
      summary:
        "Engineered backend and frontend modules for authentication and business workflows in a production-style environment.",
      achievements: [
        "Built Node.js REST services supporting 100+ active users.",
        "Created React components with strict validation, reducing API failure rates by 20%.",
        "Optimized database queries, improved API contracts, and stabilized builds through logging and exception handling.",
        "Worked in Agile sprints with code reviews and deployment cycles.",
      ],
      technologies: ["Node.js", "React", "REST APIs", "JavaScript", "SQL"],
    },
    {
      role: "System Administrator & Automation Intern",
      company: "ServiceNow",
      location: "Remote",
      duration: "Apr 2024 - Sep 2024",
      summary:
        "Automated infrastructure monitoring tasks and supported operational reliability initiatives across services.",
      achievements: [
        "Developed Python and Bash automation scripts for 10+ services, reducing manual checks by 35%.",
        "Analyzed logs and alert patterns to identify recurring root causes.",
        "Built operational dashboards for proactive issue detection and faster incident response.",
      ],
      technologies: ["Python", "Bash", "Linux", "Monitoring Dashboards"],
    },
  ] as ExperienceItem[],
  educationStats: [
    { label: "Programs", value: "2" },
    { label: "MS GPA", value: "3.89 / 4.0" },
    { label: "B.Tech GPA", value: "9.21 / 10" },
  ] as StatItem[],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "University of Florida, Gainesville, FL",
      duration: "Aug 2025 - May 2027 (Expected)",
      focus:
        "Coursework: Advanced Data Structures, Mathematical Foundations for Intelligent Systems, Analysis of Algorithms, Distributed Multimedia Systems, Internet Storage Systems, Software Engineering, Operating Systems, Machine Learning, Databases",
      highlights: [
        "GPA: 3.89 / 4.0",
        "Graduate specialization in systems, algorithms, and machine learning.",
      ],
    },
    {
      degree: "B.Tech in Information Technology",
      institution: "Mahatma Gandhi Institute of Technology, Hyderabad, India",
      duration: "Nov 2021 - Jun 2025",
      focus: "Core software engineering, programming, and data systems curriculum.",
      highlights: [
        "GPA: 9.21 / 10",
        "Gold Medal",
      ],
    },
  ] as EducationItem[],
  projectStats: [
    { label: "Projects showcased", value: "4" },
    { label: "Largest dataset", value: "7,023 MRI images" },
    { label: "Best measurable result", value: "99% validation accuracy" },
  ] as StatItem[],
  projects: [
    {
      title: "NeuroXAI: Explainable Brain Tumor Detection using EfficientNet",
      period: "2025",
      description:
        "Developed an MRI-based brain tumor classification system using EfficientNet, with preprocessing pipelines for normalization, augmentation, and Canny edge-based structural enhancement.",
      impact:
        "Achieved 99% validation accuracy on 7,023 MRI images, and improved interpretability with Grad-CAM + SHAP while reducing false positives by 22%.",
      highlights: ["7,023 MRI images", "99% validation accuracy", "22% false-positive reduction"],
      imagePath: "/projects/neuroxai.svg",
      technologies: [
        "Python",
        "EfficientNet",
        "CNN",
        "Grad-CAM",
        "Saliency Maps",
        "Canny Edge Detection",
      ],
    },
    {
      title: "Sentinet AI: Multi-Channel Product Intelligence Platform",
      period: "2024",
      description:
        "Architected a multi-tenant ingestion pipeline across Jira, Slack, CSV, and support channels to centralize product intelligence inputs.",
      impact:
        "Built Go microservices for clustering, pain scoring, and evidence retrieval with ranking based on frequency, recency, sentiment, and account tiers.",
      highlights: ["Multi-tenant ingestion", "Go microservices", "Ranking logic with 4 weighted factors"],
      imagePath: "/projects/sentinet.svg",
      technologies: ["Angular", "Go", "REST APIs", "Docker", "PostgreSQL"],
    },
    {
      title: "MercatoCloud: Multi-Vendor E-Commerce SaaS",
      period: "2024",
      description:
        "Designed a SaaS e-commerce backend with JWT-based RBAC for multiple vendors and product lifecycle management APIs.",
      impact:
        "Supported 8-10 vendors, managed 200+ products, and optimized checkout latency by 30% through API and data-path improvements.",
      highlights: ["8-10 vendors", "200+ products", "30% checkout latency reduction"],
      imagePath: "/projects/mercatocloud.svg",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Stripe APIs", "JWT"],
    },
    {
      title: "Gator Air Traffic Slot Scheduler",
      period: "Fall 2025",
      description:
        "Implemented a non-preemptive runway scheduling engine from scratch in Python with strict two-phase update semantics and deterministic fairness.",
      impact:
        "Passed all 3 official test cases with exact output compliance while maintaining efficient scheduling via custom heaps and hash-based indexing.",
      highlights: ["3/3 official tests passed", "O(n log k) rescheduling", "Custom heaps built from scratch"],
      imagePath: "/projects/gator-scheduler.svg",
      technologies: [
        "Python",
        "Max Pairing Heap",
        "Binary Min-Heap",
        "Hash Tables",
        "Scheduling Algorithms",
      ],
    },
  ] as ProjectItem[],
  researchStats: [
    { label: "Research papers", value: "1" },
    { label: "Published journal papers", value: "1" },
    { label: "Co-authored works", value: "1" },
  ] as StatItem[],
  researchPapers: [
    {
      title: "Brain Tumor Detection Using Advanced Explainable AI Algorithms",
      venue: "Journal of Data Engineering and Knowledge Discovery",
      year: "Jul 2025",
      authors: ["S. K. Kukunuri", "N. Prathigadapa", "G. N. Sujini"],
      citation:
        "S. K. Kukunuri, N. Prathigadapa, and G. N. Sujini, Journal of Data Engineering and Knowledge Discovery, vol. 2, no. 2, pp. 22-35, Jul. 2025.",
      abstract:
        "Co-authored paper on brain tumor detection using explainable AI algorithms, emphasizing transparent model behavior for clinically relevant decision support.",
    },
  ] as ResearchPaper[],
  certifications: [
    "Cisco Programming Essentials in Python",
    "Oracle Java Foundations",
    "ServiceNow Certified System Administrator",
  ],
  resumeStats: [
    { label: "M.S. GPA", value: "3.89 / 4.0" },
    { label: "B.Tech GPA", value: "9.21 / 10" },
    { label: "Certifications", value: "3" },
  ] as StatItem[],
  resume: {
    pdf: "/resume-neethika.pdf",
    text: "/resume-neethika.txt",
  },
};
