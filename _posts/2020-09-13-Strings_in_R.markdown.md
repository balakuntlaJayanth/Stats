---
layout: post
title:  "String Operations in R"
date:   2020-09-13 22:02:38 +0530
categories: jekyll update
---

### String Operations in R

```R
grep("b+", c("abc", "bda", "cca a", "abd"), perl=TRUE, value=FALSE)
```


<style>
.list-inline {list-style: none; margin:0; padding: 0}
.list-inline>li {display: inline-block}
.list-inline>li:not(:last-child)::after {content: "\00b7"; padding: 0 .5ex}
</style>
<ol class=list-inline><li>1</li><li>2</li><li>4</li></ol>




```R
str <- "Big Data at DataFlair"
nchar(str)
```


21



```R
paste("Hadoop", "Spark", "and", "Flink")
```


'Hadoop Spark and Flink'



```R
sprintf("%s scored %.2f percent", "Matthew", 72.3)
```


'Matthew scored 72.30 percent'



```R
num <- "12345678"
substr(num, 4, 5)
substr(num, 5, 7)
```


'45'



'567'



```R
str = "Splitting sentence into words"
strsplit(str, " ")
```


<ol>
	<li><style>
.list-inline {list-style: none; margin:0; padding: 0}
.list-inline>li {display: inline-block}
.list-inline>li:not(:last-child)::after {content: "\00b7"; padding: 0 .5ex}
</style>
<ol class=list-inline><li>'Splitting'</li><li>'sentence'</li><li>'into'</li><li>'words'</li></ol>
</li>
</ol>




```R
str = "Line 129: O that this too too solid flesh would melt,Thaw, and resolve itself into a dew!"
out <- regexpr("\\d+",str)
out
```


6

### References
- https://www.hackerearth.com/practice/machine-learning/advanced-techniques/regular-expressions-string-manipulation-r/tutorial/