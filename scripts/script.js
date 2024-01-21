let allPosts = {};
let imageChange = { interval: null, image: 1 };

const createHr = () => {
  const hr = document.createElement("hr");
  hr.classList.add("template");
  return hr;
};

const createP = (text) => {
  const p = document.createElement("p");
  p.innerText = text;
  p.style.color = "#6f6f6f";
  p.style.margin = "0 0 0 2vh";
  p.style.overflow = "auto";
  return p;
};

const createImg = (alt, src) => {
  const img = document.createElement("img");
  const firstSrc = src?.[0];

  if (firstSrc) {
    const imgSrc = firstSrc.startsWith("http")
      ? firstSrc
      : `posts/images/${firstSrc}`;
    img.alt = alt;
    img.loading = "lazy";
    img.onclick = (e) => updatePage(e.target, true);
    img.onkeyup = (e) => {
      if (e.key === "Enter") updatePage(e.target, true);
    };
    img.src = imgSrc;
    img.style.cursor = "pointer";
    img.style.width = "15vh";
  } else {
    img.src = "";
    img.style.width = "0";
  }
  return img;
};

const createDiv = () => {
  const div = document.createElement("div");
  div.classList.add("template");
  div.style.alignItems = "center";
  div.style.display = "flex";
  div.style.minHeight = "10vh"; // height for lazy loading
  return div;
};

const createH2 = (text) => {
  const h2 = document.createElement("h2");
  h2.classList.add("template");
  h2.innerText = text;
  h2.onclick = (e) => updatePage(e.target, true);
  h2.onkeyup = (e) => {
    if (e.key === "Enter") updatePage(e.target, true);
  };
  h2.tabIndex = "0";
  return h2;
};

const populatePreview = (post) => {
  const title = post?.Title?.[post?.Title?.length - 1];
  const h2 = createH2(title);
  const div = createDiv();
  const img = createImg(title, post?.Image);
  const p = createP(parseText(post?.Body?.split(/\s/).slice(0, 25).join(" ")));
  const hr = createHr();
  const bottom = document.getElementById("bottom");
  bottom.appendChild(hr);
  bottom.appendChild(h2);
  div.appendChild(img);
  div.appendChild(p);
  bottom.appendChild(div);
};

const createSearch = (query = null) => {
  const div = document.createElement("div");
  div.style.textAlign = "right";
  div.classList.add("template");
  const search = document.createElement("input");
  search.type = "text";
  search.placeholder = "Search…";
  search.onkeyup = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        queryPosts = [];
        for (const [_, post] of Object.entries(allPosts).sort(
          (a, b) => b[1]?.Date - a[1]?.Date
        )) {
          if (!post?.Draft)
            if (
              post?.Title?.includes(e.target.value) ||
              post?.Body?.includes(e.target.value)
            )
              // todo fix search casing
              queryPosts.push(post);
        }
        setSearch(queryPosts, e.target.value);
      }
    }
  };
  search.id = "search";
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
    for (const [_, post] of Object.entries(allPosts).sort(
      (a, b) => b[1]?.Date - a[1]?.Date
    )) {
      if (!post?.Draft) populatePreview(post);
    }
  }
};

const updateImg = (src, title) => {
  if (src) {
    const imgSrc = src.startsWith("http") ? src : `posts/images/${src}`;
    const cover = document.getElementById("cover");
    cover.alt = title;
    cover.src = imgSrc;
    cover.style.display = "inline";
  }
};

const setImages = (srcs, title) => {
  clearInterval(imageChange.interval);
  updateImg(srcs?.[0], title);
  let image = 1;
  if (srcs?.length > 1) {
    imageChange.interval = setInterval((_) => {
      const src = srcs[image % srcs.length];
      updateImg(src, title);
      image++;
    }, 4000);
  }
};

const setPageInfo = (title, date) => {
  const titleElement = document.getElementById("title");
  const dateElement = document.getElementById("date");
  titleElement.innerText = title;
  if (!isNaN(date)) {
    document.head.querySelector("[name~=date][content]").content = date;
    dateElement.innerText = date.toLocaleDateString("en-US");
  }
};

const setPage = (post) => {
  const title = post?.Title?.[post?.Title?.length - 1];
  setPageInfo(title, post?.Date);
  setImages(post?.Image, title);
  setBody(post?.Body, post?.Title?.[0]);
  window.scrollTo(0, 0);
};

const parseMarkdown = (markdown) => {
  let post = {};
  post["Title"] = markdown
    ?.split("title: ")
    ?.at(1)
    ?.split("\n")
    ?.at(0)
    ?.split(/,\s*/);
  post["Date"] = new Date(markdown?.split("date: ")?.at(1)?.split("\n")?.at(0));
  post["Image"] = markdown
    ?.split("image: ")
    ?.at(1)
    ?.split("\n")
    ?.at(0)
    .split(/,\s*/);
  post["Draft"] =
    markdown?.split("draft: ")?.at(1)?.split("\n")?.at(0) !== "false";
  post["Body"] = markdown?.split("---\n").slice(2).join("---\n");
  return post;
};

const clearTemplates = () => {
  const templates = document.querySelectorAll(".template");
  templates.forEach((e) => {
    e.parentElement.removeChild(e);
  });
};

const clearPage = () => {
  clearInterval(imageChange.interval);
  clearTemplates();
  const titleElement = document.getElementById("title");
  const dateElement = document.getElementById("date");
  const cover = document.getElementById("cover");
  const bottom = document.getElementById("bottom");
  titleElement.innerText = "";
  dateElement.innerText = "";
  cover.style.display = "none";
  cover.src = "";
  cover.alt = "";
  bottom.style.removeProperty("pointer-events");
};

const newActive = (element) => {
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  element.classList.add("active");
};

const setSearch = (posts, query) => {
  if (posts && decodeURI(window.location.hash.substring(1)) === "Archive") {
    clearTemplates();
    createSearch(query);
    posts.forEach((post) => {
      populatePreview(post);
    });
  }
};

const setFull = (post) => {
  setPage(post);
  if (decodeURI(window.location.hash.substring(1)) === "Home")
    setPreview(latestPost(allPosts));
};

const latestPost = () => {
  for (const [_, post] of Object.entries(allPosts).sort(
    (a, b) => b[1]?.Date - a[1]?.Date
  )) {
    if (!post?.Draft) return [post];
  }
};

const setPreview = (posts) => {
  const title = decodeURI(window.location.hash.substring(1));
  if (title === "Archive" || (title === "Home" && posts?.length === 1)) {
    posts.forEach((post) => {
      if (post) populatePreview(post);
    });
  }
};

const download = async (path) => {
  try {
    const response = await fetch(path);
    const text = await response.text();
    const post = parseMarkdown(text);
    post["Body"] = post["Body"]
      .replaceAll("](images/", "](posts/images/")
      .replaceAll("](data/", "](posts/data/");
    allPosts[post?.Title?.[0]] = post;
    if (
      decodeURI(window.location.hash.substring(1)) === post?.Title?.[0] &&
      Object.keys(allPosts).length > 1
    )
      loadPage(post?.Title?.[0]);
  } catch (error) {
    console.error("Error occurred while downloading:", error);
  }
};

const downloadAll = async (path) => {
  const response = await fetch(path);
  const text = await response.text();
  const parentDirectory = path.split("/")?.[0];
  const paths = text.split("\n");
  for (const path of paths) {
    if (path.length) {
      await download(`${parentDirectory}/${path}`);
    }
  }
  loadPage(decodeURI(window.location.hash.substring(1)));
};

const setTitle = (title) => {
  document.title = title + " | " + window.location.hostname;
};

const updatePage = (element, isBlog, pop = false) => {
  clearPage();
  const title =
    element.innerText ||
    element.alt ||
    decodeURI(window.location.hash.substring(1));
  if (!isBlog) {
    newActive(element);
    setTitle(title);
  } else if (!document.getElementsByClassName("active").length) {
    newActive(document.getElementsByClassName("link")[1]);
    setTitle("Archive");
  }
  if (!pop) window.history.pushState(title, title, "#" + encodeURI(title));
  if (allPosts[title]) setFull(allPosts[title]);
  else setFull(allPosts["Error Page Not Found"]);
};

const getElementByTitle = (title) => {
  let element, isBlog;
  switch (title) {
    case "Home":
    case "Archive":
    case "Contact":
    case "About":
      element = document.getElementById(title);
      isBlog = false;
      break;
    default:
      element = createH2(title);
      isBlog = true;
      break;
  }
  return { element, isBlog };
};

const loadPage = (title, pop) => {
  const { element, isBlog } = getElementByTitle(title);
  updatePage(element, isBlog, pop);
};

const toHTML = (markdown) => {
  const html = DOMPurify.sanitize(marked.parse(markdown), {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow"],
    ALLOW_UNKNOWN_PROTOCOLS: true,
  });
  const div = document.createElement("div");
  div.innerHTML = html;
  div.querySelectorAll("pre code").forEach((element) => {
    hljs.highlightElement(element);
  });
  return div.innerHTML;
};

const parseText = (markdown) => {
  const div = document.createElement("div");
  div.innerHTML = toHTML(markdown);
  return div.innerText;
};

const startMarkdown = () => {
  function makeMath(expr) {
    let n, displayMode;
    if (expr.match(/^\$\$[\s\S]*\$\$$/)) {
      n = 2;
      displayMode = true;
    } else if (expr.match(/^\$[\s\S]*\$$/)) {
      n = 1;
      displayMode = false;
    }
    try {
      return n
        ? katex.renderToString(expr.substr(n, expr.length - 2 * n), {
          displayMode,
        })
        : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  const renderer = {
    code(code, language, escaped) {
      const math = makeMath(code);
      if (math && !language) return math;
      return false;
    },
    codespan(code) {
      const math = makeMath(code);
      if (math) return math;
      return false;
    },
    table(head, body) {
      head = "<thead>" + head + "</thead>";
      body = body = body && "<tbody>" + body + "</tbody>";
      return (
        "<div style='overflow-x:auto;'><table>" +
        head +
        body +
        "</table></div>\n"
      );
    },
  };
  marked.use({ renderer });
};

const start = async () => {
  startMarkdown();
  const title = decodeURI(window.location.hash.substring(1)) || "Home";
  window.location.hash = encodeURI(title);
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.onclick = (e) => updatePage(e.target, false);
    link.onkeyup = (e) => {
      if (e.key === "Enter") updatePage(e.target, false);
    };
  });
  window.onpopstate = (e) => {
    loadPage(e.state, true);
  };
  console.log(
    "%cQuite a sight, isn't it? 😉",
    "color: " +
    getComputedStyle(document.body).getPropertyValue("--light") +
    "; font-size: " +
    getComputedStyle(document.body).getPropertyValue("--font-size") +
    ";"
  );
};

downloadAll("posts/_all.md"); // Download all posts
window.onload = start;
