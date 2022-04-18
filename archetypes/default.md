---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: {{ .Draft | false}}
---
