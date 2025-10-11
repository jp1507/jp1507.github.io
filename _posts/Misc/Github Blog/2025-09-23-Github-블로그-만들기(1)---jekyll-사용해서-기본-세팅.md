---
title: "Github 블로그 만들기(1) - jekyll 사용해서 기본 세팅"
date: 2025-09-23
categories: [Misc, Github Blog]
tags: [github, github blog, jekyll, blog, chirpy, velog, tistory, ruby, github 블로그, 깃허브, 블로그, 블로그 만들기]
series: "Github 블로그 만들기"
series_order : 1
math: false
image:
  path: https://imgur.com/l3ku5lP.jpg
---

> Chirpy 테마 버전 7.3.1 기준으로 작성
{: .prompt-info }

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

### Ruby 설치

먼저, jekyll을 사용하기 위해 필요한 Ruby를 아래 링크를 통해 설치한다. 나중에 로컬에서 jekyll을 실행시켜 환경 설정이나 포스팅 결과를 확인하는 용도로 사용한다.

- 참고 : <https://rubyinstaller.org/downloads/>

![이미지1](https://imgur.com/xo4FcPS.png)  

인스톨러를 통해 설치가 완료된 후 마지막 단계에서 **Run ridk install to setup** 항목의 체크박스를 체크 후 **Finish** 버튼을 누르면 자동으로 CMD 창이 뜨면서 입력을 받는 문구가 뜰 것이다. 이때 **Enter**를 눌러 모든 항목에 대해 설치를 진행하면 된다.  

이후 CMD 창에서의 모든 설치가 완료되면 `ruby -v`을 입력해 다운 받은 버전이 성공적으로 설치되었는지 확인한다.
```shell
$ ruby-v
ruby 3.4.6 (2025-09-16 revision dbd83256b1) +PRISM [x64-mingw-ucrt]
```

### jekyll 설치

다음으로, jekyll을 설치한다. Ruby가 성공적으로 설치되었다면 매우 간단하다. 다음 2개의 명령어를 CMD 창에 입력한다. jekyll 뿐만 아니라 bundler도 함께 설치하는데, bundler는 ruby 프로젝트에서 gem 파일의 종속성을 관리하는 도구이다.  
```shell
$ gem install jekyll
$ gem install bundler
```

마찬가지로 커맨드를 입력해 설치가 잘 되었는 지 확인한다.
```shell
$ jekyll -v
jekyll 4.4.1

$ bundler -v
Bundler version 2.7.2
```

### Node.js 모듈 설치

개인적으로 제일 헤맸던 부분이다. 블로그 세팅 이후 Github Action에서 빌드 에러가 발생했는데 `.js` 파일이 없어서 생긴 문제였다. 이를 위해 Node.js를 설치하고 추후 사용한다.

- 참고 : <https://nodejs.org/ko/download>

![이미지2](https://imgur.com/itepWfP.jpg)

## 2. 테마 정하기

---

Github 블로그는 상술했듯이 높은 커스터마이징이 장점이다. 하지만 자유롭게 커스터마이징을 하기 위해서는 웹 프로그래밍 지식이 필요한 모양이다. 나같은 게임 개발자는 해당 분야에 대해 문외한이기 때문에 이미 만들어진 테마를 가져다가 쓰면 되겠다.

[Jekyll Themes 바로가기](http://jekyllthemes.org/)
<!-- markdownlint-disable -->
> 해당 링크는 http로 접속해야한다.
{: .prompt-warning }
<!-- markdownlint-restore -->

![이미지3](https://imgur.com/rhqXOFM.png)

jekyll 테마 사이트는 해당 사이트 말고 여러 개가 존재한다. 그 중 해당 링크로 사이트를 접속하면 jekyll에서 지원하는 다양한 테마가 있다. 그 중 한국에서 가장 많은 자료가 있는 **Chirpy** 테마를 이용해 세팅할 것이다.

![이미지4](https://imgur.com/nrlCGqv.png)

> 꼭 Chirpy 테마를 고를 필요는 없다. 본인에게 가장 이쁜 테마를 고르자. 글을 포스팅하거나 하는 핵심 기능은 같고, 블로그를 꾸미거나 할 때 파일 위치나 이름 등이 다르다.
{: .prompt-tip }

## 3. Github로부터 시작하기

---
<!-- markdownlint-disable -->
> 기본적인 Github 관련 기능 설명은 생략한다.
{: .prompt-info }
<!-- markdownlint-restore -->

해당 테마를 가져와서 세팅하는 방법은 여럿 존재한다. 그 중에서 가장 간편하고 버그 없는 방법을 소개한다. Chirpy 테마 페이지에서 **Homepage** 버튼을 누르면 해당 Repository로 이동한다. 우측 상단의 **Fork** 버튼을 클릭한다.

![이미지5](https://imgur.com/yoxTJGR.png)

해당 Repository를 Fork해서 내 Repository로 복제하는 기능이다. 이 페이지에서 Repository의 이름을 사진과 같이 `{Github-ID}.github.io`로 설정해주고 **Create fork** 버튼을 눌러 넘어간다. 이 Repository의 이름은 생성될 블로그의 주소로 사용된다.  

<!-- markdownlint-disable -->
> 반드시 Owner로 표기된 본인의 Github 아이디와 같게 설정한다.
{: .prompt-warning }
<!-- markdownlint-restore -->

![이미지6](https://imgur.com/V2yXmdt.png)

Fork한 Repository를 원하는 디렉토리에 Clone을 한 뒤 CMD 창에서 해당 디렉토리에 필요한 jekyll 관련 모듈을 설치한다.  
> 이후 입력하는 모든 CMD 커맨드는 해당 디렉토리에서 입력한다.
{: .prompt-tip }

```shell
$ cd ~/Documents/{Github-ID}.github.io
$ bundle
```
![이미지7](https://imgur.com/FJHQBvh.png)

이어서 아까 설치했던 Node.js 모듈을 npm을 통해 설치해준다.

```shell
npm install && npm run build
```

설치가 완료되면 여러 `.js` 파일들이 생성되었을 텐데 폴더 내에 `.gitignore` 파일에서 **assets/js/dist** 항목을 `#`으로 주석처리 한다.
```text
...

# Misc
_sass/vendors
#assets/js/dist <- 이 부분 주석처리

...
```

<!-- markdownlint-disable -->
> 이 절차가 누락되면 이후 빌드하는 과정에서 에러가 발생하여 블로그 기능이 정상 동작하지 않는다. 잘 따라왔다면 문제가 없겠지만 혹시 문제가 생긴다면 관련 검색을 통해 해결해야한다.
{: .prompt-warning }
<!-- markdownlint-restore -->

모든 모듈의 설치가 완료된 후 로컬 환경에서 jekyll을 실행한다.
```shell
jekyll serve
```
특별한 로그 없이 다음과 같은 출력이 나왔다면 `http://127.0.0.1:4000/` 주소의 로컬 호스트로 블로그가 준비된 상태이다. 웹 브라우저에서 해당 주소로 접속해서 블로그 내 여러 메뉴 및 기능들이 정상적으로 동작하는지 확인한다.

![이미지8](https://imgur.com/R9jro82.png)

## 4. Github Pages 배포

---

로컬 환경에서 잘 동작한다면 이제 웹 상에서도 볼 수 있게 빌드와 배포를 해야한다. 하지만 우리가 할 일은 별로 없고 Github 서버에서 자동으로 돌아가게 한 번만 세팅하면 된다.  

먼저 내 `github.io` Repository의 **Settings - Pages - Build and deployment**에서 Source를 **Github Actions**로 바꿔준다.

![이미지9](https://imgur.com/GkDi07z.png)

Jekyll 항목에서 **Configure** 버튼을 클릭한다.  

![이미지10](https://imgur.com/eHCO7pj.png)

별도의 수정 없이 **Commit changes...** 버튼을 선택 후 **Commit Changes**로 커밋한다. 이 부분이 자동으로 빌드와 배포를 하게 하는 부분이기 때문에 중요하다.

![이미지11](https://imgur.com/RGLqU0p.png)

![이미지12](https://imgur.com/Mkiw8uM.png)

테스트를 위해 `_posts` 폴더 내 이름이 `YYYY-MM-DD-{제목}.md` 형식의 `.md` 파일 하나를 생성한 뒤 생성된 모든 파일을 Repository에 Push 해준다.  

![이미지13](https://imgur.com/DsZQz1o.png)

Repository의 **Actions** 탭에서 빌드와 배포에 대한 워크플로우를 확인할 수 있다. 배포에는 약 몇 분 가량 시간이 걸린다. 빌드나 배포 중 생기는 문제와 로그는 여기서 확인하면 된다.  
> 배포 중에 문제가 생기면 Github에 등록된 이메일로 알림 메일이 수신된다.
{: .prompt-tip }

![이미지14](https://imgur.com/W30nMKR.png)

빌드 및 배포가 완료되고 난 뒤 Repository의 이름인 `https://{Github-ID}.github.io` 주소로 접속해서 테스트 글 및 블로그 기능이 정상적으로 동작하는 지 확인한다.

<!-- markdownlint-disable -->
> 배포가 완료된 뒤에도 블로그에 바로 적용되지 않는 경우가 있는데, 조금 더 기다리면 블로그 내에 **새 버전의 콘텐츠를 사용할 수 있습니다**라는 팝업 창이 뜬다. **업데이트** 버튼을 눌러 새로고침하면 변경 사항을 확인할 수 있다.
{: .prompt-info }

> ```text
> Error: Can't find stylesheet to import.
>  ╷
>1 │ @use 'vendors/bootstrap';
>  │ ^^^^^^^^^^^^^^^^^^^^^^^^
>  ╵
>  main.bundle.scss 1:1                                                                               @use
>  /home/runner/work/jinhg0214.github.io/jinhg0214.github.io/assets/css/jekyll-theme-chirpy.scss 1:1  root stylesheet 
>  Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/jekyll-theme-chirpy.scss':
>                    Can't find stylesheet to import.
>                    ------------------------------------------------
>      Jekyll 4.4.1   Please append `--trace` to the `build` command 
>                     for any additional information or backtrace. 
>                    ------------------------------------------------
>
> ...
>
> Error: Process completed with exit code 1.
> ```
> GitAction에서 해당 오류로 에러가 발생했다면 파일이 누락된 것이다. `git add assets/js/dist/ _sass/vendors/ -f`로 누락된 파일을 Push하면 해결된다.
{: .prompt-tip }

> 흰 화면에 `--- layout: home # Index page ---`라는 문구만 나온다면 Node.js 모듈이 제대로 설치되었는지, `assets/js/dist` 내 `assets/js/dist/*.min.js` 등의 파일들이 원격 저장소에 Push 됐는지 확인한다.
{: .prompt-tip }
<!-- markdownlint-restore -->

## 5. 마무리

---

Github 블로그는 Git을 통해 버전 관리를 할 수 있고 코딩을 통해 커스터마이징을 할 수 있는 바 개발자로서 어느 정도 재미가 있다고 생각한다. 블로그를 생성하고 꾸미는 등 세팅에 이틀 가량이 걸렸고, 이후에 Github Pages로 블로그를 만드는 사람에게 도움이 되었으면 하는 바 글을 쓰게 되었다. 다음 포스팅은 블로그를 꾸미거나 핵심 기능들을 추가하는 방법에 대해 알아볼 것이다.

공식적인 도움말에 대해서는 [Chirpy Homepage](https://chirpy.cotes.page/)에서 확인하면 되겠다.

> Web Front-end에 대해 잘못된 부분이 있다면 댓글 부탁드립니다.
{: .prompt-info }
