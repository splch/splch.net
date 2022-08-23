---
title: Quantum versus Avalanche Breakdown Randomness
date: 2021-12-08
image: onerng.webp
draft: false
---

Avalanche breakdown and quantum are two methods for generating true random numbers. Here, we'll compare them for feasibility and quality. The feasibility of a <abbr title="True Random Number Generator">TRNG</abbr> is how many bits per second it can produce while remaining random. And that leads us into quality which will be determined according to the NIST's [<abbr title="Statistical Test Suite">STS</abbr>](https://www.nist.gov/publications/statistical-test-suite-random-and-pseudorandom-number-generators-cryptographic). We'll also compare these methods against the computer's default RNG as a baseline.

I'm using the Arcetri Team's [implementation](https://github.com/arcetri/sts) of the STS. Building it just required running `make` in the repo.

We'll read around 100 <abbr title="Megabyte">MB</abbr> of random data to perform the tests on. STS defaults to measuring bitsreams of 1 megabit per iteration, so we'll run 800 iterations (8 bits = 1 byte).

A useful way to record the random numbers and the speed of their generation is with the [`dd`](<https://wikipedia.org/wiki/Dd_(Unix)>) command.

```shell
~# dd if=/path/to/random \
      of=/copy/of/random \
      bs=104857600 \
      count=1 \
      iflag=fullblock

104857600 bytes (105 MB, 100 MiB) copied, X.X s, X B/s
```

> I'm also saving the data and reports under a `reports` directory — so, create that if you need.

## Baseline

Reading from [random or urandom](https://linuxhint.com/dev_random_vs_dev_urandom/) seems to be a surprisingly controversial subject, but the only nearly-standard difference I found was that `urandom` (which stands for unblocked random) won't block read access when there isn't enough randomness while `random` will. I'm only looking at the best each method has to offer, so I'll be accessing `/dev/random` for this data.

```shell
~# dd if=/dev/random \
      of=reports/random \
      bs=104857600 \
      count=1 \
      iflag=fullblock

104857600 bytes (105 MB, 100 MiB) copied, 0.637875 s, 164 MB/s

~# ./sts -v 1 -i 800 -w reports/ -F r reports/random

Testing data from file: reports/random
Start of init phase
End of init phase

Start of iterate phase
End of iterate phase

Start of assess phase
End of assess phase

Start of destroy phase
End of destroy phase

Execution completed!
Check the random.txt file for the results
```

The collapsed details above summarize how many STS random tests the data passed. Running these tests on different data will change the results; however, we're testing 800 iterations of `$2^{20}=1,048,576$` bits, so the results are statistically significant.

This report is included in the zip linked in the conclusion along with the data used to derive the score.

<details>

<summary>Result: 187/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests) were conducted to evaluate the randomness of 800 bitstreams of 1048576 bits from:

    reports/random

---

The numerous empirical results of these tests were then interpreted with an examination of the proportion of sequences that pass a statistical test (proportion analysis) and the distribution of p-values to check for uniformity (uniformity analysis). The results were the following:

    187/188 tests passed successfully both the analyses.
    1/188 tests did not pass successfully both the analyses.

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

- 18/18 of the "Random Excursions Variant" tests passed both the analyses.

- The "Serial" (first) test passed both the analyses.
  The "Serial" (second) test passed both the analyses.

- The "Linear Complexity" test passed both the analyses.

---

</details>

To begin our comparison, we'll evaluate avalanche breakdown.

## Avalanche Breakdown

This step is unique since we need to initialize the avalanche device to be read as a bitstream on <abbr title="Unix / Linux">\*nix</abbr>.

```shell
~# dmesg | grep cdc_acm\ 1 | tail -1
cdc_acm 1-2.3.2.4.2.4:1.0: ttyACM0: USB ACM device
~# stty raw -echo </dev/ttyACM0 # put the tty device into raw mode
~# echo cmd0 >/dev/ttyACM0 # put the device into the avalanche/whitening mode
~# echo cmdO >/dev/ttyACM0 # turn on the feed to the USB
```

Running the command below should dim the <abbr title="Light-Emitting Diode">LED</abbr>, indicating a loss in entropy.

```shell
~# dd if=/dev/ttyACM0 \
      of=reports/avalanche \
      bs=104857600 \
      count=1 \
      iflag=fullblock

104857600 bytes (105 MB, 100 MiB) copied, 1829.86 s, 57.3 kB/s

~# ./sts -v 1 -i 800 -w reports/ -F r reports/avalanche

Testing data from file: reports/avalanche
Start of init phase
End of init phase

Start of iterate phase
End of iterate phase

Start of assess phase
End of assess phase

Start of destroy phase
End of destroy phase

Execution completed!
Check the avalanche.txt file for the results
```

<details>

<summary>Result: 183/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests) were conducted to evaluate the randomness of 800 bitstreams of 1048576 bits from:

    reports/avalanche

---

The numerous empirical results of these tests were then interpreted with an examination of the proportion of sequences that pass a statistical test (proportion analysis) and the distribution of p-values to check for uniformity (uniformity analysis). The results were the following:

    183/188 tests passed successfully both the analyses.
    5/188 tests did not pass successfully both the analyses.

---

Here are the results of the single tests:

- The "Frequency" test passed both the analyses.

- The "Block Frequency" test passed both the analyses.

- The "Cumulative Sums" (forward) test passed both the analyses.
  The "Cumulative Sums" (backward) test passed both the analyses.

- The "Runs" test passed both the analyses.

- The "Longest Run of Ones" test FAILED both the analyses.

- The "Binary Matrix Rank" test passed both the analyses.

- The "Discrete Fourier Transform" test passed both the analyses.

- 146/148 of the "Non-overlapping Template Matching" tests passed both the analyses.
  2/148 of the "Non-overlapping Template Matching" tests FAILED both the analyses.

- The "Overlapping Template Matching" test passed both the analyses.

- The "Maurer's Universal Statistical" test passed both the analyses.

- The "Approximate Entropy" test passed both the analyses.

- 8/8 of the "Random Excursions" tests passed both the analyses.

- 18/18 of the "Random Excursions Variant" tests passed both the analyses.

- The "Serial" (first) test FAILED both the analyses.
  The "Serial" (second) test FAILED both the analyses.

- The "Linear Complexity" test passed both the analyses.

---

</details>

## Quantum Computer

You can either collect your own quantum data or download dumps from [ANU](https://cloudstor.aarnet.edu.au/plus/s/9Ik6roa7ACFyWL4). For any reasonable length, just download a pre-collected dump which the bash code will help with.

### Code to Collect Data

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
~# # download 100 MB of quantum data from ANU
~# curl -o reports/.quantum \
        "https://cloudstor.aarnet.edu.au/plus/s/9Ik6roa7ACFyWL4/download?path=%2FANU_23Oct2017_5000MB&files=ANU_23Oct2017_100MB_1"

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  100M  100  100M    0     0  5587k      0  0:00:18  0:00:18 --:--:-- 6108k

~# ./sts -v 1 -i 800 -w ./reports/ -F r reports/quantum

Testing data from file: reports/quantum
Start of init phase
End of init phase

Start of iterate phase
End of iterate phase

Start of assess phase
End of assess phase

Start of destroy phase
End of destroy phase

Execution completed!
Check the quantum.txt file for the results
```

<details>

<summary>Results: 188/188</summary>

A total of 188 tests (some of the 15 tests actually consist of multiple sub-tests) were conducted to evaluate the randomness of 800 bitstreams of 1048576 bits from:

    reports/quantum

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

---

</details>

## Conclusion

Here's a summary of results.

| Type      | Randomness |                      Speed                       |
| --------- | :--------: | :----------------------------------------------: |
| Random    |  187/188   |                     164 MB/s                     |
| Avalanche |  183/188   |                    57.3 kB/s                     |
| Quantum   |  188/188   | [5.7 Gb/s](https://qrng.anu.edu.au/contact/faq/) |

The built-in random entropy is the most common source of random numbers, and is almost perfectly statistically random. Obviously, the computer is not truly random, but the [algorithms used](https://unix.stackexchange.com/a/324210) are made to score highly on these tests. For fast and affordable random numbers, built-in generators are the way to go, especially since they're constantly seeded with conditions surrounding the machine.

Avalanche diode breakdown has by far the slowest generation speed but boasts true random number generation. Interestingly, this generation scored the lowest in both randomness and speed, so the primary use-case for avalanche breakdown would be seeding the computer's built-in `random`. In that way, the computer will take entropy from the diode without depleting it and offering fast generation. When generating SSL certificates and private keys in general for websites, SSH, or even <abbr title="cryptocurrency">crypto</abbr> wallets, the risk of using pseudo-random numbers is too high, in my opinion. If what you're working on isn't worth ~$40.00, then use `random`, but if it's worth more than that, invest in a avalanche breakdown device. I spent $40.00 and picked up the [OneRNG V3](https://onerng.info/) pictured above.

Quantum random numbers are blisteringly fast and truly random. This will most likely be a huge use-case for quantum in the future. As crypto becomes more widespread on the internet, I'm sure companies or individuals will want true randomness for generating their keys. As of right now, though, they're simply too expensive to buy.

The best option for securely generating random numbers is to seed the computer's entropy with a source of true randomness. If this is something you were considering, know that despite the high 187 score that `random` achieved, it is not truly random, meaning the numbers will always be the same if the initial conditions are replicated. Depending on your use-case, that might be fine. For example, running a Monte Carlo simulation or initializing random weights to a neural network. But if you're working with sensitive information, a true source of random numbers, even just as a seed to the machine, is always safer.

If you'd like to confirm these results, you can [download](data/randomReports.zip) the random data and reports for each respective binary blob. As expected for random data, zip couldn't compress the three 100 MB files, so it is over 300 MB! Sadly I can't upload that to GitHub, so I'm uploading a 100 MB version instead. If you'd _really_ like the 300 MB version, email me and I'll send it over.

Based on the results from the smaller sample, it seems that the [Law of Large Numbers](https://wikipedia.org/wiki/Law_of_large_numbers) applies most to avalanche diode breakdown and least to the built-in pseudo-random number generator. Quantum in somewhere in the middle. This is only from a few tests though, so it's by no means as significant as the results from 800 tests.
