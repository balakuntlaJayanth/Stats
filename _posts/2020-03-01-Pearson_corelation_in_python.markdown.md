---
layout: post
title:  "Pearson correlation in Python"
date:   2020-03-01 22:02:38 +0530
categories: jekyll update
---

## Pearson correlation in Python

### Introduction

<p style='text-align: justify;'>Pearson correlation technique was developed by Sir Francis Galton. It is one of the first correlation to be developed and most widely used method. Pearson correlation is usualy denoted by symbol r.</p>

<p style='text-align: justify;'>The r value measures the strength, direction and probability of linear association between two intervals.</p>

<p style='text-align: justify;'>In essense pearson correlation (r) is a measure of linear relationship between 2 intervals between 2 samples. It can have values that can range between +1 and -1.</p>

### Assumptions of Pearson Correlation

- Each Variables considered of correlation should be continuous related pair .
- <p style='text-align: justify;'>The variable considered for correlation should not have missing values in any of the conditions considered for correlation. For example In a typical agriculture experiment when calculating the correlation between plant height and yield with sample size of 100. All 100 plant observations should have values for height and yield.</p>
- <p style='text-align: justify;'>Absence of outliers refers to not having outliers in either variable. Having an outlier can skew the results of the correlation by pulling the line of best fit formed by the correlation too far in one direction or another.</p>
- Pearson correlation assumes linearity and Normality of the data

- Linearity and homoscedasticity refer to the shape formed by the scatterplot. For linearity, a “straight line” relationship between 2 variables. 
- Homoscedasticity refers to the distance between the points to that straight line. 



### Null and Alternate Hypothesis

The null and alternative hypothesis for the correlation is:
- H0: The correlation coefficient is equal to zero. No correlation between 2 variables .
- H1: The population correlation coefficient is not equal to zero. There is significant correlation between 2 variables.

### Pearson correlation in Python

Data used for analysis contains 200 subjects.

Data can be downloaded from link given below.

https://github.com/balakuntlaJayanth/Stats/blob/master/images/Mar1_2020/data_corr.csv

```python
import numpy as np
import pandas as pd
import pingouin as pg

df = pd.read_csv('data_corr.csv')
print('%i subjects and %i columns' % df.shape)
df.head()
```

    200 subjects and 9 columns





<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>IQ</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
      <th>G</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>56</td>
      <td>110</td>
      <td>158.0</td>
      <td>57.1</td>
      <td>3.94</td>
      <td>3.46</td>
      <td>4.21</td>
      <td>3.96</td>
      <td>2.48</td>
    </tr>
    <tr>
      <th>1</th>
      <td>46</td>
      <td>85</td>
      <td>168.7</td>
      <td>74.1</td>
      <td>3.96</td>
      <td>3.23</td>
      <td>3.19</td>
      <td>3.40</td>
      <td>2.60</td>
    </tr>
    <tr>
      <th>2</th>
      <td>32</td>
      <td>94</td>
      <td>162.8</td>
      <td>74.1</td>
      <td>3.42</td>
      <td>3.50</td>
      <td>2.90</td>
      <td>2.75</td>
      <td>2.81</td>
    </tr>
    <tr>
      <th>3</th>
      <td>60</td>
      <td>95</td>
      <td>166.5</td>
      <td>77.9</td>
      <td>3.52</td>
      <td>2.79</td>
      <td>3.56</td>
      <td>3.17</td>
      <td>2.90</td>
    </tr>
    <tr>
      <th>4</th>
      <td>25</td>
      <td>112</td>
      <td>164.9</td>
      <td>75.5</td>
      <td>4.02</td>
      <td>2.85</td>
      <td>3.33</td>
      <td>3.21</td>
      <td>3.02</td>
    </tr>
  </tbody>
</table>
</div>



In the above table 200 subjects were considered for analysis and range of imaginary parameters were considered
which range from A to G.

## Simple correlation between two columns

**Is A significantly correlated to B?**

H0 : No correlation between A and B
H1 : Significant correlation between A and B


```python
pg.corr(x=df['A'], y=df['B'])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>n</th>
      <th>r</th>
      <th>CI95%</th>
      <th>r2</th>
      <th>adj_r2</th>
      <th>p-val</th>
      <th>BF10</th>
      <th>power</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>pearson</th>
      <td>200</td>
      <td>0.447</td>
      <td>[0.33, 0.55]</td>
      <td>0.2</td>
      <td>0.192</td>
      <td>3.253278e-11</td>
      <td>2.718e+08</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>
</div>



- n is the sample size, that is total number of observations or variables.
- r is the correlation coefficient, 0.45 which suggests a moderate coorelation.
- CI95% are the 95% confidence intervals around the correlation coefficient
- r2 and adj_r2 are the r-squared and adjusted r-squared respectively.
- <p style='text-align: justify;'>p-val is the p-value of the test. If the pvalue is less than or equal to 0.05 we reject null hypothesis. In this case pvalue is less than 0.05.</p>
- <p style='text-align: justify;'>BF10 is the Bayes Factor of the test. The Bayes Factor represents the strength of the corelation. The BF10 value of 2 indicates the Anecdotal evidence for alternate hypothesis (H1).</p>
- <p style='text-align: justify;'>power is the achieved power of the test, which is the likelihood that we will detect an effect when there is indeed an effect there to be detected. The higher this value is, the more robust our test is. In that case, a value of 1 means that we can be greatly confident in our ability to detect the significant effect.</p>

In the above analysis p-value is less than 0.05 and r is around 0.447, which suggests significant correlation.

We reject null hypothesis based on the pvalue and correlation coeficient r.


```python
import seaborn as sns
import matplotlib.pyplot as plt
from scipy.stats import pearsonr
sns.set(style='white', font_scale=1.2)
g = sns.JointGrid(data=df, x='A', y='B', xlim=(140, 190), ylim=(40, 100), height=5)
g = g.plot_joint(sns.regplot, color="xkcd:muted blue")
g.ax_joint.text(145, 95, 'r = 0.45, p < 0.05', fontstyle='italic')
plt.tight_layout()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Mar1_2020/output_7_0.png)


Fig 1 : Scatterplot between A and B. Scatterplot represents the strong positive correlation between A and B

## Pairwise correlations between all columns


```python
pg.pairwise_corr(df)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>X</th>
      <th>Y</th>
      <th>method</th>
      <th>tail</th>
      <th>n</th>
      <th>r</th>
      <th>CI95%</th>
      <th>r2</th>
      <th>adj_r2</th>
      <th>z</th>
      <th>p-unc</th>
      <th>BF10</th>
      <th>power</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Age</td>
      <td>IQ</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.006</td>
      <td>[-0.15, 0.13]</td>
      <td>0.000</td>
      <td>-0.010</td>
      <td>-0.006</td>
      <td>9.276444e-01</td>
      <td>0.089</td>
      <td>0.051</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Age</td>
      <td>A</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.052</td>
      <td>[-0.19, 0.09]</td>
      <td>0.003</td>
      <td>-0.007</td>
      <td>-0.052</td>
      <td>4.657789e-01</td>
      <td>0.115</td>
      <td>0.113</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Age</td>
      <td>B</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.053</td>
      <td>[-0.19, 0.09]</td>
      <td>0.003</td>
      <td>-0.007</td>
      <td>-0.053</td>
      <td>4.593975e-01</td>
      <td>0.116</td>
      <td>0.115</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Age</td>
      <td>C</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.031</td>
      <td>[-0.17, 0.11]</td>
      <td>0.001</td>
      <td>-0.009</td>
      <td>-0.031</td>
      <td>6.676764e-01</td>
      <td>0.097</td>
      <td>0.071</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Age</td>
      <td>D</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.128</td>
      <td>[-0.26, 0.01]</td>
      <td>0.016</td>
      <td>0.006</td>
      <td>-0.129</td>
      <td>7.190586e-02</td>
      <td>0.442</td>
      <td>0.438</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Age</td>
      <td>E</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.114</td>
      <td>[-0.25, 0.03]</td>
      <td>0.013</td>
      <td>0.003</td>
      <td>-0.114</td>
      <td>1.075754e-01</td>
      <td>0.32</td>
      <td>0.364</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Age</td>
      <td>F</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.069</td>
      <td>[-0.21, 0.07]</td>
      <td>0.005</td>
      <td>-0.005</td>
      <td>-0.069</td>
      <td>3.327206e-01</td>
      <td>0.141</td>
      <td>0.163</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Age</td>
      <td>G</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.079</td>
      <td>[-0.06, 0.22]</td>
      <td>0.006</td>
      <td>-0.004</td>
      <td>0.079</td>
      <td>2.638198e-01</td>
      <td>0.164</td>
      <td>0.201</td>
    </tr>
    <tr>
      <th>8</th>
      <td>IQ</td>
      <td>A</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.071</td>
      <td>[-0.07, 0.21]</td>
      <td>0.005</td>
      <td>-0.005</td>
      <td>0.071</td>
      <td>3.152014e-01</td>
      <td>0.146</td>
      <td>0.171</td>
    </tr>
    <tr>
      <th>9</th>
      <td>IQ</td>
      <td>B</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.106</td>
      <td>[-0.03, 0.24]</td>
      <td>0.011</td>
      <td>0.001</td>
      <td>0.106</td>
      <td>1.340576e-01</td>
      <td>0.27</td>
      <td>0.323</td>
    </tr>
    <tr>
      <th>10</th>
      <td>IQ</td>
      <td>C</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.006</td>
      <td>[-0.14, 0.13]</td>
      <td>0.000</td>
      <td>-0.010</td>
      <td>-0.006</td>
      <td>9.343567e-01</td>
      <td>0.089</td>
      <td>0.051</td>
    </tr>
    <tr>
      <th>11</th>
      <td>IQ</td>
      <td>D</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.013</td>
      <td>[-0.13, 0.15]</td>
      <td>0.000</td>
      <td>-0.010</td>
      <td>0.013</td>
      <td>8.549928e-01</td>
      <td>0.09</td>
      <td>0.054</td>
    </tr>
    <tr>
      <th>12</th>
      <td>IQ</td>
      <td>E</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.056</td>
      <td>[-0.19, 0.08]</td>
      <td>0.003</td>
      <td>-0.007</td>
      <td>-0.056</td>
      <td>4.302503e-01</td>
      <td>0.121</td>
      <td>0.124</td>
    </tr>
    <tr>
      <th>13</th>
      <td>IQ</td>
      <td>F</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.083</td>
      <td>[-0.22, 0.06]</td>
      <td>0.007</td>
      <td>-0.003</td>
      <td>-0.083</td>
      <td>2.406373e-01</td>
      <td>0.175</td>
      <td>0.217</td>
    </tr>
    <tr>
      <th>14</th>
      <td>IQ</td>
      <td>G</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.126</td>
      <td>[-0.01, 0.26]</td>
      <td>0.016</td>
      <td>0.006</td>
      <td>0.127</td>
      <td>7.526329e-02</td>
      <td>0.426</td>
      <td>0.430</td>
    </tr>
    <tr>
      <th>15</th>
      <td>A</td>
      <td>B</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.447</td>
      <td>[0.33, 0.55]</td>
      <td>0.200</td>
      <td>0.192</td>
      <td>0.481</td>
      <td>3.253278e-11</td>
      <td>2.718e+08</td>
      <td>1.000</td>
    </tr>
    <tr>
      <th>16</th>
      <td>A</td>
      <td>C</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.123</td>
      <td>[-0.26, 0.02]</td>
      <td>0.015</td>
      <td>0.005</td>
      <td>-0.124</td>
      <td>8.149881e-02</td>
      <td>0.399</td>
      <td>0.415</td>
    </tr>
    <tr>
      <th>17</th>
      <td>A</td>
      <td>D</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.033</td>
      <td>[-0.11, 0.17]</td>
      <td>0.001</td>
      <td>-0.009</td>
      <td>0.033</td>
      <td>6.459383e-01</td>
      <td>0.098</td>
      <td>0.074</td>
    </tr>
    <tr>
      <th>18</th>
      <td>A</td>
      <td>E</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.071</td>
      <td>[-0.21, 0.07]</td>
      <td>0.005</td>
      <td>-0.005</td>
      <td>-0.071</td>
      <td>3.163578e-01</td>
      <td>0.146</td>
      <td>0.171</td>
    </tr>
    <tr>
      <th>19</th>
      <td>A</td>
      <td>F</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.028</td>
      <td>[-0.17, 0.11]</td>
      <td>0.001</td>
      <td>-0.009</td>
      <td>-0.028</td>
      <td>6.962482e-01</td>
      <td>0.095</td>
      <td>0.068</td>
    </tr>
    <tr>
      <th>20</th>
      <td>A</td>
      <td>G</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.066</td>
      <td>[-0.07, 0.2]</td>
      <td>0.004</td>
      <td>-0.006</td>
      <td>0.066</td>
      <td>3.508146e-01</td>
      <td>0.136</td>
      <td>0.154</td>
    </tr>
    <tr>
      <th>21</th>
      <td>B</td>
      <td>C</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.111</td>
      <td>[-0.25, 0.03]</td>
      <td>0.012</td>
      <td>0.002</td>
      <td>-0.111</td>
      <td>1.166198e-01</td>
      <td>0.3</td>
      <td>0.349</td>
    </tr>
    <tr>
      <th>22</th>
      <td>B</td>
      <td>D</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.102</td>
      <td>[-0.04, 0.24]</td>
      <td>0.010</td>
      <td>0.000</td>
      <td>0.102</td>
      <td>1.497586e-01</td>
      <td>0.248</td>
      <td>0.303</td>
    </tr>
    <tr>
      <th>23</th>
      <td>B</td>
      <td>E</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.001</td>
      <td>[-0.14, 0.14]</td>
      <td>0.000</td>
      <td>-0.010</td>
      <td>0.001</td>
      <td>9.857876e-01</td>
      <td>0.089</td>
      <td>0.050</td>
    </tr>
    <tr>
      <th>24</th>
      <td>B</td>
      <td>F</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.002</td>
      <td>[-0.14, 0.14]</td>
      <td>0.000</td>
      <td>-0.010</td>
      <td>-0.002</td>
      <td>9.769959e-01</td>
      <td>0.089</td>
      <td>0.050</td>
    </tr>
    <tr>
      <th>25</th>
      <td>B</td>
      <td>G</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.154</td>
      <td>[-0.29, -0.02]</td>
      <td>0.024</td>
      <td>0.014</td>
      <td>-0.155</td>
      <td>2.925268e-02</td>
      <td>0.936</td>
      <td>0.590</td>
    </tr>
    <tr>
      <th>26</th>
      <td>C</td>
      <td>D</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.019</td>
      <td>[-0.16, 0.12]</td>
      <td>0.000</td>
      <td>-0.010</td>
      <td>-0.019</td>
      <td>7.929131e-01</td>
      <td>0.092</td>
      <td>0.058</td>
    </tr>
    <tr>
      <th>27</th>
      <td>C</td>
      <td>E</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.273</td>
      <td>[0.14, 0.4]</td>
      <td>0.075</td>
      <td>0.065</td>
      <td>0.280</td>
      <td>9.202577e-05</td>
      <td>175.15</td>
      <td>0.976</td>
    </tr>
    <tr>
      <th>28</th>
      <td>C</td>
      <td>F</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.071</td>
      <td>[-0.07, 0.21]</td>
      <td>0.005</td>
      <td>-0.005</td>
      <td>0.071</td>
      <td>3.191849e-01</td>
      <td>0.145</td>
      <td>0.169</td>
    </tr>
    <tr>
      <th>29</th>
      <td>C</td>
      <td>G</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.040</td>
      <td>[-0.18, 0.1]</td>
      <td>0.002</td>
      <td>-0.009</td>
      <td>-0.040</td>
      <td>5.754757e-01</td>
      <td>0.103</td>
      <td>0.087</td>
    </tr>
    <tr>
      <th>30</th>
      <td>D</td>
      <td>E</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.014</td>
      <td>[-0.12, 0.15]</td>
      <td>0.000</td>
      <td>-0.010</td>
      <td>0.014</td>
      <td>8.385671e-01</td>
      <td>0.09</td>
      <td>0.055</td>
    </tr>
    <tr>
      <th>31</th>
      <td>D</td>
      <td>F</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.066</td>
      <td>[-0.07, 0.2]</td>
      <td>0.004</td>
      <td>-0.006</td>
      <td>0.066</td>
      <td>3.545362e-01</td>
      <td>0.135</td>
      <td>0.153</td>
    </tr>
    <tr>
      <th>32</th>
      <td>D</td>
      <td>G</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.368</td>
      <td>[-0.48, -0.24]</td>
      <td>0.136</td>
      <td>0.127</td>
      <td>-0.386</td>
      <td>8.039531e-08</td>
      <td>1.425e+05</td>
      <td>1.000</td>
    </tr>
    <tr>
      <th>33</th>
      <td>E</td>
      <td>F</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>0.020</td>
      <td>[-0.12, 0.16]</td>
      <td>0.000</td>
      <td>-0.010</td>
      <td>0.020</td>
      <td>7.763481e-01</td>
      <td>0.092</td>
      <td>0.059</td>
    </tr>
    <tr>
      <th>34</th>
      <td>E</td>
      <td>G</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.344</td>
      <td>[-0.46, -0.22]</td>
      <td>0.118</td>
      <td>0.109</td>
      <td>-0.359</td>
      <td>6.250856e-07</td>
      <td>1.993e+04</td>
      <td>0.999</td>
    </tr>
    <tr>
      <th>35</th>
      <td>F</td>
      <td>G</td>
      <td>pearson</td>
      <td>two-sided</td>
      <td>200</td>
      <td>-0.174</td>
      <td>[-0.31, -0.04]</td>
      <td>0.030</td>
      <td>0.020</td>
      <td>-0.176</td>
      <td>1.377071e-02</td>
      <td>1.798</td>
      <td>0.696</td>
    </tr>
  </tbody>
</table>
</div>



The above table represents the correlation between all the elements.


```python

corrs = pg.pairwise_corr(df, columns=['A', 'B', 'C', 'D', 'E'], method='pearson')
corrs.sort_values(by=['p-unc'])[['X', 'Y', 'n', 'r', 'p-unc']].head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>X</th>
      <th>Y</th>
      <th>n</th>
      <th>r</th>
      <th>p-unc</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>B</td>
      <td>200</td>
      <td>0.447</td>
      <td>3.253278e-11</td>
    </tr>
    <tr>
      <th>8</th>
      <td>C</td>
      <td>E</td>
      <td>200</td>
      <td>0.273</td>
      <td>9.202577e-05</td>
    </tr>
    <tr>
      <th>1</th>
      <td>A</td>
      <td>C</td>
      <td>200</td>
      <td>-0.123</td>
      <td>8.149881e-02</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>C</td>
      <td>200</td>
      <td>-0.111</td>
      <td>1.166198e-01</td>
    </tr>
    <tr>
      <th>5</th>
      <td>B</td>
      <td>D</td>
      <td>200</td>
      <td>0.102</td>
      <td>1.497586e-01</td>
    </tr>
  </tbody>
</table>
</div>



The above table represents the correlation between subset of the columns


```python
# One-versus-all
corrs = pg.pairwise_corr(df, columns=[['IQ'], ['C', 'D', 'E', 'F', 'G']])
corrs.sort_values(by=['p-unc'])[['X', 'Y', 'r', 'p-unc']].head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>X</th>
      <th>Y</th>
      <th>r</th>
      <th>p-unc</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>4</th>
      <td>IQ</td>
      <td>G</td>
      <td>0.126</td>
      <td>0.075263</td>
    </tr>
    <tr>
      <th>3</th>
      <td>IQ</td>
      <td>F</td>
      <td>-0.083</td>
      <td>0.240637</td>
    </tr>
    <tr>
      <th>2</th>
      <td>IQ</td>
      <td>E</td>
      <td>-0.056</td>
      <td>0.430250</td>
    </tr>
    <tr>
      <th>1</th>
      <td>IQ</td>
      <td>D</td>
      <td>0.013</td>
      <td>0.854993</td>
    </tr>
    <tr>
      <th>0</th>
      <td>IQ</td>
      <td>C</td>
      <td>-0.006</td>
      <td>0.934357</td>
    </tr>
  </tbody>
</table>
</div>



The above table represents the correlation between IQ and other variables considered(C to F).

## Correlation matrix

The correlation matrix represents the correlation between all the values.


```python
df.corr().round(2)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>IQ</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
      <th>G</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Age</th>
      <td>1.00</td>
      <td>-0.01</td>
      <td>-0.05</td>
      <td>-0.05</td>
      <td>-0.03</td>
      <td>-0.13</td>
      <td>-0.11</td>
      <td>-0.07</td>
      <td>0.08</td>
    </tr>
    <tr>
      <th>IQ</th>
      <td>-0.01</td>
      <td>1.00</td>
      <td>0.07</td>
      <td>0.11</td>
      <td>-0.01</td>
      <td>0.01</td>
      <td>-0.06</td>
      <td>-0.08</td>
      <td>0.13</td>
    </tr>
    <tr>
      <th>A</th>
      <td>-0.05</td>
      <td>0.07</td>
      <td>1.00</td>
      <td>0.45</td>
      <td>-0.12</td>
      <td>0.03</td>
      <td>-0.07</td>
      <td>-0.03</td>
      <td>0.07</td>
    </tr>
    <tr>
      <th>B</th>
      <td>-0.05</td>
      <td>0.11</td>
      <td>0.45</td>
      <td>1.00</td>
      <td>-0.11</td>
      <td>0.10</td>
      <td>0.00</td>
      <td>-0.00</td>
      <td>-0.15</td>
    </tr>
    <tr>
      <th>C</th>
      <td>-0.03</td>
      <td>-0.01</td>
      <td>-0.12</td>
      <td>-0.11</td>
      <td>1.00</td>
      <td>-0.02</td>
      <td>0.27</td>
      <td>0.07</td>
      <td>-0.04</td>
    </tr>
    <tr>
      <th>D</th>
      <td>-0.13</td>
      <td>0.01</td>
      <td>0.03</td>
      <td>0.10</td>
      <td>-0.02</td>
      <td>1.00</td>
      <td>0.01</td>
      <td>0.07</td>
      <td>-0.37</td>
    </tr>
    <tr>
      <th>E</th>
      <td>-0.11</td>
      <td>-0.06</td>
      <td>-0.07</td>
      <td>0.00</td>
      <td>0.27</td>
      <td>0.01</td>
      <td>1.00</td>
      <td>0.02</td>
      <td>-0.34</td>
    </tr>
    <tr>
      <th>F</th>
      <td>-0.07</td>
      <td>-0.08</td>
      <td>-0.03</td>
      <td>-0.00</td>
      <td>0.07</td>
      <td>0.07</td>
      <td>0.02</td>
      <td>1.00</td>
      <td>-0.17</td>
    </tr>
    <tr>
      <th>G</th>
      <td>0.08</td>
      <td>0.13</td>
      <td>0.07</td>
      <td>-0.15</td>
      <td>-0.04</td>
      <td>-0.37</td>
      <td>-0.34</td>
      <td>-0.17</td>
      <td>1.00</td>
    </tr>
  </tbody>
</table>
</div>




```python
plt.figure(figsize=(7, 5))
corrs = df.corr()
mask = np.zeros_like(corrs)
mask[np.triu_indices_from(mask)] = True
sns.heatmap(corrs, cmap='Spectral_r', mask=mask, square=True, vmin=-.4, vmax=.4)
plt.title('Correlation matrix')
plt.tight_layout()
```



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Mar1_2020/output_19_0.png)


**With the p-values on the upper triangle**


```python
# This function was added in Pingouin 0.2.8
df.rcorr()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>IQ</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
      <th>G</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Age</th>
      <td>-</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>IQ</th>
      <td>-0.006</td>
      <td>-</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>A</th>
      <td>-0.052</td>
      <td>0.071</td>
      <td>-</td>
      <td>***</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>B</th>
      <td>-0.053</td>
      <td>0.106</td>
      <td>0.447</td>
      <td>-</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>*</td>
    </tr>
    <tr>
      <th>C</th>
      <td>-0.031</td>
      <td>-0.006</td>
      <td>-0.123</td>
      <td>-0.111</td>
      <td>-</td>
      <td></td>
      <td>***</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>D</th>
      <td>-0.128</td>
      <td>0.013</td>
      <td>0.033</td>
      <td>0.102</td>
      <td>-0.019</td>
      <td>-</td>
      <td></td>
      <td></td>
      <td>***</td>
    </tr>
    <tr>
      <th>E</th>
      <td>-0.114</td>
      <td>-0.056</td>
      <td>-0.071</td>
      <td>0.001</td>
      <td>0.273</td>
      <td>0.014</td>
      <td>-</td>
      <td></td>
      <td>***</td>
    </tr>
    <tr>
      <th>F</th>
      <td>-0.069</td>
      <td>-0.083</td>
      <td>-0.028</td>
      <td>-0.002</td>
      <td>0.071</td>
      <td>0.066</td>
      <td>0.02</td>
      <td>-</td>
      <td>*</td>
    </tr>
    <tr>
      <th>G</th>
      <td>0.079</td>
      <td>0.126</td>
      <td>0.066</td>
      <td>-0.154</td>
      <td>-0.04</td>
      <td>-0.368</td>
      <td>-0.344</td>
      <td>-0.174</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>




```python
# On a subset of columns
df[['C', 'D', 'E', 'F', 'G']].rcorr()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
      <th>G</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>C</th>
      <td>-</td>
      <td></td>
      <td>***</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>D</th>
      <td>-0.019</td>
      <td>-</td>
      <td></td>
      <td></td>
      <td>***</td>
    </tr>
    <tr>
      <th>E</th>
      <td>0.273</td>
      <td>0.014</td>
      <td>-</td>
      <td></td>
      <td>***</td>
    </tr>
    <tr>
      <th>F</th>
      <td>0.071</td>
      <td>0.066</td>
      <td>0.02</td>
      <td>-</td>
      <td>*</td>
    </tr>
    <tr>
      <th>G</th>
      <td>-0.04</td>
      <td>-0.368</td>
      <td>-0.344</td>
      <td>-0.174</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>

The above tables represent the pvalue . The pvalue' s can be used to infer correlation.

### References

- https://pingouin-stats.org/generated/pingouin.pairwise_corr.html#pingouin.pairwise_corr

