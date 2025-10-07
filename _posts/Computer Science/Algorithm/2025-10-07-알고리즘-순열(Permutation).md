---
title: "[알고리즘] 순열(Permutation)"
date: 2025-10-07
categories: [Computer Science, Algorithm]
tags: [Game Engineering, algorithm, coding test, cpp, permutation, 게임공학, 알고리즘, 코딩테스트, C++, 순열]
series: "알고리즘"
series_order : 2
pin: false
math: true
image:
  path: https://imgur.com/QCj6GGe.jpg
---

## 순열

---

순열이란 어떤 집합의 원소들을 각각 특정한 순서로 배열하는 것이다. 선택 순서가 결과에 영향을 미치는 경우이다.

- 순서를 따진다.
  - `abc`와 `acb`는 서로 다름
- 중복을 허용하지 않는다.
- $_nP_r$
  - $_5P_3 = 5 \times 4 \times 3$
  - $_4P_1 = 4$
  - $_4P_4 = 4! = \times 4 \times 3 \times 2 \times 1$

## 코드 구현

---

### 기본 예시

- `bool next_permutation(start, end)`
  - `#include <algorithm>`
  - 매개변수로 받는 컨테이너의 시작 위치와 끝 위치에 해당하는 범위를 기준으로 다음 순열로 정렬한 후 `true`를 반환한다.
  - 다음 순열이 없다면 `false`를 반환한다.
  - $_nP_n$과 같은 연산이다.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  vector<int> v = {1, 2, 3};

  do
  {
    for(int num : v)
      cout << num << " ";

    cout << '\n';

  }while(next_permutation(v.begin(),v.end()));
}
```

`do~while`문을 이용해 해당 범위의 원소를 이용한 모든 순열을 구할 수 있다.

### 활용 예시

#### $n$개 중에서 $r$개의 순열 구하기

$_nP_n$을 구하는 `next_permutation()`으로 $_nP_r$을 구하는 방법은 다음과 같다. 중요한 점은 $r$개의 원소를 선택하고 나머지 $(n - r)$개 원소를 `reverse()`를 이용해 순서를 뒤집어준다. 그 이유는 뒤쪽 원소들부터 정렬되어 다음 순열이 생성되기 때문에 뒤집지 않는다면 다음 순열에서 $r$개를 뽑아도 중복이 될 수 있기 때문이다.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  vector<int> v = {1, 2, 3, 4, 5};

    int n = v.size();
    int r = 2  

  do
  {
    for(int i = 0; i < r; i++)
      cout << v[i] << " ";
    
    cout << '\n';

    reverse(v.begin() + r, v.end());

  }while(next_permutation(v.begin(), v.end()));
}
```

#### 오름차순 정렬

`next_permutation()`으로 모든 순열을 구할 수는 있지만 비교 연산자를 이용해 순열을 정렬하기 때문에 반드시 **오름차순 정렬**이 되어있어야한다. 정렬되어있지 않으면 누락되는 순열이 생긴다.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  vector<int> v = {3, 1, 2};

  sort(v.begin(), v.end());

  do
  {
    for(int i = 0; i < v.size(); i++)
      cout << v[i] << " ";
    cout << '\n';

  }while(next_permutation(v.begin(),v.end()));
}
```

#### 중복 제외

`next_permutation()`은 중복을 제외하고 정렬된다. 예를 들어 `{0, 0, 1}`의 순열을 구할 때, 경우의 수가 6이지만 중복이 존재하므로 3개의 순열만 생성된다.

#### prev_permutation

`next_permutation`과 비슷하지만 **다음이 아닌 이전** 순열로 정렬한 후 `true`를 반환하고 이전 순열이 없으면 `false`를 반환한다. 마찬가지로 내림차순 정렬로 순열을 생성하고, 중복을 제외하고 정렬된다. 사용하기 전 반드시 내림차순 정렬을 해야한다.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  vector<int> v = {1, 2, 3};

  do
  {
    for(int i = 0; i < v.size(); i++)
      cout << v[i] << " ";
    
    cout << '\n';

  }while(prev_permutation(v.begin(),v.end()));
}
```
