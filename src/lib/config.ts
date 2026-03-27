// ─── Portfolio Config ───
// Update these values manually as milestones are hit.
// GitHub stats (commits, PRs) are fetched via sync-stats script.

export const config = {
  // Personal
  name: "Aayush Giri",
  role: "Senior Developer Relations Engineer",
  github: "Giri-Aayush",

  // Manually tracked stats
  stats: {
    talksGiven: 15,
    articlesPublished: 35,
    // Offset for commits/PRs made outside GitHub (GitLab, Bitbucket, etc.)
    extraCommits: 0,
    extraPRs: 0,
  },

  // Experience
  experience: [
    {
      period: "2024 -PRES",
      company: "NETHERMIND",
      role: "Senior Developer Relations Engineer",
      description:
        "Architected DevRel program from scratch across 5+ Ethereum-aligned products. Drove 60% developer engagement growth, owned Starknet All Core Devs calls (600+ live viewers), co-authored SNIP-27, and spearheaded the Aztec ecosystem pilot.",
    },
    {
      period: "2023 -2024",
      company: "SPHERON_NETWORK",
      role: "Developer Relations Engineer",
      description:
        "Owned full developer onboarding funnel for decentralized compute infrastructure. Reduced support tickets 40%, drove 110% portal traffic growth and 20% NPM SDK download lift.",
    },
    {
      period: "2023",
      company: "JIO_PLATFORMS",
      role: "Software Development Engineer Intern",
      description:
        "Built modular React API framework for JioMeet, resolved 60+ production bugs including legacy WebRTC issues, and shipped 20+ accessibility features.",
    },
    {
      period: "2023",
      company: "CLAMP",
      role: "Founding Blockchain Developer",
      description:
        "Built the entire blockchain backend for an Ethereum-based crypto index platform. ERC-4337 account abstraction, UniswapV3, Chainlink feeds across 7+ EVM chains.",
    },
    {
      period: "2022",
      company: "RIZE_LABS",
      role: "Blockchain Developer Intern",
      description:
        "Co-developed biometrically-secured ERC-4337 smart wallets. Built React frontend driving 20% engagement boost and docs driving 30% developer onboarding increase.",
    },
  ],

  // Awards
  awards: [
    {
      event: "ETHGlobal Taipei 2025",
      result: "WINNER",
      track: "Celo Tooling Track",
      description: "Built MCP framework for Celo ecosystem",
    },
    {
      event: "ETHGlobal Prague 2025",
      result: "RUNNER-UP",
      track: "1inch Track",
      description: "Developed VectorPlus DeFi optimization solution",
    },
    {
      event: "ETHGlobal Tokyo 2023",
      result: "WINNER",
      track: "Best Innovation Award",
      description: "Secured prizes from Bunzz, Polygon, and Scroll",
    },
  ],

  // Speaking & Community
  speaking: {
    talks: 15,
    hackathonsJudged: 12,
    developersOnboarded: 1000,
    conferences: [
      "ETHBelgrade",
      "ETHTaipei",
      "ETHDam",
      "ETHDenver",
      "StarkSpace Bangkok",
      "Starknet Roadshows",
      "Web3Reinvent India Tour",
    ],
  },

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
