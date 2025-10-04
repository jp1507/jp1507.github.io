---
title: Variable '{{1, 2}' was not properly terminated with regexp
date: 2025-10-04
categories: [Misc, Github Blog]
tags: [github, github blog, jekyll, blog, error, github 블로그, 깃허브, 블로그]
pin: false
math: false
image:
  path: https://imgur.com/l3ku5lP.jpg
---

{% raw %}

## 배포 중 에러 발생

---

포스팅 후 Github Pages 빌드 & 배포 중 다음과 같은 에러가 발생했다.

```text
Liquid Exception: Liquid syntax error (line 41): Variable '{{1, 2}' was not properly terminated with regexp: /\}\}/
```

![이미지1](https://imgur.com/fJPD83H.png)

## 에러 원인

---

발생한 오류의 원인은 `Liquid syntax error`인데 이것은 Jekyll의 Liquid 템플릿 엔진에서 Liquid 문법 오류로 인해 발생한다.  

마크다운 본문에 있는 중괄호(culry brace)가 연속으로 2개 들어가면 Jekyll은 텍스트가 아닌 변수로 인식해서 발생하는 오류였다.

### Liquid Template Language

Jekyll은 Liquid라는 템플릿 언어를 사용한다. 템플릿 언어는 중괄호와 퍼센트 기호를 사용해서 변수나 제어문을 표현한다.

```liquid
<!-- 변수 선언 -->
{% assign var = "liquid" %}

<!-- 변수 출력 -->
Print : {{ var }}!

<!-- 조건문 -->
{% if person.gender == 0 %}
  <p>{{ person.name }} is Male.</p>
{% else %}
  <p>{{ person.name }} is Female.</p>
{% endif %}

<!-- 반복문 -->
{% for char in string %}
  <li>{{char}}</li>
{% endfor %}
```

## 에러 해결

---

본문의 설명을 위해 중괄호 2개로 시작한 부분이 Liquid 문법에 맞게 작성된 것이 아니었기 때문에 발생한 문제이다. 다만 Liquid 문법을 의도해서 쓴 부분이 아니기 때문에 Liquid 문법을 비활성하는 방법으로 해결할 수 있다.

![이미지2](https://imgur.com/CiRlCwT.png)

`{Percent raw Percent}`와 `{Percent endraw Percent}`로 태그 처리된 부분은 Liquid 문법을 비활성화하는 기능을 한다. Liquid 문법이나 다른 템플릿 엔진과 충돌하는 부분에서 유용하게 사용할 수 있다.

{% endraw %}
