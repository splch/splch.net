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

The file might look something like:
```c
#include <stdio.h>

#define MAX_READ 5
#define FILE_NAME "random"

inline float binaryMean(char byte) {
	return (byte * 01001001001ULL & 042104210421ULL) 
		% 017 / 8.0;
}

int main(void) {
	FILE * stream = fopen(FILE_NAME, "r");
	
	for (unsigned long bytes = 1; bytes <= MAX_READ; bytes++) {
		char buffer[bytes];
		fread(&buffer, sizeof(char), bytes, stream);

		long double mean = 0;
		for (unsigned long i = 0; i < bytes; i++) {
			mean += binaryMean(buffer[i]);
		}
		
		printf("%lu\t:\t%Lf\n", bytes, mean / bytes);
	}
	
	fclose(stream);
  
	return 0;
}

```

## Analysis
