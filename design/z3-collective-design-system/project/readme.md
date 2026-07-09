# Z3 Collective — Design System

**Made to move by teens.**

Z3 Collective is a teen-run maker studio that designs and 3D-prints toys that move, click, and surprise. The teens ARE the brand — shown through polished, professional design, never hidden. Descriptor: *a teen-preneur business.*

**Sources provided:** brand statement / quick-reference doc only (pasted text, referencing a fuller `Z3-Brand-Foundation.md` not attached). No codebase, no Figma, no logo files, no font binaries. Everything here is built from the brand statement; components are an authored standard set (no source inventory existed).

## Product lines

| Line | Accent | Flair (sign-only) | Notes |
|---|---|---|---|
| Dragons | `#FF7038` orange | Spark & Scale | flexi; eggs fold in |
| Dinos | `#46E66B` green | Stomp & Roar | flexi; eggs fold in |
| Critters | `#3B9DFF` blue | Wild & Whimsy | playsets live here |
| Fidgets | `#FFDB00` yellow | Twist & Click | Clickys (egg) first type |
| Candy | `#B392DE` lilac | Drop & Treat | **RESERVED — do not use** |
| Yarn | `#F2A8CE` pink | — | **FUTURE — color locked, do not use** |

Accents are deliberately NOT exact Bambu PLA Basic filament hexes — closest resemblances are noted in `guidelines/line-accents.html`. One accent per product line. Never mix line accents in one composition; core palette (ink/paper/teal) is always safe.

## CONTENT FUNDAMENTALS

- **Voice:** playful, plainspoken, proud. Short sentences. Write like a sharp, likeable teen explaining their own product at the booth.
- **Never:** babyish/twee, corporate buzzwords ("solutions", "leverage", "synergy"), exclamation-point stacking, technical jargon.
- **Verbs to use:** bend, twist, click, move, flex, print, build, made, snap.
- **Person:** "we" for the studio ("We print every one ourselves."), "you/it" for the product ("Bend it, twist it — that's the point.").
- **Casing:** sentence case for headlines and body. UPPERCASE only for tiny eyebrow labels (with letter-spacing). Never title case.
- **Emoji:** not used.
- **Prices & product names:** always Space Grotesk.
- **Tagline (final):** "Made to move by teens." Always exactly this, period included.
- Example lines: "Bend it, twist it — that's the point. We print every one ourselves." / "Prints that click. Made by teens."
- **Never over-promise durability** ("it won't break", "unbreakable") — say what it's made to do, not what can't happen.

## VISUAL FOUNDATIONS

- **Colors:** Ink `#0C0C11` for text and dark blocks; Paper `#F4F4F7` page background; Teal `#0DCEC4` is THE brand color (primary actions, brand moments). Line accents used one at a time, generously, only in that line's context. White `#FFF` for card surfaces.
- **Type:** Space Grotesk (500/700) for headlines, product names, prices — tight leading (1.05), −0.02em tracking. Inter (400–700) for body/small print, 1.55 leading. Two fonts max; never both in the same line of text.
- **Signature look — "printed sticker":** white cards with a 2px solid ink border, hard offset shadow (`3px 3px 0 ink`, no blur), 16px radius. This echoes toy-packaging stickers; it's the core motif across cards, buttons, dialogs.
- **Radii:** 6/10/16px; pills (999px) for buttons, badges, tags.
- **Backgrounds:** flat paper or flat ink. No gradients, no textures, no photography treatments defined yet. Teal-soft wash (`#DCF9F7`) for callout panels.
- **Shadows:** hard offset only, ink-colored, zero blur. No soft/ambient shadows.
- **Hover:** buttons/cards translate −1px each axis and shadow grows to 5px offset ("lifts off the sheet"); teal darkens to `#0AA69E` on primary.
- **Press:** translate +2px each axis, shadow collapses to none ("clicks down" — the brand is literally about clicking). Fast (120ms), snappy easing with slight overshoot (`cubic-bezier(.2,.9,.3,1.2)`).
- **Animation:** quick and snappy; small bounces welcome; nothing floaty or slow. Respect reduced-motion.
- **Borders:** 2px ink = interactive/emphasis; 1px `rgba(ink,12%)` = quiet dividers.
- **Transparency/blur:** not used. Ink alpha steps (70/45/12%) for text hierarchy and dividers only.
- **Layout:** generous whitespace on paper; content max-width ~1120px; 4px spacing base scale.
- **Imagery:** none provided. Use neutral placeholders and ask for real product photos; do not generate or draw toy imagery.

## ICONOGRAPHY

No icon assets were provided and no icon system exists in any source. **Substitution (flagged):** [Lucide](https://lucide.dev) via CDN — rounded caps and 2px strokes match the sticker-outline look. Use `stroke-width: 2`, square-ish sizes (16/20/24), currentColor. No emoji, no unicode-glyph icons. If Z3 develops its own icon set, replace Lucide references.

## LOGO

**Default logo selected (not yet final art):** **Stacked** — ink tile (rounded 16px square, teal hard shadow) with all-white spaced "Z3", over "collective." with ink period — and **Box** — the same treatment as a horizontal one-line box, all-white "Z3 collective." Variants are named plainly in `guidelines/logo-ideas.html`: teal 3, ink / teal / reversed 1-color, line-accent colorways, teal dot, teal Z3. Production vector art is still in refinement; until it ships, either rebuild Stacked/Box from the specimen or set "Z3 Collective" in Space Grotesk 700 as a plain-type mark.

## Index

- `styles.css` — global entry; imports everything under `tokens/`
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand, logo ideas)
- `components/core/` — Button, IconButton, Badge, Tag, Card
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/feedback/` — Dialog, Toast, Tooltip
- `components/navigation/` — Tabs
- `ui_kits/website/` — Z3 shop site recreation-from-brief (Home, Line page, Product page), interactive
- `SKILL.md` — agent skill entry point

**Intentional additions:** the whole component set is authored (no source inventory existed); Lucide icons are a flagged CDN substitution.

**Caveats:** fonts load from Google Fonts (exact family matches; no binaries shipped). No logo, no photography, no real product imagery — placeholders used.
