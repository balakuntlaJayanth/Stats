---
layout: post
title:  "Matplotlib playing with rcParams"
date:   2020-10-11 22:02:38 +0530
categories: jekyll update
---

## Matplotlib playing with rcParams

```python
import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight') # fivethirtyeight is name of style
```


```python
print(plt.style.available)
```

    ['Solarize_Light2', '_classic_test_patch', 'bmh', 'classic', 'dark_background', 'fast', 'fivethirtyeight', 'ggplot', 'grayscale', 'seaborn', 'seaborn-bright', 'seaborn-colorblind', 'seaborn-dark', 'seaborn-dark-palette', 'seaborn-darkgrid', 'seaborn-deep', 'seaborn-muted', 'seaborn-notebook', 'seaborn-paper', 'seaborn-pastel', 'seaborn-poster', 'seaborn-talk', 'seaborn-ticks', 'seaborn-white', 'seaborn-whitegrid', 'tableau-colorblind10']


### customising Plots with rc.Params
Customize Matplotlib parameters using rcParams. There are seven settings that I will share with you using rcParams in Matplotlib. They are using LaTeX font, customizing font size, adjusting legend text length, customizing axes line width, changing x-axis and y-axis tick direction, and the last is adjusting the major and minor size for the x-axis and y-axis tick. Let’s discuss it one by one.
### Use LaTeX font


```python
plt.rcParams['text.usetex'] = True
```

### Adjust Font size


```python
plt.rcParams['font.size'] = 15
```
Default font size of matplotlib is 10. Parameter font.size control all text size, including title, x-axis and y-axis label, the x-axis and y-axis tick, legend, text, and annotation. You can change the font size for each element (for example, title) using another code. For example, you want to adjust all of the text sizes to 18, but the legend will be 20. You can adjust it with this code.

```python
plt.rcParams['font.size'] = 15
plt.rcParams['legend.fontsize'] = 18
```

### Change x-axis and y-axis tick direction


```python
plt.rcParams['xtick.direction'] = 'in'
plt.rcParams['ytick.direction'] = 'out'
```
There are three options you can use: in, out, and inout.
### Adjust major and minor tick size


```python
plt.rcParams['xtick.major.size'] = 5.0
plt.rcParams['xtick.minor.size'] = 3.0
plt.rcParams['ytick.major.size'] = 5.0
plt.rcParams['ytick.minor.size'] = 3.0
```


```python
from matplotlib.ticker import MultipleLocator
xsize = 8
ysize = 5
fig, ax = plt.subplots(figsize=(xsize, ysize))
ax.xaxis.set_minor_locator(MultipleLocator(.5))
ax.yaxis.set_minor_locator(MultipleLocator(.005))
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/11102020/output_15_0.png)



```python

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.ticker import MultipleLocator

fsize = 15
tsize = 18

tdir = 'inout'

major = 5.0
minor = 3.0

style = 'default'

plt.style.use(style)
plt.rcParams['text.usetex'] = True
plt.rcParams['font.size'] = fsize
plt.rcParams['legend.fontsize'] = tsize
plt.rcParams['xtick.direction'] = tdir
plt.rcParams['ytick.direction'] = tdir
plt.rcParams['xtick.major.size'] = major
plt.rcParams['xtick.minor.size'] = minor
plt.rcParams['ytick.major.size'] = major
plt.rcParams['ytick.minor.size'] = minor

r = 15
theta = 5
rw = 12
gamma = 0.1

xsize = 8
ysize = 5

#fig, ax = plt.subplots(figsize=(xsize, ysize))

plt.figure(figsize=(xsize, ysize))

err = np.arange(0., r, .05)
z = np.where(err < rw, 0, gamma * (err-rw)**2 * np.sin(np.deg2rad(theta)))
    
plt.scatter(err, z, s = 7, label = r'$\Sigma(x) = \gamma x^2 \sin(\theta)$')
plt.title('Title size = '+ str(tsize))

plt.annotate('Plotting style = ' + style,  xy = (1, 0.05), ha = 'left', va = 'center')
plt.annotate('Figure size = ' + str(xsize) +' x '+ str(ysize)+' (in inches)', xy = (1, 0.045), ha = 'left', va = 'center')
plt.annotate('Font size = '+ str(fsize) +' (in pts)', xy = (1, 0.04), ha = 'left', va = 'center')
plt.annotate('Tick direction = '+ tdir, xy = (1, 0.035), ha = 'left', va = 'center')
plt.annotate('Tick major, minor size = '+ str(major)+ ' and ' + str(minor), xy = (1, 0.03), ha = 'left', va = 'center')

ax = plt.gca()

ax.xaxis.set_minor_locator(MultipleLocator(.5))
ax.yaxis.set_minor_locator(MultipleLocator(.005))
plt.legend()
plt.xlabel('$x$', labelpad = 10)
plt.ylabel('$\phi$', labelpad = 10);
plt.savefig('professional_plot.png', dpi = 300, pad_inches = .1, bbox_inches = 'tight')
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/11102020/output_16_0.png)


### Adjust Line Width


```python
plt.rcParams['axes.linewidth'] = 3.0
```


