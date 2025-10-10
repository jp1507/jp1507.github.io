---
title: "Day 16: String to Integer"
date: 2025-10-05
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 17
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're getting started with Exceptions by learning how to parse an integer from a string and print a custom error message. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/tutorial) tab for learning materials and an instructional video!

**Task**  
Read a string, $S$, and print its integer value; if $S$ cannot be converted to an integer, print Bad String.

Note: You must use the String-to-Integer and exception handling constructs built into your submission language. If you attempt to use loops/conditional statements, you will get a $0$ score.

**Input Format**  
A single string, $S$.

**Constraints**  

- $1 \le \lvert S\rvert \le 6$, where $\lvert S\rvert$ is the length of string $S$.
- $S$ is composed of either lowercase letters $(a - z)$ or decimal digits $(0 - 9)$.

**Output Format**  
Print the parsed integer value of $S$, or Bad String if $S$ cannot be converted to an integer.

**Sample Input**  
```text
3
za
```

**Sample Output**  
```text
3
Bad String
```

**Explanation**  
Sample Case $0$ contains an integer, so it should not raise an exception when we attempt to convert it to an integer. Thus, we print the $3$.  
Sample Case $1$ does not contain any integers, so an attempt to convert it to an integer will raise an exception. Thus, our exception handler prints Bad String.

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    string S;
    getline(cin, S);

    try 
    {
        int integerValue = stoi(S);
        cout << integerValue << endl;
    } 
    catch (const invalid_argument&) 
    {
        cout << "Bad String" << endl;
    } 
    catch (const out_of_range&) 
    {
        cout << "Bad String" << endl;
    }

    return 0;
}
```

`try-catch`로 에러를 검출하는 문제이다.
