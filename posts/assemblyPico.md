---
title: Assembly Neural Network on Pico
date: 9/28/2021
image: pico.webp
draft: false
---

I've been using the Raspberry Pi Foundation's products for almost a decade now, but they only recently released their [first microcontroller](https://www.raspberrypi.org/documentation/microcontrollers/raspberry-pi-pico.html). Their custom <abbr title="Raspberry Pi 2040">RP2040</abbr> has an ARM Cortex-M0+ chip that, obviously, uses ARM assembly. I've been wanting to learn assembly and this is definitely a great opportunity to do so.

> The goal is to code a very basic neural network in assembly.

I want to make a simple neural network, and luckily the Pico has a [multiplication](https://developer.arm.com/documentation/ddi0210/c/Introduction/Instruction-set-summary/Thumb-instruction-summary) instruction (unlike the 6502 processor). Additionally, [Stephen Smith](https://smist08.wordpress.com/2021/04/24/bit-banging-the-raspberry-pi-picos-gpio-registers/) and [Low Level Learning](https://www.youtube.com/watch?v=ZS_Cbmf3z-U) have already demonstrated assembly running directly on the Pico. I took both their tutorials and created a more fleshed out assembly setup.

This is going to be a bit of a challenge, but I'm looking forward to learning ARM assembly and pushing the Pico to its limits!

---

## Starter Code

<video controls loop muted preload="metadata" src="data/blink.mp4#t=0.25" width="100%">
</video>

In the collapsed files, I recreated the starter [_blink_](https://datasheets.raspberrypi.org/soft/blink.uf2) code in assembly.

<details>
<summary>View all files</summary>

`assembly.s`

```asm
.global main
.thumb_func @ use 16-bit instructions

@@@@@@@
.data @ constants and variables
@@@@@@@

gpiosetdiroutreg: .word 0xd0000024 @ address of gpio out register
gpiosetonreg: .word 0xd0000014     @ address of gpio on register
gpiosetoffreg: .word 0xd0000018    @ address of gpio off register

.equ led, 25         @ set led pin to 25
.equ gpio_out, 1     @ enable gpio output
.equ sleep_time, 250 @ sleep time in ms

@@@@@@@
.text @ program instructions
@@@@@@@

main:
    mov r0, #led
    bl gpio_init        @ initialize led pin

    mov r0, #led
    mov r1, #gpio_out
    bl gpiosetout       @ enable led

    b blink


blink:
    mov r0, #led
    bl gpio_on          @ turn on led

    ldr r0, =sleep_time
    bl sleep_ms         @ sleep for sleep_time ms

    mov r0, #led
    bl gpio_off         @ turn off led

    ldr r0, =sleep_time
    bl sleep_ms

    b blink             @ repeat to blink led


gpiosetout:
    movs r3, #1               @ set the output register to 1
    lsl r3, r0                @ shift to pin position
    ldr r2, =gpiosetdiroutreg @ get gpio out address
    ldr r2, [r2]
    str r3, [r2]
    bx lr


gpio_on:
    movs r3, #1
    lsl r3, r0
    ldr r2, =gpiosetonreg  @ get gpio on address
    ldr r2, [r2]
    str r3, [r2]
    bx lr


gpio_off:
    movs r3, #1
    lsl r3, r0
    ldr r2, =gpiosetoffreg @ get gpio off address
    ldr r2, [r2]
    str r3, [r2]
    bx lr

.end

```

`build.sh`

```shell
mkdir build
cd build/
cmake ..
make
cp assembly.uf2 /path/to/RPI-RP2/
```

`CMakeLists.txt and pico_sdk_import.cmake`

```txt
# CMakeLists.txt
cmake_minimum_required(VERSION 3.12)

# Pull in SDK (must be before project)
include(pico_sdk_import.cmake)

project(pico-asm C CXX ASM)
set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)

# Initialize the SDK
pico_sdk_init()

add_executable(pico-asm
        assembly.s
        )

# Pull in our pico_stdlib which aggregates commonly used features
target_link_libraries(pico-asm pico_stdlib)

# enable usb output, disable uart output
# pico_enable_stdio_usb(pico-asm 1)
# pico_enable_stdio_uart(pico-asm 0)

# create map/bin/hex/uf2 file etc.
pico_add_extra_outputs(pico-asm)

##########

# pico_sdk_import.cmake
# This is a copy of <PICO_SDK_PATH>/external/pico_sdk_import.cmake

# This can be dropped into an external project to help locate this SDK
# It should be include()ed prior to project()

if (DEFINED ENV{PICO_SDK_PATH} AND (NOT PICO_SDK_PATH))
    set(PICO_SDK_PATH $ENV{PICO_SDK_PATH})
    message("Using PICO_SDK_PATH from environment ('${PICO_SDK_PATH}')")
endif ()

if (DEFINED ENV{PICO_SDK_FETCH_FROM_GIT} AND (NOT PICO_SDK_FETCH_FROM_GIT))
    set(PICO_SDK_FETCH_FROM_GIT $ENV{PICO_SDK_FETCH_FROM_GIT})
    message("Using PICO_SDK_FETCH_FROM_GIT from environment ('${PICO_SDK_FETCH_FROM_GIT}')")
endif ()

if (DEFINED ENV{PICO_SDK_FETCH_FROM_GIT_PATH} AND (NOT PICO_SDK_FETCH_FROM_GIT_PATH))
    set(PICO_SDK_FETCH_FROM_GIT_PATH $ENV{PICO_SDK_FETCH_FROM_GIT_PATH})
    message("Using PICO_SDK_FETCH_FROM_GIT_PATH from environment ('${PICO_SDK_FETCH_FROM_GIT_PATH}')")
endif ()

set(PICO_SDK_PATH "${PICO_SDK_PATH}" CACHE PATH "Path to the Raspberry Pi Pico SDK")
set(PICO_SDK_FETCH_FROM_GIT "${PICO_SDK_FETCH_FROM_GIT}" CACHE BOOL "Set to ON to fetch copy of SDK from git if not otherwise locatable")
set(PICO_SDK_FETCH_FROM_GIT_PATH "${PICO_SDK_FETCH_FROM_GIT_PATH}" CACHE FILEPATH "location to download SDK")

if (NOT PICO_SDK_PATH)
    if (PICO_SDK_FETCH_FROM_GIT)
        include(FetchContent)
        set(FETCHCONTENT_BASE_DIR_SAVE ${FETCHCONTENT_BASE_DIR})
        if (PICO_SDK_FETCH_FROM_GIT_PATH)
            get_filename_component(FETCHCONTENT_BASE_DIR "${PICO_SDK_FETCH_FROM_GIT_PATH}" REALPATH BASE_DIR "${CMAKE_SOURCE_DIR}")
        endif ()
        FetchContent_Declare(
                pico_sdk
                GIT_REPOSITORY https://github.com/raspberrypi/pico-sdk
                GIT_TAG master
        )
        if (NOT pico_sdk)
            message("Downloading Raspberry Pi Pico SDK")
            FetchContent_Populate(pico_sdk)
            set(PICO_SDK_PATH ${pico_sdk_SOURCE_DIR})
        endif ()
        set(FETCHCONTENT_BASE_DIR ${FETCHCONTENT_BASE_DIR_SAVE})
    else ()
        message(FATAL_ERROR
                "SDK location was not specified. Please set PICO_SDK_PATH or set PICO_SDK_FETCH_FROM_GIT to on to fetch from git."
                )
    endif ()
endif ()

get_filename_component(PICO_SDK_PATH "${PICO_SDK_PATH}" REALPATH BASE_DIR "${CMAKE_BINARY_DIR}")
if (NOT EXISTS ${PICO_SDK_PATH})
    message(FATAL_ERROR "Directory '${PICO_SDK_PATH}' not found")
endif ()

set(PICO_SDK_INIT_CMAKE_FILE ${PICO_SDK_PATH}/pico_sdk_init.cmake)
if (NOT EXISTS ${PICO_SDK_INIT_CMAKE_FILE})
    message(FATAL_ERROR "Directory '${PICO_SDK_PATH}' does not appear to contain the Raspberry Pi Pico SDK")
endif ()

set(PICO_SDK_PATH ${PICO_SDK_PATH} CACHE PATH "Path to the Raspberry Pi Pico SDK" FORCE)

include(${PICO_SDK_INIT_CMAKE_FILE})

```

</details>

Ensure that you have [pico_sdk_import.cmake](https://raw.githubusercontent.com/raspberrypi/pico-examples/master/pico_sdk_import.cmake) and the `assembly.s` file in the `add_executable()` function.

---

## Neural Network

I trained an identical model on a dataset in Python and transferred over the weights and biases to the assembly <abbr title="Neural Network">NN</abbr>. I might attempt to implement back propagation in assembly in the future, but for now, I'll stick with a basic NN.

I used UCI's [Wine dataset](https://kaggle.com/uciml/red-wine-quality-cortez-et-al-2009) since it's popular and easily categorical. I preprocessed the data by dropping every column except *citric acid*, *volatile acidity*, and *quality*, and removing outlier data with a z-index greater than 3. Then I made all wines with a quality below 5 a **0**, and all wines above 7 a **1**. I used the remaining data to fit the nine tunable parameters (I really didn't have to worry about overfitting 😂) of the neural network and finally copied them into assembly. The file below will, with 82% accuracy, determine whether a wine is good or bad given its alcohol and salt contents.

<iframe class="container" width="100%" frameborder="0" src="https://replit.com/@splch/WineNet?lite=1"></iframe>

`assembly.s`

```asm
@ a neural network with two input nodes
@ a hidden layer with two nodes
@ and a single output node

.global main
.thumb_func @ use 16-bit instructions

.text       @ program instructions

main:
    ldr r0, =x
    ldr r1, =y

    bl neuron0
    bl neuron1

    bl output

    mov r0, r4    @ r4 is error code
    mov r1, #0x01 @ exit syscall
    swi 0         @ interrupt

neuron0:
    @ multiply input values by weights
    @ add bias to product and store
    @ the output in r2
    ldr r2, =x_0weight
    mul r2, r0, r2     @ multiply x by weight
    ldr r3, =y_0weight
    mul r3, r1, r3     @ multiply y by weight
    ldr r4, =n0_bias
    add r2, r2, r3
    add r2, r2, r4     @ add bias


neuron1:
    @ multiply input values by weights
    @ add bias to product and store
    @ the output in r3
    ldr r3, =x_1weight
    mul r3, r0, r3     @ multiply x by weight
    ldr r4, =y_1weight
    mul r4, r1, r4     @ multiply y by weight
    ldr r5, =n1_bias
    add r3, r3, r4
    add r3, r3, r5     @ add bias

output:
    @ multiply input values by weights
    @ add bias to product and store
    @ the output in r4
    ldr r4, =n0_weight
    mul r4, r2, r4       @ multiply n0 by weight
    ldr r5, =n1_weight
    mul r5, r3, r5       @ multiply n1 by weight
    ldr r6, =o0_bias
    add r4, r4, r5
    add r4, r4, r6       @ add bias

.data                    @ consts and vars

@ input data (good wine = 1, bad wine = 0)
@ below is a good wine
x: .word 0x39C2         @ alcohol (%)
y: .word 0x34F5         @ salt (g/dm^3)

@ neuron biases
n0_bias: .word 0x305A   @ bias for neuron 0
n1_bias: .word 0x307B   @ bias for neuron 1
o0_bias: .word 0xB10A   @ bias for output

@ neuron weights
x_0weight: .word 0x33E8 @ x weight for neuron 0
x_1weight: .word 0x3524 @ x weight for neuron 1
y_0weight: .word 0x3695 @ y weight for neuron 0
y_1weight: .word 0xB83C @ y weight for neuron 1
n0_weight: .word 0xB028 @ neuron 0 weight
n1_weight: .word 0x373F @ neuron 1 weight

.end

```
