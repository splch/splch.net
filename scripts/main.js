function remove(e) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    load = false;
}

function start() {
    for (let i = 100; i >= 0; i--) {
        const a = document.createElement('a');
        a.href = `/posts/${i}.md`;
        const img = document.createElement('img');
        img.src = `/images/${i}.webp`;
        img.onerror = remove;
        a.appendChild(img);
        document.getElementById('gallery').appendChild(a);
    }
}

window.onload = start;
