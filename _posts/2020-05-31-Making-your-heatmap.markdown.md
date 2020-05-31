---
layout: post
title:  "Making Heatmaps"
date:   2020-05-31 22:02:38 +0530
categories: jekyll update
---

## Making your heatmap

<p style='text-align: justify;'>Heatmap is a continous color map. Colors in color map are governed by specific set of value.</p>

<p style='text-align: justify;'>In bioinformatics heatmap is used to represent gene expression data.</p>
In general it can be used to represent difference in values .



<p style='text-align: justify;'>In this blog we will represent different methods that can be used for making your heatmaps. In general R, Python and javascript  libraries can be used to represent heatmaps.</p>

<p style='text-align: justify;'>In todays blog we will discuss R and Python libraries that can be used to represent heatmap.</p>

<p style='text-align: justify;'>R and python has many libraries that can be used to plot heatmap. Many libraries provide identical heatmaps , but they still differ in some parameters.</p>

- Add heatmap rows and columns with sample information with minimal effort.

- Automatic addition of scales and labels in the figure.



### Heatmap in R

R is generally prefered language for plotting heatmap. The most popular libraries are

- heatmap
- heatmap.2
- NMF
- pheatmap
- heatmap3
- annHeatmap2


```python
library("tidyverse")
```


```python
ReadCount_m <- as.matrix(read.table("heatmap_test_matrix.txt"))
```


```python
head(ReadCount_m)
```


<table>
<caption>A matrix: 6 × 56 of type int</caption>
<thead>
	<tr><th></th><th scope=col>Sample1</th><th scope=col>Sample2</th><th scope=col>Sample3</th><th scope=col>Sample4</th><th scope=col>Sample5</th><th scope=col>Sample6</th><th scope=col>Sample7</th><th scope=col>Sample8</th><th scope=col>Sample9</th><th scope=col>Sample10</th><th scope=col>⋯</th><th scope=col>Sample47</th><th scope=col>Sample48</th><th scope=col>Sample49</th><th scope=col>Sample50</th><th scope=col>Sample51</th><th scope=col>Sample52</th><th scope=col>Sample53</th><th scope=col>Sample54</th><th scope=col>Sample55</th><th scope=col>Sample56</th></tr>
</thead>
<tbody>
	<tr><th scope=row>GeneA</th><td>30</td><td>67</td><td>34</td><td>98</td><td>32</td><td> 3</td><td>79</td><td>15</td><td> 6</td><td>18</td><td>⋯</td><td>97</td><td>49</td><td>12</td><td> 6</td><td>87</td><td>58</td><td>55</td><td>13</td><td>48</td><td>28</td></tr>
	<tr><th scope=row>GeneB</th><td>80</td><td>70</td><td>28</td><td>51</td><td>74</td><td>76</td><td>85</td><td>98</td><td> 7</td><td>64</td><td>⋯</td><td>45</td><td>69</td><td> 1</td><td> 9</td><td> 8</td><td>49</td><td>97</td><td> 5</td><td>83</td><td>66</td></tr>
	<tr><th scope=row>GeneC</th><td>43</td><td>36</td><td>41</td><td>24</td><td>71</td><td>76</td><td>91</td><td>50</td><td>81</td><td>57</td><td>⋯</td><td>21</td><td>10</td><td>75</td><td>35</td><td>77</td><td>92</td><td>85</td><td>73</td><td>97</td><td>12</td></tr>
	<tr><th scope=row>GeneD</th><td>88</td><td>66</td><td>57</td><td> 8</td><td>11</td><td>91</td><td>71</td><td>84</td><td>89</td><td>63</td><td>⋯</td><td>12</td><td>16</td><td>61</td><td>42</td><td>48</td><td>96</td><td>26</td><td>84</td><td>75</td><td>78</td></tr>
	<tr><th scope=row>GeneE</th><td>90</td><td>57</td><td>73</td><td>51</td><td>86</td><td>32</td><td>22</td><td>78</td><td>84</td><td>31</td><td>⋯</td><td>37</td><td>40</td><td> 1</td><td>37</td><td>74</td><td>79</td><td>89</td><td>79</td><td>68</td><td>42</td></tr>
	<tr><th scope=row>GeneF</th><td>31</td><td>87</td><td>65</td><td>36</td><td>64</td><td>15</td><td>28</td><td>89</td><td>94</td><td>58</td><td>⋯</td><td>58</td><td>32</td><td>11</td><td>18</td><td>81</td><td>47</td><td>27</td><td>60</td><td>79</td><td>91</td></tr>
</tbody>
</table>




```python
summary(ReadCount_m)
```


        Sample1         Sample2         Sample3         Sample4     
     Min.   : 1.00   Min.   :18.00   Min.   :24.00   Min.   : 8.00  
     1st Qu.:27.75   1st Qu.:40.75   1st Qu.:34.75   1st Qu.:39.75  
     Median :37.00   Median :61.50   Median :49.00   Median :55.50  
     Mean   :49.10   Mean   :58.40   Mean   :50.50   Mean   :55.00  
     3rd Qu.:83.75   3rd Qu.:69.25   3rd Qu.:68.75   3rd Qu.:70.75  
     Max.   :90.00   Max.   :93.00   Max.   :76.00   Max.   :98.00  
        Sample5         Sample6         Sample7        Sample8         Sample9     
     Min.   :11.00   Min.   : 3.00   Min.   :22.0   Min.   : 3.00   Min.   : 6.00  
     1st Qu.:34.00   1st Qu.:25.75   1st Qu.:50.0   1st Qu.:57.00   1st Qu.:17.00  
     Median :61.50   Median :40.00   Median :75.0   Median :82.00   Median :52.50  
     Mean   :55.60   Mean   :45.50   Mean   :65.6   Mean   :68.30   Mean   :50.40  
     3rd Qu.:73.25   3rd Qu.:72.25   3rd Qu.:85.0   3rd Qu.:89.75   3rd Qu.:83.75  
     Max.   :98.00   Max.   :91.00   Max.   :91.0   Max.   :98.00   Max.   :94.00  
        Sample10        Sample11         Sample12        Sample13   
     Min.   : 2.00   Min.   :  2.00   Min.   : 3.00   Min.   : 3.0  
     1st Qu.:21.25   1st Qu.: 23.25   1st Qu.:11.00   1st Qu.:38.0  
     Median :50.50   Median : 37.50   Median :17.00   Median :74.5  
     Mean   :43.80   Mean   : 44.80   Mean   :29.50   Mean   :60.3  
     3rd Qu.:61.75   3rd Qu.: 64.00   3rd Qu.:30.25   3rd Qu.:82.5  
     Max.   :94.00   Max.   :100.00   Max.   :92.00   Max.   :94.0  
        Sample14        Sample15        Sample16        Sample17    
     Min.   :10.00   Min.   : 10.0   Min.   : 1.00   Min.   : 1.00  
     1st Qu.:19.75   1st Qu.: 39.5   1st Qu.:13.50   1st Qu.:21.00  
     Median :25.50   Median : 85.0   Median :49.50   Median :46.50  
     Mean   :33.60   Mean   : 67.2   Mean   :41.50   Mean   :41.80  
     3rd Qu.:44.00   3rd Qu.: 93.5   3rd Qu.:56.75   3rd Qu.:54.25  
     Max.   :77.00   Max.   :100.0   Max.   :87.00   Max.   :99.00  
        Sample18        Sample19        Sample20       Sample21        Sample22    
     Min.   : 4.00   Min.   :24.00   Min.   : 8.0   Min.   : 2.00   Min.   : 2.00  
     1st Qu.: 9.50   1st Qu.:61.25   1st Qu.:26.5   1st Qu.:21.50   1st Qu.:21.75  
     Median :41.00   Median :81.50   Median :67.5   Median :61.50   Median :64.00  
     Mean   :40.80   Mean   :69.90   Mean   :52.9   Mean   :54.10   Mean   :50.40  
     3rd Qu.:59.75   3rd Qu.:88.50   3rd Qu.:74.0   3rd Qu.:84.75   3rd Qu.:68.00  
     Max.   :93.00   Max.   :97.00   Max.   :89.0   Max.   :95.00   Max.   :84.00  
        Sample23         Sample24        Sample25       Sample26    
     Min.   : 12.00   Min.   :12.00   Min.   :13.0   Min.   : 25.0  
     1st Qu.: 37.75   1st Qu.:20.25   1st Qu.:26.5   1st Qu.: 44.0  
     Median : 63.00   Median :22.50   Median :51.0   Median : 64.5  
     Mean   : 55.40   Mean   :32.90   Mean   :51.4   Mean   : 62.6  
     3rd Qu.: 71.00   3rd Qu.:40.00   3rd Qu.:69.0   3rd Qu.: 80.0  
     Max.   :100.00   Max.   :85.00   Max.   :96.0   Max.   :100.0  
        Sample27        Sample28       Sample29        Sample30        Sample31    
     Min.   : 2.00   Min.   :10.0   Min.   : 9.00   Min.   :14.00   Min.   : 2.00  
     1st Qu.: 4.25   1st Qu.:27.0   1st Qu.:27.75   1st Qu.:28.00   1st Qu.:61.25  
     Median :45.00   Median :32.0   Median :56.00   Median :55.50   Median :79.50  
     Mean   :43.90   Mean   :44.7   Mean   :54.10   Mean   :54.10   Mean   :68.10  
     3rd Qu.:75.75   3rd Qu.:70.5   3rd Qu.:85.25   3rd Qu.:72.75   3rd Qu.:85.75  
     Max.   :97.00   Max.   :92.0   Max.   :94.00   Max.   :98.00   Max.   :97.00  
        Sample32        Sample33        Sample34         Sample35     
     Min.   : 7.00   Min.   : 8.00   Min.   :  4.00   Min.   :  9.00  
     1st Qu.:19.25   1st Qu.:26.25   1st Qu.: 37.75   1st Qu.: 41.25  
     Median :56.00   Median :56.00   Median : 48.00   Median : 65.00  
     Mean   :49.30   Mean   :52.20   Mean   : 56.40   Mean   : 58.50  
     3rd Qu.:74.25   3rd Qu.:77.00   3rd Qu.: 88.00   3rd Qu.: 74.50  
     Max.   :84.00   Max.   :89.00   Max.   :100.00   Max.   :100.00  
        Sample36        Sample37        Sample38         Sample39    
     Min.   : 5.00   Min.   :11.00   Min.   :  7.00   Min.   : 4.00  
     1st Qu.:25.50   1st Qu.:25.25   1st Qu.: 30.25   1st Qu.:26.25  
     Median :28.50   Median :36.00   Median : 74.00   Median :48.00  
     Mean   :34.60   Mean   :43.20   Mean   : 62.90   Mean   :49.90  
     3rd Qu.:42.25   3rd Qu.:64.00   3rd Qu.: 94.75   3rd Qu.:80.75  
     Max.   :86.00   Max.   :82.00   Max.   :100.00   Max.   :93.00  
        Sample40        Sample41       Sample42        Sample43     
     Min.   :12.00   Min.   : 6.0   Min.   : 7.00   Min.   :  8.00  
     1st Qu.:20.50   1st Qu.:37.0   1st Qu.:46.25   1st Qu.: 19.00  
     Median :27.50   Median :44.5   Median :57.50   Median : 56.50  
     Mean   :37.60   Mean   :41.7   Mean   :52.10   Mean   : 50.70  
     3rd Qu.:56.25   3rd Qu.:55.0   3rd Qu.:68.25   3rd Qu.: 69.25  
     Max.   :78.00   Max.   :67.0   Max.   :77.00   Max.   :100.00  
        Sample44        Sample45       Sample46        Sample47        Sample48   
     Min.   :19.00   Min.   : 9.0   Min.   : 8.00   Min.   :12.00   Min.   :10.0  
     1st Qu.:44.75   1st Qu.:39.0   1st Qu.:17.50   1st Qu.:34.75   1st Qu.:14.5  
     Median :61.00   Median :53.5   Median :44.00   Median :41.50   Median :36.0  
     Mean   :60.40   Mean   :51.8   Mean   :46.70   Mean   :45.90   Mean   :37.6  
     3rd Qu.:71.50   3rd Qu.:66.0   3rd Qu.:69.75   3rd Qu.:56.25   3rd Qu.:52.0  
     Max.   :99.00   Max.   :79.0   Max.   :92.00   Max.   :97.00   Max.   :83.0  
        Sample49        Sample50        Sample51         Sample52    
     Min.   : 1.00   Min.   : 3.00   Min.   :  8.00   Min.   :14.00  
     1st Qu.:11.25   1st Qu.:11.25   1st Qu.: 54.50   1st Qu.:47.25  
     Median :40.50   Median :29.00   Median : 79.00   Median :51.50  
     Mean   :43.20   Mean   :27.90   Mean   : 70.20   Mean   :56.90  
     3rd Qu.:71.50   3rd Qu.:39.25   3rd Qu.: 89.25   3rd Qu.:73.75  
     Max.   :99.00   Max.   :66.00   Max.   :100.00   Max.   :96.00  
        Sample53        Sample54        Sample55        Sample56    
     Min.   : 6.00   Min.   : 5.00   Min.   :32.00   Min.   : 4.00  
     1st Qu.:30.25   1st Qu.:15.25   1st Qu.:47.25   1st Qu.:21.25  
     Median :58.00   Median :46.50   Median :62.00   Median :46.50  
     Mean   :58.50   Mean   :44.00   Mean   :62.40   Mean   :46.50  
     3rd Qu.:88.00   3rd Qu.:69.75   3rd Qu.:78.00   3rd Qu.:72.00  
     Max.   :99.00   Max.   :84.00   Max.   :97.00   Max.   :91.00  



```python
metadata <- read.table("heatmap_test_annotation.txt")
```


```python
head(metadata)
```


<table>
<caption>A data.frame: 6 × 2</caption>
<thead>
	<tr><th></th><th scope=col>sample_name</th><th scope=col>condition</th></tr>
	<tr><th></th><th scope=col>&lt;fct&gt;</th><th scope=col>&lt;fct&gt;</th></tr>
</thead>
<tbody>
	<tr><th scope=row>1</th><td>Sample1</td><td>conditionA</td></tr>
	<tr><th scope=row>2</th><td>Sample2</td><td>conditionA</td></tr>
	<tr><th scope=row>3</th><td>Sample3</td><td>conditionA</td></tr>
	<tr><th scope=row>4</th><td>Sample4</td><td>conditionA</td></tr>
	<tr><th scope=row>5</th><td>Sample5</td><td>conditionB</td></tr>
	<tr><th scope=row>6</th><td>Sample6</td><td>conditionB</td></tr>
</tbody>
</table>




```python
conditionToColor<-function(metadata){
    colorsVector = ifelse(metadata["condition"]=="conditionA", 
        "blue", ifelse(metadata["condition"]=="conditionB", 
        "green", "red"))
    return(colorsVector)
}
```
#### heatmap

heatmap is the default function provided by R for plotting. heatmap function accepts values from dataframe and corresponding metadata as vector.

```python
First_Heatmap<-function(count, metadata) {    
    sampleColors = conditionToColor(metadata)
    heatmap(count, margins=c(5,8), ColSideColors=sampleColors)
}

First_Heatmap(ReadCount_m, metadata)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_7_0.png)

#### heatmap.2

heatmap.2 is an “enhanced” heat map function provided by the gplots package.

```python
library("gplots")
Second_Heatmap <- function(count,metadata) {
    sampleColors = conditionToColor(metadata)
    heatmap.2(count, margins=c(5,8), ColSideColors=sampleColors,
        key.xlab="Read Count",
        key=TRUE, symkey=FALSE, density.info="none", trace="none")
}

Second_Heatmap(ReadCount_m, metadata)
```

    
    Attaching package: ‘gplots’
    
    
    The following object is masked from ‘package:stats’:
    
        lowess
    
    



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_8_1.png)

### aheatmap from NMF package.

NMF stands for Non Negative Matrix Factorization (http://renozao.github.io/NMF/master/index.html). 

aheatmap function provided by the NMF accepts dataframes for plotting values. 

It is an advanced package that can handle metadata through data frame instead of vector.
 

```python
library('NMF')
ThirdHeatmap <- function(count, metadata) {    
    aheatmap(count, annCol=metadata[
        "condition"])
}
ThirdHeatmap(ReadCount_m,metadata)
```

    Loading required package: pkgmaker
    
    Loading required package: registry
    
    Loading required package: rngtools
    
    Loading required package: cluster
    
    NMF - BioConductor layer [OK] | Shared memory capabilities [NO: bigmemory] | Cores 3/4
    
      To enable shared memory capabilities, try: install.extras('
    NMF
    ')
    



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_9_1.png)

### Pheatmap

The Pheatmap stands for Pretty heatmap.

It can easily handle metadata and customise labels for experimental conditions with minimal effort.

```python
library('pheatmap')

FourthHeatmap <-function(count, metadata) {    
    info = data.frame(metadata[,"condition"])
    rownames(info) = metadata[["sample_name"]]

    pheatmap(count, annotation_col=info, 
        annotation_names_row=FALSE,
        annotation_names_col=FALSE,
        fontsize_col=5)
    
    head(info)
       
}
FourthHeatmap(ReadCount_m,metadata)
```
Representation of metadata dataframe in Table below


<table>
<caption>A data.frame: 6 × 1</caption>
<thead>
	<tr><th></th><th scope=col>metadata....condition..</th></tr>
	<tr><th></th><th scope=col>&lt;fct&gt;</th></tr>
</thead>
<tbody>
	<tr><th scope=row>Sample1</th><td>conditionA</td></tr>
	<tr><th scope=row>Sample2</th><td>conditionA</td></tr>
	<tr><th scope=row>Sample3</th><td>conditionA</td></tr>
	<tr><th scope=row>Sample4</th><td>conditionA</td></tr>
	<tr><th scope=row>Sample5</th><td>conditionB</td></tr>
	<tr><th scope=row>Sample6</th><td>conditionB</td></tr>
</tbody>
</table>



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_10_1.png)

### heatmap3

heatmap3  represents the easy-to-use interface of heatmap.2.
It can easily handle metadata. 

```python
library(heatmap3)

# Test heatmap3 with several annotation options
Fifth_heatmap<-function(count, metadata) {    
    sampleColors = conditionToColor(metadata)
    
    # Assign just column annotations
    heatmap3(count, margins=c(5,8), ColSideColors=sampleColors) 
    
    # Assign column annotations and make a custom legend for them
    heatmap3(count, margins=c(5,8), ColSideColors=sampleColors, 
        legendfun=function()showLegend(legend=c("conditionA", 
        "conditionB", "conditionC"), col=c("blue", "green", "red"), cex=1.5))
    
    # Assign column annotations as a mini-graph instead of colors,
    # and use the built-in labeling for them
    ColSideAnn<-data.frame(condition=metadata[["condition"]])
    heatmap3(count,ColSideAnn=ColSideAnn,
        ColSideFun=function(x)showAnn(x),
        ColSideWidth=0.8)
}
             
Fifth_heatmap(ReadCount_m, metadata)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_11_0.png)



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_11_1.png)



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_11_2.png)

#### Heatplus 

annHeatmap2 function in Heatplus generates heatmap which are publication friendly(by default uses colors which are generally used in genomics publications).

```python
library(Heatplus)
Sixth_heatmap<-function(count, metadata){
    ann.dat = data.frame(metadata[,"condition"])

    plot(annHeatmap2(count, legend=2,
        ann = list(Col = list(data = ann.dat))))
}

Sixth_heatmap(ReadCount_m, metadata)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_12_0.png)

### Heatmap in Seaborn Python.

The sns.heatmap function can be used to quickly plot heatmaps.

Default colors used by heatmap is not publication friendly.

sns.heatmap function can be quickly used to plot heatmap with annotation and custom scalling .

sns.heatmap provides very good functionality for metadata customization compared to other R packages discussed above.

```python
import seaborn as sns
```


```python
import pandas as pd
import matplotlib.pyplot as plt
```


```python
df1 = pd.read_csv('heatmap_test_matrix.txt',index_col='Gene')
df1.head()
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
      <th>Sample1</th>
      <th>Sample2</th>
      <th>Sample3</th>
      <th>Sample4</th>
      <th>Sample5</th>
      <th>Sample6</th>
      <th>Sample7</th>
      <th>Sample8</th>
      <th>Sample9</th>
      <th>Sample10</th>
      <th>...</th>
      <th>Sample47</th>
      <th>Sample48</th>
      <th>Sample49</th>
      <th>Sample50</th>
      <th>Sample51</th>
      <th>Sample52</th>
      <th>Sample53</th>
      <th>Sample54</th>
      <th>Sample55</th>
      <th>Sample56</th>
    </tr>
    <tr>
      <th>Gene</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>GeneA</th>
      <td>30</td>
      <td>67</td>
      <td>34</td>
      <td>98</td>
      <td>32</td>
      <td>3</td>
      <td>79</td>
      <td>15</td>
      <td>6</td>
      <td>18</td>
      <td>...</td>
      <td>97</td>
      <td>49</td>
      <td>12</td>
      <td>6</td>
      <td>87</td>
      <td>58</td>
      <td>55</td>
      <td>13</td>
      <td>48</td>
      <td>28</td>
    </tr>
    <tr>
      <th>GeneB</th>
      <td>80</td>
      <td>70</td>
      <td>28</td>
      <td>51</td>
      <td>74</td>
      <td>76</td>
      <td>85</td>
      <td>98</td>
      <td>7</td>
      <td>64</td>
      <td>...</td>
      <td>45</td>
      <td>69</td>
      <td>1</td>
      <td>9</td>
      <td>8</td>
      <td>49</td>
      <td>97</td>
      <td>5</td>
      <td>83</td>
      <td>66</td>
    </tr>
    <tr>
      <th>GeneC</th>
      <td>43</td>
      <td>36</td>
      <td>41</td>
      <td>24</td>
      <td>71</td>
      <td>76</td>
      <td>91</td>
      <td>50</td>
      <td>81</td>
      <td>57</td>
      <td>...</td>
      <td>21</td>
      <td>10</td>
      <td>75</td>
      <td>35</td>
      <td>77</td>
      <td>92</td>
      <td>85</td>
      <td>73</td>
      <td>97</td>
      <td>12</td>
    </tr>
    <tr>
      <th>GeneD</th>
      <td>88</td>
      <td>66</td>
      <td>57</td>
      <td>8</td>
      <td>11</td>
      <td>91</td>
      <td>71</td>
      <td>84</td>
      <td>89</td>
      <td>63</td>
      <td>...</td>
      <td>12</td>
      <td>16</td>
      <td>61</td>
      <td>42</td>
      <td>48</td>
      <td>96</td>
      <td>26</td>
      <td>84</td>
      <td>75</td>
      <td>78</td>
    </tr>
    <tr>
      <th>GeneE</th>
      <td>90</td>
      <td>57</td>
      <td>73</td>
      <td>51</td>
      <td>86</td>
      <td>32</td>
      <td>22</td>
      <td>78</td>
      <td>84</td>
      <td>31</td>
      <td>...</td>
      <td>37</td>
      <td>40</td>
      <td>1</td>
      <td>37</td>
      <td>74</td>
      <td>79</td>
      <td>89</td>
      <td>79</td>
      <td>68</td>
      <td>42</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 56 columns</p>
</div>




```python
sns.heatmap(df1)
```




    <matplotlib.axes._subplots.AxesSubplot at 0x7fe988168d30>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_16_1.png)



```python
def heatmap7(df="dataframe", cmap="seismic", scale=True, dim=(4, 6), clus=True, zscore=None, xlabel=True,
             ylabel=True, tickfont=(10, 10), r=300, show=False, figtype='png'):
    
            hm = sns.heatmap(df, cmap=cmap, cbar=scale, xticklabels=xlabel, yticklabels=ylabel)
            plt.xticks(fontsize=tickfont[0])
            plt.yticks(fontsize=tickfont[1])
            
            hm = sns.clustermap(df, cmap=cmap, cbar=scale, xticklabels=xlabel, yticklabels=ylabel,
                                figsize=dim)
            plt.xticks(fontsize=tickfont[0])
            plt.yticks(fontsize=tickfont[1])
```


```python
heatmap7(df1)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_18_0.png)



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/May31_05_2020/output_18_1.png)

#### Conclusion

- heatmap3 , pheatmap and NMF allows us to customize metadata and produce publication friendly plots.

- sns.heatmap() allows us to quickly plot heatmaps with good metadata customization.

#### Data Source

Data used in the plots are random numbers.

https://github.com/balakuntlaJayanth/Stats/tree/master/images/May31_05_2020/Data


#### References

- https://www.rdocumentation.org/packages/gplots/versions/3.0.3/topics/heatmap.2
- https://www.rdocumentation.org/packages/heatmap3/versions/1.1.7/topics/heatmap3
- https://davetang.org/muse/2010/12/06/making-a-heatmap-with-r/
- https://cran.r-project.org/web/packages/NMF/vignettes/heatmaps.pdf
- https://seaborn.pydata.org/generated/seaborn.heatmap.html
