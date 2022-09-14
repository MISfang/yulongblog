"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3997],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,g=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19548:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=(r(79524),["components"]),i={slug:"learn-react-event-and-state",title:"React State \u548c Event\u6559\u7a0b - \u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",authors:"kuizuo",description:"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898...",tags:["\u524d\u7aef","React"],oid:"97436637"},l=void 0,u={permalink:"/learn-react-event-and-state",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2021-03-21-learn-react-event-state.md",source:"@site/blog/develop/2021-03-21-learn-react-event-state.md",title:"React State \u548c Event\u6559\u7a0b - \u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",description:"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898...",date:"2021-03-21T00:00:00.000Z",formattedDate:"2021\u5e743\u670821\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"React",permalink:"/tags/react"}],readingTime:5.46,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/MISfang",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"learn-react-event-and-state",title:"React State \u548c Event\u6559\u7a0b - \u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",authors:"kuizuo",description:"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898...",tags:["\u524d\u7aef","React"],oid:"97436637"},prevItem:{title:"vite+vue3\u642d\u5efauniapp\u5f00\u53d1\u73af\u5883",permalink:"/vite-vue3-build-uniapp-environment"},nextItem:{title:"\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883",permalink:"/electron-vue3-development-environment"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hello, \u4eca\u5929\u6559\u4f60\u5199\u4e00\u4e2a\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668\u3002\u6211\u4f1a\u7528\u8fd9\u4e2a\u4f8b\u5b50\u6765\u89e3\u91ca react \u7684 state\uff0c\u72b6\u6001\u7ba1\u7406\uff0c\u8fd8\u6709\u4e8b\u4ef6\u5904\u7406\u3002\u8fd9\u4e2a\u5c0f\u5de5\u5177\u63d0\u4f9b\u4e86\u4e24\u4e2a\u989c\u8272\u9009\u62e9\u5668\uff0c\u5206\u522b\u53ef\u4ee5\u9009\u62e9\u6e10\u53d8\u7684\u4e24\u4e2a\u989c\u8272\uff0c\u6e10\u53d8\u7684\u89d2\u5ea6\u662f 75 \u5ea6\uff0c\u7ebf\u6027\u6e10\u53d8\u3002\u53e6\u5916\u8fd8\u6709\u4e00\u4e2a\u91cd\u7f6e\u6309\u94ae\u53ef\u4ee5\u628a\u6e10\u53d8\u6062\u590d\u6210\u521d\u59cb\u503c\u3002"))}f.isMDXComponent=!0}}]);