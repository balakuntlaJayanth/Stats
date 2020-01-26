---
title: 'Introduction to Odds Ratio '
date: 2020-01-26 18:28:43 Z
layout: post
description: Odss Ratio Interpretation and Calculation.
---

## Introduction to Odds Ratio (OR)

Odds Ratio means ratio of ratios. The odds ratio is one of the most effective ways of expressing association between 2 conditions. Odds ratio provides strong statistical technique to prove a cause.Odds ratio is one of the most commonly reported statistics in published papers. Hence it is important that we understand how to interpret odds ratios.

Odds ratio is used as a part of robust statistical techniques such as logistic regression.odds ratios are just the likelihood of an event occurring given exposure to a particular condition versus no exposure to the condition.

The Odds ratio of 1 means that there are no likelihood of having the event of interest. The odds ratio of above 1 means that there is a greater likelihood of having the outcome and an Odds ratio of below 1 means that there is a lesser likelihood of having the outcome.

When the Odds ratio is above 1 and below 2 then it is represented as likelihood percentage.
For example if odds ratio of event is 1.34 , then the likelihood of event is 34% (1.34-1 = 34 that is 34%) higher.

If odds ratio is higher than 2 then it represnted as likelihood of N times , where N represents odds ratio. 
For example if odds ratio is 4 then odds ratio is interpreted as 4 times likelihood of an outcome compared to other group.

If odds ratio below 1the likelihood of having the outcome is N% lower (N% = 1-Odds ratio). For e.g. if odds ratio is 0.80, then there is a 20% lower likelihood of having the outcome.


The odds ratio also shows the strength of the association between the variable and the outcome. Simply put, an odds ratio of 5 (i.e. 5 times greater likelihood) shows a much stronger association than odds ratio of 3, which in turn is stronger than an odds ratio of 1.5. 

The odds ratio tells us the direction of the association between the factor and the outcome. 

For example, an odds ratio of greater than 1 shows us a positive association between the outcome (e.g. infection) and the associated factor (e.g. surgical complication) i.e. complication is associated with a higher likelihood of infection and administering an antibiotic is associated with a lower risk of association. The direction of association may come intuitively to you but statistical backing makes a difference and shows that your data is robust enough.

In most cases odds ratio will be accompanied by p-value . The odds ratio with P-value less than 0.05 are considered to be statistically significant.



## Python implementation of odds ratio

Here we use fisher exact test to calculate p-value and odds ratio between 2 Groups.


```python
import numpy as np
import pandas as pd
import scipy.stats as stats

```


```python
oddsratio, pvalue = stats.fisher_exact([[8, 2], [1, 5]])
```


```python
print(pvalue)
```

    0.03496503496503495



```python
print(oddsratio)
```

    20.0


The odds ratio of 20 indicates strong association with significant p-value less than 0.05.


