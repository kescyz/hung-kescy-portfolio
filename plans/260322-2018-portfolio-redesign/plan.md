---
title: "Portfolio Redesign - Hung Kescy"
description: "Complete redesign of one-page portfolio with Trust & Authority style"
status: pending
priority: P1
effort: 3h
tags: [frontend, portfolio, nextjs, tailwind, shadcn, redesign]
created: 2026-03-22
---
# Portfolio Redesign - Hưng Kescy

## Design Philosophy

**Style: Swiss Modernism + Social Proof Focus**

- Clean grid system, mathematical spacing, generous whitespace
- Trust signals prominent (stats, credentials, testimonials)
- Professional yet warm - NOT flashy or motion-heavy
- Content-first: let the credentials and results speak

**Anti-patterns to AVOID:**

- Over-designed gradient blobs, decorative elements
- Too many sections crammed together
- Inconsistent card styles
- Motion-heavy animations that distract
- Generic corporate template look

## Color System

User palette: #386641, #f2e8cf, #4e7e36, #33372c

| Token          | Hex        | Usage                                    |
| -------------- | ---------- | ---------------------------------------- |
| Background     | #FAFAF8    | Main page bg                             |
| Surface        | #FFFFFF    | Cards, elevated elements                 |
| Surface-warm   | #F7F3EB    | Alternating section bg (warm cream tint) |
| Text-primary   | #1a1d16    | Headings, body                           |
| Text-secondary | #5c6152    | Descriptions, captions                   |
| Text-muted     | #8c9182    | Labels, meta text                        |
| Brand          | #386641    | Primary brand accent                     |
| Brand-light    | #4e7e36    | Hover states, secondary accent           |
| Brand-subtle   | #386641/8% | Icon backgrounds, badges                 |
| Dark           | #1a1d16    | Hero bg, CTA bg, footer                  |
| Warm           | #f2e8cf    | Subtle highlights only                   |
| Border         | #e8e4db    | Card borders, dividers                   |
| Highlight      | #a7c957    | Accent highlights on dark bg             |

## Typography

| Role           | Font           | Weights       | Size Scale                                  |
| -------------- | -------------- | ------------- | ------------------------------------------- |
| Heading        | Be Vietnam Pro | 600, 700, 800 | 14px label / 28px h3 / 36px h2 / 48-56px h1 |
| Body           | Mulish         | 400, 500, 600 | 14px small / 16px body / 18px lead          |
| Line height    | -              | -             | Headings 1.2 / Body 1.6-1.7                 |
| Letter spacing | -              | -             | Headings -0.02em / Labels +0.1em            |

## Layout System

- Max width: 1120px (max-w-5xl)
- Section padding: 96px-120px vertical
- Grid: 12-column, 24px gap
- Content width for text: 640px max
- Card border-radius: 16px
- Consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96

## Section Order & Content

### 1. Hero (full viewport)

```
+------------------------------------------------+
|  [Nav: Kescy.  About Services ... Contact  EN] |
|                                                |
|   Hi, I'm                                      |
|   HUNG KESCY                                   |
|   CEO & Founder, KesFlow                       |
|                                                |
|   Chuyen gia tu van va dao tao        [Photo]  |
|   toi uu van hanh DN SME voi          (circle  |
|   AI, Automation & LarkSuite.          w/ring)  |
|                                                |
|   [Lien he tu van]  [Dat lich 1-1]             |
|                                                |
|   400+ DN  |  10+ dao tao  |  20+ workshop    |
+------------------------------------------------+
```

- Dark bg (#1a1d16), white text
- Credential stats bar at bottom of hero (social proof IMMEDIATELY)
- Headshot with subtle ring border
- Two CTA buttons

### 2. About (bg: warm surface)

```
+------------------------------------------------+
|  SU MENH                                        |
|  "Kham pha, thau hieu va lan toa..."           |
|                                                |
|  [Dare]    [Truth]    [Kaizen]                 |
|  card       card       card                     |
+------------------------------------------------+
```

- Mission quote centered, large italic text
- 3 value cards in row - clean, minimal icons
- NO strengths subsection (merge into About text)
- NO training stats (already in hero)

### 3. Services (bg: white)

```
+------------------------------------------------+
|  DICH VU                                        |
|  Giai phap toan dien cho DN SME                |
|                                                |
|  [01 AI Courses]  [02 Inhouse Training]        |
|  [03 DX Consult]  [04 AI Agents]               |
+------------------------------------------------+
```

- 2x2 grid, numbered cards
- Each card: number, title, description
- Hover: subtle lift + brand border top

### 4. Results (bg: brand #386641)

```
+------------------------------------------------+
|  KET QUA THUC TE                                |
|                                                |
|  500 trieu+  |  50%+  |  90%+                  |
|  tiet kiem    |  auto  |  giam giay to          |
+------------------------------------------------+
```

- Green bg, white text
- 3 stats with animated counters
- Dividers between stats

### 5. Experience (bg: warm surface)

```
+------------------------------------------------+
|  KINH NGHIEM                                    |
|                                                |
|  *KesFlow          CEO & Founder    Hien tai   |
|   SEONGON          AI Solution Mgr  Truoc do   |
|   Kaipany          CTO              Truoc do   |
|   ...                                          |
+------------------------------------------------+
```

- Simple table/list layout, NOT timeline
- Current role highlighted
- Clean, scannable format

### 6. Testimonials (bg: white)

```
+------------------------------------------------+
|  NHAN XET                                       |
|                                                |
|  "Quote..."     "Quote..."     "Quote..."      |
|  - Name, Role   - Name, Role   - Name, Role   |
+------------------------------------------------+
```

- 3 columns on desktop, 1 on mobile
- Quote marks as design element
- Avatar initial + name + role

### 7. Community (bg: warm surface)

```
+------------------------------------------------+
|  CONG DONG                                      |
|                                                |
|  [JCI VN 2026]  [JCI Grace 2025]  [CEO HN8]   |
+------------------------------------------------+
```

- Simple grid/list of roles
- Compact - NOT a major section

### 8. CTA + Footer (bg: dark)

```
+------------------------------------------------+
|  SAN SANG TOI UU VAN HANH?                      |
|  Subtitle text                                  |
|  [Lien he tu van]  [Dat lich 1-1]              |
|                                                |
|  email  |  phone  |  facebook                   |
|  ---                                            |
|  (c) 2026 Hung Kescy                           |
+------------------------------------------------+
```

## Interaction & Animation

- Scroll: fade-in-up, 0.6s, cubic-bezier(0.25, 0.1, 0.25, 1)
- Cards: translateY(-2px) + shadow on hover, 200ms
- Buttons: scale(0.98) on active, 100ms
- Counters: count-up when results section visible
- Nav: bg-white/90 + backdrop-blur on scroll
- prefers-reduced-motion: disable all animations
- cursor-pointer on ALL clickable elements

## Phases

| # | Phase                  | Status  | Effort | Link                                        |
| - | ---------------------- | ------- | ------ | ------------------------------------------- |
| 1 | Setup + Design tokens  | Pending | 0.5h   | [phase-01](./phase-01-setup-and-tokens.md)     |
| 2 | All sections + content | Pending | 2h     | [phase-02](./phase-02-sections-and-content.md) |
| 3 | Polish + verify        | Pending | 0.5h   | [phase-03](./phase-03-polish-and-verify.md)    |

## Key Decisions

- Swiss Modernism style: clean grid, generous whitespace, NO decorative blobs
- Training stats moved to Hero (immediate social proof)
- Experience as clean list, NOT timeline (simpler, more scannable)
- About section simplified: mission + values only
- Numbered service cards (01, 02, 03, 04) for visual hierarchy
- Warm surface (#F7F3EB) alternated with white for section rhythm
