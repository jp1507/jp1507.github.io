---
title: "Day 0: Hello, World"
date: 2025-09-29
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 1
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
In this challenge, we review some basic concepts that will get you started with this series. You will need to use the same (or similar) syntax to read input and write output in challenges throughout HackerRank. Check out the Tutorial tab for learning materials and an instructional video!

**Task**  
To complete this challenge, you must save a line of input from stdin to a variable, print Hello, World. on a single line, and finally print the value of your variable on a second line.

You've got this!

**Note**: The instructions are Java-based, but we support submissions in many popular languages. You can switch languages using the drop-down menu above your editor, and the  variable may be written differently depending on the best-practice conventions of your submission language.

**Input Format**  
A single line of text denoting  (the variable whose contents must be printed).

**Output Format**  
Print Hello, World. on the first line, and the contents of  on the second line.

**Sample Input**  
```text
Welcome to 30 Days of Code!
```

**Sample Output**  
```text
Hello, World. 
Welcome to 30 Days of Code!
```

**Explanation**  
On the first line, we print the string literal Hello, World.. On the second line, we print the contents of the  variable which, for this sample case, happens to be Welcome to 30 Days of Code!. If you do not print the variable's contents to stdout, you will not pass the hidden test case.

## Code

---

```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() 
{
  string inputString;
  getline(cin, inputString);

  cout << "Hello, World." << endl;
  cout << inputString << endl;

  return 0;
}
```

입력과 출력 구문을 익히는 기본 문제였다. getline을 이용해 한 줄을 통째로 입력 받아서 출력하는게 핵심이다.
