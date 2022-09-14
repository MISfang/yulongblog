"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8506],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,g=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6313:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=(r(79524),["components"]),l={slug:"css-flex-box-layout",title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"CSS flexbox \u5e03\u5c40\u5341\u5206\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u5bf9\u5143\u7d20\u8fdb\u884c\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\uff0c\u4e5f\u652f\u6301\u81ea\u7531\u7f29\u653e\uff0c\u65b9\u4fbf\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u5f00\u53d1\u3002\u8fd9\u4e2a\u6587\u7ae0\u5c31\u6559\u4f60\u8ba4\u8bc6 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01",tags:["\u524d\u7aef","React"],bvid:"BV1P7411m7Nu",oid:"99087136"},u=void 0,c={permalink:"/css-flex-box-layout",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2020-04-05-css-flex-box-layout.md",source:"@site/blog/develop/2020-04-05-css-flex-box-layout.md",title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",description:"CSS flexbox \u5e03\u5c40\u5341\u5206\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u5bf9\u5143\u7d20\u8fdb\u884c\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\uff0c\u4e5f\u652f\u6301\u81ea\u7531\u7f29\u653e\uff0c\u65b9\u4fbf\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u5f00\u53d1\u3002\u8fd9\u4e2a\u6587\u7ae0\u5c31\u6559\u4f60\u8ba4\u8bc6 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01",date:"2020-04-05T00:00:00.000Z",formattedDate:"2020\u5e744\u67085\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"React",permalink:"/tags/react"}],readingTime:12.443333333333333,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/MISfang",imageURL:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX"}],frontMatter:{slug:"css-flex-box-layout",title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"CSS flexbox \u5e03\u5c40\u5341\u5206\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u5bf9\u5143\u7d20\u8fdb\u884c\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\uff0c\u4e5f\u652f\u6301\u81ea\u7531\u7f29\u653e\uff0c\u65b9\u4fbf\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u5f00\u53d1\u3002\u8fd9\u4e2a\u6587\u7ae0\u5c31\u6559\u4f60\u8ba4\u8bc6 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01",tags:["\u524d\u7aef","React"],bvid:"BV1P7411m7Nu",oid:"99087136"},prevItem:{title:"5\u4e2a\u6280\u5de7\u52a9\u4f60\u6210\u4e3a CSS \u5927\u795e",permalink:"/5-tips-to-master-css"},nextItem:{title:"CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7\u7279\u5f02\u6027\u6743\u91cd\u8be6\u89e3",permalink:"/css-selector-specificity"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 CSS flexbox \u5e03\u5c40\u51fa\u73b0\u4ee5\u524d\uff0c\u5982\u679c\u8981\u63a7\u5236 HTML \u5143\u7d20\u7684\u5e03\u5c40\uff0c\u8981\u7528\u5230\u5f88\u591a\u79cd\u5947\u8469\u7684\u65b9\u5f0f\u3002\u5728\u6c34\u5e73\u65b9\u5411\u4e0a\u5f97\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"float"),"\u63a7\u5236\u5de6\u53f3\u5bf9\u9f50\uff0c\u7a0d\u4e00\u4e0d\u6ce8\u610f\uff0c\u5c31\u4f1a\u6709\u6d6e\u52a8\u7684\u5143\u7d20\u98de\u6765\u98de\u53bb~\u3002\u5728\u5782\u76f4\u65b9\u5411\u4e0a\u5c31\u66f4\u662f\u767e\u5bb6\u4e89\u9e23\u4e86\uff1a\u8981\u4e48\u624b\u52a8\u8ba1\u7b97\u9ad8\u5ea6\u7136\u540e\u7b97\u51fa\u4e2d\u5fc3\u70b9\uff0c\u8981\u4e48\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"line-height")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," \u7684\u7ed3\u5408\uff0c\u8981\u4e48\u7528\u5341\u4e4b\u516b\u4e5d\u4e0d\u751f\u6548\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"vertical-align")," \u5c5e\u6027\u7b49\u7b49\u7b49\u7b49\u3002\u81ea\u4ece flex-box \u51fa\u73b0\u4ee5\u540e\uff0c\u4e00\u5207\u4f3c\u4e4e\u5c31\u8c41\u7136\u5f00\u6717\u4e86\uff0c\u6c34\u5e73\u5782\u76f4\u5404\u79cd\u82b1\u5f0f\u5bf9\u9f50\uff0c\u7a7a\u95f4\u5206\u914d\u7531\u4f60\u505a\u4e3b\u3002\u5f53\u7136\uff0c\u8981\u7528\u597d\u5b83\uff0c\u7528\u5bf9\u5b83\u4e5f\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b\uff0c\u4eca\u5929\u5c31\u7ed9\u4f60\u8bf4\u8bf4 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01\uff08\u535a\u5ba2\u4e2d\u7684\u793a\u4f8b\u90fd\u662f\u771f\u5b9e\u7684 HTML \u4ee3\u7801\uff0c\u53ef\u4ee5\u4f7f\u7528 chrome \u5f00\u53d1\u8005\u5de5\u5177\u67e5\u770b\u5c5e\u6027\u3002(\u6b64\u6587\u4e3a\u4e86\u6f14\u793a\u67d0\u4e9b flex \u793a\u4f8b\uff0c\u5728\u5c0f\u5c4f\u5e55\u4e0b\u4f1a\u6709\u6a2a\u5411\u6eda\u52a8\u6761)"))}m.isMDXComponent=!0}}]);