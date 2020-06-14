---
layout: post
title:  "Evaluation Metrics"
date:   2020-06-14 22:02:38 +0530
categories: jekyll update
---

## Evaluation metrics
* [Intro](#Intro)
* [Classification](#Classification)
	* [Accuracy, precision, recall](#Accuracy,-precision,-recall)
		* [Binary](#Binary)
		* [Multi-class](#Multi-class)
* [Probabilities](#Probabilities)
	* [Log Loss](#Log-Loss)
* [Regression](#Regression)
* [Hinge Loss](#Hinge-Loss)


## Introduction

This week's blog explores evaluation metrics for different tasks (classification, regression) and scenarios (binary, multi-class, probabilities). See also loss/cost/objective function.


```python
import numpy as np
import pandas as pd
from sklearn import metrics
import matplotlib.pyplot as plt

import seaborn as sns
```

## Classification 

### Accuracy, precision, recall

$$ accuracy = \frac{TP+TN}{TP+TN+FP+FN}  $$

$$ precision = \frac{TP}{TP+FP}  $$

$$ recall = \frac{TP}{TP+FN}  $$

### Binary


```python
# dummy data example
y_true = [0, 1, 1, 1, 0, 1, 0, 1, 0, 1]
y_pred = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
```


```python
# accuracy, precision and recall using sklearn
print("Accuracy = {}".format(metrics.accuracy_score(y_true, y_pred)))
print("Precision = {}".format(metrics.precision_score(y_true, y_pred)))
print("Recall = {}".format(metrics.recall_score(y_true, y_pred)))
```

    Accuracy = 0.5
    Precision = 1.0
    Recall = 0.16666666666666666


### Multi-class

Need an averagin method to compute precision and recall


```python
# dummy data example
y_true = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
y_pred = [0, 2, 1, 3, 3, 3, 6, 7, 9, 9]
```


```python
# accuracy, precision and recall using sklearn
print("Accuracy = {}".format(metrics.accuracy_score(y_true, y_pred)))
print("Precision = {}".format(metrics.precision_score(y_true, y_pred, average=None)))
print("Recall = {}".format(metrics.recall_score(y_true, y_pred, average=None)))
```

    Accuracy = 0.5
    Precision = [1.         0.         0.         0.33333333 0.         0.
     1.         1.         0.         0.5       ]
    Recall = [1. 0. 0. 1. 0. 0. 1. 1. 0. 1.]


    /usr/local/lib/python3.6/dist-packages/sklearn/metrics/classification.py:1437: UndefinedMetricWarning: Precision is ill-defined and being set to 0.0 in labels with no predicted samples.
      'precision', 'predicted', average, warn_for)



```python
### Confusion Matrix
metrics.confusion_matrix(y_true, y_pred)
```




    array([[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
           [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]])



# Probabilities

## Log Loss

Also cross-entropy loss, a generalization for multiple classes of binary cross-entropy.

$$
H(p,q)\ =\ -\sum _{i}p_{i}\log q_{i}\ =\ -y\log {\hat  {y}}-(1-y)\log(1-{\hat  {y}})
$$


```python
# Log Loss with sklearn
metrics.log_loss(["spam", "ham", "ham", "spam"],  
         [[.1, .9], [.9, .1], [.8, .2], [.35, .65]])
```




    0.21616187468057912




```python
### single binary case
def log_loss(y_true, y_pred):
    return ((-y_true * np.log(y_pred)) - 
             (1-y_true) * (np.log(1-y_pred)))
```


```python
y_true = 1
x = np.linspace(0.001, 0.9999, 50)
#y = [(1 - y_true) * np.log(1 - y_pred) for y_pred in x]
#y = [(y_true) * np.log(y_pred) for y_pred in x]
y = [log_loss(y_true, y_pred) for y_pred in x]
```


```python
# plot loss
plt.plot(x, y)
plt.title("Log loss for y_true = {}".format(y_true))
plt.xlabel("y_pred")
plt.ylabel("loss")
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/14_june/output_21_0.png)


### Regression


```python
y_true = [3, 0, 2, 7]
y_pred = [4, 0, 3, 8]
```


```python
sns.regplot(x=np.arange(1,len(y_true)+1), y=np.array(y_true), fit_reg =False)
sns.regplot(x=np.arange(1,len(y_true)+1), y=np.array(y_pred), color='r', fit_reg =False)
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/14_june/output_24_0.png)



```python
metrics.mean_absolute_error(y_true, y_pred)
```




    0.75




```python
metrics.mean_squared_error(y_true, y_pred)
```




    0.75



### Hinge Loss

Also max-margin loos (proper of SVMs).

$$l(y, \hat{y}) = max(0, 1-(y \cdot \hat{y}))$$

As can be observed, $y = \pm1$


```python
def hinge_loss(y_true, y_pred, margin=1):
    return max(0, margin-(y_true*y_pred))
```


```python
hinge_loss(1, 1)
```





```python
### compute loss for different predicted values
y_true = 1
margin = 1
x = np.linspace(-1, 1, 10)
y = [hinge_loss(y_true, y_pred, margin) for y_pred in x]
```


```python
# plot loss
plt.plot(x, y)
plt.title("Hinge loss for y_true = {}, margin={}".format(y_true, margin))
plt.xlabel("y_pred")
plt.ylabel("loss")
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/14_june/output_32_0.png)



### References
- https://deepai.org/machine-learning-glossary-and-terms/evaluation-metrics
