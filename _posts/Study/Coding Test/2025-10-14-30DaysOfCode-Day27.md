---
title: "Day 27: Testing"
date: 2025-10-14
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 28
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
This problem is about unit testing.

Your company needs a function that meets the following requirements:

- For a given array of $n$ integers, the function returns the index of the element with the minimum value in the array. If there is more than one element with the minimum value, it returns the smallest one.
- If an empty array is passed to the function, it raises an exception. A colleague has written this method. The implementation in Python is listed below. Implementations in other languages can be found in the code template.

```python
def minimum_index(seq):
    if len(seq) == 0:
        raise ValueError("Cannot get the minimum value index from an empty sequence")
    min_idx = 0
    for i in range(1, len(seq)):
        if a[i] < a[min_idx]:
            min_idx = i
    return min_idx
```

A coworker has prepared functions that will perform the tests and validate return values. Finish the implementation of $3$ classes to provide data and expected results for the tests.

Complete the following methods.

In the class `TestDataEmptyArray`:  

- `get_array()` returns an empty array  

In the class `TestDataUniqueValues`:  

- `get_array()` returns an array of size at least 2 with all unique elements
- `get_expected_result()` returns the expected minimum value index for this array  

In the class `TestDataExactlyTwoDifferentMinimums`:  

- `get_array()` returns an array where the minimum value occurs at exactly 2 indices
- `get_expected_result()` returns the expected index  

Take a look at the code template to see the exact implementation of functions that your colleague already implemented.

**Note**: The arrays are indexed from $0$.  

## Code

---

```cpp
...

class TestDataEmptyArray 
{
public:
    static vector<int> get_array() 
    {
        vector<int> vec {};
        return vec;
    }
};

class TestDataUniqueValues {
public:
    static vector<int> get_array() 
    {
        vector<int> vec {1, 2, 3, 4, 5};
        return vec;
    }

    static int get_expected_result() 
    {
        return 0;
    }
};

class TestDataExactlyTwoDifferentMinimums 
{
public:
    static vector<int> get_array() {
        vector<int> vec {1, 3, 1};
        return vec;
    }

    static int get_expected_result() {
        return 0;
    }
};

...
```

> 혹시 C++로 풀고 있다면 언어 세팅을 C++14 이하로 해야 정상적인 `main()` 함수 로직이 보인다.
{: .prompt-tip }

`main()` 함수의 사전에 만들어진 로직을 테스트하는 코드를 작성하는 문제이다. `TestWithEmptyArray()`, `TestWithUniqueValues()`,   `TestWithExactlyTwoDifferentMinimums()`를 조건에 따라 구현하면 된다.
