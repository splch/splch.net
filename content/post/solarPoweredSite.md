---
title: Efficient Solar-Powered Website
date: 2021-11-07
image: /images/zero2w.webp
categories:
  - Raspberry Pi
tags:
  - Linux
draft: false
---

After seeing [Kris' solar-powered website](https://solar.lowtechmagazine.com/), I decided I wanted my own to be the same. This conveniently followed the release of the Raspberry Pi Zero 2 <abbr title="Wireless">W</abbr>, a [low-power](https://hackaday.com/2021/11/01/the-pi-zero-2-w-is-the-most-efficient-pi/) <abbr title="System on a Chip">SoC</abbr>. I purchased this board since I doubt my website will warrant anything stronger than a Raspberry Pi and it enables solar-power with its small energy footprint.

There is a [thorough article](https://www.jeremymorgan.com/tutorials/raspberry-pi/raspberry-pi-web-server-comparison/) comparing servers' abilities handling different types of data; however, I opted to use Go's built-in web server. My primary reason is the ease of adding new features with Go is too much to trade for C's minor improvements.

The way my site works is it populates the initial HTML with markdown files. Instead of reloading an entire page, files are dynamically requested. Markdown rendering occurs on the client-side, reducing server usage past what an established framework currently offers (to my knowledge). If you'd like to check out how my site works, visit the [GitHub repo](https://github.com/splch/slc.is).

This isn't too big of a deal, though, because the Pi uses barely any energy. In fact, an average load only draws around 200 mA.

<details>
<summary>Solar Calculations</summary>

My house gets around 1,918 hours of [sunlight](https://sunroof.withgoogle.com/), so that's a ratio of $$\frac{1918 \; hours}{365.25 \; days \times 24 \; hours} \approx 0.22$$ usable hours of sunlight.

This means at a potential draw of 200 mA, the server would consume $$200 \; mA \times 24 \; hours = 4800 \; mAh$$ a day. In addition, with 22% or $$24 \; hours \times 0.22 \approx 5 \; hours$$ of usable daylight, the solar panels must capture $$\frac{4800 \; mAh}{5 \; hours} \approx 1000 \; \frac{mA}{hour}$$. This assumes 100% conversion rates. Good panels convert around 20% of the sunlight. This effectively means I need $$\frac{1 \; A}{0.2}=5 \; \frac{Amps}{hour}$$ from the panel.

The Raspberry Pi Foundation recommends a [5 Volt](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#raspberry-pi-zero-2-w) <abbr title="Power Supply Unit">PSU</abbr>, so, the watt hours is $$5 \; A \times 5 \; V = 25 \; W$$. With this requirement, the [BigBlue](https://www.amazon.com/dp/B01EXWCPLC/) panel seems like a good choice. It includes a USB port, so I won't need a separate regulator.

For the battery, I should get one that can handle the other 78% of unusable hours of light. This means more than $$200 \; mA \times 24 \; hours \times 0.78 = 3750 \; mAh$$ would suffice for a single day. Adding some wiggle room, I think [10,000 mAh](https://www.amazon.com/dp/B07FDXDB3W/) will be fine for a couple days of bad weather. I'll update this page later with uptime statistics, but entering winter makes for a rough time! 😅

> There were some great sales which is why I chose those two items specifically; and the whole setup only cost around $100 (not including internet fees).

</details>

The math above is a little disorganized since I used this write-up to figure it out; however, the calculator below will quickly determine your own solar needs from either your latitude or hours of the day, and voltage and current or wattage.

<iframe class="web" width="100%" frameborder="0" src="https://solarbattery.splch.repl.co"></iframe>

I definitely recommend giving the Raspberry Pi Zero 2 W a look. It's extremely energy-friendly and packs quite a punch. The power per watt is nothing to laugh at — with the new unified memory design, there's definitely an air of M1 about. Of course, at 512 Mb of <abbr title="Random-Access Memory">RAM</abbr> this won't be viable for some people, but it's a step in the right direction. If you're thinking about some hobby projects, keep sustainable tech in mind.

Hopefully this helps someone get the gear they need to host their solar sites! If you're able to read this article, then the <abbr title="Solar Server Pi">S.S. Pi</abbr> 🥧 is chuggin' along.
