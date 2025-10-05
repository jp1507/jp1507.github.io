---
title: "Github 블로그 만들기(3) - Google Search에 블로그 노출 시키기"
date: 2025-09-25
categories: [Misc, Github Blog]
tags: [github, github blog, jekyll, blog, chirpy, velog, tistory, ruby, google search, google search console, naver search advisor, github 블로그, 깃허브, 블로그, 블로그 만들기]
series: "Github 블로그 만들기"
series_order : 3
math: false
image:
  path: https://imgur.com/l3ku5lP.jpg
---

> Chirpy 테마 버전 7.3.1 기준으로 작성
{: .prompt-info }

## 블로그 기능 추가하기

---
이전 포스팅에서 블로그의 기본 설정을 만져보았다. 이번 포스팅에서는 저번에 미처 설정하지 못한 부분을 마저 설정해본다. 성공적으로 완료한다면 블로그가 다른 사람에게 검색되는지, 어떤 키워드로 얼만큼 유입되는지 등을 확인할 수 있다.

## Google Search에 블로그 노출 시키기

---

### Google Search Console

내 웹사이트가 Google 검색에 어떻게 노출되고 있는지 확인하고 최적화할 수 있는 무료 도구이다. 사이트에 발생한 오류나 문제를 진단하고, 어떤 키워드로 유입되는지 파악할 수 있는 검색 엔진 최적화(SEO)의 핵심이라고 볼 수 있다. 포스팅한 글이 검색 결과에 잘 노출되도록 활용해야한다.

### Google Search Console로부터 시작하기

첫 번째로 [Google Search Console](https://search.google.com/search-console/about)에 접속하여 **시작하기** 버튼을 눌러 진행한다.

![이미지1](https://imgur.com/AUDoNT5.png)

좌측 **도메인** 속성의 경우 개인적으로 구매한 도메인이 있는 경우 선택하면 되고, 그렇지 않은 우리는 우측 **URL 접두어** 속성을 고르면 된다. URL 입력 필드에 블로그 주소(https://{Github-ID}.github.io/)를 입력하고 **계속** 버튼을 누른다.

![이미지2](https://imgur.com/CvghIKM.png)

URL의 속성을 확인한 뒤 **소유권 확인** 단계로 넘어간다. 우리가 해당 사이트의 소유자인지 확인하는 단계로 방법에 따른 위치에 태그를 삽입해서 인증하는 과정이다. Chirpy 테마는 이미 필요한 파일이 모두 준비되어있기 때문에 **HTML 태그** 방법을 선택한다.

![이미지3](https://imgur.com/YNOdGqw.png)

자동 생성된 메타태그를 알맞은 위치에 삽입하면 된다. **복사** 버튼을 눌러서 클립 보드에 복사하자.
> **확인** 버튼은 태그를 삽입하고 Repository에 Push한 뒤 누른다.
{: .prompt-warning }

![이미지4](https://imgur.com/BWdCj74.png)

해당 태그는 아래와 같은 양식을 가진다. 우리가 필요한 부분은 `content`의 소유권 확인용 코드이다.  

```html
<meta name="google-site-verification" content="xaagm..." />
```

보통은 Google의 설명과 같이 header 부분에 삽입하지만 Chirpy 테마는 `_config.yml` 파일에 설정하면 된다. 아래 코드 블록처럼 해당 부분에 `content`의 내용을 복사/붙여넣기 한 뒤 변경 사항을 Commit & Push해서 블로그를 배포한다.

```yml
...

# Site Verification Settings
webmaster_verifications:
  google: xaagm...
  bing: # fill in your Bing verification code
  alexa: # fill in your Alexa verification code
  yandex: # fill in your Yandex verification code
  baidu: # fill in your Baidu verification code
  facebook: # fill in your Facebook verification code

...
```

배포가 완료된 뒤 **확인** 버튼을 눌러 최종적으로 소유권을 확인한다. 아래 이미지와 같이 뜬다면 성공한 것이다.

![이미지5](https://imgur.com/v2lIeeE.png)

### Sitemap 등록하기

Sitemap은 사이트의 전체 구조를 검색 엔진에게 알려주는 `.xml` 파일로, 페이지를 더 빠르고 정확하게 크롤링할 수 있도록 도와주는 역할이다. **Sitemap 등록**을 통해 검색 엔진이 블로그 전체를 빠짐없이 인식하도록 하는 중요한 과정이다.  
Github Pages로 블로그를 만들면 자동적으로 `sitemap.xml` 파일을 생성해준다. 만약 수정하고 싶다면 ['플러그인 없이 Jekyll Sitemap 만들기'](https://dveamer.github.io/homepage/Sitemap.html) 포스팅을 참고하도록 하자. **Sitemaps** 탭의 **새 사이트맵 추가**에 `sitemap.xml`을 입력한 뒤 **제출** 버튼을 누른다.

![이미지6](https://imgur.com/LI8hZ77.png)

아래와 같이 출력된다면 성공적으로 등록된 것이다.

![이미지7](https://imgur.com/THVOPCu.png)

> **Sitemap 등록**을 했는데 사진과 같이 **가져올 수 없음** 상태로 출력된다면 당황하지말자.
> ![이미지8](https://imgur.com/USfqo8U.png)
> 해당 항목을 클릭해서 나오는 상세 페이지에서 **사이트맵을 읽을 수 없음** 경고를 제외한 다른 메세지가 없고 우측 상단에 **사이트맵 열기** 버튼을 눌렀을 때 `sitemap.xml` 파일이 정상적으로 보인다면 일시적인 버그로 보인다.
> ![이미지9](https://imgur.com/eKRbjQQ.png)
{: .prompt-tip }

### Google 검색으로 동작 확인

Sitemap까지 등록 완료했다면 모든 과정을 끝냈다. 하지만 바로 Google 검색에 노출되는 것은 아니다. 짧으면 하루, 길게는 1, 2주 정도 걸린다고 한다. 나같은 경우 영업일 기준 이틀 정도 걸린 것 같다. 아래와 같이 특정 사이트 검색을 통해 결과를 확인해보자.  

![이미지10](https://imgur.com/i1unVth.png)

## 마무리

---

이번 포스팅에서는 Google Search Console을 이용해 블로그가 검색에 노출되도록 사이트 인증을 진행해보았다. `_config.yml` 파일에서 다른 사이트에 대한 필드가 있으니 다른 사이트 인증도 해보면 좋을 것 같다. 블로그 기능 추가에 대한 포스팅으로 이어간다.

> 네이버도 Google Search Console과 같은 웹마스터 도구가 있다. [Naver Search Advisor](https://searchadvisor.naver.com/)로 접속해서 진행할 수 있는데, Google처럼 `_config.yml`로 가능한지 확실하지 않아서 HTML 파일을 추가하는 방식으로 진행하였다. HTML 파일을 블로그 폴더에 포함시키고 배포한 뒤 인증하면 된다.  
> `_config.yml` 파일로도 인증이 가능한지 댓글로 공유해주시면 감사하겠습니다.
{: .prompt-tip }
