---
layout: post
title:  "1 Dimensional Data Matplotlib"
date:   2020-08-02 22:02:38 +0530
categories: jekyll update
---

## 1 Dimensional Data plotting Matplotlib


```python
import matplotlib.pyplot as plt
import numpy as np
```

###  Plotting one dimensional data

Histogram and barplot are examples for one dimensional plot.Most of the statistical distributions are one dimensional data

#### Histogram

The hist() function accepts data in the form of numpy array. The hist function accepts the numpy histogram to count the frequency of the values.


```python
data = np.random.randn(500)
fig, ax = plt.subplots()
ax.hist(data)
fig.suptitle('Histogram for 1D data')
ax.set_ylabel('Total count')
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/02082020/output_2_0.png)



```python
### Bar chart
```


```python
Values = ['A','A','B','B','B','B','B','B','C','C','D']
value, count = np.unique(Values,return_counts=True)
plt.bar(value,count)
plt.ylabel('counts')
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/02082020/output_4_0.png)



### References
- https://matplotlib.org/