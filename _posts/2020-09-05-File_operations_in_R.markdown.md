---
layout: post
title:  "File Operations in R"
date:   2020-09-05 22:02:38 +0530
categories: jekyll update
---

## File Operations in R

```R
### Start writing to an output file
sink('analysis-output.txt')

set.seed(12345)
x <-rnorm(10,10,1)
y <-rnorm(10,11,1)
# Do some stuff here
cat(sprintf("x has %d elements:\n", length(x)))
print(x)
cat("y =", y, "\n")

cat("=============================\n")
cat("T-test between x and y\n")
cat("=============================\n")
t.test(x,y)

### Stop writing to the file
sink()


### Append to the file
sink('analysis-output.txt', append=TRUE)
cat("Some more stuff here...\n")
sink()
```

    x has 10 elements:
     [1] 10.585529 10.709466  9.890697  9.546503 10.605887  8.182044 10.630099
     [8]  9.723816  9.715840  9.080678
    y = 10.88375 12.81731 11.37063 11.52022 10.24947 11.8169 10.11364 10.66842 12.12071 11.29872 
    =============================
    T-test between x and y
    =============================



    
    	Welch Two Sample t-test
    
    data:  x and y
    t = -3.8326, df = 17.979, p-value = 0.001222
    alternative hypothesis: true difference in means is not equal to 0
    95 percent confidence interval:
     -2.196802 -0.641042
    sample estimates:
    mean of x mean of y 
     9.867056 11.285978 



    Some more stuff here...

## References
- https://stat.ethz.ch/R-manual/R-devel/library/base/html/files.html