---
title: "Day 13: Abstract Classes"
date: 2025-10-04
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 14
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we will extend what we learned yesterday about [**Inheritance**](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html) to [**Abstract Classes**](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html). Because this is a very specific object oriented concept, submissions are limited to the few languages that use this construct. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-abstract-classes/tutorial) tab for learning materials and an instructional video.

**Task**  
Given a Book class and a Solution class, write a MyBook class that does the following:

- Inherits from Book
- Has a parameterized constructor taking these  parameters:
  1. string $title$
  2. string $author$
  3. int $price$
- Implements the Book class' abstract display() method so it prints these  lines:
  1. `Title`, a space, and then the current instance's $title$.
  2. `Author`, a space, and then the current instance's $author$.
  3. `Price`, a space, and then the current instance's $price$.

**Note**: Because these classes are being written in the same file, you must not use an access modifier (e.g.: ) when declaring MyBook or your code will not execute.

**Input Format**  
You are not responsible for reading any input from stdin. The Solution class creates a Book object and calls the MyBook class constructor (passing it the necessary arguments). It then calls the display method on the Book object.

**Output Format**  
The `void display()` method should print and label the respective $title$, $author$, and $price$ of the MyBook object's instance (with each value on its own line) like so:
```text
Title: $title
Author: $author
Price: $price
```
**Note**: The  is prepended to variable names to indicate they are placeholders for variables.

**Sample Input**  
The following input from stdin is handled by the locked stub code in your editor:
```text
The Alchemist
Paulo Coelho
248
```

**Sample Output**  
The following output is printed by your display() method:
```text
Title: The Alchemist
Author: Paulo Coelho
Price: 248
```

## Code

---

```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Book { };

class MyBook : public Book
{
  string title;
  string author;
  int price;
  
  public:
    MyBook(string _title, string _author, int _price)  
    {
        title = _title;
        author = _author;
        price = _price;
    }
    
    void Display()
    {
        cout << "Title: " << title << endl;
        cout << "Author: " << author << endl;
        cout << "Price: " << price << endl;
    }
};

int main() 
{
    string str1, str2;
    int num;
    
    getline(cin, str1);
    getline(cin, str2);
    cin >> num;
    
    MyBook mb(str1, str2, num);
    
    mb.Display();
    
    return 0;
}

```

추상 클래스를 만들어서 상속받은 뒤 순수가상함수를 구현하는 문제이다. `virtual` 키워드와 `= 0;`로 수식되어있는 함수를 순수가상함수라고 하고 이 순수가상함수가 포함된 클래스를 추상 클래스라고 한다. 추상 클래스는 직접 인스턴스화할 수 없으며, 상속받은 클래스에서 반드시 하나 이상의 순수가상함수를 구현해야한다. 이는 공통 인터페이스를 제공하면서 다양성을 만족한다.
