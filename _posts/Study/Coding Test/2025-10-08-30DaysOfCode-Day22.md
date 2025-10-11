---
title: "Day 22: Binary Search Trees"
date: 2025-10-08
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 23
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're working with Binary Search Trees (BSTs). Check out the [Tutorial](https://www.hackerrank.com/challenges/30-binary-search-trees/tutorial) tab for learning materials and an instructional video!

**Task**  
The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, $root$, pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the height of the binary search tree.

**Input Format**  
The locked stub code in your editor reads the following inputs and assembles them into a binary search tree:
The first line contains an integer, $n$, denoting the number of nodes in the tree.
Each of the $n$ subsequent lines contains an integer, $data$, denoting the value of an element that must be added to the BST.

**Output Format**  
The locked stub code in your editor will print the integer returned by your getHeight function denoting the height of the BST.

**Sample Input**  
```text
7
3
5
2
1
4
6
7
```

**Sample Output**  
```text
3
```

**Explanation**  
The input forms the following BST:  
![이미지1](https://s3.amazonaws.com/hr-challenge-images/17175/1459894869-6bb53ce6eb-BST.png)
The longest root-to-leaf path is shown below:  
![이미지2](https://s3.amazonaws.com/hr-challenge-images/17175/1459895368-4955f9ce74-LongestRTL.png)
There are $4$ nodes in this path that are connected by $3$ edges, meaning our BST's $height = 3$. Thus, we print $3$ as our answer.

## Code

---

```cpp
#include<bits/stdc++.h>
using namespace std;

class BST
{
  int depth;
  int data;
  
  BST* left;
  BST* right; 
  
public:
  BST(int _depth, int _data) : depth(_depth), data(_data) {}
  
  void AddNode(int _data)
  {
    if(data <= _data)
    {
        if(right != nullptr)
            right->AddNode(_data);
        else
            right = new BST(depth + 1,  _data);
    }
    else 
    {
        if(left != nullptr)
            left->AddNode(_data);
        else
            left = new BST(depth + 1, _data);
    }
  }
  
  int GetHeight()
  {
    if(left == nullptr && right == nullptr)
        return depth;
    
    int d = 0;
    if(left != nullptr)
        d = left->GetHeight();
        
    if(right != nullptr)
        d = max(d, right->GetHeight());
        
    return d;
  }
};

int main() 
{
    int n;
    cin >> n;
    
    BST* bst = nullptr;
    for(int i = 0; i < n; i++)
    {    
        int tmp;
        cin >> tmp;
        
        if(bst == nullptr)
            bst = new BST(0, tmp);
        else
            bst->AddNode(tmp);
    }
    
    cout << bst->GetHeight() << endl;
    
    return 0;
}
```

이진 트리 탐색을 구현해서 Height를 출력하는 문제이다. Height는 루트 노드에서 최하단 노드 중 가장 edge를 많이 지나는 노드까지의 edge 개수이다.
