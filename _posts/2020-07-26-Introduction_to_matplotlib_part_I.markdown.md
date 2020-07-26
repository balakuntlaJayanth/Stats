---
layout: post
title:  "Introduction to Matplotlib Part I"
date:   2020-07-26 22:02:38 +0530
categories: jekyll update
---

## Introduction to matplotlib Part I

### What is Matplotlib

<p style='text-align: justify;'> Matplotlib is the most popular data visualization library in python.It was written by John Hunter. John initially modelled Matplotlib based on Matlab graphics library in 2003.</p>

<p style='text-align: justify;'> Matplotlib contains hierarchy of objects which can be independently modelled to render beautifull plots.</p>

<p style='text-align: justify;'> The top level hierarchy starts with Figure at the top level followed by plot type (scatter , line etc) Marker , axis and canvas at the lowest level.</p>

<p style='text-align: justify;'> Matplotlib uses backends such as Tkinter and Qt to render plots on the screen after plotting.</p>

<p style='text-align: justify;'> Matplotlib allows user to save plots in wide variety file formats such as pdf , png , tiff , jpg, bitmap and svg .</p>

<p style='text-align: justify;'> Another distingishing feature of matplotlib is pyplot state machine. pyplot assembles all the objects in the context of plot. pyplot allows for fast experimentation.</p>

<p style='text-align: justify;'> In practice, it’s almost impossible to use matplotlib without pyplot. The Matplotlib user guide recommends using pyplot only to create figures and axes, and, once those are created, use their respective methods to create plots.</p> 

<p style='text-align: justify;'> In this blog we will use Matplotlib to print Hello World as the first example.</p>

<p style='text-align: justify;'> In the subsequent blogs we will discuss all the major concepts of data visualization.</p>

### Hello Word from Matplotlib

```python
import matplotlib.pyplot as plt
```


```python
plt.text(0.0 , 0.5, 'Hello World!')
```




    Text(0.0, 0.5, 'Hello World!')


![ ](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/July26_2020/output_1_1.png "Hello World")

### References

- https://matplotlib.org/users/index.html


