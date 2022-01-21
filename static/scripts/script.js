let imageChange = { interval: null, image: 1 };

function startEditor(title, value) {
  let textArea = prepareTextArea(title, value);
  let password = preparePassword();
  let submit = prepareSubmit();
  let div = document.createElement("div");
  div.classList.add("template");

  div.appendChild(textArea);
  div.appendChild(password);
  div.appendChild(submit);
  document.getElementById("top").appendChild(div);

  // easyMDE start
  const easyMDE = new EasyMDE({
    autofocus: true,
    autoDownloadFontAwesome: true,
    blockStyles: {
      italic: "_",
    },
    element: document.getElementById("mde"),
    forceSync: true,
    previewRender: toHTML,
    promptURLs: true,
    tabSize: 4,
  });
  document.getElementsByClassName("EasyMDEContainer")[0].onkeydown = (_) => {
    document.getElementById("bottom").style.pointerEvents = "none";
  }
  // easyMDE end
}

function prepareTextArea(title, value) {
  const id = "mde";
  let textArea = createTextArea();
  textArea.id = id;
  textArea.title = title; // title is used when deleting posts
  value = value.replace("1/22/2021", getDate());
  textArea.value = value;
  textArea.onchange = (_) => {
    document.getElementById("bottom").style.pointerEvents = "none";
  };
  return textArea;
}

function preparePassword() {
  let password = createInput();
  password.type = "password";
  password.id = "password";
  return password;
}

function prepareSubmit() {
  let submit = createButton();
  submit.innerText = "Submit";
  submit.onclick = submitMarkdown;
  return submit;
}

function createInput() {
  const input = document.createElement("input");
  return input;
}

function createButton() {
  const button = document.createElement("button");
  return button;
}

function createTextArea() {
  const ta = document.createElement("textarea");
  ta.style.maxWidth = "100%";
  ta.cols = "160";
  ta.style.aspectRatio = "3 / 2";
  ta.style.minHeight = "500px";
  ta.classList.add("template");
  return ta;
}

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
  img.loading = "lazy";
  img.alt = alt;
  if (src[0]) {
    let imgSrc;
    if (src[0].substring(0, 4) === "http") {
      imgSrc = src[0];
    } else {
      imgSrc = `images/${src[0]}`;
    }
    img.src = imgSrc;
    img.style.width = "15vh";
    img.onclick = (e) => {
      updatePage(e.target, true);
    };
    img.style.cursor = "pointer";
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
  h2.innerText = text;
  h2.onclick = (e) => {
    updatePage(e.target, true);
  };
  h2.classList.add("template");
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
  search.onkeyup = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        getServer("api/search", "query=" + e.target.value);
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
  if (title === "Blog") {
    createSearch();
    getServer("api/all", "");
  }
}

function updateImg(src) {
  if (src) {
    let imgSrc;
    if (src.substring(0, 4) === "http") {
      imgSrc = src;
    } else {
      imgSrc = `images/${src}`;
    }
    document.getElementById("cover").src = imgSrc;
    document.getElementById("background").style.display = "grid";
  }
}

function setImages(srcs, title) {
  clearInterval(imageChange.interval);
  document.getElementById("cover").onload = (e) => {
    e.target.parentElement.style.height =
      (e.target.height + 1).toString() + "px";
    e.target.onload = null;
  };
  updateImg(srcs[0], title);
  let image = 1;
  if (srcs.length > 1) {
    imageChange.interval = setInterval((_) => {
      const src = srcs[image % srcs.length];
      updateImg(src, title);
      image++;
    }, 4000);
  }
}

function setPageInfo(title, date) {
  document.getElementById("title").innerText = title;
  if (date === "0001-01-01T00:00:00Z") {
    date = "";
  } else {
    date = date.split("T")[0].split("-");
    date = [date[1], date[2], date[0]].join("/");
  }
  document.head.querySelector("[name~=date][content]").content = date
    ? date
    : "1/22/2021";
  document.getElementById("date").innerText = date;
}

function setPage(post) {
  const title = post["Title"][post["Title"].length - 1];
  setPageInfo(title, post["Date"]);
  setImages(post["Image"], title);
  setBody(post["Body"], post["Title"][0]);
  window.scrollTo(0, 0);
}

function clearTemplates() {
  document.querySelectorAll(".template").forEach((e) => {
    e.parentElement.removeChild(e);
  });
}

function clearPage() {
  clearInterval(imageChange.interval);
  clearTemplates();
  document.getElementById("title").innerText = "";
  document.getElementById("date").innerText = "";
  document.getElementById("cover").parentElement.style.display = "none";
  document.getElementById("cover").src = "";
  document.getElementById("bottom").style.removeProperty("pointer-events");
}

function newActive(element) {
  document.querySelectorAll(".link").forEach((link) => {
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

function editMarkdown(url, ...args) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      if (xhr.responseText != "Denied") {
        window.location.reload();
      } else {
        document.getElementById("password").style.background = "red";
      }
    }
  };
  xhr.send(args);
}

function setMarkdown(rsp) {
  const titles = rsp.split("title: ")[1].split("\n")[0].split(", ");
  clearTemplates();
  startEditor(titles[0], rsp.trim() + "\n");
  getServer("api/draft", "");
}

function setSearch(rsp, args) {
  const posts = JSON.parse(rsp);
  if (posts && window.location.hash.substr(1) === "Blog") {
    clearTemplates();
    createSearch(args.split("=")[1]);
    posts.forEach((post) => {
      populatePreview(post);
    });
  }
}

function setFull(rsp) {
  const post = JSON.parse(rsp);
  clearPage();
  setPage(post);
  if (window.location.hash.substr(1) === "Home") {
    getServer("api/latest", "");
  }
}

function setPreview(rsp) {
  const posts = JSON.parse(rsp);
  const title = window.location.hash.substr(1);
  if (
    title === "Blog" ||
    (title === "Home" && posts.length === 1) ||
    document.getElementById("mde")
  ) {
    posts.forEach((post) => {
      div = populatePreview(post);
    });
  }
}

function submitMarkdown() {
  const mde = document.getElementById("mde").value;
  const key = document.getElementById("password").value;
  const oldTitle = document.getElementById("mde").title;
  const newTitle = mde?.split("\n")[1]?.split("title: ")[1];
  const pubDate = mde?.split("\n")[2]?.split("date: ")[1];
  const imagePath = mde?.split("\n")[3]?.split("image: ")[1];
  const isDraft = mde.split("\n")[4]?.split("draft: ")[1];
  if (["Home", "Blog", "Contact", "About"].includes(oldTitle)) {
    if (newTitle?.split(",")[0] == oldTitle) {
      if (!pubDate && isDraft == "true") {
        editMarkdown("api/edit", key, mde);
      }
      else {
        alert("Only change the title, images, and content of " + oldTitle);
      }
    } else {
      alert("Do not rename " + oldTitle);
    }
  } else if (mde) {
    if (!newTitle.includes(",")) {
      if (newTitle && pubDate && imagePath && isDraft) {
        editMarkdown("api/edit", key, mde);
        if (oldTitle != newTitle) {
          // renaming deletes the old file
          editMarkdown("api/delete", key, oldTitle);
        }
      } else {
        alert("Metadata is malformed");
      }
    } else {
      alert("Remove commas from " + newTitle);
    }
  } else {
    let r = confirm("You will delete " + oldTitle);
    if (r) {
      editMarkdown("api/delete", key, oldTitle);
    }
  }
}

function getServer(url, args) {
  const xhr = new XMLHttpRequest();
  const req = args ? url + "?" + args : url;
  xhr.open("GET", req);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const type = url.split("/")[1];
      if (type === "get") {
        setFull(this.responseText);
      } else if (["all", "draft", "latest"].includes(type)) {
        setPreview(this.responseText);
      } else if (type === "markdown") {
        setMarkdown(this.responseText);
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
    setTitle("Blog");
  }
  getServer("api/get", "query=" + title);
  if (!pop) {
    window.history.pushState(title, title, "#" + encodeURI(title));
  }
}

function getElementByTitle(title) {
  let element, isBlog;
  switch (title) {
    case "Home":
    case "Blog":
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
  document.querySelectorAll(".link").forEach((link) => {
    link.onclick = (e) => {
      updatePage(e.target, false);
    };
  });
  document.getElementById("logo").onclick = (_) => {
    const query = decodeURI(window.location.hash.substr(1));
    getServer("api/markdown", "query=" + query);
  };
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
}

window.onload = start;
