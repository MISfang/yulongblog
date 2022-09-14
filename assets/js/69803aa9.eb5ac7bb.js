"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3847],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),g=a,f=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9294:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(79524),["components"]),c={slug:"learn-react-event-and-state",title:"React State \u548c Event\u6559\u7a0b - \u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898...",tags:["\u524d\u7aef","React"],bvid:"av97436637",oid:"97436637"},u=void 0,l={permalink:"/learn-react-event-and-state",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2020-03-21-learn-react-event-state.md",source:"@site/blog/develop/2020-03-21-learn-react-event-state.md",title:"React State \u548c Event\u6559\u7a0b - \u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",description:"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898...",date:"2020-03-21T00:00:00.000Z",formattedDate:"2020\u5e743\u670821\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"React",permalink:"/tags/react"}],readingTime:5.46,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/MISfang",imageURL:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX"}],frontMatter:{slug:"learn-react-event-and-state",title:"React State \u548c Event\u6559\u7a0b - \u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898...",tags:["\u524d\u7aef","React"],bvid:"av97436637",oid:"97436637"},prevItem:{title:"CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7\u7279\u5f02\u6027\u6743\u91cd\u8be6\u89e3",permalink:"/css-selector-specificity"},nextItem:{title:"React Props \u6559\u7a0b - \u5236\u4f5c\u4e00\u4e2a\u6309\u94ae",permalink:"/learn-react-props-buttons"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hello, \u4eca\u5929\u6559\u4f60\u5199\u4e00\u4e2a\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668\u3002\u6211\u4f1a\u7528\u8fd9\u4e2a\u4f8b\u5b50\u6765\u89e3\u91ca react \u7684 state\uff0c\u72b6\u6001\u7ba1\u7406\uff0c\u8fd8\u6709\u4e8b\u4ef6\u5904\u7406\u3002\u8fd9\u4e2a\u5c0f\u5de5\u5177\u63d0\u4f9b\u4e86\u4e24\u4e2a\u989c\u8272\u9009\u62e9\u5668\uff0c\u5206\u522b\u53ef\u4ee5\u9009\u62e9\u6e10\u53d8\u7684\u4e24\u4e2a\u989c\u8272\uff0c\u6e10\u53d8\u7684\u89d2\u5ea6\u662f 75 \u5ea6\uff0c\u7ebf\u6027\u6e10\u53d8\u3002\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u91cd\u7f6e\u6309\u94ae\u53ef\u4ee5\u628a\u6e10\u53d8\u6062\u590d\u6210\u521d\u59cb\u503c\u3002"))}g.isMDXComponent=!0}}]);