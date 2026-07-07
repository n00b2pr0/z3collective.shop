# Z3 Collective — Local Website Setup

A lean, step-by-step way to work on z3collective.shop from your own computer with live preview. Good first business-ops lesson: you build and test locally, then push when it's ready — nothing breaks the live site by accident.

## What you're using

- **Dawn** — Shopify's free, official starter theme. It's the base; we don't rebuild it.
- **Shopify CLI** — the tool that clones Dawn, runs a live local preview, and pushes changes to the store.
- **The Z3 custom section** (in this folder) — the only Z3-specific code. It's the launch landing page: brand story, product preview, and email signup.

## One-time setup

1. **Install Node 18+** (if not already). Check with `node -v`.

2. **Install the Shopify CLI:**
   ```
   npm install -g @shopify/cli @shopify/theme
   ```

3. **Create the theme project** (clones Dawn):
   ```
   shopify theme init z3-theme
   cd z3-theme
   ```
   Give it a name when prompted.

4. **Drop in the Z3 files.** Copy from this `website/` folder into the new `z3-theme/` folder:
   - `sections/z3-landing.liquid`  →  `z3-theme/sections/`
   - `templates/index.json`  →  `z3-theme/templates/` (overwrites Dawn's homepage — that's what makes the Z3 landing the front page)

5. **Start the live local preview:**
   ```
   shopify theme dev --store z3collective.myshopify.com
   ```
   The first time, it opens a browser to log in and connect the store. Then it serves the site at **http://127.0.0.1:9292** and auto-refreshes every time you save a file.

## Editing the page

Two ways — start with the no-code one:

- **In the browser (no code):** run `shopify theme dev`, open the preview, and use the Shopify theme editor to change the logo, colors, headline, story cards, and product previews. All of it is wired to editable settings.
- **In code:** edit `sections/z3-landing.liquid` in your editor. Save = instant refresh.

### Your brand colors
Set them in the theme editor under the **Z3 Landing** section (Accent / Background / Text), or change the defaults at the bottom of `z3-landing.liquid` in the `settings` block.

## The email signup

It uses Shopify's **built-in customer form** — no Klaviyo or Mailchimp needed to start. Every email that comes in lands in your Shopify **Customers** list, tagged `newsletter` and `z3-launch`, so when the full shop opens you already have a launch list to email.

## Going live

When it looks right locally:
```
shopify theme push
```
Push to an **unpublished** theme first, preview it in the Shopify admin, then publish when you're happy.

## Lean recap (the process to keep)

1. `shopify theme dev` → build & preview locally
2. Edit content in the theme editor, code only when needed
3. `shopify theme push` → publish when ready

Nothing goes live until step 3, so it's safe to experiment.
