---
layout: post
title:  "Advanced Python"
date:   2020-04-25 22:02:38 +0530
categories: jekyll update
---

## Advanced Python
Notebook that explores with examples advanced Python topics like cdecorators, generators, etc.

### Decorator
"a callable that takes a function as an argument and returns a replacement function"


```python
import functools
```


```python
# decorator function, which does basic logging
def log(fun):
    @functools.wraps(fun)
    def wrapper(*args, **kw):
        print("Before decoration")
        result = fun(*args, **kw)
        print("After invocation")
        return result
    return wrapper
```


```python
# base function
@log
def sum(a, b):
    return a + b

# equivalent to
#sum = log(sum)
```


```python
sum(1,3)
```

    Before decoration
    After invocation





    4



### Mutable Default Argument Value
What will the following code print?


```python
def test(n, l=[]):
    for i in range(n):
        l.append(i)
    print(l)
```


```python
test(3)
test(3, [1,2,3])
test(3)
```

    [0, 1, 2]
    [1, 2, 3, 0, 1, 2]
    [0, 1, 2, 0, 1, 2]



```python
# it can be noticed that the mutable argument changes
# are memorized in the method signature
import inspect
inspect.signature(test)
```




    <Signature (n, l=[0, 1, 2, 0, 1, 2])>



