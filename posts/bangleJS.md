---
title: Bangle.js Watch
date: 2022-09-10
image: bangle.jpg
draft: false
---

I was gifted a Bangle.js 2 watch a few months ago and have since fallen in love with its developer-friendly SDK.

The first project I began was ambitious as I attempted a Pokemon Battle watchface but the graphics are difficult to get perfect. I then moved to a health widget that reminds me to look away from my screen for 20 seconds and stand up / sit down for 20 minutes.

I realized that this widget should only run when I'm wearing the watch, so I then began work on a library to detect if someone is wearing the watch. By using scikit-learn I could easily create a decision tree to extract the most separating conditions.

```python
import pandas as pd

import sklearn
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import classification_report

from dtreeviz.trees import dtreeviz

import matplotlib.pyplot as plt
%config InlineBackend.figure_format = 'svg'

import warnings
warnings.filterwarnings('ignore', category=FutureWarning)


df = pd.read_csv('worn data.csv')
df.describe()

X = df[['Charging', 'Acceleration']]
y = df[['Worn']]

params = {
  'criterion': ['gini', 'entropy', 'log_loss'],
  'splitter': ['best', 'random'],
  'max_depth': [None, 1, 2, 3, 4],
  'max_features': ['auto', 'sqrt', 'log2'],
  'class_weight': [None, 'balanced'],
}

dtc = DecisionTreeClassifier()
clf = GridSearchCV(
  dtc,
  params,
  cv=5,
  scoring='f1',
)

clf.fit(X, y)
dtc = clf.best_estimator_

viz = dtreeviz(
  dtc,
  X.to_numpy(),
  y.to_numpy().reshape(1,-1)[0],
  target_name='target',
  feature_names=X.columns,
  class_names=['Off', 'On']
)

viz
```

![Optimal Decision Tree](/images/bangleTree.webp)

The development environment around Bangle.js is fantastic and has enabled me to have fun while adding features that are healthy to me and the watch's battery!

- https://github.com/espruino/BangleApps/pull/2121
- http://forum.espruino.com/conversations/379538/
- https://github.com/espruino/BangleApps/tree/master/apps/widtwenties
