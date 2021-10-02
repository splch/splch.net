const siteUrl = "slc.is";
let imageChange = { "interval": null, "image": 1 };

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

    getServer("https://" + siteUrl + "/api/draft", "");
}

function toHTML(markdown) {
    return DOMPurify.sanitize(
        marked(markdown),
        { ADD_TAGS: ["iframe"] },
    );
}

function parseText(markdown) {
    let div = document.createElement("div");
    div.innerHTML = toHTML(markdown);
    return div.innerText;
}

function summarize(title, markdown) {
    let text = parseText(markdown);
    let summarizer = new JsSummarize();
    let summary = summarizer.summarize(title, text);
    return summary[0].split(" ").slice(0, 10).join(" ") + "…";
}

function prepareTextArea(title, value) {
    const id = "mde";
    let textArea = createTextArea();
    textArea.id = id;
    textArea.title = title;
    value = value.replace("1/22/2021", getDate());
    textArea.value = value;
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
    submit.onclick = _ => {
        let mde = document.getElementById("mde").value;
        let key = document.getElementById("password").value;
        if (mde) {
            editMarkdown(
                "https://" + siteUrl + "/api/edit",
                key,
                mde,
            );
        }
        else {
            let title = document.getElementById("mde").title;
            let r = confirm("You will delete:\n" + title);
            if (r) {
                editMarkdown(
                    "https://" + siteUrl + "/api/delete",
                    key,
                    title,
                );
            }
        }
    }
    return submit;
}

function createInput() {
    const input = document.createElement("input");
    input.classList.add("template");
    return input;
}

function createButton() {
    const button = document.createElement("button");
    button.classList.add("template");
    return button;
}

function createTextArea() {
    const ta = document.createElement("textarea");
    ta.style.maxWidth = "100%";
    ta.cols = "160";
    ta.style.aspectRatio = "16/9";
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
    p.style.color = "#787878";
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
        }
        else {
            imgSrc = `images/${src[0]}`;
        }
        img.src = imgSrc;
        img.style.width = "15vh";
        img.onclick = e => {
            updatePage(e.target, true);
        };
        img.style.cursor = "pointer";
    }
    else {
        img.src = "";
        img.style.width = "0";
    }
    return img;
}

function createDiv() {
    const div = document.createElement("div");
    div.classList.add("template");
    div.style.display = "flex";
    div.style.alignItems = "center";
    return div;
}

function createH2(text) {
    const h2 = document.createElement("h2");
    h2.innerText = text;
    h2.onclick = e => {
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
    document.getElementById("page").appendChild(hr);
    document.getElementById("page").appendChild(h2);
    div.appendChild(img);
    div.appendChild(p);
    document.getElementById("page").appendChild(div);
}

function createSearch(query = null) {
    const div = document.createElement("div");
    div.style.textAlign = "right";
    const search = document.createElement("input");
    search.type = "text";
    search.placeholder = "Search…";
    search.onkeyup = e => {
        if (e.key === "Enter") {
            if (e.target.value) {
                getServer("https://" + siteUrl + "/api/search", "query=" + e.target.value);
            }
        }
    };
    search.classList.add("template");
    search.id = "search";
    div.appendChild(search);
    document.getElementById("page").appendChild(div);
    if (query) {
        search.value = query;
        search.focus();
    }
}

function createLink(href) {
    let link = document.createElement("link");
    link.href = href;
    return link;
}

function createScript(src) {
    let script = document.createElement("script");
    script.src = src;
    return script;
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
        getServer("https://" + siteUrl + "/api/all", "");
    }
}

function updateImg(src, title) {
    if (src) {
        let imgSrc;
        if (src.substring(0, 4) === "http") {
            imgSrc = src;
        }
        else {
            imgSrc = `images/${src}`;
        }
        document.getElementById("cover").src = imgSrc;
    }
}

function setImages(srcs, title) {
    clearInterval(imageChange.interval);
    updateImg(srcs[0], title);
    let image = 1;
    if (srcs.length > 1) {
        imageChange.interval = setInterval(_ => {
            const src = srcs[image % srcs.length];
            updateImg(src, title);
            image++;
        }, 4000);
    }
    document.getElementById("cover").parentElement.style.display = "block";
}

function setPageInfo(title, date) {
    document.getElementById("title").innerText = title;
    if (date === "0001-01-01T00:00:00Z") {
        date = "";
    }
    else {
        date = date.split("T")[0].split("-");
        date = [date[1], date[2], date[0]].join("/");
    }
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
    document.querySelectorAll(".template").forEach(e => {
        e.parentElement.removeChild(e);
    });
}

function clearPage() {
    document.getElementById("title").innerText = "";
    document.getElementById("date").innerText = "";
    document.getElementById("cover").parentElement.style.display = "none";
    document.getElementById("cover").src = "";
    clearTemplates();
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
    var yyyy = today.getFullYear();
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
            }
            else {
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
}

function setSearch(rsp, args) {
    const posts = JSON.parse(rsp);
    if (posts && window.location.hash.substr(1) === "Blog") {
        clearTemplates();
        createSearch(args.split("=")[1]);
        posts.forEach(post => {
            populatePreview(post);
        });
    }
}

function setFull(rsp) {
    const post = JSON.parse(rsp);
    clearPage();
    setPage(post);
    if (window.location.hash.substr(1) === "Home") {
        getServer("https://" + siteUrl + "/api/latest", "");
    }
}

function setPreview(rsp) {
    const posts = JSON.parse(rsp);
    const title = window.location.hash.substr(1);
    if (title === "Blog" || (title === "Home" && posts.length === 1) || document.getElementsByTagName("textarea").length === 1) {
        posts.forEach(post => {
            populatePreview(post);
        });
    }
}

function getServer(url, args) {
    const xhr = new XMLHttpRequest();
    const req = args ? url + "?" + args : url;
    xhr.open("GET", req);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (url.split("/")[4] === "get") {
                setFull(this.responseText);
            }
            else if (["all", "draft", "latest"].includes(
                        url.split("/")[4])
                    ) {
                setPreview(this.responseText);
            }
            else if (url.split("/")[4] === "markdown") {
                setMarkdown(this.responseText);
            }
            else if (url.split("/")[4] === "search") {
                setSearch(this.responseText, args);
            }
        }
    };
    xhr.send();
}

function updatePage(element, isBlog, pop = false) {
    clearPage();
    const title = element.innerText || element.alt;
    if (!isBlog) {
        newActive(element);
        document.title = title;
    }
    else if (!document.getElementsByClassName("active").length) {
        newActive(document.getElementsByClassName("link")[1]);
        document.title = "Blog";
    }
    getServer("https://" + siteUrl + "/api/get", "query=" + title);
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

function startMarkdown() {
    function makeMath(expr) {
        var n, displayMode;
        if (expr.match(/^\$\$[\s\S]*\$\$$/)) {
            n = 2;
            displayMode = true;
        } else if (expr.match(/^\$[\s\S]*\$$/)) {
            n = 1;
            displayMode = false;
        }
        return n ? katex.renderToString(
            expr.substr(n, expr.length - 2 * n),
            { displayMode }
        ) : null;
    }

    const renderer = {
        code(code, language, _) {
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
            body = (body = body && "<tbody>" + body + "</tbody>");
            return "<div style=\"overflow-x:auto;\"><table>" +
                head + body +
                "</table></div>\n";
        }
    }
    marked.setOptions({
        breaks: true,
        highlight: (code, language) => {
            if (hljs.listLanguages().includes(language)) {
                return hljs.highlight(code, { language }).value;
            }
            return code;
        },
        smartypants: true,
    }).use({ renderer });
}

function darkMode() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.style.setProperty("--background", "#121212");
        document.documentElement.style.setProperty("--hover", "var(--active)");
        document.getElementById("page").style.color = "#ffffff";
        document.getElementById("page").style.background = "var(--background)";
    }
}

function start() {
    darkMode();
    startMarkdown();
    const title = window.location.hash.substr(1) || "Home";
    loadPage(decodeURI(title), false);
    document.querySelectorAll(".link").forEach(link => {
        link.onclick = e => {
            updatePage(e.target, false);
        };
    });
    document.getElementById("logo").onclick = _ => {
        const query = decodeURI(window.location.hash.substr(1));
        getServer("https://" + siteUrl + "/api/markdown", "query=" + query);

    };
    console.log(
        "%cQuite a sight, isn't it? 😉", "color: " +
        getComputedStyle(document.body).getPropertyValue("--light") +
        "; font-size: 12pt;"
    );
}

window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
    if (e.matches) {
        darkMode();
    }
    else {
        document.documentElement.style.removeProperty("--background");
        document.documentElement.style.removeProperty("--hover");
        document.getElementById("page").style.removeProperty("background");
        document.getElementById("page").style.removeProperty("color");
    }
});

window.onpopstate = e => {
    loadPage(e.state, true);
}

window.onload = start;
