"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1694],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),s=a,d=g["".concat(p,".").concat(s)]||g[s]||m[s]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16476:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(91894),l=["components"],p={slug:"web-performance-optimization-image-lazy-loading",title:"Web\u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528\u56fe\u7247\u61d2\u52a0\u8f7d\u63a8\u8fdf\u5c4f\u5e55\u5916\u56fe\u7247\u7684\u52a0\u8f7d",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"\u5728\u4f7f\u7528 chrome \u7684 lighthouse \u5bf9\u7f51\u7ad9\u8fdb\u884c\u6d4b\u901f\u4e4b\u540e\uff0c\u53d1\u73b0\u6709\u4e00\u6761\u4f18\u5316\u63d0\u793a\uff1a\u63a8\u8fdf\u5c4f\u5e55\u5916\u7684\u56fe\u7247\u52a0\u8f7d\u3002\u4e4b\u524d\u6709\u770b\u5230\u8fc7\u8981\u5b9e\u73b0\u8fd9\u6837\u7684\u6548\u679c\u9700\u8981\u4f7f\u7528 lazy loading\uff0c\u56fe\u7247\u61d2\u52a0\u8f7d\uff0c\u4f46\u662f\u9700\u8981\u4f7f\u7528 js \u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\uff0c\u7531\u4e8e\u672c\u4eba\u5341\u5206\u61d2\u60f0\uff0c\u4e0d\u60f3\u7528\u592a\u590d\u6742\u7684\u4ee3\u7801\uff0c\u4e8e\u662f\u5728\u7f51\u4e0a\u641c\u7d22\u4e86\u4e00\u756a\uff0c\u53d1\u73b0 `<img>`\xa0 \u6807\u7b7e\u539f\u751f\u652f\u6301\u61d2\u52a0\u8f7d\u3002",tags:["\u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316"],activityId:"505751086508281992"},c=void 0,u={permalink:"/web-performance-optimization-image-lazy-loading",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2021-03-23-web-performance-optimization-image-lazy-loading.md",source:"@site/blog/develop/2021-03-23-web-performance-optimization-image-lazy-loading.md",title:"Web\u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528\u56fe\u7247\u61d2\u52a0\u8f7d\u63a8\u8fdf\u5c4f\u5e55\u5916\u56fe\u7247\u7684\u52a0\u8f7d",description:"\u5728\u4f7f\u7528 chrome \u7684 lighthouse \u5bf9\u7f51\u7ad9\u8fdb\u884c\u6d4b\u901f\u4e4b\u540e\uff0c\u53d1\u73b0\u6709\u4e00\u6761\u4f18\u5316\u63d0\u793a\uff1a\u63a8\u8fdf\u5c4f\u5e55\u5916\u7684\u56fe\u7247\u52a0\u8f7d\u3002\u4e4b\u524d\u6709\u770b\u5230\u8fc7\u8981\u5b9e\u73b0\u8fd9\u6837\u7684\u6548\u679c\u9700\u8981\u4f7f\u7528 lazy loading\uff0c\u56fe\u7247\u61d2\u52a0\u8f7d\uff0c\u4f46\u662f\u9700\u8981\u4f7f\u7528 js \u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\uff0c\u7531\u4e8e\u672c\u4eba\u5341\u5206\u61d2\u60f0\uff0c\u4e0d\u60f3\u7528\u592a\u590d\u6742\u7684\u4ee3\u7801\uff0c\u4e8e\u662f\u5728\u7f51\u4e0a\u641c\u7d22\u4e86\u4e00\u756a\uff0c\u53d1\u73b0 `<img>`\xa0 \u6807\u7b7e\u539f\u751f\u652f\u6301\u61d2\u52a0\u8f7d\u3002",date:"2021-03-23T00:00:00.000Z",formattedDate:"2021\u5e743\u670823\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"JavaScript",permalink:"/tags/java-script"},{label:"\u6027\u80fd\u4f18\u5316",permalink:"/tags/\u6027\u80fd\u4f18\u5316"}],readingTime:2.41,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/MISfang",imageURL:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX"}],frontMatter:{slug:"web-performance-optimization-image-lazy-loading",title:"Web\u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528\u56fe\u7247\u61d2\u52a0\u8f7d\u63a8\u8fdf\u5c4f\u5e55\u5916\u56fe\u7247\u7684\u52a0\u8f7d",author:"\u65b9\u5b87\u9f99",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"\u5728\u4f7f\u7528 chrome \u7684 lighthouse \u5bf9\u7f51\u7ad9\u8fdb\u884c\u6d4b\u901f\u4e4b\u540e\uff0c\u53d1\u73b0\u6709\u4e00\u6761\u4f18\u5316\u63d0\u793a\uff1a\u63a8\u8fdf\u5c4f\u5e55\u5916\u7684\u56fe\u7247\u52a0\u8f7d\u3002\u4e4b\u524d\u6709\u770b\u5230\u8fc7\u8981\u5b9e\u73b0\u8fd9\u6837\u7684\u6548\u679c\u9700\u8981\u4f7f\u7528 lazy loading\uff0c\u56fe\u7247\u61d2\u52a0\u8f7d\uff0c\u4f46\u662f\u9700\u8981\u4f7f\u7528 js \u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\uff0c\u7531\u4e8e\u672c\u4eba\u5341\u5206\u61d2\u60f0\uff0c\u4e0d\u60f3\u7528\u592a\u590d\u6742\u7684\u4ee3\u7801\uff0c\u4e8e\u662f\u5728\u7f51\u4e0a\u641c\u7d22\u4e86\u4e00\u756a\uff0c\u53d1\u73b0 `<img>`\xa0 \u6807\u7b7e\u539f\u751f\u652f\u6301\u61d2\u52a0\u8f7d\u3002",tags:["\u524d\u7aef","JavaScript","\u6027\u80fd\u4f18\u5316"],activityId:"505751086508281992"},prevItem:{title:"vite+vue3\u642d\u5efauniapp\u5f00\u53d1\u73af\u5883",permalink:"/vite-vue3-build-uniapp-environment"},nextItem:{title:"\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883",permalink:"/electron-vue3-development-environment"}},m={authorsImageUrls:[void 0]},g=[{value:"\u4e3a\u4ec0\u4e48\u8981\u61d2\u52a0\u8f7d",id:"\u4e3a\u4ec0\u4e48\u8981\u61d2\u52a0\u8f7d",level:2},{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",level:2},{value:"\u6d4f\u89c8\u5668\u652f\u6301",id:"\u6d4f\u89c8\u5668\u652f\u6301",level:2}],s={toc:g};function d(e){var t=e.components,p=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 chrome \u7684 lighthouse \u5bf9\u7f51\u7ad9\u8fdb\u884c\u6d4b\u901f\u4e4b\u540e\uff0c\u53d1\u73b0\u6709\u4e00\u6761\u4f18\u5316\u63d0\u793a\uff1a\u63a8\u8fdf\u5c4f\u5e55\u5916\u7684\u56fe\u7247\u52a0\u8f7d\u3002\u4e4b\u524d\u6709\u770b\u5230\u8fc7\u8981\u5b9e\u73b0\u8fd9\u6837\u7684\u6548\u679c\u9700\u8981\u4f7f\u7528 lazy loading\uff0c\u56fe\u7247\u61d2\u52a0\u8f7d\uff0c\u4f46\u662f\u9700\u8981\u4f7f\u7528 js \u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\uff0c\u7531\u4e8e\u672c\u4eba\u5341\u5206\u61d2\u60f0\uff0c\u4e0d\u60f3\u7528\u592a\u590d\u6742\u7684\u4ee3\u7801\uff0c\u4e8e\u662f\u5728\u7f51\u4e0a\u641c\u7d22\u4e86\u4e00\u756a\uff0c\u53d1\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>"),"\xa0 \u6807\u7b7e\u539f\u751f\u652f\u6301\u61d2\u52a0\u8f7d\u3002"),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u61d2\u52a0\u8f7d"},"\u4e3a\u4ec0\u4e48\u8981\u61d2\u52a0\u8f7d"),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u5728\u52a0\u8f7d\u56fe\u7247\u7684\u65f6\u5019\u672c\u8eab\u662f async \u5f02\u6b65\u7684\uff0c\u4e0d\u4f1a\u963b\u585e\u6d4f\u89c8\u5668\u7684\u52a0\u8f7d\u8fdb\u7a0b\uff0c\u4f46\u662f\u5c4f\u5e55\u5916\u7684\u56fe\u7247\u52a0\u8f7d\u4ecd\u7136\u4f1a\u6d88\u8017\u5e26\u5bbd\uff0c\u8fd9\u6837\u5728\u5e26\u5bbd\u6709\u9650\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u5f71\u54cd\u91cd\u8981\u7ec4\u4ef6\u7684\u52a0\u8f7d\uff0c\u4f8b\u5982 CSS\u3001JavaScript \u7b49\uff0c\u8fdb\u800c\u62d6\u6162\u9875\u9762\u7684\u52a0\u8f7d\u3002"),(0,i.kt)("h2",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<img>"),"\xa0 \u6807\u7b7e\u539f\u751f\u652f\u6301 loading \u5c5e\u6027\uff0c\u5b83\u7684\u5c5e\u6027\u53ef\u4ee5\u53d6\u7684\u503c\u6709\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eager\uff1a\u65e0\u8bba\u56fe\u7247\u662f\u5426\u5728\u53ef\u89c6\u533a\u57df\uff0c\u90fd\u4f1a\u76f4\u63a5\u52a0\u8f7d\u56fe\u7247\u3002"),(0,i.kt)("li",{parentName:"ul"},"lazy\uff1a\u63a8\u8fdf\u56fe\u7247\u7684\u52a0\u8f7d\uff0c\u5f53\u56fe\u7247\u6eda\u52a8\u5230\u8ddd\u79bb\u53ef\u89c6\u533a\u57df\u4e00\u5b9a\u9608\u503c\uff08\u89c6\u6d4f\u89c8\u5668\u7684\u5b9e\u73b0\u800c\u5b9a\uff09\u7684\u65f6\u5019\uff0c\u518d\u52a0\u8f7d\u56fe\u7247\u3002"),(0,i.kt)("li",{parentName:"ul"},"auto\uff1a\u7531\u6d4f\u89c8\u5668\u81ea\u884c\u51b3\u5b9a\u3002")),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e9b\u5c5e\u6027\u7684\u63cf\u8ff0\u6765\u770b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>"),"\xa0 \u6807\u7b7e\u7684 loading \u5c5e\u6027\u8bbe\u7f6e\u4e3a lazy \u5373\u53ef\u3002\u6211\u4eec\u6765\u6d4b\u8bd5\u4e00\u4e0b\uff0c\u5047\u8bbe\u6709\u4e0b\u9762\u7684 html \u9875\u9762\uff0c\u52a0\u8f7d\u4e86\u4e00\u7cfb\u5217\u7684\u56fe\u7247\uff0c\u9700\u8981\u6eda\u52a8\u624d\u80fd\u663e\u793a\u5168\u90e8\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e loading \u4e3a lazy\uff0c\u90a3\u4e48\u56fe\u7247\u4f1a\u76f4\u63a5\u5168\u90e8\u52a0\u8f7d\u3002\u4ece\u5f00\u53d1\u8005\u5de5\u5177\u7684 Network \u4e2d\u53ef\u4ee5\u770b\u5230\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(65573).Z,width:"2076",height:"922"})),(0,i.kt)("p",null,"\u5982\u679c\u7ed9\u5c4f\u5e55\u5916\u7684\u56fe\u7247\u8bbe\u7f6e loading \u4e3a lazy\uff0c\u90a3\u4e48\u53ef\u4ee5\u770b\u5230\u53ea\u6709\u5728\u6ed1\u52a8\u5230\u56fe\u7247\u5feb\u8981\u51fa\u73b0\u7684\u65f6\u5019\uff0c\u56fe\u7247\u624d\u4f1a\u52a0\u8f7d\uff1a"),(0,i.kt)(o.Z,{src:n(13952).Z,webmSrc:n(81722).Z,mdxType:"Video"}),(0,i.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u8981\u7ed9\u9996\u5c4f\u51fa\u73b0\u5728\u53ef\u89c6\u533a\u57df\u7684\u56fe\u7247\u8bbe\u7f6e\u61d2\u52a0\u8f7d\uff0c\u56e0\u4e3a\u5b83\u672c\u8eab\u5c31\u5728\u53ef\u89c6\u533a\u57df\uff0c\u5e94\u8be5\u5c3d\u5feb\u52a0\u8f7d\uff0c\u4ee5\u8ba9\u7528\u6237\u5c3d\u65e9\u770b\u5230\u56fe\u7247\u3002\u53e6\u5916\uff0c\u4f7f\u7528\u61d2\u52a0\u8f7d\u7684\u56fe\u7247\u5e94\u8be5\u5c3d\u91cf\u8bbe\u7f6e\u5bbd\u9ad8\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u6296\u52a8\uff1a\u5728\u7b49\u56fe\u7247\u52a0\u8f7d\u7684\u65f6\u5019\uff0c\u76f8\u5e94\u533a\u57df\u4f1a\u663e\u793a\u4e3a\u7a7a\u767d\uff0c\u5176\u4ed6\u5143\u7d20\u4e0d\u4f1a\u5360\u4f4d\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\u5bbd\u9ad8\uff0c\u5176\u5b83\u5143\u7d20\u5c31\u6709\u53ef\u80fd\u4f1a\u5360\u4f4d\uff0c\u56fe\u7247\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\uff0c\u53c8\u4f1a\u628a\u5360\u4f4d\u7684\u5143\u7d20\u6324\u4e0b\u53bb\uff0c\u9020\u6210\u6296\u52a8\u3002"),(0,i.kt)("h2",{id:"\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"),(0,i.kt)("p",null,"loading \u5c5e\u6027\u8fd8\u7b97\u662f\u4e00\u4e2a\u6bd4\u8f83\u65b0\u7684\u5c5e\u6027\uff0c\u4e3b\u6d41\u6d4f\u89c8\u5668\u57fa\u672c\u4e0a\u90fd\u652f\u6301\u4e86\uff0cIE \u4ecd\u5728\u88ab\u6392\u9664\u5728\u5916\u3002\u5bf9\u4e8e\u4e0d\u652f\u6301\u61d2\u52a0\u8f7d\u7684\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u5ffd\u7565\u8fd9\u4e2a\u5c5e\u6027\u3002\u5177\u4f53\u652f\u6301\u7a0b\u5ea6\u53ef\u4ee5\u53c2\u52a0\u4e0b\u8868\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"IE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Edege"),(0,i.kt)("th",{parentName:"tr",align:"center"},"FireFox"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Chrome"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Safari"),(0,i.kt)("th",{parentName:"tr",align:"center"},"IOS Safari"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Android Browser"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Chrome for Android"),(0,i.kt)("th",{parentName:"tr",align:"center"},"FireFox for Android"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"89"),(0,i.kt)("td",{parentName:"tr",align:"center"},"75"),(0,i.kt)("td",{parentName:"tr",align:"center"},"77"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"center"},"89"),(0,i.kt)("td",{parentName:"tr",align:"center"},"89"),(0,i.kt)("td",{parentName:"tr",align:"center"},"86")))))}d.isMDXComponent=!0},91894:function(e,t,n){var r=n(63366),a=(n(67294),n(35944)),i=["src","webmSrc"];t.Z=function(e){var t=e.src,n=e.webmSrc,o=(0,r.Z)(e,i);return(0,a.BX)("video",Object.assign({autoPlay:!0,loop:!0,muted:!0,playsInline:!0},o,{children:[n&&(0,a.tZ)("source",{src:n,type:"video/webm"}),(0,a.tZ)("source",{src:t,type:"video/mp4"})]}))}},13952:function(e,t,n){t.Z=n.p+"assets/medias/showcase-c4cbe9882f566e1736166bc077975f98.mp4"},81722:function(e,t,n){t.Z=n.p+"assets/medias/showcase-aa341d7d512e36240b363a01a3f304fb.webm"},65573:function(e,t,n){t.Z=n.p+"assets/images/2021-03-23-12-07-04-e8a7532ee83bd3ad7b2809037e3de1a8.webp"}}]);