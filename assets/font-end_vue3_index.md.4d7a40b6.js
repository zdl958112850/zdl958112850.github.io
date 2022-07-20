import{_ as n,c as s,o as a,a as t}from"./app.d4eb32af.js";const g='{"title":"\u521B\u5EFA\u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6267\u884C\u65F6\u671F","slug":"\u6267\u884C\u65F6\u671F"},{"level":2,"title":"setup \u4E2D\u7684\u53C2\u6570","slug":"setup-\u4E2D\u7684\u53C2\u6570"}],"relativePath":"font-end/vue3/index.md"}',p={},o=t(`<h1 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h1><p><code>npm init vite-app &lt;project-name&gt;</code></p><h1 id="vue2-\u7684\u54CD\u5E94\u5F0F-vue3" tabindex="-1">vue2 \u7684\u54CD\u5E94\u5F0F vue3 <a class="header-anchor" href="#vue2-\u7684\u54CD\u5E94\u5F0F-vue3" aria-hidden="true">#</a></h1><p>\u901A\u8FC7 Object.defineProperty \u8FD9\u4E2A\u65B9\u6CD5\u6765\u5B9E\u73B0\u7684, \u4F1A\u628A\u5BF9\u8C61\u91CC\u9762\u5B58\u5728\u7684\u5C5E\u6027\u8FDB\u884C\u8BFB\u53D6\u548C\u66F4\u6539, \u7136\u540E\u8FDB\u884C\u52AB\u6301, \u95EE\u9898: \u548B\u4EEC\u5BF9\u76EE\u6807\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u8BFB\u53D6\u548C\u4FEE\u6539\u4F1A\u5206\u522B\u8FDB\u5165 get \u548C set \u65B9\u6CD5, \u4F46\u662F\u6211\u4EEC\u5BF9\u65B0\u589E\u7684\u5C5E\u6027\u6216\u8005\u5220\u9664\u67D0\u4E2A\u5C5E\u6027\u7684\u65F6\u5019, \u754C\u9762\u662F\u4E0D\u4F1A\u66F4\u65B0\u7684;</p><p>\u5BF9\u4E8E\u6570\u7EC4: \u6570\u7EC4\uFF1A\u901A\u8FC7\u91CD\u5199\u6570\u7EC4\u66F4\u65B0\u6570\u7EC4\u4E00\u7CFB\u5217\u66F4\u65B0\u5143\u7D20\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\u5143\u7D20\u4FEE\u6539\u7684\u52AB\u6301 \u5728 vue2 \u4E2D\u60F3\u8981\u628A\u666E\u901A\u6570\u7EC4\u8F6C\u4E3A\u54CD\u5E94\u5F0F\u6570\u7EC4, \u8981\u5BF9\u6570\u7EC4\u4E2D\u7684\u539F\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u7684\u8BDD, \u9700\u8981\u628A\u66F4\u6539\u539F\u6570\u7EC4\u7684\u66F4\u6539\u65B9\u6CD5\u8FDB\u884C\u91CD\u5199\u64CD\u4F5C, \u4ECE\u800C\u5B9E\u73B0\u5143\u7D20\u7684\u4FEE\u6539\u548C\u52AB\u6301, \u95EE\u9898: \u5F53\u76F4\u63A5\u901A\u8FC7\u4E0B\u6807\u66FF\u6362\u5143\u7D20\u6216\u8005\u66F4\u65B0 length \u7684\u65F6\u5019\u4E5F\u6CA1\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8, \u6BD4\u5982 arr[1] = {} vue2 \u4E2D\u5C31\u5F15\u5165\u4E86 set \u65B9\u6CD5\u6765\u5B9E\u73B0</p><p>vue3 \u4E2D\u5B9E\u73B0\u65B9\u5F0F: \u901A\u8FC7 proxy \u4EE3\u7406\u5BF9\u8C61\u548C reflect(\u53CD\u5C04)\u6765\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F\u4EE3\u7406\u7684\u64CD\u4F5C \u4F20\u5165\u4E24\u4E2A\u53C2\u6570: target \u548C handler, target \u5C31\u662F\u76EE\u6807\u5BF9\u8C61, handler \u5C31\u662F\u4E00\u4E2A\u5904\u7406\u5668\u5BF9\u8C61, \u91CC\u9762\u6709\u7528\u4E8E\u76D1\u89C6\u6570\u636E\u7684\u65B9\u6CD5;</p><p>reflect \u53CD\u5C04\u5BF9\u8C61, \u53EF\u4EE5\u628A\u76EE\u6807\u5BF9\u8C61\u76F8\u5173\u7684\u5C5E\u6027\u548C\u5C5E\u6027\u503C\u53CD\u5C04\u8FC7\u6765, \u662F\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\u4E0D\u80FD new, \u901A\u8FC7\u76F4\u63A5\u8C03\u7528\u91CC\u9762\u7684\u9759\u6001\u65B9\u6CD5</p><h1 id="vue3-\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u6838\u5FC3\u539F\u7406" tabindex="-1">vue3 \u7684\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u6838\u5FC3\u539F\u7406 <a class="header-anchor" href="#vue3-\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u6838\u5FC3\u539F\u7406" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
  <span class="token literal-property property">wife</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xiaoying&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> proxyUser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FDB\u5165\u4EE3\u7406&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// target \u76EE\u6807\u5BF9\u8C61, prop\u53C2\u6570\u540D\u79F0, val\u66F4\u6539\u7684\u503C</span>
  <span class="token comment">// set\u5BF9\u8C61\u4E0D\u4EC5\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\u503C, \u8FD8\u53EF\u4EE5\u6DFB\u52A0\u5C5E\u6027\u503C</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FDB\u5165set&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5220\u9664\u76EE\u6807\u5BF9\u8C61\u7684\u5C5E\u6027\u4F1A\u8FDB\u5165</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5220\u9664\u76EE\u6807\u5BF9\u8C61&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> proxyUser<span class="token punctuation">.</span>name
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
proxyUser<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">3432</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>
proxyUser<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&#39;\u7537&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;proxyUser&#39;</span><span class="token punctuation">,</span> proxyUser<span class="token punctuation">)</span>
<span class="token keyword">delete</span> proxyUser<span class="token punctuation">.</span>sex
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;proxyUser&#39;</span><span class="token punctuation">,</span> proxyUser<span class="token punctuation">)</span>
<span class="token comment">// \u53EF\u4EE5\u6DF1\u5EA6\u68C0\u6D4B</span>
<span class="token keyword">delete</span> proxyUser<span class="token punctuation">.</span>wife
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;proxyUser&#39;</span><span class="token punctuation">,</span> proxyUser<span class="token punctuation">)</span>
</code></pre></div><h1 id="vue2-\u548C-vue3-\u6548\u7387" tabindex="-1">Vue2 \u548C Vue3 \u6548\u7387 <a class="header-anchor" href="#vue2-\u548C-vue3-\u6548\u7387" aria-hidden="true">#</a></h1><p>vue2 \u901A\u8FC7\u5FAA\u73AF\u904D\u5386\u7ED9\u5BF9\u8C61\u6DFB\u52A0 get \u548C set, \u5047\u8BBE\u5BF9\u8C61\u91CC\u9762\u6709\u4E00\u4E07\u4E2A\u5C5E\u6027, \u5C31\u5F97\u6DFB\u52A0\u4E00\u4E07\u5BF9 get \u548C set, \u800C proxy \u53EA\u7528\u6DFB\u52A0\u4E00\u4E2A\u5C31\u53EF\u4EE5</p><h1 id="setup-\u7684\u7EC6\u8282" tabindex="-1">setup \u7684\u7EC6\u8282 <a class="header-anchor" href="#setup-\u7684\u7EC6\u8282" aria-hidden="true">#</a></h1><h2 id="\u6267\u884C\u65F6\u671F" tabindex="-1">\u6267\u884C\u65F6\u671F <a class="header-anchor" href="#\u6267\u884C\u65F6\u671F" aria-hidden="true">#</a></h2><p>setup \u51FD\u6570\u5728 beforeCreate \u4E4B\u524D\u5C31\u6267\u884C, \u5F53\u524D\u7684\u7EC4\u4EF6\u8FD8\u6CA1\u6709\u521B\u5EFA\u51FA\u6765, \u7EC4\u4EF6\u7684 this \u8FD8\u6CA1\u6709</p><h2 id="setup-\u4E2D\u7684\u53C2\u6570" tabindex="-1">setup \u4E2D\u7684\u53C2\u6570 <a class="header-anchor" href="#setup-\u4E2D\u7684\u53C2\u6570" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// props \u8868\u793A\u7236\u7EA7\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570</span>
    <span class="token comment">// context\u662F\u4E00\u4E2A\u5BF9\u8C61\u91CC\u9762\u6709: attrs \u8868\u793A\u9664\u4E86props\u4E2D\u5305\u542B\u7684\u5176\u4F59\u5C5E\u6027\u7684\u5BF9\u8C61, emit\u65B9\u6CD5(\u5206\u53D1\u4E8B\u4EF6), slots\u5BF9\u8C61(\u63D2\u69FD)</span>
<span class="token punctuation">}</span>
</code></pre></div><h1 id="ref-\u548C-reactive-\u7684\u7EC6\u8282\u95EE\u9898" tabindex="-1">ref \u548C reactive \u7684\u7EC6\u8282\u95EE\u9898 <a class="header-anchor" href="#ref-\u548C-reactive-\u7684\u7EC6\u8282\u95EE\u9898" aria-hidden="true">#</a></h1><p>ref \u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5417? \u53EF\u4EE5, \u4E5F\u4F1A\u4F7F\u7528 reactive \u8FDB\u884C\u5904\u7406, \u9875\u9762\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u7528\u6DFB\u52A0.value ref \u5185\u90E8\uFF1A\u901A\u8FC7\u7ED9 value \u5C5E\u6027\u6DFB\u52A0 getter/setter \u6765\u5B9E\u73B0\u5BF9\u6570\u636E\u7684\u52AB\u6301 reactive \u5185\u90E8\uFF1A\u901A\u8FC7\u4F7F\u7528 Proxy \u6765\u5B9E\u73B0\u5BF9\u5BF9\u8C61\u5185\u90E8\u6240\u6709\u6570\u636E\u7684\u52AB\u6301\uFF0C\u5E76\u901A\u8FC7 Reflect \u64CD\u4F5C\u5BF9\u8C61\u5185\u90E8\u6570\u636E ref \u7684\u6570\u636E\u64CD\u4F5C\uFF1A\u5728 js \u4E2D\u8981.value, \u5728\u6A21\u677F\u4E2D\u4E0D\u9700\u8981(\u5185\u90E8\u89E3\u6790\u6A21\u677F\u65F6\u4F1A\u81EA\u52A8\u6DFB\u52A0.value)</p><h1 id="\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528" tabindex="-1">\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> age<span class="token punctuation">.</span>value <span class="token operator">+</span> name<span class="token punctuation">.</span>value
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fullName2 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;_&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> names <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
    user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">// \u7B2C\u4E00\u4E2A\u53C2\u6570\u8868\u793A\u76D1\u89C6\u7684\u5BF9\u8C61, \u7B2C\u4E8C\u4E2A\u53C2\u6570val\u8868\u793AnewV</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  user<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    fullName3<span class="token punctuation">.</span>value <span class="token operator">=</span> val<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;_&#39;</span> <span class="token operator">+</span> val<span class="token punctuation">.</span>lastName
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// watch\u6548\u679C\u662F\u5426\u7ACB\u5373\u6267\u884C</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u6DF1\u5EA6\u76D1\u89C6</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u4E0D\u7528\u914D\u7F6E immediate, \u9ED8\u8BA4\u6267\u884C\u4E00\u6B21</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  fullName<span class="token punctuation">.</span>value <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;_&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// watch\u53EF\u4EE5\u76D1\u89C6\u591A\u4E2A\u6570\u636E</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F46\u662F\u8FD9\u91CC\u7684\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C, \u56E0\u4E3A user.name user.lastName\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u76D1\u542C\u54CD\u5E94\u5F0F\u7684\u5E94\u8BE5\u8FD9\u6837\u5199</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u91CC\u4F1A\u6267\u884C&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="\u751F\u547D\u5468\u671F" tabindex="-1">\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h1><div class="language-js"><pre><code>beforeCreate <span class="token operator">-</span> <span class="token operator">&gt;</span> \u4F7F\u7528 <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
created <span class="token operator">-</span> <span class="token operator">&gt;</span> \u4F7F\u7528 <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
beforeMount <span class="token operator">-</span> <span class="token operator">&gt;</span> onBeforeMount
mounted <span class="token operator">-</span> <span class="token operator">&gt;</span> onMounted
beforeUpdate <span class="token operator">-</span> <span class="token operator">&gt;</span> onBeforeUpdate
updated <span class="token operator">-</span> <span class="token operator">&gt;</span> onUpdated
beforeDestroy <span class="token operator">-</span> <span class="token operator">&gt;</span> onBeforeUnmount
destroyed <span class="token operator">-</span> <span class="token operator">&gt;</span> onUnmounted
errorCaptured <span class="token operator">-</span> <span class="token operator">&gt;</span> onErrorCaptured
</code></pre></div><p>onBeforeMount \u8981\u6BD4 beforeMount \u5FEB</p><h1 id="hook-\u51FD\u6570-\u7C7B\u4F3C\u4EE5\u524D\u7684-mixin" tabindex="-1">hook \u51FD\u6570, \u7C7B\u4F3C\u4EE5\u524D\u7684 mixin <a class="header-anchor" href="#hook-\u51FD\u6570-\u7C7B\u4F3C\u4EE5\u524D\u7684-mixin" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">// useClick.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">clickFn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> mouseEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> event<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> event<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> clickFn<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> clickFn<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">return</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span>
    y
<span class="token punctuation">}</span>

<span class="token comment">// App.vue</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">,</span>
        y
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">,</span>
        y
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h1 id="torefs-\u53EF\u4EE5\u628A-reactive-\u5305\u8FC7\u7684\u6570\u636E\u8F6C\u4E3A\u666E\u901A\u5BF9\u8C61-\u800C\u4E14\u5BF9\u8C61\u91CC\u9762\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u90FD\u662F\u4E00\u4E2A-ref" tabindex="-1">toRefs \u53EF\u4EE5\u628A reactive \u5305\u8FC7\u7684\u6570\u636E\u8F6C\u4E3A\u666E\u901A\u5BF9\u8C61, \u800C\u4E14\u5BF9\u8C61\u91CC\u9762\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u90FD\u662F\u4E00\u4E2A ref <a class="header-anchor" href="#torefs-\u53EF\u4EE5\u628A-reactive-\u5305\u8FC7\u7684\u6570\u636E\u8F6C\u4E3A\u666E\u901A\u5BF9\u8C61-\u800C\u4E14\u5BF9\u8C61\u91CC\u9762\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u90FD\u662F\u4E00\u4E2A-ref" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;iaghna&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
        name
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>ref \u8FD8\u53EF\u4EE5\u83B7\u53D6\u5143\u7D20</p><div class="language-js"><pre><code><span class="token comment">// \u83B7\u53D6\u5230input\u5143\u7D20, \u5E76\u4E14\u83B7\u5F97\u7126\u70B9</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> ref <span class="token operator">&lt;</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u5316\u7684\u65F6\u5019\u662Fnull, \u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u4E4B\u540E\u4FBF\u662F\u4E00\u4E2AhtmlElement\u5143\u7D20</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        input<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> input<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        input
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h1 id="toraw-\u548C-markraw" tabindex="-1">toRaw \u548C markRaw <a class="header-anchor" href="#toraw-\u548C-markraw" aria-hidden="true">#</a></h1><p>toRaw \u628A\u4EE3\u7406\u5BF9\u8C61\u53D8\u4E3A\u666E\u901A\u5BF9\u8C61, \u6570\u636E\u4E0D\u518D\u8FDB\u884C\u54CD\u5E94\u5F0F\u53D8\u5316</p><p>markRaw \u6807\u8BB0\u7684\u5BF9\u8C61\u6570\u636E, \u4ECE\u6B64\u4EE5\u540E\u90FD\u4E0D\u80FD\u53D8\u4E3A\u4EE3\u7406\u5BF9\u8C61</p><h1 id="ref-\u548C-toref" tabindex="-1">ref \u548C toRef <a class="header-anchor" href="#ref-\u548C-toref" aria-hidden="true">#</a></h1><p>ref \u53EF\u4EE5\u628A\u5BF9\u8C61\u7684\u5C5E\u6027\u5355\u72EC\u5305\u88C5, \u53D8\u6210\u4E00\u4E2A ref \u5BF9\u8C61</p><div class="language-js"><pre><code><span class="token comment">// \u628Astate\u4E2D\u7684monoey\u5355\u72EC\u62F7\u8D1D\u4E00\u4EFD, \u8D4B\u503C\u7ED9money, \u4E24\u4E2A\u6570\u636E\u53D1\u751F\u6539\u53D8\u540E\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD</span>
<span class="token keyword">const</span> money <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>money<span class="token punctuation">)</span>
<span class="token comment">// \u53EA\u662F\u5C06age\u5C5E\u6027\u8F6C\u4E3Aref\u5BF9\u8C61, age\u6539\u53D8\u540Estate\u4E2D\u7684age\u4F1A\u76F8\u4E92\u5F71\u54CD</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="customref-\u81EA\u5B9A\u4E49-ref-\u81EA\u5B9A\u4E49-ref-\u7684\u5B9E\u73B0-\u5DF2\u8FBE\u5230\u5EF6\u65F6\u64CD\u4F5C" tabindex="-1">customRef \u81EA\u5B9A\u4E49 ref, \u81EA\u5B9A\u4E49 ref \u7684\u5B9E\u73B0, \u5DF2\u8FBE\u5230\u5EF6\u65F6\u64CD\u4F5C <a class="header-anchor" href="#customref-\u81EA\u5B9A\u4E49-ref-\u81EA\u5B9A\u4E49-ref-\u7684\u5B9E\u73B0-\u5DF2\u8FBE\u5230\u5EF6\u65F6\u64CD\u4F5C" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    customRef
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> useDebouncedRef <span class="token operator">&lt;</span> <span class="token constant">T</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token literal-property property">timeOutId</span><span class="token operator">:</span> number

    <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeOutId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            timeOutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                value <span class="token operator">=</span> newValue
                <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h1 id="provide-\u548C-inject" tabindex="-1">provide \u548C inject <a class="header-anchor" href="#provide-\u548C-inject" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">// \u5728\u7236\u7EC4\u4EF6\u4E2D</span>
<span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> color<span class="token punctuation">)</span>
<span class="token comment">// \u5728\u5B59\u5B50\u7EC4\u4EF6\u4E2D</span>
<span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h1 id="\u54CD\u5E94\u5F0F\u6570\u636E\u5224\u65AD" tabindex="-1">\u54CD\u5E94\u5F0F\u6570\u636E\u5224\u65AD <a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u6570\u636E\u5224\u65AD" aria-hidden="true">#</a></h1><p>isRef: \u68C0\u67E5\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u4E00\u4E2A ref \u5BF9\u8C61 isReactive: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 reactive \u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406 isReadonly: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 readonly \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406 isProxy: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 reactive \u6216\u8005 readonly \u65B9\u6CD5\u521B\u5EFA\u7684\u4EE3\u7406</p><h1 id="teleport-\u77AC\u79FB\u7EC4\u4EF6" tabindex="-1">Teleport \u77AC\u79FB\u7EC4\u4EF6 <a class="header-anchor" href="#teleport-\u77AC\u79FB\u7EC4\u4EF6" aria-hidden="true">#</a></h1><div class="language-html"><pre><code><span class="token comment">&lt;!-- \u53EF\u4EE5\u5C06\u8BE5\u90E8\u5206\u7EC4\u4EF6\u63D2\u5230body\u4E2D --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modalOpen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Teleport</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h1 id="suspense-\u4E0D\u786E\u5B9A\u7EC4\u4EF6" tabindex="-1">Suspense \u4E0D\u786E\u5B9A\u7EC4\u4EF6 <a class="header-anchor" href="#suspense-\u4E0D\u786E\u5B9A\u7EC4\u4EF6" aria-hidden="true">#</a></h1><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span> \u5F02\u6B65\u7EC4\u4EF6 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>fallback</span><span class="token punctuation">&gt;</span></span> loading \u7684\u5185\u5BB9 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,47),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
