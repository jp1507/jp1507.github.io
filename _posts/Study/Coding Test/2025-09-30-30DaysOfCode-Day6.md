---
title: "Day 6: Let's Review"
date: 2025-09-30
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 7
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today we will expand our knowledge of strings, combining it with what we have already learned about loops. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-review-loop/tutorial) tab for learning materials and an instructional video.

**Task**  
Given a string, $S$, of length $N$ that is indexed from $0$ to $N - 1$, print its even-indexed and odd-indexed characters as $2$ space-separated strings on a single line (see the Sample below for more detail).

**Note**: $0$ is considered to be an even index.

**Example**  
$s = adbecf$  
Print `abcdef`  

**Input Format**  
The first line contains an integer, $T$ (the number of test cases).
Each line $i$ of the $T$ subsequent lines contain a string, $S$.

**Constraints**  

- $1 \le T \le 10$
- $2 \le$ length of $S \le 10000$

**Output Format**  
For each String $S_j$ (where $0 \le j \le T - 1$), print $S_j$'s even-indexed characters, followed by a space, followed by $S_j$'s odd-indexed characters.

**Sample Input**  
```text
2
Hacker
Rank
```

**Sample Output**  
```text
Hce akr
Rn ak
```

**Explanation**  
Test Case 0: $S = $"Hacker"
$S[0] = $"H"  
$S[1] = $"a"  
$S[2] = $"c"  
$S[3] = $"k"  
$S[4] = $"e"  
$S[5] = $"r"  
The even indices are $0$, $2$, and $4$, and the odd indices are $1$, $3$, and $5$. We then print a single line of $2$ space-separated strings; the first string contains the ordered characters from $S$'s even indices (`Hce`), and the second string contains the ordered characters from $S$'s odd indices (akr).

Test Case 1: $S = $"Rank"
$S[0] = $"R"  
$S[1] = $"a"  
$S[2] = $"n"  
$S[3] = $"k"  
The even indices are $0$ and $2$, and the odd indices are $1$ and $3$. We then print a single line of $2$ space-separated strings; the first string contains the ordered characters from $S$'s even indices (`Rn`), and the second string contains the ordered characters from $S$'s odd indices (`ak`).

## Code

---

```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    
    cin >> n;
    for(int i = 0; i < n; i++)
    {
        string s;
        cin >> s;
        
        string s1, s2;
        for(int j = 0; j < s.length(); j++)
        {
            if(j & 1)
                s1.push_back(s[j]);
            else
                s2.push_back(s[j]);
        }
        
        cout << s2 << " " << s1 << endl;
    }
    
    return 0;
}

```

문자열 변수에서 홀, 짝수 번째 인덱스의 문자를 각각 추출한 뒤 출력하는 문제이다.
