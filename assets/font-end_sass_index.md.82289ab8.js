import{_ as n,c as s,o as a,a as p}from"./app.d4eb32af.js";const f='{"title":"\u5B89\u88C5:","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D8\u91CF","slug":"\u53D8\u91CF"},{"level":2,"title":"\u8BA1\u7B97","slug":"\u8BA1\u7B97"},{"level":2,"title":"\u7EE7\u627F","slug":"\u7EE7\u627F"},{"level":2,"title":"\u6DF7\u5165","slug":"\u6DF7\u5165"},{"level":2,"title":"\u63D2\u503C #{}","slug":"\u63D2\u503C"},{"level":2,"title":"\u6DF7\u5165\u9AD8\u7EA7\u7528\u6CD5(\u4F20\u53C2, \u7ED9\u5B9A\u9ED8\u8BA4\u503C)","slug":"\u6DF7\u5165\u9AD8\u7EA7\u7528\u6CD5-\u4F20\u53C2-\u7ED9\u5B9A\u9ED8\u8BA4\u503C"},{"level":2,"title":"\u6DF7\u5165\u672A\u77E5\u53C2\u6570","slug":"\u6DF7\u5165\u672A\u77E5\u53C2\u6570"},{"level":2,"title":"if else","slug":"if-else"},{"level":2,"title":"for\u5FAA\u73AF","slug":"for\u5FAA\u73AF"},{"level":2,"title":"each","slug":"each"},{"level":2,"title":"\u9879\u76EE\u4E2D\u5B9E\u6218, \u7528\u6765\u89E3\u51B3\u4E0D\u540C\u5206\u8FA8\u7387\u663E\u793A\u7684\u5BBD\u5EA6","slug":"\u9879\u76EE\u4E2D\u5B9E\u6218-\u7528\u6765\u89E3\u51B3\u4E0D\u540C\u5206\u8FA8\u7387\u663E\u793A\u7684\u5BBD\u5EA6"},{"level":2,"title":"sass \u8F6C\u4E3A\u767E\u5206\u53F7","slug":"sass-\u8F6C\u4E3A\u767E\u5206\u53F7"}],"relativePath":"font-end/sass/index.md"}',t={},e=p(`<p>\u8BB0\u5F55sass\u7684\u57FA\u7840\u7528\u6CD5 <a href="https://blog.csdn.net/longzhoufeng/article/details/72354760" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/longzhoufeng/article/details/72354760</a> \u51FD\u6570\u5BF9\u8C61\u6570\u7EC4\u90E8\u5206\u8BB2\u5F97\u4E0D\u9519</p><h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5: <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1><p>npm install sass</p><h1 id="\u7F16\u8BD1" tabindex="-1">\u7F16\u8BD1 <a class="header-anchor" href="#\u7F16\u8BD1" aria-hidden="true">#</a></h1><p>sass test.scss test.css</p><h1 id="\u76D1\u542C\u5E76\u4E14\u7F16\u8BD1" tabindex="-1">\u76D1\u542C\u5E76\u4E14\u7F16\u8BD1 <a class="header-anchor" href="#\u76D1\u542C\u5E76\u4E14\u7F16\u8BD1" aria-hidden="true">#</a></h1><p>sass --watch input.scss:output.css</p><h1 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5: <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a></h2><p>$color: #fff;</p><div class="language-scss"><pre><code><span class="token selector">div </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8BA1\u7B97" tabindex="-1">\u8BA1\u7B97 <a class="header-anchor" href="#\u8BA1\u7B97" aria-hidden="true">#</a></h2><p>\u80FD\u591F\u5B9E\u73B0\u7B80\u5355\u7684\u8BA1\u7B97\u529F\u80FD, \u4F46\u662F\u6CA1\u6709calc\u5F3A\u5927</p><div class="language-scss"><pre><code><span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>100px <span class="token operator">-</span> 90px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u7EE7\u627F" tabindex="-1">\u7EE7\u627F <a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token selector">.class1 </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class2 </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .class1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6DF7\u5165" tabindex="-1">\u6DF7\u5165 <a class="header-anchor" href="#\u6DF7\u5165" aria-hidden="true">#</a></h2><div class="language-"><pre><code>
@mixin left {
    float: left;
}
.right {
    @include left;
}

</code></pre></div><h2 id="\u63D2\u503C" tabindex="-1">\u63D2\u503C #{} <a class="header-anchor" href="#\u63D2\u503C" aria-hidden="true">#</a></h2><div class="language-css"><pre><code>$<span class="token property">name</span><span class="token punctuation">:</span> foo<span class="token punctuation">;</span>
$<span class="token property">attr</span><span class="token punctuation">:</span> border<span class="token punctuation">;</span>

<span class="token selector">p.#</span><span class="token punctuation">{</span>$name<span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token selector">#</span><span class="token punctuation">{</span>$attr<span class="token punctuation">}</span><span class="token property">-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
    $<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    $<span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token selector">font: #</span><span class="token punctuation">{</span>$font-size<span class="token punctuation">}</span><span class="token selector">/#</span><span class="token punctuation">{</span>$line-height<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6DF7\u5165\u9AD8\u7EA7\u7528\u6CD5-\u4F20\u53C2-\u7ED9\u5B9A\u9ED8\u8BA4\u503C" tabindex="-1">\u6DF7\u5165\u9AD8\u7EA7\u7528\u6CD5(\u4F20\u53C2, \u7ED9\u5B9A\u9ED8\u8BA4\u503C) <a class="header-anchor" href="#\u6DF7\u5165\u9AD8\u7EA7\u7528\u6CD5-\u4F20\u53C2-\u7ED9\u5B9A\u9ED8\u8BA4\u503C" aria-hidden="true">#</a></h2><div class="language-"><pre><code>
@mixin ml($val: 20px) {
    margin-left: $val;
}
.right {
    @include ml;
}
</code></pre></div><h2 id="\u6DF7\u5165\u672A\u77E5\u53C2\u6570" tabindex="-1">\u6DF7\u5165\u672A\u77E5\u53C2\u6570 <a class="header-anchor" href="#\u6DF7\u5165\u672A\u77E5\u53C2\u6570" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token comment">// scss</span>
<span class="token keyword">@mixin</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token variable">$shadows</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.shadows </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="if-else" tabindex="-1">if else <a class="header-anchor" href="#if-else" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token comment">// scss</span>
<span class="token property"><span class="token variable">$type</span></span><span class="token punctuation">:</span> monster<span class="token punctuation">;</span>
<span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$type</span> == ocean </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == matador </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == monster </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="for\u5FAA\u73AF" tabindex="-1">for\u5FAA\u73AF <a class="header-anchor" href="#for\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token comment">// scss</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
  <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 2em <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="each" tabindex="-1">each <a class="header-anchor" href="#each" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token comment">// scss</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$animal</span> in puma, sea-slug, egret, salamander </span><span class="token punctuation">{</span>
  <span class="token selector">.<span class="token variable">#{$animal}</span>-icon </span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&#39;/images/#{$animal}.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u9879\u76EE\u4E2D\u5B9E\u6218-\u7528\u6765\u89E3\u51B3\u4E0D\u540C\u5206\u8FA8\u7387\u663E\u793A\u7684\u5BBD\u5EA6" tabindex="-1">\u9879\u76EE\u4E2D\u5B9E\u6218, \u7528\u6765\u89E3\u51B3\u4E0D\u540C\u5206\u8FA8\u7387\u663E\u793A\u7684\u5BBD\u5EA6 <a class="header-anchor" href="#\u9879\u76EE\u4E2D\u5B9E\u6218-\u7528\u6765\u89E3\u51B3\u4E0D\u540C\u5206\u8FA8\u7387\u663E\u793A\u7684\u5BBD\u5EA6" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token keyword">@mixin</span> <span class="token function">sn</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$screen</span></span><span class="token punctuation">:</span> infinite<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token variable">$screen</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span> <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-scss"><pre><code><span class="token selector">.item </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">sn</span><span class="token punctuation">(</span>3000<span class="token punctuation">,</span> 32%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">@include</span> <span class="token function">sn</span><span class="token punctuation">(</span>1500<span class="token punctuation">,</span> 48%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">@include</span> <span class="token function">sn</span><span class="token punctuation">(</span>1000<span class="token punctuation">,</span> 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="sass-\u8F6C\u4E3A\u767E\u5206\u53F7" tabindex="-1">sass \u8F6C\u4E3A\u767E\u5206\u53F7 <a class="header-anchor" href="#sass-\u8F6C\u4E3A\u767E\u5206\u53F7" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token selector">.w<span class="token variable">#{$width}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span> <span class="token operator">+</span> 0%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div>`,35),o=[e];function c(l,i,u,r,k,d){return a(),s("div",null,o)}var v=n(t,[["render",c]]);export{f as __pageData,v as default};
