---
title: Quantum versus Avalanche Breakdown Randomness
date: 12/8/2021
image: onerng.webp
draft: false
---

Avalanche breakdown and quantum are two methods for generating true random numbers. Here, we'll compare them for feasibility and quality. The feasibility of a <abbr title="True Random Number Generator">TRNG</abbr> is how many bits per second it can produce while remaining random. And that leads us into quality which will be determined according to the NIST's [<abbr title="Statistical Test Suite">STS</abbr>](https://www.nist.gov/publications/statistical-test-suite-random-and-pseudorandom-number-generators-cryptographic). We'll also compare these methods against the computer's default RNG as a baseline.

I'm using the Arcetri Team's [implementation](https://github.com/arcetri/sts) of the STS. Building it just required running `make` in the repo.

We'll read around 10 <abbr title="Megabytes">Mb</abbr> of random data to perform the tests on.

## Default

```shell
./sts -v 1 -i 76 -I 1 -w ./reports/ -F r /dev/random
```

<details>
<summary>Results: 184/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests) were conducted to evaluate the randomness of 76 bitstreams of 1048576 bits from:

    /dev/random

---

The numerous empirical results of these tests were then interpreted with an examination of the proportion of sequences that pass a statistical test (proportion analysis) and the distribution of p-values to check for uniformity (uniformity analysis). The results were the following:

    184/188 tests passed successfully both the analyses.
    4/188 tests did not pass successfully both the analyses.

---

Here are the results of the single tests:

- The "Frequency" test passed both the analyses.

- The "Block Frequency" test passed both the analyses.

- The "Cumulative Sums" (forward) test passed both the analyses.
  The "Cumulative Sums" (backward) test passed both the analyses.

- The "Runs" test passed both the analyses.

- The "Longest Run of Ones" test passed both the analyses.

- The "Binary Matrix Rank" test passed both the analyses.

- The "Discrete Fourier Transform" test passed both the analyses.

- 147/148 of the "Non-overlapping Template Matching" tests passed both the analyses.
  1/148 of the "Non-overlapping Template Matching" tests FAILED the proportion analysis.

- The "Overlapping Template Matching" test passed both the analyses.

- The "Maurer's Universal Statistical" test passed both the analyses.

- The "Approximate Entropy" test passed both the analyses.

- 8/8 of the "Random Excursions" tests passed both the analyses.

- 15/18 of the "Random Excursions Variant" tests passed both the analyses.
  3/18 of the "Random Excursions Variant" tests FAILED the proportion analysis.

- The "Serial" (first) test passed both the analyses.
  The "Serial" (second) test passed both the analyses.

- The "Linear Complexity" test passed both the analyses.

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
./sts -v 1 -i 76 -I 1 -w ./reports/ -F r /dev/ttyACM0
```

<details>
<summary>Results: 186/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests) were conducted to evaluate the randomness of 76 bitstreams of 1048576 bits from:

    /dev/ttyACM0

---

The numerous empirical results of these tests were then interpreted with an examination of the proportion of sequences that pass a statistical test (proportion analysis) and the distribution of p-values to check for uniformity (uniformity analysis). The results were the following:

    186/188 tests passed successfully both the analyses.
    2/188 tests did not pass successfully both the analyses.

---

Here are the results of the single tests:

- The "Frequency" test passed both the analyses.

- The "Block Frequency" test passed both the analyses.

- The "Cumulative Sums" (forward) test passed both the analyses.
  The "Cumulative Sums" (backward) test passed both the analyses.

- The "Runs" test passed both the analyses.

- The "Longest Run of Ones" test passed both the analyses.

- The "Binary Matrix Rank" test passed both the analyses.

- The "Discrete Fourier Transform" test passed both the analyses.

- 148/148 of the "Non-overlapping Template Matching" tests passed both the analyses.

- The "Overlapping Template Matching" test passed both the analyses.

- The "Maurer's Universal Statistical" test passed both the analyses.

- The "Approximate Entropy" test passed both the analyses.

- 8/8 of the "Random Excursions" tests passed both the analyses.

- 18/18 of the "Random Excursions Variant" tests passed both the analyses.

- The "Serial" (first) test FAILED both the analyses.
  The "Serial" (second) test FAILED both the analyses.

- The "Linear Complexity" test passed both the analyses.

</details>

## Quantum Computer

```python
from requests import get
from tqdm import trange
from os import path

p = '/tmp/quantum'

with open(p, 'ab') as f:
    for i in trange(int(1e7) - path.getsize(p)):
        bin_str = requests.get('https://qrng.anu.edu.au/wp-content/plugins/colours-plugin/get_one_binary.php').text
        b = int(bin_str, 2)
        f.write((b).to_bytes(1, byteorder='big'))
```

```shell
./sts -v 1 -i 76 -I 1 -w ./reports/ -F r /tmp/quantum
```

<details>
<summary>Results: 188/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests) were conducted to evaluate the randomness of 76 bitstreams of 1048576 bits from:

    /tmp/quantum

---

The numerous empirical results of these tests were then interpreted with an examination of the proportion of sequences that pass a statistical test (proportion analysis) and the distribution of p-values to check for uniformity (uniformity analysis). The results were the following:

    188/188 tests passed successfully both the analyses.
    0/188 tests did not pass successfully both the analyses.

---

Here are the results of the single tests:

- The "Frequency" test passed both the analyses.

- The "Block Frequency" test passed both the analyses.

- The "Cumulative Sums" (forward) test passed both the analyses.
  The "Cumulative Sums" (backward) test passed both the analyses.

- The "Runs" test passed both the analyses.

- The "Longest Run of Ones" test passed both the analyses.

- The "Binary Matrix Rank" test passed both the analyses.

- The "Discrete Fourier Transform" test passed both the analyses.

- 148/148 of the "Non-overlapping Template Matching" tests passed both the analyses.

- The "Overlapping Template Matching" test passed both the analyses.

- The "Maurer's Universal Statistical" test passed both the analyses.

- The "Approximate Entropy" test passed both the analyses.

- 8/8 of the "Random Excursions" tests passed both the analyses.

- 18/18 of the "Random Excursions Variant" tests passed both the analyses.

- The "Serial" (first) test passed both the analyses.
  The "Serial" (second) test passed both the analyses.

- The "Linear Complexity" test passed both the analyses.

</details>

---

## Conclusion

| Type      | Randomness |   Speed   |
|-----------|:----------:|:---------:|
| Default   |   184/188  | 51.3 kB/s |
| Avalanche |   185/188  | 58.3 kB/s |
| Quantum   |   188/188  |  1.8 kB/s |
