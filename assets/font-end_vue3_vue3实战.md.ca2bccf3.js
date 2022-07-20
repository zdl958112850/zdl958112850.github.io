import{_ as n,c as s,o as a,a as p}from"./app.d4eb32af.js";const g='{"title":"\u6848\u4F8B HelloWorld","description":"","frontmatter":{},"headers":[],"relativePath":"font-end/vue3/vue3\u5B9E\u6218.md"}',t={},o=p(`<h1 id="\u6848\u4F8B-helloworld" tabindex="-1">\u6848\u4F8B HelloWorld <a class="header-anchor" href="#\u6848\u4F8B-helloworld" aria-hidden="true">#</a></h1><p>npm init vite-app demo</p><div class="language-js"><pre><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">handleCountAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5728\u9875\u9762\u6302\u5728\u7684\u65F6\u5019</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">,</span>
        handleCountAdd<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><ul><li><p>ref\u628A\u6570\u5B57\u6216\u8005\u5B57\u7B26\u4E32\u53D8\u4E3A\u54CD\u5E94\u5F0F</p></li><li><p>reactive \u5C06\u5BF9\u8C61\u8F6C\u4E3A\u54CD\u5E94\u5F0F</p></li><li><p>toRefs \u8F6C\u6362\u8BB8\u591A\u5C5E\u6027, <code>return {num, changeNum, ..toRefs(user)}</code></p></li><li><p>computed</p></li></ul><div class="language-js"><pre><code><span class="token comment">// \u7FFB\u8F6C\u4E00\u4E2A\u5B57\u7B26\u4E32</span>
<span class="token literal-property property">reverse</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> user<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>watch</li></ul><div class="language-js"><pre><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53user.type\u6539\u53D8\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u51FD\u6570</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5355\u72EC\u76D1\u542C</span>
<span class="token function">watch</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newNum<span class="token punctuation">,</span> prevNum</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">,</span> prevNum<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F53num\u6539\u53D8\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1\u6267\u884C\u6B64\u51FD\u6570&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//\u591A\u4E2A\u76D1\u542C</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>num<span class="token punctuation">,</span> user<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newNum<span class="token punctuation">,</span> prevNum</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNum<span class="token punctuation">,</span> prevNum<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\u5F53num\u6539\u53D8\u65F6\u5019\uFF0C \u4F1A\u89E6\u53D1\u6267\u884C\u6B64\u51FD\u6570<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>props</li></ul><div class="language-js"><pre><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><ul><li>\u751F\u547D\u5468\u671F</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    onBeforeMount
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;TCL: =======&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u9875\u9762\u6570\u636E\u521D\u59CB\u5316\u4E86&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E3B\u8981\u7684\u751F\u547D\u5468\u671F\u6709:  onBeforeMount, onMounted, onbeforeUpdate, onBeforeUnmount, onUnmounted</span>
</code></pre></div><ul><li>inject provide</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    inject<span class="token punctuation">,</span>
    provide
<span class="token punctuation">}</span>
form <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;student&#39;</span><span class="token punctuation">,</span> student<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6CE8\u5165</span>
<span class="token keyword">let</span> student <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;student&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u8DEF\u7531 npm i vite-app vue3Route01</li></ul><blockquote><p>npm install vue-router@next</p></blockquote><p>\u52A8\u6001\u8DEF\u7531:</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/news/:id&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> News
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// \u901A\u8FC7 this.$route.params \u6765\u83B7\u53D6</span>

<span class="token comment">// \u672A\u5339\u914D\u5185\u5BB9</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/(.*)&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> NotFound
<span class="token punctuation">}</span>
</code></pre></div><ul><li>history \u6A21\u5F0F</li></ul><p>createWebHistory \u95EE\u9898: \u5F53\u5237\u65B0\u9875\u9762\u7684\u65F6\u5019, \u90FD\u8981\u8FD4\u56DE\u6211\u4EEC\u7684\u9996\u9875, \u8BA9js\u53BB\u5224\u65AD\u663E\u793A\u4EC0\u4E48\u5185\u5BB9, \u800C\u4E0D\u662F404</p><ul><li>\u5BFC\u822A\u5B88\u536B \u6BCF\u6B21\u8DF3\u8F6C\u9875\u9762\u7684\u65F6\u5019\u90FD\u4F1A\u7ECF\u8FC7\u8FD9\u4E2A\u65B9\u6CD5</li></ul><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> form<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// return next()</span>
    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> form<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u8DEF\u7531\u66F4\u65B0</span>
<span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u8DEF\u7531\u79BB\u5F00</span>
<span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ul><li>\u72B6\u6001\u7BA1\u7406</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;helloworld&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>vite\u4E2D\u914D\u7F6E\u8DE8\u57DF\u8BF7\u6C42 \u65B0\u5EFA vite.config.js \u6587\u4EF6</li></ul><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://pvp.qq.com/&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5141\u8BB8\u8DE8\u57DF</span>
            <span class="token literal-property property">rewrite</span><span class="token operator">:</span> path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u6539\u5B8C\u914D\u7F6E\u540E, \u4E00\u5B9A\u8981\u91CD\u542F\u670D\u52A1</p><ul><li>\u81EA\u52A8\u5F15\u5165</li></ul><p>cnpm i unplugin-auto-import -D</p>`,28),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{g as __pageData,f as default};
