---
title: "Day 21: Generics"
date: 2025-10-08
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 22
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today we're discussing Generics; be aware that not all languages support this construct, so fewer languages are enabled for this challenge. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-generics/tutorial) tab for learning materials and an instructional video!

**Task**  
Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). The locked Solution class in your editor tests your function.  

**Note**: You must use generics to solve this challenge. Do not write overloaded functions.

**Input Format**  
The locked Solution class in your editor will pass different types of arrays to your printArray function.

**Constraints**  

- You must have exactly 1 function named printArray.

**Output Format**  
Your printArray function should print each element of its generic array parameter on a new line.

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

template<typename T> 
void printArray(vector<T> array) 
{
     for(T i : array)
        cout << i << endl;
}

int main() 
{
    int n;
    
    cin >> n;
    vector<int> int_vector(n);
    for (int i = 0; i < n; i++) 
    {
        int value;
        cin >> value;
        int_vector[i] = value;
    }
    
    cin >> n;
    vector<string> string_vector(n);
    for (int i = 0; i < n; i++) 
    {
        string value;
        cin >> value;
        string_vector[i] = value;
    }

    printArray<int>(int_vector);
    printArray<string>(string_vector);

    return 0;
}
```

제네릭(C++에서는 템플릿)에 관한 문제이다. 당황스럽게 입출력 예제가 없어서 직접 확인해서 구현했다. 사용 언어에 맞게 템플릿이나 제네릭으로 `void printArray()` 함수를 구현해서 `int`와 `string` 타입의 컨테이너를 출력하면 된다.
