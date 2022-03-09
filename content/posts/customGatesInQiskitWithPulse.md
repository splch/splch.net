---
title: "Custom Gates in Qiskit with Pulse"
date: 2021-12-07T00:00:00-08:00
draft: false
---

Quantum research often requires applying operations in novel ways; however, it's occasionally necessary to create gates to reduce circuit length. If too many operations are applied to a qubit, the quantum state is lost and no valuable insight can be gained. The quantum compiler can optimize these steps, but having the ability to create custom microwave pulses to apply to qubits is valuable.

In this quick tutorial, we will compose a Hadamard pulse and apply it to a qubit through a circuit using Qiskit. That's quite a mouthful, but it's a lot nicer than it seems.

## Imports

```python
from qiskit import Aer, assemble, pulse, QuantumCircuit,\
                   schedule, transpile
from qiskit.circuit import Gate
from qiskit.providers.aer import PulseSimulator
from qiskit.providers.aer.pulse import PulseSystemModel
from qiskit.test import mock
from qiskit.pulse.library import Gaussian
from qiskit.visualization import plot_histogram
from qiskit.visualization.pulse_v2 import draw
import qiskit.tools.jupyter

# fake quantum computer we're using
backend = mock.FakeArmonk()
```

We need to import the necessary Qiskit modules, but one thing to note is the mock backend we're using. From `qiskit.test` we import `mock` and use its fake Armonk backend. This is a fake quantum computer that will simulate our code. Armonk also supports Qiskit Pulse and pulse simulations which we need. Waiting to run pulses on hardware can take a long time, so having a simulator is extremely helpful when prototyping quantum gates.

To begin our custom gate, we need to define a non-calibrated gate that we will later calibrate with a custom microwave pulse.

### Create a custom gate

```python
gate = Gate(name='hadamard', label='H', num_qubits=1, params=[])
```

We created a gate that will apply a pulse to one qubit. But the gate doesn't have a pulse yet. Let's fix that!

### Build pulse for custom gate

```python
# create a microwave pulse with a gaussian curve
with pulse.build(backend, name='hadamard') as gate_pulse:
    # custom pulse for this demo
    microwave = Gaussian(duration=310, amp=.36, sigma=80)
    pulse.play(microwave, pulse.drive_channel(0))

gate_pulse.draw()
```

![Hadamard Gaussian](images/pulseVisual1.webp)

Most waves can be parameterized by a gaussian shape in quantum computing. In Qiskit Pulse, we simply define the shape of the curve and set that microwave to a variable `gate_pulse`. This pulse can be changed in both shape and parameters. Qiskit also offers non-gaussian curves that can be used, though gaussian is most commonly seen.

The next step is to attach this microwave pulse to the custom gate we initialized.

### Use custom gate

```python
qc = QuantumCircuit(1, 1)

# append the custom gate
qc.append(gate, [0])
qc.measure(0, 0)

# define pulse of quantum gate
qc.add_calibration('hadamard', [0], gate_pulse)

qc.draw('mpl')
```

We can treat the gate normally when building circuits, but adding the pulse is different. Qiskit uses `add_calibration` to apply a custom pulse to a specific gate.

![Gate Circuit](images/pulseVisual2.webp)

We're now using a custom gate in a circuit, but let's confirm that this circuit is _actually_ applying the pulse we specified.

We can use Qiskit Pulse to transpile the circuit to pulses that would be directly run on the quantum computers.

## Convert the circuit back to a pulse

```python
# unnecessary with calibrated gates
qc_t = transpile(qc, backend)

qc_pulse = schedule(qc_t, backend)

draw(qc_pulse, backend=backend)
```

![Circuit Pulses](images/pulseVisual3.webp)

If you compare the microwave we defined above to this, you can see that it is indeed the same. Our circuit is now using a custom Hadamard gate! But let's not be too quick to celebrate.

Let's run one final test to see how the simulator handles custom pulses.

## Execute Circuit

```python
# create a pulse simulator and model
backend_sim = PulseSimulator(
    system_model=PulseSystemModel.from_backend(backend)
)

# prepare the pulse job
pulse_qobj = assemble(qc_pulse, backend=backend_sim)

# run the job on the backend
sim_result = backend_sim.run(pulse_qobj).result()
```

This method of simulating circuits is different from most tutorials you'll find. Since we're using a custom pulse, our simulator needs to be able to handle that. We use the `PulseSimulator` to handle this kind of circuit. I believe it's due to the normal simulator using matrices while this needs to handle microwaves, but I'm not sure.

```python
# plot circuit output
plot_histogram(sim_result.get_counts())
```

![Measurement Histogram](images/pulseVisual4.webp)

Success! As expected, the qubit is in a superposition between `$\ket{0}$` and `$\ket{1}$`. The near 50-50 distribution supports that… but what happens when you apply two of these pulses in succession? We'll tackle that at a later time, but if you want a head-start, check out the [Rabi experiment](https://qiskit.org/textbook/ch-quantum-hardware/calibrating-qubits-pulse.html). 😵‍💫

### Version Information

| Qiskit Software      | Version |
| -------------------- | ------: |
| qiskit-terra         |  0.19.1 |
| qiskit-aer           |   0.9.1 |
| qiskit-ignis         |   0.7.0 |
| qiskit-ibmq-provider |  0.18.2 |
| qiskit               |  0.33.1 |
