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

async function discover() {
  let lo = 0, hi = 1
  while ((await fetch(`content/${hi}.md`, { method: 'HEAD' })).ok) hi *= 2
  while (lo < hi) { const m = lo + hi >> 1; (await fetch(`content/${m}.md`, { method: 'HEAD' })).ok ? lo = m + 1 : hi = m }
  return Promise.all(
    [...Array(lo).keys(), 'not-found'].map(id =>
      fetch(`content/${id}.md`).then(r => r.text()).then(t => ({ id, ...parse(t) }))
    )
  )
}

const tags = {
  image: v => `<div class="carousel">${v.split(',').map(s => s.trim()).filter(Boolean)
    .map(s => `<img src="${s.startsWith('http') ? s : `images/${s}`}">`).join('')}</div>`
}

const content = document.getElementById('content')
const entries = await discover()
const posts = entries.filter(e => e.post && e.archive !== 'true').sort((a, b) => b.date.localeCompare(a.date))

document.getElementById('nav').innerHTML = entries
  .filter(e => !e.post)
  .map(p => `<a href="#/${p.id}">${p.title}</a>`)
  .join(' ')

function render() {
  const id = location.hash.slice(2)
  if (id) {
    const entry = entries[id] || entries.at(-1)
    const extras = Object.keys(tags).map(k => entry[k] ? tags[k](entry[k]) : '').join('')
    content.innerHTML = extras + marked.parse(entry.body)
  } else {
    content.innerHTML = posts
      .map(p => `<a href="#/${p.id}"><strong>${p.title}</strong> <small>${p.date}</small></a>`)
      .join('')
  }
}

render()
addEventListener('hashchange', render)
