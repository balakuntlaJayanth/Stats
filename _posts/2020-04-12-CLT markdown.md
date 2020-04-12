---
layout: post
title:  "Central Limit Theorem (CLT)"
date:   2020-04-12 22:02:38 +0530
categories: jekyll update
---

## Central Limit Theorem (CLT)

<p style='text-align: justify;'>Central limit theorem is one of the important statistical hypotheses which helps in comparing the means of two groups of population.</p>

<p style='text-align: justify;'>The idea behind the central limit theorem is Normal Distribution. Property of Normal Distribution is a continuous probability distribution.</p>

<p style='text-align: justify;'>The idea of CLT is the following: 
Let’s define a population with x samples with random values and unknown distribution . </p>

<p style='text-align: justify;'>The mean of x samples follow Normal Distribution.The mean of the x sample mean should be identical to population mean.</p>

### Assumptions of CLT

- The samples in the population are independent of each other.
The sample size should be sufficiently large.

- To fully appreciate the CLT theorem, let’s simulate the data for weight of the people and use shapiro wilk’s test to test the Normality of the samples.


### Python Visualization of CLT


```python
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
sns.set_context("paper")
```

Let's simulate sample with 50 values. 


```python
# Simulate N die ro
sample = np.random.randint(60, 90, 50)
```


```python
print(sample)
```

    [75 83 65 61 72 87 82 89 71 74 82 69 83 88 71 77 84 72 70 79 79 77 70 81
     76 89 61 65 69 69 87 80 79 89 64 80 89 64 67 76 76 82 67 65 89 60 85 87
     60 68]


Visualize sample with density plot


```python
sns.distplot(sample)
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/April122020/output_8_0.png)


Figure 1: Distribution of the simulated sample values

The distribution plot indicates that values in the sample follow random distribution

Let's check the values in sample follows a Normal Distribution using a quantitative measure such as shapiro wilks test

### Introduction to Shapiro wilks Test

Hypothesis of Shapiro wilks Test

- H0: data follow a Normal distribution

- H1: data do not follow a Normal distribution

#### Shapiro wilks Test for sample


```python
from scipy.stats import shapiro
stat, p = shapiro(sample)
print('Statistics={}, p={}'.format(stat, p))
```

    Statistics=0.9479720592498779, p=0.02817782573401928


The p value less than significance (0.05) reject the null hypothesis. Values in the sample does not follow Normal Distribution 

Simulate 500 samples with random values. calculate mean for 500 samples. Mean of 500 samples follow Normal Distribution.

### Visualize Mean of 500 samples


```python
means = [np.mean(np.random.randint(60, 90, 50)) for i in range(500)]
```


```python
print('Total samples: ',len(means))
print('Min :',min(means))
print('Max :',max(means))
```

    Total samples:  500
    Min : 70.98
    Max : 78.1



```python
sns.distplot(means)
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/April122020/output_21_0.png)


Figure 2 : Distribution of the 500 sample Means

The bell shaped curve indicates Normal Distribution

#### Shapiro wilks Test for 500 sample


```python
from scipy.stats import shapiro
stat, p = shapiro(means)
print('Statistics={}, p={}'.format(stat, p))
```

    Statistics=0.9948856234550476, p=0.09607169777154922


Since the p-value is far greater than significance (0.05), we do not reject the null hypothesis. Mean value of 500 samples follow Normal Distribution.

### References

- https://en.wikipedia.org/wiki/Central_limit_theorem
- https://docs.scipy.org/doc/numpy-1.15.0/reference/generated/numpy.random.randint.html
- https://en.wikipedia.org/wiki/Shapiro%E2%80%93Wilk_test
- https://seaborn.pydata.org/