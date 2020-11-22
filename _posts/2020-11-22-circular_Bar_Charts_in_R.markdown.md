---
layout: post
title:  "Circular Bar charts in R"
date:   2020-11-22 22:02:38 +0530
categories: jekyll update
---

```R
library('tidyverse')
```

```R
data <- data.frame(id=seq(1,100),name=paste( "AB", seq(1,100), sep=""),value=sample(seq(10,100), 100, replace=T))
```


```R
head(data)
```


<table>
<caption>A data.frame: 6 × 3</caption>
<thead>
	<tr><th></th><th >id</th><th >name</th><th >value</th></tr>
</thead>
<tbody>
	<tr><th >1</th><td>1</td><td>AB1</td><td>10</td></tr>
	<tr><th >2</th><td>2</td><td>AB2</td><td>92</td></tr>
	<tr><th >3</th><td>3</td><td>AB3</td><td>14</td></tr>
	<tr><th >4</th><td>4</td><td>AB4</td><td>50</td></tr>
	<tr><th >5</th><td>5</td><td>AB5</td><td>65</td></tr>
	<tr><th >6</th><td>6</td><td>AB6</td><td>74</td></tr>
</tbody>
</table>




```R
summary(data)
```


           id             name               value       
     Min.   :  1.00   Length:100         Min.   : 10.00  
     1st Qu.: 25.75   Class :character   1st Qu.: 35.75  
     Median : 50.50   Mode  :character   Median : 55.50  
     Mean   : 50.50                      Mean   : 56.36  
     3rd Qu.: 75.25                      3rd Qu.: 78.25  
     Max.   :100.00                      Max.   :100.00  



```R
p <- ggplot(data, aes(x=as.factor(id), y=value)) +  geom_bar(stat="identity", fill=alpha("red", 0.2)) + ylim(-100,120) +coord_polar(start = 0)
```


```R
p
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Nov22_2020/output_5_0.png)



```R
p <- ggplot(data, aes(x=as.factor(id), y=value)) +  geom_bar(stat="identity", fill=alpha("red", 0.2)) + ylim(-100,120) + theme_minimal() +
  theme(
    axis.text = element_blank(),
    axis.title = element_blank(),
    panel.grid = element_blank(),
    plot.margin = unit(rep(-1,4), "cm") 
  )  +coord_polar(start = 0)
```


```R
p
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Nov22_2020/output_7_0.png)


### References

- https://ggplot2.tidyverse.org/reference/coord_polar.html


