function parse(text) {
  const [, front, ...rest] = text.split('---\n')
  const meta = { post: true }
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
    [...Array(lo)].map((_, i) =>
      fetch(`content/${i}.md`).then(r => r.text()).then(t => ({ id: i, ...parse(t) }))
    )
  )
}

const content = document.getElementById('content')
let entries, posts

function render() {
  const id = location.hash.slice(2)
  if (id) {
    content.innerHTML = marked.parse((entries[id] || entries['not-found']).body)
  } else {
    content.innerHTML = posts
      .map(p => `<a href="#/${p.id}"><strong>${p.title}</strong> <small>${p.date}</small></a>`)
      .join('')
  }
}

discover().then(async result => {
  entries = result
  entries['not-found'] = parse(await fetch('content/not-found.md').then(r => r.text()))
  posts = entries.filter(e => e.post).sort((a, b) => b.date.localeCompare(a.date))
  document.getElementById('nav').innerHTML = entries
    .filter(e => !e.post)
    .map(p => `<a href="#/${p.id}">${p.title}</a>`)
    .join(' ')
  render()
})

addEventListener('hashchange', render)
