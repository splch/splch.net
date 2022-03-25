---
title: The Meanest Color
description: Calculating the most average color vector
slug: meancolor
date: 2022-03-24
image: /images/violet.webp
categories:
  - Thoughts
  - Math
tags:
draft: false
---

Have you ever wanted to know what the most mean color is? Red might come to mind — a fiery and belligerent color. But I'll do one better! I'll give you the color vector that's closest to every other color vector.

Here, the most average and mean color can be determined with [word2vec](https://radimrehurek.com/gensim/index.html) and vector averaging.

# Process

1. Load the word2vec model
2. Load the list of colors
3. Sum the vectors of each color together
4. Divide by the number of colors
5. Find the color vector with the largest cosine similarity to that vector

# Python

```shell
pip install numpy gensim
```

```python
import numpy
import gensim.downloader

model = gensim.downloader.load('glove-wiki-gigaword-300')
```

```python
colors = ['red',
          'orange',
          'yellow',
          'green',
          'cyan',
          'blue',
          'magenta',
          'purple',
          'white',
          'black',
          'silver',
          'pink',
          'maroon',
          'brown',
          'beige',
          'tan',
          'peach',
          'lime',
          'olive',
          'turquoise',
          'teal',
          'indigo',
          'violet']
```

```python
# start by averaging grays
avg_vector = (model['gray'] + model['grey']) / 2

for color in colors:
    avg_vector += model[color]

# divide by the number of colors
avg_vector /= (len(colors) + 1)
```

```python
avg_color = None

similarity = 0
for color in colors:
    sim = numpy.dot(avg_vector, model[color]) / \
        (numpy.linalg.norm(avg_vector) * numpy.linalg.norm(model[color]))
    if sim > similarity:
        similarity = sim
        avg_color = color

print(color)
```

> violet

# Conclusion

The meanest color is **violet**.
