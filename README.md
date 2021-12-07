# slc.is

A [markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) blog on [Go](https://github.com/splch/slc.is/blob/main/main.go)

* * *

![Template Blog Preview](https://storage.googleapis.com/replit/images/1631650064891_b45a150cd76c08fef39303cbcf6087ad.png)

I'm using this server for my own [blog](https://slc.is) and wanted to share the code. If you want to mess around with a server, learn Go, or just easily make markdown posts, this is the template for you.

* * *

# Features

1.  KaTex Math Rendering
2.  Highlight.js Syntax Highlighting
3.  Marked Blog Post Markdown Rendering
4.  DOMPurify HTML Cleaner

# Requirements

All the work is done by the Go server, so there are no other dependencies. The minimum version of Go I've used was 1.14 and it worked fine. 1.11 does not work, however.

-   Go `1.14`

I use [ZeroSSL](https://app.zerossl.com/) for the certificate. Name the certificate and key `tls.crt` and `tls.key`, respectively.

# Tutorial

I explain how the template works in this [video](https://youtu.be/3qFqnuqIcm8) if you'd like a quick rundown.

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
