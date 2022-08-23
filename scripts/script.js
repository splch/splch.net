let allPosts = {};
let imageChange = { interval: null, image: 1 };

function createHr() {
  const hr = document.createElement("hr");
  hr.classList.add("template");
  return hr;
}

function createP(text) {
  const p = document.createElement("p");
  p.innerText = text;
  p.style.color = "#6f6f6f";
  p.style.margin = "0 0 0 2vh";
  p.style.overflow = "auto";
  return p;
}

function createImg(alt, src) {
  const img = document.createElement("img");
  if (src?.at(0)) {
    let imgSrc;
    if (src?.at(0).substring(0, 4) === "http") {
      imgSrc = src?.at(0);
    } else {
      imgSrc = `posts/images/${src?.at(0)}`;
    }
    img.alt = alt;
    img.loading = "lazy";
    img.onclick = e => {
      updatePage(e.target, true);
    };
    img.onkeyup = e => {
      if (e.key === "Enter") {
        updatePage(e.target, true);
      }
    };
    img.src = imgSrc;
    img.style.cursor = "pointer";
    img.style.width = "15vh";
  } else {
    img.src = "";
    img.style.width = "0";
  }
  return img;
}

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("template");
  div.style.alignItems = "center";
  div.style.display = "flex";
  div.style.minHeight = "10vh"; // height for lazy loading
  return div;
}

function createH2(text) {
  const h2 = document.createElement("h2");
  h2.classList.add("template");
  h2.innerText = text;
  h2.onclick = e => {
    updatePage(e.target, true);
  };
  h2.onkeyup = e => {
    if (e.key === "Enter") {
      updatePage(e.target, true);
    }
  };
  h2.tabIndex = "0";
  return h2;
}

function populatePreview(post) {
  const title = post["Title"]?.at(post["Title"]?.length - 1);
  const h2 = createH2(title);
  const div = createDiv();
  const img = createImg(title, post["Image"]);
  const p = createP(parseText(post["Body"].split(/\s/).slice(0, 25).join(" ")));
  const hr = createHr();
  document.getElementById("bottom").appendChild(hr);
  document.getElementById("bottom").appendChild(h2);
  div.appendChild(img);
  div.appendChild(p);
  document.getElementById("bottom").appendChild(div);
}

function createSearch(query = null) {
  const div = document.createElement("div");
  div.style.textAlign = "right";
  div.classList.add("template");
  const search = document.createElement("input");
  search.type = "text";
  search.placeholder = "Search…";
  search.onkeyup = e => {
    if (e.key === "Enter") {
      if (e.target.value) {
        queryPosts = [];
        for (const [_, post] of Object.entries(allPosts).sort(
          (a, b) => b[1]["Date"] - a[1]["Date"]
        )) {
          if (!post["Draft"])
            if (post["Title"].includes(e.target.value) || post["Body"].includes(e.target.value))
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
}

function setBody(markdown, title) {
  if (markdown) {
    let el = document.createElement("div");
    el.innerHTML = toHTML(markdown);
    el.classList.add("template");
    document.getElementById("top").appendChild(el);
  }
  if (title === "Archive") {
    createSearch();
    for (const [_, post] of Object.entries(allPosts).sort(
      (a, b) => b[1]["Date"] - a[1]["Date"]
    )) {
      if (!post["Draft"])
        populatePreview(post);
    }
  }
}

function updateImg(src, title) {
  if (src) {
    let imgSrc;
    if (src.substring(0, 4) === "http") {
      imgSrc = src;
    } else {
      imgSrc = `posts/images/${src}`;
    }
    document.getElementById("cover").alt = title;
    document.getElementById("cover").src = imgSrc;
    document.getElementById("cover").style.display = "inline";
  }
}

function setImages(srcs, title) {
  clearInterval(imageChange.interval);
  updateImg(srcs?.at(0), title);
  let image = 1;
  if (srcs?.length > 1) {
    imageChange.interval = setInterval(_ => {
      const src = srcs[image % srcs.length];
      updateImg(src, title);
      image++;
    }, 4000);
  }
}

function setPageInfo(title, date) {
  document.getElementById("title").innerText = title;
  if (!isNaN(date)) {
    document.head.querySelector("[name~=date][content]").content = date;
    document.getElementById("date").innerText = date.toLocaleDateString('en-US');
  }
}

function setPage(post) {
  const title = post["Title"]?.at(post["Title"]?.length - 1);
  setPageInfo(title, post["Date"]);
  setImages(post["Image"], title);
  setBody(post["Body"], post["Title"]?.at(0));
  window.scrollTo(0, 0);
}

function parseMarkdown(markdown) {
  let post = {};
  post["Title"] = markdown?.split("title: ")?.at(1)?.split("\n")?.at(0)?.split(", ");
  post["Date"] = new Date(markdown?.split("date: ")?.at(1)?.split("\n")?.at(0));
  post["Image"] = markdown?.split("image: ")?.at(1)?.split("\n")?.at(0).split(", ");
  post["Draft"] = markdown?.split("draft: ")?.at(1)?.split("\n")?.at(0) !== "false";
  post["Body"] = markdown?.split("---\n").slice(2).join("---\n");
  return post;
}

function clearTemplates() {
  document.querySelectorAll(".template").forEach(e => {
    e.parentElement.removeChild(e);
  });
}

function clearPage() {
  clearInterval(imageChange.interval);
  clearTemplates();
  document.getElementById("title").innerText = "";
  document.getElementById("date").innerText = "";
  document.getElementById("cover").style.display = "none";
  document.getElementById("cover").src = "";
  document.getElementById("cover").alt = "";
  document.getElementById("bottom").style.removeProperty("pointer-events");
}

function newActive(element) {
  document.querySelectorAll(".link").forEach(link => {
    link.classList.remove("active");
  });
  element.classList.add("active");
}

function setSearch(posts, query) {
  if (posts && decodeURI(window.location.hash.substr(1)) === "Archive") {
    clearTemplates();
    createSearch(query);
    posts.forEach(post => {
      populatePreview(post);
    });
  }
}

function setFull(post) {
  clearPage();
  setPage(post);
  if (decodeURI(window.location.hash.substr(1)) === "Home") {
    setPreview(latestPost(allPosts));
  }
}

function latestPost() {
  for (const [_, post] of Object.entries(allPosts).sort(
    (a, b) => b[1]["Date"] - a[1]["Date"]
  ))
    if (!post["Draft"])
      return [post];
}

function setPreview(posts) {
  const title = decodeURI(window.location.hash.substr(1));
  if (
    title === "Archive" ||
    (title === "Home" && posts?.length === 1)
  ) {
    posts.forEach(post => {
      if (post)
        populatePreview(post);
    });
  }
}

function download(path) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", path);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const post = parseMarkdown(this.responseText);
      post["Body"] = post["Body"].replaceAll("](images/", "](posts/images/");
      allPosts[post["Title"]?.at(0)] = post;
      if (decodeURI(window.location.hash.substr(1)) === post["Title"]?.at(0)) {
        loadPage(post["Title"]?.at(0));
      }
    }
  };
  xhr.send();
}

function downloadAll(path) {
  const parentDirectory = path.split("/")?.at(0);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", path);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      this.responseText.split("\n").forEach(path => {
        if (path.length)
          download(`${parentDirectory}/${path}`);
      });
    }
  };
  xhr.send();
}

function setTitle(title) {
  document.title = title + " | " + window.location.hostname;
}

function updatePage(element, isBlog, pop = false) {
  clearPage();
  const title = element.innerText
    || element.alt
    || decodeURI(window.location.hash.substr(1));
  if (!isBlog) {
    newActive(element);
    setTitle(title);
  } else if (!document.getElementsByClassName("active").length) {
    newActive(document.getElementsByClassName("link")[1]);
    setTitle("Archive");
  }
  if (!pop) {
    window.history.pushState(title, title, "#" + encodeURI(title));
  }
  if (allPosts[title])
    setFull(allPosts[title]);
  else
    setFull(allPosts["Error Page Not Found"]);
}

function getElementByTitle(title) {
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
}

function loadPage(title, pop) {
  const { element, isBlog } = getElementByTitle(title);
  updatePage(element, isBlog, pop);
}

function toHTML(markdown) {
  return DOMPurify.sanitize(marked.parse(markdown), {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["allow"],
    ALLOW_UNKNOWN_PROTOCOLS: true,
  });
}

function parseText(markdown) {
  let div = document.createElement("div");
  div.innerHTML = toHTML(markdown);
  return div.innerText;
}

function startMarkdown() {
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
      if (math && !language) {
        return math;
      }
      return false;
    },
    codespan(code) {
      const math = makeMath(code);
      if (math) {
        return math;
      }
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
  marked
    .setOptions({
      breaks: true,
      headerIds: false,
      highlight: (code, language) => {
        if (hljs.listLanguages().includes(language)) {
          return hljs.highlight(code, { language }).value;
        }
        return code;
      },
    })
    .use({ renderer });
}

function start() {
  downloadAll("posts/_all.md"); // Download all posts
  startMarkdown();
  const title = decodeURI(window.location.hash.substr(1)) || "Home";
  window.location.hash = encodeURI(title);
  document.querySelectorAll(".link").forEach(link => {
    link.onclick = e => {
      updatePage(e.target, false);
    };
    link.onkeyup = e => {
      if (e.key === "Enter") {
        updatePage(e.target, false);
      }
    };
  });
  window.onpopstate = e => {
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
}

window.onload = start;
