export type InlineSpan = string | { text: string; href: string };
export type RichText = string | InlineSpan[];

export type ContentBlock =
  | { type: "paragraph"; text: RichText }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: RichText[] }
  | { type: "code"; text: string; language?: string }
  | { type: "references"; items: { label: string; url: string }[] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      href?: string;
    };

export type Blog = {
  slug: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  status: "published" | "coming_soon";
  content: ContentBlock[];
};

const LOREM_PARAGRAPH_A =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const LOREM_PARAGRAPH_B =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.";

const LOREM_PARAGRAPH_C =
  "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.";

const LOREM_PARAGRAPH_D =
  "Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.";

const blogsRaw: Blog[] = [
  {
    slug: "erc-8004-agents-onchain",
    date: "27.04.26",
    readTime: "10 MIN READ",
    title: "ERC-8004: The Standard That Decides Whether AI Agents on Chain Is Real.",
    description:
      "Draft EIP created August 13, 2025. Audited contracts live on 20+ networks January 29, 2026. About 20,000 agents on the Identity Registry. The spec is good. The next twelve months decide whether that matters.",
    status: "published",
    content: [
      {
        type: "paragraph",
        text: "ERC-8004 was filed as a draft EIP on August 13, 2025. It was posted to the Ethereum Magicians forum the next day, by davidecrapis.eth. On September 15, the Ethereum Foundation announced a new dAI team with ERC-8004 as its first deliverable. On November 21, 2025, 80 teams showed up to Trustless Agents Day at La Rural in Buenos Aires. On January 29, 2026, audited reference contracts went live on Ethereum mainnet at a deterministic CREATE2 address, replicated on Base, BNB Chain, Mantle, Polygon, Avalanche, Taiko, and more than a dozen other chains. The Identity Registry holds about twenty thousand agents today.",
      },
      {
        type: "paragraph",
        text: "Pick any other EIP filed in 2025 and compare those timestamps. This one moved unusually fast, with unusually coordinated backing, for an unusually broad audience. It still might not matter.",
      },
      {
        type: "paragraph",
        text: "The authors on the spec are Marco De Rossi (MetaMask), Davide Crapis (Ethereum Foundation), Jordan Ellis (Google), and Erik Reppel (Coinbase). That four-org author list is the interesting artifact. Crypto standards are usually written by crypto people. This one was written by the two biggest wallet companies, the Ethereum Foundation, and the firm whose Agent2Agent protocol ERC-8004 explicitly extends. Whether that breadth survives contact with actual usage is the question the next twelve months answer.",
      },
      {
        type: "heading",
        text: "What the Spec Actually Ships",
      },
      {
        type: "paragraph",
        text: "ERC-8004 defines three on-chain registries. That is the entire protocol surface. Everything else is off-chain.",
      },
      {
        type: "list",
        items: [
          "Identity Registry. ERC-721 tokens with URIStorage. Each agent has an NFT whose URI points to an off-chain registration file. The file lists the agent's service endpoints (A2A, MCP, or anything else), supported payment schemes, and the trust models the agent honors. Minting an identity is permissionless. Naming is not enforced by the protocol.",
          "Reputation Registry. A log of client feedback events, with tags and optional links to off-chain evidence. Aggregation and scoring are deliberately left to indexers and applications. The spec does not define \"the reputation score\" of an agent. It defines how feedback gets attested onchain so that anyone can aggregate it however they want.",
          "Validation Registry. Hooks for independent validators to request, verify, and record checks on agent work. Pluggable trust models, from cheap reputation signals to stake-secured re-execution to TEE attestations. This is the registry still under active revision with the TEE community as of spring 2026.",
        ],
      },
      {
        type: "paragraph",
        text: "The status of the spec itself is still Draft. The contracts shipped on mainnet are audited and final. Those two sentences coexist because the EIP editorial process and the implementation readiness are separate things. Cyfrin, Nethermind, and the Ethereum Foundation have all audited the Identity and Reputation contracts. The address 0x8004A169FB4a3325136EB29fA0ceB6D2e539a432 is the same on every chain the registries deploy to, by design.",
      },
      {
        type: "heading",
        text: "The Catalyst Was Google, Not Crypto",
      },
      {
        type: "paragraph",
        text: "In June 2025, Google donated its Agent2Agent protocol to the Linux Foundation. A2A is HTTP, SSE, and JSON-RPC. It is a perfectly reasonable way for agents inside an organization to talk to each other. Marco De Rossi read the spec, noticed that it assumed mutual trust between agent operators, and realized the decentralized case was entirely undefined. A2A was written by Google for Google's customers. Agents across organizational boundaries, with no prior trust, needed something else.",
      },
      {
        type: "paragraph",
        text: "That something else is ERC-8004. It sits on top of A2A as a trust layer. The agent registration file ERC-8004 points to is a superset of what A2A already specifies. If your agent speaks A2A, your ERC-8004 registration adds an onchain identity, a log of past interactions, and a way for third parties to verify work claims. If it speaks MCP instead, the registration file names MCP endpoints. The protocol is agnostic about which off-chain stack you use.",
      },
      {
        type: "paragraph",
        text: "Payments are similarly delegated. x402 is Coinbase's revival of HTTP 402, the payment-required status code from RFC 2616 that browsers have ignored since 1999. In 2024 Coinbase published a spec for it, and in 2025 Google extended its Agent Payments Protocol (AP2) with an A2A x402 extension so agents could pay for services with USDC. ERC-8004 references x402 as an optional payment proof format in its feedback records. The registry does not process payments. It records that a payment happened, if you want to record it.",
      },
      {
        type: "paragraph",
        text: "None of this is invention. ERC-8004 is carefully minimal, and the minimal design is why it got four-company sign-off. It is also why it can fail. A standard that defines only identity, a feedback log, and a validation hook is extremely easy to route around, because any application can replace any of those layers with its own.",
      },
      {
        type: "heading",
        text: "The Numbers Match the Marketing Carefully",
      },
      {
        type: "paragraph",
        text: "Three different live dashboards count agents. They give three different numbers.",
      },
      {
        type: "code",
        language: "agent count by source",
        text: "# geterc8004.com (official Identity Registry dashboard)\nregistered agents          = ~20,000\ndeployed networks          = 7+\nprojects building          = 70+\n\n# Agent Arena (third-party indexer)\nregistered agents          = ~22,000\nchains indexed             = 16 EVM + Solana\n\n# 8k4 Protocol (third-party indexer)\nindexed agents (total)     = ~107,000\n  Base                     = ~34,000\n  BNB Chain                = ~44,000\n  Ethereum mainnet         = ~29,000",
      },
      {
        type: "paragraph",
        text: "The canonical number is the Identity Registry's own count (around 20,000), because that is the one every ERC-8004 consumer reads from the same contract. The larger indexer numbers include agents that are either duplicate registrations, cross-chain replicas, or protocol-adjacent identities that predate the standard. Both are real. Neither tells you how many of those agents are doing anything.",
      },
      {
        type: "paragraph",
        text: "That second number is the one nobody publishes. If you search the Reputation Registry for \"agents that have received at least one piece of client feedback in the last thirty days,\" the count is small. The single cited data point that keeps getting repeated is that ORIGIN Protocol verified the first ERC-8004 agent on March 4, 2026, with a score of 89 out of 100. One agent, by one validator, with one score. It is a milestone because it is the first. It is also the shape of the numbers in spring 2026.",
      },
      {
        type: "heading",
        text: "What the Peer Review Actually Said",
      },
      {
        type: "paragraph",
        text: "The Magicians thread has over a hundred replies. The useful ones cluster into four objections, all of which are worth reading before you ship an ERC-8004 application.",
      },
      {
        type: "list",
        items: [
          "Spengrah: the spec prioritizes off-chain reads via events over on-chain functions, which means smart contracts cannot directly consume validation results. Validation is decoupled from enforcement. If a DeFi protocol wants to reject trades from agents that failed validation, it has to read an off-chain aggregator, not the registry.",
          "Daniel-ospina: aggregating feedback into a single reputation score is structurally dangerous. It encourages monopolistic aggregators, and the best systems (App Store reviews, Trustpilot, academic citations) all preserve feedback modularity. The spec leaves aggregation off-chain, which helps, but the expectation of a single score has already shown up in every third-party tool built on top.",
          "Pcarranzav: domain-based identity is too restrictive and unclear on verification. A2A supports multiple agents per URL; the initial ERC-8004 draft flattened that. This has since been softened but the tension is unresolved.",
          "comeToThinkOfEth and azanux: the spec lacks payment escrow, gas-cost management for agent-to-agent calls, and any explicit settlement pattern. \"Hooks for validators\" is not the same thing as \"a way to pay validators reliably.\" The escrow layer is not in scope and has not yet appeared in a sibling EIP.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are fatal. They are the criticism a spec gets when it is close enough to shipping that reviewers take it seriously. A spec nobody critiques is a spec nobody is considering using.",
      },
      {
        type: "heading",
        text: "The Twelve-Month Test",
      },
      {
        type: "paragraph",
        text: "The case for ERC-8004 is that agents need a common identity layer or the agent economy forks into proprietary silos like chatbot platforms did in 2023. The case against is that crypto standards routinely ship and languish because the developers who would adopt them are busy writing the same primitives into their own protocols.",
      },
      {
        type: "paragraph",
        text: "Virtuals Protocol is the cleanest test case. Virtuals runs the largest AI agent economy on Base (18,000+ agents by its own count). In March 2026, Virtuals co-developed ERC-8183, a sibling standard for agent commerce, with the Ethereum Foundation's dAI team. That is the pattern worth watching. If Virtuals routes its agent identity through ERC-8004 rather than its own registry, the standard has a network effect. If Virtuals keeps its own system and publishes adapters, the standard is documentation, not infrastructure.",
      },
      {
        type: "paragraph",
        text: "The same question applies to Coinbase (whose CDP platform has its own agent SDK), Google (whose AP2 extension nominally uses ERC-8004 but has its own parallel identity primitives), and the Virtuals imitators launching on Base every month. Four authors from four companies signed the spec. The test is whether those four companies, plus the dozens of teams not on the spec, treat 0x8004A169FB4a3325136EB29fA0ceB6D2e539a432 as authoritative.",
      },
      {
        type: "paragraph",
        text: "The other test is usage on the Validation Registry. Identity without validation is a directory. Validation without enforcement is a review site. The value of ERC-8004 comes from the combination: agents that can prove who they are, point to logged feedback, and attach verifiable claims about what they did. Today two of the three registries are live and audited; the third is still being negotiated with the TEE community. When that lands, and when the first application rejects an agent onchain because its validation attestation is missing, the standard will have crossed a line it has not crossed yet.",
      },
      {
        type: "heading",
        text: "Who Should Care, and Why",
      },
      {
        type: "paragraph",
        text: "If you build agent infrastructure, treat ERC-8004 as the default identity layer and build a soft dependency. The spec is minimal enough that adopting it costs you very little, and the network effect if it wins is large. Do not build your own identity registry unless you have a reason the four-author registry cannot solve.",
      },
      {
        type: "paragraph",
        text: "If you build DeFi, the relevant registry is Reputation. There is no onchain function that returns \"agent X's score.\" You have to index feedback events and decide for yourself what signal matters. Build the indexer or pay someone to run one. If you rely on a single third-party aggregator, you have re-introduced the centralized trust problem ERC-8004 was supposed to avoid.",
      },
      {
        type: "paragraph",
        text: "If you build wallets, ERC-8004 identity is the only permissionless way to answer \"is the thing calling my contract an agent, and if so whose?\" without trusting a specific platform. The UX for \"this transaction is being proposed by an agent on behalf of User Y\" depends on a standard both the user's wallet and the counterparty recognize. There are not many candidates. There is basically one.",
      },
      {
        type: "paragraph",
        text: "If you invest in agent tokens, remember that 20,000 registered identities is not 20,000 businesses. It is 20,000 deployed contracts that minted NFTs. The distribution of activity inside that set follows the same curve every crypto-native registry has produced since CryptoKitties.",
      },
      {
        type: "heading",
        text: "How the Pieces Fit",
      },
      {
        type: "paragraph",
        text: "ERC-8004 is the cleanest crypto standard of 2025. Four companies, four authors, three registries, one deployed address, one-page abstract. The spec is good and the audits are real and the deployment is broad. The adoption signal is real and the agent count is real and the corporate alignment is unusually real. None of that makes the \"agent economy\" a real category. That depends on agents doing things that produce value for humans without failing in the ways current agents fail, and ERC-8004 does not fix that problem. It is not trying to.",
      },
      {
        type: "paragraph",
        text: "What it is trying to do is make sure that when agents start doing useful things, the infrastructure underneath them is shared rather than siloed. That is a narrower claim, and a defensible one. The verdict I would offer in spring 2026 is that the spec is good, the adoption gap is the problem, and what Virtuals, Coinbase, MetaMask, Google, and the next Virtuals-scale platform actually do matters more than what the spec text says.",
      },
      {
        type: "paragraph",
        text: "If by April 2027 the four-author registry is what every serious agent platform reads from, ERC-8004 is infrastructure. If by April 2027 every serious platform has forked it or ignored it, ERC-8004 is documentation. There are not many other outcomes.",
      },
      {
        type: "heading",
        text: "References",
      },
      {
        type: "references",
        items: [
          { label: "ERC-8004: Trustless Agents (spec)", url: "https://eips.ethereum.org/EIPS/eip-8004" },
          { label: "ERC-8004 Ethereum Magicians discussion", url: "https://ethereum-magicians.org/t/erc-8004-trustless-agents/25098" },
          { label: "Marco De Rossi: The Story Behind ERC-8004 & Next Steps", url: "https://medium.com/survival-tech/the-story-behind-erc-8004-next-steps-ec46c18d1879" },
          { label: "Davide Crapis on X: dAI team announcement", url: "https://x.com/DavideCrapis/status/1967573374911340975" },
          { label: "EF dAI team coverage, The Block", url: "https://www.theblock.co/post/370660/ethereum-foundation-forms-dai-team-to-make-ethereum-a-base-layer-for-the-ai-economy" },
          { label: "Trustless Agents Day, Devconnect Buenos Aires (Luma)", url: "https://luma.com/i1vu0n7p" },
          { label: "Google Agent2Agent protocol (A2A)", url: "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/" },
          { label: "Google AP2 + A2A x402 extension announcement", url: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol" },
          { label: "Coinbase x402 (HTTP 402 for AI agents)", url: "https://www.x402.org/" },
          { label: "Reference implementation: erc-8004/erc-8004-contracts", url: "https://github.com/erc-8004" },
          { label: "awesome-erc8004 (curated resources)", url: "https://github.com/sudeepb02/awesome-erc8004" },
          { label: "geterc8004.com (official registry dashboard)", url: "https://www.geterc8004.com/" },
          { label: "CoinDesk: ERC-8004 aims to put identity and trust behind AI agents", url: "https://www.coindesk.com/markets/2026/01/28/ethereum-s-erc-8004-aims-to-put-identity-and-trust-behind-ai-agents" },
          { label: "Mantle deploys ERC-8004 (Chainwire, Feb 2026)", url: "https://chainwire.org/2026/02/16/mantle-unlocks-autonomous-economy-with-erc-8004-deployment/" },
          { label: "RentAHuman inflection (The Meridiem, Feb 2026)", url: "https://www.themeridiem.com/ai/2026/2/12/rentahuman-inflection-exposes-agent-economy-gap-between-hype-and-execution" },
          { label: "Ensemble / ERC-8004 SDK", url: "https://github.com/ensemble-codes" },
          { label: "Virtuals Protocol (agents on Base)", url: "https://app.virtuals.io/" },
        ],
      },
    ],
  },
  {
    slug: "statelessness-final-frontier",
    date: "25.04.26",
    readTime: "11 MIN READ",
    title: "Statelessness: The Final Frontier of Decentralization.",
    description:
      "A full node needs 700 GB today and grows 30 GB a year. A 2026 validator wants 4 TB of NVMe. The fight over Verkle vs binary-plus-STARK is the fight over whether a phone can run a node in 2029.",
    status: "published",
    content: [
      {
        type: "paragraph",
        text: "An Ethereum full node running Geth sits around 650 to 700 GB of SSD in steady state, with the database growing about 14 GB a week and dropping back after a prune. The underlying state itself grows by about 30 GB a year on top of the accumulating history. An archive node on Geth's path-based layout is 1.9 to 2.0 TB; the older hash-based archive is above 12 TB. EthStaker's 2026 minimums for a solo validator are a quad-core CPU, 32 GB of RAM, 4 TB of SSD, and 10 Mbps of bandwidth both ways. That is the machine that secures Ethereum today.",
      },
      {
        type: "paragraph",
        text: "It is also the reason the solo-staker share of nearly a million active validators keeps drifting down.",
      },
      {
        type: "paragraph",
        text: "Statelessness is the proposal that this machine should be a laptop, then a phone, then eventually a smart watch. Not in a marketing sense. In the literal sense that a node should verify a block without storing the state the block touches, by accepting a short cryptographic witness from whoever produced the block. The state tree does not go away. It gets served from elsewhere. Your node keeps the chain honest without keeping the chain.",
      },
      {
        type: "paragraph",
        text: "The headline work for 2026 is about execution throughput and post-quantum signatures. Statelessness sits under both. Without it, the only way to raise the gas limit without bleeding solo stakers is to keep asking them for more disk. With it, the gas limit rises and the hardware target falls at the same time. The headliners get the big-picture coverage, and they deserve it. This piece is about the part that decides who gets to run a node in 2030.",
      },
      {
        type: "heading",
        text: "What a Stateless Client Actually Is",
      },
      {
        type: "paragraph",
        text: "A stateless client is a full node that does not store the state trie. When a block arrives, it arrives with a witness: the exact set of account and storage leaves the block's transactions touch, plus a cryptographic proof that each leaf is part of the current state root. The client executes the block against the witness, recomputes the new state root, and checks it matches the header. Same validation, same security, no disk.",
      },
      {
        type: "paragraph",
        text: "Two knobs decide whether this works in practice.",
      },
      {
        type: "list",
        items: [
          "Witness size. The witness travels with the block, so it costs bandwidth and verification time. A 3 MB witness is a non-starter. A 150 KB witness is borderline. A sub-100 KB witness is where stateless clients become cheaper than stateful ones for most home operators.",
          "Commitment scheme. The tree's hash function and commitment scheme decide the witness size and whether the whole thing survives a future quantum computer. This is the fight Ethereum has been having with itself for two years.",
        ],
      },
      {
        type: "heading",
        text: "The Idea Is Older Than the Tech",
      },
      {
        type: "paragraph",
        text: "The stateless client concept is not new. Vitalik posted it on ethresear.ch in late 2017. The Ethereum Foundation's 1.x team wrote \"The State of Stateless Ethereum\" in December 2019 and \"The Stateless Ethereum Tech Tree\" in January 2020. Both made the same argument: stateless clients are possible; they are just not small enough yet.",
      },
      {
        type: "paragraph",
        text: "The problem in 2020 was the state tree itself. A single ERC-20 transfer in the current hexary Merkle-Patricia trie needs 1 to 3 KB of witness data. A full block with thousands of state touches measures in megabytes. That number has to come down before any of this ships to mainnet.",
      },
      {
        type: "paragraph",
        text: "Verkle trees were the fix. Vitalik's June 2021 post made the case: replace the hexary Merkle-Patricia trie with a tree built on polynomial vector commitments, and the witness for a 1,000-value block drops from roughly 3.5 MB to roughly 150 KB. A 23x reduction. Per-account witnesses shrink to about 200 bytes. Per-storage-slot witnesses shrink to 30 to 50 bytes. The Kaustinen testnet launched in 2023 and ran through multiple relaunches. Geth, Nethermind, Besu, Nimbus, and Erigon all built Verkle branches. The plan was to ship Verkle in the first hard fork after Pectra.",
      },
      {
        type: "paragraph",
        text: "Then, in mid-2024, the assumption underneath Verkle cracked.",
      },
      {
        type: "heading",
        text: "Why Verkle Slipped",
      },
      {
        type: "paragraph",
        text: "Verkle's witness compression comes from elliptic-curve polynomial commitments. An elliptic-curve commitment is breakable by a sufficiently large quantum computer. So is every ECDSA signature Ethereum uses. So is the BLS aggregation scheme on the consensus layer, which is exactly why the 2026 Hegotá fork exists. The question the core devs spent 2024 arguing was whether it is worth shipping a state tree that will have to be replaced again inside a decade.",
      },
      {
        type: "paragraph",
        text: "Vitalik's October 23, 2024 post, \"Possible futures of the Ethereum protocol, part 4: The Verge\", is the moment this became public.",
      },
      {
        type: "quote",
        text: "Over the past year the Verge has become much more open-ended, and there are several possibilities.",
      },
      {
        type: "paragraph",
        text: "The alternative he laid out is a binary Merkle tree with a STARK-friendly hash, wrapped in a SNARK. STARKs are post-quantum by construction. The witness is not 150 KB; it is a proof on the order of a megabyte. But it is a proof you verify once per block, and it survives the quantum transition that Verkle does not.",
      },
      {
        type: "paragraph",
        text: "The performance numbers stopped being hypothetical around the same time. Polygon benchmarked 1.7 million Poseidon hashes per second on a laptop with circle STARKs. The Ethereum Foundation put up a $1M Poseidon Prize and a $1M Proximity Prize in 2024 and 2025 to get STARK-friendly hashing audited and hardened. In January 2025, Guillaume Ballet, Vitalik Buterin, Dankrad Feist, Ignacio Hagopian, and others filed EIP-7864: replace the hexary Keccak Merkle-Patricia trie with a unified binary tree. The current draft uses BLAKE3 for implementation friction, with Keccak and Poseidon2 as candidates once the cryptography settles.",
      },
      {
        type: "paragraph",
        text: "EIP-7864's headline claim: a binary tree with a fast hash produces Merkle branches about 4x shorter than the current hexary structure, and swapping the hash for a STARK-friendly variant buys another 3x to 100x in proving efficiency.",
      },
      {
        type: "heading",
        text: "The Numbers That Decide",
      },
      {
        type: "paragraph",
        text: "The comparison the debate keeps returning to:",
      },
      {
        type: "code",
        language: "witness size comparison",
        text: "# Current (hexary MPT + Keccak)\nper-account witness       = 1–3 KB     # worst case ~9 KB\n1000-value block witness  = ~3.5 MB\nfull node state           = ~700 GB\narchive node              = 18–20 TB   # Geth, 2026\n\n# Verkle (hexary-ish tree, IPA/KZG commitments)\nper-account witness       = ~200 B\nper-storage-slot witness  = 30–50 B\n1000-value block witness  = ~150 KB    # 23x smaller than today\npost-quantum              = no\nmaturity                  = Kaustinen testnet since 2023, multi-client\n\n# Binary tree + STARK (EIP-7864 direction)\nper-block witness         = ~0.8 MB measured; sub-MB target\npost-quantum              = yes (hash-based)\nmaturity                  = draft spec, depends on Poseidon2 audits\nproving speed             = 1.7M Poseidon hashes/sec on a laptop",
      },
      {
        type: "paragraph",
        text: "Verkle is smaller on the wire. Binary-plus-STARK is larger on the wire but smaller in the long run because it does not need to be replaced again. The short-term argument is about witness KB. The long-term argument is about whether you ship the same tree twice.",
      },
      {
        type: "heading",
        text: "Statelessness Is Only a Third of the Story",
      },
      {
        type: "paragraph",
        text: "A stateless client validates blocks without the state. It still has to answer RPC queries, serve historical data to other peers, and sync new nodes. That work has to live somewhere.",
      },
      {
        type: "paragraph",
        text: "History expiry is the first half of the answer. EIP-4444 and its partial rollout in 2025 say full nodes stop serving pre-Merge history after a year; anyone who wants it fetches it from archival operators or from the Portal Network. The July 2025 client rollout was the first time mainnet clients started actually deleting old bodies and receipts. That is how a \"full node\" shrinks below 700 GB without losing its validation guarantees.",
      },
      {
        type: "paragraph",
        text: "The Portal Network is the other half. It is a DHT-based peer-to-peer network designed specifically to serve the pieces a light or stateless client needs: block headers, receipts, state access by key. Piper Merriam and the old Trinity team started it years ago on the observation that the existing devp2p network was not built for light-client access. The launch clients are Trin (Rust, Ethereum Foundation-funded) and Nimbus Fluffy (Nim, from Status). A stateless execution client on a phone is useless without something like Portal to ask \"give me account 0xabc's storage at slot 0x12\" without running a full archive yourself.",
      },
      {
        type: "paragraph",
        text: "Put together: statelessness trims what a node stores per block. History expiry trims what a node stores across history. Portal serves the lookups a trimmed node still needs. Each piece on its own is interesting. Together, they are the reason a smart watch is a credible long-term node target.",
      },
      {
        type: "heading",
        text: "The Solo-Staker Case",
      },
      {
        type: "paragraph",
        text: "Every time the state grows past the price point of a reasonable off-the-shelf NVMe, some fraction of solo stakers exit, and their ETH ends up in a pooled operator. That is how centralization accrues: not in one dramatic step, but in a slow consolidation of people who were willing to run their own node at one price point and are not willing at the next.",
      },
      {
        type: "paragraph",
        text: "Vitalik's stated target in \"The Verge\" is that fully-verifying clients, and staking nodes, should not need more than a few GB of storage. A Raspberry Pi 5 has 8 GB of RAM and takes a microSD. That machine cannot run a 2026 validator. It can run a stateless 2028 validator, if the stack ships.",
      },
      {
        type: "paragraph",
        text: "That is the argument for treating statelessness as the final decentralization fight. Not the flashiest. The last one where the hardware bar genuinely decides who gets to participate.",
      },
      {
        type: "heading",
        text: "Who Should Care, and Why",
      },
      {
        type: "paragraph",
        text: "If you run a client, the choice in Glamsterdam is a real implementation budget. EIP-6800 is drafted and tested on Kaustinen. EIP-7864 is drafted and waiting on Poseidon2 audits. Whichever lands, every execution client rebuilds its storage engine against a new tree. That is a one-off cost that pays back for a decade.",
      },
      {
        type: "paragraph",
        text: "If you solo-stake, statelessness is the first upgrade in the post-Merge era that visibly lowers your hardware bill instead of raising it. The right bet is to hold current hardware until Glamsterdam ships, then downsize. Not the other direction.",
      },
      {
        type: "paragraph",
        text: "If you build light-client infra, Trin and Nimbus Fluffy are where to watch. A stateless L1 without a working Portal Network is a feature that only data-center operators can actually run. Portal is what lets the feature reach users.",
      },
      {
        type: "paragraph",
        text: "If you build L2 or rollup infra, the same trees matter. An L2 that wants to prove its state against L1 through a SNARK is easier to build on a STARK-friendly tree than on a polynomial-commitment tree. The Glamsterdam decision shapes the next wave of L2 proof systems.",
      },
      {
        type: "heading",
        text: "How the Pieces Fit",
      },
      {
        type: "paragraph",
        text: "The path from here to a node on a phone is three specs, none of which are locked in yet.",
      },
      {
        type: "list",
        items: [
          "A new state tree: Verkle (EIP-6800, mature, not post-quantum) or binary plus STARK (EIP-7864, draft, post-quantum).",
          "History expiry: EIP-4444 direction, already rolling out partially since July 2025.",
          "A light-client data layer: Portal Network, with Trin and Nimbus Fluffy as the launch clients.",
        ],
      },
      {
        type: "paragraph",
        text: "The core devs pick one state tree in Glamsterdam. If they pick Verkle, nodes get light in 2026 and 2027, and the tree gets redone once STARK-based proving is production-ready. If they pick binary plus STARK directly, nodes stay heavy a little longer, then make the jump once. Both answers ship statelessness. The question is the number of migrations.",
      },
      {
        type: "paragraph",
        text: "I have watched this debate since 2023 and the mood has flipped twice. For what it is worth, the call I would make in Glamsterdam is binary plus STARK if the Poseidon2 audits land in time, and Verkle if they do not, on the grounds that one state-tree migration per decade is better than two. That is a preference, not a prediction. The decision is not mine.",
      },
      {
        type: "paragraph",
        text: "If either ships in Glamsterdam, and history expiry keeps landing, and Portal's launch clients reach mainnet, the hardware target for a validating Ethereum node drops from a 4 TB NVMe to a phone inside three years.",
      },
      {
        type: "paragraph",
        text: "That is the outcome.",
      },
      {
        type: "heading",
        text: "References",
      },
      {
        type: "references",
        items: [
          { label: "Vitalik Buterin: Possible futures of the Ethereum protocol, part 4: The Verge", url: "https://vitalik.eth.limo/general/2024/10/23/futures4.html" },
          { label: "Vitalik Buterin: Verkle trees (original 2021 post)", url: "https://vitalik.ca/general/2021/06/18/verkle.html" },
          { label: "Vitalik Buterin: A state expiry and statelessness roadmap", url: "https://notes.ethereum.org/@vbuterin/verkle_and_state_expiry_proposal" },
          { label: "EIP-6800: Verkle trees transition", url: "https://eips.ethereum.org/EIPS/eip-6800" },
          { label: "EIP-7864: Ethereum state using a unified binary tree", url: "https://eips.ethereum.org/EIPS/eip-7864" },
          { label: "EIP-7864 Ethereum Magicians discussion", url: "https://ethereum-magicians.org/t/eip-7864-ethereum-state-using-a-unified-binary-tree/22611" },
          { label: "EIP-4444: History expiry", url: "https://eips.ethereum.org/EIPS/eip-4444" },
          { label: "ethereum.org: Verkle trees", url: "https://ethereum.org/roadmap/verkle-trees/" },
          { label: "EF Blog: The 1.x Files: The State of Stateless Ethereum (Dec 2019)", url: "https://blog.ethereum.org/2019/12/30/eth1x-files-state-of-stateless-ethereum" },
          { label: "EF Blog: The 1.x Files: The Stateless Ethereum Tech Tree (Jan 2020)", url: "https://blog.ethereum.org/2020/01/28/eth1x-files-the-stateless-ethereum-tech-tree" },
          { label: "ethresear.ch: The Stateless Client Concept", url: "https://ethresear.ch/t/the-stateless-client-concept/172" },
          { label: "Towards Stateless Clients in Ethereum (arXiv, 2025)", url: "https://arxiv.org/html/2504.14069v1" },
          { label: "Relaunch of Kaustinen, EtherWorld", url: "https://etherworld.co/untitled-47/" },
          { label: "Ethereum Clients Roll Out Partial History Expiry, July 2025", url: "https://etherworld.co/2025/07/08/ethereum-clients-roll-out-partial-history-expiry/" },
          { label: "Portal Network, ethereum.org", url: "https://ethereum.org/developers/docs/networking-layer/portal-network/" },
          { label: "Portal Network specs (GitHub)", url: "https://github.com/ethereum/portal-network-specs" },
          { label: "Nimbus Fluffy ultra-light client", url: "https://status.app/blog/nimbus-fluffly" },
          { label: "The Block: Vitalik's two-part plan to overhaul the execution layer", url: "https://www.theblock.co/post/391681/vitalik-buterin-lays-out-a-two-part-plan-to-overhaul-ethereums-execution-layer-from-the-ground-up" },
          { label: "Solo Staking requirements guide, 2026", url: "https://solo-staking.github.io/" },
          { label: "EthStaker hardware requirements", url: "https://docs.ethstaker.org/hardware/hardware-requirements/" },
        ],
      },
    ],
  },
  {
    slug: "erc-4337-is-not-enough",
    date: "24.04.26",
    readTime: "7 MIN READ",
    title: "ERC-4337 is Not Enough.",
    description:
      "ERC-4337 proved account abstraction could ship without a hard fork. Three years into production, the cost of that choice is visible: a permanent gas premium, a bundler oligopoly, a continuous audit surface on the EntryPoint contract, and a delegation cousin in EIP-7702 that already has its own phishing category. Native AA at the protocol level is the only architecture left that can close those gaps.",
    status: "published",
    content: [
      {
        type: "paragraph",
        text: "ERC-4337 went live on Ethereum mainnet in March 2023. Three years in, the pattern is clear. Builder adoption is broad. User retention is not. The shape of the data on any public Dune dashboard tracking smart-account activity is the same: a wide funnel at deployment and almost nothing at the bottom.",
      },
      {
        type: "paragraph",
        text: "That is not the shape of a UX breakthrough. It is the shape of a system that onboards people and stops getting used.",
      },
      {
        type: "paragraph",
        text: "I am not here to attack the engineering. ERC-4337 shipped account abstraction under one hard constraint: no consensus changes. It proved the idea. Circle's gasless USDC, session keys, paymasters on L2: all real wins. The problem is that the constraint that let it ship is now its ceiling.",
      },
      {
        type: "paragraph",
        text: [
          "On January 29, 2026, Vitalik Buterin, lightclient, Felix Lange, and other EF researchers published ",
          { text: "EIP-8141 (Frame Transactions)", href: "https://eips.ethereum.org/EIPS/eip-8141" },
          ". It defines a new type-0x06 transaction that lets the protocol validate against the account's own code instead of ECDSA, and it is being considered for inclusion in the Hegota fork targeted for late 2026. Native account abstraction at the protocol level is no longer a forum argument. It is on the roadmap.",
        ],
      },
      {
        type: "heading",
        text: "The Numbers Do Not Match the Narrative",
      },
      {
        type: "paragraph",
        text: "Builder adoption has been strong. Most major wallet teams, embedded-wallet providers, and paymaster stacks ship ERC-4337 support out of the box. User retention has not matched. That gap between who integrates it and who actually uses it month over month is the whole story.",
      },
      {
        type: "paragraph",
        text: "The distribution curve on any public smart-account dashboard looks the same: a large population of accounts that deployed once, a small middle of accounts that ran a handful of UserOperations, and almost nothing at the tail. Onboarding works. Keeping users does not.",
      },
      {
        type: "paragraph",
        text: "The geography is as telling as the retention. The overwhelming majority of UserOperation volume lives on L2, not on Ethereum mainnet, with Base carrying the largest share by a wide margin. ERC-4337 has not been stress-tested at L1 gas prices. It works on L2 because L2 gas is cheap.",
      },
      {
        type: "paragraph",
        text: "The bundler market has consolidated in parallel. The original pitch was a decentralized alt-mempool of competing bundlers. In practice, a small number of providers (Alchemy, Pimlico, Stackup, and Candide among them) carry most of the flow, on thin margins, absorbing DoS risk, with no protocol-level revenue. That is not the decentralization story ERC-4337 was supposed to tell.",
      },
      {
        type: "heading",
        text: "Five Gaps No Patch Can Close",
      },
      {
        type: "paragraph",
        text: "ERC-4337 was built as an ERC, not a protocol change. That choice ruled out five things a protocol-layer design would get for free.",
      },
      {
        type: "list",
        items: [
          "Gas overhead. The EntryPoint contract re-implements signature verification, nonce handling, and gas accounting in Solidity. Roughly 42,000 gas per UserOp versus 21,000 for a plain transfer. The 20k delta is permanent.",
          "Censorship resistance. UserOps live outside the protocol's inclusion-list machinery. FOCIL cannot see them.",
          "EOA / smart-account split. Two developer ecosystems. A ZeroDev account cannot be used by a Biconomy app. ERC-6900 and ERC-7579 exist to patch this, but they stack on top of ERC-4337.",
          "Parallel validation. Builders cannot parallelize UserOp validation against shared state. The bottleneck stays at the builder.",
          "Quantum migration. Every EOA is secp256k1-signed. The protocol only knows ECDSA. There is no path to force-upgrade the network to a post-quantum scheme.",
        ],
      },
      {
        type: "code",
        language: "gas accounting",
        text: "# ERC-4337 UserOperation gas anatomy\nEOA_TRANSFER_BASE       = 21,000   # protocol-native, one transaction\nENTRYPOINT_OVERHEAD     = 20,000+  # signature + nonce + gas logic, in Solidity\nUSEROP_TOTAL_BASE       = 42,000+  # before the actual call payload runs",
      },
      {
        type: "paragraph",
        text: "Twenty thousand extra gas is the number most often waved away. It is fatal for tips, micro-subscriptions, and in-game actions: the flows any consumer UX has to carry. The reason UserOps cluster on Base is not that Base has better infrastructure. It is that L1 gas makes the economics stop working for low-value high-frequency actions.",
      },
      {
        type: "heading",
        text: "The Alt-Mempool Is a Permanent Audit Surface",
      },
      {
        type: "paragraph",
        text: "ERC-7562 is the validation scope rules every bundler must enforce. It exists because simulating arbitrary Solidity in the mempool-admission path is DoS-able. Forbidden opcodes. Banned storage patterns. Reputation thresholds. All necessary. None elegant.",
      },
      {
        type: "paragraph",
        text: "The EntryPoint contract has been patched repeatedly as new griefing vectors surface. One representative class: an attacker plants a temporary must-revert condition against a victim's UserOp, forcing the UserOp to consume gas without completing. Victim pays. Attacker does not. Each discovery produces another EntryPoint revision.",
      },
      {
        type: "paragraph",
        text: "Look at the shape of the fix. Another EntryPoint version. Another audit. Another reputation heuristic. v0.6, v0.7, and v0.8 shipped in under two years, the last one adding native EIP-7702 support. Every release lands as a new reference bundler implementation and new validation rules. When validation runs in user-written Solidity off-protocol, the security surface is permanent. You can close vectors. You cannot close the surface.",
      },
      {
        type: "heading",
        text: "EIP-7702 Is the Strongest Argument for Native AA (Not Against It)",
      },
      {
        type: "paragraph",
        text: [
          { text: "EIP-7702", href: "https://eips.ethereum.org/EIPS/eip-7702" },
          " shipped with ",
          { text: "Pectra on May 7, 2025", href: "https://blog.ethereum.org/2025/04/23/pectra-mainnet" },
          ". The type-0x04 set-code transaction lets an EOA temporarily adopt contract code by delegating to an address. It is the best user-facing upgrade that still respects the EOA. Circle shipped gasless USDC via 7702 paymasters. Safe, Ambire, and Gelato shipped 7702-compatible wallets. The same wallet code now serves an EOA and a pure smart account.",
        ],
      },
      {
        type: "paragraph",
        text: "It is also the clearest warning signal in the entire account-abstraction history.",
      },
      {
        type: "quote",
        text: "If the minimal, carefully scoped version of delegation produces a $12M phishing category in its first year, the application-layer approach has reached its limits.",
      },
      {
        type: "paragraph",
        text: [
          "$12M drained from 15,000 wallets via malicious delegation signatures, documented in an ",
          { text: "arXiv study", href: "https://arxiv.org/abs/2512.12174" },
          " and a ",
          { text: "Nethermind analysis", href: "https://www.nethermind.io/blog/eip-7702-attack-surfaces-what-developers-should-know" },
          ". Over 90% of observed on-chain 7702 delegations link to sweeper contracts. Attackers watch for signed authorizations, delegate first, run their own init. The authorization tuples are not visible in the transaction fields users typically inspect. The signature looks routine. The consequence is not.",
        ],
      },
      {
        type: "paragraph",
        text: "Phishing is not the only damage. Governance and LP contracts have relied on the tx.origin == msg.sender check as an EOA detector since 2015. That API contract is silently broken for any delegated EOA. Storage-slot collisions let slot 0 be a bool under one delegation and a uint256 under the next, with no runtime guard. There is no initcode in 7702, so any wallet not designed for 7702 from day one can be front-run at the authorization moment.",
      },
      {
        type: "paragraph",
        text: "None of these are implementation bugs. They are what happens when you bolt smart-account semantics onto an address format defined by ECDSA recovery. The lesson from 7702 is not that delegation was a bad idea. It is that delegation as a surface patch carries compounding costs. The next step cannot be another surface patch.",
      },
      {
        type: "heading",
        text: "What Native AA Actually Is",
      },
      {
        type: "paragraph",
        text: "Native AA means the protocol treats every account as programmable, validates transactions against the code the account points to, and admits them to the canonical mempool under protocol-enforced rules. No alt-mempool. No off-chain bundler. No EntryPoint contract.",
      },
      {
        type: "image",
        src: "/blogs/erc-4337-is-not-enough/vitalik-eip8141-tweet.png",
        alt: "Vitalik Buterin on X discussing FOCIL and EIP-8141",
        caption: "Vitalik Buterin on X: under FOCIL plus EIP-8141, any transaction (smart-wallet, gas-sponsored, privacy-protocol) can be included directly by any of 17 randomly chosen actors per slot. Click for the source post.",
        href: "https://x.com/VitalikButerin/status/2024523896360464791",
      },
      {
        type: "paragraph",
        text: [
          "EIP-8141 builds on the earlier ",
          { text: "EIP-7701", href: "https://eips.ethereum.org/EIPS/eip-7701" },
          " native-AA design. It defines a type-0x06 transaction made of frames. The spec describes three frame modes: DEFAULT (which executes as an entry point), VERIFY (which runs the account's validation code in a bounded context), and SENDER (which executes on behalf of the sender). Nodes simulate the frames before admitting the transaction to the mempool. The validation code can be ECDSA, multisig, passkeys, social recovery, or post-quantum signature schemes like Lamport, SPHINCS+, or ML-DSA. All of it first-class. All of it inside the same inclusion-list rules as ordinary transactions.",
        ],
      },
      {
        type: "paragraph",
        text: "The pairing with FOCIL (Fork-Choice Inclusion Lists) is what makes this consequential. Under FOCIL, each slot has seventeen actors: one proposer and sixteen includers, all chosen at random. Any of them can force inclusion of a transaction within one or two slots. With EIP-8141, the transactions that qualify for that guarantee include smart-wallet operations, gas-sponsored operations, and privacy-protocol calls, sent through the public mempool directly to a FOCIL includer. No wrapper transaction. No off-chain broadcaster. No dependence on the last-look proposer role that ePBS auctions off. Today's FOCILs are 8 kB each, small by design, with a stated extension path to eventually carry the majority of block traffic if needed.",
      },
      {
        type: "paragraph",
        text: [
          "EIP-8141 is not alone. ",
          { text: "EIP-8130", href: "https://eips.ethereum.org/EIPS/eip-8130" },
          " (Chris Hunter, Coinbase, October 2025) takes a different approach: rather than let each account ship arbitrary Solidity in its validation path, it has transactions declare an explicit verifier contract and register owners through an on-chain Account Configuration. Nodes can filter on the verifier without full EVM simulation. Paradigm's Tempo proposal goes further in that direction, defining a narrow transaction-level primitive (type 0x76) with batching, passkeys, and occasional sponsorship, and deliberately refusing to support arbitrary validation logic. All three proposals agree native AA has to happen at L1. The argument is about scope on day one, not direction.",
        ],
      },
      {
        type: "paragraph",
        text: "The existence proof is already on-chain. ZKsync Era treats every account, including EOAs, as a smart-contract account and runs a unified mempool with no bundler infrastructure. StarkNet's sequencer processes AA directly. Both have been live in production for years. The bundler detour on Ethereum L1 was never required by the idea of account abstraction. It was required by the constraint that 4337 ship without consensus changes.",
      },
      {
        type: "heading",
        text: "What Breaks Open",
      },
      {
        type: "paragraph",
        text: "The endgame the roadmap has described since 2015 is finally tractable: programmable accounts by default, ECDSA de-enshrined, EOAs as a legacy shim.",
      },
      {
        type: "list",
        items: [
          "A 21,000 gas floor with no Solidity re-implementation of validation or nonce handling.",
          "One transaction format. One mempool. One inclusion-rule set.",
          "Protocol-level censorship resistance. Frame transactions participate in FOCIL inclusion lists on equal footing.",
          "Parallel validation. Builders can statically analyze validation frames against shared state.",
          "First-class paymasters. Fee sponsorship is a native transaction shape, not a simulated call path.",
          "A concrete post-quantum migration. Overlay rules treat every EOA as a standardized wallet contract; the network rotates to PQ signatures through ordinary wallet upgrades. No flag day.",
          "True account portability. An account is the code at its address.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are hypothetical. Each one is live on a production native-AA chain or specified in a written proposal under review.",
      },
      {
        type: "heading",
        text: "Who Should Care, and Why",
      },
      {
        type: "paragraph",
        text: "If you build wallets, current 4337 and 7702 work is not wasted. It is bridge code. The account-interface patterns in ERC-6900 and ERC-7579 carry forward. The EntryPoint abstraction does not. Any roadmap that treats EntryPoint v1.0 as a stable target is planning for the wrong endgame.",
      },
      {
        type: "paragraph",
        text: "If you build applications, watch the gas floor. A 20,000 gas premium per UserOp is the line between feasible on L1 and only feasible on L2. When that premium disappears, tips, micro-subscriptions, in-game actions, and paymaster-sponsored onboarding become viable at mainnet cost, not just at Base cost.",
      },
      {
        type: "paragraph",
        text: "If you run a client, EIP-8141 is a real implementation budget. Scope compression is the live debate on the All Core Devs calls. The direction is settled.",
      },
      {
        type: "heading",
        text: "The Structural Argument",
      },
      {
        type: "paragraph",
        text: "ERC-4337 shipped under a real constraint. The constraint is the problem. As long as validation runs in user-written Solidity inside an EntryPoint contract, the system carries a 20k gas tax, a DoS surface that requires continuous patching, and a concentrated bundler market in place of the decentralized alt-mempool that was promised.",
      },
      {
        type: "paragraph",
        text: "A retention curve that falls off a cliff. 20k of unavoidable overhead per operation. Three EntryPoint revisions in under two years. $12M drained from 15,000-plus wallets via 7702 phishing in its first year, with over 90% of observed 7702 delegations pointing to sweeper contracts. These are not bugs to be patched. They are the shape of the architecture.",
      },
      {
        type: "paragraph",
        text: "EIP-8141, or a scoped variant like EIP-8130 or Tempo, in Hegota is the moment Ethereum either commits to the endgame it has been describing since 2015 or spends another cycle patching the workaround.",
      },
      {
        type: "paragraph",
        text: "The conversation has already moved. The fork has to catch up.",
      },
      {
        type: "heading",
        text: "References",
      },
      {
        type: "references",
        items: [
          { label: "EIP-8141: Frame Transaction (Buterin, lightclient, Lange et al., Jan 2026)", url: "https://eips.ethereum.org/EIPS/eip-8141" },
          { label: "EIP-8130: Account Abstraction by Account Configuration (Hunter, Coinbase, Oct 2025)", url: "https://eips.ethereum.org/EIPS/eip-8130" },
          { label: "Vitalik Buterin on X: FOCIL and EIP-8141", url: "https://x.com/VitalikButerin/status/2024523896360464791" },
          { label: "Vitalik Buterin: The Road to Account Abstraction (HackMD)", url: "https://notes.ethereum.org/@vbuterin/account_abstraction_roadmap" },
          { label: "ERC-4337: Account Abstraction Using Alt Mempool", url: "https://eips.ethereum.org/EIPS/eip-4337" },
          { label: "ERC-7562: Account Abstraction Validation Scope Rules", url: "https://eips.ethereum.org/EIPS/eip-7562" },
          { label: "EIP-7701: Native Account Abstraction", url: "https://eips.ethereum.org/EIPS/eip-7701" },
          { label: "EIP-7702: Set Code for EOAs (Pectra, May 7 2025)", url: "https://eips.ethereum.org/EIPS/eip-7702" },
          { label: "RIP-7560: Native Account Abstraction (rollups)", url: "https://github.com/ethereum/RIPs/blob/master/RIPS/rip-7560.md" },
          { label: "Ethereum Foundation: Pectra Mainnet Announcement", url: "https://blog.ethereum.org/2025/04/23/pectra-mainnet" },
          { label: "arXiv 2512.12174: EIP-7702 Phishing Attack", url: "https://arxiv.org/abs/2512.12174" },
          { label: "eth-infinitism/account-abstraction releases (EntryPoint v0.6 to v0.8)", url: "https://github.com/eth-infinitism/account-abstraction/releases" },
          { label: "ZKsync Era: Native AA vs EIP-4337", url: "https://docs.zksync.io/zksync-protocol/era-vm/differences/native-vs-eip4337" },
          { label: "Starknet: Account Abstraction", url: "https://www.starknet.io/blog/account-abstraction/" },
        ],
      },
    ],
  },
  {
    slug: "wtf-is-op-cat",
    date: "22.10.25",
    readTime: "11 MIN READ",
    title: "WTF is OP_CAT? Why Should We Care?",
    description:
      "A twelve-line opcode Satoshi silently removed in 2010, a Schnorr signature quirk Andrew Poelstra noticed a decade later, and the reason every serious Bitcoin layer-2 team is quietly lobbying for a soft fork.",
    status: "published",
    content: [
      {
        type: "paragraph",
        text: [
          "OP_CAT is opcode 0x7e. It pops two items off the stack and pushes their concatenation. It shipped in Bitcoin 0.1. On August 15, 2010, in ",
          { text: "commit 4bd188c titled \"misc changes\"", href: "https://github.com/bitcoin/bitcoin/commit/4bd188c4383d6e614e18f79dc337fbabe8464c82" },
          ", Satoshi Nakamoto silently disabled it alongside fourteen other opcodes. There was no announcement. ",
          { text: "BIP-347", href: "https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki" },
          " is the proposal to turn it back on in Tapscript.",
        ],
      },
      {
        type: "paragraph",
        text: "The reintroduction is the single most consequential script change being seriously debated for Bitcoin right now. Not because concatenation is interesting. Because OP_CAT combined with a Schnorr signature quirk gives Bitcoin Script transaction introspection. Transaction introspection is another name for covenants. Covenants are the primitive every serious Bitcoin layer-2 team is waiting on.",
      },
      {
        type: "heading",
        text: "What OP_CAT Actually Does",
      },
      {
        type: "paragraph",
        text: "The specification is one sentence. Given a stack [x1, x2] with x2 on top, OP_CAT pushes x1 || x2. It fails if there are fewer than two items on the stack or if the result exceeds 520 bytes. Nothing else.",
      },
      {
        type: "paragraph",
        text: "BIP-347's reference implementation is twelve lines of C++. It is structurally close to the version Satoshi shipped in 2009. The two material differences are that it checks the result size against MAX_SCRIPT_ELEMENT_SIZE = 520 before writing back to the stack (the original checked 5000 bytes after the write), and it returns specific script error codes instead of a bare false.",
      },
      {
        type: "code",
        language: "bip-347 reference implementation",
        text: "case OP_CAT:\n{\n  if (stack.size() < 2)\n    return set_error(serror, SCRIPT_ERR_INVALID_STACK_OPERATION);\n  valtype& vch1 = stacktop(-2);\n  valtype& vch2 = stacktop(-1);\n  if (vch1.size() + vch2.size() > MAX_SCRIPT_ELEMENT_SIZE)\n    return set_error(serror, SCRIPT_ERR_PUSH_SIZE);\n  vch1.insert(vch1.end(), vch2.begin(), vch2.end());\n  stack.pop_back();\n}\nbreak;",
      },
      {
        type: "paragraph",
        text: [
          "Activation reuses opcode value 126 (0x7e), the slot OP_CAT originally occupied. Post-Taproot, 0x7e is currently defined as OP_SUCCESS126. ",
          { text: "BIP-342", href: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" },
          " shipped the OP_SUCCESSx mechanism specifically so future soft forks could redefine currently-no-op opcodes without consuming a new byte. BIP-347 is the cleanest possible exercise of that mechanism: same name, same byte, same semantics, one new safety check.",
        ],
      },
      {
        type: "heading",
        text: "Why Satoshi Removed It in 2010",
      },
      {
        type: "paragraph",
        text: "Folklore says OP_CAT was removed because a crafted script could blow the stack up exponentially. Push a one-byte value, then alternate OP_DUP and OP_CAT forty times, and the top stack element is larger than one terabyte. That pattern is real. The folklore is only half the story.",
      },
      {
        type: "paragraph",
        text: "Bitcoin in August 2010 already had a per-element stack cap of 5000 bytes. The terabyte figure assumes that cap does not exist. In practice a node running 0.3.9 would have rejected the oversized element well before it did any damage. BIP-347 acknowledges this directly: the removal was a blanket precaution, not a considered response to an exploit.",
      },
      {
        type: "paragraph",
        text: "The commit itself is labelled \"misc changes.\" It disabled OP_CAT, OP_SUBSTR, OP_LEFT, OP_RIGHT, OP_INVERT, OP_AND, OP_OR, OP_XOR, OP_2MUL, OP_2DIV, OP_MUL, OP_DIV, OP_MOD, OP_LSHIFT, and OP_RSHIFT. The disable for OP_VERIF and OP_VERNOTIF sits elsewhere in the script interpreter and predates this commit. Satoshi shipped the misc-changes rollup in 0.3.10 and moved on. There is no mailing-list thread, no design document, no rationale. It is one of the quietest consensus changes in Bitcoin's history.",
      },
      {
        type: "heading",
        text: "Why Tapscript Makes It Safe",
      },
      {
        type: "paragraph",
        text: "Taproot activated on Bitcoin mainnet in November 2021. Two features of the surrounding script system matter for OP_CAT. Tapscript enforces a 520-byte maximum stack element size (MAX_SCRIPT_ELEMENT_SIZE has been part of Bitcoin's script rules since long before Taproot; Tapscript continues to enforce it). And BIP-342 defines OP_SUCCESSx, a set of opcode slots that pass by default today and can be redefined to arbitrary behavior via a future soft fork.",
      },
      {
        type: "paragraph",
        text: "Those two features together defuse the 2010 concern structurally. An OP_DUP plus OP_CAT loop doubles the top stack element on every iteration. Starting from one byte, the tenth doubling crosses 520 bytes and the script aborts. The exponential blow-up is not a design question anymore. It is a thing the interpreter cannot do.",
      },
      {
        type: "heading",
        text: "The Timeline: BIN-2024-0001, BIP-420, BIP-347",
      },
      {
        type: "paragraph",
        text: [
          "Ethan Heilman and Armin Sabouri authored the spec. Heilman posted the draft to the ",
          { text: "bitcoin-dev list on October 21, 2023", href: "https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-October/022049.html" },
          ". The Bitcoin Inquisition Numbers And Names Authority assigned it BIN-2024-0001 in January 2024. The BIP editors moved more slowly. Luke Dashjr, then a sitting BIP editor, had been holding up several active proposals citing a lack of broad support.",
        ],
      },
      {
        type: "paragraph",
        text: "Taproot Wizards co-founders Eric Wall and Udi Wertheimer responded in April 2024 with a meme campaign to force the issue, lobbying for the number BIP-420. The campaign worked, indirectly. Ava Chow's proposal to add more BIP editors landed in the same window. On April 24, 2024, OP_CAT was officially assigned BIP-347. The spec merged to the bitcoin/bips repository on May 6, 2024.",
      },
      {
        type: "paragraph",
        text: "BIP-420 is not OP_CAT. It is a separate informal covenants proposal that the bip420 GitHub group continues to maintain. Crypto press has conflated the two often enough to be worth saying out loud once. The canonical OP_CAT proposal is BIP-347 and has been since April 2024.",
      },
      {
        type: "heading",
        text: "The Schnorr Trick",
      },
      {
        type: "paragraph",
        text: [
          "If OP_CAT only concatenated bytes, the activation debate would not exist. What makes the opcode load-bearing is a signature verification quirk Andrew Poelstra wrote up across January and February 2021 in a pair of posts titled ",
          { text: "\"CAT and Schnorr Tricks\"", href: "https://www.wpsoftware.net/andrew/blog/cat-and-schnorr-tricks-i.html" },
          ".",
        ],
      },
      {
        type: "paragraph",
        text: [
          { text: "BIP-340", href: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" },
          " Schnorr signatures satisfy s = k + xe, where e is the tagged challenge hash H_BIP0340/challenge(R || P || m), P = xG is the public key, R = kG is the ephemeral nonce, and m is the sighash of the spending transaction. Poelstra noticed what happens if you force x = k = 1. Both P and R collapse to the generator G, and the signature equation reduces to this:",
        ],
      },
      {
        type: "code",
        language: "schnorr covenant reduction",
        text: "BIP340 signature:     s = k + x * e\n                      e = H_BIP0340/challenge(R || P || m)\n\nForce x = 1, k = 1:\n  P = G, R = G:       s = 1 + H_BIP0340/challenge(G || G || m)\n\nMeaning of s:         a tagged SHA256 of the spending transaction data,\n                      with a fixed prefix, offset by 1.",
      },
      {
        type: "paragraph",
        text: "The value of s is a deterministic hash of the spending transaction with a fixed prefix that Script can compute. If a script pushes pieces of the transaction, concatenates them with OP_CAT, hashes the result, adds 1, and compares against s, it has reconstructed the sighash on the stack. Feeding the same (s, R=G) into OP_CHECKSIG with pubkey G then validates that the reconstructed bytes match the actual spending transaction.",
      },
      {
        type: "paragraph",
        text: "The working script, credited to Dmitry Petukhov, is five opcodes:",
      },
      {
        type: "code",
        language: "petukhov covenant prelude",
        text: "<G> 2DUP SWAP CAT SWAP CHECKSIG\n\n# stack starts with:     [s]\n# <G> 2DUP:               [s, G, s, G]\n# SWAP CAT:               [s, G, G || s]\n# SWAP:                   [s, G || s, G]\n# CHECKSIG consumes top two as (sig = G || s, pubkey = G)\n# leaves s on the stack for the rest of the script to inspect",
      },
      {
        type: "paragraph",
        text: "The one wart is the +1 offset. The signature equation produces s = hash + 1, and Script has no native 256-bit addition opcode. The workaround is grinding transaction data until the sighash ends in 0x01, which lets the +1 fix-up reduce to a byte-level edit. It is annoying. It is not blocking.",
      },
      {
        type: "paragraph",
        text: "Everything downstream of this trick is what people mean when they talk about OP_CAT enabling covenants. CHECKSIGFROMSTACK was never added to Bitcoin, but OP_CAT plus BIP-340 signatures emulate it. A concatenation opcode plus a signature scheme designed for a completely different purpose gives Script a capability the protocol has explicitly refused to enshrine for fifteen years.",
      },
      {
        type: "heading",
        text: "What OP_CAT Enables",
      },
      {
        type: "paragraph",
        text: "BIP-347 lists eight use cases in its motivation section. The ones that matter most are the ones several independent teams are already building against.",
      },
      {
        type: "list",
        items: [
          [
            "Vaults. A covenant that forces a withdrawal through a timelocked path. If a signing key is compromised, the legitimate owner sees the pending spend and rotates funds to a recovery key before the timelock elapses. ",
            { text: "Moser, Eyal, and Sirer's 2016 covenants paper", href: "https://fc16.ifca.ai/bitcoin/papers/MES16.pdf" },
            " specified the construction. OP_CAT is sufficient to build it.",
          ],
          [
            "BitVM2. Robin Linus's ",
            { text: "BitVM2 design", href: "https://bitvm.org/bitvm_bridge.pdf" },
            " (announced August 2024) uses a fraud-proof challenge game whose worst-case path takes many on-chain transactions. BIP-347 itself cites BitVM2 as a motivating use case: OP_CAT would let BitVM2 eliminate its trusted setup and shrink the size of the transactions it needs.",
          ],
          [
            "STARK verifiers. Weikeng Chen built a Circle-STARK verifier in Bitcoin Script. In July 2024, the final transaction in a Fibonacci-squared proof chain confirmed on signet under Inquisition semantics, ",
            { text: "widely reported at the time", href: "https://bitcoinmagazine.com/technical/a-zero-knowledge-proof-is-verified-on-bitcoin-for-the-first-time-in-history" },
            " as the first STARK verified on Bitcoin's script environment. The verifier is not production-ready. The primitive exists.",
          ],
          [
            "Tree signatures. A multisignature whose script size is logarithmic in the key count. ",
            { text: "Pieter Wuille's 2015 construction", href: "https://blog.blockstream.com/en-treesignatures/" },
            " scales up to 2^32 public keys, with script sizes in the hundreds-of-bytes range for practical fan-outs.",
          ],
          "Lamport and Winternitz signatures. Hash-based signature schemes that only need a hash function and concatenation. BIP-347 is careful to note that Taproot's key-path spend still leaks to a quantum adversary, so these do not make Bitcoin post-quantum by themselves. They are a path component, not a solution.",
          "Non-equivocation bonds. Payment channel constructions that penalize double-spending by forcing the attacker to reveal the key they used to sign two conflicting transactions.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are new ideas. All of them have published designs from 2015-2021 that assumed either an undefined CHECKSIGFROMSTACK opcode or an unspecified introspection primitive. OP_CAT is the single missing ingredient that makes every one of them executable in Tapscript as it exists today.",
      },
      {
        type: "heading",
        text: "Where It Already Runs",
      },
      {
        type: "paragraph",
        text: "OP_CAT is not activated on Bitcoin mainnet. It is activated on two places that matter.",
      },
      {
        type: "paragraph",
        text: [
          { text: "Fractal Bitcoin launched its mainnet", href: "https://fractalbitcoin.io/updates/fractal-mainnet-launches-press-release" },
          " on September 9, 2024 with OP_CAT activated from genesis. The CAT20 token standard, the CAT Protocol bridge, and a handful of inscription-adjacent tooling have been running against it in production since launch. Fractal is a separate chain running a hybrid SHA-256d proof-of-work model its team calls cadence mining: a portion of blocks are merge-mined with Bitcoin, the rest are produced by a permissionless Fractal-only miner set. The data Fractal produces is evidence of the opcode's behavior under load, not of Bitcoin social adoption.",
        ],
      },
      {
        type: "paragraph",
        text: "Bitcoin Inquisition is a signet fork that ships proposed soft-fork opcodes under draft BIP semantics. Inquisition 27.0, released in late May 2024, began enforcing OP_CAT on signet. Every serious implementation of BIP-347-adjacent tooling, including Chen's STARK verifier and the Taproot Wizards' CatVM bridge prototype, runs against Inquisition.",
      },
      {
        type: "paragraph",
        text: "The gap between \"works on Fractal\" and \"activated on Bitcoin\" is not code. It is consensus.",
      },
      {
        type: "heading",
        text: "The Opposition",
      },
      {
        type: "paragraph",
        text: "The serious objections to OP_CAT are not about the opcode. They are about the class of applications the opcode enables.",
      },
      {
        type: "paragraph",
        text: [
          "The ossification camp argues that Bitcoin's consensus rules are load-bearing because they have not changed. Luke Dashjr held this position while he was a BIP editor and declined to number OP_CAT for months on the grounds of insufficient broad support. The counter, ",
          { text: "made publicly by Andrew Poelstra among others", href: "https://bitcoinmagazine.com/technical/op-cat-poelstra-ossification" },
          ", is that Bitcoin has already evolved through Ordinals and inscriptions without a single consensus change, so the ossification argument is defending a position the ecosystem has already left.",
        ],
      },
      {
        type: "paragraph",
        text: "The MEV concern is that richer covenants enable on-chain auctions, programmable spending conditions, and layer-2 contracts that import the front-running dynamics Ethereum has spent five years trying to mitigate. Poelstra's response is that Bitcoin's mempool does not expose contract state the way an EVM block does, so the attack surface is narrower. That response does not rebut the concern. It shrinks it.",
      },
      {
        type: "paragraph",
        text: "The fee concern is that more expressive scripts produce larger witnesses, which raise fees for ordinary users. This one is straightforwardly correct. The counter is that the fee market is already saturated by inscriptions and BRC-20s, neither of which required a consensus change, and OP_CAT-based applications compete for the same blockspace rather than creating new demand.",
      },
      {
        type: "paragraph",
        text: "The hardest objection to answer is unintended consequences. Recursive covenants (state forced to persist across spends) are theoretically possible with OP_CAT plus a couple of other primitives. Nobody has shipped one that works. If they exist and behave badly, the damage is structural rather than reversible. The usual response is that Bitcoin Inquisition is where you find out. Roughly two years in, the live experiment has produced demos and a verified STARK proof, not disaster.",
      },
      {
        type: "heading",
        text: "How the Pieces Fit",
      },
      {
        type: "paragraph",
        text: "OP_CAT is a twelve-line C++ patch whose footprint on the Bitcoin protocol is smaller than almost any change that has been activated since SegWit. Its significance comes from a composability fact that nobody saw in 2010 and almost nobody saw until 2021: concatenation plus a signature algorithm designed for a completely different purpose gives Script transaction introspection.",
      },
      {
        type: "paragraph",
        text: "That is the reason the list of teams lobbying for activation is long. Citrea gets a cheaper bridge. Starknet gets a path to settling STARK proofs on Bitcoin. BitVM2 gets to drop its trusted setup and shrink its transactions. Taproot Wizards' CatVM gets permissionless exits. Vault designers get a construction they have been writing papers about for nearly a decade. None of this requires a new opcode. It requires one opcode Satoshi turned off for reasons he did not write down.",
      },
      {
        type: "paragraph",
        text: [
          "The spec is merged. The tests pass. The implementation exists. Bitcoin has not coordinated on an activation path, and it is not obvious when or how it will. ",
          { text: "Eli Ben-Sasson told Cointelegraph in 2024", href: "https://cointelegraph.com/news/op-cat-may-go-live-bitcoin-within-12-months-starkware-eli-ben-sasson" },
          " that activation within twelve months was plausible. That window has closed. The window after it is open.",
        ],
      },
      {
        type: "heading",
        text: "References",
      },
      {
        type: "references",
        items: [
          { label: "BIP-347: OP_CAT in Tapscript (source)", url: "https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki" },
          { label: "Satoshi's 2010 misc changes commit (OP_CAT disabled)", url: "https://github.com/bitcoin/bitcoin/commit/4bd188c4383d6e614e18f79dc337fbabe8464c82" },
          { label: "Andrew Poelstra: CAT and Schnorr Tricks I", url: "https://www.wpsoftware.net/andrew/blog/cat-and-schnorr-tricks-i.html" },
          { label: "Andrew Poelstra: CAT and Schnorr Tricks II", url: "https://www.wpsoftware.net/andrew/blog/cat-and-schnorr-tricks-ii.html" },
          { label: "Bitcoin Optech: OP_CAT topic", url: "https://bitcoinops.org/en/topics/op_cat/" },
          { label: "BIP-340: Schnorr Signatures", url: "https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki" },
          { label: "BIP-342: Tapscript (validation rules)", url: "https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki" },
          { label: "Blockstream: OP_CAT for Covenants", url: "https://blog.blockstream.com/op_cat-the-purr-fect-solution-for-covenants/" },
          { label: "Bitcoin Magazine: First ZK Proof Verified on Bitcoin", url: "https://bitcoinmagazine.com/technical/a-zero-knowledge-proof-is-verified-on-bitcoin-for-the-first-time-in-history" },
          { label: "L2IV Research: Progress on the Bitcoin STARK Verifier", url: "https://l2ivresearch.substack.com/p/recent-progress-on-bitcoin-stark" },
          { label: "BitVM2 paper (Linus et al., 2025)", url: "https://bitvm.org/bitvm_bridge.pdf" },
          { label: "Moser, Eyal, Sirer: Bitcoin Covenants (2016)", url: "https://fc16.ifca.ai/bitcoin/papers/MES16.pdf" },
          { label: "Pieter Wuille: Tree Signatures (2015)", url: "https://blog.blockstream.com/en-treesignatures/" },
          { label: "Fractal Bitcoin mainnet launch (Sept 9, 2024)", url: "https://fractalbitcoin.io/updates/fractal-mainnet-launches-press-release" },
          { label: "bitcoin-dev: Proposed BIP for OP_CAT (Oct 2023)", url: "https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-October/022049.html" },
          { label: "Xverse: BIP-420 to BIP-347 history", url: "https://www.xverse.app/blog/catvm-bip420" },
          { label: "awesome-op-cat (sCrypt)", url: "https://github.com/sCrypt-Inc/awesome-op-cat" },
        ],
      },
    ],
  },
  {
    slug: "state-channels-round-two",
    date: "24.04.26",
    readTime: "10 MIN READ",
    title: "State Channels, Round Two.",
    description:
      "ERC-7824 shipped as a draft in January 2025 and Yellow Network is building a real crypto clearing business on the reference implementation. The protocol layer is ready. The opinionated layer above the SDK is where the next year of state-channel apps gets shaped.",
    status: "published",
    content: [
      {
        type: "paragraph",
        text: "ERC-7824 was opened as a pull request on November 22, 2024 and posted to Ethereum Magicians on January 17, 2025. It is a chain-agnostic standard for state channel interfaces. Author is Louis Bellet, co-founder of Yellow Network. The reference implementation is Nitrolite. Yellow is deploying it as the clearing layer of a real crypto settlement business, with the YELLOW token generation event on March 8, 2026.",
      },
      {
        type: "paragraph",
        text: "State channels are not new. Poon and Dryja's Lightning Network paper came in January 2016. Raiden has been on Ethereum in some form since 2017. Nitro Protocol came out of the Magmo / ConsenSys line between 2019 and 2023 and is the direct ancestor of what ships now.",
      },
      {
        type: "paragraph",
        text: "What is new is a chain-agnostic standard, a production deployment whose business model forces the protocol to work, and the start of a tooling layer between raw protocol and shippable app. I am going to argue the third piece is the one that matters for 2026.",
      },
      { type: "heading", text: "What a State Channel Actually Is" },
      {
        type: "paragraph",
        text: "A state channel is a smart contract holding collateral for two or more parties, plus a rule for resolving the latest state those parties co-signed. Updates happen off-chain. The chain sees one open and one close. If the parties disagree, the chain adjudicates on the highest-versioned co-signed state.",
      },
      {
        type: "paragraph",
        text: "Two parties deposit into a custody contract. They run a counter off-chain: balances, game state, trade P&L, whatever the application needs. Every update is versioned and signed by both sides. Either party can post the latest version at any time. Post a stale one and the other party has a dispute window to publish something newer.",
      },
      {
        type: "image",
        src: "/blogs/state-channels-round-two/how-state-channels-work.png",
        alt: "Three-stage diagram of a state channel. On-chain opening with Alice and Bob each depositing 100 USDC into a custody contract. Off-chain state updates co-signed by both parties, versioned. On-chain settlement at close using the final co-signed state.",
        caption: "On-chain open, off-chain co-signed updates, on-chain close. The chain sees the ends, not the middle.",
      },
      {
        type: "list",
        items: [
          "Both parties must sign every update. If one side refuses, the other closes the channel at the last state everyone did agree to.",
          "Updates carry versions. The contract enforces the highest-versioned co-signed state either party can produce. Old states cannot be revived.",
          "Disputes have windows. The chain waits before finalizing, giving the honest party time to publish something newer if they have it.",
        ],
      },
      {
        type: "paragraph",
        text: "Jeff Coleman coined the term in 2015. Lightning was the first production deployment, payments on Bitcoin. Raiden ported the pattern to Ethereum in 2017. Nitro and the Magmo line generalized from balance-only payments to arbitrary state machines. Nitrolite picks up that thread.",
      },
      { type: "heading", text: "State Channels vs. Rollups" },
      {
        type: "paragraph",
        text: "Rollups scale the case where everyone is doing a little. State channels scale the case where a few parties are doing a lot.",
      },
      {
        type: "paragraph",
        text: "A rollup gives you a shared execution environment. Permissionless entry. Global state. Settlement amortized across the chain's traffic. A state channel gives you a private execution environment scoped to the parties that opened it. Instant finality between them. Zero gas per interaction. Locked capital for the duration. Fixed counterparty set until close.",
      },
      {
        type: "paragraph",
        text: "Channels and rollups get framed as competing L2 narratives. They are not. They compose. Open liquidity on a rollup. High-frequency session on top of that liquidity in a channel. Most of the historical confusion came from trying to use one primitive for the other's workload.",
      },
      { type: "heading", text: "Yellow Network and the Clearing Insight" },
      {
        type: "paragraph",
        text: "Yellow Network is the first production deployment willing to bet a real business on state channels. Legal entity is Layer3 FinTech Ltd. Chairman is Alexis Sirkia, co-founder of GSR, one of the largest crypto market makers; he exited GSR in 2025. Chief architect is Louis Bellet, the ERC-7824 author. Seed round was $10M led by Chris Larsen of Ripple, plus $1M+ through a Reg D sale on Republic.",
      },
      {
        type: "paragraph",
        text: "The design move that separates Yellow from earlier channel networks is that it clears P&L, not principal. Lightning and Raiden move balances. Every payment updates locked principal. Which means every participant needs capital proportional to their throughput. Yellow moves P&L between brokers instead. Two brokerage firms open a channel with stablecoin collateral. Their clients trade through them at sub-second speeds. Net P&L between the brokers hits chain only when the channel closes.",
      },
      {
        type: "paragraph",
        text: "This is how prime brokerage has worked for fifty years. Nobody wires money every time a client places a trade. A clearinghouse nets positions and settles on an interval. Yellow is applying that in crypto, with a state channel standing in for a DTCC. Channel primitives have existed for almost a decade. What is new is somebody running a crypto clearing business as a clearing business rather than another DEX.",
      },
      {
        type: "paragraph",
        text: "Yellow's stack has three layers. A Custody contract holds collateral and adjudicates disputes. A margin-call protocol updates collateral state over RPC as positions move. A matching engine sits at the application layer. The off-chain nodes are called ClearNodes. Brokers operate them. Users get a unified balance across chains without having to bridge funds for every trade.",
      },
      { type: "heading", text: "ERC-7824" },
      {
        type: "paragraph",
        text: "The status is still Draft. PR opened November 22, 2024. Magicians thread landed January 17, 2025. Dedicated site launched February 2025. First Nitrolite SDK alpha on npm April 2, 2025. Draft is the right status for a standard still being proved in production.",
      },
      {
        type: "paragraph",
        text: "The interface is what the spec specifies. Channel open, update, close, dispute. The message format for co-signed state transitions. The state machine the application runs inside the channel, the transport, and the dispute-watching logic on the client are all deliberately out of scope. The portability you get is this: a channel opened by one implementation can be adjudicated by another, and custody contracts work across EVM chains.",
      },
      { type: "heading", text: "Nitrolite" },
      {
        type: "paragraph",
        text: "Nitrolite is the reference implementation of ERC-7824. The repo describes itself as a simplified version of Nitro for prototyping state-channel applications. Solidity custody contracts. TypeScript SDK. Go client. ClearNode server. An interactive REPL called Cerebro. The TypeScript SDK first landed on npm on April 2, 2025 as @erc7824/nitrolite, shipped through 0.x up to 0.5.3 in December 2025, and migrated to @yellow-org/sdk at v1.0 on March 8, 2026 — the same day as the YELLOW TGE. A @yellow-org/sdk-compat package exists as a migration layer. Repo is under the erc7824 and layer-3 GitHub orgs.",
      },
      {
        type: "paragraph",
        text: "The v1 client gives you typed channel-lifecycle methods on a unified client. deposit(chainId, asset, amount). transfer(wallet, asset, amount). checkpoint(asset) for on-chain settlement. challenge(state) for raising disputes. closeHomeChannel(asset). acknowledge(asset) for incoming states. State advancements are validated on the client: StateAdvancerV1 throws on version mismatch, asset mismatch, or malformed transitions before a proposed state leaves the process. Typed events flow through a Listener interface for the full channel lifecycle.",
      },
      {
        type: "paragraph",
        text: "Three pieces it intentionally leaves to the app layer. That is the right call for a reference SDK — every product will want these solved a little differently. I built on top with an actual application in mind and ended up solving the same three each time.",
      },
      {
        type: "list",
        items: [
          "Dispute response is manual, by design. The client exposes challenge() and emits HomeChannelChallengedEvent; the app decides when and how to watch, reconstruct the latest co-signed state, and submit before the window closes. This lets each product pick its own reliability model.",
          "Channel-state persistence is app-side. ClientAssetStore caches asset metadata, and channel state across browser refresh or process restart is wired up per app — which storage backend, what TTL, what recovery semantics. That is a choice, not an oversight.",
          "No framework bindings, and that is the right call for a framework-agnostic SDK. Transport initialization, hydration, and SSR are each project's problem to solve for its own stack.",
        ],
      },
      {
        type: "quote",
        text: "Protocols ship. SDKs ship. What defines the next year is the opinionated layer above — the one that makes shipping an app on state channels feel like shipping on anything else.",
      },
      { type: "heading", text: "The Tooling Gap" },
      {
        type: "paragraph",
        text: "Every protocol goes through the same phase after it ships. Ethereum had it until ethers and then viem matured. Rollups had it until Conduit, Caldera, and similar tooling showed up. State channels are in exactly that phase now. The primitives are there. The spec is there. The v1 SDK is there. What the next round of work is about is the opinionated layer above — the piece that lets a product team ship without also having to become a state-channel library author.",
      },
      {
        type: "paragraph",
        text: "I started NitroGuard against Nitrolite 0.5.x with a list of five things an app would need on top. When the v1 release landed in March, Yellow had solved two of those five at the SDK layer — state-transition validation and a typed client — and that is exactly the right layer for them. The three that remain are app-shaped: a dispute watcher plus ClearNode silence monitor that auto-submits the latest co-signed state when a challenge lands, channel-state persistence across browser refresh with pluggable storage adapters, and React and Next.js bindings that survive SSR. NitroGuard also adds a channel-lifecycle FSM above Nitrolite's state-advancement validation, so open, send, close, and withdraw can only be called from valid source phases. Version 0.1.1 is on npm as nitroguard. Repo is at github.com/Giri-Aayush/nitroguard.",
      },
      {
        type: "paragraph",
        text: "The channel-lifecycle state machine is the piece I care about most. Nitrolite v1 validates individual state transitions; NitroGuard sits above that and validates which method you can even call from which lifecycle phase. Every public method maps to a valid transition in the FSM below. Call the wrong method in the wrong phase and you get an InvalidTransitionError at the call site instead of a channel that corrupts quietly and blows up three operations later.",
      },
      {
        type: "code",
        language: "nitroguard channel state machine",
        text: "VOID        ->  INITIAL       # open() — deposit confirmed on chain\nINITIAL     ->  ACTIVE        # both parties co-signed the opening state\nACTIVE      <-> DISPUTE       # either party can raise; window starts\nDISPUTE     ->  FINAL         # highest co-signed version wins\nFINAL       ->  VOID          # withdraw() — settled on chain\n\n# Any public method called outside its valid source state\n# throws InvalidTransitionError synchronously. No silent corruption.",
      },
      {
        type: "paragraph",
        text: "The framing I use for NitroGuard is the same framing wagmi has against raw ethers, or React Query against raw fetch. It does not replace the protocol library. It lives on top, doing the three app-layer pieces each team would otherwise re-solve. If a different team ships a better tooling layer next quarter, the protocol wins either way.",
      },
      { type: "heading", text: "Where State Channels Win (And Where They Do Not)" },
      {
        type: "paragraph",
        text: "The fit is any interaction that looks like a session. Bounded counterparty set. High frequency within the session. Natural netting at session end. Trading between two brokers clearing P&L is the canonical case. A four-player racing game where every move is a signed state update and only the final ranking hits chain is another. TurboWheel at ETHIstanbul 2025 was an early proof point. Pay-per-token AI inference, where each call is a signed update and the chain sees a weekly settlement, is a third.",
      },
      {
        type: "list",
        items: [
          "High-frequency trading where brokers net P&L on an interval",
          "Multi-party game matches where session length is bounded and only the final state settles on chain",
          "Pay-per-action AI inference metered per token and settled weekly or daily",
          "Streaming payments and payroll",
          "Subscriptions and metered APIs priced per call rather than per month",
          "Prediction markets with sub-second position updates between a small set of counterparties",
        ],
      },
      {
        type: "paragraph",
        text: "The limits matter as much as the fit. Channels require counterparties to stay online, or to delegate to a node that stays online for them. They require collateral locked for the duration of the session, which is wrong for one-off payments. They grow quadratically in a fully-connected interaction graph, which is wrong for the open-DEX model where everyone transacts with everyone. A channel is the right primitive for a session between a few parties. It is the wrong primitive for an open market.",
      },
      { type: "heading", text: "What to Watch in 2026" },
      {
        type: "paragraph",
        text: "Four things worth tracking this year. YELLOW TGE on March 8, 2026 is the first real economic test of Nitrolite in a production clearing business — and the fact Yellow is running the network on their own protocol is the kind of skin-in-the-game I want to see more of. Yellow is funding a $50K grant program and $22K+ hackathons to seed third-party apps; whichever vertical produces the first breakout — trading, gaming, AI billing — shapes where the app-layer tooling investment goes next. Other projects picking up ERC-7824 alongside Yellow is the moment the spec grows past its first adopter into a shared ecosystem primitive. And the app-layer tooling above the SDK is about to be contested; NitroGuard is one attempt, others will ship, and the protocol wins either way.",
      },
      {
        type: "list",
        items: [
          "March 8, 2026. YELLOW TGE and the first economic test of Nitrolite in production clearing.",
          "Grant-funded apps on Nitrolite across trading, gaming, and AI billing through 2026.",
          "Other teams picking up ERC-7824 alongside Yellow's reference implementation.",
          "A tooling layer that closes the protocol-to-application gap. NitroGuard is one attempt; others will ship.",
        ],
      },
      { type: "heading", text: "How the Pieces Fit" },
      {
        type: "paragraph",
        text: "The layer between a user clicking and a transaction settling on a chain has been missing for a decade. Call it the session layer. It is starting to exist because the standard is open, the production deployment has a business reason to make it work, and the tooling between protocol and application is beginning to show up.",
      },
      {
        type: "paragraph",
        text: "State channels as an idea are not the story. Three pieces landing in the same year is the story: the standard in draft, the production deployment live, and the app-layer tooling beginning to show up. Yellow has done the first two with a discipline most protocols never get. What the rest of us build on top defines the third.",
      },
      { type: "heading", text: "References" },
      {
        type: "references",
        items: [
          { label: "ERC-7824: State Channels Framework (Ethereum Magicians)", url: "https://ethereum-magicians.org/t/erc-7824-state-channels-framework/22566" },
          { label: "ERC-7824 site", url: "https://erc7824.org/" },
          { label: "erc7824 GitHub organization", url: "https://github.com/erc7824" },
          { label: "Nitrolite repo", url: "https://github.com/erc7824/nitrolite" },
          { label: "@erc7824/nitrolite on npm (legacy 0.x surface)", url: "https://www.npmjs.com/package/@erc7824/nitrolite" },
          { label: "@yellow-org/sdk on npm (current v1)", url: "https://www.npmjs.com/package/@yellow-org/sdk" },
          { label: "@yellow-org/sdk-compat on npm (migration layer)", url: "https://www.npmjs.com/package/@yellow-org/sdk-compat" },
          { label: "Yellow Network", url: "https://www.yellow.org/" },
          { label: "Yellow Network docs", url: "https://docs.yellow.org/" },
          { label: "The Block: Yellow, a clearing network unifying fragmented blockchains", url: "https://www.theblock.co/post/373848/yellow-a-clearing-network-unifying-fragmented-blockchains" },
          { label: "Yellow: Chris Larsen backs $10M seed in Yellow Network", url: "https://yellow.com/news/ripples-chris-larsen-backs-dollar10m-seed-round-in-yellow-network-to-address-crypto-trading-challenges" },
          { label: "Yellow Research: State channels and the AI future", url: "https://yellow.com/research/state-channels-crypto-ai-future" },
          { label: "Yellow: FlashBid zero-gas auctions on ERC-7824", url: "https://yellow.com/news/flashbid-debuts-as-zero-gas-auction-platform-using-erc-7824-state-channels" },
          { label: "Yellow: ChainFlash Pro gas-free HFT on Yellow SDK", url: "https://yellow.com/news/yellow-sdk-powers-chainflash-pro-platform-to-enable-gas-free-high-frequency-trading" },
          { label: "ClearSync whitepaper (layer-3)", url: "https://github.com/layer-3/clearsync/blob/master/docs/whitepaper.md" },
          { label: "Lightning Network paper: Poon and Dryja, 2016", url: "https://lightning.network/lightning-network-paper.pdf" },
          { label: "Sprites and State Channels (arXiv)", url: "https://arxiv.org/abs/1702.05812" },
          { label: "Ethereum.org: State Channels", url: "https://ethereum.org/developers/docs/scaling/state-channels/" },
          { label: "TurboWheel at ETHIstanbul 2025 (TAIKAI)", url: "https://taikai.network/en/ethistanbul/hackathons/ethistanbul-2025/projects/cmf8tcg7p01dogq91uns7x5wp/idea" },
          { label: "NitroGuard repo", url: "https://github.com/Giri-Aayush/nitroguard" },
          { label: "NitroGuard on npm", url: "https://www.npmjs.com/package/nitroguard" },
        ],
      },
    ],
  },
  {
    slug: "sovereign-rollups-on-bitcoin",
    date: "04.12.24",
    readTime: "8 MIN READ",
    title: "The Case for Sovereign Rollups on Bitcoin.",
    description:
      "Chainway raised $14M on a paper titled 'A Sovereign ZK Rollup on Bitcoin.' The rollup they are shipping is not sovereign. That pivot is the argument of this piece.",
    status: "published",
    content: [
      {
        type: "paragraph",
        text: "The first Ordinals inscription landed on Bitcoin on December 14, 2022. Nothing in Bitcoin's consensus changed to let it happen. Two years later, a protocol designed to put images on Bitcoin is what every serious rollup design depends on.",
      },
      {
        type: "paragraph",
        text: "The Bitcoin scaling conversation has moved past Lightning. It is now a three-way argument. Sovereign rollups that use Bitcoin only for data availability. Settled rollups that also verify state on Bitcoin via BitVM. And sidechains that inherit neither, despite marketing that suggests otherwise. Most projects currently labeled Bitcoin L2s are the third category. The distinction is the difference between your BTC being as safe on the L2 as it is on L1, and your BTC being as safe as a federation is honest.",
      },
      {
        type: "heading",
        text: "Ordinals Was the Accidental Primitive",
      },
      {
        type: "paragraph",
        text: "Casey Rodarmor's ordinal theory fits in one sentence.",
      },
      {
        type: "quote",
        text: "Satoshis are numbered in the order in which they are mined, and transferred from transaction inputs to transaction outputs in first-in-first-out order.",
      },
      {
        type: "paragraph",
        text: "It is a client-side interpretation of existing UTXO flow. A node running ord sees ordinals. A node not running ord does not. Bitcoin itself is unchanged.",
      },
      {
        type: "paragraph",
        text: "The inscription mechanic is the part that matters for rollups. Data gets wrapped in an envelope tucked inside the witness of a Taproot script-path spend. The envelope never executes, but it stays on-chain forever, and witness data takes the 75% size discount SegWit introduced in 2017. Inscriptions can carry hundreds of kilobytes of arbitrary data per transaction at that discounted price. Every sovereign-rollup design on Bitcoin uses some variant of this envelope to post batches.",
      },
      {
        type: "code",
        language: "inscription envelope",
        text: "ENVELOPE_PATTERN:\n  OP_FALSE           # forces the OP_IF below to skip\n  OP_IF              # conditional body never executes\n    <data>           # arbitrary bytes, stored but never evaluated\n  OP_ENDIF           # witness discount applies to the whole envelope",
      },
      {
        type: "paragraph",
        text: "There was a fight about whether to allow it. In January 2024, Bitcoin Core contributor Luke Dashjr called inscriptions a bug and proposed filtering them. Core maintainer Ava Chow closed the pull request as controversial, with no hope of reaching a conclusion acceptable to everyone. Miners had earned more than $100 million in inscription fees during the first ten months of 2023. Declining that revenue was never going to be a policy decision.",
      },
      {
        type: "paragraph",
        text: "The lesson for rollup designers is simple. Bitcoin's data-availability layer is priced by the market, not by policy.",
      },
      {
        type: "heading",
        text: "Sovereign and Settled Are the Distinction That Matters",
      },
      {
        type: "paragraph",
        text: "Celestia's definition is the canonical one. A sovereign rollup publishes its transactions to another blockchain for ordering and availability, but handles its own settlement. A smart-contract rollup (Arbitrum, Optimism, zkSync on Ethereum) uses its L1 contract as the validity oracle. A sovereign rollup's L1 is a bulletin board. Rollup full nodes verify state themselves.",
      },
      {
        type: "paragraph",
        text: "That single choice has three consequences.",
      },
      {
        type: "list",
        items: [
          "Upgrades on a smart-contract rollup go through L1 contract governance. Upgrades on a sovereign rollup are forks, exactly like an L1's own.",
          "The bridge on a smart-contract rollup can be trust-minimized by design. The bridge on a sovereign rollup cannot, unless a separate mechanism like BitVM is layered on top.",
          "State validity on a smart-contract rollup is enforced by L1. On a sovereign rollup, it is enforced by the rollup's own node set.",
        ],
      },
      {
        type: "paragraph",
        text: "Sovereignty buys uncapturable governance. No base-layer contract can be used to coerce an upgrade on rollup users. The cost is a weaker bridge. For Bitcoin, a chain whose culture resists any consensus change it does not need, that trade-off is close to ideal on paper.",
      },
      {
        type: "quote",
        text: "On paper is the qualifier. A rollup that skips settlement to preserve its principles is elegant and unused.",
      },
      {
        type: "image",
        src: "/blogs/sovereign-rollups-on-bitcoin/architectures.png",
        alt: "Three Bitcoin L2 architectures side by side: sovereign rollup, settled rollup via BitVM, and sidechain, with their trust assumptions and relationship to Bitcoin L1",
        caption: "Three architectures, three trust models. Only two inherit Bitcoin's state security.",
      },
      {
        type: "paragraph",
        text: "Rollkit launched in February 2023. Its Bitcoin data-availability integration followed in March 2023. Nearly two years later, no production Bitcoin-DA Rollkit chain has reached mainnet. The design is philosophically pure. Users want bridges. Developers want settlement. That asymmetry is why BitVM matters.",
      },
      {
        type: "heading",
        text: "BitVM Opened the Third Path",
      },
      {
        type: "paragraph",
        text: "Robin Linus's BitVM paper, published in late 2023, did something the Bitcoin community had treated as off the table. It expressed arbitrary computation verifiable on Bitcoin without any consensus change.",
      },
      {
        type: "paragraph",
        text: "The trick is a fraud-proof game committed to a Taproot tree. A prover commits to a program's entire execution trace. A verifier challenges any single step. Binary search narrows the disputed step. Only the one challenged step is settled on Bitcoin. Everything else stays off-chain.",
      },
      {
        type: "code",
        language: "bitvm cost model",
        text: "BITVM_CHALLENGE_PATH:\n  UNCONTESTED        = stays off-chain       # no Bitcoin txs when nobody challenges\n  WORST_CASE         = 30-40 Bitcoin txs     # full challenge path down to one disputed step\n  WITHDRAWAL_WINDOW  = ~1-2 weeks            # adversarial; Bitcoin confirmation depth dominates",
      },
      {
        type: "paragraph",
        text: "BitVM2 followed in August 2024 and added the property that mattered most: permissionless challenging. The original scheme required pre-designated verifiers. BitVM2 lets anyone dispute a fraudulent proof, which is the difference between curated honesty and real 1-of-N honesty.",
      },
      {
        type: "paragraph",
        text: "Before BitVM, a Bitcoin rollup had two honest options. A sidechain-like federation, or a sovereign rollup with a weak bridge. BitVM created a third. Settlement without consensus change. Every credible Bitcoin ZK rollup currently in development lives in that third category.",
      },
      {
        type: "heading",
        text: "Citrea Is the Test Case",
      },
      {
        type: "paragraph",
        text: "Citrea is built by the team formerly known as Chainway Labs. They published a paper in 2023 titled A Sovereign ZK Rollup on Bitcoin: Full Bitcoin Security Without a Soft Fork. They raised a $14 million Series A from Founders Fund in 2024. And the rollup they are actually shipping, running in public testnet with mainnet still ahead, is not sovereign. It is a settled BitVM rollup.",
      },
      {
        type: "paragraph",
        text: "The stack is a type-2 zkEVM on RISC Zero, Bitcoin as the data-availability layer via inscription envelopes, and Clementine, a BitVM-based bridge that accepts ZK proofs and pays out BTC through the fraud-proof game. The trust model is 1-of-N honest verifier. As long as one network participant is honest, validity is enforceable on Bitcoin. That is dramatically weaker than Ethereum's enshrined-verifier rollups, and dramatically stronger than any federated peg.",
      },
      {
        type: "paragraph",
        text: "I read the sovereign-to-settled pivot as the single most honest engineering story in Bitcoin L2 right now. A team that started with the purist position changed direction because settlement was the only path to a trust-minimized BTC bridge anyone would actually use.",
      },
      {
        type: "heading",
        text: "OP_CAT and What Happens Next",
      },
      {
        type: "paragraph",
        text: "BIP-347 is the official OP_CAT proposal. It was authored by Ethan Heilman and Armin Sabouri, and merged as a BIP on May 6, 2024. It activates via a soft fork that redefines OP_SUCCESS126 to OP_CAT in Tapscript. It is not activated. Merging as a BIP is editorial acceptance of the spec. Activation requires rough consensus plus miner and user signaling, and Bitcoin has not coordinated on that.",
      },
      {
        type: "paragraph",
        text: "For anyone reading crypto press: BIP-420 is not OP_CAT. BIP-420 is a separate informal covenants proposal from the bip420 GitHub group. The two get conflated often enough to be worth calling out.",
      },
      {
        type: "paragraph",
        text: "If OP_CAT activates, BitVM's worst-case challenge path drops from roughly 30 to 40 Bitcoin transactions to something on the order of one. Every serious Bitcoin rollup team is simultaneously shipping a BitVM-based design that works today, and quietly advocating for OP_CAT to make the bridge an order of magnitude cheaper. That is the classic Bitcoin L2 paradox. Build as if Bitcoin never changes, while lobbying for the one change that would clean up the whole design.",
      },
      {
        type: "heading",
        text: "How the Pieces Fit",
      },
      {
        type: "paragraph",
        text: "Ordinal Theory was not designed as rollup infrastructure. Rodarmor wanted a canonical numbering scheme for satoshis and a way to put images on Bitcoin. The side effect was proving that Bitcoin's data-availability layer could absorb consumer-grade demand for arbitrary blobs, that miners would price that blockspace competitively, and that Core could not coordinate filtering it off. The inscription envelope every Bitcoin rollup uses to post batches is the downstream effect of someone trying to make Bitcoin NFTs.",
      },
      {
        type: "paragraph",
        text: "Sovereign rollups on Bitcoin are the philosophically cleanest scaling story. Zero consensus changes. Zero federations. Zero new validator sets. They push all trust into the rollup's own node set, which Bitcoin culture likes better than any alternative.",
      },
      {
        type: "paragraph",
        text: "They are also not what the market is building. Rollkit on Bitcoin is two years old with nothing shipped on it. Citrea chose settlement over sovereignty and raised a Series A on the opposite thesis. Users want bridges, and BitVM is the route Bitcoin actually has to offer one without a soft fork.",
      },
      {
        type: "paragraph",
        text: "Bitcoin is not going to scale by becoming Ethereum. It will scale by being the most credible data-availability and settlement layer on earth, while programmable state happens in rollups above it. Some of those rollups will be sovereign. Most of them, at least for now, will settle through BitVM. All of them will use an envelope pattern Rodarmor accidentally invented by trying to inscribe a picture.",
      },
      {
        type: "heading",
        text: "References",
      },
      {
        type: "references",
        items: [
          { label: "Casey Rodarmor: Ordinal Theory", url: "https://rodarmor.com/blog/ordinal-theory/" },
          { label: "Casey Rodarmor: How Ordinals Came to Be", url: "https://rodarmor.com/blog/how-ordinals-came-to-be/" },
          { label: "The Block: Luke Dashjr 'spam' controversy", url: "https://www.theblock.co/post/266298/bitcoin-dev-luke-dashjr-calls-inscriptions-spam-community-members-push-back" },
          { label: "Celestia: Rollups as Sovereign Chains", url: "https://blog.celestia.org/sovereign-rollup-chains/" },
          { label: "Celestia: Sovereign rollup glossary", url: "https://celestia.org/glossary/sovereign-rollup/" },
          { label: "Celestia blog: Introducing Rollkit", url: "https://blog.celestia.org/introducing-rollkit-a-modular-rollup-framework/" },
          { label: "Rollkit: Sovereign rollups on Bitcoin", url: "https://rollkit.dev/blog/sovereign-rollups-on-bitcoin" },
          { label: "Chainway: A Sovereign ZK Rollup on Bitcoin", url: "https://medium.com/@chainway_xyz/a-sovereign-zk-rollup-on-bitcoin-full-bitcoin-security-without-a-soft-fork-ca0389a0b658" },
          { label: "Citrea: Introducing Citrea", url: "https://www.blog.citrea.xyz/introducing-citrea/" },
          { label: "BitVM whitepaper", url: "https://bitvm.org/bitvm.pdf" },
          { label: "CoinDesk: BitVM2", url: "https://www.coindesk.com/tech/2024/08/15/bitcoins-programmability-draws-closer-to-reality-as-robin-linus-delivers-bitvm2" },
          { label: "BIP-347 source", url: "https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki" },
          { label: "Bitcoin Magazine: OP_CAT (BIP 347)", url: "https://bitcoinmagazine.com/glossary/bitcoin-covenants-op_cat-bip-347" },
          { label: "Stacks: Nakamoto is here", url: "https://stacks.org/nakamoto-is-here" },
          { label: "SoK: Bitcoin Layer Two (L2), ACM CSUR", url: "https://dl.acm.org/doi/10.1145/3763232" },
        ],
      },
    ],
  },
];

const parseBlogDate = (d: string): number => {
  const [dd, mm, yy] = d.split(".").map(Number);
  return new Date(2000 + yy, mm - 1, dd).getTime();
};

export const blogs: Blog[] = [...blogsRaw].sort(
  (a, b) => parseBlogDate(b.date) - parseBlogDate(a.date)
);
