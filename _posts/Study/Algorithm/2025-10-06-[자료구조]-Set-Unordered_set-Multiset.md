---
title: "[자료구조] Set, Unordered_set, Multiset"
date: 2025-10-06 13:00:00 + 9000
categories: [Computer Science, Data Structure]
tags: [Computer Science, Data Structure, Unity, Unreal, set, unordered_set, multiset, 컴퓨터공학, 자료구조, 유니티, 셋, 해시맵]
series: "[자료구조]"
series_order : 6
pin: false
math: true
image:
  path: https://imgur.com/yTRCTI0.jpg
---

## Set, Unordered_Set, MultiSet의 특징

---

- Set, Unordered_Set 둘 다 key, value의 쌍으로 되어 있고 중복을 허용하지 않는 연관 컨테이너지만, 내부 자료구조가 다르게 동작한다.
  - Set의 경우 [레드 블랙 트리](https://ko.wikipedia.org/wiki/%EB%A0%88%EB%93%9C-%EB%B8%94%EB%9E%99_%ED%8A%B8%EB%A6%AC)로 되어있는 자료구조로, 내부 원소들이 key에 따라 정렬됨(기본 값은 오름차순)
  - Unordered_Set의 경우 Hash table이 기반으로 되어 정렬이 없음
- MultiSet은 key의 중복을 허용한다.
- map과는 다르게 bool 타입의 value를 가진다.
  
- 시간 복잡도
  - 자료구조의 차이로 인해 set은 일반적으로 O($log{N}$) 시간 복잡도, unordered_set은 O($1$) 시간 복잡도를 가지고 최악의 경우 O($N$) 시간복잡도를 가진다.

    | 작업  | set,multiset | unordered_set |
    | :---: | ------------ | ------------- |
    | 검색  | O($log{N}$)  | O($1$)        |
    | 삽입  | O($log{N}$)  | O($1$)        |
    | 제거  | O($log{N}$)  | O($1$)        |

## Set, Unordered_set, Multiset의 선언

---

- `#include <set>`
- `#include <unordered_set>`
- `#include <multiset>`
<br>
- `set<Type> Var;` : 선언된 자료형을 담는 set 생성
- `set<Type, Compare Func> Var;` : 선언된 자료형을 비교 함수에 따라 정렬하여 담는 set 생성
- `set<Type> Var(set.start, set.end);` : 다른 set의 범위를 복사해서 생성
- `unordered_set<Type> Var;` : 선언된 자료형을 담는 unordered_set생성
- `multiset<Type> Var;` : 선언된 자료형을 담는 multiset생성

## Set, Unordered_set, Multiset의 Iterator

---

- `begin()` : 시작점의 주소 값을 반환
- `end()` : 마지막 지점의 주소 값을 반환
- `find(key)` : key 값을 찾아서 해당 주소 값을 반환하고 찾지 못했을 때 `end()`를 반환
- `iterator.first` : key 값을 반환
- `iterator.second` : value 값을 반환

## Set, Unordered_set, Multiset의 원소 접근

---

- `s[key]`(operator []) : key 값에 해당하는 value를 반환. key가 없다면 value의 기본값 반환
    → multiset의 경우 operator []를 사용해 원소를 추가, 제거가 **불가능**

## 기본 멤버 함수

---

- `insert(key)` : key값에 대한 원소를 삽입. 반환 값으로 pair(삽입한 원소의 iterator와 성공 여부)
- `emplace()` : `move()`사용해 원소를 삽입
- `erase(Pos)`, `erase(key)` : 해당 위치 또는 key 값을 가진 원소를 제거
    → multiset인 경우 key로 제거 시 해당 key를 가진 모든 원소 제거, iterator로 제거 시 하나만 제거
- `find(key)` : key의 주소를 반환. 해당 key가 없으면 `end()`를 반환
- `clear()` : set의 원소를 모두 삭제
- `lower_bound(key)` : key 값에 해당하는 첫 번째 원소의 주소 값을 반환
- `upper_bound(key)` : key 값에 해당하는 마지막 원소의 다음 주소 값을 반환
- `equal_range(key)` : key 값에 해당하는 원소의 범위의 pair 객체를 반환(lower_bound, upper_bound)
- `empty()` : set이 비어있다면 `true`, 아니면 `false`를 반환
- `size()` : set의 크기

```cpp
#include <iostream>
#include <set>
#include <iterator>

using namespace std;

int main(void) {
    set <int, greater<int>> s;
    set <int> s2;

    int list[] = { 10, 30, 50, 80, 40, 20 };
    s2.insert(list, list+6);

    s.insert(2);
    s.insert(1);
    s.insert(5);
    s.insert(9);
    s.insert(3);
    s.insert(4);
    auto ret = s.insert(8);
    s.insert(5);

    cout << "ret.first(return element) : " << *ret.first << endl;
    cout << "ret.second(return true/false) : " << ret.second << endl;

    cout << "show all elements in s" << endl;
    for (auto i = s.begin(); i != s.end(); i++) {
        cout << *i << " ";
    }
    cout << endl;

    cout << "show all elements in s2" << endl;
    for (auto i = s2.begin(); i != s2.end(); i++) {
        cout << *i << " ";
    }
    cout << endl;

    cout << "\nrun s.erase(9)" << endl;
    int ret2 = s.erase(9);
    cout << ret2 << "개의 원소 erased!" << endl;

    for (auto i = s.begin(); i != s.end(); i++) {
        cout << *i << " ";
    }
    cout << endl << endl;

    cout << "lower_bound(5) : " << *s.lower_bound(5) << endl;
    cout << "upper_bound(5) : " << *s.upper_bound(5) << endl;
    for (auto i = s.lower_bound(8); i != s.upper_bound(3); i++) {
        cout << *i << " ";
    }
    cout << endl << endl;

    cout << "run s.find()" << endl;
    for (auto i = s.find(8); i != s.find(3); i++) {
        cout << *i << " ";
    }
    cout << endl << endl;

    cout << "run s.clear() if s is not empty" << endl;
    if (!s.empty()) {
        s.clear();
    }

    for (auto i = s.find(8); i != s.find(3); i++) {
        cout << *i << " ";
    }
    cout << endl;
}
```
