"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3465],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=l(n),m=o,g=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45160:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={slug:"css-font-display-intro",title:"Web \u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528 CSS font-display \u63a7\u5236\u5b57\u4f53\u52a0\u8f7d\u548c\u66ff\u6362",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 `font-display` \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002",tags:["\u524d\u7aef","css","\u6027\u80fd\u4f18\u5316"],activityId:"500549825279095997"},c=void 0,l={permalink:"/css-font-display-intro",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2021-03-09-css-font-display-intro.md",source:"@site/blog/develop/2021-03-09-css-font-display-intro.md",title:"Web \u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528 CSS font-display \u63a7\u5236\u5b57\u4f53\u52a0\u8f7d\u548c\u66ff\u6362",description:"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 `font-display` \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002",date:"2021-03-09T00:00:00.000Z",formattedDate:"2021\u5e743\u67089\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"css",permalink:"/tags/css"},{label:"\u6027\u80fd\u4f18\u5316",permalink:"/tags/\u6027\u80fd\u4f18\u5316"}],readingTime:5.2,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/MISfang",imageURL:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX"}],frontMatter:{slug:"css-font-display-intro",title:"Web \u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528 CSS font-display \u63a7\u5236\u5b57\u4f53\u52a0\u8f7d\u548c\u66ff\u6362",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 `font-display` \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002",tags:["\u524d\u7aef","css","\u6027\u80fd\u4f18\u5316"],activityId:"500549825279095997"},prevItem:{title:"\u5b9e\u73b0\u524d\u7aef\u7f51\u9875 WebRTC \u89c6\u9891\u901a\u8bdd\u4ee5\u53ca\u6362\u8138\u7279\u6548",permalink:"/webrtc-avatarify-face-swap-tutorial"},nextItem:{title:"JavaScript \u6e38\u620f\u5f00\u53d1 - \u7269\u7406\u78b0\u649e\u5f15\u64ce\u5b9e\u73b0",permalink:"/javascript-collision-physics"}},u={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"font-display")," \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002"))}m.isMDXComponent=!0}}]);