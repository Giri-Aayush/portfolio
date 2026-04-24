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
      period: "MAR 2024 -PRES",
      company: "NETHERMIND",
      url: "https://www.nethermind.io/",
      roles: [
        { title: "Senior Developer Relations Engineer", period: "Apr 2025 - Present" },
        { title: "Developer Relations Engineer", period: "Jun 2024 - Apr 2025" },
        { title: "Research Engineer", period: "Mar 2024 - Jun 2024" },
      ],
    },
    {
      period: "SEP 2023 -JAN 2024",
      company: "SPHERON_NETWORK",
      url: "https://www.spheron.network/",
      roles: [
        { title: "Developer Relations Engineer", period: "Sep 2023 - Jan 2024" },
      ],
    },
    {
      period: "MAY -JUL 2023",
      company: "JIO_PLATFORMS",
      url: "https://www.jio.com/",
      roles: [
        { title: "Software Development Engineer Intern", period: "May 2023 - Jul 2023" },
      ],
    },
    {
      period: "JAN -MAY 2023",
      company: "CLAMP",
      url: "https://joinclamp.com/",
      roles: [
        { title: "Founding Blockchain Developer", period: "Jan 2023 - May 2023" },
      ],
    },
    {
      period: "SEP -DEC 2022",
      company: "RIZE_LABS",
      url: "https://spotlight.buidl.so/posts/bananahq",
      roles: [
        { title: "Blockchain Developer Intern", period: "Sep 2022 - Dec 2022" },
      ],
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
    hackathonsOrganized: 3,
    conferences: [
      "ETHBelgrade",
      "ETHTaipei",
      "ETHDam",
      "ETHDenver",
      "ETHPrague",
      "ETHSingapore",
      "Devcon",
      "Devconnect",
      "StarkSpace Bangkok",
      "Starknet Roadshows",
      "Web3Reinvent India Tour",
    ],
  },

  // Featured OSS projects
  // Ordered by creation date, latest first
  ossProjects: [
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
    {
      icon: "◈",
      name: "nitroguard",
      repo: "nitroguard",
      description:
        "State channel lifecycle SDK for ERC-7824 / Yellow Network. Auto-dispute, persistence, typed payloads.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 0,
      tag: "OSS",
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
      tag: "OSS",
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
      icon: "◊",
      name: "Optix",
      repo: "hackmoney-2026",
      description:
        "Gasless ETH options protocol on Yellow Network state channels. Black-Scholes pricing, off-chain execution, on-chain custody. ETHGlobal HackMoney 2026.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 1,
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
      icon: "◉",
      name: "log-watcher",
      repo: "log-watcher",
      description:
        "Real-time log monitoring like tail -f with a web UI. Multi-client WebSocket streaming.",
      language: "JavaScript",
      langColor: "#f1e05a",
      stars: 1,
    },
  ],
};
