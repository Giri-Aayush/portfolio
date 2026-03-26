# Design System: Cyber-Swiss DevRel Portfolio

## Overview & Creative Direction

**Screen:** Cyber-Swiss DevRel Portfolio
**Device:** Desktop (2560 x 7298)
**Theme:** Dark mode, cyber-editorial aesthetic — "The Neon Architect"

A high-end developer portfolio that merges Swiss typographic precision with cyberpunk atmosphere. The design avoids generic template aesthetics in favor of editorial layouts, glassmorphism, and tonal layering. Boundaries are defined through light, blur, and depth shifts — never hard borders.

---

## Color System

### Surface Hierarchy (No-Line Rule)

No `1px solid` borders for sectioning. Depth is created through background shifts.

| Token                      | Value     | Usage                                      |
| -------------------------- | --------- | ------------------------------------------ |
| `base`                     | `#0e0e0e` | Page canvas / root background              |
| `surface`                  | `#0b1326` | Primary surface layer                      |
| `surface-container-low`    | `#131b2e` | Large background areas housing content     |
| `surface-container-high`   | `#222a3d` | Card backgrounds within sections           |
| `surface-container-highest`| `#2d3449` | Interactive modules, bento-box cards       |
| `surface-dim`              | `#0b1326` | Page background behind cards               |

### Accent Colors

| Token       | Value     | Usage                           |
| ----------- | --------- | ------------------------------- |
| `primary`   | `#81ecff` | Headings, active states, CTAs   |
| `secondary` | `#d2f000` | Highlights, status indicators   |
| `error`     | `#ff716c` | Error states, alerts            |
| `tertiary`  | `#4deae3` | Tertiary accents, live badges   |

### Extended Palette (from design theme)

| Token              | Value     |
| ------------------ | --------- |
| `primary`          | `#ddb7ff` |
| `primary-container`| `#b76dff` |
| `secondary`        | `#adc6ff` |
| `tertiary`         | `#4edea3` |
| `on-surface`       | `#dae2fd` |
| `on-primary`       | `#490080` |
| `outline`          | `#988d9f` |
| `outline-variant`  | `#4d4354` |

### Glass & Gradient Rules

- **Glassmorphism:** `surface-variant` (#2d3449) at 60% opacity + `backdrop-blur: 20px`
- **Signature Gradient:** `linear-gradient(primary → primary-container)` for CTAs and hero accents
- **Ambient Glow (no shadows):** `primary` at 8% opacity, blur `40-60px`, spread `-10px`
- **Ghost Border (accessibility fallback):** `outline-variant` at 15% opacity

---

## Typography

Three-tier typographic system for editorial + technical identity.

| Role              | Font            | Usage                                          |
| ----------------- | --------------- | ---------------------------------------------- |
| **Display/Headline** | Space Grotesk | Hero statements, section titles, primary voice |
| **Body/Titles**      | Inter         | Long-form content, descriptions, bios          |
| **Technical/Labels** | JetBrains Mono| Tags, timestamps, status badges, code refs     |

### Type Scale

| Token        | Size     | Weight | Letter-spacing | Usage                      |
| ------------ | -------- | ------ | -------------- | -------------------------- |
| `display-lg` | `3.5rem` | 700    | `-0.02em`      | Hero headline              |
| `headline-lg`| `2rem`   | 600    | `-0.01em`      | Section titles             |
| `title-md`   | `1.25rem`| 500    | `0`            | Card titles, subtitles     |
| `body-lg`    | `1rem`   | 400    | `0`            | Body text                  |
| `label-sm`   | `0.75rem`| 500    | `0.05em`       | Tags, metadata (monospace) |
| `label-md`   | `0.875rem`| 500   | `0.04em`       | Labels, status (monospace) |

### Typography Patterns

- **Editorial Stack:** `label-sm` (Mono, uppercase) as category above `headline-lg` (Sans) — creates the editorial-technical look
- **All-caps mono** for navigation items, status badges, and section labels
- **Tight letter-spacing** on display text, wider on labels

---

## Layout System

### Grid

- **12-column editorial grid** with `2rem` gap
- Asymmetric bento-box layouts — one card spans 2 columns while others span 1

### Spacing Scale

| Token  | Value    | Usage                                    |
| ------ | -------- | ---------------------------------------- |
| `sp-2` | `0.5rem` | Inline element gaps                      |
| `sp-4` | `1rem`   | Component internal padding               |
| `sp-6` | `2rem`   | Bento-box gaps, card padding             |
| `sp-8` | `2.5rem` | Section internal spacing                 |
| `sp-16`| `5.5rem` | Major section separation                 |
| `sp-20`| `7rem`   | Hero/footer breathing room               |

### Corner Radius

| Context          | Value      |
| ---------------- | ---------- |
| External (bento) | `0.75rem`  |
| Nested elements  | `0.375rem` |
| Pills/badges     | `9999px`   |

---

## Page Sections & Content

### 1. Navigation

```
ARCHITECT.V1                    [MANIFESTO]  [ARCHIVE]  [CONTACT]
```

- Fixed top bar, monospace branding
- Nav items in `label-md` (JetBrains Mono), uppercase, ghost-style buttons

### 2. Hero Section

- **Status badge:** `NODE_ACTIVE` — mono label with green dot indicator
- **Avatar:** Circular profile image with ambient glow
- **Headline:** "SCALING PROTOCOLS FOR THE OPEN WEB" (display-lg, Space Grotesk)
- **Subtitle:** "Developer Relations Engineer specializing in Ethereum infrastructure"
- **Description:** "Bridging the gap between complex cryptography and high-performance engineering"
- **Expertise Tags:** `EVM_OPTIMIZATION` | `ZERO_KNOWLEDGE` | `RUST_LANG` | `MODULAR_DA`
  - Chip style: `surface-container-highest` bg, `label-sm` mono text

#### Key Metrics (Bento Cards)

| Metric        | Value |
| ------------- | ----- |
| Devs Mentored | 45K+  |
| PRs Merged    | 1.2K  |
| Keynotes      | 12    |
| Grant Funding | $4M+  |

### 3. Experience / Chronicle

Timeline layout with year markers.

| Period          | Company        | Role                    | Description                                                            |
| --------------- | -------------- | ----------------------- | ---------------------------------------------------------------------- |
| 2023 — Present  | COGNITION_AI   | Lead Developer Relations | Architecting autonomous engineering loops and LLM-integrated devtools  |
| 2021 — 2023     | AWS // WEB3_ORG| Senior Cloud Architect  | Built managed blockchain services for Ethereum and Polygon             |
| 2019 — 2021     | AMAZON_CORP    | SDE II                  | Optimized high-throughput payment gateways using serverless primitives |

- CTA: `VIEW_FULL_CV →` (tertiary text link with `>` prefix)

### 4. Video / Transmission

Three video cards in a row:

| Type              | Title                                      | Description                                                    |
| ----------------- | ------------------------------------------ | -------------------------------------------------------------- |
| Workshop // ETH_CC | Deep Dive into Proto-Danksharding (EIP-4844)| How blobs transform data availability cost for Rollups         |
| Keynote // DevCon  | The UX of Modular Infrastructure           | Decoupling execution from settlement without fragmenting liquidity |
| Live_Code // YouTube| Zero-Knowledge Proofs from Scratch         | Implementing Groth16 circuit in Rust for beginners             |

### 5. Blog / Logs

| Date       | Read Time | Title                                          | Summary                                             |
| ---------- | --------- | ---------------------------------------------- | --------------------------------------------------- |
| 04.12.24   | 8 MIN     | The Case for Sovereign Rollups on Bitcoin       | Ordinals theory and L2 settlement layers            |
| 22.10.24   | 12 MIN    | Statelessness: The Final Frontier               | Verkle trees and light node requirements            |
| 15.08.24   | 5 MIN     | ERC-4337 is Not Enough                          | Protocol-level Account Abstraction for adoption     |

### 6. Open Source / Terminal

| Stars | Project       | Description                              | Language    |
| ----- | ------------- | ---------------------------------------- | ----------- |
| 2.4k  | zk-snark-kit  | Production-ready Groth16 proof generation| TypeScript  |
| 840   | helios-rust   | Ethereum 2.0 light client                | Rust        |
| 1.1k  | modular-sdk   | Celestia/Avail/EigenDA abstraction layer | TypeScript  |
| 492   | evm-analyzer  | Solidity bytecode gas optimization       | Python      |

### 7. Footer

```
©2024 PROTOCOL_ARCHITECT // BUILT_ON_ETHEREUM
[SOURCE_CODE]  [NODES]  [STATUS]
```

---

## Component Patterns

### Buttons

| Type      | Style                                                                  |
| --------- | ---------------------------------------------------------------------- |
| Primary   | Gradient fill (primary → primary-container), no border, `0.75rem` radius |
| Secondary | Ghost: `surface-container-highest` at 40% opacity + backdrop-blur + ghost border |
| Tertiary  | Text-only, `tertiary` color, JetBrains Mono, `>` prefix               |

### Bento Cards

- `2rem` gaps between cards
- `surface-container-high` background against `surface-dim` page
- `0.75rem` external radius, `0.375rem` nested radius
- No dividers — separation via background contrast

### Chips / Tags

- `surface-container-highest` background
- `label-sm` in JetBrains Mono
- 4px solid circle of `tertiary` for live/active status

### Status Badges

- Mono text, uppercase
- Dot indicator (green for active)
- Subtle background with rounded pill shape

---

## Do's and Don'ts

### Do

- Use intentional asymmetry in bento layouts (one card spanning 2 cols)
- Layer monospace labels above sans-serif headlines for editorial effect
- Embrace negative space (`5.5rem`–`7rem`) between major sections
- Use ambient glows instead of box shadows

### Don't

- Use `#000000` — always use `surface` (`#0b1326`) minimum
- Use `<hr>` or 1px divider lines — use background shifts or spacing
- Over-glow — neon accents on < 5% of screen real estate
- Use traditional box shadows — use ambient glow with primary color at 8% opacity
