import{_ as n,c as t,o as e,a}from"./app.d4eb32af.js";const m='{"title":"\u8BF7\u6C42\u51FD\u6570\u4EE3\u7801\u6BB5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF7\u6C42\u51FD\u6570\u4EE3\u7801\u6BB5","slug":"\u8BF7\u6C42\u51FD\u6570\u4EE3\u7801\u6BB5"},{"level":2,"title":"\u63A5\u53D7\u8FD4\u56DE\u6570\u636E\u7684\u4EE3\u7801\u6BB5","slug":"\u63A5\u53D7\u8FD4\u56DE\u6570\u636E\u7684\u4EE3\u7801\u6BB5"},{"level":2,"title":"\u6570\u7EC4\u53BB\u91CD","slug":"\u6570\u7EC4\u53BB\u91CD"},{"level":2,"title":"\u9632\u6296","slug":"\u9632\u6296"},{"level":2,"title":"\u8282\u6D41","slug":"\u8282\u6D41"},{"level":2,"title":"\u6DF1\u62F7\u8D1D","slug":"\u6DF1\u62F7\u8D1D"},{"level":2,"title":"\u91D1\u94B1\u8F6C\u5927\u5199","slug":"\u91D1\u94B1\u8F6C\u5927\u5199"},{"level":2,"title":"\u65E5\u671F\u683C\u5F0F\u5316\u5DE5\u5177","slug":"\u65E5\u671F\u683C\u5F0F\u5316\u5DE5\u5177"},{"level":2,"title":"\u5224\u65AD\u57FA\u672C\u548C\u590D\u6742\u6570\u636E\u7C7B\u578B","slug":"\u5224\u65AD\u57FA\u672C\u548C\u590D\u6742\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"\u5343\u5206\u4F4D\u8F6C\u6362\u9AD8\u6027\u80FD\u65B9\u6CD5","slug":"\u5343\u5206\u4F4D\u8F6C\u6362\u9AD8\u6027\u80FD\u65B9\u6CD5"}],"relativePath":"font-end/utils/index.md"}',s={},o=a(`<h2 id="\u8BF7\u6C42\u51FD\u6570\u4EE3\u7801\u6BB5" tabindex="-1">\u8BF7\u6C42\u51FD\u6570\u4EE3\u7801\u6BB5 <a class="header-anchor" href="#\u8BF7\u6C42\u51FD\u6570\u4EE3\u7801\u6BB5" aria-hidden="true">#</a></h2><div class="language-"><pre><code>export const updataPassword = data =&gt; request({ method: &#39;POST&#39;, url: &#39;/test/v1/updataPassword&#39;, data}) // \u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u66F4\u52A0\u660E\u4E86

</code></pre></div><h2 id="\u63A5\u53D7\u8FD4\u56DE\u6570\u636E\u7684\u4EE3\u7801\u6BB5" tabindex="-1">\u63A5\u53D7\u8FD4\u56DE\u6570\u636E\u7684\u4EE3\u7801\u6BB5 <a class="header-anchor" href="#\u63A5\u53D7\u8FD4\u56DE\u6570\u636E\u7684\u4EE3\u7801\u6BB5" aria-hidden="true">#</a></h2><div class="language-"><pre><code>let {data, msg, success} = await loginIn(this.submitform) || {}
</code></pre></div><h2 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1">\u6570\u7EC4\u53BB\u91CD <a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a></h2><div class="language-"><pre><code>
</code></pre></div><h2 id="\u9632\u6296" tabindex="-1">\u9632\u6296 <a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a></h2><div class="language-"><pre><code>/**
 * \u9632\u6296 \u6700\u540E\u4E00\u6B21\u6267\u884C \u5982\u679C\u4E0D\u8D85\u8FC7\u8BBE\u5B9A\u7684\u65F6\u957F, \u5C31\u6309\u7167\u90A3\u4E2A\u65F6\u957F\u8FDB\u884C\u89E6\u53D1
 * @param callback \u56DE\u8C03\u51FD\u6570
 * @param delay \u5EF6\u8FDF
 * @return {*}
 */
export const debounce = (callback, delay) =&gt; {
  let timer = null;

  return function () {
    // \u4F2A\u6570\u7EC4\u8F6C\u6570\u7EC4
    var args = Array.prototype.slice.call(arguments);
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() =&gt; {
      // \u5411callback\u4E2D\u4F20\u9012\u53C2\u6570, \u5E76\u4E14\u6539\u53D8\u5F53\u524Dthis\u7684\u6307\u5411, \u5E76\u4E14\u7ACB\u5373\u8C03\u7528
      callback.apply(this, args);
    }, delay);
  };
};

// \u4F7F\u7528\u65B9\u6CD5

fatherCon.addEventListener(&quot;resize&quot;, debounce(_initMonitor, 1000)); // _initMonitor\u8868\u793A\u5B9E\u9645\u9700\u8981\u6267\u884C\u7684\u51FD\u6570, 1000\u9632\u6296\u7684\u65F6\u95F4\u95F4\u9694

function _initMonitor() {
  console.log(&#39;\u6267\u884C&#39;)
}

</code></pre></div><h2 id="\u8282\u6D41" tabindex="-1">\u8282\u6D41 <a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a></h2><div class="language-"><pre><code>/**
 * \u8282\u6D41, \u6BCF\u9694\u591A\u957F\u65F6\u95F4\u5FC5\u987B\u6267\u884C\u4E00\u6B21
 * @param name \u63CF\u8FF0\u4FE1\u606F
 * @return {*}
 */
export const throttle = (callback, delay) =&gt; {
  var timer = null;

  return function () {
    let arg = Array.prototype.slice.call(arguments);
    if (!timer) {
      timer = setTimeout(() =&gt; {
        callback.apply(this, arg);
      }, delay);
    }
  };
};

// \u4F7F\u7528
fatherCon.addEventListener(&quot;resize&quot;, throttle(_initMonitor, 1000)); // _initMonitor\u8868\u793A\u5B9E\u9645\u9700\u8981\u6267\u884C\u7684\u51FD\u6570, 1000\u9632\u6296\u7684\u65F6\u95F4\u95F4\u9694

</code></pre></div><h2 id="\u6DF1\u62F7\u8D1D" tabindex="-1">\u6DF1\u62F7\u8D1D <a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a></h2><div class="language-"><pre><code>

/**
 * \u6DF1\u62F7\u8D1D
 * @param name \u63CF\u8FF0\u4FE1\u606F
 * @return {*}
 */
export const cloneDeep = (obj) =&gt; {
  const type = typeof obj;
  if (type !== &quot;object&quot; || obj === null) return obj;

  let clone, len, keys;

  if (Array.isArray(obj)) {
    clone = [];
    len = obj.length;
    for (let i = 0; i &lt; len; i++) {
      clone[i] = cloneDeep(obj[i]);
    }
  } else {
    clone = {};
    keys = Object.keys(obj);
    keys.forEach((key) =&gt; (clone[key] = cloneDeep(obj[key])));
  }

  return clone;
};
</code></pre></div><h2 id="\u91D1\u94B1\u8F6C\u5927\u5199" tabindex="-1">\u91D1\u94B1\u8F6C\u5927\u5199 <a class="header-anchor" href="#\u91D1\u94B1\u8F6C\u5927\u5199" aria-hidden="true">#</a></h2><div class="language-"><pre><code>
/**
 * \u91D1\u94B1\u8F6C\u5927\u5199
 * @param {\u6570\u5B57\u7684\u91D1\u989D} money
 */
export function goldAmount(number) {
  let ret = &quot;&quot;;
  if (number != &quot;&quot; &amp;&amp; number != null &amp;&amp; number != &quot;0&quot;) {
    let unit = &quot;\u4EDF\u4F70\u62FE\u4EBF\u4EDF\u4F70\u62FE\u4E07\u4EDF\u4F70\u62FE\u5143\u89D2\u5206&quot;,
      str = &quot;&quot;;
    number += &quot;00&quot;;
    let point = number.indexOf(&quot;.&quot;);
    if (point &gt;= 0) {
      number = number.substring(0, point) + number.substr(point + 1, 2);
    }
    unit = unit.substr(unit.length - number.length);
    for (let i = 0; i &lt; number.length; i++) {
      str += &quot;\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396&quot;.charAt(number.charAt(i)) + unit.charAt(i);
    }
    ret = str
      .replace(/\u96F6(\u4EDF|\u4F70|\u62FE|\u89D2)/g, &quot;\u96F6&quot;)
      .replace(/(\u96F6)+/g, &quot;\u96F6&quot;)
      .replace(/\u96F6(\u4E07|\u4EBF|\u5143)/g, &quot;$1&quot;)
      .replace(/(\u4EBF)\u4E07|(\u62FE)/g, &quot;$1$2&quot;)
      .replace(/^\u5143\u96F6?|\u96F6\u5206/g, &quot;&quot;)
      .replace(/\u5143$/g, &quot;&quot;);
  }
  return ret;
}

</code></pre></div><h2 id="\u65E5\u671F\u683C\u5F0F\u5316\u5DE5\u5177" tabindex="-1">\u65E5\u671F\u683C\u5F0F\u5316\u5DE5\u5177 <a class="header-anchor" href="#\u65E5\u671F\u683C\u5F0F\u5316\u5DE5\u5177" aria-hidden="true">#</a></h2><div class="language-"><pre><code>
/**
 * \u683C\u5F0F\u5316\u65E5\u671F\u683C\u5F0F
 * @param {*} data
 * @param {*} fmt  \u683C\u5F0F
 * @returns
 */
export function formatDate(data, fmt) {

  function padLeftZero(str) {
    return (&quot;00&quot; + str).substr(str.length);
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (data.getFullYear() + &quot;&quot;).substr(4 - RegExp.$1.length)
    );
  }

  let o = {
    &quot;M+&quot;: data.getMonth() + 1,
    &quot;d+&quot;: data.getDate(),
    &quot;h+&quot;: data.getHours(),
    &quot;m+&quot;: data.getMinutes(),
    &quot;s+&quot;: data.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(\`(\${k})\`).test(fmt)) {
      let str = o[k] + &quot;&quot;;
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }

  return fmt;
}
// \u4F7F\u7528\u65B9\u6CD5
formData(new Date(), &#39;yyyy-MM-dd&#39;);
</code></pre></div><h2 id="\u5224\u65AD\u57FA\u672C\u548C\u590D\u6742\u6570\u636E\u7C7B\u578B" tabindex="-1">\u5224\u65AD\u57FA\u672C\u548C\u590D\u6742\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u5224\u65AD\u57FA\u672C\u548C\u590D\u6742\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u4F20\u9012\u4E24\u4E2A\u53C2\u6570, \u5982\u679C\u53C2\u6570type\u6709\u503C, \u7528\u4E8E\u5224\u65AD\u7B2C\u4E00\u4E2A\u662F\u5426\u548Ctype\u4E00\u81F4, \u6CA1\u6709\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u8FD4\u56DE\u68C0\u6D4B\u51FA\u6765\u7684\u6570\u636E\u7C7B\u578B;</span>
<span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> finalType <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span>
    <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\[object (\\S+)\\]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> type <span class="token operator">?</span> finalType<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> type<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> finalType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5343\u5206\u4F4D\u8F6C\u6362\u9AD8\u6027\u80FD\u65B9\u6CD5" tabindex="-1">\u5343\u5206\u4F4D\u8F6C\u6362\u9AD8\u6027\u80FD\u65B9\u6CD5 <a class="header-anchor" href="#\u5343\u5206\u4F4D\u8F6C\u6362\u9AD8\u6027\u80FD\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-"><pre><code>function format_with_mod(number) {
    var n = number;
    var r = &quot;&quot;;
    var temp;
    do {
      	// \u6C42\u6A21\u7684\u503C\uFF0C\u7528\u4E8E\u83B7\u53D6\u9AD8\u4E09\u4F4D\uFF0C\u8FD9\u91CC\u53EF\u80FD\u6709\u5C0F\u6570
        mod = n % 1000;
      	// \u503C\u662F\u4E0D\u662F\u5927\u4E8E1\uFF0C\u662F\u7EE7\u7EED\u7684\u6761\u4EF6
        n = n / 1000;
      	// \u9AD8\u4E09\u4F4D
        temp = ~~mod;
      	// 1. \u586B\u5145 : n&gt;1 \u5FAA\u73AF\u672A\u7ED3\u675F\uFF0C \u5C31\u8981\u586B\u5145\u4E3A\u6BD4\u5982\uFF0C1 =&gt; 001,
        // \u4E0D\u7136 1 001\uFF0C \u5C31\u4F1A\u53D8\u6210 &#39;11&#39;,
      	// 2. \u62FC\u63A5 &quot;,&quot;
        r =  (n &gt;= 1 ?\`\${temp}\`.padStart(3, &quot;0&quot;): temp) + (!!r ? &quot;,&quot; + r : &quot;&quot;)
    } while (n &gt;= 1)

    var strNumber = number + &quot;&quot;;
    var index = strNumber.indexOf(&quot;.&quot;);
  	// \u62FC\u63A5\u5C0F\u6570\u90E8\u5206\uFF0C
    if (index &gt;= 0) {
        r += strNumber.substring(index);
    }
    return r;
}

</code></pre></div>`,20),r=[o];function u(l,p,i,c,d,g){return e(),t("div",null,r)}var f=n(s,[["render",u]]);export{m as __pageData,f as default};
