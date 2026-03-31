let allPosts = {};
let carouselInterval = null;

const NAV_PAGES = new Set(["Home", "Archive", "Contact", "About"]);

const getHash = () => decodeURI(window.location.hash.substring(1));

const sortedPosts = () =>
  Object.values(allPosts)
    .filter((p) => !p.Draft)
    .sort((a, b) => b.Date - a.Date);

const displayTitle = (post) => post?.Title?.[post.Title.length - 1];

const clearTemplates = () =>
  document.querySelectorAll(".template").forEach((el) => el.remove());

const createHr = () => {
  const hr = document.createElement("hr");
  hr.classList.add("template");
  return hr;
};

const createP = (text) => {
  const p = document.createElement("p");
  p.innerText = text;
  p.classList.add("preview-text");
  return p;
};

const createImg = (alt, src) => {
  const img = document.createElement("img");
  const firstSrc = src?.[0];
  if (firstSrc) {
    img.alt = alt;
    img.loading = "lazy";
    img.onclick = () => updatePage(alt);
    img.onkeyup = (e) => {
      if (e.key === "Enter") updatePage(alt);
    };
    img.src = firstSrc.startsWith("http") ? firstSrc : `posts/images/${firstSrc}`;
    img.classList.add("preview-img");
  } else {
    img.src = "";
    img.style.width = "0";
  }
  return img;
};

const createDiv = () => {
  const div = document.createElement("div");
  div.classList.add("template", "preview-container");
  return div;
};

const createH2 = (text) => {
  const h2 = document.createElement("h2");
  h2.classList.add("template");
  h2.innerText = text;
  h2.onclick = () => updatePage(text);
  h2.onkeyup = (e) => {
    if (e.key === "Enter") updatePage(text);
  };
  h2.tabIndex = "0";
  return h2;
};

const toHTML = (markdown) => {
  const html = DOMPurify.sanitize(marked.parse(markdown), {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow"],
    ALLOW_UNKNOWN_PROTOCOLS: true,
  });
  const div = document.createElement("div");
  div.innerHTML = html;
  div.querySelectorAll("pre code").forEach((el) => hljs.highlightElement(el));
  div.querySelectorAll("table").forEach((table) => {
    const wrapper = document.createElement("div");
    wrapper.style.overflowX = "auto";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
  return div.innerHTML;
};

const parseText = (markdown) => {
  const div = document.createElement("div");
  div.innerHTML = toHTML(markdown);
  return div.innerText;
};

const populatePreview = (post) => {
  const title = displayTitle(post);
  const bottom = document.getElementById("bottom");
  bottom.appendChild(createHr());
  bottom.appendChild(createH2(title));
  const div = createDiv();
  div.appendChild(createImg(title, post?.Image));
  div.appendChild(
    createP(parseText(post?.Body?.split(/\s/).slice(0, 25).join(" ")))
  );
  bottom.appendChild(div);
};

const createSearch = (query = null) => {
  const div = document.createElement("div");
  div.style.textAlign = "right";
  div.classList.add("template");
  const search = document.createElement("input");
  search.type = "text";
  search.placeholder = "Search\u2026";
  search.id = "search";
  search.onkeyup = (e) => {
    if (e.key === "Enter" && e.target.value) {
      const q = e.target.value.toLowerCase();
      const results = sortedPosts().filter(
        (p) =>
          p.Title?.join(" ").toLowerCase().includes(q) ||
          p.Body?.toLowerCase().includes(q)
      );
      setSearch(results, e.target.value);
    }
  };
  div.appendChild(search);
  document.getElementById("top").appendChild(div);
  if (query) {
    search.value = query;
    search.focus();
  }
};

const setBody = (markdown, title) => {
  if (markdown) {
    const el = document.createElement("div");
    el.innerHTML = toHTML(markdown);
    el.classList.add("template");
    document.getElementById("top").appendChild(el);
  }
  if (title === "Archive") {
    createSearch();
    sortedPosts().forEach((post) => populatePreview(post));
  }
};

const updateImg = (src, title) => {
  if (!src) return;
  const cover = document.getElementById("cover");
  cover.alt = title;
  cover.src = src.startsWith("http") ? src : `posts/images/${src}`;
  cover.style.display = "inline";
};

const setImages = (srcs, title) => {
  clearInterval(carouselInterval);
  updateImg(srcs?.[0], title);
  if (srcs?.length > 1) {
    let i = 1;
    carouselInterval = setInterval(() => {
      updateImg(srcs[i % srcs.length], title);
      i++;
    }, 4000);
  }
};

const setPageInfo = (title, date) => {
  document.getElementById("title").innerText = title;
  if (!isNaN(date)) {
    document.head.querySelector("[name~=date][content]").content = date;
    document.getElementById("date").innerText = date.toLocaleDateString("en-US");
  }
};

const setPage = (post) => {
  const title = displayTitle(post);
  setPageInfo(title, post?.Date);
  setImages(post?.Image, title);
  setBody(post?.Body, post?.Title?.[0]);
  window.scrollTo(0, 0);
};

const clearPage = () => {
  clearInterval(carouselInterval);
  clearTemplates();
  const cover = document.getElementById("cover");
  document.getElementById("title").innerText = "";
  document.getElementById("date").innerText = "";
  cover.style.display = "none";
  cover.src = "";
  cover.alt = "";
  document.getElementById("bottom").style.removeProperty("pointer-events");
};

const newActive = (element) => {
  document.querySelector(".link.active")?.classList.remove("active");
  element?.classList.add("active");
};

const setSearch = (posts, query) => {
  if (posts && getHash() === "Archive") {
    clearTemplates();
    createSearch(query);
    posts.forEach((post) => populatePreview(post));
  }
};

const setFull = (post) => {
  setPage(post);
  if (getHash() === "Home") {
    const latest = sortedPosts()[0];
    if (latest) populatePreview(latest);
  }
};

const parseMarkdown = (text) => {
  const [, frontmatter = "", ...bodyParts] = text.split("---\n");
  const field = (key) =>
    frontmatter.match(new RegExp(`^${key}: (.+)$`, "m"))?.[1];
  return {
    Title: field("title")?.split(/,\s*/),
    Date: new Date(field("date")),
    Image: field("image")?.split(/,\s*/),
    Draft: field("draft") !== "false",
    Body: bodyParts
      .join("---\n")
      .replaceAll("](images/", "](posts/images/")
      .replaceAll("](data/", "](posts/data/"),
  };
};

const download = async (path) => {
  try {
    const response = await fetch(path);
    const text = await response.text();
    const post = parseMarkdown(text);
    allPosts[post?.Title?.[0]] = post;
    if (getHash() === post?.Title?.[0] && Object.keys(allPosts).length > 1)
      updatePage(post.Title[0]);
  } catch (error) {
    console.error("Error occurred while downloading:", error);
  }
};

const downloadAll = async (path) => {
  const response = await fetch(path);
  const text = await response.text();
  const dir = path.split("/")[0];
  for (const file of text.split("\n")) {
    if (file) await download(`${dir}/${file}`);
  }
  updatePage(getHash());
};

const setTitle = (title) => {
  document.title = title + " | " + window.location.hostname;
};

const updatePage = (title, pop = false) => {
  clearPage();
  const isNav = NAV_PAGES.has(title);
  if (isNav) {
    newActive(document.getElementById(title));
    setTitle(title);
  } else if (!document.querySelector(".link.active")) {
    newActive(document.getElementById("Archive"));
    setTitle("Archive");
  }
  if (!pop) window.history.pushState(title, title, "#" + encodeURI(title));
  setFull(allPosts[title] || allPosts["Error Page Not Found"]);
};

const startMarkdown = () => {
  const makeMath = (expr) => {
    const match = expr.match(/^(\${1,2})([\s\S]+)\1$/);
    if (!match) return null;
    try {
      return katex.renderToString(match[2], {
        displayMode: match[1] === "$$",
      });
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  marked.use({
    renderer: {
      code({ text, lang }) {
        if (!lang) {
          const math = makeMath(text);
          if (math) return math;
        }
        return false;
      },
      codespan({ text }) {
        return makeMath(text) || false;
      },
    },
  });
};

const start = () => {
  startMarkdown();
  const title = getHash() || "Home";
  window.location.hash = encodeURI(title);
  document.querySelectorAll(".link").forEach((link) => {
    link.onclick = () => updatePage(link.id);
    link.onkeyup = (e) => {
      if (e.key === "Enter") updatePage(link.id);
    };
  });
  window.onpopstate = (e) => updatePage(e.state, true);
};

downloadAll("posts/_all.md");
window.onload = start;
