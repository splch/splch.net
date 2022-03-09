---
title: "Grokking Go"
date: 2021-08-22T00:00:00-08:00
draft: false
---

![Go Certification](/photos/gocert.webp)

Despite an [earlier post](/#Future%20of%20Blockchain%20Domains) being so optimistic about the <abbr title="InterPlanetary File System">IPFS</abbr>, I decided to self-host this site. I'm only leaving IPFS because this site will never be popular enough to be on any node besides my own. In this way, I was already hosting from the start. It all began as a fun endeavor to apply Go, but has since led to a [certificate](https://github.com/splch/google-go-coursera) and obsessive refinement of the [server](https://observatory.mozilla.org/analyze/slc.is).

Most recently, I have added the ability to edit and create posts from within this site! There's quite a bit going on in the server... particularly in one file 😳, so I should look into splitting the code into separate files: one for setting up the server, and another for parsing the markdown.

I am really enjoying Go, though. I'm more comfortable with interpreted languages as Python was my first; however, I am quickly converting to a statically-typed fan! Also, this is my first post using the new website editor 🤪

This is the code for my Go server hosted on Replit. [Replit](https://replit.com) makes for an easy hosting provider, as well. I can make updates quickly without worrying about power outages causing the site to go down. Initially, I was using the <abbr title="GNU's Not Unix! ZIP">gzip</abbr> package from Go's standard library, but audio couldn't be decoded. I opted to use the package by the New York Times instead. The server configuration is primarily based on three sources: [Cloudflare](https://blog.cloudflare.com/exposing-go-on-the-internet/), [Mozilla](https://ssl-config.mozilla.org/#server=go&version=1.16.7&config=intermediate&guideline=5.6), and their [observatory](https://observatory.mozilla.org/) tool.

<iframe class="web" width="100%" frameborder="0" src="https://replit.com/@splch/slcis?lite=1"></iframe>
