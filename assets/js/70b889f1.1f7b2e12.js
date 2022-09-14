"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1668],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,b=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=(n(79524),["components"]),l={slug:"css-flex-box-layout",title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",authors:"kuizuo",description:"CSS flexbox \u5e03\u5c40\u5341\u5206\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u5bf9\u5143\u7d20\u8fdb\u884c\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\uff0c\u4e5f\u652f\u6301\u81ea\u7531\u7f29\u653e\uff0c\u65b9\u4fbf\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u5f00\u53d1\u3002\u8fd9\u4e2a\u6587\u7ae0\u5c31\u6559\u4f60\u8ba4\u8bc6 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01",tags:["\u524d\u7aef","React"],oid:"99087136"},c=void 0,u={permalink:"/css-flex-box-layout",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2021-04-05-css-flex-box-layout.md",source:"@site/blog/develop/2021-04-05-css-flex-box-layout.md",title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",description:"CSS flexbox \u5e03\u5c40\u5341\u5206\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u5bf9\u5143\u7d20\u8fdb\u884c\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\uff0c\u4e5f\u652f\u6301\u81ea\u7531\u7f29\u653e\uff0c\u65b9\u4fbf\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u5f00\u53d1\u3002\u8fd9\u4e2a\u6587\u7ae0\u5c31\u6559\u4f60\u8ba4\u8bc6 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01",date:"2021-04-05T00:00:00.000Z",formattedDate:"2021\u5e744\u67085\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"React",permalink:"/tags/react"}],readingTime:12.443333333333333,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/MISfang",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"css-flex-box-layout",title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",authors:"kuizuo",description:"CSS flexbox \u5e03\u5c40\u5341\u5206\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u5bf9\u5143\u7d20\u8fdb\u884c\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\uff0c\u4e5f\u652f\u6301\u81ea\u7531\u7f29\u653e\uff0c\u65b9\u4fbf\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u5f00\u53d1\u3002\u8fd9\u4e2a\u6587\u7ae0\u5c31\u6559\u4f60\u8ba4\u8bc6 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01",tags:["\u524d\u7aef","React"],oid:"99087136"},prevItem:{title:"\u642d\u5efaGitLab\u4ee3\u7801\u7ba1\u7406\u4ed3\u5e93",permalink:"/gitlab-code-management-environment"},nextItem:{title:"CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7\u7279\u5f02\u6027\u6743\u91cd\u8be6\u89e3",permalink:"/css-selector-specificity"}},p={authorsImageUrls:[void 0]},f=[],s={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 CSS flexbox \u5e03\u5c40\u51fa\u73b0\u4ee5\u524d\uff0c\u5982\u679c\u8981\u63a7\u5236 HTML \u5143\u7d20\u7684\u5e03\u5c40\uff0c\u8981\u7528\u5230\u5f88\u591a\u79cd\u5947\u8469\u7684\u65b9\u5f0f\u3002\u5728\u6c34\u5e73\u65b9\u5411\u4e0a\u5f97\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"float"),"\u63a7\u5236\u5de6\u53f3\u5bf9\u9f50\uff0c\u7a0d\u4e00\u4e0d\u6ce8\u610f\uff0c\u5c31\u4f1a\u6709\u6d6e\u52a8\u7684\u5143\u7d20\u98de\u6765\u98de\u53bb~\u3002\u5728\u5782\u76f4\u65b9\u5411\u4e0a\u5c31\u66f4\u662f\u767e\u5bb6\u4e89\u9e23\u4e86\uff1a\u8981\u4e48\u624b\u52a8\u8ba1\u7b97\u9ad8\u5ea6\u7136\u540e\u7b97\u51fa\u4e2d\u5fc3\u70b9\uff0c\u8981\u4e48\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"line-height")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," \u7684\u7ed3\u5408\uff0c\u8981\u4e48\u7528\u5341\u4e4b\u516b\u4e5d\u4e0d\u751f\u6548\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"vertical-align")," \u5c5e\u6027\u7b49\u7b49\u7b49\u7b49\u3002\u81ea\u4ece flex-box \u51fa\u73b0\u4ee5\u540e\uff0c\u4e00\u5207\u4f3c\u4e4e\u5c31\u8c41\u7136\u5f00\u6717\u4e86\uff0c\u6c34\u5e73\u5782\u76f4\u5404\u79cd\u82b1\u5f0f\u5bf9\u9f50\uff0c\u7a7a\u95f4\u5206\u914d\u7531\u4f60\u505a\u4e3b\u3002\u5f53\u7136\uff0c\u8981\u7528\u597d\u5b83\uff0c\u7528\u5bf9\u5b83\u4e5f\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b\uff0c\u4eca\u5929\u5c31\u7ed9\u4f60\u8bf4\u8bf4 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01\uff08\u535a\u5ba2\u4e2d\u7684\u793a\u4f8b\u90fd\u662f\u771f\u5b9e\u7684 HTML \u4ee3\u7801\uff0c\u53ef\u4ee5\u4f7f\u7528 chrome \u5f00\u53d1\u8005\u5de5\u5177\u67e5\u770b\u5c5e\u6027\u3002(\u6b64\u6587\u4e3a\u4e86\u6f14\u793a\u67d0\u4e9b flex \u793a\u4f8b\uff0c\u5728\u5c0f\u5c4f\u5e55\u4e0b\u4f1a\u6709\u6a2a\u5411\u6eda\u52a8\u6761)"))}m.isMDXComponent=!0}}]);