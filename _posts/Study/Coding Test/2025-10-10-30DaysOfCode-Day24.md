---
title: "Day 24: More Linked Lists"
date: 2025-10-10
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 25
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-linked-list-deletion/tutorial) tab for learning materials and an instructional video!

**Task**  
A Node class is provided for you in the editor. A Node object has an integer data field, $data$, and a Node instance pointer, $next$, pointing to another node (i.e.: the next node in a list).

A removeDuplicates function is declared in your editor, which takes a pointer to the $head$ node of a linked list as a parameter. Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.

**Note**: The $head$ pointer may be null, indicating that the list is empty. Be sure to reset your $next$ pointer when performing deletions to avoid breaking the list.

**Input Format**  
You do not need to read any input from stdin. The following input is handled by the locked stub code and passed to the removeDuplicates function:
The first line contains an integer, $N$, the number of nodes to be inserted.
The $N$ subsequent lines each contain an integer describing the $data$ value of a node being inserted at the list's tail.

**Constraints**  

- The data elements of the linked list argument will always be in non-decreasing order.

**Output Format**  
Your removeDuplicates function should return the head of the updated linked list. The locked stub code in your editor will print the returned list to stdout.

**Sample Input**  
```text
6
1
2
2
3
3
4
```

**Sample Output**  
```text
1 2 3 4 
```

**Explanation**  
$N = 6$, and our non-decreasing list is $\lbrace 1, 2, 2, 3, 3, 4\rbrace$. The values $2$ and $3$ both occur twice in the list, so we remove the two duplicate nodes. We then return our updated (ascending) list, which is $\lbrace 1, 2, 3, 4\rbrace$.

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

class Node
{
public:

  int data;  
  Node* next = nullptr;
  
  Node(int _data)   : data(_data) {}
  
  void AddData(int _data)
  {
    if(next != nullptr)
        next->AddData(_data);
    else
        next = new Node(_data);
  }
};

Node* RemoveDuplicates(Node *head)
{
    Node* n = head;

    while( n != nullptr )
    {
        while( n->next != nullptr && n->data == n->next->data ) 
        {
            Node* deleteNode = n->next;
            n->next = n->next->next;
            delete deleteNode;
        }

        n = n->next;
    }
    return head;
}

void PrintNodes(Node* head)
{
    Node* n = head;
    
    while(n != nullptr)
    {
        cout << n->data << " ";
         n = n->next;
    }
    
    cout << endl;
}

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
            head->AddData(tmp);
    }
    
    head = RemoveDuplicates(head);
    
    PrintNodes(head);
    
    return 0;
}
```

연결 리스트를 구현한 뒤 탐색하면서 중복된 `data`를 가진 노드를 검출하고 삭제하는 알고리즘을 구현하는 문제이다. 노드를 삭제한 뒤 반드시 다음 노드를 이전 노드에 연결해주는 부분이 필요하다.
