---
title: Markdown Cheatsheet
date: 5/30/2020
image: notable.webp
draft: true
---

# Headings

---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

# Formatting

_Italic_
_Italic_
**Bold**
**Bold**
~~Strikethrough~~

---

# List

- Unordered list

* Unordered list

- Unordered list

* Nested
  - Unordered
  - List

1. Ordered list
1. Nested
   1. Ordered
   2. List

---

# Task

- [ ] Unchecked task

* [x] Checked task

- [ ] Nested
  - [x] Checked
  - [ ] Task

---

# Link

[Link](link)
[Link with Title](link "Title")
[Link by Reference][1]
[Implicit][]

[1]: link "Title"
[implicit]: implicit_link

---

# Auto-linking

https://example.com
<https://example.com>
name@example.com
<name@example.com>

---

# Image

![Image](favicon.svg)
![Image with Title](favicon.svg "Optional title")
![Image by Reference][2]

[2]: favicon.svg

---

# Quotation

> Quotation
>
> > Nested quotation

---

# Code

```markdown
Fenced code block
```

    Indented
    code by
    four spaces

<code>Code tags</code>

---

# Table

#### Regular

| Tables | Are | Great |
| ------ | --- | ----- |
| •      | •   | •     |
| •      | •   | •     |

#### Aligned

| Left | Center | Right |
| :--- | :----: | ----: |
| •    |   •    |     • |

---

# Separator

---

---

---

# Comment

<!-- This will not render -->

---

# External
## HTML

<iframe class="pdf" src="data/lighthouse.pdf#view=FitW" width="50%" height="50%"></iframe>

## Highlight

```python
def main():
	msg = "Hadamard Gate ="
	print(msg)

if __name__ == "__main__":
	main()
```

## Math

Block Style:
```
$$
\frac{1}{\sqrt{2}}
\begin{bmatrix}
 1 & 1 \\
 1 & -1
\end{bmatrix}
$$
```

Inline: `$i \hbar \frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat H \Psi(\mathbf{r},t)$`
