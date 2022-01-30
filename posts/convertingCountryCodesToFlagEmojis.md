---
title: Converting Country Codes to Flag Emojis
date: 1/29/2022
image: stackAnswer.webp
draft: false
---

In a Flutter <abbr title="application">app</abbr> I started and eventually stopped working on, I was converting country codes to their corresponding flag <abbr title="絵文字">emoji</abbr>s in Dart. This was a fun problem to solve and it's actually my highest rated solution on [StackOverflow](https://stackoverflow.com/a/63961112), so I wanted to save it here!

---

```dart
String countryCode = 'us';
String flag = countryCode.toUpperCase().replaceAllMapped(RegExp(r'[A-Z]'),
     (match) => String.fromCharCode(match.group(0).codeUnitAt(0) + 127397));
print(flag);
```

1. `.toUpperCase()` Make all characters uppercase

   - us → US

2. `RegExp(r'[A-Z]')` Select each character with regex

3. `.replaceAllMapped()` Get each matched character

   - U
   - S

4. `.codeUnitAt(0)` Convert each character to a rune

   - 85
   - 83

5. <abbr title="127397 = 127462 (🇦's HTML code) - 65 (A's rune value).">`+ 127397`</abbr> Convert each rune to a [regional indicator symbol](https://en.wikipedia.org/wiki/Regional_indicator_symbol)

   - 85 + 127397 = 127482
   - 83 + 127397 = 127480

6. `.fromCharCode()` Convert the regional indicator symbols' values to a string (flag emoji)

   - 🇺 🇸 → 🇺🇸

---

I like this solution since each step is explained. It could be converted to any language easily, which should be the goal of any algorithm explanation.
