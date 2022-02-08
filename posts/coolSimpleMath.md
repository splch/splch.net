---
title: Cool Simple Math
date: 2/7/2022
image: templateImage.webp
draft: true
---

## Minimum and Maximum of Two Numbers

- Minimum:
	- `$min(a, b) = \frac{1}{2}(a+b-|a-b|)$`
- Maximum:
	- `$max(a, b) = \frac{1}{2}(a+b+|a-b|)$`

## Average

```c
unsigned average1(unsigned a, unsigned b)
{
    return (a + b) / 2;
}

// lw      $3,8($fp) # 
// lw      $2,12($fp) # 
// addu    $2,$3,$2 # 
// srl     $2,$2,1 # 
```

average1 has the shortest assembly but might overflow.

```c
unsigned average2(unsigned low, unsigned high)
{
    return low + (high - low) / 2;
}

// lw      $3,12($fp) # 
// lw      $2,8($fp) # 
// subu    $2,$3,$2 # 
// srl     $3,$2,1 # 
// lw      $2,8($fp) # 
// addu    $2,$3,$2 # 
```

average2 takes 6 

```c
unsigned average3(unsigned a, unsigned b)
{
    return (a / 2) + (b / 2) + (a & b & 1);
}

// lw      $2,8($fp) # 
// srl     $3,$2,1 # 
// lw      $2,12($fp) # 
// srl     $2,$2,1 # 
// addu    $3,$3,$2 # 
// lw      $4,8($fp) # 
// lw      $2,12($fp) # 
// and     $2,$4,$2 # 
// andi    $2,$2,0x1 # 
// addu    $2,$3,$2 # 
```

---

```c
unsigned average4(unsigned a, unsigned b)
{
    return (a & b) + (a ^ b) / 2;
}

// lw      $3,8($fp) # 
// lw      $2,12($fp) # 
// and     $3,$3,$2 # 
// lw      $4,8($fp) # 
// lw      $2,12($fp) # 
// xor     $2,$4,$2 # 
// srl     $2,$2,1 # 
// addu    $2,$3,$2 # 
```

## Sources

1. https://www.maa.org/sites/default/files/0746834259921.di020713.02p0009e.pdf
2. https://devblogs.microsoft.com/oldnewthing/20220207-00/?p=106223