---
layout: post
title:  "Introduction to Tensorflow"
date:   2020-05-17 22:02:38 +0530
categories: jekyll update
---

## Introduction to Tensorflow

This week's blog revolving around the use and concepts of [Tensorflow](https://www.tensorflow.org/) (v2.0).

<p style='text-align: justify;'>Tensorflow is a popular library for building machine learning models.Tensorflow builds a flowchart of operations (called a Graph) that user want to perform on that input using data structures called Tensor.</p> 

Tensor is a vector or matrix that represents all types of data.

In today's blog we will be discussing some essential features like:

- Core API which explains some basic concepts like building graph and executing operations through session.

- Eager execution is used to execute operations.

- Dataset API helps us to build Iterator.

```python
import os
import sys
import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
from pathlib import Path

!pip install tensorflow-gpu==2.0.0-alpha0
import tensorflow as tf
import numpy as np
print(tf.__version__)
```

    2.1.0

### Core (Low Level APIs)

Tensorflow operations are arranged into a computational graph. `graph` is about building, `session` is about running.
The graph nodes are represented by `Operation` while the edges can be see as `Tensor` flowing between the nodes. A `Tensor` does not have values, is just a handler returned by a function.


```python
# create and add up two constants
a = tf.constant(3.0, dtype=tf.float32)
b = tf.constant(4.0)
total = a + b 
print(a)
print(b)
print(total)
```

    tf.Tensor(3.0, shape=(), dtype=float32)
    tf.Tensor(4.0, shape=(), dtype=float32)
    tf.Tensor(7.0, shape=(), dtype=float32)



```python
# execute graph via a Session
# Build a graph.
with tf.compat.v1.Session() as ses:

     # Build a graph.
     a = tf.constant(5.0)
     b = tf.constant(6.0)
     c = a * b

     # Evaluate the tensor `c`.
     print(ses.run(c))
```

    30.0

### Eager Execution

Present from Tensorflow v1.7, provides a imperative programming env that allows to evaluate operations immediately. In this env a ``Tensor`` object actually reference concrete values that can be used in other Python contexts like debugger or Numpy.


```python
tf.compat.v1.enable_eager_execution() # enable eager mode, need to be run at start
```


```python
a = 3.0
b = 4.0
res = tf.multiply(a, b)
res
```




    <tf.Tensor: shape=(), dtype=float32, numpy=12.0>




```python
np.multiply(res, res)
```




    144.0



### Dataset API
`tf.data` as a mean to build input/pre-processing pipelines. Introduces the `Dataset` (sequence of elements) and `Iterator` (access elements from a dataset) abstractions.

In *eager* mode can iterate over a dataset as done in common Python code. In a session need instead to instantiate/initialize an iterator over the dataset.


```python
tf.compat.v1.enable_eager_execution() # enable eager mode, need to be run at start
```


```python
def val():
    for i in range(1000):
      x = np.random.rand(28,28)
      y = np.random.randint(1,10, size=1)
      yield x,y

```


```python
dataset = tf.data.Dataset.from_generator(val, (tf.float32, tf.int16))
```


```python
dataset = tf.data.Dataset.from_generator(val, (tf.float32, tf.int16))
dataset = dataset.batch(batch_size=10)
dataset = dataset.repeat(count=2)
iterator = tf.compat.v1.data.make_one_shot_iterator(dataset)

x,y = iterator.get_next()
print(x.shape, y.shape)
```

    (10, 28, 28) (10, 1)



```python
# apply custom function to each element of the datase
for batch, (x,y) in enumerate(dataset):
  pass
print("batch: ", batch)
print("Data shape: ", x.shape, y.shape)
```

    batch:  199
    Data shape:  (10, 28, 28) (10, 1)


### Reference

- https://www.tensorflow.org/
- https://www.geeksforgeeks.org/tensorflow-2-0/
