---
layout: post
title:  "Pearson chi-square test"
date:   2020-02-02 22:02:38 +0530
categories: jekyll update
---

## Pearson chi-square test

### Introduction

In my previous blog, we have discussed statistical tests which compare medians (t-test). Now we will focus on categorical variables.

Categorical variables are variables which can be divided into finite category or groups and independent of each other.
For Example Gender (Male or Female) can be a categorical group, whereas the number of cars cannot be categorical.
The chi-square test of independence is a frequently used nonparametric test for categorical variable. 

The test is used to discover if there is a relationship between two categorical variables, or to assess whether a sample on a categorical variable is different from a specific probability distribution. 

### Assumption

It is assumed  that you have collected an independent random sample of reasonable size.

### Null Hypothesis

The two categorical variables are independent.

### Alternate Hypothesis

The two categorical variables are related.


### Formula

Chi Square = the sum of all the (fo - fe)^2 / fe

Here fo denotes the frequency of the observed data and fe is the frequency of the expected values.



### Pearson paired chi-square test in R

In this example there are 2  categorical variables SEX of the individual and the political party to which individual voted.

Null hypothesis : There is no relationship between SEX of the individual and the voting pattern of the individual.

R implementation of the chi-squared test provides option to use yates correction with correct parameter. 
In literature  few statisticians suggests that Yates correction should be applied if  expected values is below 10 , other staticians recommend that you don’t use it at all. A large body of research has found that the correction is too strict.

chi-squared test is biased upwards for a 2*2 contigency tables.


```R
Table_data <- as.table(rbind(c(20, 30), c(30,20)))
```


```R
dimnames(Table_data) <- list(gender=c("Male","Female"), party=c("A",
"B"))
```


```R
chisq.test(Table_data , correct = TRUE )
```


    
    	Pearson's Chi-squared test with Yates' continuity correction
    
    data:  Table_data
    X-squared = 3.24, df = 1, p-value = 0.07186



In this case the p-value is greater than 0.05, do not reject the null
hypothesis at the 5% level of significance

### Limitations

- The contigency table should contain the same number of elements
- The frequency should be atleast 5. If frequency is not uniform between categorical variables then Fisher exact test should be choosen instead of chi-square test.
- The Frequencies are assumed to be obtained by random sampling

### References

Camilli, G. & Hopkins, K. D. (1979). Testing for association in 2 * 2 contingency tables with very small sample sizes. Psychological Bulletin, 86, 1011-1014.

Larntz, K. (1978). Small sample comparisons of exact levels for chi-square goodness of fit statistics. Journal of the American Statistical Association, 73, 253-263. 

Thompson, B. (1988). Misuse of chi-square contingency-table test statistics. Educational and Psychological Research, 8(1), 39-49. 

Yates, F. (1934). Contingency tables. Journal of the Royal Statistical Society, 1, 217-235.

Hitchcock, David B. (2009). Yates and Contingency Tables: 75 Years Later