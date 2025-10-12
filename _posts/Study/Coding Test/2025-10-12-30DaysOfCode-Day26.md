---
title: "Day 26: Nested Logic"
date: 2025-10-12
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 27
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today's challenge puts your understanding of nested conditional statements to the test. You already have the knowledge to complete this challenge, but check out the [Tutorial](https://www.hackerrank.com/challenges/30-nested-logic/tutorial) tab for a video on testing.

**Task**  
Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:  

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: $fine = 0$).
2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, $fine = 15\space\text{Hackos} \times \text{(the number of days late)}$.
3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the $fine = 500\space\text{Hackos} \times \text{(the number of months late)}$.
4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of $\text{10000 Hackos}$.

**Example**  
$d1, m1, y1 = 12312014$ returned date
$d2, m2, y2 = 112015$ due date

The book is returned on time, so no fine is applied.

$d1, m1, y1 = 112015$ returned date
$d2, m2, y2 = 12312014$ due date

The book is returned in the following year, so the fine is a fixed 10000.

**Input Format**  
The first line contains $3$ space-separated integers denoting the respective $day$, $month$, and $year$ on which the book was actually returned.
The second line contains $3$ space-separated integers denoting the respective $day$, $month$, and $year$ on which the book was expected to be returned (due date).

**Constraints**  

- $1 \le D \le 31$
- $1 \le M \le 12$
- $1 \le Y \le 3000$
- $\text{It is guaranteed that the dates will be valid Gregorian calendar dates}$  

**Output Format**  
Print a single integer denoting the library fine for the book received as input.

**Sample Input**  
```text
STDIN       Function
-----       --------
9 6 2015    day = 9, month = 6, year = 2015 (date returned)
6 6 2015    day = 6, month = 6, year = 2015 (date due)
```

**Sample Output**  
```text
45
```

**Explanation**  
Given the following return dates:
Returned: $D_1 = 9, M_1 = 6, Y_1 = 2015$  
Due: $D_2 = 6, M_2 = 6, Y_2 = 2015$  

Because $Y_2 \equiv Y_1$, it is less than a year late.  
Because $M_2 \equiv M_1$, it is less than a month late.  
Because $D_2 < D_1$, it was returned late (but still within the same month and year).  

Per the library's fee structure, we know that our fine will be $15 \space \text{Hackos} \times \text{(＃ days late)}$. We then print the result of $15 \times (D_1 - D_2) = 15 \times (9 - 6) = 45$ as our output.  

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() 
{
     array<int, 3> returned, due;
     
    cin >> returned[2] >> returned[1] >> returned[0];
    cin >> due[2] >> due[1] >> due[0];
    
    cout << (returned <= due ? 0 : std::max({
        10000 * (returned[0] > due[0]),
        500 * (returned[1] - due[1]),
        15 * (returned[2] - due[2])
    })) << endl;
    
    return 0;
}
```

반납일과 기한일을 입력으로 받아 연체된 경우 벌금을 계산하는 문제이다. 문제의 의도처럼 중첩 조건문으로 풀어도 되지만 이미 STL에 구현되어있는 로직으로 풀어보았다. `std::array`는 사전식 비교를 지원하는데 배열의 가장 낮은 인덱스부터 차례로 비교한다. 비교 결과 연체라면 문제 조건에 따라서 벌금을 계산한 후 출력한다.
