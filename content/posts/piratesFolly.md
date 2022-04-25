---
title: Pirate's Folly
date: 2022-01-11
categories:
  - Raspberry Pi
  - Retro
tags:
  - Game Boy
draft: false
---

The Raspberry Pi Pico inspired the release of the [Picosystem](https://shop.pimoroni.com/products/picosystem). I love working with limited hardware as a challenge to improve my programming. I've had my fair share of [6502 assembly](https://www.romhacking.net/forum/index.php?topic=31892.0) for the <abbr title="Nintendo Entertainment System">NES</abbr> but recently enjoyed the new RP2040. The Picosystem uses the RP2040 to run games, so I just had to try it out!

I began development of Pirate's Folly, a procedurally generated game. I've laid the groundwork for terrain and item generation; however, enemy placement is still needed. _In the [GitHub repo](https://github.com/splch/pirates-folly), I have a list of completed and planned features._ The idea is a blend between One Piece, Minecraft, and No Man's Sky. Pirates competing for treasure is such an entertaining concept since pirates are the most unpredictable and greedy people! To lean on my CS (and not artistic) background, I used [Hugo Elias'](http://freespace.virgin.net/hugo.elias/models/m_perlin.htm) procedural generation webpage for algorithm details. His site is down, so you can view a [locally-served PDF](/data/perlinNoise.pdf). That enabled me to generate over a thousand square kilometers of terrain to explore. So, like Minecraft there is a vast world to explore, but I have a global seed (57) that will show the same world to everyone. In that way, players can share good locations for items or pirates.

![PicoSystem](/images/piratesFolly2.webp)

I'll keep this page updated as I proceed. Currently, I'm wondering if I want to develop the game for Game Boy with the upcoming release of the [Analogue Pocket](https://www.analogue.co/pocket) and [<abbr title="Game Boy">GB</abbr> Studio 3.0](https://www.gbstudio.dev/).

# Transition to Game Boy

<iframe class="gameboy" allow="gamepad" src="/data/gb/"></iframe>

Sadly, the Picosystem <abbr title="Software Development Kit
">SDK</abbr> stopped getting [updates](https://github.com/pimoroni/picosystem/commit/266c7d992b52f6b6af1c5c77f350bf010047ce0e) after the system release, so I decided to move the game to a more reliable console. Restraining the requirements further, I began using [GBDK-2020](https://github.com/gbdk-2020/gbdk-2020) to make a GB game!

I chose to use GBDK-2020 instead of GB Studio because I know how to program C and something like procedural-generation isn't nearly as common as side-scrolling games. When GB Studio abstracts away a lot of the programming aspects, they lower the barrier of entry while compromising expressability.

A lot of the code from the Picosystem could be reused for Game Boy; however, every 16-bit variable needed to be converted to 8-bit. In addition, float arithmetic isn't supported in GBDK (or on the GB's Z80 processor for that matter). These restrictions ultimately reduced the quality of map generation, but it should still be good enough for exploration.

![Game Boy](/images/piratesFolly1.webp)

## Procedural Generation

After loads of trial and error, I found that the following formula works very well to provide fast and seeded noise.

```c
uint8_t noise(uint8_t x, uint8_t y) {
  // return random number [49, 201]
  // derived from perlin noise and 8-bit xorshift
  x ^= (y << 7);
  x ^= (x >> 5);
  y ^= (x << 3);
  y ^= (y >> 1);
  return x ^ y * SEED;
}
```

The formula took inspiration from Hugo Elias' tutorial, but is closer to [Michael Martin's xorshift post](https://bumbershootsoft.wordpress.com/2017/03/11/getting-a-decent-and-fast-prng-out-of-an-8-bit-chip/). The xorshifts I use differ from common xorshift algorithms in that the function doesn't use its previous output as the next input. Here, `noise` is a function of `x`, `y`, and `SEED`.

## Profiling

| Procedure                  | % Self Cycles | Self Cycles | Invocations | Procedure Cycles       |
| -------------------------- | :-----------: | ----------- | ----------- | ---------------------- |
| \_interpolate_noise        |     40.7%     | 100035660   | 12786       | 6036/8112/8111.8       |
| \_set_bkg_tiles.set_xy_btt |     21.6%     | 53069008    | 6732        | 4520/8328/7883.1       |
| \_shift_array_left         |     16.8%     | 41287680    | 6718        | 122880/122880/122880.0 |
| \_shift_array_up           |     9.3%      | 22786176    | 336         | 67816/67816/67816.0    |
| \_generate_side            |     3.8%      | 9259312     | 673         | 167776/189308/180029.8 |
| \_terrain                  |     2.0%      | 4909548     | 12786       | 6188/8540/8539.8       |
| \_noise                    |     1.5%      | 3784584     | 473073      | 8/8/8.0                |
| \_generate_item            |     1.1%      | 2608344     | 12786       | 212/212/212.0          |
| _LABEL_1C6_                |     1.0%      | 2394684     | 3501        | 684/684/684.0          |
| \_display_map              |     0.6%      | 1595432     | 6732        | 155176/158632/157505.6 |
| _LABEL_40_                 |     0.4%      | 1100820     | 3501        | 1100/1112/1100.0       |
| \_set_bkg_tiles            |     0.4%      | 1077088     | 6732        | 4680/8488/8043.1       |
| \_closest                  |     0.2%      | 562584      | 12786       | 44/44/44.0             |
| \_update_position          |     0.1%      | 298604      | 2212735     |                        |
| _LABEL_A4_                 |     0.1%      | 210060      | 3501        | 744/744/744.0          |
| \_generate_map_sides       |     0.1%      | 182872      | 6719        | 167864/551336/550198.1 |
| _LABEL_0_.call_hl          |     0.1%      | 126204      | 3501        | 780/792/780.0          |
| \_get_terrain              |     0.0%      | 117068      | 1009        | 68/140/116.0           |
| 00106$                     |     0.0%      | 110232      | 2206353     |                        |
| \_check_interactions       |     0.0%      | 75264       | 336         | 264/264/264.0          |
| \_joypad                   |     0.0%      | 67200       | 336         | 200/200/200.0          |
| \_adjust_position          |     0.0%      | 36396       | 337         |                        |
| _LABEL_48_.int             |     0.0%      | 19500       | 75          | 1040/1052/1040.2       |
| \_clock                    |     0.0%      | 13440       | 336         | 40/40/40.0             |
| \_main                     |     0.0%      | 0           | 12778       |                        |
| \_check_input              |     0.0%      | 0           | 12778       |                        |
