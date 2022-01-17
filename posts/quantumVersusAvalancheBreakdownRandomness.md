---
title: Quantum versus Avalanche Breakdown Randomness
date: 1/16/2022
image: onerng.webp
draft: false
---

Avalanche breakdown and quantum are two methods for generating true random numbers. Here, we'll compare them for feasibility and quality. The feasibility of a <abbr title="True Random Number Generator">TRNG</abbr> is how many bits per second it can produce while remaining random. And that leads us into quality which will be determined according to the NIST's [<abbr title="Statistical Test Suite">STS</abbr>](https://www.nist.gov/publications/statistical-test-suite-random-and-pseudorandom-number-generators-cryptographic). We'll also compare these methods against the computer's default RNG as a baseline.

I'm using the Arcetri Team's [implementation](https://github.com/arcetri/sts) of the STS. Building it just required running `make` in the repo.

We'll read 1 <abbr title="Megabyte">Mb</abbr> of random data to perform the tests on. STS defaults to measuring bitsreams of length 1 Megabits per iteration, so we'll run 8 iterations (8 bits = 1 byte).

A useful way to record the random numbers and the speed of their generation is to use the [`dd`](<https://wikipedia.org/wiki/Dd_(Unix)>) command.

```shell
dd if=/path/to/random of=/copy/of/random bs=1048576 count=1 iflag=fullblock
```

> I'm also saving the data and reports under a `reports` directory — so, create that if you need.

## Baseline

```shell
~# dd if=/dev/random of=reports/random bs=1048576 count=1 iflag=fullblock

1048576 bytes (1.0 MB, 1.0 MiB) copied, 0.00697793 s, 150 MB/s

~# ./sts -v 1 -i 8 -I 1 -w reports/ -F r reports/random
```

<details>

<summary>Result: 168/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests)
were conducted to evaluate the randomness of 8 bitstreams of 1048576 bits from:

    reports/random

---

The numerous empirical results of these tests were then interpreted with
an examination of the proportion of sequences that pass a statistical test
(proportion analysis) and the distribution of p-values to check for uniformity
(uniformity analysis). The results were the following:

    168/188 tests passed successfully both the analyses.
    20/188 tests did not pass successfully both the analyses.

---

Here are the results of the single tests:

- The "Frequency" test passed both the analyses.

- The "Block Frequency" test passed both the analyses.

- The "Cumulative Sums" (forward) test passed both the analyses.
  The "Cumulative Sums" (backward) test passed both the analyses.

- The "Runs" test FAILED the proportion analysis.

- The "Longest Run of Ones" test passed both the analyses.

- The "Binary Matrix Rank" test FAILED the proportion analysis.

- The "Discrete Fourier Transform" test passed both the analyses.

- 131/148 of the "Non-overlapping Template Matching" tests passed both the analyses.
  17/148 of the "Non-overlapping Template Matching" tests FAILED the proportion analysis.

- The "Overlapping Template Matching" test passed both the analyses.

- The "Maurer's Universal Statistical" test passed both the analyses.

- The "Approximate Entropy" test passed both the analyses.

- 8/8 of the "Random Excursions" tests passed both the analyses.

- 18/18 of the "Random Excursions Variant" tests passed both the analyses.

- The "Serial" (first) test passed both the analyses.
  The "Serial" (second) test passed both the analyses.

- The "Linear Complexity" test FAILED the proportion analysis.

---

The missing tests (if any) were whether disabled manually by the user or disabled
at run time due to input size requirements not satisfied by this run.

</details>

To begin, we'll evaluate avalanche breakdown with the OneRNG.

## Avalanche Breakdown

```shell
~# dmesg | grep cdc_acm\ 1 | tail -1
cdc_acm 1-2.3.2.4.2.4:1.0: ttyACM0: USB ACM device
~# stty raw -echo </dev/ttyACM0 # put the tty device into raw mode (no echo, treat special like any other characters)
~# echo cmd0 >/dev/ttyACM0 # put the device into the avalanche/whitening mode
~# echo cmdO >/dev/ttyACM0 # turn on the feed to the USB
~# cat /dev/ttyACM0 >/dev/null # the led should dim as entropy is lost
```

```shell
~# dd if=/dev/ttyACM0 of=reports/avalanche bs=1048576 count=1 iflag=fullblock

1048576 bytes (1.0 MB, 1.0 MiB) copied, 18.25 s, 57.5 kB/s

~# ./sts -v 1 -i 8 -I 1 -w reports/ -F r reports/avalanche
```

<details>

<summary>Result: 175/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests)
were conducted to evaluate the randomness of 8 bitstreams of 1048576 bits from:

    reports/avalanche

---

The numerous empirical results of these tests were then interpreted with
an examination of the proportion of sequences that pass a statistical test
(proportion analysis) and the distribution of p-values to check for uniformity
(uniformity analysis). The results were the following:

    175/188 tests passed successfully both the analyses.
    13/188 tests did not pass successfully both the analyses.

---

Here are the results of the single tests:

- The "Frequency" test passed both the analyses.

- The "Block Frequency" test passed both the analyses.

- The "Cumulative Sums" (forward) test passed both the analyses.
  The "Cumulative Sums" (backward) test passed both the analyses.

- The "Runs" test passed both the analyses.

- The "Longest Run of Ones" test FAILED the proportion analysis.

- The "Binary Matrix Rank" test passed both the analyses.

- The "Discrete Fourier Transform" test passed both the analyses.

- 138/148 of the "Non-overlapping Template Matching" tests passed both the analyses.
  10/148 of the "Non-overlapping Template Matching" tests FAILED the proportion analysis.

- The "Overlapping Template Matching" test passed both the analyses.

- The "Maurer's Universal Statistical" test passed both the analyses.

- The "Approximate Entropy" test passed both the analyses.

- 8/8 of the "Random Excursions" tests passed both the analyses.

- 18/18 of the "Random Excursions Variant" tests passed both the analyses.

- The "Serial" (first) test FAILED the proportion analysis.
  The "Serial" (second) test FAILED the proportion analysis.

- The "Linear Complexity" test passed both the analyses.

---

The missing tests (if any) were whether disabled manually by the user or disabled
at run time due to input size requirements not satisfied by this run.

</details>

## Quantum Computer

```python
from requests import get
from tqdm import trange
from os import path

p = 'reports/quantum'

with open(p, 'ab') as f:
    for i in trange(int(2e6) - path.getsize(p)):
        bin_str = requests.get('https://qrng.anu.edu.au/wp-content/plugins/colours-plugin/get_one_binary.php').text
        b = int(bin_str, 2)
        f.write((b).to_bytes(1, byteorder='big'))
```

```shell
./sts -v 1 -i 8 -I 1 -w ./reports/ -F r reports/quantum
```

<details>

<summary>Results: 188/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests)
were conducted to evaluate the randomness of 8 bitstreams of 1048576 bits from:

    reports/quantum

---

The numerous empirical results of these tests were then interpreted with
an examination of the proportion of sequences that pass a statistical test
(proportion analysis) and the distribution of p-values to check for uniformity
(uniformity analysis). The results were the following:

    179/188 tests passed successfully both the analyses.
    9/188 tests did not pass successfully both the analyses.

---

Here are the results of the single tests:

- The "Frequency" test passed both the analyses.

- The "Block Frequency" test FAILED the proportion analysis.

- The "Cumulative Sums" (forward) test passed both the analyses.
  The "Cumulative Sums" (backward) test passed both the analyses.

- The "Runs" test passed both the analyses.

- The "Longest Run of Ones" test passed both the analyses.

- The "Binary Matrix Rank" test passed both the analyses.

- The "Discrete Fourier Transform" test passed both the analyses.

- 140/148 of the "Non-overlapping Template Matching" tests passed both the analyses.
  8/148 of the "Non-overlapping Template Matching" tests FAILED the proportion analysis.

- The "Overlapping Template Matching" test passed both the analyses.

- The "Maurer's Universal Statistical" test passed both the analyses.

- The "Approximate Entropy" test passed both the analyses.

- 8/8 of the "Random Excursions" tests passed both the analyses.

- 18/18 of the "Random Excursions Variant" tests passed both the analyses.

- The "Serial" (first) test passed both the analyses.
  The "Serial" (second) test passed both the analyses.

- The "Linear Complexity" test passed both the analyses.

---

The missing tests (if any) were whether disabled manually by the user or disabled
at run time due to input size requirements not satisfied by this run.

</details>

---

## Conclusion

Here's a summary of results.

| Type      | Randomness |   Speed   |
| --------- | :--------: | :-------: |
| Random    |  168/188   | 150 MB/s  |
| Avalanche |  175/188   | 57.5 kB/s |
| Quantum   |  179/188   | 5.7 Gb/s  |

The built-in _random_ entropy is the most common source of random numbers, yet has the lowest randomness. Avalanche diode breakdown has by far the slowest generation speed but boasts significantly more entropy than the computer's default. Quantum random numbers are blisteringly fast and truly random. Both avalanche and quantum methods should be equally random, but for this experiment, quantum outperformed avalanche in both speed and quality.

For low-security tasks, using the random number generator that's part of your computer is fine; however, for generating private keys or crypto currency wallets, having more randomness is necessary. Getting avalanche breakdown random number generation is easy to do. I spend $40.00 and picked up the [OneRNG V3](https://onerng.info/) pictured above. Quantum computers offer the most security and speed but are way too pricy.

If you'd like to confirm these results, you can [download](data/randomReports.zip) the random data and reports for each respective binary blob.
