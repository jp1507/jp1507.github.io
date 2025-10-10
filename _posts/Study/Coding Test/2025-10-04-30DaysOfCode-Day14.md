---
title: "Day 14: Scope"
date: 2025-10-04
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 15
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today we're discussing scope. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-scope/tutorial) tab for learning materials and an instructional video!  

The absolute difference between two integers, $a$ and $\lvert a - b \rvert$, is written as . The maximum absolute difference between two integers in a set of positive integers, $elements$, is the largest absolute difference between any two integers in $\text{\_elements}$.

The Difference class is started for you in the editor. It has a private integer array ($elements$) for storing  non-negative integers, and a public integer ($maximumDifference$) for storing the maximum absolute difference.

**Task**  
Complete the Difference class by writing the following:  

- A class constructor that takes an array of integers as a parameter and saves it to the $\text{\_elements}$ instance variable.
- A computeDifference method that finds the maximum absolute difference between any $2$ numbers in $\text{\_elements}$ and stores it in the $maximumDifference$ instance variable.

**Input Format**  
You are not responsible for reading any input from stdin. The locked Solution class in the editor reads in $2$ lines of input. The first line contains $N$, the size of the elements array. The second line has $N$ space-separated integers that describe the $\text{\_elements}$ array.

**Constraints**  

- $1 \le N \le 10$
- $1 \le \text{\_elements}[i] \le 100$, where $0 \le i \le N - 1$

**Output Format**  
You are not responsible for printing any output; the Solution class will print the value of the $maximumDifference$ instance variable.

**Sample Input**  
```text
STDIN   Function
-----   --------
3       __elements[] size N = 3
1 2 5   __elements = [1, 2, 5]
```

**Sample Output**  
```text
4
```

**Explanation**  
The scope of the $\text{\_elements}$ array and $maximumDifference$ integer is the entire class instance. The class constructor saves the argument passed to the constructor as the $\text{\_elements}$ instance variable (where the computeDifference method can access it).

To find the maximum difference, computeDifference checks each element in the array and finds the maximum difference between any $2$ elements: $\lvert 1 - 2 \rvert = 1$  
$\lvert 1 - 5 \rvert = 4$  
$\lvert 2 - 5 \rvert = 3$  

The maximum of these differences is $4$, so it saves the value $4$ as the $maximumDifference$ instance variable. The locked stub code in the editor then prints the value stored as $maximumDifference$, which is $4$.

## Code

---

```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int maximumDifference(vector<int> v)
{
    int diff = 0;
    for(int i = 0; i < v.size(); i++)
    {
        for(int j = i + 1; j < v.size(); j++)
            diff = max(diff, abs(v[i] - v[j]));
    }
    return diff;
}

int main() 
{
    int n;
    vector<int> vec;
    
    cin >> n;
    for(int i = 0; i < n; i++)
    {
        int tmp;
        cin >> tmp;
        vec.push_back(tmp);
    }
    
    int maxDiff = maximumDifference(vec);
    
    cout << maxDiff << endl;
    
    return 0;
}
```
