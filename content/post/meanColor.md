---
title: The Meanest Color
description: Calculating the most average color vector
slug: meancolor
date: 2022-03-24
image: /images/purple.webp
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

```python
pip install gensim
```

```python
import numpy
import gensim.downloader
```

```python
queen_values = {}

for name in gensim.downloader.info()['models'].keys():
    try:
        model = gensim.downloader.load(name)
        t = model.most_similar(positive=['king', 'woman'], negative=['man'])
        for n, v in t:
            if n == 'queen':
                queen_values[name] = v
        print(t[0])
    except:
        pass
```

    ('queen', 0.7786749005317688)
    ('queen', 0.7118193507194519)
    ('queen', 0.8523604273796082)
    ('queen', 0.7698540687561035)
    ('queen', 0.6978678107261658)
    ('queen', 0.6713277101516724)
    ('meets', 0.8841924071311951)
    ('prince', 0.759779691696167)
    ('queen', 0.7052316069602966)
    ('queen', 0.6820898056030273)

```python
best_model = sorted(queen_values, key=queen_values.get, reverse=True)[0]
print('\n', best_model)
model = gensim.downloader.load(best_model)
```

     glove-wiki-gigaword-50

```python
colors = [
    'white', 'black', 'silver',
    'red', 'maroon', 'purple',
    'orange', 'brown', 'beige',
    'yellow', 'gold', 'tan',
    'green', 'lime', 'olive',
    'blue', 'cyan', 'teal',
    'indigo', 'lavender', 'pink',
    'violet', 'magenta', 'fuchsia',
]
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
avg_colors = {}

for color in colors:
    sim = numpy.dot(avg_vector, model[color]) / \
        (numpy.linalg.norm(avg_vector) * numpy.linalg.norm(model[color]))
    avg_colors[color] = sim
```

```python
for color in sorted(avg_colors, key=avg_colors.get, reverse=True):
    print(color, '\t\t', avg_colors[color])
```

    purple 		 0.92791396
    pink 		 0.9113098
    blue 		 0.9093884
    yellow 		 0.88690674
    red 		 0.872676
    green 		 0.8654766
    orange 		 0.84672266
    black 		 0.83403736
    white 		 0.8287787
    lavender 		 0.81729794
    maroon 		 0.7757962
    fuchsia 		 0.7409902
    brown 		 0.7358376
    olive 		 0.73582804
    magenta 		 0.68170786
    violet 		 0.6786235
    silver 		 0.6677471
    beige 		 0.66110957
    lime 		 0.6299113
    indigo 		 0.5789356
    gold 		 0.56747013
    tan 		 0.5436225
    teal 		 0.517831
    cyan 		 0.5167587

# Conclusion

There isn't any purpose for this post, but it's interesting to know that the meanest color is **purple**. I mostly wanted to start thinking about fun ways to use word2vec. I think I'd like to make a tool to assist writers in some way. I'm not sure what I'll do with it, but I'm sure it'll be fun.
