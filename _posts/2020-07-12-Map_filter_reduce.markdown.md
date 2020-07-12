---
layout: post
title:  "Map Filter and Reduce"
date:   2020-07-12 22:02:38 +0530
categories: jekyll update
---

## Map Filter and Reduce

Map, Filter, and Reduce are paradigms of functional programming. They allow the programmer (you) to write simpler, shorter code, without neccessarily needing to bother about intricacies like loops and branching.

Essentially, these three functions allow you to apply a function across a number of iterables, in one full swoop. map and filter come built-in with Python (in the __builtins__ module) and require no importing. reduce, however, needs to be imported as it resides in the functools module. Let's get a better understanding of how they all work, starting with map.


```python
first_list = [2, 4, 5]

```


```python
first_list = [2, 4, 5]
```
### Map 

The map() function in python has the following syntax:

map(func, *iterables)

```python
print(map(lambda x: x**2, first_list))
```

    <map object at 0x7f0c447eff50>



```python
first_list = [2,4,5]
print(list(map(lambda x: x**2, first_list)))
```

    [4, 16, 25]



```python
def squareit(n):
    return n**2
print(list(map(squareit, first_list)))

```

    [4, 16, 25]



```python
sums_list = [3,5,9,7]
sums_list2 = (4,5,6,7)
print(list(map(lambda x,y : x+y, sums_list,sums_list2)))

```

    [7, 10, 15, 14]



```python
list_of_names = ['nikola', 'james', 'albert']
list_of_names2 = ['tesla','watt','einstein']
proper = lambda x, y: x[0].upper()+x[1:] +' '+ y[0].upper()+y[1:]
print(list(map(proper, list_of_names,list_of_names2)))

```

    ['Nikola Tesla', 'James Watt', 'Albert Einstein']

### Filter

While map() passes each element in the iterable through a function and returns the result of all elements having passed through the function, filter(), first of all, requires the function to return boolean values (true or false) and then passes each element in the iterable through the function, "filtering" away those that are false. It has the following syntax:

filter(func, iterable)

```python
#Filter
divby3 = lambda x:  x % 3 == 0
my_list = [3,4,5,6,7,8,9]
div = filter(divby3, my_list)
print(list(div))


```

    [3, 6, 9]

### Reduce

reduce applies a function of two arguments cumulatively to the elements of an iterable, optionally starting with an initial argument. It has the following syntax:

reduce(func, iterable[, initial])

```python
#Reduce
from functools import reduce
q  = reduce(lambda x, y: x+y, range(1,4))
print(q)

```

    6



```python
list_of_nums = [22,45,32,20,87,94,30]
print(reduce(lambda x,y: x if x>y else y,list_of_nums))

```

    94


### References

- https://wiki.python.org/moin/BeginnersGuide
