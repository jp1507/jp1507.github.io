---
title: "Day 20: Sorting"
date: 2025-10-07
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 21
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're discussing a simple sorting algorithm called Bubble Sort. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-sorting/topics) tab for learning materials and an instructional video!  

Consider the following version of Bubble Sort:
```cpp
for (int i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    int numberOfSwaps = 0;
    
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
            numberOfSwaps++;
        }
    }
    
    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
        break;
    }
}
```

**Task**  
Given an array, $a$, of size $n$ distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following $3$ lines:

1. Array is sorted in numSwaps swaps.
where $numSwaps$ is the number of swaps that took place.
1. First Element: firstElement
where $firstElement$ is the first element in the sorted array.
1. Last Element: lastElement
where $lastElement$ is the last element in the sorted array.  

**Hint**: To complete this challenge, you will need to add a variable that keeps a running tally of all swaps that occur during execution.

**Example**  
$a = [4, 3, 1, 2]$  
```text
original a: 4 3 1 2
round 1  a: 3 1 2 4 swaps this round: 3
round 2  a: 1 2 3 4 swaps this round: 2
round 3  a: 1 2 3 4 swaps this round: 0
```
In the first round, the $4$ is swapped at each of the $3$ comparisons, ending in the last position. In the second round, the $3$ is swapped at $2$ of the $3$ comparisons. Finally, in the third round, no swaps are made so the iterations stop. The output is the following:  
```text
Array is sorted in 5 swaps.
First Element: 1
Last Element: 4
```

**Input Format**  
The first line contains an integer, $n$, the number of elements in array $a$.
The second line contains $n$ space-separated integers that describe $a[0], a[1], a[2],....,a[n - 1]$.

**Constraints**  

- $2 \le n \le 600$
- $1 \le a[i] \le 2 \times 10^6$, where $0 \le i < n$.

**Output Format**  
Print the following three lines of output:

1. Array is sorted in numSwaps swaps.
where $numSwaps$ is the number of swaps that took place.
2. First Element: firstElement
where $firstElement$ is the first element in the sorted array.
3. Last Element: lastElement
where $lastElement$ is the last element in the sorted array.

**Sample Input**  
```text
3
1 2 3

...

3
3 2 1
```

**Sample Output**  
```text
Array is sorted in 0 swaps.
First Element: 1
Last Element: 3

...

Array is sorted in 3 swaps.
First Element: 1
Last Element: 3
```

**Explanation**  
The array $a = [3, 2, 1]$ is not sorted, so we perform the following $3$ swaps. Each line shows $a$ after each single element is swapped.

1. $[3, 2, 1] \rightarrow [2, 3, 1]$
2. $[2, 3, 1] \rightarrow [2, 1, 3]$
3. $[2, 1, 3] \rightarrow [1, 2, 3]$  

After $3$ swaps, the array is sorted.

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

    string a_temp_temp;
    getline(cin, a_temp_temp);

    vector<string> a_temp = split(rtrim(a_temp_temp));

    vector<int> a(n);

    for (int i = 0; i < n; i++) 
    {
        int a_item = stoi(a_temp[i]);
        a[i] = a_item;
    }

    int numSwaps = 0;
    for (int i = 0; i < n; i++) 
    {
        for (int j = 0; j < n - 1 - i; j++) 
        {
            if (a[j] > a[j + 1]) 
            {
                swap(a[j], a[j + 1]);
                numSwaps++;
            }
        }

        if (numSwaps == 0)
            break;
    }

    cout << "Array is sorted in " << numSwaps << " swaps." << endl;
    cout << "First Element: " << a[0] << endl;
    cout << "Last Element: " << a[n - 1] << endl;

    return 0;
}

...
```

버블 정렬을 구현해서 정렬한 후 스왑 횟수와 처음과 마지막 인덱스의 원소를 출력하는 문제이다.
