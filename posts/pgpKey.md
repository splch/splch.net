---
title: Generating a PGP Key
date: 2022-03-23
image: pgp.webp
draft: false
---

This is an extreme guide to generating a PGP key. A simple tutorial will suffice; however, this will help generate the most secure key possible.

# Quantum Background

The NIST compared the [security of RSA and ECC keys](https://csrc.nist.gov/CSRC/media/Presentations/NIST-Status-Update-on-Elliptic-Curves-and-Post-Qua/images-media/moody-dustin-threshold-crypto-workshop-March-2019.pdf) and concluded that, with sufficient lengths in key complexity, either standard will suffice.

Shor's algorithm factors coprime numbers, thus is able to recreate the private key to any RSA-generated public key. This NIST paper, however, asserts that Grover's algorithm can be used to recreate the private key to any ECC-generated public key. While true, this is the same as a brute-force solution since Grover's search would still need `$\sqrt{N}$` qubits to find the private key. Shor's algorithm has a complexity of around `$O(\log{(N)}^3)$` while Grover's has a complexity of `$O(\sqrt{N})$`.

Considering the difference in algorithmic complexity between Shor's and Grover's algorithms, Shor's poses a more significant threat to RSA encryption than Grover's does to Ed25519. Because of this, I recommend using Ed25519 for a PGP key pair. There are some unsupported theories that elliptic curve cryptography is not secure, but no evidence has been provided for this whatsoever.

# Truly Random Key Seeds

Since this post is already looking ahead many decades, the next recommendation will be seeding more entropy into the PRNG that is used to generate the PGP key pair. The elliptic curve generation will pick a random slope for a line to intersect the elliptic curve.

![https://www.desmos.com/calculator/hhqdcaiv7p](images/ecc.webp)

In theory, unless your computer is using a truly random source of entropy, the slope of the line could be rederived and the private key could be recreated. This is absurdly unlikely, but the solution is easily implemented, and the time it takes to generate the private key is negligible considering the duration you'll use the key.

Using a true random source of entropy could be counting the number of times a geiger counter clicks in a given time frame, or using a hardware random source of entropy like the [OneRNG V3](https://onerng.info/). I already have a OneRNG USB, so I'll seed my random numbers with that.

# Generating a PGP Key Pair

First, install [GnuPG](https://gnupg.org/). This is a free software that can be used to generate PGP keys. It's best to use an open source and offline tool to generate keys since websites and servers could use a variety of methods to store or recreate your private key. Additionally, using a device you know is secure and private is a necessity. A simple way to handle trust is to use a live USB, then assume that there's no hardware-level surveillance on your device.

On the download page, it supports common operating systems like Windows, MacOS, and Linux, as well as other platforms.

## Seed the PRNG

Find what entropy source GnuPG uses on your operating system. On Linux and MacOS, for example, it's `/dev/random`. To add entropy to the PRNG, use something like the following command:

```shell
rngd -r /path/to/true/randomness
```

## Run GnuPG

Once you have installed GnuPG, run `gpg --full-generate-key` to generate a key pair.

```shell
~$ gpg --full-generate-key
gpg (GnuPG) 2.3.4; Copyright (C) 2021 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card
Your selection? 9
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
   (4) NIST P-384
   (6) Brainpool P-256
Your selection? 1
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 0
Key does not expire at all
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: name
Email address: name@example.org
Comment: hello, world
You selected this USER-ID:
    "name (hello, world) <name@example.org>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: directory '~/name/.gnupg/openpgp-revocs.d' created
gpg: revocation certificate stored as '~/name/.gnupg/openpgp-revocs.d/ABCDEFGHIJKLMNOPQRSTUVWXYANDZ01223456789.rev'
public and secret key created and signed.

pub   ed25519 2022-03-24 [SC]
      ABCDEFGHIJKLMNOPQRSTUVWXYANDZ01223456789
uid                      name (hello, world) <name@example.org>
sub   cv25519 2022-03-24 [E]
```

It's reassuring to see that the recommended settings are what we decided on too! Before moving on, confirm that you now have a PGP key pair. Run `--list-keys` to view the generated key information.

```shell
~$ gpg --list-keys
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
~/name/.gnupg/pubring.kbx
--------------------------------
pub   ed25519 2022-03-24 [SC]
      ABCDEFGHIJKLMNOPQRSTUVWXYANDZ01223456789
uid           [ultimate] name (hello, world) <name@example.org>
sub   cv25519 2022-03-24 [E]
```

The `KEY-ID` is the 40 character long fingerprint for the key pair. That ID will be used to specify the key when using it.

# Distributing your **public** key

You might've seen people link their public key when sharing their email or other contact services. You can distribute your public key in any way you'd like, but a good way to do this is to use a PGP key server.

There are a few key servers out there, but the most popular are:

1. pgp.mit.edu
2. keyserver.ubuntu.com
3. keybase.io
4. keys.openpgp.org
5. keys.mailvelope.com

> Key servers use pooling to distribute keys, so you can tend to upload a key once and have it distributed to many people.

By running `gpg --send-keys` on your key pair, you can export your public key.

```shell
gpg --send-keys ABCDEFGHIJKLMNOPQRSTUVWXYANDZ01223456789
```

This will export your public key to [keys.openpgp.org](https://keys.openpgp.org/). The other sites also have an upload pages, so feel free to upload there as well.

To easily copy your public key, you can use `gpg --export --armor`. The `--armor` flag will export the key in ASCII armored format.

```shell
~$ gpg --export --armor ABCDEFGHIJKLMNOPQRSTUVWXYANDZ01223456789

-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEYkAMlhYJKwYBBAHaRw8BAQdAija76hmp8YHmr0zHw+Qv1nMNsrqcsRQW
cqSlqOEoHCrNHVNwZW5jZXIgQ2h1cmNoaWxsIDxtZUBzbGMuaXM+wqoEExYK
ADsWIQQQICP7jXDvYysbVVUKmHynkTkZlQUCYkAMlgIbAwULCQgHAgMiAgEG
FQoJCAsCAxYCAQIeBwIXgAAhCRAKmHynkTkZlRYhBBAgI/uNcO9jKxtVVQqY
fKeRORmVyFAA/3tWetkYc5XKA8yDYyAeZk8cI0Cy7+1Afm/p2mQQnzXvAQCq
QzdsI4owKGbHudz/DKsVKkWDCZ1yfg0FRq52qMnGAM0jU3BlbmNlciBDaHVy
Y2hpbGwgPHNwZW5jZUBkdWNrLmNvbT7CqgQTFgoAOxYhBBAgI/uNcO9jKxtV
VQqYfKeRORmVBQJiQBKFAhsDBQsJCAcCAyICAQYVCgkICwIDFgIBAh4HAheA
ACEJEAqYfKeRORmVFiEEECAj+41w72MrG1VVCph8p5E5GZX5vwEAlCwXoyAp
3bjz6x+rH1N7lqB/oIW4uPwc2bEKu43+POQA/1iqNPNTHjNsewlF19pGLljA
xn946DQzWw02ulFqz5sKzjgEYkAMlhIKKwYBBAGXVQEFAQEHQNfziQppiMhw
ieGfPpIMopxsvTe/scnI6G7WhoMUPbNEAwEIB8KPBBgWCgAgFiEEECAj+41w
72MrG1VVCph8p5E5GZUFAmJADJYCGwwAIQkQCph8p5E5GZUWIQQQICP7jXDv
YysbVVUKmHynkTkZlf+MAQCQByuimb5r1gEPoPQ0+dg0GQP16WYE/EF4WhC3
kJ8QuQD+OW350m6xUU9djl7gmlnBeoNZB7EyoPuGs301bL1v6A8=
=QfAK
-----END PGP PUBLIC KEY BLOCK-----
```

## Encrypting and Decrypting Data

To encrypt, run `--encrypt`.

```shell
gpg --encrypt --recipient ABCDEFGHIJKLMNOPQRSTUVWXYANDZ01223456789 /path/to/file
```

That will output a file named `/path/to/file.gpg`. Only you can decrypt that file with your private key. To do that use `--decrypt`.

```shell
gpg --decrypt --recipient ABCDEFGHIJKLMNOPQRSTUVWXYANDZ01223456789 /path/to/file.gpg > /path/to/file
```

# Backing up your private key

To backup your private key, run `--export-secret-keys`.

```shell
~$ gpg --export-secret-key --armor ABCDEFGHIJKLMNOPQRSTUVWXYANDZ01223456789

-----BEGIN PGP PRIVATE KEY BLOCK-----

lFgEYjw1xhYJKwYBBAHaRw8BAQdAwl9GSoOR4E7wUpe1A+Evd+ViiavBUvpvw4nf
JLVtm3EAAQCTHWqtqmI1D6ODctaR3UGOLLsGZjUe1WTPP5BDQkVC9w5DtCZuYW1l
ciAoaGVsbG8sIHdvcmwpIDxuYW1lQGV4YW1wbGUuY29tPoiUBBMWCgA8FiEE6Vs9
vE0RXucZDtSi9KkIHalB430FAmI8NcYCGwMFCwkIBwIDIgIBBhUKCQgLAgQWAgMB
Ah4HAheAAAoJEPSpCB2pQeN967EBANgog1cMEPpNYjXTZzSiOFSK4BmlwV1vghTB
0xq7cLv4APsEmzZK8djumlIAD1Ur0/tgoXVk3Mt6TFibmOpMec2IA5xdBGI8NcYS
CisGAQQBl1UBBQEBB0BAsR6gXGOwPgWrfmltMAh7EIZ5J8GYE206qsVhwXzhdgMB
CAcAAP9G0xraBqKnhlP5pkjuaxl/qOS+5m4NtJZm4YeJ/o91qBMCiHgEGBYKACAW
IQTpWz28TRFe5xkO1KL0qQgdqUHjfQUCYjw1xgIbDAAKCRD0qQgdqUHjfR1RAP9R
Lm53gMSLaAAyonnsV49TSK8Lunv9ochw4LlmDc0/wQD8CUO687SXXpAVrJCvcbqu
aXfYuB1XxWxcgI5phcv/VAw=
=LAxH
-----END PGP PRIVATE KEY BLOCK-----
```

Again, you can pipe this into a file or copy it into a notebook.

# Conclusion

PGP key generation can be as simple (from generating and managing keys from within Mailvelope) to as complex as you'd like. The benefit with more engaged generation is you only need to do it once. After the first time, you can use the same key for any communication. I hope this tutorial is helpful in getting started with or improving your PGP keys.
