---
layout: post
title:  "Data Analysis in R  part II "
date:   2020-03-29 22:02:38 +0530
categories: jekyll update
---



## EDA data analysis in R - Part II
```R
library(dplyr)
```

    
    Attaching package: ‘dplyr’
    
    
    The following objects are masked from ‘package:stats’:
    
        filter, lag
    
    
    The following objects are masked from ‘package:base’:
    
        intersect, setdiff, setequal, union
    
    



```R
chicago <- readRDS("//home//ab//Desktop//chicago.rds")
```


```R
head(chicago)
```


<table>
<caption>A data.frame: 6 × 8</caption>
<thead>
	<tr><th scope=col>city</th><th scope=col>tmpd</th><th scope=col>dptp</th><th scope=col>date</th><th scope=col>pm25tmean2</th><th scope=col>pm10tmean2</th><th scope=col>o3tmean2</th><th scope=col>no2tmean2</th></tr>
	<tr><th scope=col>&lt;chr&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;date&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>chic</td><td>31.5</td><td>31.500</td><td>1987-01-01</td><td>NA</td><td>34.00000</td><td>4.250000</td><td>19.98810</td></tr>
	<tr><td>chic</td><td>33.0</td><td>29.875</td><td>1987-01-02</td><td>NA</td><td>      NA</td><td>3.304348</td><td>23.19099</td></tr>
	<tr><td>chic</td><td>33.0</td><td>27.375</td><td>1987-01-03</td><td>NA</td><td>34.16667</td><td>3.333333</td><td>23.81548</td></tr>
	<tr><td>chic</td><td>29.0</td><td>28.625</td><td>1987-01-04</td><td>NA</td><td>47.00000</td><td>4.375000</td><td>30.43452</td></tr>
	<tr><td>chic</td><td>32.0</td><td>28.875</td><td>1987-01-05</td><td>NA</td><td>      NA</td><td>4.750000</td><td>30.33333</td></tr>
	<tr><td>chic</td><td>40.0</td><td>35.125</td><td>1987-01-06</td><td>NA</td><td>48.00000</td><td>5.833333</td><td>25.77233</td></tr>
</tbody>
</table>




```R
summary(chicago)
```


         city                tmpd             dptp             date           
     Length:6940        Min.   :-16.00   Min.   :-25.62   Min.   :1987-01-01  
     Class :character   1st Qu.: 35.00   1st Qu.: 27.00   1st Qu.:1991-10-01  
     Mode  :character   Median : 51.00   Median : 39.88   Median :1996-07-01  
                        Mean   : 50.31   Mean   : 40.34   Mean   :1996-07-01  
                        3rd Qu.: 67.00   3rd Qu.: 55.75   3rd Qu.:2001-04-01  
                        Max.   : 92.00   Max.   : 78.25   Max.   :2005-12-31  
                        NA's   :1        NA's   :2                            
       pm25tmean2      pm10tmean2        o3tmean2         no2tmean2     
     Min.   : 1.70   Min.   :  2.00   Min.   : 0.1528   Min.   : 6.158  
     1st Qu.: 9.70   1st Qu.: 21.50   1st Qu.:10.0729   1st Qu.:19.654  
     Median :14.66   Median : 30.28   Median :18.5218   Median :24.556  
     Mean   :16.23   Mean   : 33.90   Mean   :19.4355   Mean   :25.232  
     3rd Qu.:20.60   3rd Qu.: 42.00   3rd Qu.:27.0010   3rd Qu.:30.139  
     Max.   :61.50   Max.   :365.00   Max.   :66.5875   Max.   :62.480  
     NA's   :4447    NA's   :242                                        



```R
dim(chicago)
```


<ol class=list-inline>
	<li>6940</li>
	<li>8</li>
</ol>




```R
str(chicago)
```

    'data.frame':	6940 obs. of  8 variables:
     $ city      : chr  "chic" "chic" "chic" "chic" ...
     $ tmpd      : num  31.5 33 33 29 32 40 34.5 29 26.5 32.5 ...
     $ dptp      : num  31.5 29.9 27.4 28.6 28.9 ...
     $ date      : Date, format: "1987-01-01" "1987-01-02" ...
     $ pm25tmean2: num  NA NA NA NA NA NA NA NA NA NA ...
     $ pm10tmean2: num  34 NA 34.2 47 NA ...
     $ o3tmean2  : num  4.25 3.3 3.33 4.38 4.75 ...
     $ no2tmean2 : num  20 23.2 23.8 30.4 30.3 ...



```R
head(chicago)
```


<table>
<caption>A data.frame: 6 × 8</caption>
<thead>
	<tr><th scope=col>city</th><th scope=col>tmpd</th><th scope=col>dptp</th><th scope=col>date</th><th scope=col>pm25tmean2</th><th scope=col>pm10tmean2</th><th scope=col>o3tmean2</th><th scope=col>no2tmean2</th></tr>
	<tr><th scope=col>&lt;chr&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;date&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>chic</td><td>31.5</td><td>31.500</td><td>1987-01-01</td><td>NA</td><td>34.00000</td><td>4.250000</td><td>19.98810</td></tr>
	<tr><td>chic</td><td>33.0</td><td>29.875</td><td>1987-01-02</td><td>NA</td><td>      NA</td><td>3.304348</td><td>23.19099</td></tr>
	<tr><td>chic</td><td>33.0</td><td>27.375</td><td>1987-01-03</td><td>NA</td><td>34.16667</td><td>3.333333</td><td>23.81548</td></tr>
	<tr><td>chic</td><td>29.0</td><td>28.625</td><td>1987-01-04</td><td>NA</td><td>47.00000</td><td>4.375000</td><td>30.43452</td></tr>
	<tr><td>chic</td><td>32.0</td><td>28.875</td><td>1987-01-05</td><td>NA</td><td>      NA</td><td>4.750000</td><td>30.33333</td></tr>
	<tr><td>chic</td><td>40.0</td><td>35.125</td><td>1987-01-06</td><td>NA</td><td>48.00000</td><td>5.833333</td><td>25.77233</td></tr>
</tbody>
</table>




```R
select(chicago, -(city:dptp))
```


<table>
<caption>A data.frame: 6940 × 5</caption>
<thead>
	<tr><th scope=col>date</th><th scope=col>pm25tmean2</th><th scope=col>pm10tmean2</th><th scope=col>o3tmean2</th><th scope=col>no2tmean2</th></tr>
	<tr><th scope=col>&lt;date&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>1987-01-01</td><td>NA</td><td>34.00000</td><td> 4.250000</td><td>19.98810</td></tr>
	<tr><td>1987-01-02</td><td>NA</td><td>      NA</td><td> 3.304348</td><td>23.19099</td></tr>
	<tr><td>1987-01-03</td><td>NA</td><td>34.16667</td><td> 3.333333</td><td>23.81548</td></tr>
	<tr><td>1987-01-04</td><td>NA</td><td>47.00000</td><td> 4.375000</td><td>30.43452</td></tr>
	<tr><td>1987-01-05</td><td>NA</td><td>      NA</td><td> 4.750000</td><td>30.33333</td></tr>
	<tr><td>1987-01-06</td><td>NA</td><td>48.00000</td><td> 5.833333</td><td>25.77233</td></tr>
	<tr><td>1987-01-07</td><td>NA</td><td>41.00000</td><td> 9.291667</td><td>20.58171</td></tr>
	<tr><td>1987-01-08</td><td>NA</td><td>36.00000</td><td>11.291667</td><td>17.03723</td></tr>
	<tr><td>1987-01-09</td><td>NA</td><td>33.28571</td><td> 4.500000</td><td>23.38889</td></tr>
	<tr><td>1987-01-10</td><td>NA</td><td>      NA</td><td> 4.958333</td><td>19.54167</td></tr>
	<tr><td>1987-01-11</td><td>NA</td><td>22.00000</td><td>17.541667</td><td>13.70139</td></tr>
	<tr><td>1987-01-12</td><td>NA</td><td>26.00000</td><td> 8.000000</td><td>33.02083</td></tr>
	<tr><td>1987-01-13</td><td>NA</td><td>53.00000</td><td> 4.958333</td><td>38.06142</td></tr>
	<tr><td>1987-01-14</td><td>NA</td><td>43.00000</td><td> 4.208333</td><td>32.19444</td></tr>
	<tr><td>1987-01-15</td><td>NA</td><td>28.83333</td><td> 4.458333</td><td>18.87131</td></tr>
	<tr><td>1987-01-16</td><td>NA</td><td>19.00000</td><td> 7.916667</td><td>19.46667</td></tr>
	<tr><td>1987-01-17</td><td>NA</td><td>      NA</td><td> 5.833333</td><td>20.70833</td></tr>
	<tr><td>1987-01-18</td><td>NA</td><td>39.00000</td><td> 6.375000</td><td>21.03333</td></tr>
	<tr><td>1987-01-19</td><td>NA</td><td>32.00000</td><td>14.875000</td><td>17.17409</td></tr>
	<tr><td>1987-01-20</td><td>NA</td><td>38.00000</td><td> 7.250000</td><td>21.61021</td></tr>
	<tr><td>1987-01-21</td><td>NA</td><td>32.85714</td><td> 8.913043</td><td>24.52083</td></tr>
	<tr><td>1987-01-22</td><td>NA</td><td>52.00000</td><td>10.500000</td><td>16.98798</td></tr>
	<tr><td>1987-01-23</td><td>NA</td><td>55.00000</td><td>14.625000</td><td>14.66250</td></tr>
	<tr><td>1987-01-24</td><td>NA</td><td>38.00000</td><td>10.083333</td><td>18.69167</td></tr>
	<tr><td>1987-01-25</td><td>NA</td><td>      NA</td><td> 6.666667</td><td>26.30417</td></tr>
	<tr><td>1987-01-26</td><td>NA</td><td>71.00000</td><td> 4.583333</td><td>32.42143</td></tr>
	<tr><td>1987-01-27</td><td>NA</td><td>39.33333</td><td> 6.000000</td><td>30.69306</td></tr>
	<tr><td>1987-01-28</td><td>NA</td><td>47.00000</td><td> 6.875000</td><td>29.12943</td></tr>
	<tr><td>1987-01-29</td><td>NA</td><td>35.00000</td><td> 2.916667</td><td>28.14529</td></tr>
	<tr><td>1987-01-30</td><td>NA</td><td>59.00000</td><td> 8.791667</td><td>19.79861</td></tr>
	<tr><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td></tr>
	<tr><td>2005-12-02</td><td>      NA</td><td>19.50</td><td> 9.156250</td><td>23.29167</td></tr>
	<tr><td>2005-12-03</td><td>13.34286</td><td>20.00</td><td>10.333333</td><td>25.19444</td></tr>
	<tr><td>2005-12-04</td><td>15.30000</td><td>15.50</td><td>13.177083</td><td>21.70833</td></tr>
	<tr><td>2005-12-05</td><td>      NA</td><td>30.00</td><td> 6.447917</td><td>28.38889</td></tr>
	<tr><td>2005-12-06</td><td>24.61667</td><td>33.00</td><td> 4.701540</td><td>29.08333</td></tr>
	<tr><td>2005-12-07</td><td>37.80000</td><td>39.00</td><td> 3.916214</td><td>34.30952</td></tr>
	<tr><td>2005-12-08</td><td>24.30000</td><td>31.00</td><td> 5.995265</td><td>34.22222</td></tr>
	<tr><td>2005-12-09</td><td>25.45000</td><td>22.00</td><td> 5.958333</td><td>31.41667</td></tr>
	<tr><td>2005-12-10</td><td>18.20000</td><td>30.00</td><td> 9.135417</td><td>28.70833</td></tr>
	<tr><td>2005-12-11</td><td>10.60000</td><td>14.00</td><td>11.333333</td><td>22.55556</td></tr>
	<tr><td>2005-12-12</td><td>19.22500</td><td>28.75</td><td> 5.031250</td><td>39.74621</td></tr>
	<tr><td>2005-12-13</td><td>26.50000</td><td>21.00</td><td> 6.628623</td><td>29.56944</td></tr>
	<tr><td>2005-12-14</td><td>26.90000</td><td>16.00</td><td> 3.802083</td><td>30.63384</td></tr>
	<tr><td>2005-12-15</td><td>14.40000</td><td>16.50</td><td> 4.895833</td><td>25.43056</td></tr>
	<tr><td>2005-12-16</td><td>11.00000</td><td>22.00</td><td>11.166667</td><td>16.87500</td></tr>
	<tr><td>2005-12-17</td><td>13.80000</td><td>20.00</td><td> 8.593750</td><td>20.73611</td></tr>
	<tr><td>2005-12-18</td><td>12.20000</td><td>17.50</td><td>13.552083</td><td>19.11111</td></tr>
	<tr><td>2005-12-19</td><td>21.15000</td><td>21.00</td><td> 8.058877</td><td>31.79167</td></tr>
	<tr><td>2005-12-20</td><td>25.75000</td><td>32.00</td><td> 3.849185</td><td>32.89773</td></tr>
	<tr><td>2005-12-21</td><td>37.92857</td><td>59.50</td><td> 3.663949</td><td>34.86111</td></tr>
	<tr><td>2005-12-22</td><td>36.65000</td><td>42.50</td><td> 5.385417</td><td>33.73026</td></tr>
	<tr><td>2005-12-23</td><td>32.90000</td><td>34.50</td><td> 6.906250</td><td>29.08333</td></tr>
	<tr><td>2005-12-24</td><td>30.77143</td><td>25.20</td><td> 1.770833</td><td>31.98611</td></tr>
	<tr><td>2005-12-25</td><td> 6.70000</td><td> 8.00</td><td>14.354167</td><td>13.79167</td></tr>
	<tr><td>2005-12-26</td><td> 8.40000</td><td> 8.50</td><td>14.041667</td><td>16.81944</td></tr>
	<tr><td>2005-12-27</td><td>23.56000</td><td>27.00</td><td> 4.468750</td><td>23.50000</td></tr>
	<tr><td>2005-12-28</td><td>17.75000</td><td>27.50</td><td> 3.260417</td><td>19.28563</td></tr>
	<tr><td>2005-12-29</td><td> 7.45000</td><td>23.50</td><td> 6.794837</td><td>19.97222</td></tr>
	<tr><td>2005-12-30</td><td>15.05714</td><td>19.20</td><td> 3.034420</td><td>22.80556</td></tr>
	<tr><td>2005-12-31</td><td>15.00000</td><td>23.50</td><td> 2.531250</td><td>13.25000</td></tr>
</tbody>
</table>




```R
select(chicago, (city:dptp))
```


<table>
<caption>A data.frame: 6940 × 3</caption>
<thead>
	<tr><th scope=col>city</th><th scope=col>tmpd</th><th scope=col>dptp</th></tr>
	<tr><th scope=col>&lt;chr&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>chic</td><td>31.5</td><td> 31.500</td></tr>
	<tr><td>chic</td><td>33.0</td><td> 29.875</td></tr>
	<tr><td>chic</td><td>33.0</td><td> 27.375</td></tr>
	<tr><td>chic</td><td>29.0</td><td> 28.625</td></tr>
	<tr><td>chic</td><td>32.0</td><td> 28.875</td></tr>
	<tr><td>chic</td><td>40.0</td><td> 35.125</td></tr>
	<tr><td>chic</td><td>34.5</td><td> 26.750</td></tr>
	<tr><td>chic</td><td>29.0</td><td> 22.000</td></tr>
	<tr><td>chic</td><td>26.5</td><td> 29.000</td></tr>
	<tr><td>chic</td><td>32.5</td><td> 27.750</td></tr>
	<tr><td>chic</td><td>29.5</td><td> 20.125</td></tr>
	<tr><td>chic</td><td>34.5</td><td> 26.000</td></tr>
	<tr><td>chic</td><td>34.0</td><td> 32.250</td></tr>
	<tr><td>chic</td><td>37.5</td><td> 36.375</td></tr>
	<tr><td>chic</td><td>32.5</td><td> 24.250</td></tr>
	<tr><td>chic</td><td>25.0</td><td> 21.500</td></tr>
	<tr><td>chic</td><td>27.0</td><td> 24.750</td></tr>
	<tr><td>chic</td><td>17.5</td><td> 11.125</td></tr>
	<tr><td>chic</td><td>23.0</td><td> 15.750</td></tr>
	<tr><td>chic</td><td>20.5</td><td> 11.500</td></tr>
	<tr><td>chic</td><td>22.0</td><td> 20.625</td></tr>
	<tr><td>chic</td><td>19.5</td><td>  7.375</td></tr>
	<tr><td>chic</td><td> 2.5</td><td>-12.250</td></tr>
	<tr><td>chic</td><td> 2.0</td><td> -5.625</td></tr>
	<tr><td>chic</td><td> 9.5</td><td> -5.250</td></tr>
	<tr><td>chic</td><td>16.0</td><td>  4.750</td></tr>
	<tr><td>chic</td><td>17.5</td><td> 17.750</td></tr>
	<tr><td>chic</td><td>29.5</td><td> 18.250</td></tr>
	<tr><td>chic</td><td>29.5</td><td> 32.875</td></tr>
	<tr><td>chic</td><td>32.5</td><td> 24.125</td></tr>
	<tr><td>⋮</td><td>⋮</td><td>⋮</td></tr>
	<tr><td>chic</td><td>19</td><td> 8.5</td></tr>
	<tr><td>chic</td><td>25</td><td>19.0</td></tr>
	<tr><td>chic</td><td>20</td><td>15.8</td></tr>
	<tr><td>chic</td><td>11</td><td> 2.8</td></tr>
	<tr><td>chic</td><td>11</td><td> 3.2</td></tr>
	<tr><td>chic</td><td> 8</td><td>-1.8</td></tr>
	<tr><td>chic</td><td>16</td><td>15.6</td></tr>
	<tr><td>chic</td><td>20</td><td>10.9</td></tr>
	<tr><td>chic</td><td>22</td><td>16.2</td></tr>
	<tr><td>chic</td><td>20</td><td>17.2</td></tr>
	<tr><td>chic</td><td>19</td><td>11.6</td></tr>
	<tr><td>chic</td><td>26</td><td>19.8</td></tr>
	<tr><td>chic</td><td>32</td><td>27.4</td></tr>
	<tr><td>chic</td><td>30</td><td>27.9</td></tr>
	<tr><td>chic</td><td>21</td><td>14.7</td></tr>
	<tr><td>chic</td><td>16</td><td> 7.3</td></tr>
	<tr><td>chic</td><td>10</td><td> 1.9</td></tr>
	<tr><td>chic</td><td> 5</td><td>-0.3</td></tr>
	<tr><td>chic</td><td>13</td><td> 7.7</td></tr>
	<tr><td>chic</td><td>12</td><td> 7.7</td></tr>
	<tr><td>chic</td><td>22</td><td>23.3</td></tr>
	<tr><td>chic</td><td>41</td><td>32.6</td></tr>
	<tr><td>chic</td><td>37</td><td>35.2</td></tr>
	<tr><td>chic</td><td>35</td><td>32.1</td></tr>
	<tr><td>chic</td><td>35</td><td>29.6</td></tr>
	<tr><td>chic</td><td>40</td><td>33.6</td></tr>
	<tr><td>chic</td><td>37</td><td>34.5</td></tr>
	<tr><td>chic</td><td>35</td><td>29.4</td></tr>
	<tr><td>chic</td><td>36</td><td>31.0</td></tr>
	<tr><td>chic</td><td>35</td><td>30.1</td></tr>
</tbody>
</table>




```R
i <- match("city", names(chicago))
```


```R
head(i)
```


1



```R
subset <- select(chicago, ends_with("2"))
```


```R
head(subset)
```


<table>
<caption>A data.frame: 6 × 4</caption>
<thead>
	<tr><th scope=col>pm25tmean2</th><th scope=col>pm10tmean2</th><th scope=col>o3tmean2</th><th scope=col>no2tmean2</th></tr>
	<tr><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>NA</td><td>34.00000</td><td>4.250000</td><td>19.98810</td></tr>
	<tr><td>NA</td><td>      NA</td><td>3.304348</td><td>23.19099</td></tr>
	<tr><td>NA</td><td>34.16667</td><td>3.333333</td><td>23.81548</td></tr>
	<tr><td>NA</td><td>47.00000</td><td>4.375000</td><td>30.43452</td></tr>
	<tr><td>NA</td><td>      NA</td><td>4.750000</td><td>30.33333</td></tr>
	<tr><td>NA</td><td>48.00000</td><td>5.833333</td><td>25.77233</td></tr>
</tbody>
</table>




```R
chic.f <- filter(chicago, pm25tmean2 > 30)
```


```R
summary(chic.f$pm25tmean2)
```


       Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
      30.05   32.12   35.04   36.63   39.53   61.50 



```R
list(chic.f)
```


<ol>
	<li><table>
<caption>A data.frame: 194 × 8</caption>
<thead>
	<tr><th scope=col>city</th><th scope=col>tmpd</th><th scope=col>dptp</th><th scope=col>date</th><th scope=col>pm25tmean2</th><th scope=col>pm10tmean2</th><th scope=col>o3tmean2</th><th scope=col>no2tmean2</th></tr>
	<tr><th scope=col>&lt;chr&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;date&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>chic</td><td>23</td><td>21.9</td><td>1998-01-17</td><td>38.10000</td><td>32.46154</td><td> 3.1805556</td><td>25.30000</td></tr>
	<tr><td>chic</td><td>28</td><td>25.8</td><td>1998-01-23</td><td>33.95000</td><td>38.69231</td><td> 1.7500000</td><td>29.37630</td></tr>
	<tr><td>chic</td><td>55</td><td>51.3</td><td>1998-04-30</td><td>39.40000</td><td>34.00000</td><td>10.7862319</td><td>25.31310</td></tr>
	<tr><td>chic</td><td>59</td><td>53.7</td><td>1998-05-01</td><td>35.40000</td><td>28.50000</td><td>14.2951252</td><td>31.42905</td></tr>
	<tr><td>chic</td><td>57</td><td>52.0</td><td>1998-05-02</td><td>33.30000</td><td>35.00000</td><td>20.6628788</td><td>26.79861</td></tr>
	<tr><td>chic</td><td>57</td><td>56.0</td><td>1998-05-07</td><td>32.10000</td><td>34.50000</td><td>24.2704216</td><td>33.99167</td></tr>
	<tr><td>chic</td><td>75</td><td>65.8</td><td>1998-05-15</td><td>56.50000</td><td>91.00000</td><td>38.5730072</td><td>29.03261</td></tr>
	<tr><td>chic</td><td>61</td><td>59.0</td><td>1998-06-09</td><td>33.80000</td><td>26.00000</td><td>17.8908103</td><td>25.49668</td></tr>
	<tr><td>chic</td><td>73</td><td>60.3</td><td>1998-07-13</td><td>30.30000</td><td>64.50000</td><td>37.0188645</td><td>37.93056</td></tr>
	<tr><td>chic</td><td>78</td><td>67.1</td><td>1998-07-14</td><td>41.40000</td><td>75.00000</td><td>40.0809017</td><td>32.59054</td></tr>
	<tr><td>chic</td><td>79</td><td>66.1</td><td>1998-07-15</td><td>32.60000</td><td>57.50000</td><td>40.2307013</td><td>24.52597</td></tr>
	<tr><td>chic</td><td>78</td><td>64.8</td><td>1998-08-03</td><td>36.40000</td><td>61.53846</td><td>34.8022069</td><td>24.71528</td></tr>
	<tr><td>chic</td><td>77</td><td>70.1</td><td>1998-08-09</td><td>32.50000</td><td>35.61538</td><td>22.7666667</td><td>23.56944</td></tr>
	<tr><td>chic</td><td>81</td><td>71.2</td><td>1998-08-23</td><td>39.60000</td><td>59.00000</td><td>45.8636364</td><td>14.32639</td></tr>
	<tr><td>chic</td><td>81</td><td>70.4</td><td>1998-09-06</td><td>31.50000</td><td>50.50000</td><td>50.6625000</td><td>20.31250</td></tr>
	<tr><td>chic</td><td>72</td><td>60.9</td><td>1998-09-19</td><td>33.70000</td><td>58.50000</td><td>37.6250000</td><td>35.72222</td></tr>
	<tr><td>chic</td><td>76</td><td>66.3</td><td>1998-09-20</td><td>30.30000</td><td>47.58333</td><td>22.0227273</td><td>27.79861</td></tr>
	<tr><td>chic</td><td>66</td><td>64.1</td><td>1998-09-25</td><td>31.60000</td><td>57.50000</td><td>12.3043478</td><td>34.63345</td></tr>
	<tr><td>chic</td><td>65</td><td>61.4</td><td>1998-10-05</td><td>32.50000</td><td>37.00000</td><td>12.3833992</td><td>19.40000</td></tr>
	<tr><td>chic</td><td>56</td><td>49.1</td><td>1998-10-11</td><td>30.90000</td><td>34.50000</td><td>22.1916667</td><td>28.34167</td></tr>
	<tr><td>chic</td><td>67</td><td>64.4</td><td>1998-10-17</td><td>32.20000</td><td>46.50000</td><td>24.3708333</td><td>21.25000</td></tr>
	<tr><td>chic</td><td>63</td><td>58.6</td><td>1998-10-27</td><td>36.10000</td><td>64.50000</td><td> 5.2090580</td><td>39.39167</td></tr>
	<tr><td>chic</td><td>61</td><td>58.4</td><td>1998-10-30</td><td>41.00000</td><td>45.00000</td><td> 1.4791667</td><td>23.02500</td></tr>
	<tr><td>chic</td><td>37</td><td>31.8</td><td>1998-11-08</td><td>33.70000</td><td>34.00000</td><td> 5.8437500</td><td>30.40625</td></tr>
	<tr><td>chic</td><td>43</td><td>37.3</td><td>1998-11-09</td><td>36.50000</td><td>45.00000</td><td> 6.1385870</td><td>28.19067</td></tr>
	<tr><td>chic</td><td>63</td><td>58.4</td><td>1998-11-29</td><td>31.70000</td><td>43.50000</td><td>10.3472222</td><td>15.51667</td></tr>
	<tr><td>chic</td><td>61</td><td>59.3</td><td>1998-12-04</td><td>31.60000</td><td>42.50000</td><td> 0.5555556</td><td>24.39167</td></tr>
	<tr><td>chic</td><td>34</td><td>28.0</td><td>1999-01-30</td><td>31.92857</td><td>38.00000</td><td>15.2222222</td><td>24.66667</td></tr>
	<tr><td>chic</td><td>36</td><td>27.5</td><td>1999-01-31</td><td>32.50000</td><td>22.50000</td><td>20.5972222</td><td>16.10833</td></tr>
	<tr><td>chic</td><td>27</td><td>22.9</td><td>1999-02-24</td><td>39.90000</td><td>52.50000</td><td> 3.3750000</td><td>31.75000</td></tr>
	<tr><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td><td>⋮</td></tr>
	<tr><td>chic</td><td>44</td><td>41.2</td><td>2004-12-30</td><td>35.50000</td><td>28.0</td><td> 7.052083</td><td>24.84722</td></tr>
	<tr><td>chic</td><td>33</td><td>27.1</td><td>2005-01-25</td><td>32.77143</td><td>38.5</td><td> 5.704257</td><td>36.40399</td></tr>
	<tr><td>chic</td><td>28</td><td>17.2</td><td>2005-01-29</td><td>32.70000</td><td>37.5</td><td> 3.760417</td><td>39.00000</td></tr>
	<tr><td>chic</td><td>28</td><td>22.0</td><td>2005-01-31</td><td>45.52857</td><td>54.0</td><td> 7.083333</td><td>43.58532</td></tr>
	<tr><td>chic</td><td>26</td><td>20.0</td><td>2005-02-02</td><td>52.00000</td><td>50.5</td><td> 6.241477</td><td>46.36111</td></tr>
	<tr><td>chic</td><td>30</td><td>25.0</td><td>2005-02-03</td><td>47.45000</td><td>53.6</td><td> 7.269022</td><td>48.59722</td></tr>
	<tr><td>chic</td><td>36</td><td>32.1</td><td>2005-02-04</td><td>61.50000</td><td>57.5</td><td> 4.812500</td><td>41.52778</td></tr>
	<tr><td>chic</td><td>46</td><td>35.5</td><td>2005-02-05</td><td>39.50000</td><td>40.5</td><td> 8.906250</td><td>29.05556</td></tr>
	<tr><td>chic</td><td>32</td><td>26.6</td><td>2005-03-04</td><td>36.90000</td><td>54.5</td><td> 5.395833</td><td>46.56944</td></tr>
	<tr><td>chic</td><td>62</td><td>56.7</td><td>2005-05-19</td><td>31.52857</td><td>43.5</td><td>21.060559</td><td>27.22917</td></tr>
	<tr><td>chic</td><td>86</td><td>63.4</td><td>2005-06-24</td><td>31.85714</td><td>74.0</td><td>50.966486</td><td>23.75000</td></tr>
	<tr><td>chic</td><td>82</td><td>64.6</td><td>2005-06-27</td><td>51.53750</td><td>79.0</td><td>55.235857</td><td>28.54937</td></tr>
	<tr><td>chic</td><td>85</td><td>64.1</td><td>2005-06-28</td><td>31.20000</td><td>57.5</td><td>50.291440</td><td>26.55398</td></tr>
	<tr><td>chic</td><td>84</td><td>67.0</td><td>2005-07-17</td><td>32.70000</td><td>42.5</td><td>44.643229</td><td>16.27083</td></tr>
	<tr><td>chic</td><td>79</td><td>66.1</td><td>2005-08-02</td><td>44.48750</td><td>60.0</td><td>40.671309</td><td>29.28034</td></tr>
	<tr><td>chic</td><td>84</td><td>69.0</td><td>2005-08-03</td><td>37.90000</td><td>64.0</td><td>39.321105</td><td>23.61932</td></tr>
	<tr><td>chic</td><td>78</td><td>57.8</td><td>2005-08-08</td><td>31.66250</td><td>55.4</td><td>39.612885</td><td>38.86973</td></tr>
	<tr><td>chic</td><td>80</td><td>63.5</td><td>2005-08-09</td><td>33.00000</td><td>65.5</td><td>43.286345</td><td>28.88451</td></tr>
	<tr><td>chic</td><td>75</td><td>64.3</td><td>2005-08-26</td><td>31.30000</td><td>49.4</td><td>37.456439</td><td>30.95218</td></tr>
	<tr><td>chic</td><td>78</td><td>60.3</td><td>2005-09-07</td><td>32.37143</td><td>53.8</td><td>39.428216</td><td>34.72321</td></tr>
	<tr><td>chic</td><td>80</td><td>62.9</td><td>2005-09-10</td><td>37.88750</td><td>55.0</td><td>47.578125</td><td>19.38542</td></tr>
	<tr><td>chic</td><td>80</td><td>61.8</td><td>2005-09-11</td><td>56.50000</td><td>65.0</td><td>51.739583</td><td>18.87500</td></tr>
	<tr><td>chic</td><td>79</td><td>57.7</td><td>2005-09-12</td><td>44.30000</td><td>78.5</td><td>44.542346</td><td>28.04836</td></tr>
	<tr><td>chic</td><td>54</td><td>49.4</td><td>2005-10-31</td><td>31.92500</td><td>39.2</td><td>11.425795</td><td>21.57790</td></tr>
	<tr><td>chic</td><td>55</td><td>49.8</td><td>2005-11-08</td><td>40.00000</td><td>36.5</td><td> 4.100543</td><td>27.22222</td></tr>
	<tr><td>chic</td><td> 8</td><td>-1.8</td><td>2005-12-07</td><td>37.80000</td><td>39.0</td><td> 3.916214</td><td>34.30952</td></tr>
	<tr><td>chic</td><td>12</td><td> 7.7</td><td>2005-12-21</td><td>37.92857</td><td>59.5</td><td> 3.663949</td><td>34.86111</td></tr>
	<tr><td>chic</td><td>22</td><td>23.3</td><td>2005-12-22</td><td>36.65000</td><td>42.5</td><td> 5.385417</td><td>33.73026</td></tr>
	<tr><td>chic</td><td>41</td><td>32.6</td><td>2005-12-23</td><td>32.90000</td><td>34.5</td><td> 6.906250</td><td>29.08333</td></tr>
	<tr><td>chic</td><td>37</td><td>35.2</td><td>2005-12-24</td><td>30.77143</td><td>25.2</td><td> 1.770833</td><td>31.98611</td></tr>
</tbody>
</table>
</li>
</ol>




```R
colnames(chic.f)
```


<ol class=list-inline>
	<li>'city'</li>
	<li>'tmpd'</li>
	<li>'dptp'</li>
	<li>'date'</li>
	<li>'pm25tmean2'</li>
	<li>'pm10tmean2'</li>
	<li>'o3tmean2'</li>
	<li>'no2tmean2'</li>
</ol>




```R
rownames(chic.f)
```


<ol class=list-inline>
	<li>'1'</li>
	<li>'2'</li>
	<li>'3'</li>
	<li>'4'</li>
	<li>'5'</li>
	<li>'6'</li>
	<li>'7'</li>
	<li>'8'</li>
	<li>'9'</li>
	<li>'10'</li>
	<li>'11'</li>
	<li>'12'</li>
	<li>'13'</li>
	<li>'14'</li>
	<li>'15'</li>
	<li>'16'</li>
	<li>'17'</li>
	<li>'18'</li>
	<li>'19'</li>
	<li>'20'</li>
	<li>'21'</li>
	<li>'22'</li>
	<li>'23'</li>
	<li>'24'</li>
	<li>'25'</li>
	<li>'26'</li>
	<li>'27'</li>
	<li>'28'</li>
	<li>'29'</li>
	<li>'30'</li>
	<li>'31'</li>
	<li>'32'</li>
	<li>'33'</li>
	<li>'34'</li>
	<li>'35'</li>
	<li>'36'</li>
	<li>'37'</li>
	<li>'38'</li>
	<li>'39'</li>
	<li>'40'</li>
	<li>'41'</li>
	<li>'42'</li>
	<li>'43'</li>
	<li>'44'</li>
	<li>'45'</li>
	<li>'46'</li>
	<li>'47'</li>
	<li>'48'</li>
	<li>'49'</li>
	<li>'50'</li>
	<li>'51'</li>
	<li>'52'</li>
	<li>'53'</li>
	<li>'54'</li>
	<li>'55'</li>
	<li>'56'</li>
	<li>'57'</li>
	<li>'58'</li>
	<li>'59'</li>
	<li>'60'</li>
	<li>'61'</li>
	<li>'62'</li>
	<li>'63'</li>
	<li>'64'</li>
	<li>'65'</li>
	<li>'66'</li>
	<li>'67'</li>
	<li>'68'</li>
	<li>'69'</li>
	<li>'70'</li>
	<li>'71'</li>
	<li>'72'</li>
	<li>'73'</li>
	<li>'74'</li>
	<li>'75'</li>
	<li>'76'</li>
	<li>'77'</li>
	<li>'78'</li>
	<li>'79'</li>
	<li>'80'</li>
	<li>'81'</li>
	<li>'82'</li>
	<li>'83'</li>
	<li>'84'</li>
	<li>'85'</li>
	<li>'86'</li>
	<li>'87'</li>
	<li>'88'</li>
	<li>'89'</li>
	<li>'90'</li>
	<li>'91'</li>
	<li>'92'</li>
	<li>'93'</li>
	<li>'94'</li>
	<li>'95'</li>
	<li>'96'</li>
	<li>'97'</li>
	<li>'98'</li>
	<li>'99'</li>
	<li>'100'</li>
	<li>'101'</li>
	<li>'102'</li>
	<li>'103'</li>
	<li>'104'</li>
	<li>'105'</li>
	<li>'106'</li>
	<li>'107'</li>
	<li>'108'</li>
	<li>'109'</li>
	<li>'110'</li>
	<li>'111'</li>
	<li>'112'</li>
	<li>'113'</li>
	<li>'114'</li>
	<li>'115'</li>
	<li>'116'</li>
	<li>'117'</li>
	<li>'118'</li>
	<li>'119'</li>
	<li>'120'</li>
	<li>'121'</li>
	<li>'122'</li>
	<li>'123'</li>
	<li>'124'</li>
	<li>'125'</li>
	<li>'126'</li>
	<li>'127'</li>
	<li>'128'</li>
	<li>'129'</li>
	<li>'130'</li>
	<li>'131'</li>
	<li>'132'</li>
	<li>'133'</li>
	<li>'134'</li>
	<li>'135'</li>
	<li>'136'</li>
	<li>'137'</li>
	<li>'138'</li>
	<li>'139'</li>
	<li>'140'</li>
	<li>'141'</li>
	<li>'142'</li>
	<li>'143'</li>
	<li>'144'</li>
	<li>'145'</li>
	<li>'146'</li>
	<li>'147'</li>
	<li>'148'</li>
	<li>'149'</li>
	<li>'150'</li>
	<li>'151'</li>
	<li>'152'</li>
	<li>'153'</li>
	<li>'154'</li>
	<li>'155'</li>
	<li>'156'</li>
	<li>'157'</li>
	<li>'158'</li>
	<li>'159'</li>
	<li>'160'</li>
	<li>'161'</li>
	<li>'162'</li>
	<li>'163'</li>
	<li>'164'</li>
	<li>'165'</li>
	<li>'166'</li>
	<li>'167'</li>
	<li>'168'</li>
	<li>'169'</li>
	<li>'170'</li>
	<li>'171'</li>
	<li>'172'</li>
	<li>'173'</li>
	<li>'174'</li>
	<li>'175'</li>
	<li>'176'</li>
	<li>'177'</li>
	<li>'178'</li>
	<li>'179'</li>
	<li>'180'</li>
	<li>'181'</li>
	<li>'182'</li>
	<li>'183'</li>
	<li>'184'</li>
	<li>'185'</li>
	<li>'186'</li>
	<li>'187'</li>
	<li>'188'</li>
	<li>'189'</li>
	<li>'190'</li>
	<li>'191'</li>
	<li>'192'</li>
	<li>'193'</li>
	<li>'194'</li>
</ol>




```R
chicago <- rename(chicago, dewpoint = dptp, pm25 = pm25tmean2)
```


```R
head(chicago)
```


<table>
<caption>A data.frame: 6 × 8</caption>
<thead>
	<tr><th scope=col>city</th><th scope=col>tmpd</th><th scope=col>dewpoint</th><th scope=col>date</th><th scope=col>pm25</th><th scope=col>pm10tmean2</th><th scope=col>o3tmean2</th><th scope=col>no2tmean2</th></tr>
	<tr><th scope=col>&lt;chr&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;date&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>chic</td><td>31.5</td><td>31.500</td><td>1987-01-01</td><td>NA</td><td>34.00000</td><td>4.250000</td><td>19.98810</td></tr>
	<tr><td>chic</td><td>33.0</td><td>29.875</td><td>1987-01-02</td><td>NA</td><td>      NA</td><td>3.304348</td><td>23.19099</td></tr>
	<tr><td>chic</td><td>33.0</td><td>27.375</td><td>1987-01-03</td><td>NA</td><td>34.16667</td><td>3.333333</td><td>23.81548</td></tr>
	<tr><td>chic</td><td>29.0</td><td>28.625</td><td>1987-01-04</td><td>NA</td><td>47.00000</td><td>4.375000</td><td>30.43452</td></tr>
	<tr><td>chic</td><td>32.0</td><td>28.875</td><td>1987-01-05</td><td>NA</td><td>      NA</td><td>4.750000</td><td>30.33333</td></tr>
	<tr><td>chic</td><td>40.0</td><td>35.125</td><td>1987-01-06</td><td>NA</td><td>48.00000</td><td>5.833333</td><td>25.77233</td></tr>
</tbody>
</table>



### References
- https://www.r-graph-gallery.com/index.html
