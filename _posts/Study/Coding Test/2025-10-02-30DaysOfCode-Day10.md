---
title: "Day 10: Binary Numbers"
date: 2025-10-02
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 11
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're working with binary numbers. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-binary-numbers/tutorial) tab for learning materials and an instructional video!

**Task**  
Given a base-$10$ integer, $n$, convert it to binary (base-$2$). Then find and print the base-$10$ integer denoting the maximum number of consecutive $1$'s in $n$'s binary representation. When working with different bases, it is common to show the base as a subscript.

**Example**  
$n = 125$  
The binary representation of $125_{10}$ is $1111101_2$. In base $10$, there are $5$ and $1$ consecutive ones in two groups. Print the maximum, $5$.

**Input Format**  
A single integer, $n$.

**Constraints**  

- $1 \le n \le 10^6$  

**Output Format**  
Print a single base-$10$ integer that denotes the maximum number of consecutive $1$'s in the binary representation of $n$.

**Sample Input**  
```text
5
13
```

**Sample Output**  
```text
1
2
```

**Explanation**  
The binary representation of $5_{10}$ is $101_2$, so the maximum number of consecutive $1$'s is $1$.  
The binary representation of $13_{10}$ is $1101_2$, so the maximum number of consecutive $1$'s is $2$.  

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
    
    bitset<32> bit(n);
    
    int max = 0;
    int cnt = 0;
    for(int i = 0; i < bit.size(); i++)
    {
        if(bit[i] == 1)
        {
            cnt++;
            max = std::max(max, cnt);
        }
        else
          cnt = 0;
    }
    
    cout << max;

    return 0;
}

...
```

2진수에 관한 문제이다. 10진수를 2진수로 변환한 후 2진수 내에서 연속된 1의 개수 중 최대값을 출력하면 된다. `while`문을 이용해 직접 2진수를 구할 수 있지만 `bitset`을 이용하면 간단하게 변환할 수 있다.  

`bitset<N>`은 N비트의 고정 크기 시퀀스로, 0 또는 1을 하나 당 1bit에 저장하는 자료형이다. 생성자로 10진수를 넣으면 자동으로 N비트 크기의 2진수로 변환되며 $i$ 번째 비트의 값은 `[i]`(operator [])로 랜덤 접근이 가능하다. $i$ 번째 원소는 $2^i$에 해당하는 자리 값을 나타낸다.
