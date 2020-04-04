---
layout: post
title:  "Introduction to Lattice package in R Part I"
date:   2020-04-05 22:02:38 +0530
categories: jekyll update
---

### Introduction to Lattice package in R

Lattice package is an multivariate data visualization package in R. 
It was initially designed by Deepayan sarkar.  It has a functionality of easy conditioning between different variables to produce multivariate plots.

Intially loading lattice package in R.

```R
library(lattice)
```


```R
library(help = lattice)
```
Loading environmental data which is prebuilt in R.

```R
data(environmental)
```


```R
head(environmental)
```


<table>
<caption>A data.frame: 6 × 4</caption>
<thead>
	<tr><th>ozone</th><th>radiation</th><th>temperature</th><th>wind</th></tr>
	<tr><th>&lt;dbl&gt;</th><th>&lt;dbl&gt;</th><th>&lt;dbl&gt;</th><th>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>41</td><td>190</td><td>67</td><td> 7.4</td></tr>
	<tr><td>36</td><td>118</td><td>72</td><td> 8.0</td></tr>
	<tr><td>12</td><td>149</td><td>74</td><td>12.6</td></tr>
	<tr><td>18</td><td>313</td><td>62</td><td>11.5</td></tr>
	<tr><td>23</td><td>299</td><td>65</td><td> 8.6</td></tr>
	<tr><td>19</td><td> 99</td><td>59</td><td>13.8</td></tr>
</tbody>
</table>

The environment data has 4 columns. ozone, radiation , temperature and wind.


```R
xyplot(ozone ~ radiation, data = environmental, main = "Ozone vs. Radiation")
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_4_0.png)

Summary of environmental data.

```R
summary(environmental$temperature)
```


       Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
      57.00   71.00   79.00   77.79   84.50   97.00 


### Investigating the relationship between Environment and Temperature.

The equal.count function was used to split temperature in to 4 equal parts.


```R
temp.cut <- equal.count(environmental$temperature, 4)
```


```R
temp.cut
```


    
    Data:
      [1] 67 72 74 62 65 59 61 69 66 68 58 64 66 57 68 62 59 73 61 61 67 81 79 76 82
     [26] 90 87 82 77 72 65 73 76 84 85 81 83 83 88 92 92 89 73 81 80 81 82 84 87 85
     [51] 74 86 85 82 86 88 86 83 81 81 81 82 89 90 90 86 82 80 77 79 76 78 78 77 72
     [76] 79 81 86 97 94 96 94 91 92 93 93 87 84 80 78 75 73 81 76 77 71 71 78 67 76
    [101] 68 82 64 71 81 69 63 70 75 76 68
    
    Intervals:
       min  max count
    1 56.5 76.5    46
    2 67.5 81.5    51
    3 75.5 86.5    51
    4 80.5 97.5    51
    
    Overlap between adjacent intervals:
    [1] 27 30 31



```R
xyplot(ozone ~ radiation | temp.cut, data = environmental)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_8_0.png)



```R
xyplot(ozone ~ radiation | temp.cut, data = environmental, layout = c(1, 4))
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_9_0.png)

The as.table argument is used to draw 4 panels in left, right , bottom and top.

```R
xyplot(ozone ~ radiation | temp.cut, data = environmental, as.table = TRUE)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_10_0.png)



```R
xyplot(ozone ~ radiation | temp.cut, data = environmental, layout = c(1, 4), 
    as.table = TRUE, pch = 20, panel = function(x, y, ...) {
        panel.xyplot(x, y, ...)
        fit <- lm(y ~ x)
        panel.abline(fit, lwd = 2)
    })
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_11_0.png)



```R
xyplot(ozone ~ radiation | temp.cut, data = environmental, as.table = TRUE, 
    pch = 20, panel = function(x, y, ...) {
        panel.xyplot(x, y, ...)
        panel.loess(x, y, lwd = 2)
    }, xlab = "Solar Radiation", ylab = "Ozone (ppb)", main = "Ozone vs. Solar Radiation")
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_12_0.png)



```R
wind.cut <- equal.count(environmental$wind, 4)
wind.cut
```


    
    Data:
      [1]  7.4  8.0 12.6 11.5  8.6 13.8 20.1  9.7  9.2 10.9 13.2 11.5 12.0 18.4 11.5
     [16]  9.7  9.7 16.6  9.7 12.0 12.0 14.9  5.7  7.4  9.7 13.8 11.5  8.0 14.9 20.7
     [31]  9.2 11.5 10.3  4.0  9.2  9.2  4.6 10.9  5.1  6.3  5.7  7.4 14.3 14.9 14.3
     [46]  6.9 10.3  6.3  5.1 11.5  6.9  8.6  8.0  8.6 12.0  7.4  7.4  7.4  9.2  6.9
     [61] 13.8  7.4  4.0 10.3  8.0 11.5 11.5  9.7 10.3  6.3  7.4 10.9 10.3 15.5 14.3
     [76]  9.7  3.4  8.0  9.7  2.3  6.3  6.3  6.9  5.1  2.8  4.6  7.4 15.5 10.9 10.3
     [91] 10.9  9.7 14.9 15.5  6.3 10.9 11.5  6.9 13.8 10.3 10.3  8.0 12.6  9.2 10.3
    [106] 10.3 16.6  6.9 14.3  8.0 11.5
    
    Intervals:
        min   max count
    1  2.05  9.45    49
    2  6.65 10.55    50
    3  8.95 12.85    47
    4 10.05 20.95    53
    
    Overlap between adjacent intervals:
    [1] 31 25 32



```R
xyplot(ozone ~ radiation | temp.cut * wind.cut, data = environmental, as.table = TRUE, 
    pch = 20, panel = function(x, y, ...) {
        panel.xyplot(x, y, ...)
        panel.loess(x, y)
    }, xlab = "Solar Radiation", ylab = "Ozone (ppb)", main = "Ozone vs. Solar Radiation")
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_14_0.png)


### Sploom

sploom function in R used to draw scatterplot matrices.


```R
splom(~environmental)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_15_0.png)

### Histogram



```R
histogram(~temperature | wind.cut, data = environmental, as.table = TRUE)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_16_0.png)



```R
histogram(~ozone | wind.cut, data = environmental, as.table = TRUE)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_17_0.png)



```R
histogram(~ozone | wind.cut * temp.cut, data = environmental, as.table = TRUE)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/05April2020/output_18_0.png)


