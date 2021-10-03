# slc.is
A [markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown) blog on [Go](https://github.com/splch/slc.is/blob/main/main.go)

---

![Template Blog Preview](https://storage.googleapis.com/replit/images/1631650064891_b45a150cd76c08fef39303cbcf6087ad.png)

I'm using this server for my own [blog](https://slc.is) and wanted to share the code. If you want to mess around with a server, learn Go, or just easily make markdown posts, this is the template for you.

---

# Requirements

All the work is done by the Go server, so there are no other dependencies. The Go server is using the New York Times' gzip library because using the standard library wasn't compressing audio well.

- Go `1.14`
  - gziphandler `1.1.1`

# Tutorial

I explain how the template works in this [video](https://youtu.be/3qFqnuqIcm8) if you'd like a quick rundown.
