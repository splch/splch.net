---
title: Every Bang in DuckDuckGo
date: 2021-08-31
image: ddg.webp
draft: false
---

In response to a [question](https://www.reddit.com/r/duckduckgo/comments/pf6t4q/is_there_any_option_to_export_all_the_ddg_bangs/) about a list of all DuckDuckGo !bangs, I wrote this script:

```python
from requests import get
from json import loads


def get_bangs():
    r = get('https://duckduckgo.com/bang.v260.js')
    r = loads(r.text)
    return r


def create_dict(bangs):
    d = {'Misc': set()}
    for i in bangs:
        el = (i['s'].strip(), i['t'].strip())
        try:
            if i['c'] in d:
                d[i['c']].add(el)
            else:
                d[i['c']] = set(el)
        except:
            d['Misc'].add(el)
    return d


def write_bangs(d):
    with open('ddgBangs.txt', 'w') as f:
        for key, value in d.items():
            print(key + '\n')
            f.writelines(key + '\n')
            for el in sorted(value, key=lambda x: x[0]):
                print('\t', ': '.join([e for e in el]))
                f.write('\t')
                f.writelines(': '.join([e for e in el]))
                f.write('\n')


if __name__ == '__main__':
    bangs = get_bangs()
    d = create_dict(bangs)
    write_bangs(d)
```

On the site, I simply looked at the network history and saw a file requested: https://duckduckgo.com/bang.v260.js. The file was larger than any other file in the page which is what initially tipped me off. One look at it indicates that it's a dictionary with all the !bang data.

Amazingly, there are `13,565` !bangs. This is a short read, but the script may prove useful if <abbr title="DuckDuckGo">DDG</abbr> changes the file from where !bangs are loaded.

You can download [this text file](data/ddgBangs.txt) which contains every !bang organized under category in alphabetical order.
