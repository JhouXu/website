function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as o,bV as p,bW as u,bX as c,bY as l,bZ as f,b_ as d,b$ as m,c0 as h,c1 as b,c2 as A,Y as g,d as _,u as P,l as v,z as R,c3 as w,c4 as y,c5 as C,a5 as E}from"./chunks/framework.D9nMkR03.js";import{R as T}from"./chunks/theme.CvprvIXz.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(T),S=_({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=P();return v(()=>{R(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&w(),y(),C(),s.setup&&s.setup(),()=>E(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=j(),t=V();t.provide(u,e);const a=c(e.route);return t.provide(l,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function V(){return h(S)}function j(){let e=o,t;return b(a=>{let n=A(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=g(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{D as createApp};
