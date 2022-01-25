---
title: Backyard Quantum Computer
date: 1/25/2022
image: quantumComputer.webp
draft: true
---

Quantum computers are still seen as science fiction, partially because their descriptions are shrouded by advanced physical phenomena in foreign environments. I'm involved in IBM's quantum group, Qiskit, and they use transmon qubits which need to be at nearly absolute zero to function as quantum bits. The physics that go into these systems are colder than the universe and uninviting to casually-curious learners. My goal in quantum is to lower that barrier of entry with my book [Quantum Tales](https://quantumtales.org) and hopefully this post.

Transmon qubits are great for companies since they are the currently seen as highly scalable, meaning many can be used together. This is necessary to gain the full power of quantum computing. Photons, on the other hand, are much more difficult to scale and consequently less used in business. Despite this, light gives us a peek into quantum mechanics and some fundamental processes of quantum computing. Specifically, superposition and interference, and consequently Bell's Inequality, can be literally seen using light. Another benefit of photons is that temperature has little to no impact on their quantum state. They can be in a star or your backyard and these little troopers will hold their state well. Given the resilient quantum states of photons, this post will explore if it's feasible to make a backyard quantum computer.

> If you're reading this post, then more than likely it is.

## Analysis

A [paper](https://doi.org/10.1364/OPTICA.424258) published by researchers at Stanford University presents a new photonic <abbr title="Quantum Computer">QC</abbr> design. Using this design along with Qiskit, my goal is to distill this paper and provide Ikea-level instructions on how to build and use a backyard QC! If you assemble each component, you should be able to understand and project that understanding to different quantum architectures.

The paper describes the quantum computer in three parts:

Qubits

> "Photonic qubits counterpropagate through a fiber storage ring, and optical switches can selectively direct photons through a scattering unit to interact with an atom in a cavity that is coherently controlled by a laser."

Atom

> "Energy structure of the atom: `$\Omega_1$` is resonant with the cavity mode and photon carrier frequency, while `$\Omega_0$` is far-detuned."

Measurement

> "Bloch sphere depiction of the state of a photonic qubit in the `$\left\{\ket{↻},\ket{↺}\right\}$` basis and an operation applied by one pass through the scattering unit. The rotations about `$\hat{z}$` by fixed angles (gray) are applied by the phase shifter and beam splitter, while the rotation about `$\hat{y}$` by a controllable angle `$\theta$` (solid red) is applied to the atom using the cavity laser. Projectively measuring the atom teleports this rotation onto the photon, but may overshoot the target angle `$θ$` by `$\pi$` (dotted red) depending on the measurement outcome `$m$`."

## Materials

1. (8) Fiber-Optic Cable
2. (3) Optical Switch
3. (2) Laser
4. (1) Scattering Unit
5. (1) Atom

## Construction



## Measurement


