---
layout: post
title:  "Pipe operator in R"
date:   2020-10-18 22:02:38 +0530
categories: jekyll update
---


## Pipe operator in R

```R
library('tidyverse')
```

Pipe operator is provided by magitrr library. pipe operator forwards a value from left side to function or expression in the right side. This remainds us the linux pipe operations.

In Linux pipe operator is represented by `|`. In R pipe operator is represented by `%>%`.

In Linux

```

cat file.txt | cut -f1

```

In the above linux pipe example cat command is used to read file then pipe operator is used to pass the contents of the file to cut command

Similarly in R



```R
library(magrittr)
library(dplyr)

mtcars %>% head
```

    
    Attaching package: ‘magrittr’
    
    
    The following object is masked from ‘package:purrr’:
    
        set_names
    
    
    The following object is masked from ‘package:tidyr’:
    
        extract
    
    



<table>
<caption>A data.frame: 6 × 11</caption>
<thead>
	<tr><th></th><th  >mpg</th><th  >cyl</th><th  >disp</th><th  >hp</th><th  >drat</th><th  >wt</th><th  >qsec</th><th  >vs</th><th  >am</th><th  >gear</th><th  >carb</th></tr>
	<tr><th></th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><th  Mazda RX4</th><td>21.0</td><td>6</td><td>160</td><td>110</td><td>3.90</td><td>2.620</td><td>16.46</td><td>0</td><td>1</td><td>4</td><td>4</td></tr>
	<tr><th  Mazda RX4 Wag</th><td>21.0</td><td>6</td><td>160</td><td>110</td><td>3.90</td><td>2.875</td><td>17.02</td><td>0</td><td>1</td><td>4</td><td>4</td></tr>
	<tr><th  Datsun 710</th><td>22.8</td><td>4</td><td>108</td><td> 93</td><td>3.85</td><td>2.320</td><td>18.61</td><td>1</td><td>1</td><td>4</td><td>1</td></tr>
	<tr><th  Hornet 4 Drive</th><td>21.4</td><td>6</td><td>258</td><td>110</td><td>3.08</td><td>3.215</td><td>19.44</td><td>1</td><td>0</td><td>3</td><td>1</td></tr>
	<tr><th  Hornet Sportabout</th><td>18.7</td><td>8</td><td>360</td><td>175</td><td>3.15</td><td>3.440</td><td>17.02</td><td>0</td><td>0</td><td>3</td><td>2</td></tr>
	<tr><th  Valiant</th><td>18.1</td><td>6</td><td>225</td><td>105</td><td>2.76</td><td>3.460</td><td>20.22</td><td>1</td><td>0</td><td>3</td><td>1</td></tr>
</tbody>
</table>


In the above example data in dataframe mtcars were piped to head command to display the top 6 rows

```R
a <- filter(mtcars, carb > 1)
b <- group_by(a, cyl)
c <- summarise(b, Avg_mpg = mean(mpg))
d <- arrange(c, desc(Avg_mpg))
print(d)
```

    `summarise()` ungrouping output (override with `.groups` argument)
    


    [38;5;246m# A tibble: 3 x 2[39m
        cyl Avg_mpg
      [3m[38;5;246m<dbl>[39m[23m   [3m[38;5;246m<dbl>[39m[23m
    [38;5;250m1[39m     4    25.9
    [38;5;250m2[39m     6    19.7
    [38;5;250m3[39m     8    15.1

The above code with pipe operator

```R
mtcars %>%
        filter(carb > 1) %>%
        group_by(cyl) %>%
        summarise(Avg_mpg = mean(mpg)) %>%
        arrange(desc(Avg_mpg))
```

    `summarise()` ungrouping output (override with `.groups` argument)
    



<table>
<caption>A tibble: 3 × 2</caption>
<thead>
	<tr><th  >cyl</th><th  >Avg_mpg</th></tr>
	<tr><th  >&lt;dbl&gt;</th><th  >&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>4</td><td>25.90</td></tr>
	<tr><td>6</td><td>19.74</td></tr>
	<tr><td>8</td><td>15.10</td></tr>
</tbody>
</table>



### References
- https://magrittr.tidyverse.org/index.html