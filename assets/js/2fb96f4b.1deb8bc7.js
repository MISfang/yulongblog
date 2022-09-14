"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7130],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=s(n),y=o,m=f["".concat(l,".").concat(y)]||f[y]||u[y]||i;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8456:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={slug:"css-font-display-intro",title:"Web \u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528 CSS font-display \u63a7\u5236\u5b57\u4f53\u52a0\u8f7d\u548c\u66ff\u6362",authors:"kuizuo",description:"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 `font-display` \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002",tags:["\u524d\u7aef","css","\u6027\u80fd\u4f18\u5316"],activityId:"500549825279095997"},l=void 0,s={permalink:"/css-font-display-intro",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2022-03-09-css-font-display-intro.md",source:"@site/blog/develop/2022-03-09-css-font-display-intro.md",title:"Web \u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528 CSS font-display \u63a7\u5236\u5b57\u4f53\u52a0\u8f7d\u548c\u66ff\u6362",description:"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 `font-display` \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002",date:"2022-03-09T00:00:00.000Z",formattedDate:"2022\u5e743\u67089\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"css",permalink:"/tags/css"},{label:"\u6027\u80fd\u4f18\u5316",permalink:"/tags/\u6027\u80fd\u4f18\u5316"}],readingTime:5.2,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/MISfang",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"css-font-display-intro",title:"Web \u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528 CSS font-display \u63a7\u5236\u5b57\u4f53\u52a0\u8f7d\u548c\u66ff\u6362",authors:"kuizuo",description:"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 `font-display` \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002",tags:["\u524d\u7aef","css","\u6027\u80fd\u4f18\u5316"],activityId:"500549825279095997"},prevItem:{title:"\u5b9e\u73b0\u524d\u7aef\u7f51\u9875 WebRTC \u89c6\u9891\u901a\u8bdd\u4ee5\u53ca\u6362\u8138\u7279\u6548",permalink:"/webrtc-avatarify-face-swap-tutorial"},nextItem:{title:"JavaScript \u6e38\u620f\u5f00\u53d1 - \u7269\u7406\u78b0\u649e\u5f15\u64ce\u5b9e\u73b0",permalink:"/javascript-collision-physics"}},p={authorsImageUrls:[void 0]},u=[],f={toc:u};function y(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"font-display")," \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002"))}y.isMDXComponent=!0}}]);