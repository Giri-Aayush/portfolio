// ─── Portfolio Config ───
// Update these values manually as milestones are hit.
// GitHub stats (commits, PRs) are fetched via sync-stats script.

export const config = {
  // Personal
  name: "Aayush Giri",
  role: "Developer Relations Engineer",
  github: "Giri-Aayush",

  // Manually tracked stats
  stats: {
    talksGiven: 12,
    articlesPublished: 35,
    // Offset for commits/PRs made outside GitHub (GitLab, Bitbucket, etc.)
    extraCommits: 0,
    extraPRs: 0,
  },

  // Experience
  experience: [
    {
      period: "2023 -PRES",
      company: "COGNITION_AI",
      description:
        "Lead Developer Relations. Architecting the future of autonomous engineering loops and LLM-integrated devtools.",
    },
    {
      period: "2021 -2023",
      company: "AWS // WEB3_ORG",
      description:
        "Senior Cloud Architect. Built managed blockchain services for enterprise scaling on Ethereum and Polygon.",
    },
    {
      period: "2019 -2021",
      company: "AMAZON_CORP",
      description:
        "Software Development Engineer II. Optimized high-throughput payment gateways using serverless primitives.",
    },
  ],
  // Featured OSS projects
  // Ordered by creation date, latest first
  ossProjects: [
    {
      icon: "◈",
      name: "nitroguard",
      repo: "nitroguard",
      description:
        "State channel lifecycle SDK for ERC-7824 / Yellow Network. Auto-dispute, persistence, typed payloads.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 0,
    },
    {
      icon: "⎔",
      name: "aztec-faucet",
      repo: "aztec-faucet",
      description:
        "Developer token faucet for Aztec's privacy-first L2. Drip testnet tokens to bootstrap local dev.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 0,
    },
    {
      icon: "⬡",
      name: "hexcast",
      repo: "hexcast",
      description:
        "88-source Ethereum intel feed, AI-summarized into 60-word cards. Replaces Week in Ethereum News.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 0,
    },
    {
      icon: "⌘",
      name: "faucet-terminal",
      repo: "faucet-terminal",
      description:
        "Get testnet tokens from your terminal. Supports Starknet & Ethereum Sepolia. 1400+ npm downloads.",
      language: "Go",
      langColor: "#00ADD8",
      stars: 2,
    },
    {
      icon: "▶",
      name: "vectorPlus",
      repo: "vectorPlus-ethprague-2025",
      description:
        "Advanced 1inch trading strategies — options on execution rights, MEV-resistant TWAP. ETHGlobal Prague runner-up.",
      language: "Solidity",
      langColor: "#AA6746",
      stars: 0,
    },
    {
      icon: "◇",
      name: "starknet-mcp",
      repo: "starknet-mcp",
      description:
        "MCP server letting AI agents query state, send transactions, and automate tasks on Starknet.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 0,
    },
    {
      icon: "⊞",
      name: "oort-storage-sdk",
      repo: "oort-storage-sdk",
      description:
        "TypeScript client for OORT's S3-compatible object storage. Buckets, multipart uploads, signed URLs.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 2,
    },
    {
      icon: "◉",
      name: "log-watcher",
      repo: "log-watcher",
      description:
        "Real-time log monitoring like tail -f with a web UI. Multi-client WebSocket streaming.",
      language: "JavaScript",
      langColor: "#f1e05a",
      stars: 1,
    },
    {
      icon: "⛊",
      name: "zkp-authentication",
      repo: "zkp-authentication",
      description:
        "Chaum-Pedersen ZKP authentication over gRPC in Rust. Authenticate without ever transmitting a password.",
      language: "Rust",
      langColor: "#dea584",
      stars: 11,
    },
  ],
};
