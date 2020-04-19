---
layout: post
title:  "Moving Averages on Time Series"
date:   2020-04-19 22:02:38 +0530
categories: jekyll update
---


## Moving Average on Time Series
* [Intro](#Intro)
	* [Time-Series](#Time-Series)
* [Moving Average](#Moving-Average)
* [Filling missing values](#Filling-missing-values)
	* [Interpolation](#Interpolation)




### Time-Series

"A time-series is sequence of measurements from a system that varies in time"

A time-series is generally decomposed in three major components:
* **Trend**: persistent change along time.
* **Seasonality**: regular periodic variation. There can be multiple seasonalities, and each can span different time-frames (by day, week, month, year, etc.)
* **Noise**: random variation


```python
import numpy as np
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

```

### Moving Average

Moving Averages (also rolling/running average or moving/running mean) is a technique that helps to extract the trend from a series. It reduces noise and decreases impact of outliers. Is consists in dividing the series in overlapping windows of fixed size $N$, and for each considering the average value. It follows that the first $N-1$ values will be undefined, given that they don't have enough predecessors to compute the average.

**Exponentially-Weighted Moving Average (EWMA)** is an alternative that gives more importance to recent values.


```python
# rolling mean basic example 
series = np.arange(10)
pd.Series(series).rolling(3).mean()
```




    0    NaN
    1    NaN
    2    1.0
    3    2.0
    4    3.0
    5    4.0
    6    5.0
    7    6.0
    8    7.0
    9    8.0
    dtype: float64




```python
# ewma basic example 
series = np.arange(10)
pd.Series(series).ewm(3).mean()
```




    0    0.000000
    1    0.571429
    2    1.189189
    3    1.851429
    4    2.555698
    5    3.299079
    6    4.078326
    7    4.890004
    8    5.730621
    9    6.596740
    dtype: float64




```python
# ewm on partial long series of 0s
series = [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]
pd.Series(series).ewm(span=2).mean()
```




    0     1.000000
    1     1.000000
    2     1.000000
    3     1.000000
    4     1.000000
    5     1.000000
    6     1.000000
    7     0.333232
    8     0.111066
    9     0.037021
    10    0.012340
    11    0.004113
    12    0.001371
    13    0.000457
    14    0.000152
    15    0.000051
    dtype: float64




```python
pd.Series(series).ewm(span=2).mean().plot()
plt.show()
```


![png](https://github.com/balakuntlaJayanth/Stats/blob/master/images/19042020/output_11_0.png?raw=true)


### Filling missing values

Basic Pandas methods:
* pad/ffill: fill values forward
* bfill/backfill: fill values backward


```python
# Random arrays to play with
a = np.arange(20)
b = a*a
b_empty = np.array(a*a).astype('float')
# Add missing values and get a Pandas Series
b_empty[[0, 5, 6, 15]] = np.nan
c = pd.Series(b_empty)
```


```python
# Visualize how filling method works
fig, axes = plt.subplots(2)
sns.pointplot(np.arange(20), c, ax=axes[0])
sns.pointplot(np.arange(20), c.fillna(method='bfill'), ax=axes[1])
```




    <matplotlib.axes._subplots.AxesSubplot at 0x7f75719b2240>




![png](https://github.com/balakuntlaJayanth/Stats/blob/master/images/19042020/output_15_1.png?raw=true)


### Resources:
* [Data Analysis with Open Source Tools](http://shop.oreilly.com/product/9780596802363.do)
* [Think Stats 2e - Allen B. Downey](http://greenteapress.com/wp/think-stats-2e/)