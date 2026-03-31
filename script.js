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

const load = id => load[id] ??= fetch(`content/${id}.md`).then(r => r.ok && r.text()).then(t => t && ({ id, ...parse(t) }))

async function discover(hi = 1) {
  let lo = 0
  while (await load(hi)) { lo = hi + 1; hi *= 2 }
  while (lo < hi) { const m = lo + hi >> 1; (await load(m)) ? lo = m + 1 : hi = m }
  return Promise.all([...Array(lo).keys(), 'not-found'].map(load))
}

const tags = {
  image: v => `<div class="carousel">${v.split(',').map(s => s.trim()).filter(Boolean)
    .map(s => `<img src="${s.startsWith('http') ? s : `images/${s}`}">`).join('')}</div>`
}

const content = document.getElementById('content')

function show(e) {
  if (e) content.innerHTML = Object.keys(tags).map(k => e[k] ? tags[k](e[k]) : '').join('') + marked.parse(e.body)
}

function render() {
  const id = location.hash.slice(2)
  if (id) show(entries[id] || entries.at(-1))
  else content.innerHTML = posts
    .map(p => `<a href="#/${p.id}"><strong>${p.title}</strong> <small>${p.date}</small></a>`)
    .join('')
}

const id = location.hash.slice(2)
if (id) load(id).then(show)

const entries = await discover(+id || 1)
const posts = entries.filter(e => e.post && e.archive !== 'true').sort((a, b) => b.date.localeCompare(a.date))

document.getElementById('nav').innerHTML = entries
  .filter(e => !e.post)
  .map(p => `<a href="#/${p.id}">${p.title}</a>`)
  .join(' ')

render()
addEventListener('hashchange', render)
