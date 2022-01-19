---
title: Degrees of Randomness and the Law of Large Numbers
date: 1/18/2022
image: https://upload.wikimedia.org/wikipedia/commons/c/c9/Lawoflargenumbers.svg
draft: true
---

In a previous post comparing quantum and avalanche diode methods of true random number generation, an interesting pattern emerged. The quantum random numbers would pass more STS tests than avalanche diode random numbers. Seemingly, the quantum RNG converges to a mean before the diode RNG.

This should not be the case since both methods produce true random numbers, so this post will be exploring if this is actually occurring and why.

## Code

We'll be using `C` to do this analysis since it's fast enough for the scale I need.

The first task will be opening a file of random data by variable amounts. The [`fread`](https://pubs.opengroup.org/onlinepubs/9699919799/functions/fread.html#tag_16_164) command takes a filename and number of bytes to read as arguments, so that'll work well.

Specifically, the file (let's call it `random`) needs to be read in incrementing amounts, so the code will look like this:
```c
#define MAX_READ 5
#define FILE_NAME "random"

…

FILE * stream = fopen(FILE_NAME, "r");

for (unsigned long bytes = 0; bytes < MAX_READ; bytes++) {
	char buffer[bytes];
	fread(&buffer, sizeof(char), bytes, stream);
}
```

This is storing some number of bytes in a buffer array. Now we can iterate through that array to determine the mean. Keep in mind that the theoretical mean is 0.5, so this is eventually going to compare the rates at which quantum and avalanche diode RNGs converge to the theoretical mean.

We're iterating through 8 bits at a time, so to find each binary mean, we'll count the number of ones in binary and divide by 8.

```c
inline float binaryMean(char byte) {
	// https://stackoverflow.com/a/698183
	return (byte * 01001001001ULL & 042104210421ULL) 
		% 017 / 8.0;
}
```

The remainder is just reading multiple files and parsing the data as a <abbr title="Comma-Separated Values">CSV</abbr>.

```c
#include <stdio.h>
#include <stdlib.h>
#define MAX_READ 10000

long double array[2][MAX_READ];

static inline float binaryMean(unsigned char byte) {
  return (byte * 01001001001ULL & 042104210421ULL) % 017 / 8.0;
}

void analyzeFile(const char *filename, const char filenum) {
  FILE *stream = fopen(filename, "r");

  for (unsigned long bytes = 1; bytes <= MAX_READ; bytes++) {
    char buffer[bytes];
    fread(&buffer, sizeof(char), bytes, stream);

    long double mean = 0;
    for (unsigned long i = 0; i < bytes; i++) {
      mean += binaryMean(buffer[i]);
    }

    array[filenum][bytes - 1] = mean / bytes;
  }

  fclose(stream);
}

int main() {
  analyzeFile("../../randomReports/quantum", 0);
  analyzeFile("../../randomReports/avalanche", 1);

  printf("Theoretical Mean,Quantum Mean,Avalanche Diode Mean\n");

  for (unsigned long line = 0; line < MAX_READ; line++)
    printf("0.5,%Lf,%Lf\n", array[0][line], array[1][line]);

  return 0;
}
```

The astute among us 🔴 will notice that I'm printing the data to stout; however, I'll actually pull a \*nix and piping the output to gnuplot.

```shell
gcc -c -o main.o main.c && gcc ./main.o -o main && ./main | (cat > /tmp/gnuplotdata.csv && trap 'rm /tmp/gnuplotdata.csv' EXIT && gnuplot -e "set terminal dumb;set title 'Quantum vs. Avalanche';set xlabel 'Average Length';set ylabel 'Average';set datafile separator ',';plot for [col=1:3] '/tmp/gnuplotdata.csv' using col with lines title columnheader")
```

That's *sus* but why have pipes if you never use them? Anyways, we can now begin comparing convergence.

## Analysis
