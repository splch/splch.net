---
title: The Meanest Color
description: Calculating the most average color vector
slug: meancolor
date: 2022-03-24
image: /images/meanColor.webp
categories:
  - Thoughts
  - Math
tags:
draft: true
---

Have you ever wanted to know what the most mean color is? Red might come to mind — a fiery and belligerent color. But I'll do one better! I'll give you the color vector that's closest to every other color vector.

Here, the most average and mean color can be determined with [word2vec]() and vector averaging.

# Process

1. Load the word2vec model
2. Load the list of colors
3. Sum the vectors of each color together
4. Divide by the number of colors
5. Find the color vector with the largest cosine similarity to that vector
