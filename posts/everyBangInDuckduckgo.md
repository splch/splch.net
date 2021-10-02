---
title: Every Bang in DuckDuckGo
date: 8/31/2021
image: ddg.webp
draft: false
---

In response to a [question](https://www.reddit.com/r/duckduckgo/comments/pf6t4q/is_there_any_option_to_export_all_the_ddg_bangs/) about a list of all DuckDuckGo !bangs, I wrote this script:

<iframe class="container" width="100%" frameborder="0" src="https://replit.com/@splch/format-bangs?lite=1"></iframe>

On the site, I simply looked at the network history and saw a file requested: https://duckduckgo.com/bang.v260.js. The file was larger than any other file in the page which is what initially tipped me off. One look at it indicates that it's a dictionary with all the !bang data.

Amazingly, there are `13,565` !bangs. This is a short read, but the script may prove useful if <abbr title="DuckDuckGo">DDG</abbr> changes the file from where !bangs are loaded.

You can download [this text file](/data/ddgBangs.txt) which contains every !bang organized under category in alphabetical order.
