---
title: The Data-Driven Keyboard
date: 2022-04-17
image: fwuzix.png
draft: false
---

Using the [keystrokes](https://userinterfaces.aalto.fi/136Mkeystrokes/) and [blog authorship](https://www.kaggle.com/datasets/rtatman/blog-authorship-corpus) datasets, we can derive a keyboard that is optimized for the shortest delays between the most common key presses. For example, if <kbd>x</kbd> to <kbd>q</kbd> has the shortest delay of 33ms, but <kbd>t</kbd> to <kbd>h</kbd> is the most frequently occurring key presses, then we can replace <kbd>x</kbd> with <kbd>t</kbd> and <kbd>q</kbd> with <kbd>h</kbd>. This approach maps keys with regard to finger agility. The proposed algorithm greedily replaces the keys with the shortest delay with the most frequently used keys, so it won't be an optimal solution.

While searching for the best average arrangement of keys, the evaluation of any keyboard can be compared to the greedy algorithm, though. If a configuration is worse at any point of the search, the branch is pruned. This leads us into how we evaluate each candidate keyboard. We can iterate over every key placement and sum the key pair delay multiplied by its frequency. This method will punish long delays for common keys. An additional benefit I hinted at before is that the search can quickly be pruned the moment the keyboard is less efficient than greedy because each key pair is additive to the total frequency × delay value.

There are a couple considerations to have in mind when beginning to create a keyboard. **First**, should the keyboard retain the symbol and control key positions like <kbd>.</kbd> and <kbd>enter</kbd>? Maybe the keys should be categorized and only move position within their regions. **Second**, should the full-sized QWERTY keyboard be optimized? This would include the <kbd>print screen</kbd> and <kbd>scroll lock</kbd> keys which are rapidly losing popularity. **Third**, how should the confidence in each average be handled? Every mean has an associated standard deviation, so there could be a basic tie-breaking rule that selects the lower variance.

**After some consideration, I decided that only optimizing the alphabet.**

---

The keyboard delay dataset only includes the characters:

```python
' ', '!', '?', "'", ',', '-', '.',
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
```

So, optimizing keys not included will be using typos. I don't think this will be too effective.

All of the code used for this project is included in the [GitHub repository](https://github.com/splch/fwuzix). I didn't include the original datasets, but did include the post-averaged keyboard delay dataset.
