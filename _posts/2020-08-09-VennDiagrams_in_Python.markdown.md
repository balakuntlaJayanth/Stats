---
layout: post
title:  "Venn Diagrams in Python"
date:   2020-08-09 22:02:38 +0530
categories: jekyll update
---
## Venn Diagrams in Python

### What is Venn Diagram

- Sets of shapes specially circles to represent the logical relationships among two or more variables or datasets
- Venn diagrams are useful to identify the shared and unique elements belonging to each variable or datasets For example, in genomics experiments Venn diagrams are useful to identify the shared and unique genes among different conditions.

### How to create Venn Diagram in Python

```python
import pandas as pd
```


```python
from matplotlib_venn import venn3, venn2
```


```python
def venn(vennset=(1,1,1,1,1,1,1), venncolor=('#00909e', '#f67280', '#ff971d'), vennalpha=0.5,
         vennlabel=('A', 'B', 'C')):
    fig = plt.figure()
    if len(vennset) == 7:
        venn3(subsets=vennset, set_labels=vennlabel, set_colors=venncolor, alpha=vennalpha)
        plt.savefig('venn3.png', format='png', bbox_inches='tight', dpi=300)
    elif len(vennset) == 3:
        venn2(subsets=vennset, set_labels=vennlabel, set_colors=venncolor, alpha=vennalpha)
        plt.savefig('venn2.png', format='png', bbox_inches='tight', dpi=300)
    else:
        print("Error: check the set dataset")
```

Plot 2 and 3-way Venn diagrams using matplotlib venn

```python
import matplotlib.pyplot as plt
venn(vennset=(1,1,1,1,1,1,1))
```

Generated Venn plots by above code,

![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/09082020/output_4_0.png)



```python
venn(vennset=(300,600,402,470,200,230,408), vennlabel=("A", "B", "C"))
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/09082020/output_5_0.png)

With changes in default parameters for sets, and color, and labels

```python
# change default color
# check for more colors at https://www.webucator.com/blog/2015/03/python-color-constants-module/
venn(vennset=(300,600,402,470,200,230,408), vennlabel=("X", "Y", "Z"), venncolor=('#ff6347', '#008000', '#FF00FF'))
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/09082020/output_6_0.png)


With changes in default parameters for transparency
```python
venn(vennset=(300,600,402,470,200,230,408), vennlabel=("X", "Y", "Z"), vennalpha=0.9)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/09082020/output_7_0.png)



```python
venn(vennset=(300,600,402), vennlabel=("X", "Y"), venncolor=('#ff6347', '#008000'), vennalpha=0.9)
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/09082020/output_8_0.png)



```python
# library
import matplotlib.pyplot as plt
from matplotlib_venn import venn2
 
# First way to call the 2 group Venn diagram:
venn2(subsets = (10, 5, 2), set_labels = ('Group A', 'Group B'))
plt.show()
 
# Second way
venn2([set(['A', 'B', 'C', 'D']), set(['D', 'E', 'F'])])
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/09082020/output_9_0.png)



![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/09082020/output_9_1.png)



### References
- https://github.com/konstantint/matplotlib-venn