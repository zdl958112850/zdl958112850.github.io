import{_ as n,c as s,o as a,a as t}from"./app.d4eb32af.js";const g='{"title":"node.js \u662F\u4EC0\u4E48","description":"","frontmatter":{},"headers":[{"level":2,"title":"process","slug":"process"},{"level":2,"title":"\u6A21\u5757\u5316","slug":"\u6A21\u5757\u5316"},{"level":2,"title":"\u5185\u7F6E\u6A21\u5757","slug":"\u5185\u7F6E\u6A21\u5757"},{"level":3,"title":"url","slug":"url"},{"level":3,"title":"\u65E5\u5FD7\u8BB0\u5F55","slug":"\u65E5\u5FD7\u8BB0\u5F55"},{"level":3,"title":"http \u548C https","slug":"http-\u548C-https"},{"level":3,"title":"\u6D4F\u89C8\u5668\u8C03\u8BD5 node.js \u4EE3\u7801","slug":"\u6D4F\u89C8\u5668\u8C03\u8BD5-node-js-\u4EE3\u7801"},{"level":3,"title":"\u53D1\u9001\u8BF7\u6C42, \u6BD4 postman \u597D\u7528","slug":"\u53D1\u9001\u8BF7\u6C42-\u6BD4-postman-\u597D\u7528"},{"level":3,"title":"node \u53D1\u9001\u8BF7\u6C42","slug":"node-\u53D1\u9001\u8BF7\u6C42"},{"level":2,"title":"jsonp \u7684\u8DE8\u57DF\u8BF7\u6C42","slug":"jsonp-\u7684\u8DE8\u57DF\u8BF7\u6C42"},{"level":2,"title":"cors \u5B9E\u73B0\u8DE8\u57DF","slug":"cors-\u5B9E\u73B0\u8DE8\u57DF"},{"level":2,"title":"\u4EE3\u7406\u8BBF\u95EE","slug":"\u4EE3\u7406\u8BBF\u95EE"},{"level":2,"title":"\u722C\u866B","slug":"\u722C\u866B"},{"level":3,"title":"cheerio","slug":"cheerio"},{"level":2,"title":"\u4E8B\u4EF6\u6A21\u5757","slug":"\u4E8B\u4EF6\u6A21\u5757"}],"relativePath":"font-end/node/index.md"}',p={},e=t(`<h1 id="node-js-\u662F\u4EC0\u4E48" tabindex="-1">node.js \u662F\u4EC0\u4E48 <a class="header-anchor" href="#node-js-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h1><h1 id="\u4E3A\u4EC0\u4E48\u4F1A\u6709-node-js" tabindex="-1">\u4E3A\u4EC0\u4E48\u4F1A\u6709 node.js <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F1A\u6709-node-js" aria-hidden="true">#</a></h1><h1 id="node-js-\u4E3A\u4E86\u89E3\u51B3\u4EC0\u4E48" tabindex="-1">node.js \u4E3A\u4E86\u89E3\u51B3\u4EC0\u4E48 <a class="header-anchor" href="#node-js-\u4E3A\u4E86\u89E3\u51B3\u4EC0\u4E48" aria-hidden="true">#</a></h1><h1 id="\u6D4F\u89C8\u5668\u4ECB\u7ECD" tabindex="-1">\u6D4F\u89C8\u5668\u4ECB\u7ECD <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u4ECB\u7ECD" aria-hidden="true">#</a></h1><ul><li>Mozilla \u63A8\u51FA Firefox \u6D4F\u89C8\u5668</li><li>Apple \u63A8\u51FA\u4E86\u57FA\u4E8E WebKit \u5185\u6838\u7684 Safari \u6D4F\u89C8\u5668</li><li>Google \u63A8\u51FA\u4E86\u57FA\u4E8E WebKit \u5185\u6838\u7684 chrome \u6D4F\u89C8\u5668, \u540E\u9762\u5F00\u53D1\u4E86 v8 \u5F15\u64CE</li></ul><h1 id="module-exports-\u5B9E\u73B0\u539F\u7406" tabindex="-1">module.exports \u5B9E\u73B0\u539F\u7406 <a class="header-anchor" href="#module-exports-\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a></h1><h1 id="module-exports-\u548C-exports-\u7684\u5173\u7CFB" tabindex="-1">module.exports \u548C exports \u7684\u5173\u7CFB <a class="header-anchor" href="#module-exports-\u548C-exports-\u7684\u5173\u7CFB" aria-hidden="true">#</a></h1><div class="language-js"><pre><code><span class="token keyword">var</span> exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
</code></pre></div><h1 id="node-\u57FA\u672C\u6A21\u5757" tabindex="-1">node \u57FA\u672C\u6A21\u5757 <a class="header-anchor" href="#node-\u57FA\u672C\u6A21\u5757" aria-hidden="true">#</a></h1><h2 id="process" tabindex="-1">process <a class="header-anchor" href="#process" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&gt; process === global.process;
true
&gt; process.version;
&#39;v5.2.0&#39;
&gt; process.platform;
&#39;darwin&#39;
&gt; process.arch;
&#39;x64&#39;
&gt; process.cwd(); //\u8FD4\u56DE\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55
&#39;/Users/michael&#39;
&gt; process.chdir(&#39;/private/tmp&#39;); // \u5207\u6362\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55
undefined
&gt; process.cwd();
&#39;/private/tmp&#39;
</code></pre></div><div class="language-"><pre><code>// process.nextTick()\u5C06\u5728\u4E0B\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u8C03\u7528:
process.nextTick
</code></pre></div><div class="language-"><pre><code>// \u7A0B\u5E8F\u5373\u5C06\u9000\u51FA\u65F6\u7684\u56DE\u8C03\u51FD\u6570:
process.on(&#39;exit&#39;, function (code) {
    console.log(&#39;about to exit with code: &#39; + code);
});
</code></pre></div><h1 id="\u5224\u65AD-js-\u6267\u884C\u73AF\u5883" tabindex="-1">\u5224\u65AD js \u6267\u884C\u73AF\u5883 <a class="header-anchor" href="#\u5224\u65AD-js-\u6267\u884C\u73AF\u5883" aria-hidden="true">#</a></h1><div class="language-"><pre><code>if (typeof(window) === &#39;undefined&#39;) {
    console.log(&#39;node.js&#39;);
} else {
    console.log(&#39;browser&#39;);
}
</code></pre></div><h1 id="\u5F02\u6B65\u8BFB\u53D6\u6587\u4EF6" tabindex="-1">\u5F02\u6B65\u8BFB\u53D6\u6587\u4EF6 <a class="header-anchor" href="#\u5F02\u6B65\u8BFB\u53D6\u6587\u4EF6" aria-hidden="true">#</a></h1><div class="language-"><pre><code>&#39;use strict&#39;;

var fs = require(&#39;fs&#39;);

fs.readFile(&#39;sample.txt&#39;, &#39;utf-8&#39;, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
</code></pre></div><h1 id="\u540C\u6B65\u8BFB\u53D6\u6587\u4EF6" tabindex="-1">\u540C\u6B65\u8BFB\u53D6\u6587\u4EF6 <a class="header-anchor" href="#\u540C\u6B65\u8BFB\u53D6\u6587\u4EF6" aria-hidden="true">#</a></h1><div class="language-"><pre><code>// \u9700\u8981\u901A\u8FC7try\u6765\u6355\u83B7\u5F02\u5E38
try {
    var data = fs.readFileSync(&#39;sample.txt&#39;, &#39;utf-8&#39;);
    console.log(data);
} catch (err) {
    // \u51FA\u9519\u4E86
}
</code></pre></div><h1 id="\u5F02\u6B65\u5199\u6587\u4EF6" tabindex="-1">\u5F02\u6B65\u5199\u6587\u4EF6 <a class="header-anchor" href="#\u5F02\u6B65\u5199\u6587\u4EF6" aria-hidden="true">#</a></h1><div class="language-"><pre><code>&#39;use strict&#39;;

var fs = require(&#39;fs&#39;);

var data = &#39;Hello, Node.js&#39;;
fs.writeFile(&#39;output.txt&#39;, data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(&#39;ok.&#39;);
    }
});
</code></pre></div><blockquote><p>\u7531\u4E8E Node \u73AF\u5883\u6267\u884C\u7684 JavaScript \u4EE3\u7801\u662F\u670D\u52A1\u5668\u7AEF\u4EE3\u7801\uFF0C\u6240\u4EE5\uFF0C\u7EDD\u5927\u90E8\u5206\u9700\u8981\u5728\u670D\u52A1\u5668\u8FD0\u884C\u671F\u53CD\u590D\u6267\u884C\u4E1A\u52A1\u903B\u8F91\u7684\u4EE3\u7801\uFF0C<em>\u5FC5\u987B\u4F7F\u7528\u5F02\u6B65\u4EE3\u7801</em>\uFF0C\u5426\u5219\uFF0C\u540C\u6B65\u4EE3\u7801\u5728\u6267\u884C\u65F6\u671F\uFF0C\u670D\u52A1\u5668\u5C06\u505C\u6B62\u54CD\u5E94\uFF0C\u56E0\u4E3A JavaScript \u53EA\u6709\u4E00\u4E2A\u6267\u884C\u7EBF\u7A0B\u3002</p></blockquote><p>\u6240\u6709\u4F7F\u7528\u53C2\u7167 <a href="http://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a> \u5B98\u7F51</p><h2 id="\u6A21\u5757\u5316" tabindex="-1">\u6A21\u5757\u5316 <a class="header-anchor" href="#\u6A21\u5757\u5316" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u66B4\u9732\u65B9\u6CD5</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  age<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FD8\u53EF\u4EE5\u4F7F\u7528, \u529F\u80FD\u662F\u4E00\u6837\u7684, \u76F8\u5F53\u4E8Eexports\u662Fmodule.exports\u7684\u5F15\u7528,</span>
exports<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token comment">// \u53EA\u80FD\u901A\u8FC7\u8FD9\u6837\u7684\u5199\u6CD5, \u800C\u4E0D\u80FD\u901A\u8FC7</span>
exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  age<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u8FD9\u6837\u5199\u76F8\u5F53\u4E8E\u5BF9\u8BE5\u5F15\u7528\u91CD\u65B0\u8D4B\u503C, \u6539\u53D8\u4E86\u4E4B\u524D\u7684\u5F15\u7528</span>
</code></pre></div><h2 id="\u5185\u7F6E\u6A21\u5757" tabindex="-1">\u5185\u7F6E\u6A21\u5757 <a class="header-anchor" href="#\u5185\u7F6E\u6A21\u5757" aria-hidden="true">#</a></h2><h3 id="url" tabindex="-1">url <a class="header-anchor" href="#url" aria-hidden="true">#</a></h3><p>\u5C06\u5730\u5740\u62C6\u5206\u4E3A\u5BF9\u8C61</p><div class="language-js"><pre><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> urlString <span class="token operator">=</span> <span class="token string">&#39;https://ww.baidu.com:443/path/index.html?id=2#tag=3&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>urlString<span class="token punctuation">)</span><span class="token punctuation">)</span>

Url <span class="token punctuation">{</span>
    protocol\uFF1A <span class="token string">&#39;https\uFF1A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">slashes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        host\uFF1A <span class="token string">&#39;www.baidu.com:443&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;443&#39;</span><span class="token punctuation">,</span>
        hostname\uFF1A <span class="token string">&#39;www.baidu.com&#39;</span><span class="token punctuation">,</span>
        hash\uFF1A <span class="token string">&#39;#tag=3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;?id=2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token string">&#39;id=2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/path/index.html&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/path/index.html?id=2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com:443/path/index.html?id=2#tag=3&#39;</span>
<span class="token punctuation">}</span>

url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>urlstring<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u5730\u5740\u5B57\u7B26\u4E32\u8F6C\u4E3A\u5BF9\u8C61</span>
url<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>url0bj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u5BF9\u8C61\u8F6C\u4E3A\u5B57\u7B26\u4E32</span>
url<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;http://ww.abc.com/a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/b&#39;</span> <span class="token comment">// \u5C06\u5730\u5740\u8FDB\u884C\u62FC\u63A5</span>
        <span class="token comment">// query\u53C2\u6570</span>
        <span class="token keyword">const</span> urlParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>urlString<span class="token punctuation">)</span><span class="token punctuation">.</span>search<span class="token punctuation">)</span>
        urlParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u65E5\u5FD7\u8BB0\u5F55" tabindex="-1">\u65E5\u5FD7\u8BB0\u5F55 <a class="header-anchor" href="#\u65E5\u5FD7\u8BB0\u5F55" aria-hidden="true">#</a></h3><ul><li>log4js</li></ul><p><a href="https://www.npmjs.com/package/log4js" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/log4js</a></p><h3 id="http-\u548C-https" tabindex="-1">http \u548C https <a class="header-anchor" href="#http-\u548C-https" aria-hidden="true">#</a></h3><h3 id="\u6D4F\u89C8\u5668\u8C03\u8BD5-node-js-\u4EE3\u7801" tabindex="-1">\u6D4F\u89C8\u5668\u8C03\u8BD5 node.js \u4EE3\u7801 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u8C03\u8BD5-node-js-\u4EE3\u7801" aria-hidden="true">#</a></h3><p>\u5728 node \u7AEF\u8F93\u5165 node--inspect--inspect-brk \u6587\u4EF6.js \u5728\u6D4F\u89C8\u5668\u7AEF \u8F93\u5165 chrome://inspect/#devices</p><h3 id="\u53D1\u9001\u8BF7\u6C42-\u6BD4-postman-\u597D\u7528" tabindex="-1">\u53D1\u9001\u8BF7\u6C42, \u6BD4 postman \u597D\u7528 <a class="header-anchor" href="#\u53D1\u9001\u8BF7\u6C42-\u6BD4-postman-\u597D\u7528" aria-hidden="true">#</a></h3><p><a href="https://insomnia.rest/download/" target="_blank" rel="noopener noreferrer">https://insomnia.rest/download/</a></p><h3 id="node-\u53D1\u9001\u8BF7\u6C42" tabindex="-1">node \u53D1\u9001\u8BF7\u6C42 <a class="header-anchor" href="#node-\u53D1\u9001\u8BF7\u6C42" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>https<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://ww.xiaomiyoupin.com/mtop/mf/cat/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    result<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>chunk<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        data <span class="token operator">+=</span> chunk
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    result<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">{</span>
            response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;content - type &#39;</span><span class="token operator">:</span> <span class="token string">&#39;application / json;charset = utf-8 &#39;</span>
                <span class="token punctuation">}</span>\uFF09
                response<span class="token punctuation">.</span>writelfjsoN<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="jsonp-\u7684\u8DE8\u57DF\u8BF7\u6C42" tabindex="-1">jsonp \u7684\u8DE8\u57DF\u8BF7\u6C42 <a class="header-anchor" href="#jsonp-\u7684\u8DE8\u57DF\u8BF7\u6C42" aria-hidden="true">#</a></h2><ol><li>\u5BA2\u670D\u7AEF\u9700\u8981\u5728\u672C\u5730\u5199\u4E00\u4E2A\u51FD\u6570, \u6BD4\u5982 callback, \u5E76\u4E14\u8981\u628A\u8FD9\u4E2A\u51FD\u6570\u540D\u79F0, \u6CE8\u610F\u662F\u540D\u79F0\u4F20\u9012\u7ED9\u540E\u7AEF</li><li>\u540E\u7AEF\u8FD4\u56DE\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u7684 js, \u5C31\u53EF\u4EE5\u8C03\u7528\u6D4F\u89C8\u5668\u7AEF\u7684\u8FD9\u4E2A\u51FD\u6570</li></ol><p>\u670D\u52A1\u5668\u7AEF\u4EE3\u7801 <img src="https://i.loli.net/2021/02/20/k6Pz3YnMcblWOHa.png" alt=""> \u5BA2\u6237\u7AEF\u4EE3\u7801: <img src="https://i.loli.net/2021/02/20/egUiW7G9a4KcyfD.png" alt=""></p><h2 id="cors-\u5B9E\u73B0\u8DE8\u57DF" tabindex="-1">cors \u5B9E\u73B0\u8DE8\u57DF <a class="header-anchor" href="#cors-\u5B9E\u73B0\u8DE8\u57DF" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span>\uFF0C <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json;charset=utf-8&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;Access-control-A1lovw-0rigin&#39;</span><span class="token operator">:</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4EE3\u7406\u8BBF\u95EE" tabindex="-1">\u4EE3\u7406\u8BBF\u95EE <a class="header-anchor" href="#\u4EE3\u7406\u8BBF\u95EE" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 middleware(http-proxy-middware) node \u4E2D\u7684\u4F7F\u7528\u65B9\u6CD5:</p><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> apiProxy <span class="token operator">=</span> <span class="token function">proxy</span><span class="token punctuation">(</span>&quot;<span class="token operator">/</span>api&#39;<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https: //m.lagou.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// &#39;~/api&#39;: &#39;&#39; // \u5C06api\u66FF\u6362\u4E3A\u7A7A</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// http-proy-middleware \u5728Node.js\u4E2D\u4F7F\u7528\u7684\u65B9\u6CD5</span>
    <span class="token function">apiProxy</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u722C\u866B" tabindex="-1">\u722C\u866B <a class="header-anchor" href="#\u722C\u866B" aria-hidden="true">#</a></h2><h3 id="cheerio" tabindex="-1">cheerio <a class="header-anchor" href="#cheerio" aria-hidden="true">#</a></h3><p>\u5C06\u722C\u866B\u7684 html \u5B57\u7B26\u4E32\u8F6C\u4E3A\u865A\u62DF dom \u722C\u866B\u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">filterData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.section-item-box p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> el</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C31\u80FD\u62FF\u5230\u6307\u5B9A\u7684\u6807\u9898</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E8B\u4EF6\u6A21\u5757" tabindex="-1">\u4E8B\u4EF6\u6A21\u5757 <a class="header-anchor" href="#\u4E8B\u4EF6\u6A21\u5757" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> EventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MyEventEmitter</span> <span class="token keyword">extends</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyEventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;play&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;play&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;movie&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,53),o=[e];function c(l,r,i,u,k,d){return a(),s("div",null,o)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
