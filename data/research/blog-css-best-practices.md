# Blog CSS Best Practices — Research Compilation

Research gathered from Nielsen Norman Group, Baymard Institute, WCAG, Butterick's Practical Typography, Bringhurst, web.dev, MDN, Smashing Magazine, Every Layout, CSS-Tricks, Material Design, Apple HIG, and academic studies.

---

## Typography

**Font choice:** No single font is universally optimal. Wallace et al. (2022, ACM TOCHI, n=352) found participants read 35% faster in their personal best font vs. worst — individual variation dwarfs the serif vs. sans-serif distinction. A critical review of 72 studies (Lund 1999) found no valid conclusion favoring either category. What matters in a font's anatomy: large x-height, open apertures, low stroke contrast.

**Body text size:** Sources agree on 16px as the floor. The strongest empirical evidence comes from Rello, Pielot & Marcos (CHI 2016, eye-tracking, n=104): comprehension improved continuously up to 18pt (~24px). Learn UI Design recommends 18-24px desktop, 16-20px mobile. There's a gap between the widely adopted 16px baseline and what eye-tracking suggests is optimal.

**Line height:** WCAG 1.4.12 requires at least 1.5x. Pimp my Type recommends 1.5-1.6 for 60-80 char lines, dropping to 1.3-1.45 for narrow mobile columns. Key relationship: longer lines require more line height. Headings: 1.1-1.2. One outlier: Rello et al. found 1.0 performed best, but their study used large font sizes where absolute spacing was already generous.

**Line length:** The most consistent finding across all research. Bringhurst: 45-75 chars, 66 ideal. Baymard: descriptions wider than 80 chars were skipped 41% more often. NNG: 50-70 chars. Butterick is the outlier at 45-90. The `ch` CSS unit maps directly to character count.

**Vertical spacing:** Consistent rule: space above headings should be larger than space below (the heading belongs to what follows). WCAG 1.4.12: paragraph spacing at least 2x font size. Imperavi: space above heading = 1.25-2x line spacing, space below = 0.375-0.75x.

**Font weight:** 400 (Regular) for body text. Weight 300 is documented as problematic — on Linux it can trigger ExtraLight (200) rendering, and on low-resolution displays it "vanishes." Reserve light weights for headings at 24px+.

**Letter spacing:** Do not adjust body text. Add 5-12% for all-caps (Butterick). WCAG 1.4.12 requires layouts tolerate 0.12em letter-spacing and 0.16em word-spacing without breaking.

---

## Layout & Spacing

**Content width:** Implement with `max-width: 65ch` or `width: min(65ch, 100% - 2rem)`. The `min()` approach handles both max-width constraint and small-screen padding in one declaration.

**Responsive approach:** Mobile-first is still recommended, but the field is shifting toward fluid/intrinsic design using `clamp()`, `min()`, `max()`, and Grid `minmax()` to reduce breakpoint reliance. Container queries (94.97% support) enable component-level responsiveness. Ahmad Ishadeed advocates a "basics-first" hybrid. A List Apart argues strict mobile-first creates "burdensome override chains."

**CSS reset:** Andy Bell's and Josh Comeau's resets agree on: `box-sizing: border-box` everywhere, remove default margins, `display: block; max-width: 100%` on media, form elements inherit fonts, `line-height: 1.5` on body, respect `prefers-reduced-motion`. Modern additions: `text-size-adjust: none`, `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs. Do not strip all defaults — normalize, don't destroy.

**Spacing system:** Every Layout's modular scale (base * ratio) ties spacing to typography. Utopia.fyi extends this with fluid `clamp()` values. The 8-point grid (4/8/16/24/32/48px) is the pragmatic alternative. WCAG requires spacing in relative units (em/rem), not px.

**Grid vs. Flexbox:** Grid for page-level 2D layout. Flexbox for 1D component alignment (nav bars, tag lists, metadata). They compose — a grid item can be a flex container.

**Sticky headers:** NNG and Smashing Magazine both caution against them for reading-focused pages. They trade content area for navigation convenience, can consume 30%+ of mobile viewport with zoom, trigger CLS, and break skip links. If used, the "partially persistent" pattern (hide on scroll-down, reveal on scroll-up) is the recommended compromise.

---

## Color & Visual Design

**Pure black on pure white:** The research is nuanced. Dark-on-light is 26% more accurate than light-on-dark. But for extended reading, the extreme 21:1 contrast of `#000`/`#fff` exceeds what's needed and may contribute to fatigue. Butterick recommends dark gray over pure black for screens. Major design systems use near-black, not pure black: Material Design `#1c1b1d`, shadcn/ui `oklch(0.145 0 0)` (~`#212121`), web.dev `rgb(5,5,5)`.

**Dark mode:** Every source agrees simple inversion is wrong. Material Design established `#121212` as the standard dark surface (not `#000`). Pure black causes "halation" on OLED — light text bleeds/glows, especially for users with astigmatism. Depth is expressed through lighter surfaces, not shadows. Apple requires separate color sets, not inverted ones. Text on dark backgrounds: white at 87% opacity (high emphasis), 60% (medium), 38% (disabled).

**Real product dark backgrounds:** GitHub `#0d1117`, Material `#121212`, YouTube `#181818`, Slack `#1D1D1D`, Figma `#1E1E1E`.

**Links:** WCAG requires links be distinguishable by more than color alone — underlines remain the most practical approach. Without underlines, you need 3:1 contrast between link and body text AND 4.5:1 against background simultaneously, which WebAIM calls a "narrow contrast window." Use `text-decoration-thickness` and `text-underline-offset` to refine underline aesthetics.

**Contrast:** WCAG AA: 4.5:1 normal text, 3:1 large text. WCAG AAA: 7:1 / 4.5:1. The emerging APCA standard (candidate for WCAG 3.0) found WCAG 2 passes ~47% of colors that should fail and rejects ~23% that are fine — because flat ratios ignore font weight/size interaction.

**Code blocks:** Scope inline code styles to `p > code, li > code` (not bare `code`) to avoid conflicts with `pre > code`. Monospace stacks: `ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace`. Dark code blocks on light pages create uncomfortable contrast — consider matching code block theme to page theme.

**Borders/shadows/dividers:** Tubik Studio: "When a divider is the first thing users notice, you've overdone it." Fix hierarchy first (type scale, spacing, grouping), then add dividers where spacing alone is ambiguous. In dark mode, shadows are ineffective — use lighter surfaces for elevation instead.

---

## Modern CSS & Performance

**Safe modern features (2026):** CSS Nesting (91.83%), `:has()` (95.23%), container queries (94.97%), `color-mix()` (92.42%), `@layer` (96.6%), `light-dark()` (87.46%). `text-wrap: balance` (89.66%) is limited to 6 lines in Chromium. `text-wrap: pretty` (82.19%) has no Firefox support but degrades gracefully.

**Custom properties:** Three-tier naming — primitive tokens (`--color-blue-600`), semantic tokens (`--color-text: var(--color-blue-600)`), component tokens (optional). CSS-Tricks advises against forcing all definitions into `:root` — scope to where used.

**Font loading:** `font-display: optional` = best performance (no CLS). `font-display: swap` = brand consistency but causes layout shift. WOFF2 only (30% better than WOFF). System fonts eliminate all font-loading concerns. For a personal blog, multiple sources suggest system fonts for body, web fonts for headings if desired.

**System font stack:** `system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"` resolves to the native UI font per platform.

**Print:** Hide non-content elements. Switch to serif. Display URLs after external links. Use `break-after: avoid` on headings, `break-inside: avoid` on figures/blockquotes/code, `orphans: 2; widows: 2`.

**Reduced motion:** Prefer adding motion only when the user hasn't opted out (`@media (prefers-reduced-motion: no-preference)`) rather than removing it for those who have. CSS-Tricks: "reduced" means reduced, not zero — opacity transitions are generally acceptable.

**Focus:** `:focus-visible` shows focus rings for keyboard but not mouse clicks. WCAG 2.2 requires 3:1 contrast and 2px minimum thickness. Never `outline: none` without replacement.

**File organization:** CUBE CSS (Andy Bell) recommends: global styles first, then composition (layout), then utilities, then blocks, then exceptions. `@layer` (96.6% support) can enforce this cascade order explicitly.

---

## Reading UX & Engagement

**Scanning patterns:** NNG: 79% of users scan; only 16% read word-by-word. Users read at most 20-28% of words on a page. The F-pattern (low comprehension) occurs when pages lack formatting. The layer-cake pattern (high comprehension) occurs when headings are visually distinct and descriptive — this is the pattern to design for.

**Above the fold:** NNG eyetracking: 57% of viewing time above the fold (down from 80% in 2010). 74% in the first two screenfuls. The top 20% of a page captures 42%+ of total viewing time. Users scroll only if the content above promises value below.

**Lists:** NNG: the same content presented with bullet points showed 47% better usability. Combined with concise writing, 124% improvement.

**Tables/zebra striping:** Mixed evidence. Enders' first A List Apart study found no significant benefit. Her second found benefit for complex tables. Tufte opposes it categorically. NNG includes it as helpful. Verdict: context-dependent, most useful for large data-dense tables.

**Reading time estimates:** Medium found 7 minutes (~1,600 words) optimal for engagement. Simpleview Europe reported 40% engagement increase after adding reading times. The mechanism: reduces perceived commitment. The commonly cited "30% increase" figure lacks a traceable controlled study.

**Scroll progress bars:** No rigorous A/B test data proving they help blog engagement. Supported by general psychology (goal-gradient effect) but not by blog-specific research.

**Mobile:** NNG (2016, n=276): no comprehension difference between mobile and desktop for simple text, but readers slow down on difficult text on mobile. iOS auto-zooms inputs below 16px. WCAG 2.2 AA: 24x24px minimum tap targets. Apple: 44x44pt. Material: 48x48dp.

**Smooth scrolling:** Enable only with `@media (prefers-reduced-motion: no-preference)`. 30-50% of people have some motion sensitivity. Use `scroll-margin-top` to offset sticky headers on anchor targets.

---

## Debunked or Weak Claims

Several commonly cited statistics that don't hold up:

- **"White space improves comprehension by 20%"** — Traced to Lin (2004). Professor Lin himself stated the study "has nothing to do with whitespace." It tested 24 elderly Chinese-speaking adults on UI design. The figure has propagated through the UX literature via secondary referencing errors.
- **"Reading time estimates increase engagement by 30%"** — Frequently cited but the original controlled study is untraceable.
- **"Pull quotes improve comprehension by 20%"** — Attributed to Journal of Design Research but the original study is not easily accessible for verification.

---

## Sources

### Typography
- Wallace et al. (2022) — "Different Fonts Increase Reading Speed for Different Individuals" — ACM TOCHI
- Rello, Pielot & Marcos (2016) — "Make It Big!" — CHI 2016
- Lund (1999) — Critical review of 72 serif/sans-serif studies
- Butterick — Practical Typography (practicaltypography.com)
- Bringhurst — The Elements of Typographic Style
- Nielsen Norman Group — "Best Font for Online Reading: No Single Answer"
- Nielsen Norman Group — "Typography for Glanceable Reading"
- Pimp my Type — "Line Length and Line Height"
- Learn UI Design — "Font Size Guidelines for Responsive Websites"
- USWDS — Typography guidelines
- WCAG 2.1 — Understanding Text Spacing (1.4.12)
- WCAG 2.1 — Understanding Contrast Minimum (1.4.3)

### Layout & Spacing
- Every Layout — Modular Scale, The Stack, The Center
- Piccalilli — "A (more) Modern CSS Reset" (Andy Bell)
- Josh Comeau — "A Modern CSS Reset"
- Keith J. Grant — "My CSS Resets"
- A List Apart — "Mobile-First CSS: Is It Time for a Rethink?"
- Ahmad Ishadeed — "The State of Mobile First and Desktop First"
- Ryan Mulligan — "Layout Breakouts with CSS Grid"
- Smashing Magazine — "Designing Sticky Menus: UX Guidelines"
- Nielsen Norman Group — "Sticky Headers: 5 Ways to Make Them Better"
- Utopia.fyi — Fluid type and spacing scales
- Matthew James Taylor — "Responsive Padding with CSS Calc"

### Color & Visual Design
- Material Design 2 — Dark Theme guidelines
- Material Design 3 — Color Roles
- Apple HIG — Dark Mode, Color
- GitHub Primer — Color system
- shadcn/ui — Theming and colors
- Tailwind CSS — Color palette documentation
- WebAIM — "WCAG 2.0 and Link Colors"
- WCAG — Technique G183, Failure F73
- Josh Comeau — "Designing Beautiful Shadows"
- Tubik Studio — "Visual Dividers in User Interface"
- CSS-Tricks — "Styling Code In and Out of Blocks"
- web.dev — prefers-color-scheme guide
- Atlassian — Elevation design guidelines

### Modern CSS & Performance
- CSS-Tricks — "A Complete Guide to Custom Properties"
- Piccalilli — "How we're approaching theming with modern CSS"
- Smashing Magazine — "Best Practices For Naming Design Tokens"
- MDN — CSS performance optimization
- web.dev — Best practices for fonts, Critical rendering path
- web.dev — prefers-reduced-motion
- CSS-Tricks — "No Motion Isn't Always prefers-reduced-motion"
- MDN — :focus-visible
- CSS-Tricks — "Managing User Focus with :focus-visible"
- CUBE CSS — cube.fyi
- Can I Use — Browser support data for nesting, :has(), container queries, color-mix(), light-dark(), text-wrap, @layer
- Smashing Magazine — "A Guide To The State Of Print Stylesheets"

### Reading UX & Engagement
- Nielsen Norman Group — "F-Shaped Pattern of Reading on the Web"
- Nielsen Norman Group — "The Layer-Cake Pattern of Scanning Content"
- Nielsen Norman Group — "How Little Do Users Read?"
- Nielsen Norman Group — "Scrolling and Attention"
- Nielsen Norman Group — "The Fold Manifesto"
- Nielsen Norman Group — "The Illusion of Completeness"
- Nielsen Norman Group — "In-Page Links for Content Navigation"
- Nielsen Norman Group — "Reading Content on Mobile Devices"
- Baymard Institute — "Readability: The Optimal Line Length"
- A List Apart — "Zebra Striping: Does it Really Help?" and "More Data for the Case"
- Medium Data Lab — "The Optimal Post is 7 Minutes"
- WCAG 2.2 — Target Size (2.5.8), Focus Appearance (2.4.11)
- Carl Myhill — Debunking Lin (2004) white space claim
- APCA — "APCA in a Nutshell" (candidate for WCAG 3.0)
