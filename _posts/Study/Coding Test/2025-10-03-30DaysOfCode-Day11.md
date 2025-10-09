---
title: "Day 11: 2D Arrays"
date: 2025-10-03 14:02:00 +0900
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 12
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we are building on our knowledge of arrays by adding another dimension. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-2d-arrays/tutorial) tab for learning materials and an instructional video.

**Context**
Given a $6 \times 6$ 2D Array, $A$:
```text
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```
We define an hourglass in $A$ to be a subset of values with indices falling in this pattern in $A$'s graphical representation:
```text
a b c
  d
e f g
```
There are $16$ hourglasses in $A$, and an hourglass sum is the sum of an hourglass' values.

**Task**  
Calculate the hourglass sum for every hourglass in $A$, then print the maximum hourglass sum.

**Example**  
In the array shown above, the maximum hourglass sum is $7$ for the hourglass in the top left corner.

**Input Format**  
There are $6$ lines of input, where each line contains $6$ space-separated integers that describe the 2D Array $A$.

**Constraints**  

- $-9 \le A[i][j] \le 9$
- $0 \le i, j \le 5$

**Output Format**  
Print the maximum hourglass sum in $A$.

**Sample Input**  
```text
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```

**Sample Output**  
```text
19
```

**Explanation**  
$A$ contains the following hourglasses:
```text
1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0
```
The hourglass with the maximum sum ($19$) is:
```text
2 4 4
  2
1 2 4
```

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

...

int main()
{
    vector<vector<int>> arr(6);

    for (int i = 0; i < 6; i++) {
        arr[i].resize(6);

        string arr_row_temp_temp;
        getline(cin, arr_row_temp_temp);

        vector<string> arr_row_temp = split(rtrim(arr_row_temp_temp));

        for (int j = 0; j < 6; j++) {
            int arr_row_item = stoi(arr_row_temp[j]);

            arr[i][j] = arr_row_item;
        }
    }

    int max = -64;  
    int sum = 0;   
    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4; j++)
        {
            sum=arr[i + 1][j + 1];
            for(int k = 0; k < 3; k++)
                sum += arr[i][j + k] + arr[i + 2][j + k]; 
                
            if(sum > max)
                max = sum;    
        }      
    }
    
    cout << max << endl;

    return 0;
}

...
```

2차원 배열에서 모래시계 모양으로 배치된 부분 집합의 합이 가장 큰 부분 집합을 찾는 문제이다. 제한 사항에서 2차원 배열의 크기와 원소의 범위를 참고해서 가능한 모든 경우의 수를 탐색하고 비교하면 된다.
