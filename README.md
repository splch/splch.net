# slc.is

A [markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) blog on [Go](https://github.com/splch/slc.is/blob/main/main.go)

![GitHub go.mod Go version](https://img.shields.io/github/go-mod/go-version/splch/slc.is)

[![Run on Repl.it](https://replit.com/badge/github/splch/slc.is)](https://replit.com/github/splch/slc.is)

---

![Template Blog Preview](https://storage.googleapis.com/replit/images/1631650064891_b45a150cd76c08fef39303cbcf6087ad.png)

I'm using this server for my own [blog](https://slc.is) and wanted to share the code. If you want to mess around with a server, learn Go, or just easily make markdown posts, this is the template for you.

---

# Features

1.  KaTex Math Rendering
2.  Highlight.js Syntax Highlighting
3.  Marked Blog Post Markdown Rendering
4.  DOMPurify HTML Cleaner

# Requirements

All the work is done by the Go server, so there are no other dependencies. The minimum version of Go I've used was 1.14 and it worked fine. 1.11 does not work, however.

- Go `1.14`

I use [ZeroSSL](https://app.zerossl.com/) for the certificate. Name the certificate and key `tls.crt` and `tls.key`, respectively.

# Tutorial

I explain how the template works in this [video](https://youtu.be/3qFqnuqIcm8) if you'd like a quick rundown.

## To run on Replit

1. Define an environment variable: `password`.
2. Confirm in `main.go`, the serving line is `srv.ListenAndServe()` instead of `srv.ListenAndServeTLS(...)`
3. Optionally, create an environment key `GITPASSWORD` for your GitHub password, and a `change.sh` file that'll automatically update your GitHub fork with writing changes:

```shell
#!/bin/sh
git pull
git add --all
git commit -m "update writing"
git push https://username:$(echo $GITPASSWORD)@github.com/username/blog.git --all
```

## To run on boot on Raspberry Pi:

Add this code block in `/etc/rc.local` before `exit 0`.

```shell
cd /server/location/

export password=************

export PATH=$PATH:/usr/local/go/bin && \
    go build main.go && \
    sudo setcap CAP_NET_BIND_SERVICE=+eip main && \
    ./main &
```
