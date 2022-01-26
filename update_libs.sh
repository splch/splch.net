echo "Updating scripts"

curl -s -S -Lo static/scripts/easymde/easymde.min.js https://unpkg.com/easymde/dist/easymde.min.js
curl -s -S -Lo static/scripts/highlight.min.js https://unpkg.com/@highlightjs/cdn-assets/highlight.min.js
curl -s -S -Lo static/scripts/katex.min.js https://unpkg.com/katex/dist/katex.min.js
curl -s -S -Lo static/scripts/marked.min.js https://unpkg.com/marked/marked.min.js
curl -s -S -Lo static/scripts/purify.min.js https://raw.githubusercontent.com/cure53/DOMPurify/main/dist/purify.min.js
curl -s -S -Lo static/scripts/purify.min.js.map https://raw.githubusercontent.com/cure53/DOMPurify/main/dist/purify.min.js.map

echo "Updating styles"

curl -s -S -Lo static/styles/easymde.min.css https://unpkg.com/easymde/dist/easymde.min.css
curl -s -S -Lo static/styles/katex.min.css https://unpkg.com/katex/dist/katex.min.css
curl -s -S -Lo static/styles/atom-one-dark.min.css https://unpkg.com/@highlightjs/cdn-assets/styles/atom-one-dark.min.css

echo "Updating EasyMDE spell check"

curl -s -S -Lo static/scripts/easymde/en_US.aff https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff
curl -s -S -Lo static/scripts/easymde/en_US.dic https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic

echo "Updating KaTex fonts"

curl -s -S -Lo static/styles/fonts/KaTeX_AMS-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_AMS-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Caligraphic-Bold.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Caligraphic-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Fraktur-Bold.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Fraktur-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Main-BoldItalic.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Main-Bold.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Bold.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Main-Italic.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Italic.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Main-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Main-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Math-BoldItalic.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Math-Italic.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Math-Italic.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_SansSerif-Bold.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_SansSerif-Italic.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_SansSerif-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Script-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Script-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Size1-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size1-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Size2-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size2-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Size3-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size3-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Size4-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Size4-Regular.woff2
curl -s -S -Lo static/styles/fonts/KaTeX_Typewriter-Regular.woff2 https://cdn.jsdelivr.net/npm/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2

echo "Fixing paths"

sed -i 's,"https://cdn.jsdelivr.net/codemirror.spell-checker/latest/,"scripts/easymde/,g' static/scripts/easymde/easymde.min.js
