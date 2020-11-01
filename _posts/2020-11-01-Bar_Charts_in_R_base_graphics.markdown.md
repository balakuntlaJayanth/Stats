---
layout: post
title:  "Bar Charts in R base Graphics"
date:   2020-11-01 22:02:38 +0530
categories: jekyll update
---

## Bar Charts in R base Graphics

In R, a barplot is computed using the barplot() function.

Here is the most basic example you can do. The input data is a data frame with 2 columns. value is used for bar height, name is used as category label.

```R
data <- data.frame(name=letters[1:8],value=sample(seq(4,50),8))

```

```R
# The most basic barplot you can do:
barplot(height=data$value, names=data$name,ylim = c(0,50))
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/01112020/output_2_0.png)



```R
# Uniform color
barplot(height=data$value, names=data$name, col=rgb(0.2,0.4,0.6,0.6) )
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/01112020/output_3_0.png)



```R
# Specific color for each bar? Use a well known palette
library(RColorBrewer)
coul <- brewer.pal(5, "Set2") 
barplot(height=data$value, names=data$name, col=coul )
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/01112020/output_4_0.png)



```R
# Change border color
barplot(height=data$value, names=data$name, border="#69b3a2", col="white" )
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/01112020/output_5_0.png)



```R
barplot(height=data$value, names=data$name, col="#69b3a2",horiz=T, las=1)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/01112020/output_6_0.png)



```R
barplot(height=data$value, names=data$name, col=rgb(0.2,0.4,0.6,0.6), space=c(0.1,0.2,3,1.5,0.3) )
```

![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/01112020/output_7_1.png)



```R
barplot(height=data$value, names=data$name, col=rgb(0.2,0.4,0.6,0.6), width=c(0.1,0.2,3,1.5,0.3) )
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/01112020/output_8_0.png)



```R
barplot( height=data$value, names=data$name , density=c(5,10,20,30,7) , angle=c(0,45,90,11,36) , col="brown"   )
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/01112020/output_9_0.png)


### References

- https://www.tutorialspoint.com/r/r_bar_charts.html