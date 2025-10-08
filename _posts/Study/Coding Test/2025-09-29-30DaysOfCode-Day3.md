---
title: "Day 3: Intro to Conditional Statements"
date: 2025-10-08
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 4
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
In this challenge, we learn about conditional statements. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-conditional-statements/tutorial) tab for learning materials and an instructional video.

**Task**  
Given an integer, $n$, perform the following conditional actions:

- If $n$ is odd, print `Weird`
- If $n$ is even and in the inclusive range of $2$ to $5$, print `Not Weird`
- If $n$ is even and in the inclusive range of $6$ to $20$, print `Weird`
- If $n$ is even and greater than $20$, print `Not Weird`  

Complete the stub code provided in your editor to print whether or not $n$ is weird.

**Input Format**  
A single line containing a positive integer, $n$.

**Output Format**  
Print `Weird` if the number is weird; otherwise, print `Not Weird`.

**Sample Input**  
```text
3
24
```

**Sample Output**  
```text
Weird
Not Weird
```

**Explanation**  
Sample Case 0: $n = 3$  
$n$ is odd and odd numbers are weird, so we print `Weird`.

Sample Case 1: $n = 24$  
$n > 20$ and $n$ is even, so it is not weird. Thus, we print `Not Weird`.

## Code

---

```cpp
#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);

int main()
{
    string N_temp;
    getline(cin, N_temp);

    int N = stoi(ltrim(rtrim(N_temp)));
    
    if(N & 1)
        cout << "Weird";
    else
    {
        if((N >= 2 && N <= 5) || (N > 20))
            cout << "Not Weird";
        else if(N >= 6 && N <= 20)
            cout << "Weird";
    }

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

```

`if`문을 이용한 조건문에 관한 문제이다. 조건문을 이용할 때는 주어진 조건을 주의깊게 보아야 잘못된 스코프로 빠지지 않는다. `N & 1`은 비트로 홀, 짝수를 구분하는 표현이다.
