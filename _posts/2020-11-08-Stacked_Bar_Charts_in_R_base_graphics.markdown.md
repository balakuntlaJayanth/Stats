---
layout: post
title:  "Stacked Bar Charts in R base Graphics"
date:   2020-11-08 22:02:38 +0530
categories: jekyll update
---

## Stacked Bar Charts in R base Graphics

In R, a barplot is computed using the barplot() function.


```R
set.seed(112)
data <- matrix(sample(1:30,15) , nrow=3)
colnames(data) <- c("X","Y","Z","X1","Y1")
rownames(data) <- c("var1","var2","var3")
```


```R
data
```


<table>
<caption>A matrix: 3 × 5 of type int</caption>
<thead>
	<tr><th></th><th col>X</th><th col>Y</th><th col>Z</th><th col>X1</th><th col>Y1</th></tr>
</thead>
<tbody>
	<tr><th row>var1</th><td>14</td><td>13</td><td>24</td><td>11</td><td>25</td></tr>
	<tr><th row>var2</th><td>10</td><td> 9</td><td> 4</td><td> 1</td><td> 2</td></tr>
	<tr><th row>var3</th><td>12</td><td> 6</td><td> 5</td><td>26</td><td> 7</td></tr>
</tbody>
</table>




```R
barplot(data, 
        col=colors()[c(23,89,12)] , 
        border="white", 
        space=0.04, 
        font.axis=2, 
        xlab="group")
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/NOV8_2020/output_2_0.png)


```R
barplot(data, 
        col=colors()[c(23,89,12)] , 
        border="white", 
        font.axis=2, 
        beside=T, 
        legend=rownames(data), 
        xlab="group", 
        font.lab=2)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/NOV8_2020/output_3_0.png)

## References

- https://www.tutorialspoint.com/r/r_bar_charts.html


