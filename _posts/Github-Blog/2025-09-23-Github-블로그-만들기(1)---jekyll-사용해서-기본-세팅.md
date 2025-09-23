---
title: Github 블로그 만들기(1) - jekyll 사용해서 기본 세팅
date: 2025-09-23
categories: [Etc, Github Blog ]
tags: [Github, jekyll, Blog, Chirpy ]
pin: false
math: false
---

## Github 블로그를 만들게 된 이유

---
개발자라면 개발 블로그가 매우 익숙하다. 공부한 것들 정리나 개발 일지 등 다양한 용도로 사용할 수 있는 블로그는 뗄레야 뗼 수 없는 존재인 것이다. 그런 의미에서 블로그를 해봐야겠다는 생각이 들었고 여러 플랫폼을 찾아보았다. 평소 자주 방문했던 블로그들의 레이아웃이 비슷비슷하고, 블로그 개발 관련 게시글을 통해 Github Pages를 이용해 정적 사이트를 만들 수 있다는 점을 발견했다. 뛰어난 자유도와 버전 관리를 통해 포트폴리오를 향상시킬 수 있는 생각에 Github를 이용한 블로그를 준비하기로 결정했다.  

처음 개설할 때 비교적 오래된 정보들을 활용했었다. 그 정보들이 작성된 이후로 상당한 업데이트가 진행되었고 많은 부분이 바뀌어 있었다. 내가 겪은 시행착오를 바탕으로 작성일 기준 최신 방법을 공유한다.

## Github Pages

---

Github Pages는 Github에서 제공하는 정적 웹사이트 호스팅 서비스이다. Public으로 설정된 개별 Repository를 이용하여 개인 또는 팀 단위로 웹사이트를 호스팅할 수 있다. Github Pro 요금제를 사용 중이라면 Private으로 설정된 Repository를 사용할 수 있다. 기본적으로 HTML, CSS, JavaScript로 구성된 파일로 구동한다. 주로 개발자 자신들의 포트폴리오, 기술 블로그, 프로젝트 소개 등 정보를 공유하기 위해 사용된다.  

공식 문서(한글) : <https://docs.github.com/ko/pages>

## Github 블로그 장단점

---

- 장점
  - 버전 관리 용이
  - 마크다운을 이용한 효율적인 게시물 업로드
  - 자유로운 커스터마이징
  - 커뮤니티와의 연결성 강화
  - 무료 호스팅과 안정성
  - 오픈 소스 참여 기회
- 단점
  - 높은 진입 장벽
  - 통계 및 분석 부재
  - 관리자 모드 부재

## 1. 사전 툴 설치하기

---

먼저, jekyll을 사용하기 위해 필요한 Ruby를 아래 링크를 통해 설치한다. 나중에 로컬에서 jekyll을 실행시켜 환경 설정이나 포스팅 결과를 확인하는 용도로 사용한다.

- 참고 : <https://rubyinstaller.org/downloads/>

![이미지1](https://imgur.com/xo4FcPS.png)


## 2. Github로 시작하기

---

> Github의 Repository Clone 등의 설명은 생략
{: .prompt-info }  

### Theme 고르기



