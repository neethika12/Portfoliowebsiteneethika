export type SocialLink = {
  label: string;
  href: string;
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
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
};

export type ResearchPaper = {
  title: string;
  venue: string;
  year: string;
  abstract: string;
  url: string;
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
    name: "Neethika",
    role: "Full-Stack Developer | AI & Research Enthusiast",
    location: "India",
    email: "neethika.dev@email.com",
    tagline:
      "I build performant web products, design scalable APIs, and turn research ideas into production-grade software.",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "LeetCode", href: "https://leetcode.com/" },
    ] as SocialLink[],
  },
  introduction: {
    title: "Developer Portfolio",
    subtitle:
      "Interactive technical resume with modern frontend craftsmanship and reliable backend engineering.",
    metrics: [
      { label: "Years coding", value: "4+" },
      { label: "Projects delivered", value: "15+" },
      { label: "Research works", value: "3" },
      { label: "Tech stack depth", value: "20+" },
    ],
  },
  about: {
    summary: [
      "I am a developer who enjoys solving practical problems with clean architecture, thoughtful UI, and measurable business outcomes.",
      "My work spans responsive frontend interfaces, secure backend APIs, and cloud-ready deployments with observability in mind.",
      "I focus on writing maintainable code, collaborating effectively with teams, and continuously learning modern engineering patterns.",
    ],
    highlights: [
      "Frontend specialization in React ecosystems and performance optimization.",
      "Backend capability with API design, validation, and secure integrations.",
      "Strong foundation in data structures, system design basics, and research-led experimentation.",
    ],
    visualPath: "/about-visual.svg",
  },
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Accessibility",
    ],
    backend: ["Node.js", "REST APIs", "Express", "PostgreSQL", "MongoDB", "Zod"],
    cloudAndDevOps: ["Vercel", "Docker", "GitHub Actions", "CI/CD", "Nginx", "Linux"],
    languages: ["TypeScript", "JavaScript", "Python", "SQL", "C++"],
    tools: ["Git", "Postman", "Figma", "VS Code", "Jupyter", "Notion"],
  },
  experience: [
    {
      role: "Software Developer Intern",
      company: "TechNova Labs",
      location: "Remote",
      duration: "Jan 2025 - Present",
      summary:
        "Developed internal dashboards and API integrations for data-heavy workflows used by product and operations teams.",
      achievements: [
        "Built modular React components that improved feature delivery speed by 30%.",
        "Implemented server-side validation and error boundaries to reduce production incidents.",
        "Collaborated with design and QA to ship accessible, mobile-first interfaces.",
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Independent",
      location: "Hybrid",
      duration: "2023 - 2025",
      summary:
        "Delivered portfolio websites, custom dashboards, and automation tools for students, startups, and small businesses.",
      achievements: [
        "Shipped 10+ client projects with responsive design and SEO best practices.",
        "Introduced reusable code templates that cut project onboarding time by half.",
        "Integrated analytics and monitoring to help clients track growth metrics.",
      ],
      technologies: ["React", "Next.js", "Firebase", "Tailwind CSS", "Vercel"],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Your University Name",
      duration: "2021 - 2025",
      focus: "Software Engineering, Machine Learning, and Distributed Systems",
      highlights: [
        "CGPA: 8.9/10",
        "Led technical events and mentored junior developers.",
        "Built capstone project on AI-assisted developer productivity.",
      ],
    },
    {
      degree: "Higher Secondary Education (Science)",
      institution: "Your School Name",
      duration: "2019 - 2021",
      focus: "Physics, Chemistry, Mathematics, Computer Science",
      highlights: [
        "Graduated with distinction.",
        "Participated in state-level coding competitions.",
      ],
    },
  ] as EducationItem[],
  projects: [
    {
      title: "AI Interview Prep Platform",
      period: "2025",
      description:
        "A full-stack platform that generates role-specific interview questions and gives feedback on answers.",
      impact:
        "Helped peers improve interview readiness through adaptive question sets and performance insights.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Prisma"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/",
    },
    {
      title: "Campus Event Management System",
      period: "2024",
      description:
        "Portal for event publishing, registration, and participation tracking with role-based dashboards.",
      impact: "Reduced manual coordination overhead for student clubs and organizers.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/",
    },
    {
      title: "Developer Productivity Analytics",
      period: "2024",
      description:
        "Visualized repository and issue metrics to identify team bottlenecks and sprint risks.",
      impact:
        "Improved planning quality by surfacing trends in delivery velocity and code review latency.",
      technologies: ["Next.js", "D3.js", "GitHub API", "Tailwind CSS"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/",
    },
  ] as ProjectItem[],
  researchPapers: [
    {
      title: "Context-Aware Prompting for Developer Assistants",
      venue: "International Journal of Intelligent Systems",
      year: "2025",
      abstract:
        "Studied prompt-structuring strategies that improve answer relevance and reduce hallucinations in coding assistants.",
      url: "https://doi.org/",
    },
    {
      title: "Early Detection of Build Failures using CI Signal Patterns",
      venue: "IEEE Student Research Symposium",
      year: "2024",
      abstract:
        "Explored lightweight machine learning features from CI logs to predict failing pipelines earlier in the workflow.",
      url: "https://doi.org/",
    },
    {
      title: "Human-Centered Metrics for Interactive Learning Platforms",
      venue: "ACM SIGCHI Student Workshop",
      year: "2024",
      abstract:
        "Evaluated usability and engagement factors in online technical learning tools used by undergraduate developers.",
      url: "https://doi.org/",
    },
  ] as ResearchPaper[],
  resume: {
    pdf: "/resume-neethika.pdf",
    text: "/resume-neethika.txt",
  },
};
