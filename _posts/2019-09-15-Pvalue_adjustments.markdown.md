---
layout: post
title:  "Adjustments for multiple hypothesis tests"
date:   2019-09-15 22:02:38 +0530
categories: jekyll update
---

# Adjustments for Multiple Hypothesis tests


In business on scientific problem , which involves multiple groups difference between groups is always assesed from the statistical testing of hypothesis. Statistical tests derive  probability(p-value) based on the hypothesis. The acceptable values for significant levels are 0.05 and 0.01.

The probability of committing false statistical inferences would significantly increase when more than one hypothesis is simultaneously tested , which therefore requires proper correction .

For example, It is common practice in clinical trials of new drug to simultaneously compare the therapeutic effects in different age groups  or different dose levels of the new drug in comparison with standard treatment. A similar problem is to evaluate whether there is difference between treatment and control groups according to multiple outcome measurements. 

There are 2 types of errors to be considered in multiple hypothesis tests

**Type I error (False positive or probability of making mistake):** Null hypothesis is true but rejected

**Type II error (False negative): **Null hypothesis is false but fail to be rejected

For each hypothesis test there will be significance level .As the number of hypotheses increases, so too does the overall significance level for the set of tests because the individual significance levels accumulate. For a single hypothesis test at the α=0.05 level, the type 1 error rate is only 5%. There is only a 5% chance of erroneously rejecting the null hypothesis. For 2 hypothesis tests, however, the overall significance level becomes 0.10.
 

### Advantages of Significance level correction
The advantage of significance level correction is correcting False positives

There are 2 popular methods used in correcting False positives
### Bonferoni correction  (FWER approach): 
Family-wise error rate (FWER) is defined as a probability of getting at least one significant result just by chance.

**For example:**
If we perform 50 multiple tests at α=0.05, the probability of getting at least one significant result by chance is ~ 92% 

P(at least one significant) = 1−P(no significant)
= 1−(1−0.05)^50^∼ 0.92

when correction applied to significance level, the probability of getting at least one significant result by chance is ~ 4% 

The new adjusted significance value :

 = 0.05/50 = 0.001 

=1−(1−0.001)^50^∼0.04


### Benjamini and Hochberg technique  (FDR approach):
FDR is defined as the proportion of false positives among the significant results

### Disadvantages 
False negative observations are very important or expensive, you should avoid correcting P-values during multiple hypothesis testing.

### Implementation in python

Import necessary library

{% highlight python %}

from scipy.stats import norm
import numpy as np
from statsmodels.stats.multitest import multipletests

{% endhighlight %}

Generate 1000 random numbers

{% highlight python %}

num = norm.rvs(loc=0, scale=3, size=1000)

{% endhighlight %}

Calculate P-value

{% highlight python %}

pval = 1-norm.cdf(num)
print(len(pval[np.where(pval<0.05)]))

{% endhighlight %}

we get 262 pvalues less than 0.05

Now apply Bonferoni method for correcting significance level

{% highlight python %}

bf_p = 0.05/1000 
print(len(pval[np.where(pval<bf_p)]))

{% endhighlight %}

we get 103 pvalues retained from 262

Now apply Benjamini and Hochberg technique 

{% highlight python %}

y=multipletests(pvals=pval, alpha=0.05, method="fdr_bh")
print(len(y[1][np.where(y[1]<0.05)]))

{% endhighlight %}

Now we get 207 pvalues retained from 262

Number of pvalues retained from Benjamini Hochberg test will be much higher than Bonferoni method

In this example , False negative rate before correction (738/1000=0.738) is 0.738. After Bonferoni correction rate of false negatives increased to (897/1000=0.897) 0.897 whereas with BH method is (733/1000=0.733) is 0.733

