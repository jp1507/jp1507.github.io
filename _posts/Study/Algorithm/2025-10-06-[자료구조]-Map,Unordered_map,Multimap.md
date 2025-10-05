---
title: "[자료구조] Map, Unordered_map, Multimap"
date: 2025-10-06 12:00:00 + 9000
categories: [Computer Science, Data Structure]
tags: [Computer Science, Data Structure, Unity, Unreal, map, unordered_map, multimap, 컴퓨터공학, 자료구조, 유니티, 맵, 해시맵]
series: "[자료구조]"
series_order : 7
pin: false
math: true
image:
  path: https://imgur.com/yTRCTI0.jpg
---

## Map, Unordered_map, Multimap의 특징

---

- Map, Unordered_map 둘 다 key, value의 쌍으로 되어 있고 중복을 허용하지 않는 연관 컨테이너지만, 내부 자료구조가 다르게 동작한다.
  - Map의 경우 [레드 블랙 트리](https://ko.wikipedia.org/wiki/%EB%A0%88%EB%93%9C-%EB%B8%94%EB%9E%99_%ED%8A%B8%EB%A6%AC)로 되어있는 자료구조로, 내부 원소들이 key에 따라 정렬됨
  - Unordered_map의 경우 Hash table이 기반으로 되어 정렬이 없음
- Multimap은 key의 중복을 허용한다.

## 레드 블랙 트리

---

- 자가균형이진탐색 트리로, 대표적으로 연관 배열 등을 구현하는데 쓰임
- 트리에 N개의 원소가 있을때 O($log{N}$)의 시간복잡도로 삽입, 제거, 검색할 수 있음
- 이진 탐색 트리 중 값이 한쪽으로 치우치게 되었을 때 균형을 바로 잡기 위해 사용

## 장단점

---

- Map
  - 장점 : 벡터나 리스트보다 **탐색 속도가 빠름**
  - 단점 : key를 새로 추가할 때마다 정렬된 위치를 찾아서 추가해야 하므로 대용량의 map을 작성하는데에 시간이 소요됨
- Unordered_map
  - 장점 : hash로 인해 key를 통한 value로 접근이 빠르고 **적은 양의 자료에 유리**
  - 단점 : hash 충돌로 인하여 성능이 저하될 수 있고 버킷으로 메모리 사용량 증가

- 시간 복잡도
  - 자료구조의 차이로 인해 map은 일반적으로 O($log{N}$) 시간 복잡도, unordered_map은 O($1$) 시간 복잡도를 가지고 최악의 경우 O($N$) 시간복잡도를 가진다.

    | 작업  | map,multimap | unordered_map |
    | :---: | ------------ | ------------- |
    | 검색  | O($log{N}$)  | O($1$)        |
    | 삽입  | O($log{N}$)  | O($1$)        |
    | 제거  | O($log{N}$)  | O($1$)        |

## Map, Unordered_map, Multimap의 선언

---

- `#include <map>`
- `#include <unordered_map>`
- `#include <multimap>`
<br>
- `map<Type1, Type2> Var;` : Type1의 key와 Type2의 value를 담는 map 생성
- `unordered_map<Type1, Type2> Var;` : Type1의 key와 Type2의 value를 담는 unordered_map 생성;
- `multimap<Type> Var;` : Type1의 key와 Type2의 value를 담는 multimap생성

## Map, Unordered_Map, Multimap의 Iterator

---

- `begin()` : 시작점의 주소 값을 반환
- `end()` : 마지막 지점의 주소 값을 반환
- `find(key)` : key 값을 찾아서 해당 주소 값을 반환하고 찾지 못했을 때 `end()`를 반환
- `iterator.first` : key 값을 반환
- `iterator.second` : value 값을 반환

## Map, Unordered_Map의 원소 접근

---

- `m[key]`(operator []) : key 값에 해당하는 value를 반환. key가 없다면 value의 기본값 반환
    → multimap의 경우 operator []를 사용해 원소를 추가, 제거가 **불가능**

## 기본 멤버 함수

---

- `insert({key, value})` : key와 value의 pair 객체를 원소로 추가(중복 체크 시 무시)
- `erase(Pos)`, `erase(key)`, `erase(start, end)` : 해당 위치, key값, 또는 범위에 해당하는 원소 제거
- `clear()` : 모든 원소 제거
- `size()` : key의 개수를 반환
- `lower_bound(key)` : key 값에 해당하는 첫 번째 원소의 주소 값을 반환
- `upper_bound(key)` : key 값에 해당하는 마지막 원소의 다음 주소 값을 반환
- `equal_range(key)` : key 값에 해당하는 원소의 범위의 pair 객체를 반환(lower_bound, upper_bound)

```cpp
#include <map>
using namespace std;

map<string, int> map;
map.insert({"Jisu", 1995});
map["Dog"] = 2000;
map["Pig"];       // value = 0;
map["Cat"]++; // value = 1;

// 인덱스 기반
for(auto iter = map.begin(); iter != map.end(); iter++)
  cout << iter->first << " " << iter->second << '\n';
// 범위 기반
for(auto itr : map)
      cout << p->first << " " << p->second << '\n';
      
if(map.find("Pig") != map.end())
	cout << map["Pig"] << endl;
	
map.erase("Dog");
map.erase(iter);
map.erase(map.begin() + 1);
map.erase(map.begin(), map.end();
map.clear();

cout << map.size() << endl;
```
