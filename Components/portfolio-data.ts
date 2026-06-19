// Shared content for the Editorial Brutalist portfolio.

export type Page = "home" | "work" | "about" | "contact";

export const MARMIK = {
  name: "Marmik Patel",
  role: "Full-Stack Software Engineer",
  tagline: "Building products that ship.",
  longBio:
    "I'm Marmik — a full-stack software engineer obsessed with shipping. Over 2+ years across SaaS, fintech, and blockchain I've owned features end-to-end: Solana programs in Rust, latency-bound matching engines, and full-stack products that have to actually work in production. I learn by building.",
  shortBio:
    "Full-stack & systems engineer. Rust / Anchor / TypeScript / React / Next.js. Based in Montréal.",
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
      "A production Solana meme-coin launchpad with a pump.fun-style virtual AMM, serving 1,000+ users.",
    detail:
      "Built end-to-end — a Rust/Anchor protocol with constant-product bonding-curve math, slippage protection, and configurable creator/protocol fee splits. A typed TypeScript SDK with deterministic PDA derivation and atomic create-and-buy, plus a Next.js / React 19 frontend with TradingView-style OHLCV charts and sub-100ms WebSocket price feeds. Off-chain data in Supabase + Redis, with Helius webhooks driving zero-gas listings.",
    stack: ["Rust", "Anchor", "Solana", "TypeScript", "Next.js", "Supabase"],
    metrics: [
      { k: "users", v: "1,000+" },
      { k: "curve", v: "x·y=k virtual AMM" },
      { k: "feeds", v: "<100ms WebSocket" },
    ],
  },
  {
    id: "voyager",
    name: "Voyager",
    kicker: "Hybrid CeFi/DeFi",
    year: "2025",
    summary:
      "A hybrid centralized–DeFi multi-asset exchange. Off-chain matching, on-chain audit.",
    detail:
      "Engineered the Rust backend — a Tokio matching engine with strict price-time priority, partial fills, and an in-memory balance ledger enforcing conservation and non-negative-balance invariants. An Actix-Web REST + WebSocket API over PostgreSQL 16 with hot-path indexing, plus a 0G decentralized-storage service archiving trades as Merkle-verified batches, validated by property-based tests across a 10,000+ trade simulation.",
    stack: ["Rust", "Tokio", "Actix-Web", "PostgreSQL", "0G"],
    metrics: [
      { k: "engine", v: "price-time priority" },
      { k: "storage", v: "0G Merkle batches" },
      { k: "tested", v: "10k+ trade sim" },
    ],
  },
  {
    id: "echo",
    name: "Echo",
    kicker: "Full-stack · SaaS",
    year: "2025",
    summary:
      "A multi-platform social publishing & scheduling tool for Reddit and Discord.",
    detail:
      "A multi-tenant Turborepo/pnpm monorepo with workspace-scoped PostgreSQL access enforced by Drizzle ORM and row-level-security policies. A queue-based scheduled-post engine on Redis + BullMQ pushing 500+ posts/day via Reddit and Discord OAuth, containerized with Docker and shipped to AWS via GitHub Actions at 99.5% uptime and sub-200ms p95.",
    stack: ["TypeScript", "Next.js 15", "Drizzle ORM", "Redis", "Docker"],
    metrics: [
      { k: "users", v: "100+ beta" },
      { k: "throughput", v: "500+ posts/day" },
      { k: "uptime", v: "99.5%" },
    ],
  },
  {
    id: "moonnft",
    name: "MoonNFT",
    kicker: "iOS · Web3",
    year: "2024",
    summary:
      "An on-chain marketplace for trading physical art as NFTs, with NFC authenticity verification.",
    detail:
      "A React Native iOS app implementing NFC tag scanning that verifies each physical artwork's authenticity against its on-chain token. Also built the product's marketing website to support user acquisition and onboarding into the physical-art NFT marketplace.",
    stack: ["React Native", "iOS", "NFC", "Web3"],
    metrics: [
      { k: "platform", v: "iOS · React Native" },
      { k: "verify", v: "NFC ↔ on-chain" },
      { k: "assets", v: "physical-art NFTs" },
    ],
  },
];

export type Experience = { co: string; role: string; when: string; what: string };

export const EXPERIENCE: Experience[] = [
  {
    co: "Webisoft",
    role: "Full-Stack Software Developer",
    when: "Dec 2025 — Present",
    what: "Building MoonNFT, an on-chain marketplace for physical-art NFTs.",
  },
  {
    co: "Workleap",
    role: "Full-Stack Developer Intern",
    when: "Jan — May 2025",
    what: "Shipped REST APIs and React survey UIs on a C# .NET microservices migration.",
  },
  {
    co: "Matrox",
    role: "Software Developer Intern",
    when: "May — Dec 2024",
    what: "Built a Spring Boot web app and REST integrations for a new IPKVM product.",
  },
  {
    co: "Root On",
    role: "Full-Stack Developer Intern",
    when: "Sep 2023 — Apr 2024",
    what: "Built Node.js / TypeScript REST APIs and an NLP-powered AI chatbot.",
  },
];

export const STATS: { v: string; k: string }[] = [
  { v: "4", k: "production systems shipped" },
  { v: "12+", k: "languages & runtimes touched" },
  { v: "~847", k: "cups of coffee · 2025" },
  { v: "2", k: "sports played weekly" },
  { v: "0", k: "days since learning something new" },
];

export const ISSUE_INDEX: { name: string; page: string }[] = [
  { name: "Blastr.fun — Solana", page: "p.02" },
  { name: "Voyager — Hybrid CEX", page: "p.03" },
  { name: "Echo — Social publishing", page: "p.04" },
  { name: "MoonNFT — iOS / NFC", page: "p.05" },
  { name: "Stack & Tools", page: "p.06" },
  { name: "Get in touch", page: "p.07" },
];

export const MARQUEE_ITEMS = [
  "Rust",
  "Anchor",
  "Solana",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Matching engines",
  "Bonding curves",
  "Currently shipping",
];
