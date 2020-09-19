---
layout: post
title:  "Linear Regression in R"
date:   2020-09-20 22:02:38 +0530
categories: jekyll update
---

## Linear Regression in R

### Introduction

<p style='text-align: justify;'> Regression analysis is a form of predictive modelling techniques that identify the relationships between dependent and independent variables(s). The technique is used to find causal effect relationships between variables.</p>

<p style='text-align: justify;'> The benefit of using regression analysis is that it identifies the significant relationships between dependent and independent variables and the strength of the impact of multiple independent variables on independent variables.</p>

### R implementation of Linear Regression

<p style='text-align: justify;'> Generate 100 random values for x and y 
variable using rnorm function.</p>

```R
x = rnorm(100,mean=1,sd=1)
```

```R
y = rnorm(100,mean=1,sd=1)
```


```R
mod <- lm(y~x)
```


```R
mod
```


    
    Call:
    lm(formula = y ~ x)
    
    Coefficients:
    (Intercept)            x  
        0.83613      0.09232  




```R
summary(mod)
```


    
    Call:
    lm(formula = y ~ x)
    
    Residuals:
         Min       1Q   Median       3Q      Max 
    -2.24396 -0.67456  0.04755  0.72577  2.81457 
    
    Coefficients:
                Estimate Std. Error t value Pr(>|t|)    
    (Intercept)  0.83613    0.14990   5.578 2.16e-07 ***
    x            0.09232    0.10845   0.851    0.397    
    ---
    Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
    
    Residual standard error: 1.013 on 98 degrees of freedom
    Multiple R-squared:  0.007341,	Adjusted R-squared:  -0.002788 
    F-statistic: 0.7247 on 1 and 98 DF,  p-value: 0.3967


<p style='text-align: justify;'>Set the seed of R‘s random number generator, which is useful for creating simulations or random objects that can be reproduced.</p>

```R
set.seed(123);
```


```R
x <- rnorm(100, mean=1, sd=1);
```


```R
y <- rnorm(100, mean=2, sd=2);
```


```R
data <- data.frame(x, y);
```


```R
mod <- lm(data$y ~ data$x, data=data);
```


```R
summary(mod)
```


    
    Call:
    lm(formula = data$y ~ data$x, data = data)
    
    Residuals:
       Min     1Q Median     3Q    Max 
    -3.815 -1.367 -0.175  1.161  6.581 
    
    Coefficients:
                Estimate Std. Error t value Pr(>|t|)    
    (Intercept)   1.8993     0.3033   6.261 1.01e-08 ***
    data$x       -0.1049     0.2138  -0.491    0.625    
    ---
    Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
    
    Residual standard error: 1.941 on 98 degrees of freedom
    Multiple R-squared:  0.002453,	Adjusted R-squared:  -0.007726 
    F-statistic: 0.241 on 1 and 98 DF,  p-value: 0.6246


<p style='text-align: justify;'>  The p-values of 1.01e-08, 0.625, and 0.6246 tell you the significance of the linear model. When the p-value is less than 0.05, the model is significant.</p>

- H0 : Coefficient associated with the variable is equal to zero
- H1 : Coefficient is not equal to zero (there is a relationship)

<p style='text-align: justify;'> The intercept has a p-value of 1.01e-08, which is smaller than 0.05, so there is a significance with the y variable. The significance is indicated with the number of *. The x has a p-value of 0.625, which is more than 0.05, so there is no significance with the y variable. The null hypothesis is true at the 95% confidence interval.</p>.

### References
- https://www.datacamp.com/community/tutorials/linear-regression-R?utm_source=adwords_ppc&utm_campaignid=1455363063&utm_adgroupid=65083631748&utm_device=c&utm_keyword=&utm_matchtype=b&utm_network=g&utm_adpostion=&utm_creative=332602034358&utm_targetid=aud-299261629574:dsa-429603003980&utm_loc_interest_ms=&utm_loc_physical_ms=9062009&gclid=CjwKCAjw2Jb7BRBHEiwAXTR4jVV1ZofBULxFs2wIpSaJmpngbKbZ71uUpojlAjIccXzUT803xMmvPRoCPCMQAvD_BwE
- https://www.tutorialspoint.com/r/r_linear_regression.htm
- https://www.machinelearningplus.com/machine-learning/complete-introduction-linear-regression-r/