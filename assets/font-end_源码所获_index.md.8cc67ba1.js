import{_ as n,c as e,o as t,a as o}from"./app.d4eb32af.js";const q='{"title":"form-generator","description":"","frontmatter":{},"headers":[{"level":2,"title":"svg \u7CBE\u7075\u56FE\u4F7F\u7528\u65B9\u6848","slug":"svg-\u7CBE\u7075\u56FE\u4F7F\u7528\u65B9\u6848"}],"relativePath":"font-end/\u6E90\u7801\u6240\u83B7/index.md"}',s={},r=o(`<h1 id="form-generator" tabindex="-1">form-generator <a class="header-anchor" href="#form-generator" aria-hidden="true">#</a></h1><h2 id="svg-\u7CBE\u7075\u56FE\u4F7F\u7528\u65B9\u6848" tabindex="-1">svg \u7CBE\u7075\u56FE\u4F7F\u7528\u65B9\u6848 <a class="header-anchor" href="#svg-\u7CBE\u7075\u56FE\u4F7F\u7528\u65B9\u6848" aria-hidden="true">#</a></h2><div class="language-"><pre><code>&lt;svg-icon style=&quot;width: 30px; height: 30px&quot; icon-class=&quot;pdf&quot; /&gt;
</code></pre></div><div class="language-"><pre><code>&lt;!-- svg-icon --&gt;

&lt;template&gt;
  &lt;div
    v-if=&quot;isExternal&quot;
    :style=&quot;styleExternalIcon&quot;
    class=&quot;svg-external-icon svg-icon&quot;
    v-on=&quot;$listeners&quot;
  /&gt;
  &lt;svg
    v-else
    :class=&quot;svgClass&quot;
    aria-hidden=&quot;true&quot;
    width=&quot;30px&quot;
    height=&quot;30px&quot;
    v-on=&quot;$listeners&quot;
  &gt;
    &lt;use :xlink:href=&quot;iconName&quot; /&gt;
  &lt;/svg&gt;
&lt;/template&gt;

&lt;script&gt;
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export default {
  name: &#39;SvgIcon&#39;,
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: &#39;&#39;
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.iconClass)
    },
    iconName() {
      return \`#icon-\${this.iconClass}\`
    },
    svgClass() {
      if (this.className) {
        return \`svg-icon \${this.className}\`
      }
      return &#39;svg-icon&#39;
    },
    styleExternalIcon() {
      return {
        mask: \`url(\${this.iconClass}) no-repeat 50% 50%\`,
        &#39;-webkit-mask&#39;: \`url(\${this.iconClass}) no-repeat 50% 50%\`
      }
    }
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
&lt;/style&gt;

</code></pre></div><div class="language-"><pre><code>&lt;!-- icon \u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6 --&gt;
&lt;!-- index.js --&gt;
import Vue from &#39;vue&#39;
import SvgIcon from &#39;@/components/SvgIcon&#39;// svg component

// register globally
Vue.component(&#39;svg-icon&#39;, SvgIcon)

const req = require.context(&#39;./&#39;, false, /\\.svg$/)
const requireAll = requireContext =&gt; requireContext.keys().map(requireContext)
requireAll(req)

</code></pre></div><div class="language-"><pre><code>&lt;!-- main.js\u4E2D\u5F15\u5165 --&gt;
import &#39;@/assets/icons&#39;

</code></pre></div><div class="language-"><pre><code>&lt;!-- vue.config.js\u4E2D\u914D\u7F6E --&gt;
config.module.rule(&quot;svg&quot;).exclude.add(resolve(&quot;src/assets/icons&quot;)).end();
config.module
  .rule(&quot;icons&quot;)
  .test(/\\.svg$/)
  .include.add(resolve(&quot;src/assets/icons&quot;))
  .end()
  .use(&quot;svg-sprite-loader&quot;)
  .loader(&quot;svg-sprite-loader&quot;)
  .options({
    symbolId: &quot;icon-[name]&quot;,
  })
  .end();
</code></pre></div>`,7),i=[r];function a(l,c,u,d,g,p){return t(),e("div",null,i)}var m=n(s,[["render",a]]);export{q as __pageData,m as default};
