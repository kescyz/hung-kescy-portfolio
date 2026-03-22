# Design System Specification: The Editorial Archive

## 1. Overview & Creative North Star
This design system is built upon the **Creative North Star: The Editorial Archive.**

Moving beyond the constraints of standard digital templates, this system treats the interface as a high-end, limited-edition monograph. It marries the rigid precision of **Swiss Modernism** with the organic warmth of a physical portfolio. The goal is to convey absolute authority and "high-trust" through intentional asymmetry, massive typographic scales, and a rejection of traditional UI crutches like heavy borders and generic drop shadows.

We achieve a "signature" look by utilizing "The Tension of Space"—where generous white space isn't just empty, but a structural element that directs the eye to the craftsmanship of the content.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in botanical greens and architectural creams. To maintain a premium editorial feel, we follow a strict logic of surface layering.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established solely through background color shifts.
- A project case study (Surface-lowest: #FFFFFF) should sit inside a discovery section (Surface-container-low: #f3f5e9) to create a natural, sophisticated edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create depth:
- **Base Layer:** `surface` (#f9faee)
- **Secondary Sectioning:** `surface-container-low` (#f3f5e9)
- **Floating/Elevated Elements:** `surface-container-lowest` (#ffffff)
- **High-Emphasis Containers:** `surface-container-high` (#e7e9de)

### The Glass & Gradient Rule
To prevent the UI from feeling "flat" or "web-default," use Glassmorphism for persistent elements (like navigation bars). Use `brand-subtle` (#38664114) with a `backdrop-filter: blur(20px)`.
- **Signature Textures:** Apply a subtle linear gradient to primary CTAs, transitioning from `primary` (#204e2b) to `primary-container` (#386641) at a 135-degree angle. This adds a "silk-press" quality to the buttons.

---

## 3. Typography: The Authoritative Voice
The typography is the backbone of the Swiss aesthetic. We use high-contrast scales to establish a clear information hierarchy.

- **Display & Headings (Be Vietnam Pro):** These are the "Hero" elements. Use 700 and 800 weights with a tight `-0.02em` letter-spacing and `1.2` line-height. This creates a "block" of text that feels architectural and stable.
- **Body Text (Mulish):** Designed for maximum readability. A generous `1.6` to `1.7` line-height ensures the eye never tires. This represents the "curator's notes" within the archive.
- **Labels (Plus Jakarta Sans):** Used for metadata, categories, and overlines. Always use `+0.1em` letter-spacing and uppercase transformations to provide a rhythmic contrast to the heavy headings.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, "elevation" is a feeling, not a shadow effect.

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. For example, place a `surface-container-lowest` card on a `surface-container-low` section. The subtle contrast (pure white on soft cream) creates a sophisticated "lift" that mimics fine paper on a desk.
- **Ambient Shadows:** Shadows are reserved only for floating interactive elements (e.g., Modals). Shadows must be extra-diffused: `box-shadow: 0 24px 48px -12px rgba(26, 29, 22, 0.06)`. Note the use of the `on-surface` color (#1a1d16) as the shadow base rather than pure black.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use a "Ghost Border": the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: Precision Primitives

### Buttons (The Interaction Points)
- **Primary:** Background `primary` (#204e2b), Text `on-primary` (#ffffff). 16px (`xl`) border radius. No border.
- **Secondary:** Background `brand-subtle` (#38664114), Text `primary`. Used for secondary actions within a section.
- **Tertiary/Ghost:** Text `primary` with a bottom-aligned `highlight` (#a7c957) 2px underline that expands on hover.

### Cards & Lists (The Artifacts)
- **The "No-Divider" Rule:** Forbid the use of horizontal rules (`
`). Separate list items using vertical white space (`spacing-8` or `spacing-12`) or subtle background shifts.

- **Project Cards:** Use `surface-container-lowest` (#ffffff) with a 16px border radius. Ensure content padding is generous (minimum `spacing-8` on all sides).

### Input Fields
- **Editorial Style:** Use a `surface-container-low` background with a bottom-only "Ghost Border." On focus, transition the bottom border to `brand` (#386641) at 2px height.

### The Archive Filter (Chips)
- **Filter Chips:** Use `secondary-container` for the inactive state. Upon selection, transition to `primary` with `on-primary` text. This provides a high-trust, "selected" feel.

---

## 6. Do’s and Don’ts

### Do:
- **Use "Broken" Grids:** Align text to the left 2/3 of the container, leaving the right 1/3 for "breathing room" or metadata.
- **Embrace the Highlight:** Use `highlight` (#a7c957) sparingly for small accents—a dot next to a "Live" status, or a thin bar next to a featured project title.
- **Prioritize Type Scale:** If a section feels "empty," increase the typographic scale of the heading rather than adding more icons or decorative elements.

### Don't:
- **Don't use 100% Black:** Always use `Text-primary` (#1a1d16) to keep the look sophisticated and soft.
- **Don't Over-Round:** Stick to the `16px (xl)` radius for cards. Avoid "pill" shapes for large containers, as it breaks the Swiss Modernist grid.
- **Don't Use Dividers:** If you feel the need for a line, try adding `spacing-16` of whitespace instead. If that fails, use a tonal shift in the background.
- **Don't Center-Align Everything:** High-end editorial design lives in left-aligned or asymmetrical compositions. Avoid the "centered hero" cliché.