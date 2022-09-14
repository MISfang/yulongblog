"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6514],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,u(u({ref:t},p),{},{components:r})):n.createElement(d,u({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81391:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),u=(r(79524),["components"]),i={slug:"deploy-a-docusaurus-site-part2",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e8c\uff09",authors:"kuizuo",tags:["\u524d\u7aef","\u804c\u4e1a"],oid:"94703630"},c=void 0,l={permalink:"/deploy-a-docusaurus-site-part2",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2021-03-08-deploy-a-docusaurus-site-part2.md",source:"@site/blog/develop/2021-03-08-deploy-a-docusaurus-site-part2.md",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e8c\uff09",description:"",date:"2021-03-08T00:00:00.000Z",formattedDate:"2021\u5e743\u67088\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"\u804c\u4e1a",permalink:"/tags/\u804c\u4e1a"}],readingTime:8.836666666666666,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/MISfang",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"deploy-a-docusaurus-site-part2",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e8c\uff09",authors:"kuizuo",tags:["\u524d\u7aef","\u804c\u4e1a"],oid:"94703630"},prevItem:{title:"\u4ec0\u4e48\u662f React\uff1f\u4f60\u4e3a\u4ec0\u4e48\u5e94\u8be5\u5b66React\uff1f",permalink:"/React-intro"},nextItem:{title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e00\uff09",permalink:"/deploy-a-docusaurus-site"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u770b\u4e86\u4e0a\u671f\u89c6\u9891\u7684\u8bdd\uff0c\u90a3\u4e48\u4f60\u5e94\u8be5\u5b66\u4f1a\u4e86\u600e\u4e48\u5728\u672c\u5730\u642d\u5efa\u4e00\u4e2a docusaurus \u535a\u5ba2\uff0c\u4f46\u662f\u4f60\u4e0d\u80fd\u53ea\u5728\u672c\u5730\u6765\u770b\u8fd9\u4e2a\u535a\u5ba2\u5427\uff0c\u5f97\u8ba9\u5168\u4e16\u754c\u6765\u6b23\u8d4f\u4f60\u7684\u6770\u4f5c\uff0c\u6240\u4ee5\u8bf4\u54b1\u4eec\u5f97\u628a\u8fd9\u4e2a\u535a\u5ba2\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\u3002\u90e8\u7f72\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5230\u56fd\u5916\uff0c\u662f\u514d\u8d39\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5728\u56fd\u5185\uff0c\u9700\u8981\u81ea\u5df1\u8d2d\u4e70\u4e00\u4e2a\u57df\u540d\uff0c\u8fd8\u6709\u670d\u52a1\u5668\uff0c\u5927\u6982\u6709\u4e2a 300 \u6765\u5757\u94b1\u5c31\u5dee\u4e0d\u591a\u4e86\u3002")))}m.isMDXComponent=!0}}]);