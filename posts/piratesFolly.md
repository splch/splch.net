---
title: Pirate's Folly
date: 12/13/2021
image: piratesFolly.webp
draft: true
---

The Raspberry Pi Pico inspired the release of the [Picosystem](https://shop.pimoroni.com/products/picosystem). I love working with limited hardware as a challenge to improve my programming. I've had my fair share of [6502 assembly](https://web.archive.org/web/20210903235021/https://www.romhacking.net/forum/index.php?topic=31892.0) for the <abbr title="Nintendo Entertainment System">NES</abbr> but recently enjoyed the new RP2040. The Picosystem uses the RP2040 to run games, so I just had to try it out!

I began development of Pirate's Folly, a procedurally generated game. I've laid the groundwork for terrain and item generation; however, enemy placement is still needed. _In the [GitHub repo](https://github.com/splch/pirates_folly), I have a list of completed and planned features._ The idea is a blend between One Piece, Minecraft, and No Man's Sky. The idea of pirates competing for treasure is such a great idea since pirates are the most unpredictable greedy and complex people! To lean on my CS (and not artistic) background, I used [Hugo Elias'](https://web.archive.org/web/20160303203643/http://freespace.virgin.net/hugo.elias/models/m_perlin.htm) procedural generation webpage for algorithm details. That enabled me to generate over a thousand square kilometers of terrain to explore. So, like Minecraft there is a vast world to explore, but I have a global seed (57) that will show the same world to everyone. The goal is to be able to share good locations for items or pirates.

I'll keep this page updated as I proceed. Currently, I'm wondering if I want to develop the game for GameBoy with the upcoming release of the [Analogue Pocket](https://www.analogue.co/pocket) and [GB Studio 3.0](https://www.gbstudio.dev/).
