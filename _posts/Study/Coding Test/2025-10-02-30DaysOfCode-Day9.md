---
title: "Day 9: Recursion 3"
date: 2025-10-02
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 10
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we are learning about an algorithmic concept called recursion. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-recursion/tutorial) tab for learning materials and an instructional video.  

**Recursive Method for Calculating Factorial**  
  $
  factorial(N) = \begin{cases}
  1 & N \le 1 \\
  N \times factorial(N - 1) & \text{otherwise}
  \end{cases}
  $

**Function Description**  
Complete the factorial function in the editor below. Be sure to use recursion.  

factorial has the following paramter:

int n: an integer

**Returns**  

- int : thefactorial of $n$

**Note**: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of $0$.

**Input Format**  
A single integer, $n$ (the argument to pass to factorial).

**Constraints**  

- $2 \le n \le 12$  
- Your submission must contain a recursive function named factorial.

**Sample Input**  
```text
3
```

**Sample Output**  
```text
6
```

**Explanation**  
Consider the following steps. After the recursive calls from step 1 to 3, results are accumulated from step 3 to 1  

1. $factorial(3) = 3 \times factorial(2) = 3 \times 2 = 6$
2. $factorial(2) = 2 \times factorial(1) = 2 \times 1 = 2$
3. $factorial(1) = 1$

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

int Factorial(int n)
{
  if(n == 1)
    return 1;

  return n * Factorial(n - 1);
}

int main() {
  int num;
  cin >> num;

  cout << Factorial(num);

  return 0;
}

```

재귀함수를 이용해 팩토리얼 연산을 구현하는 문제이다. 재귀함수를 작성할 때 적절한 탈출 조건을 걸어야 무한 루프에 빠지지 않는다.
