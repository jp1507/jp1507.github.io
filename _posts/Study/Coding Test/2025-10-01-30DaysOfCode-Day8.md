---
title: "Day 8: Dictionaries and Maps"
date: 2025-10-01
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 9
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're learning about Key-Value pair mappings using a Map or Dictionary data structure. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-dictionaries-and-maps/tutorial) tab for learning materials and an instructional video!

**Task**  
Given $n$ names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each $name$ queried, print the associated entry from your phone book on a new line in the form `name=phoneNumber`; if an entry for $name$ is not found, print `Not found` instead.  

**Note**: Your phone book should be a Dictionary/Map/HashMap data structure.

**Input Format**  
The first line contains an integer, $n$, denoting the number of entries in the phone book.
Each of the $n$ subsequent lines describes an entry in the form of $2$ space-separated values on a single line. The first value is a friend's name, and the second value is an $8$-digit phone number.  

After the $n$ lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a $name$ to look up, and you must continue reading lines until there is no more input.  

**Note**: Names consist of lowercase English alphabetic letters and are first names only.

**Constraints**  

- $1 \le n \le 10^5$
- $1 \le queries \le 10^5$

**Output Format**  
On a new line for each query, print `Not found` if the name has no corresponding entry in the phone book; otherwise, print the full $name$ and $phoneNumber$ in the format `name=phoneNumber`.

**Sample Input**  
```text
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
```

**Sample Output**  
```text
sam=99912222
Not found
harry=12299933
```

**Explanation**  
We add the following $n = 3$ (Key,Value) pairs to our map so it looks like this:

$phoneBook = {(sam, 99912222), (tom, 11122222), (harry, 12299933)}$  
We then process each query and print `key=value` if the queried  is found in the map; otherwise, we print `Not found`.

Query 0: `sam`
Sam is one of the keys in our dictionary, so we print `sam=99912222`.

Query 1: `edward`
Edward is not one of the keys in our dictionary, so we print `Not found`.

Query 2: `harry`
Harry is one of the keys in our dictionary, so we print `harry=12299933`.

## Code

---

```cpp
#include <cmath>
#include <cstdio>
#include <iostream>
#include<map>
using namespace std;

int main() {
    
    int n;
    cin >> n;
    
    string name;
    long num;
    map <string, long> pBook;
    
    for (int i = 0; i < n; i++) 
    {
        cin >> name >> num;
        pBook[name] = num;
    }
    
    while(cin >> name) 
    {
        if (pBook.find(name) != pBook.end())
            cout << name << "=" << pBook.find(name)->second << endl;
        else
            cout << "Not found" << endl;
    }
    
    return 0;
}

```

Key-Value 쌍을 사용하는 `map` 자료구조를 사용해 데이터 탐색을 하는 문제이다. `while(cin >> name)`을 이용해 정해지지 않은 개수의 입력을 받아서 처리해야한다.
