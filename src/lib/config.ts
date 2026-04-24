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
      description:
        "MCP server bridging Celo on-chain data to Claude and Cursor.",
    },
    {
      event: "ETHGlobal Prague 2025",
      result: "RUNNER-UP",
      track: "1inch Track",
      description:
        "On-chain options on 1inch execution rights; MEV-resistant TWAP.",
    },
    {
      event: "ETHGlobal Tokyo 2023",
      result: "WINNER",
      track: "Best Innovation Award",
      description:
        "Prize-winner across three tracks: Bunzz, Polygon, and Scroll.",
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
      mockType: "terminal" as const,
      mockHeader: "zkp-auth — zsh",
      mock: "$ zkp-auth register alice\n→ generating commitment…\n✓ keypair saved\n$ zkp-auth login alice\n✓ proof verified · session open",
    },
    {
      icon: "◈",
      name: "nitroguard",
      repo: "nitroguard",
      description:
        "State channel lifecycle SDK for ERC-7824 / Yellow Network. Auto-dispute, persistence, typed payloads. State machine, Zod schemas, React hooks.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 0,
      tag: "OSS",
      mockType: "code" as const,
      mockHeader: "channel.ts",
      mock: "import { open } from 'nitroguard'\n\nconst ch = await open({\n  asset: 'usdc',\n  deposit: 100n,\n})\n\nch.send({ to, amount })",
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
      mockType: "code" as const,
      mockHeader: "upload.ts",
      mock: "const url = await oort.put(\n  'images/avatar.png',\n  stream,\n  { acl: 'public' }\n)",
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
      mockType: "api" as const,
      mockMethod: "POST",
      mockEndpoint: "/drip",
      mock: "{\n  \"address\": \"0xabcd…ef\",\n  \"amount\": 10,\n  \"status\": \"queued\"\n}",
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
      mockType: "feed" as const,
      mockFeed: [
        { date: "04.25", text: "EIP-8141 CFI granted · Hegotá" },
        { date: "04.24", text: "Celestia v2 devnet live" },
        { date: "04.23", text: "Starknet v0.14 upgrade shipped" },
        { date: "04.22", text: "Aztec testnet public beta" },
      ],
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
      mockType: "chart" as const,
      mockLabel: "ETH CALL · 4K strike",
      mockValue: "+0.42 Δ",
    },
    {
      icon: "⌘",
      name: "faucet-terminal",
      repo: "faucet-terminal",
      description:
        "Get testnet tokens from your terminal. Supports Starknet & Ethereum Sepolia. 1,200+ npm downloads in first three weeks, zero marketing spend.",
      language: "Go",
      langColor: "#00ADD8",
      stars: 2,
      mockType: "terminal" as const,
      mockHeader: "faucet — zsh",
      mock: "$ faucet request --net sepolia\n→ solving PoW challenge…\n✓ sent 0.1 ETH → 0xab…ef\n$ _",
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
      mockType: "chart" as const,
      mockLabel: "TWAP · 10m window",
      mockValue: "slippage 0.12%",
    },
    {
      icon: "◇",
      name: "starknet-mcp",
      repo: "starknet-mcp",
      description:
        "20+ MCP tools bridging Cursor and Claude with Starknet on-chain data. Query state, send transactions, automate tasks.",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 0,
      mockType: "api" as const,
      mockMethod: "TOOL",
      mockEndpoint: "starknet.getBalance",
      mock: "{\n  \"address\": \"0xab…ef\",\n  \"balance\": \"1.24 STRK\",\n  \"block\": 912_304\n}",
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
      mockType: "log" as const,
      mockLogs: [
        { time: "08:42", level: "INFO", text: "server ready" },
        { time: "08:43", level: "WARN", text: "slow query 1.4s" },
        { time: "08:44", level: "INFO", text: "serving on :3000" },
        { time: "08:45", level: "ERROR", text: "upstream timeout" },
      ],
    },
  ],
};
