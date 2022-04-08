---
title: Installing Manjaro Linux on Chromebook
date: 2021-12-06
categories:
tags:
  - Linux
draft: false
---

![Manjaro Linux](/images/manjaro.webp)

## 1. Enable Developer Mode

You'll need to hold the **escape** (esc) and **refresh** (⟳) keys together. While holding them, press the **power** button to turn on the Chromebook.

![Boo-Hoo ChromeOS](/images/chromeosDev.webp)

Chrome will get nervous and show this screen.

When you boot, you'll need to access the disabled verified boot with control and D (ctrl+d).

Now, press **enter** to turn OS verification off.

Once the Chromebook boots, shut it down.

## 2. Enable Debug Mode

You can do this by removing the battery. Modern chromebooks make this a little difficult, so here are the steps I took, if you need.

a. ![Flip the chromebook over](/images/manjaro1.webp)
b. ![Access the screws](/images/manjaro2.webp)
c. ![Prepare to remove screws](/images/manjaro3.webp)
d. ![Remove screws](/images/manjaro4.webp)
e. ![Begin to pry off case from the hinge](/images/manjaro5.webp)
f. ![Remove plate completely from small areas](/images/manjaro6.webp)
g. ![Find where the battery connects](/images/manjaro7.webp)
h. ![Disconnect the battery](/images/manjaro8.webp)

## 3. Disable Write Protection

You'll need to plug your Chromebook into its charger to power on.

> If you don't already have a [Manjaro image](https://manjaro.org/download/) flashed to a drive, do that now. You can use [chrome's extension](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm) for creating recovery media.

Boot into ChromeOS and load [crosh](chrome-untrusted://crosh) and type the following commands:

![Commands to disable write protection](/images/manjaro9.webp)
a. `shell`
b. `sudo sh`
c. `flashrom --wp-disable`
and confirm that it succeeded

If it succeeded, you can now reattach your battery and screw the plate back in place. If not… I'm sorry.

## 4. Use [mrchromebox](https://mrchromebox.tech/)'s script

Now that <abbr title="Write Protection">WP</abbr> is off, you can install a custom bootloader. Use mrchromebox's bootloader by following the instructions.

a. `cd; curl -LO mrchromebox.tech/firmware-util.sh`
b. `sudo install -Dt /usr/local/bin -m 755 firmware-util.sh`
c. `sudo firmware-util.sh`

You'll need to install the UEFI firmware. After that's done, make sure your computer is powered off.

## 5. Boot from Manjaro image

Plug the bootable media you flashed earlier into your chromebook and instruct the BIOS to boot from it.

## 6. Install Manjaro

Hopefully, you're all set up with a custom OS! The newer models of Chromebooks make it more tedious to <abbr title="modify">mod</abbr>, but it can still be done without buying any additional hardware. I created this tutorial because I wasn't able to purchase a [SuzyQable](https://www.sparkfun.com/products/retired/14746) and still wanted to disable WP. Enjoy your "[almost-arch](https://youtu.be/xmt96TTZAwc?t=2)" distribution!
