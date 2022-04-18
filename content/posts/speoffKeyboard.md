---
title: The Data-Driven Keyboard
description: An optimized keyboard derived from typing delays.
slug: speoff
date: 2022-04-17
author: Spencer and Geoffrey Churchill
categories:
  - Math
tags:
  - Tools
draft: true
---

Using the [keyboard delay](https://www.kaggle.com/datasets/splcher/keyboard-delay) and [blog authorship](https://www.kaggle.com/datasets/rtatman/blog-authorship-corpus) datasets, we can derive a keyboard that is optimized for the shortest delays between the most common key presses. For example, if `x` to `q` has the shortest delay of 33ms, but `t` to `h` is the most frequently occurring key presses, then we can replace `x` with `t` and `q` with `h`. This is a greedy algorithm to replace the keys with the shortest delay with the most frequently used keys.

While searching for the best average arrangement of keys, the evaluation of any keyboard can be compared to the greedy algorithm. If it is worse at any point of the search, the branch is pruned. This leads us into how we evaluate each candidate keyboard. We can iterate over every key placement and sum the key pair delay multiplied by its frequency. This method will punish long delays for common keys. An additional benefit I hinted at before is that the search can quickly be pruned the moment the keyboard is less efficient than greedy because each key pair is additive to the total frequency × delay value.

There are a couple considerations to have in mind when beginning to create a keyboard. **First**, should the keyboard retain the symbol and control key positions like `.` and `enter`? Maybe the keys should be categorized and only move position within their regions. **Second**, should the full-sized QWERTY keyboard be optimized? This would include the `print screen` and `scroll lock` keys which are rapidly losing popularity. **Third**, how should the confidence in each average be handled? Every mean has an associated standard deviation, so there could be a basic tie-breaking rule that selects the lower variance.

After some consideration, I decided that only optimizing the most common 60% (68 keys is lies perfectly within one standard deviation ;) of keys would be sufficient. From that set, I will not change the order or placement of the top row number keys. Their symbols, however, will be changed. To summarize, letters, symbols, and control keys can be swapped around.
