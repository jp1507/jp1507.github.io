---
title: "Day 12: Inheritance"
date: 2025-10-03 16:56:00 +0900
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 13
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're delving into Inheritance. Check out the attached tutorial for learning materials and an instructional video.

**Task**  
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.  

Complete the Student class by writing the following:  

- A Student class constructor, which has  parameters:  
  1. A string, $firstName$.
  2. A string, $lastName$.
  3. An integer, $idNumber$.
  4. An integer array (or vector) of test scores, $scores$.
- A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:  

![이미지1](https://s3.amazonaws.com/hr-challenge-images/17165/1458142706-3073bc9143-Grading.png)

**Input Format**  
The locked stub code in the editor reads the input and calls the Student class constructor with the necessary arguments. It also calls the calculate method which takes no arguments.

The first line contains $firstName$, $lastName$, and $idNumber$, separated by a space. The second line contains the number of test scores. The third line of space-separated integers describes $scores$.

**Constraints**  

- $1 \le \text{length of firstName, length of lastName} \le 10$
- $\text{length of idNumber} = 7$
- $0 \le score \le 100$  

**Output Format**  
Output is handled by the locked stub code. Your output will be correct if your Student class constructor and `calculate()` method are properly implemented.

**Sample Input**  
```text
Heraldo Memelli 8135627
2
100 80
```

**Sample Output**  
```text
 Name: Memelli, Heraldo
 ID: 8135627
 Grade: O
```

**Explanation**  
This student had $2$ scores to average: $100$ and $80$. The student's average grade is $\frac{100+80}{2} = 90$. An average grade of $90$ corresponds to the letter grade $O$, so the calculate() method should return the character'O'.

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

class Person { };

class Student : Person
{
  string firstName;
  string lastName;
  int idNumber;
  vector<int> scores;
  
  public:
    Student(string _firstName, string _lastName, int _idNumber,  vector<int> _scores)
    {
        firstName = _firstName;
        lastName = _lastName;
        idNumber = _idNumber;
        scores = _scores;
    }
  
  char calculate()
  { 
    long long sum =  accumulate(scores.begin(), scores.end(), 0LL);
    long long avg = sum / scores.size();
    
    if(avg >= 90)
        return 'O';
    else if(avg >= 80)
        return 'E';
    else if(avg >= 70)
        return 'A';
    else if(avg >= 55)
        return 'P';
    else if(avg >= 40)
        return 'D';
    else
        return 'T';
  }
};

int main() {
    string input;
    getline(cin, input);
    
    istringstream iss(input);
    string first, last;
    int id;
    iss >> last >> first >> id;
    
    int count;
    cin >> count;
    
    int score;
    vector<int> scores;
    for(int i = 0; i < count; i++)
    {
        cin >> score;
        scores.push_back(score);
    }
    
    Student st(first, last, id, scores);
    
    cout << "Name: " << first << ", " << last << endl;
    cout << "ID: " << id << endl;
    cout << "Grade: " << st.calculate() << endl;
    
    return 0;
}

```

`Person` 클래스를 상속받은 `Student` 클래스에서 조건문을 통해 등급을 계산하고 출력하는 문제이다.
