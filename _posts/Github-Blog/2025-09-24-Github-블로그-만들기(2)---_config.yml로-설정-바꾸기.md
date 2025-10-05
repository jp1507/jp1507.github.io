---
title: "Github 블로그 만들기(2) - _config.yml로 설정 바꾸기"
date: 2025-09-24
categories: [Misc, Github Blog]
tags: [github, github blog, jekyll, blog, chirpy, velog, tistory, ruby, github 블로그, 깃허브, 블로그, 블로그 만들기]
series: "Github 블로그 만들기"
series_order : 2
math: false
image:
  path: https://imgur.com/l3ku5lP.jpg
---

> Chirpy 테마 버전 7.3.1 기준으로 작성
{: .prompt-info }

## 블로그 기본 설정하기

---

이전 글에서 기본적인 블로그 빌드와 배포를 완료했지만 Chirpy 테마의 기본 껍데기일 뿐이다. 이번 포스팅을 통해 블로그의 전반적인 설정 조정으로 점점 나만의 블로그로 탈바꿈 해보자.  

## 블로그 작업을 위한 툴

---

본격적으로 설정을 만지기 앞서 앞으로 블로그 작업을 위해 툴이 필요할 것이다. 포스팅을 하기 위한 `.md`, 이번 포스팅에서 다루는 `_config.yml`과 같은 코드 편집이나 마크다운 파일 미리보기 등  IDE이 있으면 다양한 기능을 통해 작업의 효율성과 편리성이 향상된다.  
게임 개발에는 보통 Visual Studio를 사용하지만 그 밖의 프로그래밍에는 VS Code를 사용한다. Visual Studio에 비해 매우 가볍고 실행 속도가 빠르며 필요한 기능만 골라서 설치할 수 있어서 매우 효율적이다.

[VS Code 설치 페이지](https://code.visualstudio.com/)

## `_config.yml` 파일 살펴보기

---

폴더 내에 `_config.yml`라는 파일이 있을 것이다. Chirpy 테마에 대한 전반적인 설정들을 모아놓은 파일이다. 해당 파일을 VS Code 등 에디터를 이용해 열면 메모장이나 워드패드 보다 가독성 높게 작업할 수 있다. 아래 코드 블럭에서 수정하지 않는 항목에 대해 따로 표기하였다.

```yml
theme: jekyll-theme-chirpy
# import한 테마 이름. 수정 X

lang: ko-KR
# 언어 설정. http://www.lingoes.net/en/translator/langcode.htm에서 다른 언어 코드를 확인할 수 있다.
timezone: Asia/Seoul
#시간대 설정. http://www.timezoneconverter.com/cgi-bin/findzone/findzone에서 다른 나라의 시간대를 확인할 수 있다.

# jekyll-seo-tag settings › https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md
# ↓ --------------------------

title: GSU_J                          
# 블로그 이름. 브라우저 이름과 좌측 사이드바의 타이틀을 변경한다.
tagline: Game Development
# 서브 타이틀. 좌측 사이드바의 타이틀 아래에 출력된다.
description: >- # "used by seo meta and the atom feed"
  Sharing knowledges about Game Development.
# 블로그를 검색하면 같이 표시되는 블로그 설명이다.

url: "https://jp1507.github.io"  
# 블로그 주소. "https://{Github-ID}.github.io"로 설정한다.

github:
  username: jp1507
# Github Username으로 설정한다.

#twitter:
#  username: twitter_username
# 본인 Twitter(X) Username으로 설정. 무시해도 무방하다.

social:
  # Change to your full name.
  # It will be displayed as the default author of the posts and the copyright owner in the Footer
  name: jp1507
  email: jp1507@naver.com # change to your email address
  links:
    # The first element serves as the copyright owner's link
    #- https://twitter.com/username # change to your twitter homepage
    - https://github.com/jp1507 # change to your github homepage
    # Uncomment below to add more social links
    # - https://www.facebook.com/username
    # - https://www.linkedin.com/in/username
# 각종 Social Network(SNS) 설정. 기호에 맞게 자유롭게 작성한다.

# Site Verification Settings
webmaster_verifications:
  google: # fill in your Google verification code
  bing: # fill in your Bing verification code
  alexa: # fill in your Alexa verification code
  yandex: # fill in your Yandex verification code
  baidu: # fill in your Baidu verification code
  facebook: # fill in your Facebook verification code
# 각종 사이트 인증 관련 설정. 해당 사이트의 인증을 받아 검색에 노출되거나 등의 기능을 추가할 때 필요하다. 추후 포스팅으로 다룬다.

# ↑ --------------------------
# The end of `jekyll-seo-tag` settings

# Web Analytics Settings
analytics:
  google:
    id: # fill in your Google ID
  goatcounter:
    id: # fill in your GoatCounter ID
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
# 각종 사이트 웹 분석 관련 설정. 사이트 트래픽 분석 등의 기능을 추가할 때 필요하다. 추후 포스팅으로 다룬다.

# Page views settings
pageviews:
  provider: #goatcounter
# Goatcounter 사용 설정. 바로 위의 웹 분석 도구 중 하나이다.

# Prefer color scheme setting.
#
# Note: Keep empty will follow the system prefer color by default,
# and there will be a toggle to switch the theme between dark and light
# on the bottom left of the sidebar.
#
# Available options:
#
#     light — Use the light color scheme
#     dark — Use the dark color scheme
#
theme_mode: dark
# 테마의 라이트/다크 모드 관련 설정. 사이드바 하단의 위 화살표 버튼을 클릭하면 라이트/다크 모드로 바꿀 수 있다. 
# 나는 다크모드만 사용해서 dark만 설정했다. 한 가지를 선택하면 버튼이 사라진다.

# The CDN endpoint for media resources.
# Notice that once it is assigned, the CDN url
# will be added to all media resources (site avatar, posts' images, audio and video files) paths starting with '/'
#
# e.g. 'https://cdn.com'
cdn: "https://chirpy-img.netlify.app"
# 콘텐츠 전송 네트워크에서 엔드포인트 설정. 
# 포스팅 하면서 이미지를 삽입할 때 cdn을 비워두면 로컬 이미지를 사용하고 그대로 두면 이미지 링크를 이용해 삽입할 수 있다. 
# 양립할 수는 없는지 실험 중. 나는 이미지 링크로 이미지를 삽입해서 수정하지 않았다.

avatar: "https://avatars.githubusercontent.com/jp1507"
# 대표 이미지. 사이드바의 프로필 이미지로 출력된다. 
# cdn 설정에 따라 로컬로 사용하면 폴더 내 asset/img 경로를 통해 이미지를 관리하고 /assets/img/{img-name}.png로 사용한다.
# 그렇지 않으면 예시와 마찬가지로 이미지 링크를 사용하면 된다.

# The URL of the site-wide social preview image used in SEO `og:image` meta tag.
# It can be overridden by a customized `page.image` in front matter.
social_preview_image: # string, local or CORS resources

toc: true
# TOC(Table of contents). 포스팅 우측에 목차에 대한 출력 여부

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
# 포스팅 댓글 기능에 대한 설정. 추후 포스팅으로 다룬다.

# Self-hosted static assets, optional › https://github.com/cotes2020/chirpy-static-assets
assets:
  self_host:
    enabled: # boolean, keep empty means false
    # specify the Jekyll environment, empty means both
    # only works if `assets.self_host.enabled` is 'true'
    env: # [development | production]

pwa:
  enabled: true # The option for PWA feature (installable)
  cache:
    enabled: true # The option for PWA offline cache
    # Paths defined here will be excluded from the PWA cache.
    # Usually its value is the `baseurl` of another website that
    # shares the same domain name as the current website.
    deny_paths:
      # - "/example"  # URLs match `<SITE_URL>/example/*` will not be cached by the PWA

paginate: 10
# 블로그 메인 화면에서 표시될 포스팅의 개수

baseurl: ''
# Github Pages를 Project Pages로 만들었을 경우 프로젝트 이름을 설정한다. 
# 우리는 블로그를 User Pages로 생성했기 때문에 수정 X

# 아래로는 수정할 필요가 없다.
# ------------ The following options are not recommended to be modified ------------------

```

> `_config.yml`과 같은 설정 파일은 처음 블로그를 만들 때 선택했던 테마마다 다르기 때문에 설정에 관한 도움은 해당 테마의 Repository나 관련 정보를 참고하자.
{: .prompt-info }

## 로컬 환경에서 바뀐 설정 확인

---
`_config.yml`로 입맛에 맞게 설정했다면 적용되었는지 확인해볼 시간이다. 빌드 & 배포로 확인하면 비교적 오래 걸리기 때문에 바로 확인할 수 있는 로컬 환경으로 실행한다. 이전 포스팅에서 했던 것처럼 로컬 호스트가 준비가 되면 <http://127.0.0.1:4000/>로 접속해서 바뀐 설정을 확인한다.
```shell
$ cd .../Documents/{Github-ID}.github.io
$ bundle exec jekyll serve
```
> 해당 커맨드는 자주 사용되므로 배치파일 등의 형식으로 만들어두면 편리하다.  
> 배치파일을 폴더 내에 위치시키면 `cd ~` 명령을 생략할 수 있다.
{: .prompt-tip }

사실 현재 단계에서 `_config.yml` 파일로 바꿀 수 있는 것은 많지 않다. 언어 설정과 테마, 프로필 이미지 정도일 것이다. 추후 포스팅으로 소위 말하는 프론트-엔드적인 커스터마이징을 다룰 것이다.

## 마무리

---
`_config.yml`에 대해 알아보았다. 설정에 관련해서 미처 알지 못하는 좀 더 깊은 정보가 있으니 관심 있다면 찾아보는 것도 좋을 것 같다. 다음 포스팅은 블로그에 포스팅하는 방법에 대해 알아볼 것이다.
