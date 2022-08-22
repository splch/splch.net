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
  if (src[0]) {
    let imgSrc;
    if (src[0].substring(0, 4) === "http") {
      imgSrc = src[0];
    } else {
      imgSrc = `images/${src[0]}`;
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
  const title = post["Title"][post["Title"].length - 1];
  const h2 = createH2(title);
  const div = createDiv();
  const img = createImg(title, post["Image"]);
  const p = createP(parseText(post["Body"]));
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
        getServer("get", "posts/" + e.target.value + ".md");
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
    getServer("all", "posts/_all.md");
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
  if (date) {
    date = date.split("T")[0].split("-");
    date = [date[1], date[2], date[0]].join("/");
    document.head.querySelector("[name~=date][content]").content = date;
    document.getElementById("date").innerText = date;
  }
}

function setPage(post) {
  const title = post["Title"];
  setPageInfo(title, post["Date"]);
  setImages(post["Image"], title);
  setBody(post["Body"], post["Title"][0]);
  window.scrollTo(0, 0);
}

function parseMarkdown(markdown) {
  let post = {};
  post["Title"] = markdown?.split("title: ")[1]?.split("\n")[0];
  post["Date"] = markdown?.split("date: ")[1]?.split("\n")[0];
  post["Image"] = markdown?.split("image: ")[1]?.split("\n")[0].split(", ");
  post["Body"] = markdown?.split("---\n")[2];
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

function getDate() {
  let today = new Date();
  let dd = String(today.getDate());
  let mm = String(today.getMonth() + 1); // January is 0
  let yyyy = today.getFullYear();
  return mm + "/" + dd + "/" + yyyy;
}

function setSearch(rsp) {
  const posts = parseMarkdown(rsp);
  if (posts && window.location.hash.substr(1) === "Archive") {
    clearTemplates();
    posts.forEach(post => {
      populatePreview(post);
    });
  }
}

function setFull(rsp) {
  const post = parseMarkdown(rsp);
  clearPage();
  setPage(post);
  if (window.location.hash.substr(1) === "Home") {
    getServer("latest", "posts/_all.md");
  }
}

function setPreview(rsp) {
  const posts = parseMarkdown(rsp);
  const title = window.location.hash.substr(1);
  if (
    title === "Archive" ||
    (title === "Home" && posts.length === 1) ||
    document.getElementById("mde")
  ) {
    posts.forEach(post => {
      div = populatePreview(post);
    });
  }
}

function getServer(type, url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      if (type === "get") {
        setFull(this.responseText);
      } else if (["all", "draft", "latest"].includes(type)) {
        setPreview(this.responseText);
      } else if (type === "search") {
        setSearch(this.responseText, args);
      }
    }
  };
  xhr.send();
}

function setTitle(title) {
  document.title = title + " | " + window.location.hostname;
}

function updatePage(element, isBlog, pop = false) {
  clearPage();
  const title = element.innerText || element.alt;
  if (!isBlog) {
    newActive(element);
    setTitle(title);
  } else if (!document.getElementsByClassName("active").length) {
    newActive(document.getElementsByClassName("link")[1]);
    setTitle("Archive");
  }
  getServer("get", "posts/" + title + ".md");
  if (!pop) {
    window.history.pushState(title, title, "#" + encodeURI(title));
  }
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
  startMarkdown();
  const title = window.location.hash.substr(1) || "Home";
  loadPage(decodeURI(title), false);
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
