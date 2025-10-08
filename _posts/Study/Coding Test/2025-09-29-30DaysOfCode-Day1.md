---
title: "Day 1: Data Types"
date: 2025-09-29
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 2
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're discussing data types. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-data-types/tutorial) tab for learning materials and an instructional video!

**Task**  
Complete the code in the editor below. The variables $i$, $d$, and $s$ are already declared and initialized for you. You must:

1. Declare $3$ variables: one of type int, one of type double, and one of type String.
2. Read $3$ lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your $3$ variables.
3. Use the $+$ operator to perform the following operations:
     1. Print the sum of $i$ plus your int variable on a new line.
     2. Print the sum of $d$ plus your double variable to a scale of one decimal place on a new line.
     3. Concatenate $s$ with the string you read as input and print the result on a new line.  

**Note**: If you are using a language that doesn't support using $+$ for string concatenation (e.g.: C), you can just print one variable immediately following the other on the same line. The string provided in your editor must be printed first, immediately followed by the string you read as input.

**Input Format**  
The first line contains an integer that you must sum with $i$.
The second line contains a double that you must sum with $d$.
The third line contains a string that you must concatenate with $s$.

**Output Format**  
Print the sum of both integers on the first line, the sum of both doubles (scaled to $1$ decimal place) on the second line, and then the two concatenated strings on the third line.

**Sample Input**  
```text
12
4.0
is the best place to learn and practice coding!
```

**Sample Output**  
```text
16
8.0
HackerRank is the best place to learn and practice coding!
```

**Explanation**  
When we sum the integers $4$ and $12$, we get the integer $16$.  
When we sum the floating-point numbers $4.0$ and $4.0$, we get $8.0$.  
When we concatenate `HackerRank with is the best place to learn and practice coding!`, we get `HackerRank is the best place to learn and practice coding!`.  

**You will not pass this challenge if you attempt to assign the Sample Case values to your variables instead of following the instructions above and reading input from stdin.**  

## Code

---

```cpp
#include <iostream>
#include <iomanip>
#include <limits>
using namespace std;

int main() 
{
  int i = 4;
  double d = 4.0;
  string s = "HackerRank ";

  int intNum;
  double doubleNum;
  string str;

  cin >> intNum >> doubleNum;
  cin.ignore();
  cin >> str;

  cout << i + intNum <<endl;
  cout << std::fixed << std::setprecision(1) << d + doublenum << endl;
  cout << s + str << endl;

  return 0;
}
```

기본 데이터 타입에 대한 기본 문제였다. `int` 타입, `double` 타입, `string` 타입을 선언한 뒤 형식에 맞게 출력하면 된다. `getline()` 함수를 이용해 한 줄을 입력 받을 때, 이전에 입력 버퍼가 남아있기 때문에 `cin.ignore()`로 비워준 뒤 입력을 받는다. `cout`을 이용해 출력할 때 원하는 소수점 개수만큼 출력하려면 `std::fixed`와 `std::setprecision(int n)`을 이용하면 된다.
