---
layout: post
title:  "D3 in Python explained using scatter plot"
date:   2020-06-21 22:02:38 +0530
categories: jekyll update
---

## D3 in Python explained using scatter plot

### Introduction

<p style='text-align: justify;'>D3.js is a very popular data visualization library. D3.js can be used only through html. IPython provides functionality to embed html in to jupyter notebooks. </p>

Now let us use the famous Iris data set to represent a scatter plot.

<p style='text-align: justify;'>We will use the blocks template from mike bostocks blog ,to construct and customize the scatterplot in order to learn more about it .The link to the data set is here
(https://gist.githubusercontent.com/mbostock/3887118/raw/2e68ffbeb23fe4dadd9b0f6bca62e9def6ee9e17/data.tsv) and it is in the tsv format.</p>


```python
# load the Preliminaries
from IPython.core.display import display, HTML
from string import Template
import pandas as pd
import json, random
```


```python
# Get the D3 host locally. 
HTML('<script src="./d3.min.js"></script>')
```




<script src="./d3.min.js"></script>




```python
# get the data from the link and parse it to convert it into a datafram-it's in tsv format
f = 'https://gist.githubusercontent.com/mbostock/3887118/raw/2e68ffbeb23fe4dadd9b0f6bca62e9def6ee9e17/data.tsv'
iris = pd.read_csv(f,sep="\t")
iris.head()
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
      <th>sepalLength</th>
      <th>sepalWidth</th>
      <th>petalLength</th>
      <th>petalWidth</th>
      <th>species</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
  </tbody>
</table>
</div>




```python
# D3 accepts dictionaries , so let's convert data frame into dictionaries.
```


```python
iris_array_of_dicts = iris.to_dict(orient='records')
iris_array_of_dicts[:5]
```




    [{'sepalLength': 5.1,
      'sepalWidth': 3.5,
      'petalLength': 1.4,
      'petalWidth': 0.2,
      'species': 'setosa'},
     {'sepalLength': 4.9,
      'sepalWidth': 3.0,
      'petalLength': 1.4,
      'petalWidth': 0.2,
      'species': 'setosa'},
     {'sepalLength': 4.7,
      'sepalWidth': 3.2,
      'petalLength': 1.3,
      'petalWidth': 0.2,
      'species': 'setosa'},
     {'sepalLength': 4.6,
      'sepalWidth': 3.1,
      'petalLength': 1.5,
      'petalWidth': 0.2,
      'species': 'setosa'},
     {'sepalLength': 5.0,
      'sepalWidth': 3.6,
      'petalLength': 1.4,
      'petalWidth': 0.2,
      'species': 'setosa'}]



### CSS,HTML,Javascript  based on blocks example

Note that in the below css_text, we have removed the 'body' style reference from the original blocks text. This is to avoid this style changing the rest of the notebook.

You can get blocks from here : https://bl.ocks.org/mbostock/3887118


```python
css_text = '''
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.dot {
  stroke: #000;
}
'''
```

Next, let’s copy the java script and make two changes that are :

* The first set of changes is to the width and height of the image
* The second change is simply to reference a different DOM element as the starting point. D3 works on specific DOM element to modify DOM elements. Default file reading parameters are altered. The $ is used in the templete engine to find and replace.



```python
js_text_template = Template('''
var margin = {top: 20, right: 20, bottom: 30, left: 40},
// ****    width = 960 - margin.left - margin.right, ****
// ****    height = 500 - margin.top - margin.bottom; ****
    width = 720 - margin.left - margin.right,
    height = 375 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

// **** var svg = d3.select("body").append("svg") ****
var svg = d3.select("#$graphdiv").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// **** d3.tsv("data.tsv", function(error, data) { ****
// ****  if (error) throw error; ****

var data = $data_d3 ;

  data.forEach(function(d) {
    d.sepalLength = +d.sepalLength;
    d.sepalWidth = +d.sepalWidth;
  });

  x.domain(d3.extent(data, function(d) { return d.sepalWidth; })).nice();
  y.domain(d3.extent(data, function(d) { return d.sepalLength; })).nice();

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Sepal Width (cm)");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Sepal Length (cm)")

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.sepalWidth); })
      .attr("cy", function(d) { return y(d.sepalLength); })
      .style("fill", function(d) { return color(d.species); });

  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

// **** }); ****

''')
```


```python
# Now let’s make a template for the html string
html_template = Template('''
<style> $css_text </style>
<div id="graph-div"></div>
<script> $js_text </script>
''')

```

<p style='text-align: justify;'>You can notice css text for the style .we select div(graph-div) for DOM manipulation. Then we substitute predefined css_text and js_text in the html template.</p>


```python
js_text = js_text_template.substitute({'data_d3': json.dumps(iris_array_of_dicts),
                                       'graphdiv': 'graph-div'})
HTML(html_template.substitute({'css_text': css_text, 'js_text': js_text}))
```

![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/21_june_2020/Screenshot_2020-06-21%20SCATTER%20PLOT.png)




