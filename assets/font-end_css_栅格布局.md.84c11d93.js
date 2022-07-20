import{_ as e,c as n,o as t,a as i}from"./app.d4eb32af.js";const m='{"title":"\u6805\u683C\u5E03\u5C40","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u62EC","slug":"\u6982\u62EC"},{"level":2,"title":"\u5212\u5206\u533A\u57DF","slug":"\u5212\u5206\u533A\u57DF"},{"level":2,"title":"\u95F4\u9699","slug":"\u95F4\u9699"},{"level":2,"title":"\u7EBF\u63A7\u5236\u5143\u7D20\u4F4D\u7F6E","slug":"\u7EBF\u63A7\u5236\u5143\u7D20\u4F4D\u7F6E"},{"level":3,"title":"\u7ED9\u7EBF\u53D6\u540D","slug":"\u7ED9\u7EBF\u53D6\u540D"},{"level":3,"title":"\u5B9A\u4E49\u8DE8\u5EA6","slug":"\u5B9A\u4E49\u8DE8\u5EA6"},{"level":2,"title":"\u901A\u8FC7\u533A\u57DF\u63A7\u5236\u4F4D\u7F6E","slug":"\u901A\u8FC7\u533A\u57DF\u63A7\u5236\u4F4D\u7F6E"},{"level":3,"title":"\u7ED9\u533A\u57DF\u53D6\u522B\u540D","slug":"\u7ED9\u533A\u57DF\u53D6\u522B\u540D"},{"level":3,"title":"\u533A\u57DF\u547D\u540D\u7B80\u5199","slug":"\u533A\u57DF\u547D\u540D\u7B80\u5199"},{"level":2,"title":"\u5BF9\u9F50\u65B9\u5F0F","slug":"\u5BF9\u9F50\u65B9\u5F0F"},{"level":3,"title":"\u7EC8\u4E8E\u641E\u6E05\u695A\u8FD9\u4E09\u8005\u533A\u522B","slug":"\u7EC8\u4E8E\u641E\u6E05\u695A\u8FD9\u4E09\u8005\u533A\u522B"},{"level":2,"title":"\u7EFC\u5408\u6848\u4F8B","slug":"\u7EFC\u5408\u6848\u4F8B"},{"level":2,"title":"\u9AD8\u7EA7\u4F7F\u7528","slug":"\u9AD8\u7EA7\u4F7F\u7528"},{"level":3,"title":"\u5C01\u88C5\u7684 scss","slug":"\u5C01\u88C5\u7684-scss"},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"},{"level":2,"title":"\u517C\u5BB9\u6027","slug":"\u517C\u5BB9\u6027"}],"relativePath":"font-end/css/\u6805\u683C\u5E03\u5C40.md"}',a={},r=i(`<h1 id="\u6805\u683C\u5E03\u5C40" tabindex="-1">\u6805\u683C\u5E03\u5C40 <a class="header-anchor" href="#\u6805\u683C\u5E03\u5C40" aria-hidden="true">#</a></h1><h2 id="\u6982\u62EC" tabindex="-1">\u6982\u62EC <a class="header-anchor" href="#\u6982\u62EC" aria-hidden="true">#</a></h2><ul><li>\u7EBF <ul><li>\u8BED\u6CD5</li></ul></li><li>\u533A\u57DF <ul><li>\u8BED\u6CD5</li></ul></li></ul><h2 id="\u5212\u5206\u533A\u57DF" tabindex="-1">\u5212\u5206\u533A\u57DF <a class="header-anchor" href="#\u5212\u5206\u533A\u57DF" aria-hidden="true">#</a></h2><div class="language-"><pre><code>display: grid;
grid-template-rows: 100px 100px 100px;
grid-template-columns: 100px 100px 100px;

grid-template-rows: repeat(3, 100px); // 3 \u4E2A 100px

grid-template-rows: repeat(3, 100px 50px); // 100px 50px \u4EA4\u66FF\u51FA\u73B0

grid-template-rows: repeat(auto-fill, 100px); // \u6309\u7167100px, \u8FDB\u884C\u5212\u5206\u586B\u5145

grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: 60px 1fr 60px;

grid-template-columns: 20% 20%;

</code></pre></div><h2 id="\u95F4\u9699" tabindex="-1">\u95F4\u9699 <a class="header-anchor" href="#\u95F4\u9699" aria-hidden="true">#</a></h2><div class="language-"><pre><code>row-gap: 10px; // \u884C\u95F4\u8DDD10px
column-gap: 10px; // \u5217\u95F4\u8DDD10px

gap: 20px 10px; // \u63A7\u5236\u884C\u548C\u5217\u4E4B\u95F4\u7684\u95F4\u9699, \u524D\u884C\u540E\u5217

</code></pre></div><h2 id="\u7EBF\u63A7\u5236\u5143\u7D20\u4F4D\u7F6E" tabindex="-1">\u7EBF\u63A7\u5236\u5143\u7D20\u4F4D\u7F6E <a class="header-anchor" href="#\u7EBF\u63A7\u5236\u5143\u7D20\u4F4D\u7F6E" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;!-- \u5148\u5199\u5F00\u59CB\u7684\u884C\u548C\u5217, \u7136\u540E\u5199\u7ED3\u5C3E\u7684\u884C\u548C\u5217 --&gt;
grid-row-start: 1;
grid-column-start: 1;
grid-row-end: 2;
grid-row-end: 4;
</code></pre></div><h3 id="\u7ED9\u7EBF\u53D6\u540D" tabindex="-1">\u7ED9\u7EBF\u53D6\u540D <a class="header-anchor" href="#\u7ED9\u7EBF\u53D6\u540D" aria-hidden="true">#</a></h3><div class="language-"><pre><code>grid-template-rows: [r1-start] 100px [r1-end r2-start] 100px [r2-end];
&lt;!-- r1-start \u7B2C\u4E00\u884C\u5F00\u59CB\u7684\u7EBF, r1-end\u7B2C\u4E00\u884C\u7ED3\u5C3E\u7684\u7EBF --&gt;

&lt;!-- \u4F7F\u7528\u65B9\u5F0F --&gt;
div:first-child {
  grid-row-start: r1-start;
  grid-column-start: c1-start;
  grid-row-end: r1-end;
  grid-column-end: c1-end;
}

&lt;!-- \u4F7F\u7528repeat\u7684\u60C5\u51B5 --&gt;
grid-template-rows: repeat(3, [r-start] 1fr [r-end]);
grid-template-columns: repeat(3, [c-start] 1fr [c-end]);

div {
  grid-row-start: r-start 1;
  grid-column-start: c-start 1;
}

</code></pre></div><h3 id="\u5B9A\u4E49\u8DE8\u5EA6" tabindex="-1">\u5B9A\u4E49\u8DE8\u5EA6 <a class="header-anchor" href="#\u5B9A\u4E49\u8DE8\u5EA6" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;!-- \u53EA\u9700\u8981\u5B9A\u4E49\u5F00\u59CB\u7684\u4F4D\u7F6E, \u7ED3\u5C3E\u7684\u4F4D\u7F6E\u901A\u8FC7\u8DE8\u5EA6\u6765\u81EA\u52A8\u8BA1\u7B97 --&gt;
.col-7 {
  grid-column-end: span 7;
}
</code></pre></div><h2 id="\u901A\u8FC7\u533A\u57DF\u63A7\u5236\u4F4D\u7F6E" tabindex="-1">\u901A\u8FC7\u533A\u57DF\u63A7\u5236\u4F4D\u7F6E <a class="header-anchor" href="#\u901A\u8FC7\u533A\u57DF\u63A7\u5236\u4F4D\u7F6E" aria-hidden="true">#</a></h2><div class="language-"><pre><code>div:first-child {
  grid-area: 1/1/4/4; // \u5F00\u59CB\u884C/\u5F00\u59CB\u5217/\u7ED3\u675F\u884C/\u7ED3\u675F\u5217
}
</code></pre></div><h3 id="\u7ED9\u533A\u57DF\u53D6\u522B\u540D" tabindex="-1">\u7ED9\u533A\u57DF\u53D6\u522B\u540D <a class="header-anchor" href="#\u7ED9\u533A\u57DF\u53D6\u522B\u540D" aria-hidden="true">#</a></h3><div class="language-"><pre><code>\u540D\u5B57\u76F8\u540C\u7684\u81EA\u52A8\u5408\u5E76\u4E3A\u4E00\u4E2A
.contain {
  grid-template-areas: &quot;header header&quot;
    &quot;nav main&quot;
    &quot;footer footer&quot;;
}

&lt;!-- \u4F7F\u7528 --&gt;

header {
  grid-area: header;
}
</code></pre></div><h3 id="\u533A\u57DF\u547D\u540D\u7B80\u5199" tabindex="-1">\u533A\u57DF\u547D\u540D\u7B80\u5199 <a class="header-anchor" href="#\u533A\u57DF\u547D\u540D\u7B80\u5199" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;!-- \u8868\u793A\u524D\u9762\u4E24\u884C\u7684\u6309\u7167\u91CC\u9762\u7684\u5143\u7D20, \u81EA\u52A8\u6392\u5217, \u6700\u540E\u4E00\u4E2A\u5143\u7D20\u5360\u4E24\u4E2A\u4F4D\u7F6E --&gt;
.con {
  grid-template-areas: &quot;. .&quot;
    &quot;. .&quot;
    &quot;footer footer&quot;;
}
</code></pre></div><h2 id="\u5BF9\u9F50\u65B9\u5F0F" tabindex="-1">\u5BF9\u9F50\u65B9\u5F0F <a class="header-anchor" href="#\u5BF9\u9F50\u65B9\u5F0F" aria-hidden="true">#</a></h2><div class="language-"><pre><code>.item {
  justify-items: center;
  align-items: end;
  &lt;!-- \u7F29\u5199 --&gt;
  place-items: center end;

  justify-content: space-evenly;
  align-content: center;
  &lt;!-- \u7F29\u5199 --&gt;
  place-content: center space-evenly;
}

div:nth-child(4) {
  justify-self: start;
  align-self: center;
  &lt;!-- \u7F29\u5199 --&gt;
  place-self: center start;

}
</code></pre></div><h3 id="\u7EC8\u4E8E\u641E\u6E05\u695A\u8FD9\u4E09\u8005\u533A\u522B" tabindex="-1">\u7EC8\u4E8E\u641E\u6E05\u695A\u8FD9\u4E09\u8005\u533A\u522B <a class="header-anchor" href="#\u7EC8\u4E8E\u641E\u6E05\u695A\u8FD9\u4E09\u8005\u533A\u522B" aria-hidden="true">#</a></h3><p>justify-content, justify-items, justify-self;</p><ol><li>\u524D\u4E24\u4E2A\u662F\u5BF9\u4E8E\u76D2\u5B50\u7684\u5C5E\u6027, \u6700\u540E\u4E00\u4E2A\u662F\u76D2\u5B50\u91CC\u9762\u5143\u7D20\u7684\u5C5E\u6027</li><li>justify-content \u53EF\u4EE5\u7406\u89E3\u4E3A\u5728\u6A2A\u5411\u4E0A\u9762\u5207\u4E86\u51E0\u5200, \u5B83\u63A7\u5236\u7AD6\u7740\u7684\u4E00\u6761\u4E00\u6761\u7684\u5185\u5BB9\u7684\u4F4D\u7F6E</li><li>align-content \u53EF\u4EE5\u7406\u89E3\u4E3A\u5728\u7AD6\u5411\u4E0A\u9762\u5207\u4E86\u51E0\u5200, \u5B83\u63A7\u5236\u6A2A\u7740\u7684\u4E00\u6761\u4E00\u6761\u7684\u5185\u5BB9\u7684\u4F4D\u7F6E</li><li>-items \u8868\u793A\u5143\u7D20\u5728\u6700\u5927\u5BB9\u5668\u6240\u5207\u7684\u5C0F\u5BB9\u5668\u91CC\u9762\u7684\u4F4D\u7F6E</li><li>-self \u8868\u793A\u5355\u72EC\u63A7\u5236\u5143\u7D20\u5728\u6700\u5927\u5BB9\u5668\u6240\u5207\u7684\u5C0F\u5BB9\u5668\u91CC\u9762\u7684\u4F4D\u7F6E</li></ol><p><img src="https://s2.loli.net/2022/06/13/6EuiWQR7jOfzdwn.png" alt=""></p><h2 id="\u7EFC\u5408\u6848\u4F8B" tabindex="-1">\u7EFC\u5408\u6848\u4F8B <a class="header-anchor" href="#\u7EFC\u5408\u6848\u4F8B" aria-hidden="true">#</a></h2><ol><li></li></ol><div class="language-"><pre><code>.con &gt;.item &gt;.icon-item &gt;.icon &gt; img ^ span

 .con {
    display: grid;
    width: 100%;
    height: 210px;
    background-color: #ccc;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    align-content: center;
  }
  .item {
    border: 1px solid #000;
    box-sizing: border-box;
    height: 160px;
  }
  .item:first-child {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  .item .icon-item {
    border: 1px solid #000;
    display: grid;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 8px;
  }
  .icon-item .icon {
    width: 22px;
    height: 22px;
  }
  .icon img {
    width: 100%;
    height: 100%;
  }
</code></pre></div><p><img src="https://s2.loli.net/2022/06/14/Xr5UqWikng14dlv.png" alt=""></p><p>\u52A0\u56FA\u4E86 -content, -items \u4E4B\u95F4\u7684\u7528\u6CD5;</p><ol start="2"><li>\u5B9E\u73B0\u5982\u4E0B\u6548\u679C</li></ol><p><img src="https://s2.loli.net/2022/06/14/MrSktwuKYPmHfg9.png" alt=""></p><p>\u65B9\u6CD5 1:</p><div class="language-"><pre><code>.con {
  display: grid;
  width: 100%;
  height: 620px;
  background-color: #ccc;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  align-content: center;
  grid-template-areas: &quot;nav . . . .&quot;
  &quot;nav . . . .&quot;
}
.item {
  border: 1px solid #000;
  box-sizing: border-box;
}
.item:first-child {
  display: grid;
  grid-area: nav;
  background-color: #fff;
}
</code></pre></div><p>\u65B9\u6CD5 2:</p><div class="language-"><pre><code>.con {
  display: grid;
  width: 100%;
  height: 620px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  align-content: center;
}
.item:first-child {
  display: grid;
  grid-area: 1/1/3/2;
}
</code></pre></div><h2 id="\u9AD8\u7EA7\u4F7F\u7528" tabindex="-1">\u9AD8\u7EA7\u4F7F\u7528 <a class="header-anchor" href="#\u9AD8\u7EA7\u4F7F\u7528" aria-hidden="true">#</a></h2><ul><li>\u901A\u8FC7\u5C01\u88C5\u54CD\u5E94\u7684\u7C7B, \u76F4\u63A5\u901A\u8FC7\u5199\u7C7B\u540D\u6765\u5B9E\u73B0\u6240\u6709\u7684\u5E03\u5C40</li><li>\u7C7B\u540D\u53D6\u540D\u7684\u65B9\u5F0F\u91C7\u7528, \u5C5E\u6027-\u503C\u7684\u5F62\u5F0F, \u65B9\u4FBF\u9605\u8BFB</li></ul><p>\u540C\u6837\u662F\u5B9E\u73B0\u4E0A\u9762\u7684\u4F8B\u5B50</p><div class="language-"><pre><code>&lt;div class=&quot;con dis-g col-5 row-2 gap-20 ac-c&quot;&gt;
  &lt;div class=&quot;item rend-2&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;1&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;2&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;3&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;4&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;5&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;6&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;7&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;8&lt;/div&gt;
&lt;/div&gt;

.dis-g {
  display: grid;
}
.col-5 {
  grid-template-columns: repeat(5, 1fr);
}
.row-2 {
  grid-template-rows: repeat(2, 1fr);
}
.gap-20 {
  gap: 20px;
}
.ac-c {
  align-content: center;
}
.rend-2 {
  grid-row-end: span 2;
}
</code></pre></div><h3 id="\u5C01\u88C5\u7684-scss" tabindex="-1">\u5C01\u88C5\u7684 scss <a class="header-anchor" href="#\u5C01\u88C5\u7684-scss" aria-hidden="true">#</a></h3><div class="language-"><pre><code>.dis-g {
  display: grid;
}

@for $i from 1 through 20 {
  .col-#{$i} {
    grid-template-columns: repeat(#{$i}, 1fr);
  }
  .row-#{$i} {
    grid-template-rows: repeat(#{$i}, 1fr);
  }
  .gap-#{$i} {
    gap: 1px * #{$i};
  }
  .r-gap-#{$i} {
    row-gap: 1px * #{$i};
  }
  .c-gap-#{$i} {
    column-gap: 1px * #{$i};
  }
  .gre-#{$i} {
    grid-row-end: span #{$i};
  }
  .gce-#{$i} {
    grid-column-end: span #{$i};
  }
}
.ac-c {
  align-content: center;
}
.jc-c {
  justify-content: center;
}
.ai-c {
  align-items: center;
}
.ji-c {
  justify-items: center;
}

</code></pre></div><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><ol><li>grid-row-end \u53EF\u4EE5\u6BD4\u8F83\u65B9\u4FBF\u7684\u7528\u4E8E\u9879\u76EE\u7684\u5C01\u88C5\u4F7F\u7528</li><li>\u7C7B\u540D\u7684\u547D\u540D\u65B9\u5F0F\u5F97\u7EDF\u4E00</li></ol><h2 id="\u517C\u5BB9\u6027" tabindex="-1">\u517C\u5BB9\u6027 <a class="header-anchor" href="#\u517C\u5BB9\u6027" aria-hidden="true">#</a></h2><p>ie11 \u4E0D\u884C, \u9664\u4E86 ie \u652F\u6301\u90FD\u6BD4\u8F83\u9AD8</p><p>\u6B22\u8FCE\u8BBF\u95EE <a href="http://www.jslin.cn" target="_blank" rel="noopener noreferrer">\u4E2A\u4EBA\u535A\u5BA2</a></p>`,47),l=[r];function d(s,o,c,g,p,h){return t(),n("div",null,l)}var f=e(a,[["render",d]]);export{m as __pageData,f as default};
