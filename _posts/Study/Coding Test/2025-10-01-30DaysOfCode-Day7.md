---
title: "Day 7: Arrays"
date: 2025-10-01
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 8
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we will learn about the Array data structure. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-arrays/tutorial) tab for learning materials and an instructional video.

**Task**  
Given an array, $A$, of $N$ integers, print $A$'s elements in reverse order as a single line of space-separated numbers.

**Example**  
$A = [1, 2, 3, 4]$  
Print 4 3 2 1. Each integer is separated by one space.

**Input Format**  
The first line contains an integer, $N$ (the size of our array).
The second line contains $N$ space-separated integers that describe array $A$'s elements.

**Constraints**  

- $1 \le N \le 1000$
- $1 \le A[i] \le 10000$, where $A[i]$ is the $i^{th}$ integer in the array.

**Output Format**  
Print the elements of array $A$ in reverse order as a single line of space-separated numbers.

**Sample Input**  
```text
4
1 4 3 2
```

**Sample Output**  
```text
2 3 4 1
```

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

...

int main()
{
    string n_temp;
    getline(cin, n_temp);

    int n = stoi(ltrim(rtrim(n_temp)));

    string arr_temp_temp;
    getline(cin, arr_temp_temp);

    vector<string> arr_temp = split(rtrim(arr_temp_temp));

    vector<int> arr(n);

    for (int i = 0; i < n; i++) {
        int arr_item = stoi(arr_temp[i]);

        arr[i] = arr_item;
    }
    
    for(int i = n - 1; i >= 0; i--)
        cout << arr[i] << " ";

    return 0;
}

...
```

배열을 선언하고 입력 값으로 초기화한 뒤 인덱스 순서의 반대로 출력하는 문제이다.
