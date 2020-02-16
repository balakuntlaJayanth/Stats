---
layout: post
title:  "Images in Python - II"
date:   2020-02-16 12:37PM 
categories: jekyll update
---


## Image Processing using Python - II

In today's blog we will discuss some basic image manipulation techniques such as 

- Loading and Saving Images
- Scalling Images
- Flipping Images


### Loading and Saving Images
Loading Images is one of the essential preliminary step in image processing. OperCV2 provides imread function to read images.

imread reads image from a specific path and stores image data in the form of numpy array. 

Matplotlib provides the essential functionality of displaying the images in RGB mode.

Loading essential libraries in python

```python
import cv2
```


```python
import numpy as np
import cv2
import matplotlib.pyplot as plt
%matplotlib inline
```

Reading images using cv2.imread function.

```python
image = cv2.imread('F1.jpg')
```

Displaying images using plt.imshow function. 

By default imread function stores image in the form of Blue , Green and Red format.

cv2.COLOR_BGR2RGB provides functionality of converting Blue , Green and Red color format to Red , Green and Blue format.

```python
plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
```




    <matplotlib.image.AxesImage at 0x7fec1a6b2320>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Feb16_2020/Feb_16_2020_3_1.png)

### Scaling Images

- To resize an image, opencv provides cv2.resize() method . 
- The cv2.resize() method requires four argument representing the width and height of the resized image,interpolation . 
- The cv2.resize() function doesn’t modify the original image, it instead returns another Image with the new dimensions. 
- Interpolation is the estimation of a value or set of values based on their context. Cubic,Area and Linear interpolations were done and shown here.

#### Cubic Interpolation

cv2.INTER_CUBIC performs cubic interpolation of the images.



```python
Scaling_cubic = cv2.resize(image,None,fx=2.5,fy=1.5,interpolation= cv2.INTER_CUBIC)
```


```python
plt.imshow(cv2.cvtColor(Scaling_cubic, cv2.COLOR_BGR2RGB))
```




    <matplotlib.image.AxesImage at 0x7fec1a3c2c18>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Feb16_2020/Feb_16_2020_5_1.png)

#### Area Interpolation

cv2.INTER_AREA performs cubic interpolation of the images.

```python
Area = cv2.resize(image,(1600,1300),interpolation= cv2.INTER_AREA)
```


```python
plt.imshow(cv2.cvtColor(Area, cv2.COLOR_BGR2RGB))
```




    <matplotlib.image.AxesImage at 0x7fec1a3afbe0>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Feb16_2020/Feb_16_2020_7_1.png)

#### Linear Interpolation

cv2.INTER_LINEAR performs linear interpolation of the images.

```python
Scaling_linear = cv2.resize(image,None,fx=2.5,fy=1.5,interpolation= cv2.INTER_LINEAR)
```


```python
plt.imshow(cv2.cvtColor(Area, cv2.COLOR_BGR2RGB))
```




    <matplotlib.image.AxesImage at 0x7fec1a31a710>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Feb16_2020/Feb_16_2020_9_1.png)


### Flipping Images

To Flip an image, call the flip() method on it. passing in two-argument.one is the image which you have given and another one is a integer (1,0,-1) according to the value given the image flips. Horizontal -1, Vertical — 0 and Horizontal and Vertical -(-1)



```python
image = cv2.imread('//home//ab//Desktop//T.jpg')
```


```python
plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
```




    <matplotlib.image.AxesImage at 0x7fec1a282860>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Feb16_2020/Feb_16_2020_11_1.png)



```python
flip = cv2.flip(image,1)
```


```python
plt.imshow(cv2.cvtColor(flip, cv2.COLOR_BGR2RGB))
```




    <matplotlib.image.AxesImage at 0x7fec1a25c9b0>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Feb16_2020/Feb_16_2020_13_1.png)



```python
flip1 = cv2.flip(image,0)
```


```python
plt.imshow(cv2.cvtColor(flip1, cv2.COLOR_BGR2RGB))
```




    <matplotlib.image.AxesImage at 0x7fec1a1bbb38>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Feb16_2020/Feb_16_2020_15_1.png)



```python
flip2 = cv2.flip(image,-1)
```


```python
plt.imshow(cv2.cvtColor(flip2, cv2.COLOR_BGR2RGB))
```




    <matplotlib.image.AxesImage at 0x7fec1a198dd8>




![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/Feb16_2020/Feb_16_2020_17_1.png)

### References

- https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html
- https://c402277.ssl.cf1.rackcdn.com/photos/18134/images/hero_small/Medium_WW226365.jpg?1574452099
- https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

