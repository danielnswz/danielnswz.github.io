export type ProjectStatus = "Live" | "Shipped" | "Featured" | "Piloted";

export interface CompanyMention {
  handle: string;
  name: string;
  url?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyHandle: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  name: string;
  tagline: string;
  status: ProjectStatus;
  stack: string[];
  description: string;
  highlights: string[];
  url?: string;
}

export interface WorkArchiveItem {
  year: string;
  category: "engineering" | "architecture" | "cloud" | "mobile" | "tooling";
  title: string;
  blurb: string;
  url?: string;
  kind: "internal" | "live" | "open-source";
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface QualificationItem {
  icon: "grad" | "cloud" | "lang";
  title: string;
  issuer: string;
  period: string;
  details: string[];
}

export const profile = {
  name: "Daniel Klie",
  first: "Daniel",
  last: "Klie",
  initials: "DK",
  title: "Software Engineer · Full-Stack · Distributed Systems · Cloud",
  tagline:
    "I build production-grade web, mobile, and cloud systems. Clean APIs, thoughtful UX, and systems that hold up under real-world load. Argentina — shipping globally.",
  status: "Available for opportunities",
  location: "Argentina",
  timezone: "GMT-3",
  flag: "AR",
  email: "danielnswz@gmail.com",
  github: "https://github.com/danielnswz",
  githubHandle: "danielnswz",
  linkedin: "https://linkedin.com/in/dklie",
  linkedinHandle: "linkedin.com/in/dklie",
  resumeUrl: "/CV-2026.pdf",
  yearsExperience: "8+",
  liveProjects: "10+",
} as const;

export const currentlyAt: CompanyMention = {
  handle: "autofi",
  name: "AutoFi",
  url: "https://autofi.com",
};

export const previouslyAt: CompanyMention[] = [
  { handle: "sweatworks", name: "SweatWorks", url: "https://sweatworks.net" },
  {
    handle: "softvision",
    name: "Cognizant Softvision",
    url: "https://www.cognizant.com/softvision",
  },
  { handle: "fortesza", name: "Fortesza" },
  { handle: "zonngo", name: "Zonngo" },
];

export const profileConstellation = [
  "Software Engineer",
  "Full-Stack",
  "Backend focused",
  "System Designer",
] as const;

export const heroNarrative = [
  "I'm a software engineer with over 8 years building production web, mobile, and cloud systems.",
  "Currently shipping full-stack work",
  "for a premier automotive fintech and digital retail platform at",
  "Previously architected mobile + serverless platforms at",
  "and",
  "— always pairing clean front-end UX with resilient back-end data flows.",
] as const;

export const aboutBio = [
  "I'm a software engineer with over 8 years of experience designing, scaling, and maintaining robust web and mobile applications. My focus is on modern JavaScript ecosystems, distributed systems architecture, and cloud infrastructure.",
  "I've led technical teams and delivered high-impact solutions for the automotive fintech and digital retail industries — work spanning high-traffic consumer apps, serverless backends, and mobile apps bridging custom hardware.",
  "Beyond the code: I sweat the details, communicate proactively, and care about the end user. I ship systems designed to hold up under real-world load without losing elegance.",
  "Fluent across the stack: React/Redux on the front end; Node.js, GraphQL, and RabbitMQ for back-end coordination; AWS Lambdas and serverless for elastic scale; React Native for cross-platform mobile.",
] as const;

export const aboutStats = [
  {
    big: "8+",
    title: "Years Experience",
    sub: "Production systems",
  },
  {
    big: "10+",
    title: "Live Projects",
    sub: "Shipped and maintained",
  },
  {
    big: "∞",
    title: "Distributed Systems",
    sub: "GraphQL · RabbitMQ · Micro-frontends",
  },
  {
    big: "BS",
    title: "Ing. Informática",
    sub: "Universidad Nacional Experimental de Guayana",
  },
] as const;

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "AutoFi",
    companyHandle: "autofi",
    type: "Full-time",
    period: "Oct 2021 — Jun 2026",
    location: "Remote",
    bullets: [
      "Architected and maintained high-traffic consumer applications and scalable APIs for a premier digital retail platform in the automotive industry.",
      "Leveraged Micro-frontends (Module Federation), GraphQL, and RabbitMQ to optimize system modularity, UI performance, and asynchronous communication.",
      "Owned end-to-end feature delivery across a large codebase, pairing clean front-end UX with resilient back-end data flows.",
    ],
    tags: [
      "React",
      "Redux",
      "NX",
      "GraphQL",
      "RabbitMQ",
      "Node.js",
      "Module Federation",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "SweatWorks",
    companyHandle: "sweatworks",
    type: "Full-time",
    period: "Oct 2020 — Oct 2021",
    location: "Remote",
    bullets: [
      "Developed and scaled a Corporate Challenge Race System on a serverless architecture with AWS Lambdas and Node.js.",
      "Implemented critical cloud infrastructure including AWS Cognito for auth, SQS for queuing, and a Redis-based rate limiter to handle high-throughput traffic spikes safely.",
      "Built observability and reliability primitives that kept the platform stable under load.",
    ],
    tags: [
      "React",
      "Redux",
      "Redux-Thunk",
      "Node.js",
      "AWS Lambda",
      "Serverless",
      "Sequelize",
      "Cognito",
      "SQS",
      "S3",
      "SES",
      "Redis",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cognizant Softvision",
    companyHandle: "softvision",
    type: "Full-time",
    period: "Oct 2019 — Oct 2020",
    location: "Argentina",
    bullets: [
      "Led an engineering team developing a robust React Native sales application, driving technical alignment and optimization strategies.",
      "Architected custom native bridges to establish seamless device communication between the mobile app and specialized hardware SDKs (POS terminals, printers, mounting stands).",
      "Mentored engineers and shaped architecture decisions across the mobile stack.",
    ],
    tags: [
      "React Native",
      "Redux",
      "Redux-Saga",
      "Re-select",
      "Native SDK Bridges",
      "Dependency Injection",
    ],
  },
  {
    role: "Front-end Developer",
    company: "Fortesza",
    companyHandle: "fortesza",
    type: "Full-time",
    period: "Feb 2018 — Sep 2019",
    location: "Remote",
    bullets: [
      "Developed a multi-user crowdfunding platform tailored for corporate financing, building complex administration panels for both investors and companies.",
      "Spearheaded the migration of the core web application to Angular 6+, leveraging reactive forms, Flex-Layout, and advanced chart libraries to maximize data visualization and frontend performance.",
      "Established reusable patterns that scaled across the admin surface.",
    ],
    tags: ["Angular 6+", "Flex-Layout", "Reactive Forms", "Metrics & Charts"],
  },
  {
    role: "Full-Stack & Contract",
    company: "Early Experience",
    companyHandle: "early",
    type: "Contract",
    period: "2015 — 2018",
    location: "Remote",
    bullets: [
      "Zonngo (Back-end Developer): designed and delivered a secure Node.js backend, REST APIs, and OAuth server components for a retail price monitoring platform.",
      "Seguros Caroní & Agentes Informáticos (Full Stack / Intern): engineered health insurance management databases and dynamic inventory web software using PHP Laravel and AngularJS.",
      "Built foundations across REST, OAuth (client & server), and full-stack delivery.",
    ],
    tags: ["Node.js", "PHP Laravel", "AngularJS", "REST", "OAuth"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "AutoFi Digital Retail Platform",
    tagline: "Premier digital retail platform for the automotive industry.",
    status: "Featured",
    stack: ["React", "Redux", "NX", "GraphQL", "RabbitMQ", "Module Federation"],
    description:
      "High-traffic consumer applications and scalable APIs powering automotive fintech and digital retail. Modular front-end composition via Module Federation, asynchronous back-end coordination via RabbitMQ and GraphQL.",
    highlights: [
      "Micro-frontend architecture with Module Federation",
      "GraphQL gateways over federated services",
      "RabbitMQ-backed asynchronous workflows",
    ],
    url: "https://autofi.com",
  },
  {
    name: "Corporate Challenge Race System",
    tagline: "Serverless race platform built for scale.",
    status: "Shipped",
    stack: ["AWS Lambda", "Node.js", "Cognito", "SQS", "Redis", "React"],
    description:
      "A serverless race-event platform handling high-throughput traffic spikes. Auth via Cognito, async queuing with SQS, and a Redis-based rate limiter protecting downstream services.",
    highlights: [
      "AWS Lambda + Serverless architecture",
      "Redis rate limiter under spike load",
      "Cognito auth and SES notifications",
    ],
  },
  {
    name: "React Native Sales App",
    tagline: "Native bridges to POS terminals, printers, and mounting stands.",
    status: "Shipped",
    stack: [
      "React Native",
      "Redux",
      "Redux-Saga",
      "Re-select",
      "Native SDK Bridges",
    ],
    description:
      "A robust sales application with custom native bridges to specialized hardware SDKs. Led a cross-functional engineering team to ship and maintain it in production.",
    highlights: [
      "Native bridges to POS / printer / stand SDKs",
      "Dependency injection for testability",
      "Led team technical alignment",
    ],
  },
  {
    name: "Corporate Crowdfunding Platform",
    tagline: "Investor & company admin panels for corporate financing.",
    status: "Shipped",
    stack: ["Angular 6+", "Reactive Forms", "Flex-Layout", "Charts"],
    description:
      "Multi-user crowdfunding platform with complex administration panels for both investors and companies. Migrated core app to Angular 6+ with reactive forms and rich data visualization.",
    highlights: [
      "Complex investor & company admin panels",
      "Angular 6+ migration lead",
      "Advanced metrics & charts libraries",
    ],
  },
  {
    name: "Zonngo Price Monitor",
    tagline: "Secure retail price-monitoring backend.",
    status: "Shipped",
    stack: ["Node.js", "REST", "OAuth", "MySQL"],
    description:
      "A secure Node.js backend with REST APIs and OAuth server components for a retail price monitoring platform. Focused on clean contracts and reliable data ingestion.",
    highlights: [
      "Node.js + REST API design",
      "OAuth client & server",
      "Retail data ingestion",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Angular 6+",
      "Node.js",
      "GraphQL",
      "HTML",
      "CSS",
      "PHP",
    ],
  },
  {
    title: "Distributed & Architecture",
    skills: [
      "Micro-frontends",
      "Module Federation",
      "RabbitMQ",
      "GraphQL Federation",
      "REST APIs",
      "OAuth",
    ],
  },
  {
    title: "Mobile",
    skills: [
      "React Native",
      "Redux-Saga",
      "Re-select",
      "Native SDK Bridges",
      "Dependency Injection",
    ],
  },
  {
    title: "Cloud & Serverless",
    skills: [
      "AWS Lambda",
      "Serverless",
      "AWS Cognito",
      "SQS",
      "S3",
      "SES",
      "Redis",
      "CI/CD",
    ],
  },
  {
    title: "Databases & ORM",
    skills: ["SQL", "MySQL", "Sequelize ORM", "NoSQL"],
  },
  {
    title: "Tools & Practices",
    skills: [
      "NX",
      "Monorepo",
      "Git",
      "Scrum",
      "Code Review",
      "Mentoring",
      "Technical Leadership",
    ],
  },
];

export const qualifications: QualificationItem[] = [
  {
    icon: "grad",
    title: "Ingeniería Informática",
    issuer: "Universidad Nacional Experimental de Guayana",
    period: "2012 — 2018",
    details: [
      "Computer Engineering degree — equivalent to a BS in Computer Science.",
      "Coursework in data structures, software architecture, distributed systems, and database design.",
    ],
  },
  {
    icon: "lang",
    title: "English — Full Professional Proficiency",
    issuer: "Working language across all roles since 2018",
    period: "Ongoing",
    details: [
      "Daily English used across code, docs, and team communication for remote US-based teams.",
      "Spanish native.",
    ],
  },
];

export const workArchive: WorkArchiveItem[] = [
  {
    year: "2026",
    category: "architecture",
    title: "Micro-frontend Platform · AutoFi",
    blurb:
      "Module Federation across a large React/Redux monorepo, with GraphQL gateways and RabbitMQ-backed workflows.",
    url: "https://autofi.com",
    kind: "live",
  },
  {
    year: "2025",
    category: "tooling",
    title: "Portfolio Site · danielnswz.github.io",
    blurb:
      "Personal portfolio — Vite + React + TypeScript + Tailwind. Open source on GitHub.",
    url: "https://github.com/danielnswz/danielnswz.github.io",
    kind: "open-source",
  },
  {
    year: "2024",
    category: "engineering",
    title: "Distributed Retail APIs",
    blurb:
      "High-traffic consumer APIs coordinating inventory, financing, and retail surfaces behind a GraphQL federation.",
    kind: "internal",
  },
  {
    year: "2021",
    category: "cloud",
    title: "Serverless Race Platform",
    blurb:
      "AWS Lambdas + Cognito auth + SQS queuing + Redis rate limiter for high-throughput traffic spikes.",
    kind: "internal",
  },
  {
    year: "2020",
    category: "mobile",
    title: "React Native Sales App",
    blurb:
      "Cross-platform sales app with custom native bridges to POS terminals, printers, and mounting stands.",
    kind: "internal",
  },
  {
    year: "2019",
    category: "architecture",
    title: "Crowdfunding Admin Platform",
    blurb:
      "Multi-user investor & company admin panels. Angular 6+ migration lead, reactive forms + metrics charts.",
    kind: "internal",
  },
  {
    year: "2018",
    category: "mobile",
    title: "BizFinder · Android",
    blurb:
      "Local SME discovery app — connecting barbershops, tailors, and services to digital clients.",
    kind: "live",
  },
  {
    year: "2017",
    category: "engineering",
    title: "Zonngo · Price Monitor Backend",
    blurb:
      "Secure Node.js backend, REST APIs, and OAuth server components for a retail price monitoring platform.",
    kind: "internal",
  },
  {
    year: "2012",
    category: "tooling",
    title: "Ing. Informática · UNEG",
    blurb:
      "Five-year Computer Engineering degree. Data structures, distributed systems, software architecture, DB design.",
    kind: "internal",
  },
];

export const builtWith = [
  "Vite",
  "React 18",
  "TypeScript",
  "Tailwind CSS",
  "Inter Font",
  "JetBrains Mono",
  "pnpm",
  "GitHub Pages",
] as const;

export const navSections = [
  { id: "about", label: "About", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "skills", label: "Skills", num: "04" },
  { id: "qualifications", label: "Qualifications", num: "05" },
  { id: "contact", label: "Contact", num: "06" },
] as const;

export type SectionId = (typeof navSections)[number]["id"];
