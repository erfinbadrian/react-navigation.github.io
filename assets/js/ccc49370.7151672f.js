"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[46103],{65203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(67294);var a=n(86010),r=n(10833),i=n(35281),s=n(9460),o=n(61460),l=n(30390),c=n(95999),d=n(32244),m=n(85893);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.Z,{...n,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(d.Z,{...t,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){var e;const{assets:t,metadata:n}=(0,s.C)(),{title:a,description:i,date:o,tags:l,authors:c,frontMatter:d}=n,{keywords:u}=d,h=null!=(e=t.image)?e:d.image;return(0,m.jsxs)(r.d,{title:a,description:i,keywords:u,image:h,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var g=n(39407),v=n(22212);function p(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:r}=(0,s.C)(),{nextItem:i,prevItem:c,frontMatter:d,unlisted:h}=a,{hide_table_of_contents:p,toc_min_heading_level:f,toc_max_heading_level:x}=d;return(0,m.jsxs)(o.Z,{sidebar:t,toc:!p&&r.length>0?(0,m.jsx)(g.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:x}):void 0,children:[h&&(0,m.jsx)(v.Z,{}),(0,m.jsx)(l.Z,{children:n}),(i||c)&&(0,m.jsx)(u,{nextItem:i,prevItem:c})]})}function f(e){const t=e.content;return(0,m.jsx)(s.n,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(r.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(p,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},39407:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var a=n(86010),r=n(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=n(85893);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(r.Z,{...n,linkClassName:o,linkActiveClassName:l})})}},93743:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),r=n(86668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){var n;let{anchorTopOffset:a}=t;const r=e.find((e=>o(e).top>=a));if(r){var i;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(i=e[e.indexOf(r)-1])?i:null}return null!=(n=e[e.length-1])?n:null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(39960),u=n(85893);function h(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?(0,u.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const v=(0,r.L)(),p=null!=c?c:v.tableOfContents.minHeadingLevel,f=null!=m?m:v.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>s({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return d((0,a.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:f}}),[o,l,p,f])),(0,u.jsx)(g,{toc:x,className:n,linkClassName:o,...h})}},22212:(e,t,n)=>{n.d(t,{Z:()=>h});n(67294);var a=n(86010),r=n(95999),i=n(35742),s=n(85893);function o(){return(0,s.jsx)(r.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(r.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(35281),m=n(59047);function u(e){let{className:t}=e;return(0,s.jsx)(m.Z,{type:"caution",title:(0,s.jsx)(o,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(u,{...e})]})}},55946:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83726),r=n(92949),i=n(11925),s=(n(9286),n(67294)),o=n(85893);const l={"react-native-safe-area-context":"*","react-native-screens":"*"},c={7:{"@react-navigation/bottom-tabs":["7.0.0-alpha.7",l],"@react-navigation/core":"7.0.0-alpha.6","@react-navigation/native":"7.0.0-alpha.6","@react-navigation/drawer":["7.0.0-alpha.7",{...l,"react-native-reanimated":"*"}],"@react-navigation/elements":["2.0.0-alpha.4",l],"@react-navigation/material-top-tabs":["7.0.0-alpha.6",{...l,"react-native-pager-view":"*"}],"@react-navigation/native-stack":["7.0.0-alpha.7",l],"@react-navigation/routers":"7.0.0-alpha.4","@react-navigation/stack":["7.0.0-alpha.7",{...l,"react-native-gesture-handler":"*"}],"react-native-drawer-layout":["4.0.0-alpha.3",{"react-native-gesture-handler":"*","react-native-reanimated":"*"}],"react-native-tab-view":["4.0.0-alpha.2",{"react-native-pager-view":"*"}]}};const d={...a.Z,pre:function(e){let{children:t,"data-name":n,"data-snack":a,"data-version":l,"data-dependencies":d,...m}=e;const{colorMode:u}=(0,r.I)();if(a){const e=s.Children.only(t).props.children;if("string"!=typeof e)throw new Error("Playground code must be a string, but received "+typeof e);const r=d?Object.fromEntries(d.split(",").map((e=>e.split("@")))):{};Object.assign(r,Object.entries(c[l]).reduce(((t,n)=>{let[a,r]=n;if(e.includes("from '"+a+"'"))if(Array.isArray(r)){const[e,n]=r;Object.assign(t,{[a]:e,...n})}else t[a]=r;return t}),{}));const h=new URL("https://staging-snack.expo.dev");if(n&&h.searchParams.set("name",n),h.searchParams.set("code",e.split("\n").filter((e=>["// highlight-start","// highlight-end","// highlight-next-line","// codeblock-focus-start","// codeblock-focus-end"].every((t=>e.trim()!==t)))).join("\n")),h.searchParams.set("dependencies",Object.entries(r).map((e=>{let[t,n]=e;return t+"@"+n})).join(",")),h.searchParams.set("platform","web"),h.searchParams.set("supportedPlatforms","ios,android,web"),h.searchParams.set("preview","true"),h.searchParams.set("hideQueryParams","true"),"embed"===a)return h.searchParams.set("theme","dark"===u?"dark":"light"),h.pathname="embedded",(0,o.jsx)("iframe",{src:h.href,style:{width:"100%",height:660,border:"none",border:"1px solid var(--ifm-table-border-color)",borderRadius:"var(--ifm-global-radius)",overflow:"hidden"}});if(e.includes("// codeblock-focus-start")){const n=e.split("\n");let a,r="",i=!1;for(const e of n)"// codeblock-focus-start"===e.trim()?i=!0:"// codeblock-focus-end"===e.trim()?i=!1:i&&(void 0===a&&(a=e.match(/^\s*/)[0]),e.startsWith(a)?r+=e.slice(a.length)+"\n":r+=e+"\n");t=s.Children.map(t,(e=>s.cloneElement(e,{children:r})))}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{...m,children:t}),(0,o.jsxs)("a",{className:"snack-sample-link","data-snack":"true",target:"_blank",href:h.href,children:["Try this example on Snack"," ",(0,o.jsx)("svg",{width:"14px",height:"14px",viewBox:"0 0 16 16",style:{verticalAlign:"-1px"},children:(0,o.jsxs)("g",{stroke:"none",strokeWidth:"1",fill:"none",children:[(0,o.jsx)("polyline",{stroke:"currentColor",points:"8.5 0.5 15.5 0.5 15.5 7.5"}),(0,o.jsx)("path",{d:"M8,8 L15.0710678,0.928932188",stroke:"currentColor"}),(0,o.jsx)("polyline",{stroke:"currentColor",points:"9.06944444 3.5 1.5 3.5 1.5 14.5 12.5 14.5 12.5 6.93055556"})]})})]})]})}return(0,o.jsx)(i.Z,{...m,children:t})}}}}]);