import{_ as e,c as n,o as t,a as r}from"./app.d4eb32af.js";const f='{"title":"\u6742\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6742\u8BB0","slug":"\u6742\u8BB0"},{"level":2,"title":"vue history nginx \u914D\u7F6E","slug":"vue-history-nginx-\u914D\u7F6E"},{"level":3,"title":"\u4E00\u7EA7\u76EE\u5F55\u914D\u7F6E","slug":"\u4E00\u7EA7\u76EE\u5F55\u914D\u7F6E"},{"level":3,"title":"\u4E8C\u7EA7\u76EE\u5F55","slug":"\u4E8C\u7EA7\u76EE\u5F55"},{"level":2,"title":"\u524D\u7AEF\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72","slug":"\u524D\u7AEF\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72"},{"level":3,"title":"\u4EE3\u7801\u90E8\u5206","slug":"\u4EE3\u7801\u90E8\u5206"},{"level":3,"title":"\u5176\u4F59\u90E8\u5206","slug":"\u5176\u4F59\u90E8\u5206"},{"level":2,"title":"\u624B\u673A\u6295\u5C4F\u8F6F\u4EF6 scrcpy","slug":"\u624B\u673A\u6295\u5C4F\u8F6F\u4EF6-scrcpy"},{"level":3,"title":"\u5E38\u7528\u7684\u5FEB\u6377\u952E","slug":"\u5E38\u7528\u7684\u5FEB\u6377\u952E"},{"level":2,"title":"\u770B\u89C6\u9891\u5730\u5740","slug":"\u770B\u89C6\u9891\u5730\u5740"},{"level":2,"title":"\u597D\u7528\u7684 gif \u538B\u7F29\u5DE5\u5177","slug":"\u597D\u7528\u7684-gif-\u538B\u7F29\u5DE5\u5177"},{"level":2,"title":"png \u538B\u7F29\u5DE5\u5177","slug":"png-\u538B\u7F29\u5DE5\u5177"},{"level":2,"title":"\u5DE5\u5177\u7F51\u7AD9","slug":"\u5DE5\u5177\u7F51\u7AD9"},{"level":2,"title":"\u90AE\u7F16 \u884C\u653F\u533A\u5212\u67E5\u8BE2","slug":"\u90AE\u7F16-\u884C\u653F\u533A\u5212\u67E5\u8BE2"},{"level":2,"title":"\u63A5\u5916\u5305","slug":"\u63A5\u5916\u5305"},{"level":2,"title":"\u524D\u7AEF\u5B9E\u73B0\u5728\u7EBF ppt","slug":"\u524D\u7AEF\u5B9E\u73B0\u5728\u7EBF-ppt"},{"level":2,"title":"\u4E0D\u8BA9\u5237\u65B0\u6D4F\u89C8\u5668","slug":"\u4E0D\u8BA9\u5237\u65B0\u6D4F\u89C8\u5668"}],"relativePath":"other/\u6742\u8BB0.md"}',a={},o=r(`<h2 id="\u6742\u8BB0" tabindex="-1">\u6742\u8BB0 <a class="header-anchor" href="#\u6742\u8BB0" aria-hidden="true">#</a></h2><h2 id="vue-history-nginx-\u914D\u7F6E" tabindex="-1">vue history nginx \u914D\u7F6E <a class="header-anchor" href="#vue-history-nginx-\u914D\u7F6E" aria-hidden="true">#</a></h2><p><a href="https://www.hangge.com/blog/cache/detail_3140.html" target="_blank" rel="noopener noreferrer">https://www.hangge.com/blog/cache/detail_3140.html</a></p><h3 id="\u4E00\u7EA7\u76EE\u5F55\u914D\u7F6E" tabindex="-1">\u4E00\u7EA7\u76EE\u5F55\u914D\u7F6E <a class="header-anchor" href="#\u4E00\u7EA7\u76EE\u5F55\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language-"><pre><code>server {
    listen       9090;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   /Volumes/BOOTCAMP/Vue/hangge-app/dist;
        try_files $uri $uri/ /index.html;
        index  index.html;
        add_header Access-Control-Allow-Origin *;
    }

    #error_page  404              /404.html;

&lt;!-- vue\u914D\u7F6E --&gt;
const router = new VueRouter({
  mode: &#39;history&#39;,
  base: process.<wbr>env.BASE_URL,
  routes
})
</code></pre></div><h3 id="\u4E8C\u7EA7\u76EE\u5F55" tabindex="-1">\u4E8C\u7EA7\u76EE\u5F55 <a class="header-anchor" href="#\u4E8C\u7EA7\u76EE\u5F55" aria-hidden="true">#</a></h3><div class="language-"><pre><code>server {
    listen       9090;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location /hangge {
        alias   /Volumes/BOOTCAMP/Vue/hangge-app/dist;
        try_files $uri $uri/ /hangge/index.html;
        index  index.html;
        add_header Access-Control-Allow-Origin *;
    }

    #error_page  404              /404.html;

    &lt;!-- vue\u4E2D\u914D\u7F6E --&gt;
const router = new VueRouter({
  mode: &#39;history&#39;,
  base: &#39;/hangge&#39;,
  routes
})
</code></pre></div><h2 id="\u524D\u7AEF\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72" tabindex="-1">\u524D\u7AEF\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72 <a class="header-anchor" href="#\u524D\u7AEF\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="\u4EE3\u7801\u90E8\u5206" tabindex="-1">\u4EE3\u7801\u90E8\u5206 <a class="header-anchor" href="#\u4EE3\u7801\u90E8\u5206" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;!-- upload/index.js --&gt;
const config = require(&quot;./config.js&quot;);
const shell = require(&quot;shelljs&quot;);
const path = require(&quot;path&quot;);
let Client = require(&quot;ssh2-sftp-client&quot;);
// \u6253\u5305 npm run build
const compileDist = async () =&gt; {
  if (shell.exec(&quot;npm run build&quot;).code == 0) {
    console.log(&quot;\u6253\u5305\u6210\u529F&quot;);
  }
};

/**
 * \u94FE\u63A5
 */
async function connectSSh() {
  let sftp = new Client();
  sftp
    .connect({
      host: config.ip, // \u670D\u52A1\u5668 IP
      port: config.port,
      username: config.username,
      password: config.password,
    })
    .then(() =&gt; {
      console.log(&quot;\u5148\u6267\u884C\u5220\u9664\u670D\u52A1\u5668\u6587\u4EF6&quot;);
      return sftp.rmdir(config.rmpath, true);
    })
    .then(() =&gt; {
      // \u4E0A\u4F20\u6587\u4EF6
      console.log(&quot;\u5F00\u59CB\u4E0A\u4F20&quot;);
      return sftp.uploadDir(path.resolve(__dirname, &quot;../.vitepress/dist&quot;), config.path);
    })
    .then((data) =&gt; {
      console.log(&quot;\u4E0A\u4F20\u5B8C\u6210&quot;);
      sftp.end();
    })
    .catch((err) =&gt; {
      console.log(err, &quot;\u5931\u8D25&quot;);
      sftp.end();
    });
}

/**
 * \u8FD0\u884C\u811A\u672C
 */
async function runTask() {
  await compileDist(); // \u6253\u5305\u5B8C\u6210
  await connectSSh(); // \u63D0\u4EA4\u4E0A\u4F20
}
runTask();

</code></pre></div><div class="language-"><pre><code>&lt;!-- /upload/config.js --&gt;
module.exports = {
  ip: &quot;12.93.17.23&quot;, // ssh\u5730\u5740
  username: &quot;root&quot;, // ssh \u7528\u6237\u540D
  port: &quot;22&quot;, // \u7AEF\u53E3
  password: &quot;878484&quot;, // ssh \u5BC6\u7801
  path: &quot;/www/wwwroot/pre.demo.com&quot;, // \u64CD\u4F5C\u5F00\u59CB\u6587\u4EF6\u5939 \u53EF\u4EE5\u76F4\u63A5\u6307\u5411\u914D\u7F6E\u597D\u7684\u5730\u5740
  rmpath: &quot;/www/wwwroot/pre.demo.com/&quot;, // \u9700\u8981\u5220\u9664\u7684\u6587\u4EF6\u5939
};

&lt;!-- \u9759\u9ED8\u6267\u884C, \u521B\u5EFA shangchuan.vbs --&gt;

Set ws = CreateObject(&quot;Wscript.Shell&quot;)
ws.run &quot;cmd /c shangchuan.bat&quot;,vbhide

// \u6CE8\u610F\u6DFB\u52A0\u5230\u5B9A\u65F6\u4EFB\u52A1\u7684\u65F6\u5019, \u4E0D\u8981\u641E\u4E00\u4E9B\u4EC0\u4E48\u5173\u952E\u5B57\u5F53\u540D\u79F0, \u5426\u5219win10\u4E0D\u6267\u884C
</code></pre></div><h3 id="\u5176\u4F59\u90E8\u5206" tabindex="-1">\u5176\u4F59\u90E8\u5206 <a class="header-anchor" href="#\u5176\u4F59\u90E8\u5206" aria-hidden="true">#</a></h3><ol><li>\u5728 package.json \u4E2D\u914D\u7F6E</li></ol><div class="language-"><pre><code>&quot;upload&quot;: &quot;node upload/index.js&quot;
</code></pre></div><ol start="2"><li>windows \u4E0B\u9762\u6DFB\u52A0\u5B9A\u65F6\u4EFB\u52A1, \u81EA\u52A8\u6267\u884C\u811A\u672C</li></ol><p>\u9700\u6CE8\u610F\u4E00\u5B9A\u8981\u5199\u8D77\u59CB\u4E8E, <a href="https://blog.csdn.net/ichen820/article/details/103508296" target="_blank" rel="noopener noreferrer">\u9009\u62E9\u811A\u672C\u6267\u884C\u7684\u4F4D\u7F6E</a></p><h2 id="\u624B\u673A\u6295\u5C4F\u8F6F\u4EF6-scrcpy" tabindex="-1">\u624B\u673A\u6295\u5C4F\u8F6F\u4EF6 scrcpy <a class="header-anchor" href="#\u624B\u673A\u6295\u5C4F\u8F6F\u4EF6-scrcpy" aria-hidden="true">#</a></h2><p><a href="https://blog.csdn.net/DDJ_TEST/article/details/120287342" target="_blank" rel="noopener noreferrer">\u6587\u6863</a></p><ol><li>\u94FE\u63A5\u624B\u673A</li><li>\u6253\u5F00\u5F00\u53D1\u8005\u6A21\u5F0F</li><li>\u5141\u8BB8 usb \u8C03\u8BD5</li></ol><p>scrcpy -S \u606F\u5C4F\u6295\u5C4F scrcpy -m1080 \u8BBE\u7F6E\u5927\u5C0F \u6700\u7EC8\u547D\u4EE4: scrcpy -m 800 --window-borderless --always-on-top --turn-screen-off --window-x 1550 --window-y 300</p><h3 id="\u5E38\u7528\u7684\u5FEB\u6377\u952E" tabindex="-1">\u5E38\u7528\u7684\u5FEB\u6377\u952E <a class="header-anchor" href="#\u5E38\u7528\u7684\u5FEB\u6377\u952E" aria-hidden="true">#</a></h3><p>alt+h \u9996\u9875 alt+o \u606F\u5C4F</p><h2 id="\u770B\u89C6\u9891\u5730\u5740" tabindex="-1">\u770B\u89C6\u9891\u5730\u5740 <a class="header-anchor" href="#\u770B\u89C6\u9891\u5730\u5740" aria-hidden="true">#</a></h2><p><a href="https://www.kanjus.net/bofang/?212569-8-9.html" target="_blank" rel="noopener noreferrer">\u89C6\u9891\u5730\u5740</a></p><h2 id="\u597D\u7528\u7684-gif-\u538B\u7F29\u5DE5\u5177" tabindex="-1">\u597D\u7528\u7684 gif \u538B\u7F29\u5DE5\u5177 <a class="header-anchor" href="#\u597D\u7528\u7684-gif-\u538B\u7F29\u5DE5\u5177" aria-hidden="true">#</a></h2><p><a href="https://docsmall.com/gif-compress" target="_blank" rel="noopener noreferrer">https://docsmall.com/gif-compress</a></p><h2 id="png-\u538B\u7F29\u5DE5\u5177" tabindex="-1">png \u538B\u7F29\u5DE5\u5177 <a class="header-anchor" href="#png-\u538B\u7F29\u5DE5\u5177" aria-hidden="true">#</a></h2><p><a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer">https://tinypng.com/</a></p><h2 id="\u5DE5\u5177\u7F51\u7AD9" tabindex="-1">\u5DE5\u5177\u7F51\u7AD9 <a class="header-anchor" href="#\u5DE5\u5177\u7F51\u7AD9" aria-hidden="true">#</a></h2><p><a href="https://xiaomark.com/tool" target="_blank" rel="noopener noreferrer">https://xiaomark.com/tool</a></p><h2 id="\u90AE\u7F16-\u884C\u653F\u533A\u5212\u67E5\u8BE2" tabindex="-1">\u90AE\u7F16 \u884C\u653F\u533A\u5212\u67E5\u8BE2 <a class="header-anchor" href="#\u90AE\u7F16-\u884C\u653F\u533A\u5212\u67E5\u8BE2" aria-hidden="true">#</a></h2><p><a href="http://xzqh.mca.gov.cn/map" target="_blank" rel="noopener noreferrer">http://xzqh.mca.gov.cn/map</a></p><h2 id="\u63A5\u5916\u5305" tabindex="-1">\u63A5\u5916\u5305 <a class="header-anchor" href="#\u63A5\u5916\u5305" aria-hidden="true">#</a></h2><p><a href="https://zhuanlan.zhihu.com/p/499616877" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/499616877</a></p><p><a href="https://www.proginn.com/" target="_blank" rel="noopener noreferrer">\u7A0B\u5E8F\u5458\u5BA2\u6808</a></p><p><a href="https://codemart.com/" target="_blank" rel="noopener noreferrer">\u7801\u5E02</a></p><p><a href="https://zb.oschina.net/projects/list.html" target="_blank" rel="noopener noreferrer">\u5F00\u6E90\u5916\u5305</a></p><p><a href="https://www.yingxuan.io/" target="_blank" rel="noopener noreferrer">\u82F1\u9009</a></p><p><a href="https://kuaimacode.com/" target="_blank" rel="noopener noreferrer">\u5FEB\u7801</a></p><p><a href="https://www.mayigeek.com/" target="_blank" rel="noopener noreferrer">\u7801\u6613</a></p><h2 id="\u524D\u7AEF\u5B9E\u73B0\u5728\u7EBF-ppt" tabindex="-1">\u524D\u7AEF\u5B9E\u73B0\u5728\u7EBF ppt <a class="header-anchor" href="#\u524D\u7AEF\u5B9E\u73B0\u5728\u7EBF-ppt" aria-hidden="true">#</a></h2><p><a href="https://github.com/pipipi-pikachu/PPTist" target="_blank" rel="noopener noreferrer">https://github.com/pipipi-pikachu/PPTist</a></p><p><a href="https://pptist.gitee.io/" target="_blank" rel="noopener noreferrer">https://pptist.gitee.io/</a></p><h2 id="\u4E0D\u8BA9\u5237\u65B0\u6D4F\u89C8\u5668" tabindex="-1">\u4E0D\u8BA9\u5237\u65B0\u6D4F\u89C8\u5668 <a class="header-anchor" href="#\u4E0D\u8BA9\u5237\u65B0\u6D4F\u89C8\u5668" aria-hidden="true">#</a></h2><div class="language-"><pre><code>window.onbeforeunload = (e) =&gt; {
  if (this.modifyArr.length &gt; 0) {
    e.returnValue = &quot;\u5173\u95ED\u63D0\u793A&quot;;
    return &quot;\u5173\u95ED\u63D0\u793A&quot;;
  } else {
    window.onbeforeunload = null;
  }
};
</code></pre></div>`,45),l=[o];function i(s,h,c,p,d,u){return t(),n("div",null,l)}var m=e(a,[["render",i]]);export{f as __pageData,m as default};
