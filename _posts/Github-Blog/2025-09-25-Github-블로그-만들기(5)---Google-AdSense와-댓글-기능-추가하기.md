---
title: "Github 블로그 만들기(5) - Google AdSense와 댓글 기능 추가하기"
date: 2025-09-25
categories: [Misc, Github Blog]
tags: [github, github blog, jekyll, blog, chirpy, velog, tistory, ruby, google adsense, utterances, github 블로그, 깃허브, 블로그, 블로그 만들기]
series: "[Github 블로그 만들기]"
series_order : 5
math: false
image:
  path: https://imgur.com/l3ku5lP.jpg
---

## 블로그와 Google AdSense

---

블로그를 운영하면서 수익을 창출할 수 있다는 것은 귀가 솔깃한 이야기이다. 운영에는 각자의 이유가 있겠지만 할 일 하면서 돈을 벌 수 있다니 감지덕지한 일이 아닐 수 없다. 하지만 세상에 공짜는 없는 법이다. 광고로 의미있는 숫자의 수익을 얻는 것은 매우 품이 많이 들고 어려운 일이다. 정성이 많이 필요하고 수익을 발생시키기까지 시간도 오래 걸리는 일이다. 하지만 앞으로 블로그 운영에 있어 어느 정도 동기 부여가 되는 일임에는 틀림없다.  

## Google AdSense 추가하기

---

### Google AdSense

Google AdSense는 웹사이트 등을 운영하는 사람이 해당 콘텐츠에 구글 광고를 게재하고, 방문자가 광고를 클릭하거나 시청함에 따라 발생하는 수익을 구글과 나누어 얻는 광고 프로그램이다. 현재는 가입과 심사가 까다로워졌다고 알고있다. 수익 창출 허가도 블로그 트래픽이 어느 정도 발생해야 승인이 된다고 한다.  

![이미지1](https://imgur.com/hK5Diq5.png)

### Google AdSense로부터 시작하기

먼저 [Google AdSense](https://www.google.com/adsense)에 가입한다. 양식을 모두 작성하고 하단의 **애드센스 사용 시작** 버튼을 누른다.  

- **내 사이트** 입력 필드에는 블로그 주소를 입력한다.
- **애드센스를 최대한 활용하기** 라디오 버튼은 기호에 따라 선택한다.
- **수취인 국가/지역** 드롭다운 메뉴는 대한민국을 선택한다. 애드센스 이용약관을 확인 및 수락한다.

![이미지2](https://imgur.com/PkUFYJD.png)

가입을 완료 했으면 Search Console이나 Analytics와 마찬가지로 블로그를 인증하는 과정이 필요하다. **정보 입력** 버튼을 먼저 눌러 다음으로 넘어간다.  

![이미지3](https://imgur.com/JORVGX6.png)

> Google 계정에 결제 프로필이 이미 등록되어 있다면 다음 단계로 넘어가면 된다.  
{: .prompt-info }

가이드에 따라 적절히 정보를 입력하고 하단의 **제출** 버튼을 눌러 저장한다.  

![이미지4](https://imgur.com/QvBUdd1.png)

홈 화면으로 돌아왔다면 다음은 **애드센스에 사이드를 연결하세요** 항목의 **시작하기** 버튼을 누른다. 사이트 소유권을 확인하는 과정은 간단하다. 해당 코드를 복사한 다음 폴더 내 `_include` 경로의 `head.html` 파일에 삽입하면 된다.  

![이미지5](https://imgur.com/ojx7qO6.png)

```html
...

<!-- Scripts -->

  <script src="{{ '/assets/js/dist/theme.min.js' | relative_url }}"></script>

  <script 
    async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-..."
    crossorigin="anonymous"
  ></script>

...
```

블로그 배포 후 **코드를 삽입했습니다.** 체크 박스를 설정하고 **확인** 버튼을 눌러 인증 절차를 완료한다. 태그가 성공적으로 인식됐다면 아래와 같이 Google 측으로 검토 요청을 보낸다.  

![이미지6](https://imgur.com/3rBfKHR.png)

홈 화면의 **광고** 항목은 본인의 블로그에 어떤 방식으로 어떤 종류의 광고를 게시할 것인지 설정할 수 있는 메뉴이다. 광고에는 오버레이 형식, 인페이지 형식 등이 있고 하위 분류로 배너, 앵커, 사이드, 전면 등 다양한 종류가 있다. 난잡하고 남발되는 광고는 블로그의 가독성과 레이아웃을 해치므로 적절히 설정하도록 한다.  

![이미지7](https://imgur.com/TmbERaq.png)

### 블로그에서 광고 확인하기

**Google AdSense - 사이트** 탭에서 현재 검토 중인 사이트를 볼 수 있다. 승인에는 조건이 필요하니 관심을 가지고 꾸준히 블로그를 운영하면 이른 시일 내에 허가 받을 수 있을 것이다. 관련해서 시간이 조금 지난 내용이지만 상당히 구체적인 정보를 정리해놓은 포스팅이 있다. [여기](https://wlqmffl0102.github.io/posts/Google-Adsense-Approval/)서 확인해볼 수 있다.  

![이미지8](https://imgur.com/oYkXek2.png)

## 블로그에 댓글 기능 추가하기

---

블로그에 댓글 기능은 커뮤니티 확장에 있어 빠질 수 없는 요소이다. 다행히도 Chirpy 테마에서는 매우 간단하게 댓글 기능을 추가할 수 있도록 구성되어있다. 이전에 `_config.yml` 파일에서 다음과 같은 부분이 있었던 것을 기억이 날 것이다. 댓글 기능 관련 설정으로 이 부분을 건드려본다.  

```yml
...

comments:
  # Global switch for the post-comment system. Keeping it empty means disabled.
  provider: # [disqus | utterances | giscus]
  # The provider options are as follows:
  disqus:
    shortname: # fill with the Disqus shortname. › https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  # utterances settings › https://utteranc.es/
  utterances:
    repo: # <gh-username>/<repo>
    issue_term: # < url | pathname | title | ...>
  # Giscus options › https://giscus.app
  giscus:
    repo: # <gh-username>/<repo>
    repo_id:
    category:
    category_id:
    mapping: # optional, default to 'pathname'
    strict: # optional, default to '0'
    input_position: # optional, default to 'bottom'
    lang: # optional, default to the value of `site.lang`
    reactions_enabled: # optional, default to the value of `1`

...
```

`provider` 필드를 보면 `disqus`, `utterances`, `giscus`의 3가지 공급자가 있고 Chirpy 테마에서 이 3가지의 플랫폼을 지원한다. 우리는 이 중에서 **Utterances**를 추가해볼 것이다.  

### Utterances

![이미지9](https://imgur.com/Lzn1b5x.png)

Utterances는 Github의 Issue 기능을 사용해 직접 기능을 구현하지 않고 간단하게 댓글 기능을 사용할 수 있게 도와주는 오픈 소스이다. 다음은 Utterances의 장점인데 요점은 가볍고 무료인 점이다.  

- 오픈 소스이고 추적과 광고가 없으며 무료이다.
- Github Issue 기반으로 동작한다.
- css 툴킷인 Primer로 스타일이 지정된다.
- 어두운 테마를 사용할 수 있다.
- 가벼운 바닐라 타입 스크립트이다.

### 댓글(Issue)로 사용할 Repository 만들기

> 만약 블로그의 Repository가 Public이라면 앞으로의 과정에서 블로그 Repository를 그대로 사용하면 된다. 이 부분을 생략하고 다음 단계로 넘어가자.
{: .prompt-info }

Github의 Issue를 댓글로 사용하기 때문에 다른 사람들이 댓글을 보기 위해서 공개 저장소가 필요하다. 우리는 블로그를 Private으로 생성했기 때문에 Public으로 설정된 Repository가 필요하다.  

이름과 설정을 적당히 입력하고 **Choose visibility** 항목을 반드시 **Public**으로 설정한 뒤 **Create repository** 버튼을 눌러 생성한다.  

![이미지10](https://imgur.com/STx1XHq.png)

### Utterances로부터 시작하기

Github App에서 [Utterances](https://github.com/apps/utterances)를 설치한다. 우측의 **Install** 버튼을 누른다. 설치가 되어있다면 **Configure**로 보일 것이다.  

![이미지11](https://imgur.com/k7QgXnV.png)

다음과 같이 사용할 Public Repository를 선택한 뒤 하단의 **Install** 버튼을 누른다.

![이미지12](https://imgur.com/9eKcBUD.png)

### Utterances 설정

> 이 부분은 Chirpy 테마라면 불필요하므로 다음 단계로 넘어간다.
{: .prompt-info }

설치가 완료 됐다면 Utterances 설정 페이지가 뜰 것이다. 양식에 맞춰 입력 필드를 채운다.  
> 해당 설정 페이지를 놓쳤다면 [여기](https://utteranc.es/)서 다시 시도할 수 있다.
{: .prompt-tip }

- `username/repository-name` 양식으로 Repository를 입력한다.
![이미지13](https://imgur.com/1P6lOOe.png)

- Post, Issue 매핑 방식을 결정한다. 첫 번째 항목 그대로 사용해도 무방하다.
![이미지14](https://imgur.com/aSjKd53.png)

- Issue에 업데이트될 때 Label을 추가해준다. 댓글 전용 Repository기 때문에 비워놔도 무방하다.
![이미지15](https://imgur.com/SvHTTUQ.png)

- Utterances의 테마를 기호에 따라 선택한다.
![이미지16](https://imgur.com/ARbyxW1.png)

설정을 마치면 아래 **Enable Utterances** 항목에 자동으로 태그가 생성된다. **Copy** 버튼을 눌러 해당 태그를 댓글이 들어갈 위치에 삽입하면 된다.  

![이미지17](https://imgur.com/2zRos0M.png)

### 블로그에 Utterances 추가하기

Chirpy 테마는 `_config_yml` 파일에서 간편하게 추가할 수 있다. 아래와 같이 설정을 수정해준다. `utterances:`의 `repo` 필드는 반드시 Github의 `username/repo-name` 양식으로 입력해야한다.  

> 이전 단계인 **Utterances 설정**의 일부분(예를 들면 테마)은 Chirpy 테마에서 기본적으로 설정되어있다.
> 변경하고 싶다면 관련 파일을 수정하면 된다.
{: .prompt-info }

```yml
...

comments:
  # Global switch for the post-comment system. Keeping it empty means disabled.
  provider: utterances # [disqus | utterances | giscus]
  # The provider options are as follows:
  disqus:
    shortname: # fill with the Disqus shortname. › https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  # utterances settings › https://utteranc.es/
  utterances:
    repo: jp1507/blog-comments # <gh-username>/<repo>
    issue_term: pathname # < url | pathname | title | ...>
  # Giscus options › https://giscus.app
  giscus:
    repo: # <gh-username>/<repo>
    repo_id:
    category:
    category_id:
    mapping: # optional, default to 'pathname'
    strict: # optional, default to '0'
    input_position: # optional, default to 'bottom'
    lang: # optional, default to the value of `site.lang`
    reactions_enabled: # optional, default to the value of `1`

...
```

### 블로그에서 댓글 기능 확인하기

블로그를 배포하면 아래 이미지와 같이 댓글 기능이 추가된 것을 볼 수 있다. Github의 Issue를 활용하는 만큼 댓글을 쓰기 위해서는 Github 로그인이 필요한 점은 참고하자.  
댓글 입력에는 ***Styling with Markdown is supported*** 문구로 보다시피 마크다운 문법을 허용한다. 마크다운 문법으로 작성 후 **Preview** 버튼을 눌러 작성한 댓글을 미리 확인할 수 있다.  

![이미지18](https://imgur.com/3kKwsP7.png)

누군가 댓글을 달면 포스팅 뿐만 아니라 해당 Repository의 **Issues** 탭에서도 확인할 수 있다.

![이미지19](https://imgur.com/RzflAKF.png)
![이미지20](https://imgur.com/4mLP0Ui.png)

> 만약 댓글을 달았는데 보이지 않는다면 댓글로 사용하는 Repository의 **Settings** 탭에 **General - Features** 항목의 **Issues**가 체크 되어있는지 확인하자. 체크가 되어있는데 안된다면 `_config.yml` 파일을 맞게 설정했는지 확인하자.
> ![이미지21](https://imgur.com/lfDmEYF.png)
{: .prompt-tip }

## 마무리

---

이번 포스팅에서 블로그에 광고를 삽입하고 댓글 기능을 추가하였다. 지금까지 잘 따라왔다면 기본적인 블로그 기능은 모두 준비가 되었다. 열심히 운영해서 치킨이라도 한마리 뜯을 수 있는 수익을 향해 노력하자. 다음 포스팅은 본격적인 블로그 꾸미기에 대한 글이다.  
