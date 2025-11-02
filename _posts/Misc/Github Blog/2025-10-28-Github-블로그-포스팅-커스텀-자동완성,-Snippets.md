---
title: "[Github 블로그] 포스팅 커스텀 자동완성 : Code Snippets"
date: 2025-11-02
categories: [Misc, Github Blog]
tags: [github, github blog, jekyll, blog, error, github 블로그, 깃허브, 블로그, markdown, Code Snippets, 자동완성, VS Code, VS]
image:
  path: https://imgur.com/l3ku5lP.jpg
---

> Chirpy 테마 버전 7.3.1 기준으로 작성
{: .prompt-info }

## 포스팅 커스텀 자동완성

---

블로그에 포스팅하면서 토글 리스트, 코드 블록 등 여러 Markdown 문법은 물론, 밑줄을 추가하는 `<u></u>`과 같은 HTML 문법도 사용하기 마련이다. 이렇게 입력하기 상당히 귀찮은 문법들 때문에 시간도 걸리고 마음 속에 귀찮음이 쌓이는데, 이러한 것들로 인해 블로그 운영에 있어 게을러지게 되는 원인이 될 수도 있을 것이다. 다행히도 앞선 포스팅에서 추천했던, 블로그 포스팅에 VS Code 편집기를 사용한다면 에디터에서 단축어로 등록하여 이러한 문제를 조금씩 덜어갈 수 있다.

## Code Snippets

---

코드 스니펫은 프로그래밍에서 반복적으로 사용되는 코드 조각을 뜻하는데, IDE의 자동 완성 기능이나 웹사이트 관리를 위한 플로그인을 지칭하기도 한다. 스니펫을 사용하면 자주 쓰는 코드를 키보드 입력으로 빠르게 삽입하거나 자동으로 완성할 수 있어 개발 생산성을 높여준다.  

눈치 챘다시피 마크다운 문서에도 이러한 코드 스니펫을 적용할 수 있다. 귀찮은 문법은 물론, 포스팅 카테고리 별 문서 양식도 정의할 수 있으므로 차근차근 알아보자.

## VS Code로부터 설정하기

---

### 1. File → Preferences → Configure Snippets → markdown 입력 후 선택

![이미지1](https://imgur.com/nFv4yMN.png)

![이미지2](https://imgur.com/XFthuQb.png)

### 2. `markdown.json` 파일에 스니펫을 문법에 맞게 입력

```json
"Print <br>": {
  "prefix": "br",
  "body" : [
    "\n",
    "<br>",
    "\n"
  ],
  "description": "Print <br>"
},

"Print <u>": {
  "prefix": "ub",
  "body" : [
    "<u>$1</u>"
  ],
  "description": "Print <u>"
},

"Print Code Block C++": {
  "prefix": "cbcpp",
  "body" : [
    "```cpp",
    "$1",
    "```"
  ],
  "description": "Print C++ Code Block"
},

"Print Code Block File": {
  "prefix": "cbfile",
  "body" : [
    "{: file=\"$1\"}"
  ],
  "description": "Print C++ Code Block"
},

"Print Prompt Info": {
  "prefix": "pinfo",
  "body" : [
    "{: .prompt-info }"
  ],
  "description": "Print Prompt Info"
},

"Print Prompt Tip": {
  "prefix": "ptip",
  "body" : [
    "{: .prompt-tip }"
  ],
  "description": "Print Prompt Tip"
},

"Print Prompt Warning": {
  "prefix": "pwarn",
  "body" : [
    "{: .prompt-warning }"
  ],
  "description": "Print Prompt Warning"
},

"Print Prompt Danger": {
  "prefix": "pdanger",
  "body" : [
    "{: .prompt-danger }"
  ],
  "description": "Print Prompt Danger"
},

"Print Date": {
  "prefix": "date",
  "body" : [
    "$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE"
  ],
  "description": "Print current date"
},

"Print Notice Chirpy Version": {
  "prefix": "chirpyv",
  "body" : [
    "",
    "> Chirpy 테마 버전 7.3.1 기준으로 작성",
    "{: .prompt-info }",
    ""
  ],
  "description": "Print Notice Chirpy Version"
},
```
{: file="markdown.json"}

1. `prefix`
     - 설정할 단축어
     - 대괄호(`[]`)를 이용한 배열 표현으로 2개 이상의 단축어를 등록할 수 있음
2. `body`
     - 실행할 명령 또는 자동 완성할 내용
     - 배열이므로 `,`로 원소를 구분하고, 각 배열의 항목이 한 줄의 코드가 됨
     - `"$1"`로 실행된 이후 커서의 위치를 표시
     - 사전 정의된 변수에 `$`를 앞에 붙여 사용할 수 있음
       - `CURRENT_YEAR` : 현재 년도
       - `CURRENT_MONTH` : 현재 월
       - `CURRENT_DATE` : 현재 일자
3. `description`
     - 단축어 입력시 해당 스니펫 설명

여기까지 설정하면 단축키를 입력하고 `Ctrl + Space`로 자동 완성을 사용할 수 있다. 하지만 일일히 `Ctrl + Space`를 입력한다는 것 또한 귀찮은 작업이다. 자동으로 빠른 제안을 활성화하도록 설정하자.  

### 3. `Ctrl + Shift + P` 또는 상단 검색창에 `settings.json` 열기

![이미지3](https://imgur.com/6WmnHiN.png)

### 4. `settings.json` 파일에 Markdown 파일에서 빠른 제안 기능 활성화하기

```json
...

"[markdown]": {
    "editor.quickSuggestions": true
}

...
```

> 기존에 `"[markdown]"` 설정 항목이 존재하면 아래 `editor.quickSuggestions` 부분만 추가하면 된다.
{: .prompt-info }

### 5. Markdown 파일에서 작성한 코드 스니펫 단축키를 입력해서 잘 동작하는지 확인

![이미지4](https://imgur.com/XXY5V0p.png)

에디터에서 cb만 입력하면 `Ctrl + Space` 없이 Visual Studio처럼 자동 완성 추천 기능이 보이는 것을 확인할 수 있다. 방향키로 선택 후 가볍게 엔터를 치면 C++ 코드 블럭 문법이 촤라락 입력된다.

## 마무리

---

다른 기능들은 차지하고서라도, 개인적으로 Front Matter에 입력할 현재 시간을 자동으로 출력하는 기능을 간절하게 찾고 있었다. 설정 값, Auto HotKey 매크로 등등 여러 가능성을 찾아보았는데 코드 스니펫을 통해 간단하게 구현할 수 있는 점을 알게되어 묵은 때가 씻겨 나가는 것 같은 심정이다. 특히 폴더 별, 카테고리 별 포스팅 양식의 템플릿인 Markdown 파일을 미리 만들어둔 뒤 복제해서 포스팅에 활용하고 있었다. 하지만 이제 그럴 필요 없이 코드 스니펫으로 빈 파일에다가 바로 Front Matter를 포함해 작성할 수 있게 되었으니 포스팅에 더욱 박차를 가할 수 있게 되었다. 이 글을 통해 블로그 운영에 많은 도움이 되었으면 한다.  

> 댓글을 통해 유용한 코드 스니펫을 공유해주시면 감사하겠습니다.
{: .prompt-info }

## 참고

---

[VS Code 공식 문서](https://code.visualstudio.com/docs/editing/userdefinedsnippets#_create-your-own-snippets)  

[VS Code에서 나만의 Snippets 만들기 by 향로](https://jojoldu.tistory.com/491?source=post_page-----28b6044a77d3---------------------------------------)  
