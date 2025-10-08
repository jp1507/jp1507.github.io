---
title: "Day 5: Loops"
date: 2025-09-30
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 6
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
In this challenge, we will use loops to do some math. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-loops/tutorial) tab to learn more.

**Task**  
Given an integer, $n$, print its first $10$ multiples. Each multiple $n \times i$ (where $1 \le i \le 10$) should be printed on a new line in the form: `n x i = result`.

**Example**  
$n = 3$  

The printout should look like this:  
```text
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
```

**Input Format**  
A single integer, $n$.

**Constraints**  

- $2 \le i \le 20$

**Output Format**  
Print $10$ lines of output; each line $i$ (where $1 \le i \le 10$) contains the $result$ of $n \times i$ in the form:
`n x i = result`.

**Sample Input**  
```text
2
```

**Sample Output**  
```text
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
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
    
    for(int i = 1; i<= 10; i++)
        cout << n << " x " << i << " = " << n * i << endl;
    
    return 0;
}

...
```

반복문을 이용해 구구단을 출력하는 기본 문제이다.
