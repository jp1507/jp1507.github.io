---
title: "Day 28: RegEx, Patterns, and Intro to Databases"
date: 2025-10-14
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 29
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're working with regular expressions. Check out the [Tutorial](https://www.hackerrank.com/challenges/30-regex-patterns/tutorial) tab for learning materials and an instructional video!

**Task**  
Consider a database table, Emails, which has the attributes First Name and Email ID. Given $N$ rows of data simulating the Emails table, print an alphabetically-ordered list of people whose email address ends in $@gmail.com$.

**Input Format**  
The first line contains an integer, $N$, total number of rows in the table.
Each of the $N$ subsequent lines contains $2$ space-separated strings denoting a person's first name and email ID, respectively.

**Constraints**  

- $2 \le N \le 30$
- Each of the first names consists of lower case letters $[a - z]$ only.
- Each of the email IDs consists of lower case letters $[a - z]$, $@$ and $.$ only.
- The length of the first name is no longer than 20.
- The length of the email ID is no longer than 50.

**Output Format**  
Print an alphabetically-ordered list of first names for every user with a gmail account. Each name must be printed on a new line.

**Sample Input**  
```text
6
riya riya@gmail.com
julia julia@julia.me
julia sjulia@gmail.com
julia julia@gmail.com
samantha samantha@gmail.com
tanya tanya@gmail.com
```

**Sample Output**  
```text
julia
julia
riya
samantha
tanya
```

## Code

---

```cpp
...

int main()
{
    int N;
    cin >> N;
    
    regex e(".+@gmail\\.com$");
    
    multiset<string> db;
    
    for(int i = 0; i < N; i++)
    {
        string firstName;
        string emailID;
        cin >> firstName >> emailID;
        
        if(regex_match(emailID,e))
            db.insert(firstName);        
    }
    
    for(auto& it : db) 
        cout << it << endl; 
    
    return 0;
}

...
```

이메일이 $@gmail.com$으로 끝나는 사람의 이름과 이메일 ID를 관리하는 DB를 구현하는 문제이다. `regex` [정규 표현식](https://modoocode.com/303)을 이용하면 입력 받은 이메일이 조건을 만족하는지 쉽게 판별할 수 있다.
