// Shared content for the Editorial Brutalist portfolio.

export type Page = "home" | "work" | "about" | "contact";

export const MARMIK = {
  name: "Marmik Patel",
  role: "Software Developer",
  tagline: "Building products that ship.",
  longBio:
    "I'm Marmik — a software developer obsessed with shipping. I move fast on hard problems: Solana programs in Rust, latency-bound matching engines, full-stack systems that have to actually work in production. I learn by building.",
  shortBio:
    "Full-stack & systems developer. Rust / Anchor / TypeScript / React. Based in Montréal.",
  email: "marmik28112002@gmail.com",
  github: "github.com/marmik28",
  githubUrl: "https://github.com/marmik28",
  linkedin: "linkedin.com/in/marmikpatel28",
  linkedinUrl: "https://www.linkedin.com/in/marmikpatel28",
  resume: "MarmikResume.pdf",
  resumeUrl: "/MarmikResume.pdf",
};

export type Project = {
  id: string;
  name: string;
  kicker: string;
  year: string;
  summary: string;
  detail: string;
  stack: string[];
  metrics: { k: string; v: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "blastr",
    name: "Blastr.fun",
    kicker: "Solana · Live",
    year: "2025",
    summary:
      "A production Solana meme-coin launchpad with a pump.fun-style virtual AMM.",
    detail:
      "Architected and shipped the protocol in Rust/Anchor — constant-product bonding-curve math, slippage protection, configurable creator/protocol fee split, and a graduation path to a real AMM.",
    stack: ["Rust", "Anchor", "Solana", "TypeScript", "Next.js"],
    metrics: [
      { k: "curve", v: "x·y=k virtual AMM" },
      { k: "slippage", v: "guarded" },
      { k: "fees", v: "creator + protocol" },
    ],
  },
  {
    id: "voyager",
    name: "Voyager",
    kicker: "Hybrid CEX/DeFi",
    year: "2025",
    summary:
      "A hybrid centralized–DeFi multi-asset exchange. Off-chain matching, on-chain audit.",
    detail:
      "Sub-millisecond Rust matching engine off-chain. Settlements and trade audit trails anchored on-chain via 0G. Non-custodial user wallets via Turnkey; Fordefi MPC for treasury and RWA settlement.",
    stack: ["Rust", "0G", "Turnkey", "Fordefi MPC", "TypeScript"],
    metrics: [
      { k: "latency", v: "<1ms match" },
      { k: "settle", v: "0G anchored" },
      { k: "custody", v: "MPC + Turnkey" },
    ],
  },
];

export type Experience = { co: string; role: string; when: string; what: string };

export const EXPERIENCE: Experience[] = [
  {
    co: "Workleap",
    role: "Fullstack Developer",
    when: "Jan — May 2025",
    what: "Feature & product work in React and C#.",
  },
  {
    co: "Matrox Video",
    role: "Software Developer Intern",
    when: "May — Dec 2024",
    what: "IPKVM device-management software in Java and C#.",
  },
  {
    co: "Root On",
    role: "Full-Stack Developer",
    when: "Sep 2023 — Apr 2024",
    what: "Global site + RESTful APIs bridging front and back end.",
  },
];

export const STATS: { v: string; k: string }[] = [
  { v: "3", k: "production systems shipped" },
  { v: "12+", k: "languages & runtimes touched" },
  { v: "~847", k: "cups of coffee · 2025" },
  { v: "2", k: "sports played weekly" },
  { v: "0", k: "days since learning something new" },
];

export const ISSUE_INDEX: { name: string; page: string }[] = [
  { name: "Blastr.fun — Solana", page: "p.02" },
  { name: "Voyager — Hybrid CEX", page: "p.03" },
  { name: "Stack & Tools", page: "p.05" },
  { name: "Get in touch", page: "p.07" },
];

export const MARQUEE_ITEMS = [
  "Rust",
  "Anchor",
  "Solana",
  "TypeScript",
  "React",
  "Matching engines",
  "Bonding curves",
  "MPC custody",
  "Currently shipping",
];
