import { marked } from "marked";
marked.setOptions({ breaks: true });

const esc = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
history.scrollRestoration = "manual";

function parse(text) {
  const [, front, ...rest] = text.split("---\n");
  const meta = Object.fromEntries(
    [...front.matchAll(/^(.+?):(.*)/gm)].map(([, k, v]) => [
      k.trim(),
      v.trim(),
    ]),
  );
  return { ...meta, post: meta.post !== "false", body: rest.join("---\n") };
}

const cache = {};
const load = (id) =>
  (cache[id] ??= fetch(`content/${id}.md`)
    .then((r) => (r.ok ? r.text() : null))
    .then((t) => t && { id, ...parse(t) })
    .catch((e) => {
      delete cache[id];
      throw e;
    }));

async function discover(hi = 1) {
  for (let p = hi; p < hi * 2 ** 16; p *= 2) load(p);
  while (await load(hi)) hi *= 2;
  return (
    await Promise.all([...Array(hi).keys(), "not-found"].map(load))
  ).filter(Boolean);
}

const tags = {
  image: (v, meta) => {
    const imgs = v
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map(
        (s) =>
          `<img src="${esc(s.includes("://") ? s : `images/${s}`)}" alt="${esc(meta.title || "")}" loading="lazy">`,
      )
      .join("");
    return `<div class="gallery" tabindex="0" role="region" aria-label="Image gallery">${imgs}</div>`;
  },
};

const postprocess = (html) =>
  html
    .replace(
      /<table>/g,
      '<div class="table-wrap" tabindex="0" role="region" aria-label="Scrollable table"><table>',
    )
    .replace(/<\/table>/g, "</table></div>")
    .replace(/<pre>/g, '<pre tabindex="0">');

const fmtDate = (d) =>
  d &&
  new Date(d + "T00:00").toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
const readTime = (t) => Math.ceil(t.split(/\s+/).length / 230);
const excerpt = (body) => {
  const c = (body.split("\n").find((l) => /^[\p{L}\p{N}]/u.test(l)) || "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "");
  return c.length > 160 ? c.slice(0, 160) + "…" : c;
};

const content = document.getElementById("content");
const announcer = document.getElementById("announcer");
const focus = (el) => {
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
};
let posts = [];

function show(e) {
  if (!e) return;
  const i = posts.indexOf(e);
  const media = Object.keys(tags)
    .filter((k) => e[k])
    .map((k) => tags[k](e[k], e))
    .join("");
  const header = e.date
    ? `<header><h1>${esc(e.title)}</h1><p><time datetime="${esc(e.date)}">${fmtDate(e.date)}</time> · ${readTime(e.body)} min read</p></header>`
    : "";
  const older = i >= 0 && posts[i + 1],
    newer = i >= 0 && posts[i - 1];
  const links = [
    older && `<a rel="prev" href="#/${older.id}">← ${esc(older.title)}</a>`,
    newer && `<a rel="next" href="#/${newer.id}">${esc(newer.title)} →</a>`,
  ]
    .filter(Boolean)
    .join("");
  const nav = links ? `<nav aria-label="Posts">${links}</nav>` : "";
  content.innerHTML = `<article>${header}${media}${postprocess(marked.parse(e.body))}${nav}</article>`;
  document.title = `${e.title || "Posts"} | ${location.hostname}`;
  focus(content.querySelector("h1") || content);
}

function render() {
  scrollTo(0, 0);
  const id = location.hash.slice(2);
  if (id) show(entries[id] || entries["not-found"]);
  else {
    document.title = `Posts | ${location.hostname}`;
    content.innerHTML = posts
      .map(
        (p) =>
          `<a href="#/${p.id}"><strong>${esc(p.title)}</strong> ` +
          `<small>${fmtDate(p.date)} · ${readTime(p.body)} min read</small>` +
          `<span>${excerpt(p.body)}</span></a>`,
      )
      .join("");
    focus(content);
  }
  announcer.textContent = document.title;
  const cur = id ? `#/${id}` : "#/";
  for (const a of document.querySelectorAll("#nav a"))
    if (a.getAttribute("href") === cur) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
}

const id = location.hash.slice(2);
if (id) load(id).then(show);
else content.textContent = "Loading…";
const all = await discover(+id || 1).catch(() => null);
const entries = all && Object.fromEntries(all.map((e) => [e.id, e]));
if (all) {
  posts = all
    .filter((e) => e.post && e.archive !== "true")
    .sort((a, b) => b.date.localeCompare(a.date));
  document.getElementById("nav").insertAdjacentHTML(
    "beforeend",
    " " +
      all
        .filter((e) => !e.post)
        .map((p) => `<a href="#/${p.id}">${esc(p.title)}</a>`)
        .join(" "),
  );
  render();
  addEventListener("hashchange", render);
} else {
  content.textContent = "Failed to load posts. Please refresh.";
}
