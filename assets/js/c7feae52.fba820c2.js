"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7829],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},p=Object.keys(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,p=t.originalType,c=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),y=u(r),g=i,m=y["".concat(c,".").concat(g)]||y[g]||s[g]||p;return r?n.createElement(m,o(o({ref:e},l),{},{components:r})):n.createElement(m,o({ref:e},l))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var p=r.length,o=new Array(p);o[0]=y;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:i,o[1]=a;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},89730:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var n=r(87462),i=r(63366),p=(r(67294),r(3905)),o=(r(79524),["components"]),a={slug:"typescript-intro",title:"\u5662\uff01\u539f\u6765\u8fd9\u5c31\u662f TypeScript",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"TypeScript \u662f JavaScript \u7684\uff0c\u5e26\u6709\u7c7b\u578b\u7684\u8d85\u96c6\uff0c\u5e76\u4e14\u53ef\u4ee5\u7f16\u8bd1\u4e3a JavaScript \u811a\u672c\uff0c\u8fd9\u7bc7\u5e45\u6587\u7ae0\u5c06\u5e26\u4f60\u8ba4\u8bc6\u4e00\u4e0b TypeScript",tags:["\u524d\u7aef","TypeScript"],bvid:"BV1xp4y1D7ux",oid:"968467412"},c=void 0,u={permalink:"/typescript-intro",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2020-06-09-typescript-intro.md",source:"@site/blog/develop/2020-06-09-typescript-intro.md",title:"\u5662\uff01\u539f\u6765\u8fd9\u5c31\u662f TypeScript",description:"TypeScript \u662f JavaScript \u7684\uff0c\u5e26\u6709\u7c7b\u578b\u7684\u8d85\u96c6\uff0c\u5e76\u4e14\u53ef\u4ee5\u7f16\u8bd1\u4e3a JavaScript \u811a\u672c\uff0c\u8fd9\u7bc7\u5e45\u6587\u7ae0\u5c06\u5e26\u4f60\u8ba4\u8bc6\u4e00\u4e0b TypeScript",date:"2020-06-09T00:00:00.000Z",formattedDate:"2020\u5e746\u67089\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:13.94,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/MISfang",imageURL:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX"}],frontMatter:{slug:"typescript-intro",title:"\u5662\uff01\u539f\u6765\u8fd9\u5c31\u662f TypeScript",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"TypeScript \u662f JavaScript \u7684\uff0c\u5e26\u6709\u7c7b\u578b\u7684\u8d85\u96c6\uff0c\u5e76\u4e14\u53ef\u4ee5\u7f16\u8bd1\u4e3a JavaScript \u811a\u672c\uff0c\u8fd9\u7bc7\u5e45\u6587\u7ae0\u5c06\u5e26\u4f60\u8ba4\u8bc6\u4e00\u4e0b TypeScript",tags:["\u524d\u7aef","TypeScript"],bvid:"BV1xp4y1D7ux",oid:"968467412"},prevItem:{title:"\u524d\u7aef\u5de5\u7a0b\u5e08\u5230\u5e95\u8981\u5b66\u5230\u4ec0\u4e48\u7a0b\u5e8f\u624d\u80fd\u53bb\u627e\u5de5\u4f5c\uff1f\u6210\u529f\u9762\u8bd5\u7684\u5fc5\u5907\u8981\u7d20\u4e0e\u56de\u7b54\u6280\u5de7",permalink:"/frontend-looking-for-jobs"},nextItem:{title:"\u7ed9\u524d\u7aef\u5de5\u7a0b\u5e08\u770b\u7684\u540e\u7aef\u79d1\u666e",permalink:"/backend-intro"}},l={authorsImageUrls:[void 0]},s=[],y={toc:s};function g(t){var e=t.components,r=(0,i.Z)(t,o);return(0,p.kt)("wrapper",(0,n.Z)({},y,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u6211\u7b2c\u4e00\u6b21\u4f7f\u7528 TypeScript \u662f 16 \u5e74\u5728\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5b66\u6821\u7684\u7b97\u6cd5\u8bfe\u662f\u4f7f\u7528 TypeScript \u5b9e\u73b0\u7684\u3002\u5f53\u65f6\u53ea\u77e5\u9053 TypeScript \u662f Angular \u5f00\u53d1\u7684\u5fc5\u5907\u8bed\u8a00\uff0c\u6ca1\u60f3\u5230\u8fd8\u80fd\u8fd9\u4e48\u901a\u7528\u3002\u540e\u6765\u5728\u5199\u4f5c\u4e1a\u7684\u65f6\u5019\uff0c\u53d1\u73b0 TypeScript \u4e5f\u5e76\u4e0d\u662f\u7279\u522b\u96be\uff0c\u53ea\u4e0d\u8fc7\u662f\u7ed9 JavaScript \u52a0\u4e0a\u4e86\u7c7b\u578b\u4fe1\u606f\uff0c\u8ba9\u4ee3\u7801\u4e0d\u90a3\u4e48\u5bb9\u6613\u51fa\u9519\uff0c\u5e76\u4e14\u652f\u6301\u9ad8\u7ea7\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8303\u5f0f\uff0c\u8ba9 JavaScript \u53d8\u5f97\u8ddf Java/c# \u5dee\u4e0d\u591a\u3002\u63a5\u4e0b\u6765\uff0c\u8fd9\u7bc7\u6587\u7ae0\u5c31\u7ed9\u4f60\u63ed\u5f00 TypeScript \u7684\u9762\u7eb1\uff0c\u5bf9\u5b83\u6765\u4e00\u4e2a\u5b8f\u89c2\u4e0a\u7684\u8ba4\u8bc6\uff0c\u7136\u540e\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u7f16\u5199\u5e76\u8fd0\u884c TypeScript \u7a0b\u5e8f\uff0c\u5982\u4f55\u5b9a\u4e49\u7c7b\u578b\uff0c\u53e6\u5916\u5047\u8bbe\u4f60\u6709 JavaScript \u57fa\u7840\u3002"))}g.isMDXComponent=!0}}]);