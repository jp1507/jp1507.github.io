---
title: "Github 블로그 만들기(4) - Google Analytics로 블로그 분석하기"
date: 2025-09-25
categories: [Misc, Github Blog]
tags: [github, github blog, jekyll, blog, chirpy, velog, tistory, ruby, google analytics, goatcounter, github 블로그, 깃허브, 블로그, 블로그 만들기]
series: "[Github 블로그 만들기]"
series_order : 4
pin: false
math: false
image:
  path: https://imgur.com/l3ku5lP.jpg
---

> Chirpy 테마 버전 7.3.1 기준으로 작성
{: .prompt-info }

## Google Analytics로 블로그 분석하기

---

Google Analytics는 웹사이트의 트래픽을 분석하는 데 강력한 도구이자 블로그 성장에 중요한 역할을 할 수 있다. 블로그 방문자들의 행동을 분석하고, 이를 바탕으로 콘텐츠를 개선할 수 있는 인사이트를 얻을 수 있다.  

### Google Analytics 시작하기

먼저 [Google Analytics](https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com/about/analytics/#/provision)로 접속해서 **측정 시작** 버튼을 누른다.  

![이미지1](https://imgur.com/YbdlU78.png)

Google Analytics를 한번도 사용한 적 없다면 가입 절차를 진행해야 한다. 해당 절차는 구글 계정과는 별개로 진행한다.  
계정 이름 입력하고 하단의 **다음** 버튼은 누른다.  

![이미지2](https://imgur.com/PAOi8GI.png)

**속성 이름** 입력 필드와 **보고 시간대**, **통화**에 대한 설정을 한 뒤 **다음** 버튼을 누른다.  

![이미지3](https://imgur.com/Qt6MObc.png)

**업종 카테고리**와 **비즈니스 규모**에 대한 설정을 한 뒤 **다음** 버튼을 누른다.  

![이미지4](https://imgur.com/VLGSwwS.png)

**비즈니스 목표 선택**에 대한 설정을 한 뒤 **만들기** 버튼을 누른다.  

![이미지5](https://imgur.com/DFiUJbb.png)

**웹** 버튼을 눌러 플랫폼을 선택한다. **웹사이트 URL** 입력 필드에 블로그 주소와 스트림 이름을 입력한 뒤 우측 상단에 **만들고 계속하기** 버튼을 눌러 절차를 마무리한다.

![이미지6](https://imgur.com/uTp5rvs.png)

![이미지7](https://imgur.com/AMgbkzt.png)

### `_config.yml`에 설정하기

계정과 속성을 모두 설정하고 나면 웹 스트림 세부정보가 출력된다. 여기서 **측정 ID**의 코드를 복사해서 `_config.yml` 파일에 삽입하면 끝이다. 완료했다면 블로그를 배포해준다.

> 찾지 못했다면 **Google Analytics - 관리** 탭의 **속성 설정 - 데이터 수집 및 수정 - 데이터스트림** 경로로 찾을 수 있다.
{: .prompt-tip }

![이미지8](https://imgur.com/vHNN9JD.png)

```yml
...

# Web Analytics Settings
analytics:
  google:
    id: G-...
  goatcounter:
    id: # fill in your Goatcounter ID
  umami:
    id: # fill in your Umami ID
    domain: # fill in your Umami domain
  matomo:
    id: # fill in your Matomo ID
    domain: # fill in your Matomo domain
  cloudflare:
    id: # fill in your Cloudflare Web Analytics token
  fathom:
    id: # fill in your Fathom Site ID

...
```

### Google Analytics가 잘 적용되었는 지 확인하기

블로그에 접속한 후 애널리틱스 홈에서 확인해본다. 활성 사용자 숫자가 카운팅되었다면 정성적으로 측정 되는 것이다.

![이미지9](https://imgur.com/aLin5qV.png)

### Google Search Console 연동

저번 포스팅에서 Google Search Console을 이용해 검색에 노출되도록 설정했다. 블로그 분석에 웹마스터 도구에서 기록한 데이터도 함께 사용 가능하므로 연동해주자.  

**Google Analytics - 관리** 탭의 **속성 설정 - 제품 링크 - Search Console 링크**로 접근할 수 있다.  

![이미지10](https://imgur.com/gcppMOe.png)

우측 상단에 **연결** 버튼을 누른다. 나는 이미 연결 했기 때문에 딤처리 되어있다.  

![이미지11](https://imgur.com/HffEeat.png)

제시되는 가이드를 잘 따라 계정에 연결된 Google Search Console 링크와 연동하면 된다.

![이미지12](https://imgur.com/M5BZRR6.png)

## GoatCounter를 이용해 블로그 분석하기

---

### GoatCounter

GoatCounter는 간단한 설정만으로 페이지 조회수를 추적할 수 있는 경량화된 웹 분석 도구이다. 제공되는 대시보드를 통해 직관적으로 데이터를 확인할 수 있다. Chirpy 테마에서 직접적으로 지원하기 때문에 간편하게 설정할 수 있다.

### GoatCounter로부터 시작하기

[GoatCounter 홈페이지](https://www.goatcounter.com/)로 이동해 **Sign up** 버튼으로 회원 가입을 한다.

![이미지13](https://imgur.com/V99zlff.png)

간단한 정보들을 입력하고 **Sign up** 버튼을 눌러 절차를 완료한다.  

- **Code** 필드에는 원하는 서브 도메인을 입력한다. 해당 코드는 블로그 연동 시 사용된다.
- **Site domain** 필드에는 블로그 주소를 입력한다.
- **Email address** 필드에는 ID로 사용할 이메일 주소를 입력한다.
- **Password** 필드에는 비밀번호를 입력한다.
- **Fill in 9 here** 필드에는 9를 입력한다.

![이미지14](https://imgur.com/OxxaSi1.png)

로그인 후 대시보드에서 우측 상단의 **Settings** 버튼을 눌러 설정 페이지로 이동한다. **Allow adding visitor counts on your website** 체크 박스를 설정하고 하단의 **Save** 버튼을 눌러 마무리한다.

![이미지15](https://imgur.com/TQzBq7i.png)

### `_config.yml`에 설정

Google Analytics와 마찬가지로 `_config.yml` 파일에서 설정하면 된다. `analytics`에서 `goatcounter`의 `id`에 회원가입 시 설정했던 **Code**를 입력한다.  
그리고 바로 밑의 `pageviews`에 `# goatcounter`의 주석 처리를 해제 해준 뒤 블로그를 배포해준다.

```yml
# Web Analytics Settings
analytics:
  google:
    id: G-...
  goatcounter:
    id: Code
  umami:
    id: # fill in your Umami ID
    domain: # fill in your Umami domain
  matomo:
    id: # fill in your Matomo ID
    domain: # fill in your Matomo domain
  cloudflare:
    id: # fill in your Cloudflare Web Analytics token
  fathom:
    id: # fill in your Fathom Site ID

# Page views settings
pageviews:
  provider: goatcounter 
```

### GoatCounter 대시보드 확인

블로그 배포가 끝나고 나서 `https://{GoatCounter-Code}.goatcounter.com` 주소로 접속하면 GoatCounter 대시보드가 정상적으로 보일 것이다.  

![이미지16](https://imgur.com/1P1X4Ph.png)

## 마무리

---

이번 포스팅에서 각종 웹 분석 도구를 이용해 블로그 트래픽을 확인하는 기능을 추가했다. 블로그를 운영하면서 분석 도구를 이용해 더 나은 콘텐츠 생산에 활용하도록 하자. 다음 포스팅에서도 블로그 기능 추가에 대해 알아본다.
