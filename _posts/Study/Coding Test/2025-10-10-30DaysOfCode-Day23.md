---
title: "Day 23: BST Level-Order Traversal"
date: 2025-10-08 03:17:00 +0900
categories: [Study, Coding Test]
tags: [algorithm, coding test, cpp, 알고리즘, 코딩테스트, C++]
series: "HackerRank 30 Days of Code"
series_order : 24
math: true
image:
  path: https://imgur.com/TUQZuyk.jpg
---

## Problem

---

**Objective**  
Today, we're going further with Binary Search Trees. Check out the [**Tutorial**](https://www.hackerrank.com/challenges/30-binary-trees/tutorial) tab for learning materials and an instructional video!

**Task**  
A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, $root$, pointing to the root of a binary search tree. Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.  

**Hint**: You'll find a queue helpful in completing this challenge.

**Function Description**  
Complete the levelOrder function in the editor below.  

levelOrder has the following parameter:

- Node pointer root: a reference to the root of the tree

**Prints**

- Print node.data items as space-separated line of integers. No return value is expected.

**Input Format**  
The locked stub code in your editor reads the following inputs and assembles them into a BST:
The first line contains an integer, $T$ (the number of test cases).
The $T$ subsequent lines each contain an integer, $data$, denoting the value of an element that must be added to the BST.

**Constraints**  

- $1 \le N \le 20$
- $1 \le node.data[i] \le 100$  

**Output Format**  
Print the $data$ value of each node in the tree's level-order traversal as a single line of $N$ space-separated integers.

**Sample Input**  
```text
6
3
5
4
7
2
1
```

**Sample Output**  
```text
3 2 5 1 4 7 
```

**Explanation**  
The input forms the following binary search tree:

![이미지](https://s3.amazonaws.com/hr-challenge-images/17176/1461696188-8eddd12300-BST.png)

We traverse each level of the tree from the root downward, and we process the nodes at each level from left to right. The resulting level-order traversal is $3 \rarr 2 \rarr 5 \rarr 1 \rarr 4 \rarr 7$, and we print these data values as a single line of space-separated integers.

## Code

---

```cpp
#include <bits/stdc++.h>
using namespace std;

class BST
{
public:

  int depth;
  int data;
  
  BST* left = nullptr;
  BST* right = nullptr;
  
  BST(int _depth, int _data)  : depth(_depth), data(_data) {}
  
  void AddNode(int _data)
  {
    if(_data < data)
    {
        if(left == nullptr)
            left = new BST(depth + 1, _data);
        else
            left->AddNode(_data);
    }
    else
    {
        if(right == nullptr)
            right = new BST(depth + 1, _data);
        else
            right->AddNode(_data);
    }
  }
};

void LevelOrder(BST* root)
{
    queue<BST*> q;
    q.push(root);
    
    while(!q.empty())
    {
        BST* bst = q.front();
        q.pop();
        
        cout << bst->data << " ";
        
        if(bst->left != nullptr)
            q.push(bst->left);
        if(bst->right != nullptr)
            q.push(bst->right);
    }
    
    cout << endl;
}

int main() {
    int N;
    cin >> N;
    
    BST* root = nullptr;
    
    for(int i = 0; i < N; i++)
    {
        int tmp;
        cin >> tmp;
        
        if(root == nullptr)
            root = new BST(0, tmp);
        else
            root->AddNode(tmp);
    }
    
    LevelOrder(root);
    
    return 0;
}

```

제목처럼 이진 트리의 Level order traversal을 구현하는 문제이다. 이진트리 순회 방법은 전위, 중위, 후위 뿐만 아니라 트리의 레벨 순서대로 순회하는 Level order traversal이 있다. 기본 구조는 다음과 같다.

1. 루트 노드를 방문
2. 루트 노드의 Left child를 방문
3. 루트 노드의 Right child를 방문

먼저 이진트리를 구현한 뒤 `LevelOrder()` 함수에서 BFS(너비 우선 탐색)을 위한 `queue<BST*>`를 선언한다. 큐에 루트 노드의 주소값을 넣어준 뒤 큐가 비어있을 때까지 위 순서를 반복한다.
