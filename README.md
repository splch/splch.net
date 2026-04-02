# Blog

A zero-build static blog. Posts are Markdown files served from `content/`, rendered client-side with [marked](https://github.com/markedjs/marked), and routed via URL hash (`#/id`).

## Structure

```
index.html          Single-page shell
script.js           Router, Markdown loader, post discovery
style.css           Light/dark theme, responsive layout, print styles
content/            Numbered Markdown posts (0.md, 1.md, …)
images/             Post images
data/               Static assets (music, PDFs, etc.)
```

## Posts

Each post is a Markdown file with YAML-ish frontmatter:

```markdown
---
title: My Post
date: 2024-01-15
image: photo.webp
---

Post content here.
```

| Field     | Purpose                                      |
| --------- | -------------------------------------------- |
| `title`   | Display title                                |
| `date`    | Publication date (YYYY-MM-DD), used for sort |
| `image`   | Comma-separated image filenames or URLs      |
| `post`    | Set to `false` for nav-only pages            |
| `archive` | Set to `true` to hide from the post list     |

Posts are discovered automatically via binary search - no manifest or index file needed. Just add the next numbered `.md` file.

## Features

- **No build step** - plain HTML, CSS, and JS
- **Light/dark theme** - follows system preference via `color-scheme` and `light-dark()`
- **Accessible** - keyboard navigation, ARIA labels, `prefers-reduced-motion` support, print stylesheet
- **Image galleries** - multiple images in frontmatter render as a scrollable gallery
- **Reading time** - estimated at 230 words per minute
- **Post navigation** - older/newer links between posts
