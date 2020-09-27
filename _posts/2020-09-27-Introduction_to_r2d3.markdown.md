---
layout: post
title:  "Introduction to r2d3"
date:   2020-09-27 22:02:38 +0530
categories: jekyll update
---


## Introduction to r2d3

r2d3 package developed by Rstudio. r2d3 package is a port from popular D3 library in to R for creating D3 visualisation.

r2d3 provides direct access to D3 objects , there by eliminating the tricky process of loading data in to javascript and browser.

In todays blog we generate bar chart using r2d3.

```R
devtools::install_github("rstudio/r2d3")
```

```R
library(r2d3)
```


```R
data <- data.frame(year=c(2011:2016), value=c(0.45, 0.47, 0.52, 0.7, 0.59, 0.47))
```


```R
head(data)
```


<table>
<caption>A data.frame: 6 × 2</caption>
<thead>
	<tr><th></th><th >year</th><th >value</th></tr>
</thead>
<tbody>
	<tr><th >1</th><td>2011</td><td>0.45</td></tr>
	<tr><th >2</th><td>2012</td><td>0.47</td></tr>
	<tr><th >3</th><td>2013</td><td>0.52</td></tr>
	<tr><th >4</th><td>2014</td><td>0.70</td></tr>
	<tr><th >5</th><td>2015</td><td>0.59</td></tr>
	<tr><th >6</th><td>2016</td><td>0.47</td></tr>
</tbody>
</table>


javascript bar.js (https://github.com/balakuntlaJayanth/Stats/blob/master/images/27_09_2020/bar.js)

```R
viz = r2d3(data=data, script = "bar.js", options = list(margin = 50,
                                                        barPadding = 2,
                                                        colour = "rgba(255,0,0,1)",
                                                        xLabel = "Year",
                                                        yLabel = "Value",
                                                        chartTitle = "Chart Title"))
```


```R
save_d3_html(
  viz,
  file ="bar.html",
  selfcontained = FALSE
)
```


```R
save_d3_png(viz, file='bar.png')
```

```R
library(r2d3svg)
```

```R
save_d3_svg(viz, file = "bar.svg")
save_d3_pdf(viz, file = "bar.pdf")
```
### Bar chart 

![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/27_09_2020/bar.png)


### References
- https://rstudio.github.io/r2d3/index.html