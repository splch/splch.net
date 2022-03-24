---
title: RGB for Average Contrast
description: The red, green, and blue values for average contrast on white and black backgrounds.
slug: averageRGB
date: 2022-03-17
image: /images/rgb.webp
categories:
  - Math
tags:
  - Tools
draft: false
---

I'm working on an interpreted assembly-like language called [Bee Assembly](https://asm.la/), and the editor's background will change from a light or dark color depending on the user's preference. It uses [Simple.css](https://simplecss.org/) to style the page, so I wanted to avoid adding additional CSS rules. Instead, I opted to find the best red, green, and blue values to maximize the contrast between the white and black backgrounds, and the text. I also found the average gray value. If others want to compute more colors, I'll add them to the list below.

In the browser's developer tools, you can hover over elements with the selector and see the contrast rating under Accessability. I simply adjusted the color values to minimize the difference between contrasts over white and black backgrounds.

| Color                            | Value   | Contrast |
| -------------------------------- | ------- | -------- |
| Red (Communist)                  | #ec0000 | 4.575    |
| Green (Almost Not Green Anymore) | #008900 | 4.575    |
| Blue (Historical Baby Powder)    | #5f5fff | 4.575    |
| Gray (Sonic Silver)              | #757575 | 4.575    |

Interestingly, the average contrast of gray isn't the average of #000000 and #ffffff. I was expecting `rgb(255 / 2, 255 / 2, 255 / 2)`, so `#7f7f7f` or `#808080`, but it's `rgb(117, 117, 117)`. Also, blue required adding red and green to reduce the contrast difference since it's practically unreadable without. Red and green could carry their own without mixing. I'm curious why these things occur and how they're related.

I also found a fun site called [COLORNAMES](https://colornames.org/) that aims to name every hex color. I used it to find the top names for these colors. As of writing this post, 2,896,184 colors have been named, so only $$256^3-2,896,184=13,881,032$$ are left to go! I took this opportunity to add another color to the list 😉. Should be finished by 2043, so act quick!

Back on topic, I figured these colors might be useful for some people who just want a single coloring scheme for their website regardless of background colors. Obviously, if the site isn't using a light or dark background, it won't be a good idea to use this, though.
