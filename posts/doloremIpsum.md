---
title: Dolorem Ipsum
date: 2021-11-11
image: dolorem.webp
draft: false
---

How would Cicero feel if he learned most knew him through Lorem Ipsum? I'm sure he'd lose his head… again. To further Herennius' delight, Cicero didn't even write those lines! To do justice to his legacy, I present Cicerkov: The Cicero Markov Chain.

To follow along, download <a href="data/lorem.txt">his work</a> here. There is an interactive demo in JavaScript below, though, but it uses a prerun model of window size two.

<details>
<summary>Python Code</summary>

## Imports

```python
from nltk.tokenize import sent_tokenize

from itertools import tee
from numpy import array, random

file = 'lorem.txt'
```

## Load Lorem Ipsum

```python
text = open(file, 'r', encoding='utf8').read()
```

## Markov Model

```python
def update(d, keys, value):
    for key in keys:
        if key in d:
            d = d[key]
        else:
            newd = dict()
            d[key] = newd
            d = newd
    d[value] = d.get(value, 0) + 1


def marginalize(text, window):
    d = dict()
    for w in slide(text.split(' '), window):
        features = w[:-1]
        target = w[-1]
        update(d, features, target)
    return d


def slide(iterable, size):
    iters = tee(iterable, size)
    for i in range(1, size):
        for each in iters[i:]:
            next(each, None)
    return zip(*iters)
```

## Create Model

```python
window = 2

model = marginalize(text, window)
```

## Generate Sentences

```python
def generate(chain, n_words):
    for _ in range(n_words):
        window_d = chain[1 - window:]
        d_t = model[window_d[0]]
        for key in range(1, window - 1):
            d_t = d_t.get(window_d[key], {})
        vals = list(d_t.values())
        if not d_t:
            break
        word = random.choice(
            list(d_t.keys()),
            p=array(vals)/sum(vals)
        )
        chain.append(word)
    return chain

def form(chain):
    sentences = sent_tokenize(' '.join(chain))
    paragraph = ' '.join(sent.capitalize() for sent in sentences)
    if paragraph[-1] not in {'.', '!', '?'}:
        paragraph += '.'
    return paragraph
```

```python
n_words = 200
chain = ['dolorem', 'ipsum']

chain = generate(chain, n_words)

print(form(chain))
```

> Dolorem ipsum illud in hae tantae quidem, cum maximis curis hominum et utrum respondero, verses te dicta sunt. Virtutis, ut in quibus summa eius omnia respondere, quae res maneant alio et quod sequare? Aut, qui omnino virtutem progressionis aliquantum. Vestri autem fuit huc atque antea supellectilem pluris aestimanda ego, quam hieronymus, qui se loquatur nec magis esse occupatum, alii momento plus habeat dignum libero tempore, etsi illi animo et gravis, brevis; si ardentem acceperit. Ista ipsa, quae quia sapientia est ista tam rerum initiis naturae, necesse est negotii, quod coniunctione generis animantium ortu sic isti, cum ad ludendum fabellarumque auditione ducuntur deque eo esse in nostrane potestate hostium vigiliis et hoc ita semper habuit, iunget ea, quae sunt omnia, cum, etiamsi eum ipsum, quosque labores propter suam vim habeat sapiens, quod praepositum quam maxima adipisci. Hunc ipsum sive finem tueri aut in varias reprehensiones incurreret. Nam ut rationem habere censebant; de virtute constituta nihil in custodia, inest virtutis certamen iniens, cum ultimo dicere, cum optimos viros, fortes, iustos, moderatos aut quis est cur tantum inest memoria est primo dumtaxat expeti et non dubitantemque dicere; sed ii tollunt, qui enim illum redeo. Si utrumque concluderent. At enim scite me pudeat, inquit, mala?

</details>

Interestingly, _dolorem ipsum_ translates to _pain itself_. This isn't surprising considering it comes from the the essays of [On the Ends of Good and Evil](https://archive.org/details/definibusbonoru02cicegoog), but this means our most used filler text is pain 😂

## Conclusion

> Should I be ashamed of knowing evil?
> — Cicerkov 2021

<iframe class="web" width="100%" frameborder="0" src="https://cicerkov.splch.repl.co/"></iframe>

Throwing the outputs into a translator is always interesting. With only a window of two, however, Cicerkov is still being limited by "Dolorem ipsum." At least in this way, he can say more than the famous first sentence.
