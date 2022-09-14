"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1665],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70132:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),u=(r(79524),["components"]),i={slug:"deploy-a-docusaurus-site",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e00\uff09",authors:"kuizuo",tags:["\u524d\u7aef","\u804c\u4e1a"],oid:"93748753"},c=void 0,l={permalink:"/deploy-a-docusaurus-site",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2021-03-03-deploy-a-docusaurus-site.md",source:"@site/blog/develop/2021-03-03-deploy-a-docusaurus-site.md",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e00\uff09",description:"",date:"2021-03-03T00:00:00.000Z",formattedDate:"2021\u5e743\u67083\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"\u804c\u4e1a",permalink:"/tags/\u804c\u4e1a"}],readingTime:6.376666666666667,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/MISfang",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"deploy-a-docusaurus-site",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e00\uff09",authors:"kuizuo",tags:["\u524d\u7aef","\u804c\u4e1a"],oid:"93748753"},prevItem:{title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e8c\uff09",permalink:"/deploy-a-docusaurus-site-part2"},nextItem:{title:"\u7a0b\u5e8f\u5458\u5982\u4f55\u63d0\u5347\u82f1\u8bed\u6c34\u5e73",permalink:"/learning-english-for-coders"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4ee5\u524d\u603b\u4e5f\u627e\u4e0d\u5230\u4e00\u4e2a\u6ee1\u610f\u7684\u535a\u5ba2\u7cfb\u7edf\uff0cwordpress \u8fd9\u4e2a\u7a0b\u5e8f\u53c8\u5927\uff0c\u7136\u540e\u914d\u7f6e\u4e5f\u4e0d\u65b9\u4fbf\u3002\u5360\u7528\u7684\u670d\u52a1\u5668\u7684\u8d44\u6e90\u4e5f\u591a\u3002\u6211\u5c31\u60f3\u6709\u6ca1\u6709\u4e00\u4e2a\u53c8\u7b80\u5355\u53c8\u5feb\u901f\u7684\u535a\u5ba2\u5e73\u53f0\uff0c\u540e\u6765\u53d1\u73b0\u4e86\u4e00\u4e9b\u9759\u6001\u7684\u7f51\u7ad9\u751f\u6210\u5668\uff0c\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"hexo")," \u8fd9\u79cd\uff0c\u4f46\u662f\u53d1\u73b0\u4e0a\u9762\u7684\u4e3b\u9898\u53c8\u4e0d\u597d\u770b\uff0c\u53c8\u61d2\u5f97\u81ea\u5df1\u53bb\u5199\u3002\u540e\u6765\u5c31\u6709\u4e00\u9635\u5b50\u6211\u5c31\u76f4\u63a5\u628a\u535a\u5ba2\u5c31\u53d1\u5e03\u5728\u4e86\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u7684\u535a\u5ba2\u5e73\u53f0\u4e0a\u3002\u73b0\u5728\u53d1\u73b0\u4e86\u8fd9\u4e2a docusaurus, \u5b83\u7684\u4e3b\u9898\u8ddf\u6211\u4e4b\u524d\u770b\u5230\u7684\u4e00\u4e2a\u5927\u4f6c Dan Abramov\uff0c\u5b83\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://overreacted.io"},"overreacted.io")," \u535a\u5ba2\uff0c\u98ce\u683c\u662f\u4e00\u6a21\u4e00\u6837\u7684\uff0c\u56e0\u4e3a\u4ed6\u662f react \u7684\u4f5c\u8005\u4e4b\u4e00\uff0c\u4f30\u8ba1\u8fd9\u4e2a\u4ed6\u4eec\u8fd9\u4e2a\u6837\u5f0f\u90fd\u662f\u4e92\u76f8\u501f\u9274\uff0c\u5b83\u8fd9\u4e2a\u4e3b\u9898\u53ef\u4ee5\u5207\u6362\u6697\u9ed1\u548c\u767d\u5929\u6a21\u5f0f\uff0c\u6bd4\u8f83\u597d\u770b\u3002\u5b89\u88c5\u548c\u90e8\u7f72\u4e5f\u7279\u522b\u7b80\u5355\uff0c\u6211\u7684\u535a\u5ba2\u4e5f\u662f\u7528\u5b83\u8fd9\u4e2a\u642d\u5efa\u7684\u3002"))}d.isMDXComponent=!0}}]);