---
title: Assembly Neural Network on Pico
date: 9/10/2021
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

<details>
<summary>Model Training</summary>

# Small Wine Neural Network

## Imports and Setup


```python
import pandas as pd
from scipy import stats
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import confusion_matrix, classification_report

import torch
from torch.utils.data import Dataset, DataLoader
import torch.nn as nn
import torch.optim as optim

import seaborn as sns
import matplotlib.pyplot as plt
```


```python
def plot(t_losses, t_accuracies):
    fig, axs = plt.subplots(1)

    ax1 = axs
    color = 'tab:red'
    ax1.set_xlabel('training steps')
    ax1.set_ylabel('loss', color=color)
    ax1.plot(range(len(t_losses)), t_losses, color=color)
    ax1.tick_params(axis='y', labelcolor=color)

    ax2 = ax1.twinx()

    color = 'tab:blue'
    ax2.set_ylabel('accuracy', color=color)
    ax2.plot(range(len(t_accuracies)), t_accuracies, color=color)
    ax2.tick_params(axis='y', labelcolor=color)

    fig.tight_layout()
    plt.show()
```

## Data Preprocessing


```python
white_wine = pd.read_csv('winequality-white.csv')
red_wine = pd.read_csv('winequality-red.csv')

wine = white_wine.append(red_wine, ignore_index=True)

include = ['alcohol', 'chlorides', 'quality']

wine = wine[include]

wine = wine[(np.abs(stats.zscore(wine)) < 3).all(axis=1)].reset_index(drop=True)

wine[include[2]] = wine[include[2]].map(
    lambda quality: 1 if quality in [8, 9] else (0 if quality in [3, 4] else -1)
)

wine = wine[wine[include[2]] != -1]

wine[include[:2]] -= np.mean(wine[include[:2]])
```

## 1. Data exploration


```python
wine
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>alcohol</th>
      <th>chlorides</th>
      <th>quality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>17</th>
      <td>1.901724</td>
      <td>-0.01986</td>
      <td>1</td>
    </tr>
    <tr>
      <th>20</th>
      <td>1.901724</td>
      <td>-0.01986</td>
      <td>1</td>
    </tr>
    <tr>
      <th>22</th>
      <td>-0.398276</td>
      <td>0.00014</td>
      <td>1</td>
    </tr>
    <tr>
      <th>44</th>
      <td>-1.098276</td>
      <td>0.01414</td>
      <td>0</td>
    </tr>
    <tr>
      <th>66</th>
      <td>-0.198276</td>
      <td>-0.00286</td>
      <td>1</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>6240</th>
      <td>-0.798276</td>
      <td>0.03114</td>
      <td>0</td>
    </tr>
    <tr>
      <th>6242</th>
      <td>-0.598276</td>
      <td>0.06514</td>
      <td>0</td>
    </tr>
    <tr>
      <th>6244</th>
      <td>0.001724</td>
      <td>0.01114</td>
      <td>0</td>
    </tr>
    <tr>
      <th>6280</th>
      <td>-1.848276</td>
      <td>0.03314</td>
      <td>0</td>
    </tr>
    <tr>
      <th>6308</th>
      <td>0.501724</td>
      <td>0.02514</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
<p>406 rows × 3 columns</p>
</div>




```python
wine['quality'].value_counts()
```




    0    213
    1    193
    Name: quality, dtype: int64



possible for white:
    chlorides
    alcohol

possible for red:
    chlorides
    sulfates
    alcohol
    volatile acidity

intersect:
    chlorides, alcohol


```python
#Composition of citric acid go higher as we go higher in the quality of the wine
fig = plt.figure(figsize = (10,6))
sns.barplot(x = 'quality', y = include[0], data = wine)
```

    <AxesSubplot:xlabel='quality', ylabel='alcohol'>


```python
#Composition of chloride also go down as we go higher in the quality of the wine
fig = plt.figure(figsize = (10,6))
sns.barplot(x = 'quality', y = include[1], data = wine)
```




    <AxesSubplot:xlabel='quality', ylabel='chlorides'>


```python
wine.plot.scatter(x = include[0],
                  y = include[1],
                  c = include[2],
                  colormap='viridis')
```




    <AxesSubplot:xlabel='alcohol', ylabel='chlorides'>


## 2. Data Preparation


```python
val_cnt = wine[include[2]].value_counts()
min_sample = val_cnt.min()

wine = wine.groupby(include[2]).apply(lambda s: s.sample(min_sample))
```


```python
wine = wine.sample(frac=1).reset_index(drop=True)

ratio = 0
train, validate = np.split(wine, [int((1-ratio)*len(wine))])
```


```python
X_train = np.array(train[include[:2]])
X_test = np.array(train[include[:2]])

y_train = np.array(train[[include[2]]])
y_test = np.array(train[[include[2]]])
```

### 2.1 PyTorch Loaders


```python
## train data
class trainData(Dataset):
    
    def __init__(self, X_data, y_data):
        self.X_data = X_data
        self.y_data = y_data
        
    def __getitem__(self, index):
        return self.X_data[index], self.y_data[index]
        
    def __len__ (self):
        return len(self.X_data)


train_data = trainData(torch.FloatTensor(X_train), 
                       torch.FloatTensor(y_train))
## test data    
class testData(Dataset):
    
    def __init__(self, X_data):
        self.X_data = X_data
        
    def __getitem__(self, index):
        return self.X_data[index]
        
    def __len__ (self):
        return len(self.X_data)
    

test_data = testData(torch.FloatTensor(X_test))
```

## 3. Fully Connected Neural Network


```python
BATCH_SIZE = 64
LEARNING_RATE = 0.001

train_loader = DataLoader(dataset=train_data, batch_size=BATCH_SIZE, shuffle=True)
test_loader = DataLoader(dataset=test_data, batch_size=1)

class binaryClassification(nn.Module):
    def __init__(self):
        super(binaryClassification, self).__init__()
        # Number of input features is 2.
        self.layer_1 = nn.Linear(2, 2)
        self.layer_out = nn.Linear(2, 1)
        self.tan = nn.Tanh()
        
    def forward(self, inputs):
        x = self.tan(self.layer_1(inputs))
        x = self.layer_out(x)
        
        return x


device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

model = binaryClassification()
model.to(device)
print(model)
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adam(model.parameters(), lr=LEARNING_RATE)

def binary_acc(y_pred, y_test):
    y_pred_tag = torch.round(torch.sigmoid(y_pred))

    correct_results_sum = (y_pred_tag == y_test).sum().float()
    acc = correct_results_sum/y_test.shape[0]
    acc = torch.round(acc * 100)
    
    return acc
```

    binaryClassification(
      (layer_1): Linear(in_features=2, out_features=2, bias=True)
      (layer_out): Linear(in_features=2, out_features=1, bias=True)
      (tan): Tanh()
    )



```python
found = False

while not found:
    EPOCHS = 500

    losses = []
    accuracies = []

    model = binaryClassification()
    model.to(device)
    criterion = nn.BCEWithLogitsLoss()
    optimizer = optim.Adam(model.parameters(), lr=LEARNING_RATE)

    model.train()
    for e in range(1, EPOCHS+1):
        epoch_loss = 0
        epoch_acc = 0
        for X_batch, y_batch in train_loader:
            X_batch, y_batch = X_batch.to(device), y_batch.to(device)
            optimizer.zero_grad()

            y_pred = model(X_batch)

            loss = criterion(y_pred, y_batch)
            acc = binary_acc(y_pred, y_batch)

            loss.backward()
            optimizer.step()

            epoch_loss += loss.item()
            epoch_acc += acc.item()

        avg_loss = epoch_loss/len(train_loader)
        avg_acc = epoch_acc/len(train_loader)

        losses.append(avg_loss)
        accuracies.append(avg_acc)

        if avg_acc > 80:
            found = True
            break
        
    print(max(accuracies), accuracies.index(max(accuracies)))
    
    if found:
        break

plot(losses, accuracies)
```

    80.28571428571429 32    

## 4. Evaluate


```python
y_pred_list = []
model.eval()
with torch.no_grad():
    for X_batch in test_loader:
        X_batch = X_batch.to(device)
        y_test_pred = model(X_batch)
        y_test_pred = torch.sigmoid(y_test_pred)
        y_pred_tag = torch.round(y_test_pred)
        y_pred_list.append(y_pred_tag.cpu().numpy())

y_pred_list = [a.squeeze().tolist() for a in y_pred_list]
```


```python
confusion_matrix(y_test, y_pred_list)
```




    array([[181,  12],
           [ 77, 116]])




```python
print(classification_report(y_test, y_pred_list))
```

                  precision    recall  f1-score   support
    
               0       0.70      0.94      0.80       193
               1       0.91      0.60      0.72       193
    
        accuracy                           0.77       386
       macro avg       0.80      0.77      0.76       386
    weighted avg       0.80      0.77      0.76       386
    


## 4. Export Parameters


```python
for name, param in model.named_parameters():
    if param.requires_grad:
        print(name, param.data)
```

    layer_1.weight tensor([[ 0.4924, -0.2594],
            [-0.4551,  0.1832]])
    layer_1.bias tensor([-0.5771, -0.1374])
    layer_out.weight tensor([[-0.3158, -0.8081]])
    layer_out.bias tensor([-0.4264])



```python
def function(x):
    # function activation function: f(x) = 1 / (1 + e^(-x))
    return 1 / ( 1 + 2.718282 ** -x )
#     return np.tanh(x)


def deriv_function(x):
    # Derivative of function: f'(x) = f(x) * (1 - f(x))
    return function(x) * ( 1 - function(x) )
#     return 1 - np.power(np.tanh(x), 2)
    


def mse_loss(y_true, y_pred):
    # y_true and y_pred are numpy arrays of the same length.
    return ((y_true - y_pred)**2).mean()


class NeuralNetwork:
    '''
  A neural network with:
    - 2 inputs
    - a hidden layer with 2 neurons (h1, h2)
    - an output layer with 1 neuron (o1)
  '''
    def __init__(self):
        # Weights
        self.w1 = np.random.normal()
        self.w2 = np.random.normal()
        self.w3 = np.random.normal()
        self.w4 = np.random.normal()
        self.w5 = np.random.normal()
        self.w6 = np.random.normal()

        # Biases
        self.b1 = np.random.normal()
        self.b2 = np.random.normal()
        self.b3 = np.random.normal()
        
        self.learn_rate = .005
    
    def __str__(self):
        return f'weights: {self.w1} {self.w2} {self.w3} {self.w4} {self.w5} {self.w6} biases: {self.b1} {self.b2} {self.b3}'

    def feedforward(self, x):
        # x is a numpy array with 2 elements.
        h1 = function(self.w1 * x[0] + self.w2 * x[1] + self.b1)
        h2 = function(self.w3 * x[0] + self.w4 * x[1] + self.b2)
        o1 = function(self.w5 * h1 + self.w6 * h2 + self.b3)
        return o1

    def train(self, data, all_y_trues):
        '''
    - data is a (n x 2) numpy array, n = # of samples in the dataset.
    - all_y_trues is a numpy array with n elements.
      Elements in all_y_trues correspond to those in data.
    '''
        epochs = 12000  # number of times to loop through the entire dataset
        self.losses = []
        self.accs = []

        for epoch in range(epochs):
            for x, y_true in zip(data, all_y_trues):
                # --- Do a feedforward (we'll need these values later)
                sum_h1 = self.w1 * x[0] + self.w2 * x[1] + self.b1
                h1 = function(sum_h1)

                sum_h2 = self.w3 * x[0] + self.w4 * x[1] + self.b2
                h2 = function(sum_h2)

                sum_o1 = self.w5 * h1 + self.w6 * h2 + self.b3
                o1 = function(sum_o1)
                y_pred = o1

                # --- Calculate partial derivatives.
                # --- Naming: p_L_p_w1 stands for "partial L partial w1"
                p_L_p_ypred = -2 * (y_true - y_pred)

                # Neuron o1
                p_ypred_p_w5 = h1 * deriv_function(sum_o1)
                p_ypred_p_w6 = h2 * deriv_function(sum_o1)
                p_ypred_p_b3 = deriv_function(sum_o1)

                p_ypred_p_h1 = self.w5 * deriv_function(sum_o1)
                p_ypred_p_h2 = self.w6 * deriv_function(sum_o1)

                # Neuron h1
                p_h1_p_w1 = x[0] * deriv_function(sum_h1)
                p_h1_p_w2 = x[1] * deriv_function(sum_h1)
                p_h1_p_b1 = deriv_function(sum_h1)

                # Neuron h2
                p_h2_p_w3 = x[0] * deriv_function(sum_h2)
                p_h2_p_w4 = x[1] * deriv_function(sum_h2)
                p_h2_p_b2 = deriv_function(sum_h2)

                # --- Update weights and biases
                # Neuron h1
                self.w1 -= self.learn_rate * p_L_p_ypred * p_ypred_p_h1 * p_h1_p_w1
                self.w2 -= self.learn_rate * p_L_p_ypred * p_ypred_p_h1 * p_h1_p_w2
                self.b1 -= self.learn_rate * p_L_p_ypred * p_ypred_p_h1 * p_h1_p_b1

                # Neuron h2
                self.w3 -= self.learn_rate * p_L_p_ypred * p_ypred_p_h2 * p_h2_p_w3
                self.w4 -= self.learn_rate * p_L_p_ypred * p_ypred_p_h2 * p_h2_p_w4
                self.b2 -= self.learn_rate * p_L_p_ypred * p_ypred_p_h2 * p_h2_p_b2

                # Neuron o1
                self.w5 -= self.learn_rate * p_L_p_ypred * p_ypred_p_w5
                self.w6 -= self.learn_rate * p_L_p_ypred * p_ypred_p_w6
                self.b3 -= self.learn_rate * p_L_p_ypred * p_ypred_p_b3

            # --- Calculate total loss at the end of each epoch
            if epoch % 1000 == 0:
                y_preds = np.apply_along_axis(self.feedforward, 1, data)
                acc = 100*np.count_nonzero(all_y_trues == y_preds.round())/len(data)
                loss = mse_loss(all_y_trues, y_preds)
                self.losses.append(loss)
                self.accs.append(acc)
                print("epoch %d\tloss: %f\taccuracy: %f" % (epoch, loss, acc))

    def plot(self):
        fig, axs = plt.subplots(1)

        ax1 = axs
        color = 'tab:red'
        ax1.set_xlabel('training steps')
        ax1.set_ylabel('loss', color=color)
        ax1.plot(range(len(self.losses)), self.losses, color=color)
        ax1.tick_params(axis='y', labelcolor=color)

        ax2 = ax1.twinx()  # instantiate a second axes that shares the same x-axis

        color = 'tab:blue'
        ax2.set_ylabel('accuracy', color=color)  # we already handled the x-label with ax1
        ax2.plot(range(len(self.accs)), self.accs, color=color)
        ax2.tick_params(axis='y', labelcolor=color)

        fig.tight_layout()  # otherwise the right y-label is slightly clipped
        plt.show()

# network = NeuralNetwork()
# Train our neural network!
network.learn_rate = 0.00005
network.train(X_train, y_train.reshape(-1,))

print(network)
network.plot()

acc = 100*np.count_nonzero(y_train.reshape(-1,) == np.apply_along_axis(network.feedforward, 1, X_train).round())/len(X_train)
print(acc)
```

    epoch 0	loss: 0.132531	accuracy: 81.865285
    epoch 1000	loss: 0.132531	accuracy: 81.865285
    epoch 2000	loss: 0.132531	accuracy: 81.865285
    epoch 3000	loss: 0.132531	accuracy: 81.865285
    epoch 4000	loss: 0.132531	accuracy: 81.865285
    epoch 5000	loss: 0.132531	accuracy: 81.865285
    epoch 6000	loss: 0.132531	accuracy: 81.865285
    epoch 7000	loss: 0.132531	accuracy: 81.865285
    epoch 8000	loss: 0.132531	accuracy: 81.865285
    epoch 9000	loss: 0.132531	accuracy: 81.865285
    epoch 10000	loss: 0.132531	accuracy: 81.865285
    epoch 11000	loss: 0.132531	accuracy: 81.865285
    weights: -0.5241537557697997 8.022605603367996 -36.627811690638175 17.293829646720408 -27.715390143478537 6.900655940087721 biases: -1.6997071090811102 -70.55616344362397 3.983528397200501

    81.86528497409327

## Best Model

81.9%
weights: -0.5258128356790649 8.030110880882871 -36.62607954699542 17.289156778336512 -27.706516193146673 6.907676857161875 biases: -1.7036051769265983 -70.55261667300597 3.9689563659447864

weights: -0.5252373683043017 8.028392381234099 -36.62651348093277 17.29032523800684 -27.70874002300861 6.906127236792722 biases: -1.7024063171579678 -70.55350171869333 3.9732754230651444

79%
weights: -0.7985963217884304 8.47287278322075 -5.045041523588488 -1.042118489749843 -10.069041616614001 5.490090153973683 biases: -0.42784383682720145 -9.312642567784899 3.6226994842694573

</details>

I used UCI's [Wine dataset](https://kaggle.com/uciml/red-wine-quality-cortez-et-al-2009) since it's popular and easily categorical. I preprocessed the data by dropping every column except *citric acid*, *volatile acidity*, and *quality*, and removing outlier data with a z-index greater than 3. Then I made all wines with a quality below 5 a **0**, and all wines above 7 a **1**. I used the remaining data to fit the nine tunable parameters (I really didn't have to worry about overfitting 😂) of the neural network and finally copied them into assembly. The file below will, with 82% accuracy, determine whether a wine is good or bad given its alcohol and salt contents.

<iframe class="web" width="100%" frameborder="0" src="https://replit.com/@splch/WineNet?lite=1"></iframe>

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
