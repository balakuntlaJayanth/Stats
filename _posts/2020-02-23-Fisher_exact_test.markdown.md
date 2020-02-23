---
layout: post
title:  "Fisher Exact Test"
date:   2019-09-15 22:02:38 +0530
categories: jekyll update
---

## Fisher Exact Test

### Introduction

<p style='text-align: justify;'> The test is used to discover and asses relationship between two
categorical variables.  Test is non-parametric in nature .It is used to compare samples to specific probability distribution.Test is applied on small sample data set, whereas chisquare test is used for large sample size data sets.</p>

<p style='text-align: justify;'> It is assumed that sampling is independent and random. It is often used when the number of observations is small. It is often observed that expected value of any categorical value is less than 5 chi-square test should not be applied and fisher exact test has to be favoured(McCrum-Gardner 2008; Bower 2003). </p>


### Null Hypothesis:

The variables are independent, there is no relationship between the two categorical variables. 

### Alternate Hypothesis:

The variables are dependent, there is a relationship between the two categorical variables. 

### How to calculate in R
The function fisher.test() from stats package can be used to perform this test.
fisher.test  function in R accepts contingency table.
fisher.test(Table_data, alternative = "two.sided", conf.level = 0.95)

### Example: two-sided exact Fisher test.
We have collected data from 100 persons voting pattern


```python
Table_data<- as.table(rbind(c(20, 30), c(30,20)))
```


```python
head(Table_data)
```


       A  B
    A 20 30
    B 30 20



```python
dimnames(Table_data) <- list(gender=c("Male","Female"), party=c("A","B"))
```


```python
fisher.test(Table_data, alternative = "two.sided", conf.level = 0.95)
```


    
    	Fisher's Exact Test for Count Data
    
    data:  Table_data
    p-value = 0.07134
    alternative hypothesis: true odds ratio is not equal to 1
    95 percent confidence interval:
     0.1846933 1.0640121
    sample estimates:
    odds ratio 
     0.4481632 



The p-value 0.071 is greater than 0.05 (5% significance level), do not reject Null Hypothesis.

### Example: one sided exact Fisher test


```python
fisher.test(Table_data, alternative = "less", conf.level = 0.95)
```


    
    	Fisher's Exact Test for Count Data
    
    data:  Table_data
    p-value = 0.03567
    alternative hypothesis: true odds ratio is less than 1
    95 percent confidence interval:
     0.0000000 0.9391675
    sample estimates:
    odds ratio 
     0.4481632 



The p-value is less 0.05, reject the null hypothesis at the 5% level of significance.

### References
- McCrum-Gardner, Evie. "Which is the correct statistical test to use?." British Journal of Oral and Maxillofacial Surgery 46.1 (2008): 38-41.
- Raymond, Michel, and François Rousset. "An exact test for population differentiation." Evolution 49.6 (1995): 1280-1283.
- https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/fisher.test

