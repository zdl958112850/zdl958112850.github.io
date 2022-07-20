import{_ as n,c as s,o as a,a as t}from"./app.d4eb32af.js";const y='{"title":"\u8D44\u6E90","description":"","frontmatter":{},"headers":[],"relativePath":"font-end/\u6D41\u7A0B\u8BBE\u8BA1/\u6D41\u7A0B\u8BBE\u8BA1.md"}',p={},o=t(`<p>\u8BB0\u5F55\u6D41\u7A0B\u8BBE\u8BA1\u7684\u5F00\u53D1\u7ECF\u8FC7, \u4F7F\u7528\u7684\u5DE5\u5177: logic-flow \u6D41\u7A0B\u56FE\u7F16\u8F91\u6846\u67B6</p><h1 id="\u8D44\u6E90" tabindex="-1">\u8D44\u6E90 <a class="header-anchor" href="#\u8D44\u6E90" aria-hidden="true">#</a></h1><p><a href="https://github.com/didi/LogicFlow" target="_blank" rel="noopener noreferrer">https://github.com/didi/LogicFlow</a><a href="https://demo.bpmn.io/s/start" target="_blank" rel="noopener noreferrer">https://demo.bpmn.io/s/start</a><a href="http://logic-flow.org/article/article01.html#logicflow-%E7%9A%84%E8%83%BD%E5%8A%9B%E5%92%8C%E7%89%B9%E6%80%A7" target="_blank" rel="noopener noreferrer">http://logic-flow.org/article/article01.html#logicflow-\u7684\u80FD\u529B\u548C\u7279\u6027</a></p><h1 id="\u5F15\u5165" tabindex="-1">\u5F15\u5165 <a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a></h1><p>npm install @logicflow/core npm install @logicflow/extension</p><h1 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">import</span> LogicFlow <span class="token keyword">from</span> <span class="token string">&#39;@logicflow/core&#39;</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B</span>
<span class="token keyword">const</span> lf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LogicFlow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8C03\u7528\u8BE5\u5B9E\u4F8B\u7684\u6E32\u67D3\u65B9\u6CD5</span>
lf<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">nodes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;rect&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u8282\u70B91&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;circle&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u8282\u70B92&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">edges</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">sourceNodeId</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">targetNodeId</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u8FDE\u7EBF&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h1 id="\u8282\u70B9\u5F62\u72B6" tabindex="-1">\u8282\u70B9\u5F62\u72B6 <a class="header-anchor" href="#\u8282\u70B9\u5F62\u72B6" aria-hidden="true">#</a></h1><p>\u77E9\u5F62\uFF1Arect \u5706\u5F62: circle \u692D\u5706: ellipse \u591A\u8FB9\u5F62: polygon \u83F1\u5F62: diamond \u6587\u672C: text HTML: html</p><p>\u5F15\u5165\u8282\u70B9</p><div class="language-js"><pre><code><span class="token comment">// \u77E9\u5F62</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    RectNode<span class="token punctuation">,</span>
    RectNodeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5706\u5F62</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    CircleNode<span class="token punctuation">,</span>
    CircleNodeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u692D\u5706</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    EllipseNode<span class="token punctuation">,</span>
    EllipseNodeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u591A\u8FB9\u5F62</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    PolygonNode<span class="token punctuation">,</span>
    PolygonNodeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u83F1\u5F62</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    DiamondNode<span class="token punctuation">,</span>
    DiamondNodeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6587\u672C</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    TextNode<span class="token punctuation">,</span>
    TextNodeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// HTML</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    HtmlNode<span class="token punctuation">,</span>
    HtmlNodeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h1 id="\u8FB9\u7684\u6837\u5F0F" tabindex="-1">\u8FB9\u7684\u6837\u5F0F <a class="header-anchor" href="#\u8FB9\u7684\u6837\u5F0F" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token comment">// \u76F4\u7EBF</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    LineEdge<span class="token punctuation">,</span>
    PolylineEdgeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6298\u7EBF</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    PolylineEdge<span class="token punctuation">,</span>
    PolylineEdgeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u8D1D\u585E\u5C14\u66F2\u7EBF</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    BezierEdge<span class="token punctuation">,</span>
    BezierEdgeModel
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@logicflow/core&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,13),e=[o];function c(l,r,i,u,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{y as __pageData,g as default};
