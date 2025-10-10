---
title: "Day 15: Linked List"
date: 2025-10-05
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 16
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today we will work with a Linked List. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-linked-list/tutorial) tab for learning materials and an instructional video.  

A Node class is provided for you in the editor. A Node object has an integer data field, $data$, and a Node instance pointer, $next$, pointing to another node (i.e.: the next node in the list).

A Node insert function is also declared in your editor. It has two parameters: a pointer, $head$, pointing to the first node of a linked list, and an integer, $data$, that must be added to the end of the list as a new Node object.

**Task**  
Complete the insert function in your editor so that it creates a new Node (pass $data$ as the Node constructor argument) and inserts it at the tail of the linked list referenced by the $head$ parameter. Once the new node is added, return the reference to the $head$ node.

**Note**: The $head$ argument is null for an empty list.

**Input Format**  
The first line contains T, the number of elements to insert.  
Each of the next $T$ lines contains an integer to insert at the end of the list.

**Output Format**  
Return a reference to the $head$ node of the linked list.

**Sample Input**  
```text
STDIN   Function
-----   --------
4       T = 4
2       first data = 2
3
4
1       fourth data = 1
```

**Sample Output**  
```text
2 3 4 1
```

**Explanation**  
$T = 4$, so your method will insert $4$ nodes into an initially empty list.  
First the code returns a new node that contains the data value $2$ as the $head$ of the list. Then create and insert nodes $3$, $4$, and $1$ at the tail of the list.
![이미지1](https://s3.amazonaws.com/hr-challenge-images/17168/1456961238-28488bfa0d-LinkedListExplanation.png)

## Code

---

```cpp
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Node
{
public:
    int data;
    Node* next;
    
    Node(int _data) : data(_data) {}
    
    void Add(int _data)
    {
        if(next == nullptr)
            next = new Node(_data);
        else
            next->Add(_data);
    }
};

int main() 
{
    int N;
    cin >> N;
    
    Node* head = nullptr;
    for(int i = 0; i < N; i++)
    {
        int tmp;
        cin >> tmp;
        
        if(head == nullptr)
            head = new Node(tmp);
        else
            head->Add(tmp);
    }
    
    Node* n = head;
    while(n != nullptr)
    {
        cout << n->data << " ";
        n = n->next;
    }
    cout << endl;
    
    return 0;
}

```

간단하게 연결 리스트를 구현하고 데이터를 추가한 뒤 출력하는 문제이다.
