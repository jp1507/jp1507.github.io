---
title: "[자료구조] Priority_queue"
categories: [Computer Science, Data Structure]
tags: [Computer Science, Data Structure, Unity, Unreal, Priority_queue, 컴퓨터공학, 자료구조, 유니티, 언리얼, 우선순위 큐]
series: "자료구조"
series_order : 9
pin: false
math: true
image:
  path: https://imgur.com/yTRCTI0.jpg
---

## Priority_queue의 특징

---

- 모든 원소 중 가장 큰 값이 Top을 유지하도록, 우선순위가 가장 크도록 설계되었다.
- 내부적으로 Heap이라는 자료구조를 사용하고 있다.

    |      작업      | 시간복잡도  |
    | :------------: | ----------- |
    | 루트 노드 조회 | O($1$)      |
    |   삽입(push)   | O($log{N}$) |
    |   삭제(pop)    | O($log{N}$) |

## Priority_queue의 선언

---

- `#include <queue>`
<br>
- `priority_queue<Type> Var;` : 선언한 자료형 변수들을 내림차순에 따라 정렬
- `priority_queue<Type, Container, Compare Func> Var;` : 선언한 자료형 변수들을 비교함수에 따라 정렬

## 기본 멤버 함수

---

- `top()` : 우선순위가 높은 원소를 반환
- `push()` : 원소를 추가
- `pop()` : top의 원소를 제거
- `empty()` : 비어있으면 `true`, 아니면 `false`를 반환
- `size()` : 원소의 수를 반환

```cpp
#include<iostream>
#include<queue>
#include<functional>
using namespace std;

int main()
{
    priority_queue<int> pq;
    // = priority_queue<int, vector<int>, less<int>> pq;
    // 가장 작은 값을 우선순위로 하고싶으면 greater<int>를 사용
    // priority_queue<int, vector<int>, greater<int>> pq;

    pq.push(4);
    pq.push(7);
    pq.push(3);
    pq.push(1);
    pq.push(10);

    cout << "priority_queue.size() : " << pq.size() << endl;
    // priority_queue.size() : 5

    while(!pq.empty())
    {
        cout << pq.top() << " ";
        pq.pop();
    }
    // 10 7 4 3 1
}
```

```cpp
#include <iostream>
#include <queue>
#include <cmath>
using namespace std;

stuct cmp
{
    bool operator()(int a, int b)
    {
        if(abs(a) == abs(b))
            return a > b;
        else
            return abs(a) > abs(b);
    }
}

int main()
{
    priority_queue<int, vector<int>, cmp> pa;
    pq.push(1);
    pq.push(-1);
    pq.push(7);
    pq.push(-4);
    pq.push(15);

    while(!pq.empty())
    {
        cout << pq.top() << ", ";
        pq.pop();
    }
    // -1, 1, -4, 7, 15
}
```
