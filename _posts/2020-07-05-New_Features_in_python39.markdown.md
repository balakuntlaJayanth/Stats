---
layout: post
title:  "New Features in Python 3.9"
date:   2020-07-05 22:02:38 +0530
categories: jekyll update
---

## New Features in Python 3.9

python 3.9 is the future version of python .It is expected to be released in october 2020.

Currently, 3.9.0a6 version is available for download as a beta version.

We have covered some interesting features in python 3.9.

I am using snapshots from interactive python because python3.9 lacks jupyter support for now.


### New Features in dictionaries(dict)

### Union operator

The union operator `|` can be used to update and merge dictionaries

#### `Example1` : Merge Dictionary

In this examples there are 3 dictionaries A1, B1 and C1. 

The elements of A1 and B1 are not unique, but elements of A1 and C1 are unique

![](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/July5_2020/Screenshot at 2020-07-05 15-19-58.png) 

In the above example we merge A1 with B1 and A1 with C1.

#### `Example 2`: Update Dictionary

![](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/July5_2020/Screenshot at 2020-07-05 15-37-41.png) 

In the above Example 2 we update A1 with C1.

### New Features in String

#### `Example 3` : String methods (removeprefix() and removesuffix() )


![](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/July5_2020/Screenshot3 at 2020-07-05 15-39-35.png) 

Note: removeprefix() and removesuffix()  string methods added in Python 3.9  as a substitute for lstrip() and rstrip() existing methods. Please read PEP 616 for more details.

### New Features in File

#### `Example 4`: Reading files with Symlink.

python3.9  readlink() function provides functionality to read files with symlink. 

![](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/July5_2020/Screenshot at 2020-07-05 16-34-27.png) 

In the above example we create symlink using `ln -s` linux command.
Then we used the readlink() function to display the posixpath of original file.

### References

- https://docs.python.org/3.9/whatsnew/3.9.html
- https://www.python.org/dev/peps/pep-0596/
- https://www.python.org/dev/peps/pep-0584


