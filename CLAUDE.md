# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A vanilla JavaScript markdown blog (splch.net) with no build system, no package manager, and no framework. Content is static markdown files rendered client-side. Deployed to GitHub Pages.

## Development

There is no build step. To develop locally, serve the root directory with any static file server:

```bash
python3 -m http.server
# or
npx serve
```

To update vendored third-party libraries (Marked, Highlight.js, KaTeX, DOMPurify):

```bash
bash update_libs.sh
```

### Testing

After making changes, start a local server and run the Puppeteer test suite:

```bash
python3 -m http.server 8765 &
node test.mjs
```

`test.mjs` uses headless Chrome to verify: Home/Archive/About/Contact pages render, search works, post navigation works, back button (popstate) works, and no console errors. Requires Puppeteer: `npm install puppeteer`

There is no linting configured.

## Architecture

**Single-page app with hash routing.** `index.html` is the sole entry point. Navigation uses URL hash fragments (`/#Home`, `/#Archive`, `/#About`, `/#Contact`, `/#PostTitle`). All rendering happens client-side in `scripts/script.js`.

**Content pipeline:**
1. `posts/_all.md` — newline-separated registry of all post filenames
2. On page load, `downloadAll()` fetches every post listed in `_all.md`
3. Each post is parsed by `parseMarkdown()` which extracts YAML-style frontmatter (title, date, image, draft) and body
4. Posts are stored in the global `allPosts` object keyed by their first title
5. `setPage()`/`setFull()` renders the selected post's markdown to HTML via Marked + DOMPurify

**Post frontmatter format:**
```markdown
---
title: URL Title, Display Title
date: YYYY-MM-DD
image: image1.webp, image2.webp
draft: false
---
```
- `title` is comma-separated: first value is the key/URL slug, last value is the display title
- `image` is comma-separated; multiple images create a rotating carousel (4s interval)
- `draft: true` hides the post from Archive and Home

**Adding a new post:** Create a `.md` file in `posts/`, then add its filename to `posts/_all.md`.

**Key libraries** (vendored in `scripts/` and `styles/`):
- **Marked** — markdown to HTML
- **DOMPurify** — XSS sanitization (allows iframes and custom attributes)
- **Highlight.js** — code syntax highlighting (Atom One Dark theme)
- **KaTeX** — LaTeX math rendering (inline `$...$` and display `$$...$$`)

**Image handling:** Relative image paths in frontmatter and markdown bodies are prefixed with `posts/images/` or `posts/data/` automatically. External URLs (http/https) pass through unchanged.
