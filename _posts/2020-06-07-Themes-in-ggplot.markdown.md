---
layout: post
title:  "Themes in ggplot"
date:   2020-06-07 22:02:38 +0530
categories: jekyll update
---

### Themes in ggplot

Themes play a major role in customising the plots. 

The more comon theme is theme_grey(). The theme_grey() is the default theme .

The theme_grey() typical grey background and white grid lines and data forward. 

The grey background gives the plot a similar typographic colour to the text, ensuring that the graphics fit in with the flow of a document without jumping out with a bright white background. Finally, the grey background creates a continuous field of colour which ensures that the plot is perceived as a single visual entity.

There are 7 other themes .

theme_bw(): a variation on theme_grey() that uses a white background and thin grey grid lines.

theme_linedraw(): A theme with only black lines of various widths on white backgrounds, reminiscent of a line drawing.

theme_light(): similar to theme_linedraw() but with light grey lines and axes, to direct more attention towards the data.

theme_dark(): the dark cousin of theme_light(), with similar line sizes but a dark background. Useful to make thin coloured lines pop out.

theme_minimal(): A minimalistic theme with no background annotations.

theme_classic(): A classic-looking theme, with x and y axis lines and no gridlines.

theme_void(): A completely empty theme.



```R
data("ToothGrowth")
```


```R
library(ggplot2)
p <- ggplot(ToothGrowth, aes(x = dose, y = len)) + 
  geom_boxplot()
```


```R
p + theme_gray(base_size = 14) 
```




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/June07_2020/output_2_1.png)



```R
p + theme_bw()
```





![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/June07_2020/output_3_1.png)



```R
base <- ggplot(ToothGrowth, aes(x =dose, y = len)) + geom_boxplot()
base + theme_grey() + ggtitle("theme_grey()")
base + theme_bw() + ggtitle("theme_bw()")
base + theme_linedraw() + ggtitle("theme_linedraw()")
```





![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/June07_2020/output_4_1.png)





![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/June07_2020/output_4_3.png)



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/June07_2020/output_4_4.png)



```R
library(ggthemes)
base + theme_tufte() + ggtitle("theme_tufte()")
base + theme_solarized() + ggtitle("theme_solarized()")
base + theme_excel() + ggtitle("theme_excel()") # ;)
```





![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/June07_2020/output_5_1.png)






![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/June07_2020/output_5_3.png)



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/June07_2020/output_5_4.png)


### References
https://ggplot2.tidyverse.org/reference/ggtheme.html
