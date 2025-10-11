---
title: "Day 25: Running Time and Complexity"
date: 2025-10-11
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 26
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today we will learn about running time, also known as time complexity. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-running-time-and-complexity/tutorial) tab for learning materials and an instructional video.

**Task**  
A prime is a natural number greater than $1$ that has no positive divisors other than $1$ and itself. Given a number, $n$, determine and print whether it is `Prime` or `Not Prime`.

**Note**: If possible, try to come up with a $O(\sqrt{n})$ primality algorithm, or see what sort of optimizations you come up with for an $O(n)$ algorithm. Be sure to check out the Editorial after submitting your code.

**Input Format**  
The first line contains an integer, $T$, the number of test cases.
Each of the $T$ subsequent lines contains an integer, $n$, to be tested for primality.

**Constraints**  

- $1 \le T \le 30$
- $1 \le n \le 2 \times 10^9$

**Output Format**  
For each test case, print whether $n$ is `Prime` or `Not Prime` on a new line.

**Sample Input**  
```text
3
12
5
7
```

**Sample Output**  
```text
Not prime
Prime
Prime
```

**Explanation**  
Test Case 0: $n = 12$.  
$12$ is divisible by numbers other than $1$ and itself (i.e.: $2$, $3$, $4$, $6$), so we print `Not Prime` on a new line.  
Test Case 1: $n = 5$.
$5$ is only divisible $1$ and itself, so we print `Prime` on a new line.

Test Case 2: $n = 7$.
$7$ is only divisible $1$ and itself, so we print `Prime` on a new line.

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int T;
    cin >> T;
    
    for(int i = 0; i < T; i++)
    {
        long long n;
        cin >> n;
        
        if(n <= 2)
        {
            cout << (n == 1 ? "Not prime" : "Prime") << endl;
            continue;
        }
        
        bool flag = true;
        for(long long i = 2; i <= sqrt(n); i++)
        {
            if(n % i == 0)
            {
                flag = false;
                break;
            }
        }
        cout << (flag ? "Prime" : "Not prime") << endl;
    }
    
    return 0;
}

```

$T$개의 입력을 받아서 자연수 $n$이 소수(Prime number)인지 아닌지 판별하는 문제이다. 소수는 $1$과 자기 자신으로만 나누어 떨어지는 수를 말하는데, $1$부터 $n$까지 반복하여 한번씩 비교하는 방법도 있지만 제한 사항으로 $n$의 범위가 $2 \times 10^9$까지이므로 매우 비효율적이다.  
어떤 수의 약수는 쌍(Pair)의 성질을 가지고 있으므로 $\sqrt{n}$까지 반복문을 돌려 약수의 쌍을 한 번에 확인할 수 있다. 이것이 문제에서 언급한 $O(n)$ 복잡도를 $O(\sqrt{n})$으로 줄일 수 있다고 한 부분이다.  
이것에 더해 **에라토스테네스의 체**라고 불리는 알고리즘이 있는데 자연수 $n$까지의 소수를 구할 때 $x$를 확인하고 $n$ 이하의 $x$의 배수를 모두 제거하면서 진행하면 더 효율적으로 구할 수 있다.
