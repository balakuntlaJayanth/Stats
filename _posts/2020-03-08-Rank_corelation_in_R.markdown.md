---
layout: post
title:  "Rank correlation in R"
date:   2020-03-08 22:02:38 +0530
categories: jekyll update
---

## Rank Correlation in R

### Introduction

<p style='text-align: justify;'> The Rank Correlation or Spearman Rank Correlation is an alternative to pearson correlation.
The Pearson correlation is one of the preferred and most common correlation analysis methods.</p>

<p style='text-align: justify;'> As discussed in the previous week’s blog Pearson correlation uses standard deviation and means of the variables to calculate correlation. The mean and standard deviation can be influenced by outliers. </p>

<p style='text-align: justify;'> A simple most robust alternative to Pearson Correlation is Rank Correlation.  The Rank Correlation is also  called Pearson correlation of ranks. </p>

<p style='text-align: justify;'> In this method correlation is based on the rank of the value . In case of identical values average of ranks is considered instead of original rank. </p>

<p style='text-align: justify;'> The Spearman Rank Correlation is robust to outliers. 
The rank correlation remains unchanged for any transformation of the data, such as LOG, EXP, and SQRT. </p>

### Null and Alternate Hypothesis

Null Hypothesis : There is no correlation or zero correlation between variables

Alternate Hypothesis : There is correlation between variables.



### Rank Correlation in R

```{r}
A <- c(44.4, 45.9, 41.9, 53.3, 44.7, 44.1, 50.7, 45.2, 60.1)
B <- c(2.6, 3.1, 2.5, 5.0, 3.6, 4.0, 5.2, 2.8, 3.8)
```


   Spearman's rank correlation rho

data:  A and B
S = 48, p-value = 0.0968
alternative hypothesis: true rho is not equal to 0
sample estimates:
rho 
0.6


```{r}
cor.test(A,B,method="spearman",alternative="two.sided")
```

Spearman's rank correlation rho

data:  A and B
S = 48, p-value = 0.0968
alternative hypothesis: true rho is not equal to 0
sample estimates:
rho 
0.6 

<p style='text-align: justify;'> The Spearman rank correlation between A and B is 0.6. Since the p-value is 0.0968 and greater than the critical value of 0.05, do not reject the null hypothesis.</p>

```{r}
library('pspearman')
spearman.test(A,B,alternative="two.sided",approximation ="exact")
```

<p style='text-align: justify;'>The Spearman rank correlation between A and B is 0.6. Since the p-value is 0.0968 and greater than the critical value of 0.05, do not reject the null hypothesis. </p>

#### Note: 
-  spearman.test has three types of approximation – exact, AS89 and  t-distribution. 

-  For a sample size less than 20 exact approximation should be used. For larg sample sizes use AS89 or t-distribution. 

#### References
- http://www.statstutor.ac.uk/resources/uploaded/spearmans.pdf
- https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient
- https://www.rdocumentation.org/packages/psych/versions/1.9.12.31/topics/corr.test
