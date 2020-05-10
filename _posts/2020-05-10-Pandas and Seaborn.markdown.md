---
layout: post
title:  "Pandas and Seaborn"
date:   2020-05-10 22:02:38 +0530
categories: jekyll update
---

## Pandas and Seaborn

Pandas and seaborn is one of the essential combination used for data analysis.
In this notebook, I'm going to demonstrate various methods related to Pandas and Seaborn using simulated data.

The main topic discussed in this notebook is data manipulation with Pandas, and visualization of manipulated data with seaborn.

### Data Loading

The Simulated data is in csv format. The csv format can be loaded using pandas read_csv function.


```python
import numpy as np
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
```


```python
# Load conversation messages
msgs = pd.read_csv('//home//ab//Desktop//test_conv.csv', parse_dates=['datetime'])
# Display first 5 entries of our dataframe
msgs.head()
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
      <th>datetime</th>
      <th>sender</th>
      <th>text</th>
      <th>Unnamed: 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020-01-11 00:16:51</td>
      <td>D</td>
      <td>I... remember.</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2020-01-11 19:06:48</td>
      <td>D</td>
      <td>I'm sure you would.</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2020-01-12 18:10:15</td>
      <td>D</td>
      <td>Where is my mother! How oddly thou repliest! Y...</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2020-01-13 21:45:27</td>
      <td>D</td>
      <td>I'm at Space Station Five, darling. How are you?</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2020-01-14 15:44:06</td>
      <td>F</td>
      <td>You were never invited to my house.</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
msgs.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 1000 entries, 0 to 999
    Data columns (total 4 columns):
    datetime      1000 non-null datetime64[ns]
    sender        1000 non-null object
    text          1000 non-null object
    Unnamed: 3    2 non-null object
    dtypes: datetime64[ns](1), object(3)
    memory usage: 31.3+ KB


### Data Transformation

Data Transformation involves applying custom functions to calculate some basic statistics.


```python
 #Most simple and dummy method possible for tokenizing your text
def get_words(text):
    return text.strip().split()
```


```python
# Our function to apply. When applied to a dataframe this will get a row as input
def extract_text_basic_stats(row):
    # tokenize our message text
    words = get_words(row['text'])
    # Compute message stats and add entries to the row
    # For demonstration purposes, but otherwise clearly inefficient way to do it
    row['text_len'] = len(row['text'])
    row['num_tokens'] = len(words)
    row['num_types'] = len(set(words))
    return row

# We apply row wise, so axis = 1
msgs_stats = msgs.apply(extract_text_basic_stats, axis=1)
msgs_stats.head()
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
      <th>datetime</th>
      <th>sender</th>
      <th>text</th>
      <th>Unnamed: 3</th>
      <th>text_len</th>
      <th>num_tokens</th>
      <th>num_types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020-01-11 00:16:51</td>
      <td>D</td>
      <td>I... remember.</td>
      <td>NaN</td>
      <td>14</td>
      <td>2</td>
      <td>2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2020-01-11 19:06:48</td>
      <td>D</td>
      <td>I'm sure you would.</td>
      <td>NaN</td>
      <td>19</td>
      <td>4</td>
      <td>4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2020-01-12 18:10:15</td>
      <td>D</td>
      <td>Where is my mother! How oddly thou repliest! Y...</td>
      <td>NaN</td>
      <td>100</td>
      <td>18</td>
      <td>16</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2020-01-13 21:45:27</td>
      <td>D</td>
      <td>I'm at Space Station Five, darling. How are you?</td>
      <td>NaN</td>
      <td>48</td>
      <td>9</td>
      <td>9</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2020-01-14 15:44:06</td>
      <td>F</td>
      <td>You were never invited to my house.</td>
      <td>NaN</td>
      <td>35</td>
      <td>7</td>
      <td>7</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Create new feature by extracting the month from the date
msgs_stats['month'] = msgs_stats['datetime'].dt.month
# Group by month and sender and aggregate by sum
grouped_msgs = msgs_stats.groupby(['sender','month']).sum()
grouped_msgs.head()
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
      <th></th>
      <th>text_len</th>
      <th>num_tokens</th>
      <th>num_types</th>
    </tr>
    <tr>
      <th>sender</th>
      <th>month</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">D</th>
      <th>1</th>
      <td>1311</td>
      <td>251</td>
      <td>239</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1487</td>
      <td>280</td>
      <td>265</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2236</td>
      <td>436</td>
      <td>417</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2379</td>
      <td>449</td>
      <td>430</td>
    </tr>
    <tr>
      <th>5</th>
      <td>1369</td>
      <td>260</td>
      <td>248</td>
    </tr>
  </tbody>
</table>
</div>



### Basic plotting

Let's start with some basic plotting with the current data. A pointplot is a good representation. Seaborn function directly recieves the X and Y values from the pandas data frame


```python
sns.pointplot(x='month', y='num_tokens', data=grouped_msgs.reset_index(), hue='sender')
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/10_may_2020/output_14_0.png)


### Multi-Index slicers

.xs represent multi-index slicing. multi-index slicing helps to partion the data and provide it to seaborn for plotting


```python
# Create figure with two plots
import matplotlib.pyplot as plt

fig, axes = plt.subplots(2, 2, sharey=True)

# Get messages for a specific sender and plot values
msgs_sender = grouped_msgs.xs('D', level='sender')
axes[0,0].set_title('Word Count - D')
sns.barplot(x='month', y='num_tokens', data=msgs_sender.reset_index(), ax=axes[0,0], color="steelblue")

#or we can plot the total, reusing  groupby, on the index this time, and summing the results
msgs_total = grouped_msgs.groupby(level='month').sum()
axes[0,1].set_title('Word Count - Total')
sns.barplot(x='month', y='num_tokens', data=msgs_total.reset_index(), ax=axes[0,1], color="steelblue")

#or check for a single month
msgs_month = grouped_msgs.xs(3, level='month')
axes[1,0].set_title('Word Count - March')
sns.barplot(x='sender', y='num_tokens', data=msgs_month.reset_index(), ax=axes[1,0])

#or finally plot all in one, withouth additional selection
axes[1,1].set_title('Word Count')
sns.barplot(x='month', y='num_tokens', hue='sender', data=grouped_msgs.reset_index(), ax=axes[1,1])
plt.show()
```


![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/10_may_2020/output_17_0.png)



```python
msgs_stats['year'] = msgs_stats['datetime'].dt.year
yearly_msgs = msgs_stats.groupby(['sender','month','year']).sum()
yearly_msgs = yearly_msgs.drop('text_len', axis=1)
yearly_msgs.head()
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
      <th></th>
      <th></th>
      <th>num_tokens</th>
      <th>num_types</th>
    </tr>
    <tr>
      <th>sender</th>
      <th>month</th>
      <th>year</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="5" valign="top">D</th>
      <th rowspan="2" valign="top">1</th>
      <th>2017</th>
      <td>127</td>
      <td>122</td>
    </tr>
    <tr>
      <th>2020</th>
      <td>124</td>
      <td>117</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">2</th>
      <th>2017</th>
      <td>130</td>
      <td>125</td>
    </tr>
    <tr>
      <th>2020</th>
      <td>150</td>
      <td>140</td>
    </tr>
    <tr>
      <th>3</th>
      <th>2017</th>
      <td>240</td>
      <td>230</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Stack our data and rename columns
yearly_msgs = yearly_msgs.stack().reset_index()
yearly_msgs.columns.values[3] = 'stat'
yearly_msgs.columns.values[4] = 'val'
yearly_msgs.head()
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
      <th>sender</th>
      <th>month</th>
      <th>year</th>
      <th>stat</th>
      <th>val</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>D</td>
      <td>1</td>
      <td>2017</td>
      <td>num_tokens</td>
      <td>127</td>
    </tr>
    <tr>
      <th>1</th>
      <td>D</td>
      <td>1</td>
      <td>2017</td>
      <td>num_types</td>
      <td>122</td>
    </tr>
    <tr>
      <th>2</th>
      <td>D</td>
      <td>1</td>
      <td>2020</td>
      <td>num_tokens</td>
      <td>124</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>1</td>
      <td>2020</td>
      <td>num_types</td>
      <td>117</td>
    </tr>
    <tr>
      <th>4</th>
      <td>D</td>
      <td>2</td>
      <td>2017</td>
      <td>num_tokens</td>
      <td>130</td>
    </tr>
  </tbody>
</table>
</div>



### Facet Grid

Seaborn Facet grid helps us to characterise the data . grid plots helps to share axis for multiple plots.
A FacetGrid can be drawn with up to three dimensions − row, col, and hue


```python
# Create grid specifying to use years for columns and stats for rows
grid = sns.FacetGrid(yearly_msgs, col='year', row='stat', margin_titles=True, sharey=True, legend_out=True)
# Map to each grid sub-plot a barplot
grid.map(sns.barplot, 'month', 'val', 'sender')
grid.axes[0][0].legend()
plt.show()
```

  ![png](https://raw.githubusercontent.com/balakuntlaJayanth/Stats/master/images/10_may_2020/output_22_1.png)



### References

- https://seaborn.pydata.org/
