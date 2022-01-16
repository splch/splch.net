---
title: Pirate's Folly
date: 1/11/2022
image: piratesFolly1.webp, piratesFolly2.webp
draft: false
---

The Raspberry Pi Pico inspired the release of the [Picosystem](https://shop.pimoroni.com/products/picosystem). I love working with limited hardware as a challenge to improve my programming. I've had my fair share of [6502 assembly](https://www.romhacking.net/forum/index.php?topic=31892.0) for the <abbr title="Nintendo Entertainment System">NES</abbr> but recently enjoyed the new RP2040. The Picosystem uses the RP2040 to run games, so I just had to try it out!

I began development of Pirate's Folly, a procedurally generated game. I've laid the groundwork for terrain and item generation; however, enemy placement is still needed. _In the [GitHub repo](https://github.com/splch/pirates-folly), I have a list of completed and planned features._ The idea is a blend between One Piece, Minecraft, and No Man's Sky. Pirates competing for treasure is such an entertaining concept since pirates are the most unpredictable and greedy people! To lean on my CS (and not artistic) background, I used [Hugo Elias'](http://freespace.virgin.net/hugo.elias/models/m_perlin.htm) procedural generation webpage for algorithm details. His site is down, so you can view a [locally-served PDF](data/perlinNoise.pdf). That enabled me to generate over a thousand square kilometers of terrain to explore. So, like Minecraft there is a vast world to explore, but I have a global seed (57) that will show the same world to everyone. In that way, players can share good locations for items or pirates.

I'll keep this page updated as I proceed. Currently, I'm wondering if I want to develop the game for Game Boy with the upcoming release of the [Analogue Pocket](https://www.analogue.co/pocket) and [<abbr title="Game Boy">GB</abbr> Studio 3.0](https://www.gbstudio.dev/).

# Transition to Game Boy

<iframe class="gameboy" src="https://js-emulator.splch.repl.co/"></iframe>

Sadly, the Picosystem <abbr title="Software Development Kit
">SDK</abbr> stopped getting [updates](https://github.com/pimoroni/picosystem/commit/266c7d992b52f6b6af1c5c77f350bf010047ce0e) after the system release, so I decided to move the game to a more reliable console. Restraining the requirements further, I began using [GBDK-2020](https://github.com/gbdk-2020/gbdk-2020) to make a GB game!

I chose to use GBDK-2020 instead of GB Studio because I know how to program C and something like procedural-generation isn't nearly as common as side-scrolling games. When GB Studio abstracts away a lot of the programming aspects, they lower the barrier of entry while compromising expressability.

A lot of the code from the Picosystem could be reused for Game Boy; however, every 16-bit variable needed to be converted to 8-bit. In addition, float arithmetic isn't supported in GBDK (or on the GB's Z80 processor for that matter). These restrictions ultimately reduced the quality of map generation, but it should still be good enough for exploration.

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

| Procedure                 | % Self Cycles | Self Cycles | Invocations | Procedure Cycles       |
|---------------------------|:-------------:|-------------|-------------|------------------------|
| _set_bkg_tiles.set_xy_btt | 35.7%         | 8583616     | 1093        | 4712/8328/7855.0       |
| _shift_array_left         | 28.1%         | 6758400     | 1099        | 122880/122880/122880.0 |
| _shift_array_up           | 15.5%         | 3729880     | 55          | 67816/67816/67816.0    |
| _generate_side            | 6.3%          | 1517824     | 110         | 27580/64300/36587.0    |
| _is_removed               | 3.4%          | 808992      | 24          | 33700/33764/33708.0    |
| _terrain                  | 3.3%          | 802560      | 2090        | 560/600/564.8          |
| _generate_item            | 1.9%          | 450476      | 2090        | 180/316/247.5          |
| _display_map              | 1.1%          | 258812      | 1093        | 74028/158632/155520.5  |
| _LABEL_1C6_               | 1.0%          | 234612      | 343         | 684/684/684.0          |
| _interpolate_noise        | 0.9%          | 209000      | 2090        | 132/132/132.0          |
| _set_bkg_tiles            | 0.7%          | 174720      | 1093        | 4872/8488/8014.8       |
| _noise                    | 0.6%          | 133760      | 4180        | 32/32/32.0             |
| _LABEL_40_                | 0.5%          | 109500      | 343         | 1100/1112/1100.1       |
| _closest                  | 0.4%          | 101960      | 2090        | 44/84/48.8             |
| _update_position          | 0.2%          | 48840       | 63925       |                        |
| _generate_map_sides       | 0.1%          | 29920       | 1099        | 249008/317216/264414.0 |
| _LABEL_A4_                | 0.1%          | 20580       | 343         | 744/744/744.0          |
| _get_terrain              | 0.1%          | 19140       | 165         | 68/140/116.0           |
| 00106$                    | 0.1%          | 18040       | 62881       |                        |
| _LABEL_0_.call_hl         | 0.1%          | 12372       | 343         | 780/792/780.1          |
| _check_interactions       | 0.1%          | 12320       | 55          | 264/264/264.0          |
| _joypad                   | 0.0%          | 11000       | 55          | 200/200/200.0          |
| _adjust_position          | 0.0%          | 5940        | 55          |                        |
| _clock                    | 0.0%          | 2200        | 55          | 40/40/40.0             |
| _LABEL_48_.int            | 0.0%          | 260         | 1           | 1040/1040/1040.0       |
| _main                     | 0.0%          | 0           | 2082        |                        |
| _check_input              | 0.0%          | 0           | 2082        |                        |
