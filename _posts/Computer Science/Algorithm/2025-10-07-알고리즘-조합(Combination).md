---
title: "[알고리즘] 조합(Combination)"
date: 2025-10-07
categories: [Computer Science, Algorithm]
tags: [Game Engineering, algorithm, coding test, cpp, combination, 게임공학, 알고리즘, 코딩테스트, C++, 조합]
series: "알고리즘"
series_order : 3
pin: false
math: true
image:
  path: https://imgur.com/QCj6GGe.jpg
---

## 조합

---

조합이란 어떤 집합의 원소들을 중복 없이, 순서를 고려하지 않고 선택하는 것이다. 어떤 순서로 원소를 선택했는지는 중요하지 않기에 순열과 다르다.

- 순서를 따지지 않는다.
  - `abc`와 `acb`는 같음
- 중복을 허용하지 않는다.
- $_nC_r$
  - $_5C_3 = _5P_3 / 3! = (5 \times 4 \times 3) / (3 \times 2 \times 1)$

## 코드 구현

---

`next_permutation()`과 `bool` 타입 배열을 이용해 구현할 수 있다. `bool` 타입 배열의 초기 상태가 오름차순 정렬이 되어 있어야하고, 이 배열을 바탕으로 `true`가 되는 것에 대응시켜 조합을 구한다.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
 
int main() 
{
    const int r = 2;
    
    vector<int> v{1, 2, 3, 4};
    vector<bool> temp(arr.size(), true);

    for(int i = 0; i < v.size() - r; i ++)     
        temp[i] = false;
 
    do 
    {
        for (int i = 0; i < v.size(); ++i) 
        {
            if(temp[i]) 
                cout << v[i] << " ";
        }
        cout << endl;
    } while (next_permutation(temp.begin(), temp.end()));
}
```
