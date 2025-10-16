---
title: "Day 29: Bitwise AND"
date: 2025-10-15
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 0
math: true
published: false
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Welcome to the last day! Today, we're discussing bitwise operations. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-bitwise-and/tutorial) tab for learning materials and an instructional video!

**Task**  
Given set $S = \lbrace1, 2, 3, ..., N\rbrace$. Find two integers, $A$ and $B$ (where $A < B$), from set $S$ such that the value of $A \And B$ is the maximum possible and also less than a given integer, $K$. In this case, $\And$ represents the bitwise AND operator.

**Function Description**  
Complete the bitwiseAnd function in the editor below.

bitwiseAnd has the following paramter(s):

- int N: the maximum integer to consider
- int K: the limit of the result, inclusive

**Returns**  

- int: the maximum value of  within the limit.

**Input Format**  
The first line contains an integer, $T$, the number of test cases.
Each of the $T$ subsequent lines defines a test case as $2$ space-separated integers, $N$ and $K$, respectively.

**Constraints**  

- $1 \le T \le 10^3$
- $2 \le N \le 10^3$
- $2 \le K \le N$

**Sample Input**  
```text
STDIN   Function
-----   --------
3       T = 3
5 2     N = 5, K = 2
8 5     N = 8, K = 5
2 2     N = 2, K = 2
```

**Sample Output**  
```text
1
4
0
```

**Explanation**  
$N = 5, K = 2, S = \lbrace 1, 2, 3, 4, 5 \rbrace$  
All possible values of  and  are:

1. $A = 1, B = 2; A \And B = 0$
2. $A = 1, B = 3; A \And B = 1$
3. $A = 1, B = 4; A \And B = 0$
4. $A = 1, B = 5; A \And B = 1$
5. $A = 2, B = 3; A \And B = 2$
6. $A = 2, B = 4; A \And B = 0$
7. $A = 2, B = 5; A \And B = 0$
8. $A = 3, B = 4; A \And B = 0$
9. $A = 3, B = 5; A \And B = 1$
10. $A = 4, B = 5; A \And B = 4$

The maximum possible value of $A \And B$ that is also $< (K = 2)$ is $1$, so we print $1$ on a new line.

## Code

---

```cpp
...

int bitwiseAnd(int N, int K) 
{
  return (((K - 1) | K) > N && K % 2 == 0) ? K - 2 : K - 1;
}

...
```

`int` 타입 변수 2개를 인수로 `&` 연산의 결과가 가질 수 있는 최대값을 찾는 문제이다.  

1. $K - 1$과 $K$은 가장 낮은 비트만 다르고, `|` 연산을 통해 모든 비트를 합쳐 $N$과 비교해 `&` 연산을 하기 어렵거나 $K - 1$이 $N$과 근접한 수인지 판별한다.
2. $K$가 짝수거나 1번의 연산 결과가 $N$보다 크면 $K$가 $N$의 범위를 벗어나거나 너무 근접해서 $\le N$을 만족하는 $A$와 $B$를 찾기 어렵다는 것을 나타낸다. 따라서 $K - 1$이 될 수 없으므로 그 다음 큰 값인 $K - 2$를 반환한다.
3. 아니라면, $B \le N$ 범위 내에서 $K - 1$이 최대값이 되므로 $K - 1$를 반환한다.
