---
title: Efficient Solar-Powered Website
date: 11/6/2021
image: zero2w.webp
draft: false
---

After seeing [solar.lowtechmagazine.com](https://solar.lowtechmagazine.com/), I decided I wanted my website to be solar-powered as well. This conveniently followed the release of the Raspberry Pi Zero 2 <abbr title="Wireless">W</abbr>, a [low-power](https://hackaday.com/2021/11/01/the-pi-zero-2-w-is-the-most-efficient-pi/) <abbr title="System on a Chip">SoC</abbr>. I purchased this board since I doubt my website will warrant anything stronger than a Raspberry Pi and it enables solar-power with its small energy footprint.

There is a really [thorough article](https://www.jeremymorgan.com/tutorials/raspberry-pi/raspberry-pi-web-server-comparison/) comparing servers' abilities with handling different types of data; however, I opted to use Go's built-in web server. My primary reason is the ease in adding new features to my site that comes from Go is too much to trade for C's speed.

This isn't too big of a deal, though, because the Pi uses barely any energy. In fact, I'm assuming an average load only draws around 200 mA.

My house gets around 1,918 hours of [sunlight](https://sunroof.withgoogle.com/), so that's a ratio of `$\frac{1918 \; hours}{365.25 \; days \times 24 \; hours} \approx 0.22$` usable hours of sunlight.

This means at a potential draw of 200 mA, the server would consume `$200 \; mA \times 24 \; hours = 4800 \; mAh$` a day. In addition, with 22% or `$24 \; hours \times 0.22 \approx 5 \; hours$` of usable daylight, the solar panels must capture `$\frac{4800 \; mAh}{5 \; hours} \approx 1000 \; mAh$`. This assumes 100% conversion rates. Good panels convert around 20% of the sunlight. This effectively means I need `$\frac{1 \; Ah}{0.2}=5 \; Ah$` from the panel.

The Raspberry Pi Foundation recommends a 5 Volt <abbr title="Power Supply Unit">PSU</abbr>, so, the watt hours is `$5 \; Ah \times 5 \; V = 25 \; Wh$`. With this requirement, the [BigBlue](https://www.amazon.com/dp/B01EXWCPLC/) panel seems like a good choice. It includes a USB port, so I won't need to use a separate regulator.

For the battery, I should get one that can handle the other 78% of unusable hours of light. This means more than `$200 \; mA \times 24 \; hours \times 0.78 \approx 3750 \; mAh$` would suffice for a single day. Adding some wiggle room, I think [10,000 mAh](https://www.amazon.com/dp/B07FDXDB3W/) should fine for a couple days of bad weather. I'll update this page later with uptime statistics, but entering winter makes for a rough time on the website 😅

There were some great sales which is why I choose those two items specifically; and the whole setup only costs around $100 (not including internet fees).

Some might say I went too LaTeX-happy in this article… Also, note that I rounded up on energy requirements and down on hours of sunlight. Hopefully this buffer gives some more up-time hours.
