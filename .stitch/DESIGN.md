# Cyber-Swiss DevRel Portfolio — Design System

## Source
- **Stitch Project:** `18325478028863220079`
- **Screen:** `da9c5a3c885e46fa96f94b72a69fd420` — "Cyber-Swiss DevRel Portfolio"
- **Device:** Desktop 2560×7298

---

## Colors

### Surfaces
| Token | Hex | Role |
|---|---|---|
| `surface` | `#0e0e0e` | Page canvas |
| `surface-container-lowest` | `#000000` | Deepest layer |
| `surface-container-low` | `#131313` | Card backgrounds, section fills |
| `surface-container` | `#1a1919` | Mid-level containers |
| `surface-container-high` | `#201f1f` | Elevated cards |
| `surface-container-highest` | `#262626` | Interactive modules |
| `surface-bright` | `#2c2c2c` | Bright surface variant |

### Accents
| Token | Hex | Role |
|---|---|---|
| `primary` | `#81ecff` | Cyan — headings, links, active states |
| `primary-container` | `#00e3fd` | Bright cyan — CTA fills |
| `secondary` | `#d2f000` | Lime — highlights, status, dates |
| `tertiary` | `#70aaff` | Blue — tertiary accents |
| `error` | `#ff716c` | Red — error states |

### Text
| Token | Hex | Role |
|---|---|---|
| `on-surface` | `#ffffff` | Primary text |
| `on-surface-variant` | `#adaaaa` | Secondary/muted text |
| `outline` | `#767575` | Borders |
| `outline-variant` | `#484847` | Subtle dividers (at /10–/20 opacity) |

---

## Typography

| Family | Font | Role |
|---|---|---|
| `headline` | Space Grotesk | Headlines, titles, nav branding |
| `body` | Inter | Body text, descriptions |
| `label` | JetBrains Mono | Tags, metadata, timestamps, nav items |

### Scale
- **Hero headline:** `text-5xl md:text-8xl` / font-bold / tracking-tighter / leading-none
- **Section title:** `text-3xl` or `text-6xl` / font-bold / tracking-tighter / uppercase
- **Card title:** `text-xl` or `text-2xl` / font-bold
- **Body:** `text-lg` or `text-sm` / leading-relaxed
- **Label:** `text-[10px]` or `text-xs` / tracking-widest / uppercase

---

## Border Radius
- **Default:** `0px` (sharp corners — Swiss brutalist style)
- **Status dots:** `rounded-full` (9999px)
- No rounded cards — everything is angular

---

## Layout Patterns

### Editorial Grid
```css
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 2rem;
```

### Section Spacing
- Sections: `mb-28` (7rem between sections)
- Section padding: `px-8`
- Main: `pt-24 pb-32`

### Dividers
- Never use `<hr>` — use `border-outline-variant/20` on section headers or `h-[1px] bg-outline-variant/20` flex dividers

---

## Key Components

### Navbar (fixed top)
- `bg-[#0E0E0E]/80 backdrop-blur-xl`
- Left: brand in Space Grotesk bold cyan
- Center: nav links uppercase, active = cyan + border-b
- Right: pulsing green dot + `NODE_ACTIVE` label

### Stat Band
- Full-width `bg-surface-container-low` with `border-y border-outline-variant/20`
- 4-column grid of metrics
- Label: `font-label text-[10px] text-primary/secondary`
- Value: `font-headline text-5xl font-bold`

### Experience Row
- 12-col grid: `col-span-2` date | `col-span-4` company | `col-span-4` description | `col-span-2` arrow
- Group hover: company text → primary, arrow translates right

### Video Card
- `aspect-video` thumbnail with grayscale → color on hover + scale 105%
- Play button overlay on hover
- Below: label (secondary) → title (headline) → description (body)

### Blog Article
- Left sticky: section title `text-6xl`
- Right: stacked articles with date, read time badge, title `text-4xl`, description, `READ_ENTRY [→]` link

### OSS Card
- `bg-surface-container-low` with `border border-outline-variant/10`
- Hover: `border-primary/50`
- Icon top-left, stars top-right
- Title → description → language dot + name

### Floating Dock (bottom)
- Fixed bottom center, `bg-[#131313]/90 backdrop-blur-md`
- `border border-[#00E5FF]/30`
- Glow shadow: `shadow-[0_0_40px_rgba(0,229,255,0.06)]`
- Icon links with hover scale + color transition

### Footer
- `border-t border-[#484847]/10`
- JetBrains Mono `text-[10px]` uppercase
- Left: copyright | Right: links
