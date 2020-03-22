---
layout: post
title:  "Data Analysis in R  part I "
date:   2020-03-22 22:02:38 +0530
categories: jekyll update
---

## DATA ANALYSIS in R part I
Generating data in R.


```R
df<-data.frame(subject=as.factor(c("P","A","J","Pe","Al","Ca")), age=as.numeric(c(20, 16, 19, 99, 23, 18)), sex=as.factor(c("M","F","F","M",NA,"F")), height=as.numeric(c(172, 181, 165, 168, 177, 178)), speed=as.numeric(c(11.20,3.00,11.50,10.35,10.98,13.05)))
```


```R
head(df)
```


<table>
<caption>A data.frame: 6 × 5</caption>
<thead>
	<tr><th scope=col>subject</th><th scope=col>age</th><th scope=col>sex</th><th scope=col>height</th><th scope=col>speed</th></tr>
	<tr><th scope=col>&lt;fct&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;fct&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>P </td><td>20</td><td>M </td><td>172</td><td>11.20</td></tr>
	<tr><td>A </td><td>16</td><td>F </td><td>181</td><td> 3.00</td></tr>
	<tr><td>J </td><td>19</td><td>F </td><td>165</td><td>11.50</td></tr>
	<tr><td>Pe</td><td>99</td><td>M </td><td>168</td><td>10.35</td></tr>
	<tr><td>Al</td><td>23</td><td>NA</td><td>177</td><td>10.98</td></tr>
	<tr><td>Ca</td><td>18</td><td>F </td><td>178</td><td>13.05</td></tr>
</tbody>
</table>




```R
dim(df)
```


<ol class=list-inline>
	<li>6</li>
	<li>5</li>
</ol>




```R
head(df, 4)
```


<table>
<caption>A data.frame: 4 × 5</caption>
<thead>
	<tr><th scope=col>subject</th><th scope=col>age</th><th scope=col>sex</th><th scope=col>height</th><th scope=col>speed</th></tr>
	<tr><th scope=col>&lt;fct&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;fct&gt;</th><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;dbl&gt;</th></tr>
</thead>
<tbody>
	<tr><td>P </td><td>20</td><td>M</td><td>172</td><td>11.20</td></tr>
	<tr><td>A </td><td>16</td><td>F</td><td>181</td><td> 3.00</td></tr>
	<tr><td>J </td><td>19</td><td>F</td><td>165</td><td>11.50</td></tr>
	<tr><td>Pe</td><td>99</td><td>M</td><td>168</td><td>10.35</td></tr>
</tbody>
</table>




```R
summary(df)
```


     subject      age          sex        height          speed      
     A :1    Min.   :16.00   F   :3   Min.   :165.0   Min.   : 3.00  
     Al:1    1st Qu.:18.25   M   :2   1st Qu.:169.0   1st Qu.:10.51  
     Ca:1    Median :19.50   NA's:1   Median :174.5   Median :11.09  
     J :1    Mean   :32.50            Mean   :173.5   Mean   :10.01  
     P :1    3rd Qu.:22.25            3rd Qu.:177.8   3rd Qu.:11.43  
     Pe:1    Max.   :99.00            Max.   :181.0   Max.   :13.05  



```R
is.na(df)
```


<table>
<caption>A matrix: 6 × 5 of type lgl</caption>
<thead>
	<tr><th scope=col>subject</th><th scope=col>age</th><th scope=col>sex</th><th scope=col>height</th><th scope=col>speed</th></tr>
</thead>
<tbody>
	<tr><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td></tr>
	<tr><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td></tr>
	<tr><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td></tr>
	<tr><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td></tr>
	<tr><td>FALSE</td><td>FALSE</td><td> TRUE</td><td>FALSE</td><td>FALSE</td></tr>
	<tr><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td><td>FALSE</td></tr>
</tbody>
</table>




```R
which(is.na(df), arr.ind=T)
```


<table>
<caption>A matrix: 1 × 2 of type int</caption>
<thead>
	<tr><th scope=col>row</th><th scope=col>col</th></tr>
</thead>
<tbody>
	<tr><td>5</td><td>3</td></tr>
</tbody>
</table>




```R
par(mfrow=c(1,3))
boxplot(df$age, main="Age (yrs)", cex.lab=2.0, cex.axis=2.0, cex.main=1.6, cex=2.0, col="yellow")
boxplot(df$height, main="Height (cm)", cex.lab=2.0, cex.axis=2.0, cex.main=1.6, cex=2.0, col="red")
boxplot(df$speed, main="Speed (ms)", cex.lab=2.0, cex.axis=2.0, cex.main=1.6, cex=2.0, col="orange")

```



![png](https://github.com/balakuntlaJayanth/Stats/blob/master/images/Mar22_2020/output_7_0.png?raw=true)



```

