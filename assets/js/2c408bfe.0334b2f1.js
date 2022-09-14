"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[576],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39830:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={slug:"why-i-dont-use-qiniu-cloud",title:"\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91",date:new Date("2020-12-23T00:00:00.000Z"),authors:"kuizuo",tags:["\u968f\u7b14","cloud-service"]},u=void 0,l={permalink:"/why-i-dont-use-qiniu-cloud",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/advice\\\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91.md",source:"@site/blog\\advice\\\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91.md",title:"\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91",description:"\u4e03\u725b\u4e91\u662f\u56fd\u5185\u9c9c\u6709\u7684\u514d\u8d39\u63d0\u4f9b\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u7684\u4e00\u4e2a\u4e91\u670d\u52a1\u5546\uff0c\u548c\u817e\u8baf\u4e91\uff0c\u963f\u91cc\u4e91\u4e00\u6837\uff0c\u4f46\u8fd9\u4e24\u8005\u6536\u8d39\uff0c\u800c\u4e03\u725b\u4e91\u4e0d\u6536\u8d39\uff0c\u5f53\u7136\u4e5f\u4e0d\u662f\u7edd\u5bf9\u514d\u8d39\uff0c\u5bf9\u8c61\u5b58\u50a8\u514d\u8d39\u7a7a\u95f4 10g\uff0c\u6bcf\u4e2a\u6708\u8fd8\u6709 10g \u7684 cdn \u52a0\u901f\u670d\u52a1\uff08\u591a\u6570\u4eba\u57fa\u672c\u7528\u4e0d\u5b8c\uff09\uff0c\u8d85\u51fa\u90e8\u5206\u989d\u5916\u6536\u8d39\uff0c\u6b64\u5916 https \u6536\u8d39\u3002",date:"2020-12-23T00:00:00.000Z",formattedDate:"2020\u5e7412\u670823\u65e5",tags:[{label:"\u968f\u7b14",permalink:"/tags/\u968f\u7b14"},{label:"cloud-service",permalink:"/tags/cloud-service"}],readingTime:4.04,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/MISfang",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"why-i-dont-use-qiniu-cloud",title:"\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91",date:"2020-12-23T00:00:00.000Z",authors:"kuizuo",tags:["\u968f\u7b14","cloud-service"]},prevItem:{title:"git\u4fee\u6539\u9ed8\u8ba4\u5206\u652fmain",permalink:"/git-change-default-branch"},nextItem:{title:"\u817e\u8baf\u4e91\u4e4bCDN\u4e0eSSL\u914d\u7f6e",permalink:"/tencent-cloud-cdn-and-ssl"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e03\u725b\u4e91\u662f\u56fd\u5185\u9c9c\u6709\u7684\u514d\u8d39\u63d0\u4f9b\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u7684\u4e00\u4e2a\u4e91\u670d\u52a1\u5546\uff0c\u548c\u817e\u8baf\u4e91\uff0c\u963f\u91cc\u4e91\u4e00\u6837\uff0c\u4f46\u8fd9\u4e24\u8005\u6536\u8d39\uff0c\u800c\u4e03\u725b\u4e91\u4e0d\u6536\u8d39\uff0c\u5f53\u7136\u4e5f\u4e0d\u662f\u7edd\u5bf9\u514d\u8d39\uff0c\u5bf9\u8c61\u5b58\u50a8\u514d\u8d39\u7a7a\u95f4 10g\uff0c\u6bcf\u4e2a\u6708\u8fd8\u6709 10g \u7684 cdn \u52a0\u901f\u670d\u52a1\uff08\u591a\u6570\u4eba\u57fa\u672c\u7528\u4e0d\u5b8c\uff09\uff0c\u8d85\u51fa\u90e8\u5206\u989d\u5916\u6536\u8d39\uff0c\u6b64\u5916 https \u6536\u8d39\u3002"))}d.isMDXComponent=!0}}]);