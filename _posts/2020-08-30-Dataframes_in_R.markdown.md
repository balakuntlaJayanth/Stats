---
layout: post
title:  "Data Frames in R"
date:   2020-08-30 22:02:38 +0530
categories: jekyll update
---

## DataFrames in R

### converting list to Dataframe in R

```R
l <- list(a = list(var.1 = 1, var.2 = 2, var.3 = 3)
      , b = list(var.1 = 4, var.2 = 5, var.3 = 6)
      , c = list(var.1 = 7, var.2 = 8, var.3 = 9)
      , d = list(var.1 = 10, var.2 = 11, var.3 = 12)
      )
```

```R
df <- df <- data.frame(matrix(unlist(l), nrow=length(l), byrow=T),stringsAsFactors=FALSE)
```


```R
head(df)
```


<table>
<caption>A data.frame: 4 × 3</caption>
<thead>
	<tr><th></th>X1</th>X2</th>X3</th></tr>
	<tr><th></th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><th>1</th><td> 1</td><td> 2</td><td> 3</td></tr>
	<tr><th>2</th><td> 4</td><td> 5</td><td> 6</td></tr>
	<tr><th>3</th><td> 7</td><td> 8</td><td> 9</td></tr>
	<tr><th>4</th><td>10</td><td>11</td><td>12</td></tr>
</tbody>
</table>


### Operations on Data frame

```R
head(mtcars)
```


<table>
<caption>A data.frame: 6 × 11</caption>
<thead>
	<tr><th></th>mpg</th>cyl</th>disp</th>hp</th>drat</th>wt</th>qsec</th>vs</th>am</th>gear</th>carb</th></tr>
	<tr><th></th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><th>Mazda RX4</th><td>21.0</td><td>6</td><td>160</td><td>110</td><td>3.90</td><td>2.620</td><td>16.46</td><td>0</td><td>1</td><td>4</td><td>4</td></tr>
	<tr><th>Mazda RX4 Wag</th><td>21.0</td><td>6</td><td>160</td><td>110</td><td>3.90</td><td>2.875</td><td>17.02</td><td>0</td><td>1</td><td>4</td><td>4</td></tr>
	<tr><th>Datsun 710</th><td>22.8</td><td>4</td><td>108</td><td> 93</td><td>3.85</td><td>2.320</td><td>18.61</td><td>1</td><td>1</td><td>4</td><td>1</td></tr>
	<tr><th>Hornet 4 Drive</th><td>21.4</td><td>6</td><td>258</td><td>110</td><td>3.08</td><td>3.215</td><td>19.44</td><td>1</td><td>0</td><td>3</td><td>1</td></tr>
	<tr><th>Hornet Sportabout</th><td>18.7</td><td>8</td><td>360</td><td>175</td><td>3.15</td><td>3.440</td><td>17.02</td><td>0</td><td>0</td><td>3</td><td>2</td></tr>
	<tr><th>Valiant</th><td>18.1</td><td>6</td><td>225</td><td>105</td><td>2.76</td><td>3.460</td><td>20.22</td><td>1</td><td>0</td><td>3</td><td>1</td></tr>
</tbody>
</table>




```R
mtcars[2,3]
```


160



```R
mtcars[c(1,10),c(3,4)]
```


<table>
<caption>A data.frame: 2 × 2</caption>
<thead>
	<tr><th></th>disp</th>hp</th></tr>
	<tr><th></th>&lt;dbl&gt;</th>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><th>Mazda RX4</th><td>160.0</td><td>110</td></tr>
	<tr><th>Merc 280</th><td>167.6</td><td>123</td></tr>
</tbody>
</table>




```R
names(mtcars)
```


<style>
.list-inline {list-style: none; margin:0; padding: 0}
.list-inline>li {display: inline-block}
.list-inline>li:not(:last-child)::after {content: "\00b7"; padding: 0 .5ex}
</style>
<ol class=list-inline><li>'mpg'</li><li>'cyl'</li><li>'disp'</li><li>'hp'</li><li>'drat'</li><li>'wt'</li><li>'qsec'</li><li>'vs'</li><li>'am'</li><li>'gear'</li><li>'carb'</li></ol>




```R
t(mtcars)
```


<table>
<caption>A matrix: 11 × 32 of type dbl</caption>
<thead>
	<tr><th></th>Mazda RX4</th>Mazda RX4 Wag</th>Datsun 710</th>Hornet 4 Drive</th>Hornet Sportabout</th>Valiant</th>Duster 360</th>Merc 240D</th>Merc 230</th>Merc 280</th>⋯</th>AMC Javelin</th>Camaro Z28</th>Pontiac Firebird</th>Fiat X1-9</th>Porsche 914-2</th>Lotus Europa</th>Ford Pantera L</th>Ferrari Dino</th>Maserati Bora</th>Volvo 142E</th></tr>
</thead>
<tbody>
	<tr><th>mpg</th><td> 21.00</td><td> 21.000</td><td> 22.80</td><td> 21.400</td><td> 18.70</td><td> 18.10</td><td> 14.30</td><td> 24.40</td><td> 22.80</td><td> 19.20</td><td>⋯</td><td> 15.200</td><td> 13.30</td><td> 19.200</td><td>27.300</td><td> 26.00</td><td> 30.400</td><td> 15.80</td><td> 19.70</td><td> 15.00</td><td> 21.40</td></tr>
	<tr><th>cyl</th><td>  6.00</td><td>  6.000</td><td>  4.00</td><td>  6.000</td><td>  8.00</td><td>  6.00</td><td>  8.00</td><td>  4.00</td><td>  4.00</td><td>  6.00</td><td>⋯</td><td>  8.000</td><td>  8.00</td><td>  8.000</td><td> 4.000</td><td>  4.00</td><td>  4.000</td><td>  8.00</td><td>  6.00</td><td>  8.00</td><td>  4.00</td></tr>
	<tr><th>disp</th><td>160.00</td><td>160.000</td><td>108.00</td><td>258.000</td><td>360.00</td><td>225.00</td><td>360.00</td><td>146.70</td><td>140.80</td><td>167.60</td><td>⋯</td><td>304.000</td><td>350.00</td><td>400.000</td><td>79.000</td><td>120.30</td><td> 95.100</td><td>351.00</td><td>145.00</td><td>301.00</td><td>121.00</td></tr>
	<tr><th>hp</th><td>110.00</td><td>110.000</td><td> 93.00</td><td>110.000</td><td>175.00</td><td>105.00</td><td>245.00</td><td> 62.00</td><td> 95.00</td><td>123.00</td><td>⋯</td><td>150.000</td><td>245.00</td><td>175.000</td><td>66.000</td><td> 91.00</td><td>113.000</td><td>264.00</td><td>175.00</td><td>335.00</td><td>109.00</td></tr>
	<tr><th>drat</th><td>  3.90</td><td>  3.900</td><td>  3.85</td><td>  3.080</td><td>  3.15</td><td>  2.76</td><td>  3.21</td><td>  3.69</td><td>  3.92</td><td>  3.92</td><td>⋯</td><td>  3.150</td><td>  3.73</td><td>  3.080</td><td> 4.080</td><td>  4.43</td><td>  3.770</td><td>  4.22</td><td>  3.62</td><td>  3.54</td><td>  4.11</td></tr>
	<tr><th>wt</th><td>  2.62</td><td>  2.875</td><td>  2.32</td><td>  3.215</td><td>  3.44</td><td>  3.46</td><td>  3.57</td><td>  3.19</td><td>  3.15</td><td>  3.44</td><td>⋯</td><td>  3.435</td><td>  3.84</td><td>  3.845</td><td> 1.935</td><td>  2.14</td><td>  1.513</td><td>  3.17</td><td>  2.77</td><td>  3.57</td><td>  2.78</td></tr>
	<tr><th>qsec</th><td> 16.46</td><td> 17.020</td><td> 18.61</td><td> 19.440</td><td> 17.02</td><td> 20.22</td><td> 15.84</td><td> 20.00</td><td> 22.90</td><td> 18.30</td><td>⋯</td><td> 17.300</td><td> 15.41</td><td> 17.050</td><td>18.900</td><td> 16.70</td><td> 16.900</td><td> 14.50</td><td> 15.50</td><td> 14.60</td><td> 18.60</td></tr>
	<tr><th>vs</th><td>  0.00</td><td>  0.000</td><td>  1.00</td><td>  1.000</td><td>  0.00</td><td>  1.00</td><td>  0.00</td><td>  1.00</td><td>  1.00</td><td>  1.00</td><td>⋯</td><td>  0.000</td><td>  0.00</td><td>  0.000</td><td> 1.000</td><td>  0.00</td><td>  1.000</td><td>  0.00</td><td>  0.00</td><td>  0.00</td><td>  1.00</td></tr>
	<tr><th>am</th><td>  1.00</td><td>  1.000</td><td>  1.00</td><td>  0.000</td><td>  0.00</td><td>  0.00</td><td>  0.00</td><td>  0.00</td><td>  0.00</td><td>  0.00</td><td>⋯</td><td>  0.000</td><td>  0.00</td><td>  0.000</td><td> 1.000</td><td>  1.00</td><td>  1.000</td><td>  1.00</td><td>  1.00</td><td>  1.00</td><td>  1.00</td></tr>
	<tr><th>gear</th><td>  4.00</td><td>  4.000</td><td>  4.00</td><td>  3.000</td><td>  3.00</td><td>  3.00</td><td>  3.00</td><td>  4.00</td><td>  4.00</td><td>  4.00</td><td>⋯</td><td>  3.000</td><td>  3.00</td><td>  3.000</td><td> 4.000</td><td>  5.00</td><td>  5.000</td><td>  5.00</td><td>  5.00</td><td>  5.00</td><td>  4.00</td></tr>
	<tr><th>carb</th><td>  4.00</td><td>  4.000</td><td>  1.00</td><td>  1.000</td><td>  2.00</td><td>  1.00</td><td>  4.00</td><td>  2.00</td><td>  2.00</td><td>  4.00</td><td>⋯</td><td>  2.000</td><td>  4.00</td><td>  2.000</td><td> 1.000</td><td>  2.00</td><td>  2.000</td><td>  4.00</td><td>  6.00</td><td>  8.00</td><td>  2.00</td></tr>
</tbody>
</table>




```R
colnames(mtcars)
```


<style>
.list-inline {list-style: none; margin:0; padding: 0}
.list-inline>li {display: inline-block}
.list-inline>li:not(:last-child)::after {content: "\00b7"; padding: 0 .5ex}
</style>
<ol class=list-inline><li>'mpg'</li><li>'cyl'</li><li>'disp'</li><li>'hp'</li><li>'drat'</li><li>'wt'</li><li>'qsec'</li><li>'vs'</li><li>'am'</li><li>'gear'</li><li>'carb'</li></ol>




```R
rownames(mtcars)
```


<style>
.list-inline {list-style: none; margin:0; padding: 0}
.list-inline>li {display: inline-block}
.list-inline>li:not(:last-child)::after {content: "\00b7"; padding: 0 .5ex}
</style>
<ol class=list-inline><li>'Mazda RX4'</li><li>'Mazda RX4 Wag'</li><li>'Datsun 710'</li><li>'Hornet 4 Drive'</li><li>'Hornet Sportabout'</li><li>'Valiant'</li><li>'Duster 360'</li><li>'Merc 240D'</li><li>'Merc 230'</li><li>'Merc 280'</li><li>'Merc 280C'</li><li>'Merc 450SE'</li><li>'Merc 450SL'</li><li>'Merc 450SLC'</li><li>'Cadillac Fleetwood'</li><li>'Lincoln Continental'</li><li>'Chrysler Imperial'</li><li>'Fiat 128'</li><li>'Honda Civic'</li><li>'Toyota Corolla'</li><li>'Toyota Corona'</li><li>'Dodge Challenger'</li><li>'AMC Javelin'</li><li>'Camaro Z28'</li><li>'Pontiac Firebird'</li><li>'Fiat X1-9'</li><li>'Porsche 914-2'</li><li>'Lotus Europa'</li><li>'Ford Pantera L'</li><li>'Ferrari Dino'</li><li>'Maserati Bora'</li><li>'Volvo 142E'</li></ol>




```R
names <- t(t(colnames(mtcars)))
```


```R
names
```


<table>
<caption>A matrix: 11 × 1 of type chr</caption>
<tbody>
	<tr><td>mpg </td></tr>
	<tr><td>cyl </td></tr>
	<tr><td>disp</td></tr>
	<tr><td>hp  </td></tr>
	<tr><td>drat</td></tr>
	<tr><td>wt  </td></tr>
	<tr><td>qsec</td></tr>
	<tr><td>vs  </td></tr>
	<tr><td>am  </td></tr>
	<tr><td>gear</td></tr>
	<tr><td>carb</td></tr>
</tbody>
</table>




```R
mean(mtcars$disp)
```


230.721875



```R
sd(mtcars$disp)
```


123.938693831382



```R
mtcars[mtcars$disp < mean(mtcars$disp),]
```


<table>
<caption>A data.frame: 17 × 11</caption>
<thead>
	<tr><th></th>mpg</th>cyl</th>disp</th>hp</th>drat</th>wt</th>qsec</th>vs</th>am</th>gear</th>carb</th></tr>
	<tr><th></th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><th>Mazda RX4</th><td>21.0</td><td>6</td><td>160.0</td><td>110</td><td>3.90</td><td>2.620</td><td>16.46</td><td>0</td><td>1</td><td>4</td><td>4</td></tr>
	<tr><th>Mazda RX4 Wag</th><td>21.0</td><td>6</td><td>160.0</td><td>110</td><td>3.90</td><td>2.875</td><td>17.02</td><td>0</td><td>1</td><td>4</td><td>4</td></tr>
	<tr><th>Datsun 710</th><td>22.8</td><td>4</td><td>108.0</td><td> 93</td><td>3.85</td><td>2.320</td><td>18.61</td><td>1</td><td>1</td><td>4</td><td>1</td></tr>
	<tr><th>Valiant</th><td>18.1</td><td>6</td><td>225.0</td><td>105</td><td>2.76</td><td>3.460</td><td>20.22</td><td>1</td><td>0</td><td>3</td><td>1</td></tr>
	<tr><th>Merc 240D</th><td>24.4</td><td>4</td><td>146.7</td><td> 62</td><td>3.69</td><td>3.190</td><td>20.00</td><td>1</td><td>0</td><td>4</td><td>2</td></tr>
	<tr><th>Merc 230</th><td>22.8</td><td>4</td><td>140.8</td><td> 95</td><td>3.92</td><td>3.150</td><td>22.90</td><td>1</td><td>0</td><td>4</td><td>2</td></tr>
	<tr><th>Merc 280</th><td>19.2</td><td>6</td><td>167.6</td><td>123</td><td>3.92</td><td>3.440</td><td>18.30</td><td>1</td><td>0</td><td>4</td><td>4</td></tr>
	<tr><th>Merc 280C</th><td>17.8</td><td>6</td><td>167.6</td><td>123</td><td>3.92</td><td>3.440</td><td>18.90</td><td>1</td><td>0</td><td>4</td><td>4</td></tr>
	<tr><th>Fiat 128</th><td>32.4</td><td>4</td><td> 78.7</td><td> 66</td><td>4.08</td><td>2.200</td><td>19.47</td><td>1</td><td>1</td><td>4</td><td>1</td></tr>
	<tr><th>Honda Civic</th><td>30.4</td><td>4</td><td> 75.7</td><td> 52</td><td>4.93</td><td>1.615</td><td>18.52</td><td>1</td><td>1</td><td>4</td><td>2</td></tr>
	<tr><th>Toyota Corolla</th><td>33.9</td><td>4</td><td> 71.1</td><td> 65</td><td>4.22</td><td>1.835</td><td>19.90</td><td>1</td><td>1</td><td>4</td><td>1</td></tr>
	<tr><th>Toyota Corona</th><td>21.5</td><td>4</td><td>120.1</td><td> 97</td><td>3.70</td><td>2.465</td><td>20.01</td><td>1</td><td>0</td><td>3</td><td>1</td></tr>
	<tr><th>Fiat X1-9</th><td>27.3</td><td>4</td><td> 79.0</td><td> 66</td><td>4.08</td><td>1.935</td><td>18.90</td><td>1</td><td>1</td><td>4</td><td>1</td></tr>
	<tr><th>Porsche 914-2</th><td>26.0</td><td>4</td><td>120.3</td><td> 91</td><td>4.43</td><td>2.140</td><td>16.70</td><td>0</td><td>1</td><td>5</td><td>2</td></tr>
	<tr><th>Lotus Europa</th><td>30.4</td><td>4</td><td> 95.1</td><td>113</td><td>3.77</td><td>1.513</td><td>16.90</td><td>1</td><td>1</td><td>5</td><td>2</td></tr>
	<tr><th>Ferrari Dino</th><td>19.7</td><td>6</td><td>145.0</td><td>175</td><td>3.62</td><td>2.770</td><td>15.50</td><td>0</td><td>1</td><td>5</td><td>6</td></tr>
	<tr><th>Volvo 142E</th><td>21.4</td><td>4</td><td>121.0</td><td>109</td><td>4.11</td><td>2.780</td><td>18.60</td><td>1</td><td>1</td><td>4</td><td>2</td></tr>
</tbody>
</table>




```R
mtcars$mean <- ave(mtcars$mpg)
```


```R
tail(mtcars)
```


<table>
<caption>A data.frame: 6 × 12</caption>
<thead>
	<tr><th></th>mpg</th>cyl</th>disp</th>hp</th>drat</th>wt</th>qsec</th>vs</th>am</th>gear</th>carb</th>mean</th></tr>
	<tr><th></th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><th>Porsche 914-2</th><td>26.0</td><td>4</td><td>120.3</td><td> 91</td><td>4.43</td><td>2.140</td><td>16.7</td><td>0</td><td>1</td><td>5</td><td>2</td><td>20.09062</td></tr>
	<tr><th>Lotus Europa</th><td>30.4</td><td>4</td><td> 95.1</td><td>113</td><td>3.77</td><td>1.513</td><td>16.9</td><td>1</td><td>1</td><td>5</td><td>2</td><td>20.09062</td></tr>
	<tr><th>Ford Pantera L</th><td>15.8</td><td>8</td><td>351.0</td><td>264</td><td>4.22</td><td>3.170</td><td>14.5</td><td>0</td><td>1</td><td>5</td><td>4</td><td>20.09062</td></tr>
	<tr><th>Ferrari Dino</th><td>19.7</td><td>6</td><td>145.0</td><td>175</td><td>3.62</td><td>2.770</td><td>15.5</td><td>0</td><td>1</td><td>5</td><td>6</td><td>20.09062</td></tr>
	<tr><th>Maserati Bora</th><td>15.0</td><td>8</td><td>301.0</td><td>335</td><td>3.54</td><td>3.570</td><td>14.6</td><td>0</td><td>1</td><td>5</td><td>8</td><td>20.09062</td></tr>
	<tr><th>Volvo 142E</th><td>21.4</td><td>4</td><td>121.0</td><td>109</td><td>4.11</td><td>2.780</td><td>18.6</td><td>1</td><td>1</td><td>4</td><td>2</td><td>20.09062</td></tr>
</tbody>
</table>




```R
mtcars$RMean <- rowMeans(mtcars, na.rm = TRUE)
```


```R
tail(mtcars)
```


<table>
<caption>A data.frame: 6 × 13</caption>
<thead>
	<tr><th></th>mpg</th>cyl</th>disp</th>hp</th>drat</th>wt</th>qsec</th>vs</th>am</th>gear</th>carb</th>mean</th>RMean</th></tr>
	<tr><th></th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><th>Porsche 914-2</th><td>26.0</td><td>4</td><td>120.3</td><td> 91</td><td>4.43</td><td>2.140</td><td>16.7</td><td>0</td><td>1</td><td>5</td><td>2</td><td>20.09062</td><td>24.38839</td></tr>
	<tr><th>Lotus Europa</th><td>30.4</td><td>4</td><td> 95.1</td><td>113</td><td>3.77</td><td>1.513</td><td>16.9</td><td>1</td><td>1</td><td>5</td><td>2</td><td>20.09062</td><td>24.48114</td></tr>
	<tr><th>Ford Pantera L</th><td>15.8</td><td>8</td><td>351.0</td><td>264</td><td>4.22</td><td>3.170</td><td>14.5</td><td>0</td><td>1</td><td>5</td><td>4</td><td>20.09062</td><td>57.56505</td></tr>
	<tr><th>Ferrari Dino</th><td>19.7</td><td>6</td><td>145.0</td><td>175</td><td>3.62</td><td>2.770</td><td>15.5</td><td>0</td><td>1</td><td>5</td><td>6</td><td>20.09062</td><td>33.30672</td></tr>
	<tr><th>Maserati Bora</th><td>15.0</td><td>8</td><td>301.0</td><td>335</td><td>3.54</td><td>3.570</td><td>14.6</td><td>0</td><td>1</td><td>5</td><td>8</td><td>20.09062</td><td>59.56672</td></tr>
	<tr><th>Volvo 142E</th><td>21.4</td><td>4</td><td>121.0</td><td>109</td><td>4.11</td><td>2.780</td><td>18.6</td><td>1</td><td>1</td><td>4</td><td>2</td><td>20.09062</td><td>25.74839</td></tr>
</tbody>
</table>




```R
library(dplyr)
```

    
    Attaching package: ‘dplyr’
    
    
    The following objects are masked from ‘package:stats’:
    
        filter, lag
    
    
    The following objects are masked from ‘package:base’:
    
        intersect, setdiff, setequal, union
    
    



```R
dfN <- mtcars %>% select(mpg, cyl, disp)
head(dfN)
```


<table>
<caption>A data.frame: 6 × 3</caption>
<thead>
	<tr><th></th>mpg</th>cyl</th>disp</th></tr>
	<tr><th></th>&lt;dbl&gt;</th>&lt;dbl&gt;</th>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><th>Mazda RX4</th><td>21.0</td><td>6</td><td>160</td></tr>
	<tr><th>Mazda RX4 Wag</th><td>21.0</td><td>6</td><td>160</td></tr>
	<tr><th>Datsun 710</th><td>22.8</td><td>4</td><td>108</td></tr>
	<tr><th>Hornet 4 Drive</th><td>21.4</td><td>6</td><td>258</td></tr>
	<tr><th>Hornet Sportabout</th><td>18.7</td><td>8</td><td>360</td></tr>
	<tr><th>Valiant</th><td>18.1</td><td>6</td><td>225</td></tr>
</tbody>
</table>

### References

- https://data-flair.training/blogs/r-data-frame/
