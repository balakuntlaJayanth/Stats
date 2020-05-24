---
layout: post
title:  "Scatter Plots in ggplot Part I"
date:   2020-05-24 22:02:38 +0530
categories: jekyll update
---

### Scatter Plots in ggplot

Scatter Plots are used to represent relation ship between 2 continous variables.

Scatter Plots are easy to plot using ggplot2 and R.

The data used for plotting is obtained from Keggle (https://www.kaggle.com/mustafaali96/weight-height/kernels). 

The geom_point() function can be used to map variables between X-axis and Y-axis.


```R
library(tidyverse)
```





```R
df <- read.csv('heightweight.csv')
```


```R
head(df)
```


<table>
<caption>A data.frame: 6 × 5</caption>
<thead>
	<tr><th >sex</th><th >ageYear</th><th >ageMonth</th><th >heightIn</th><th >weightLb</th></tr>
	<tr><th >&lt;fct&gt;</th><th >&lt;dbl&gt;</th><th >&lt;int&gt;</th><th >&lt;dbl&gt;</th><th >&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>f</td><td>11.92</td><td>143</td><td>56.3</td><td> 85.0</td></tr>
	<tr><td>f</td><td>12.92</td><td>155</td><td>62.3</td><td>105.0</td></tr>
	<tr><td>f</td><td>12.75</td><td>153</td><td>63.3</td><td>108.0</td></tr>
	<tr><td>f</td><td>13.42</td><td>161</td><td>59.0</td><td> 92.0</td></tr>
	<tr><td>f</td><td>15.92</td><td>191</td><td>62.5</td><td>112.5</td></tr>
	<tr><td>f</td><td>14.25</td><td>171</td><td>62.5</td><td>112.0</td></tr>
</tbody>
</table>




```R
summary(df)
```


     sex        ageYear         ageMonth        heightIn        weightLb    
     f:111   Min.   :11.58   Min.   :139.0   Min.   :50.50   Min.   : 50.5  
     m:125   1st Qu.:12.33   1st Qu.:148.0   1st Qu.:58.73   1st Qu.: 85.0  
             Median :13.58   Median :163.0   Median :61.50   Median :100.5  
             Mean   :13.67   Mean   :164.1   Mean   :61.34   Mean   :101.0  
             3rd Qu.:14.83   3rd Qu.:178.0   3rd Qu.:64.30   3rd Qu.:112.0  
             Max.   :17.50   Max.   :210.0   Max.   :72.00   Max.   :171.5  



```R
df[,c('ageYear','ageMonth')]
```


```R
df %>% ggplot(aes(x=ageYear,y=ageMonth)) + geom_point()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/24_05_2020/output_5_0.png)

geom_point size can be adjusted by passing `size` with value as the variable to `geom_point()`.

Here `geom_point` increased to 10.

```R
df %>% ggplot(aes(x=ageYear,y=ageMonth)) + geom_point(size=10)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/24_05_2020/output_6_0.png)

Aesthetics can be grouped based on `color` and `shape`.

```R
df %>% ggplot(aes(x=ageYear,y=heightIn, color=sex, shape=sex)) + geom_point()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/24_05_2020/output_7_0.png)



```R
df %>% ggplot(aes(x=ageYear,y=heightIn, color=sex, shape=sex)) + geom_point() + scale_shape_manual(values=c(1,2)) +
scale_color_brewer(palette='Set1')
```

The ggplot provides shapes ranging from 1 to 10. For example value 1 represents circle and value 2 represents triangle. These values can be referred using ggplot2 documentation.

`scale_shape_manual` function accepts values for shapes to generate distinguishable patten between groups.

In height weight data set group sex can be distinguished based circles and triangles.

![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/24_05_2020/output_8_0.png)



```R
df %>% ggplot(aes(x=ageYear,y=heightIn, color=sex, shape=sex)) + geom_point(shape=3)
```

If the user wants to change the shape for all the points, `shape` variable can be used with `geom_point()`

![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/24_05_2020/output_9_0.png)



```R
df1 <- df
```

The `cut` function can be used to generate custom groups in the data sets based on the pattern in the specific column.

```R
df1$Group <- cut(df1$weightLb,breaks=c(-Inf,100,Inf),labels=c("< 100",">100"))
```


```R
head(df1)
```


<table>
<caption>A data.frame: 6 × 6</caption>
<thead>
	<tr><th >sex</th><th >ageYear</th><th >ageMonth</th><th >heightIn</th><th >weightLb</th><th >Group</th></tr>
	<tr><th >&lt;fct&gt;</th><th >&lt;dbl&gt;</th><th >&lt;int&gt;</th><th >&lt;dbl&gt;</th><th >&lt;dbl&gt;</th><th >&lt;fct&gt;</th></tr>
</thead>
<tbody>
	<tr><td>f</td><td>11.92</td><td>143</td><td>56.3</td><td> 85.0</td><td>&lt; 100</td></tr>
	<tr><td>f</td><td>12.92</td><td>155</td><td>62.3</td><td>105.0</td><td>&gt;100 </td></tr>
	<tr><td>f</td><td>12.75</td><td>153</td><td>63.3</td><td>108.0</td><td>&gt;100 </td></tr>
	<tr><td>f</td><td>13.42</td><td>161</td><td>59.0</td><td> 92.0</td><td>&lt; 100</td></tr>
	<tr><td>f</td><td>15.92</td><td>191</td><td>62.5</td><td>112.5</td><td>&gt;100 </td></tr>
	<tr><td>f</td><td>14.25</td><td>171</td><td>62.5</td><td>112.0</td><td>&gt;100 </td></tr>
</tbody>
</table>

The use of continous variable in the fill condition of aesthetics will result in scale of increasing gradient.



```R
ggplot(df1,aes(x=weightLb,y=heightIn,color=ageYear,fill=ageYear)) + geom_point()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/24_05_2020/output_13_0.png)



### References
- https://www.r-graph-gallery.com/272-basic-scatterplot-with-ggplot2.html
