---
title: Pirate's Folly
date: 12/13/2021
image: piratesFolly1.webp, piratesFolly2.webp
draft: false
---

The Raspberry Pi Pico inspired the release of the [Picosystem](https://shop.pimoroni.com/products/picosystem). I love working with limited hardware as a challenge to improve my programming. I've had my fair share of [6502 assembly](https://web.archive.org/web/20210903235021/https://www.romhacking.net/forum/index.php?topic=31892.0) for the <abbr title="Nintendo Entertainment System">NES</abbr> but recently enjoyed the new RP2040. The Picosystem uses the RP2040 to run games, so I just had to try it out!

I began development of Pirate's Folly, a procedurally generated game. I've laid the groundwork for terrain and item generation; however, enemy placement is still needed. _In the [GitHub repo](https://github.com/splch/pirates-folly), I have a list of completed and planned features._ The idea is a blend between One Piece, Minecraft, and No Man's Sky. Pirates competing for treasure is such an entertaining concept since pirates are the most unpredictable and greedy people! To lean on my CS (and not artistic) background, I used [Hugo Elias'](https://web.archive.org/web/20160303203643/http://freespace.virgin.net/hugo.elias/models/m_perlin.htm) procedural generation webpage for algorithm details. That enabled me to generate over a thousand square kilometers of terrain to explore. So, like Minecraft there is a vast world to explore, but I have a global seed (57) that will show the same world to everyone. In that way, players can share good locations for items or pirates.

I'll keep this page updated as I proceed. Currently, I'm wondering if I want to develop the game for <abbr title="Game Boy">GB</abbr> with the upcoming release of the [Analogue Pocket](https://www.analogue.co/pocket) and [GB Studio 3.0](https://www.gbstudio.dev/).

# Transition to Game Boy

Sadly, the Picosystem <abbr title="Software Development Kit
">SDK</abbr> stopped getting [updates](https://github.com/pimoroni/picosystem/commit/266c7d992b52f6b6af1c5c77f350bf010047ce0e) after the system release, so I decided to move the game to a more reliable console. Restraining the requirements further, I began using [GBDK-2020](https://github.com/gbdk-2020/gbdk-2020) to make a GB game!

I chose to use GBDK-2020 instead of GB Studio because I know how to program C and something like procedural-generation isn't nearly as common as side-scrolling games. When GB Studio abstracts away a lot of the programming aspects, they lower the barrier of entry while compromising expressability.

A lot of the code from the Picosystem could be reused for Game Boy; however, every 16-bit variable needed to be converted to 8-bit. In addition, float arithmetic isn't supported in GBDK (or on the GB's Z80 processor for that matter). These restrictions ultimately reduced the quality of map generation, but it should still be good enough for exploration.

## Procedural Generation

After loads of trial and error, I found that the following formula works very well to provide fast and seeded noise.

```c
uint8_t noise(uint8_t x, uint8_t y) {
  // return random number [49, 201]
  // prng comes from a combination of perlin noise and 8-bit xorshift
  x ^= (y << 7);
  x ^= (x >> 5);
  y ^= (x << 3);
  y ^= (y >> 1);
  return x ^ y * SEED;
}
```

The formula took inspiration from Hugo Elias' tutorial, but is closer to [Michael Martin's xorshift post](https://bumbershootsoft.wordpress.com/2017/03/11/getting-a-decent-and-fast-prng-out-of-an-8-bit-chip/). The xorshifts I use differ from common xorshift algorithms in that the function doesn't use its previous output as the next input. Here, `noise` is a function of `x`, `y`, and `SEED`.
