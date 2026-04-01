import { marked } from 'https://cdn.jsdelivr.net/npm/marked@17.0.5/lib/marked.esm.js'

function parse(text) {
  const [, front, ...rest] = text.split('---\n')
  const meta = {}
  for (const line of front.trim().split('\n')) {
    const [k, ...v] = line.split(':')
    meta[k.trim()] = v.join(':').trim()
  }
  meta.post = meta.post !== 'false'
  return { ...meta, body: rest.join('---\n') }
}

const load = id => load[id] ??= fetch(`content/${id}.md`).then(r => r.ok && r.text()).then(t => t && ({ id, ...parse(t) })).catch(e => { delete load[id]; throw e })

async function discover(hi = 1) {
  let lo = 0
  while (await load(hi)) { lo = hi + 1; hi *= 2 }
  while (lo < hi) { const m = lo + hi >> 1; (await load(m)) ? lo = m + 1 : hi = m }
  return Promise.all([...Array(lo).keys(), 'not-found'].map(load))
}

const tags = {
  image: v => `<div class="gallery">${v.split(',').map(s => s.trim()).filter(Boolean)
    .map(s => `<img src="${s.startsWith('http') ? s : `images/${s}`}" alt="">`).join('')}</div>`
}

const fmtDate = d => d && new Date(d + 'T00:00').toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })
const readTime = t => Math.max(1, Math.ceil(t.split(/\s+/).length / 230))
const excerpt = body => {
  const clean = (body.split('\n').find(l => /^\w/.test(l)) || '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '')
  return clean.length > 160 ? clean.slice(0, 160) + '…' : clean
}

const content = document.getElementById('content')
let posts = []

function show(e) {
  if (!e) return
  const i = posts.indexOf(e)
  const media = Object.keys(tags).filter(k => e[k]).map(k => tags[k](e[k])).join('')
  const header = e.date
    ? `<header><h1>${e.title}</h1><p><time datetime="${e.date}">${fmtDate(e.date)}</time> · ${readTime(e.body)} min read</p></header>`
    : ''
  const older = i >= 0 && posts[i + 1], newer = i >= 0 && posts[i - 1]
  const nav = older || newer ? '<nav aria-label="Posts">'
    + (older ? `<a rel="prev" href="#/${older.id}">← ${older.title}</a>` : '')
    + (newer ? `<a rel="next" href="#/${newer.id}">${newer.title} →</a>` : '')
    + '</nav>' : ''
  content.innerHTML = `<article>${header}${media}${marked.parse(e.body)}${nav}</article>`
  document.title = `${e.title || 'Posts'} | ${location.hostname}`
}

function render() {
  scrollTo(0, 0)
  const id = location.hash.slice(2)
  if (id) return show(entries[id] || entries.at(-1))
  document.title = `Posts | ${location.hostname}`
  content.innerHTML = posts.map(p =>
    `<a href="#/${p.id}"><strong>${p.title}</strong> `
    + `<small>${fmtDate(p.date)} · ${readTime(p.body)} min read</small>`
    + `<span>${excerpt(p.body)}</span></a>`
  ).join('')
}

const id = location.hash.slice(2)
if (id) load(id).then(show)
const entries = await discover(+id || 1)
posts = entries.filter(e => e.post && e.archive !== 'true').sort((a, b) => b.date.localeCompare(a.date))
document.getElementById('nav').innerHTML += ' ' + entries
  .filter(e => !e.post)
  .map(p => `<a href="#/${p.id}">${p.title}</a>`)
  .join(' ')

render()
addEventListener('hashchange', render)
