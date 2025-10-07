---
title: "[자료구조] Binary Tree"
date: 2025-10-07 01:25:00 + 0900
categories: [Computer Science, Data Structure]
tags: [Computer Science, Data Structure, Unity, Unreal, binary tree, 컴퓨터공학, 자료구조, 유니티, 언리얼, 이진트리]
series: "자료구조"
series_order : 9
pin: false
math: true
image:
  path: https://imgur.com/yTRCTI0.jpg
---

## Binary Tree의 특징

---

- 트리 구조는 나무의 가지처럼 연결된 비선형 계층 구조로, 그 중 이진 트리는 부모 노드의 자식 노드가 2개 이하인 구조를 의미한다.
  - degree : 각 노드가 가진 자식 노드의 개수
  - root node : 최상단 부모 노드
  - leaf node : 자식이 없는 노드
  - internal node : leaf가 아닌 노드
  - edge : 노드를 연결하는 간선
  - depth : root로부터 어떤 노드까지 거쳐야하는 edge 수
  - level : 같은 depth를 가진 노드의 집합(level ≥ 1)
  - height : 가장 큰 depth(최하단 level)
- height에 따른 최소, 최대 노드 개수
  - 최대 = $2^{h + 1} - 1$
  - 최소 = $h + 1$

## Binary Tree의 종류

---

- 정 이진 트리 : 모든 자식 노드가 무조건 2개 또는 0개
- 포화 이진 트리 : 모든 자식 노드가 자식 노드를 2개 가지고 있고 최하단 leaf 노드의 자식 노드가 0개
- 완전 이진 트리 : 모든 깊이에서 모든 노드가 차있어야하고, 최하단에서는 모두 차있거나 하나도 없음

## Binary Tree 순회

---

![이미지](https://imgur.com/F2QjSlr.png)

- 전위 순회(Preorder)
    부모 노드, 왼쪽 노드, 오른쪽 노드 순으로 순회함
    A → B → D→ H → I → E → J → K → C → F → G
- 후위 순회(Postorder)
    왼쪽 노드, 오른쪽 노드, 부모 노드 순으로 순회함
    H → I → D → J → K → E → B → F → G → C → A
- 중위 순회(Inorder)
    왼쪽 노드, 부모 노드, 오른쪽 노드 순으로 순회함
    H → D → I → B → J → E → K → A → F → C → G

## Binary Tree 구현

---

```cpp
// 프로그래머스 길 찾기 게임 문제
#include <bits/stdc++.h>
using namespace std;

// 기본적인 노드 구조
class Node
{
    public:
        int num;
        int x;
        int y;
        Node* left;
        Node* right;
        Node(int _x = 0, int _y = 0, int _num = 0) : x(_x), y(_y), num(_num) {};
};

vector<vector<int>> solution(vector<vector<int>> nodeinfo) {
    vector<vector<int>> answer(2);
    
    // 주어진 nodeinfo로 이진트리를 구현
    // 전위 순회, 후위 순회 결과를 정답으로 반환
    
    // 노드 번호 추가
    for(int i = 0; i < nodeinfo.size(); i++)
        nodeinfo[i].push_back(i + 1);
    
    // 깊이(y 값) 내림차순, 좌우(x값) 오름차순
    sort(nodeinfo.begin(), nodeinfo.end(), [](vector<int> lhs, vector<int> rhs)
         {
             if(lhs[1] == rhs[1])
                 return lhs[0] < rhs[0];
             else
                 return lhs[1] > rhs[1];
         });
    
    // 이진 트리 설정
    function<Node*(vector<vector<int>>)> MakeTree = [&](vector<vector<int>> nodeInfo) → Node* 
    {
        if(nodeInfo.empty())
            return nullptr;
        
        Node* root = new Node(nodeInfo[0][0], nodeInfo[0][1], nodeInfo[0][2]);
        
        vector<vector<int>> leftNodes, rightNodes;
        for(int i = 1; i < nodeInfo.size(); i++)
        {
            if(nodeInfo[i][0] < root→x)
                leftNodes.push_back(nodeInfo[i]);
            else
                rightNodes.push_back(nodeInfo[i]);
        }
        
        root→left = MakeTree(leftNodes);
        root→right = MakeTree(rightNodes);
        
        return root;
    };
    Node* Root = MakeTree(nodeinfo);
    
    // 전위 순회, 후위 순회를 한번에
    function<void(Node*)> PreAndPostorder = [&](Node* node)
    {
        answer[0].push_back(node→num);
        
        if(node→left != nullptr)
            PreAndPostorder(node→left);
        if(node→right != nullptr)
            PreAndPostorder(node→right);
        
        answer[1].push_back(node→num);
    };
    PreAndPostorder(Root);
    
    return answer;
}
```
