---
layout: compress
# WARNING: Don't use '//' to comment out code, use '{% comment %}' and '{% endcomment %}' instead.
---

{%- comment -%}
  See: <https://docs.mathjax.org/en/latest/options/input/tex.html#tex-options>
{%- endcomment -%}

MathJax = {
  tex: {
    {%- comment -%} start/end delimiter pairs for in-line math {%- endcomment -%}
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    {%- comment -%} start/end delimiter pairs for display math {%- endcomment -%}
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    {%- comment -%} equation numbering {%- endcomment -%}
    tags: 'ams'
  },
  loader: {
    load: ['[tex]/ams', 'output/svg'] // MathJax가 SVG 출력을 로드하도록 지시
  },
  startup: {
    ready() {
      MathJax.startup.defaultOutput = 'svg'; // 기본 출력 모드를 SVG로 설정
      MathJax.startup.defaultReady();
    }
  }
};
