"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8935],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=p(n),d=l,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},54505:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=(n(79524),["components"]),u={slug:"http-protocol",title:"\u524d\u540e\u7aef\u901a\u4fe1\u4e4b HTTP \u534f\u8bae\u7b80\u4ecb",author:"\u9694\u58c1\u8001\u65b9",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"HTTP \u534f\u8bae\u5305\u62ec\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e24\u4e2a\u5b9e\u4f53\uff0c\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u54cd\u5e94\u7ed9\u5ba2\u6237\u7aef\u3002\u5728 HTTP \u4e2d\uff0c\u6570\u636e\u79f0\u4e3a\u8d44\u6e90\uff0c\u53ef\u4ee5\u662f html \u6587\u6863\u3001\u56fe\u7247\u3001\u4e5f\u53ef\u4ee5\u662f\u666e\u901a\u6587\u672c\u3002\u8d44\u6e90\u662f\u901a\u8fc7 URL \u8fdb\u884c\u5b9a\u4f4d\u7684\u3002",tags:["\u524d\u7aef","React"],bvid:"BV1KV411o7u5",oid:"413122179"},o=void 0,p={permalink:"/http-protocol",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/2020-05-10-http.mdx",source:"@site/blog/develop/2020-05-10-http.mdx",title:"\u524d\u540e\u7aef\u901a\u4fe1\u4e4b HTTP \u534f\u8bae\u7b80\u4ecb",description:"HTTP \u534f\u8bae\u5305\u62ec\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e24\u4e2a\u5b9e\u4f53\uff0c\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u54cd\u5e94\u7ed9\u5ba2\u6237\u7aef\u3002\u5728 HTTP \u4e2d\uff0c\u6570\u636e\u79f0\u4e3a\u8d44\u6e90\uff0c\u53ef\u4ee5\u662f html \u6587\u6863\u3001\u56fe\u7247\u3001\u4e5f\u53ef\u4ee5\u662f\u666e\u901a\u6587\u672c\u3002\u8d44\u6e90\u662f\u901a\u8fc7 URL \u8fdb\u884c\u5b9a\u4f4d\u7684\u3002",date:"2020-05-10T00:00:00.000Z",formattedDate:"2020\u5e745\u670810\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"React",permalink:"/tags/react"}],readingTime:2.736666666666667,truncated:!0,authors:[{name:"\u9694\u58c1\u8001\u65b9",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/MISfang",imageURL:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX"}],frontMatter:{slug:"http-protocol",title:"\u524d\u540e\u7aef\u901a\u4fe1\u4e4b HTTP \u534f\u8bae\u7b80\u4ecb",author:"\u9694\u58c1\u8001\u65b9",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",author_url:"https://github.com/MISfang",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"HTTP \u534f\u8bae\u5305\u62ec\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e24\u4e2a\u5b9e\u4f53\uff0c\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u54cd\u5e94\u7ed9\u5ba2\u6237\u7aef\u3002\u5728 HTTP \u4e2d\uff0c\u6570\u636e\u79f0\u4e3a\u8d44\u6e90\uff0c\u53ef\u4ee5\u662f html \u6587\u6863\u3001\u56fe\u7247\u3001\u4e5f\u53ef\u4ee5\u662f\u666e\u901a\u6587\u672c\u3002\u8d44\u6e90\u662f\u901a\u8fc7 URL \u8fdb\u884c\u5b9a\u4f4d\u7684\u3002",tags:["\u524d\u7aef","React"],bvid:"BV1KV411o7u5",oid:"413122179"},prevItem:{title:"\u7ed9\u524d\u7aef\u5de5\u7a0b\u5e08\u770b\u7684\u540e\u7aef\u79d1\u666e",permalink:"/backend-intro"},nextItem:{title:"5\u4e2a\u6280\u5de7\u52a9\u4f60\u6210\u4e3a CSS \u5927\u795e",permalink:"/5-tips-to-master-css"}},c={authorsImageUrls:[void 0]},m=[{value:"URL",id:"url",level:2},{value:"\u53d1\u9001 HTTP \u8bf7\u6c42",id:"\u53d1\u9001-http-\u8bf7\u6c42",level:2},{value:"\u63a5\u6536\u54cd\u5e94",id:"\u63a5\u6536\u54cd\u5e94",level:2},{value:"\u65e0\u72b6\u6001",id:"\u65e0\u72b6\u6001",level:2},{value:"HTTP/2",id:"http2",level:2}],s={toc:m};function d(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u524d\u540e\u7aef\u6570\u636e\u7684\u4ea4\u6362\u4e00\u822c\u662f\u57fa\u4e8e HTTP \u534f\u8bae\u3002HTTP \u534f\u8bae\u5305\u62ec\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e24\u4e2a\u5b9e\u4f53\uff0c\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u54cd\u5e94\u7ed9\u5ba2\u6237\u7aef\u3002\u5728 HTTP \u4e2d\uff0c\u6570\u636e\u79f0\u4e3a\u8d44\u6e90\uff0c\u53ef\u4ee5\u662f html \u6587\u6863\u3001\u56fe\u7247\u3001\u4e5f\u53ef\u4ee5\u662f\u666e\u901a\u6587\u672c\u3002\u8d44\u6e90\u662f\u901a\u8fc7 URL \u8fdb\u884c\u5b9a\u4f4d\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1KV411o7u5/"},"B \u7ad9\u89c6\u9891 - \u70b9\u51fb\u4f20\u9001")),(0,a.kt)("h2",{id:"url"},"URL"),(0,a.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u9700\u8981\u8bbf\u95ee\u670d\u52a1\u7aef\u8d44\u6e90\u65f6\uff0c\u9996\u5148\u9700\u8981\u77e5\u9053\u8d44\u6e90\u7684 url\uff0c\u4f8b\u5982\u6253\u5f00 bilibili \u7f51\u7ad9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://www.bilibili.com\n")),(0,a.kt)("p",null,"\u6216\u8005\u8bf7\u6c42\u67d0\u7bc7\u535a\u6587\u4e0b\u7684\u6240\u6709\u8bc4\u8bba\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://jsonplaceholder.typicode.com/comments?postId=1\n")),(0,a.kt)("p",null,"URL \u7684\u7ec4\u6210\u90e8\u5206\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"http:// - \u534f\u8bae Protocal"),(0,a.kt)("li",{parentName:"ul"},"jsonplaceholder.typicode.com - \u4e3b\u673a Host"),(0,a.kt)("li",{parentName:"ul"},"/comments - \u8def\u5f84 path"),(0,a.kt)("li",{parentName:"ul"},"?postId=1 - \u67e5\u8be2\u53c2\u6570")),(0,a.kt)("p",null,"\u670d\u52a1\u7aef\u6536\u5230 url \u4f1a\u89e3\u6790\u5b83\u4eec\u5e76\u8fd4\u56de\u76f8\u5e94\u7684\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u53d1\u9001-http-\u8bf7\u6c42"},"\u53d1\u9001 HTTP \u8bf7\u6c42"),(0,a.kt)("p",null,"HTTP \u8bf7\u6c42\u5305\u62ec\u4e0b\u8fb9\u51e0\u4e2a\u90e8\u5206"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /comments?postId=1 HTTP/1.1\n\n\u8bf7\u6c42\u5934 request headers\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\nAccept-Encoding: gzip, deflate\n...\n\n\u8bf7\u6c42\u4f53(\u5982\u679c\u6709) request body\n....\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65b9\u5f0f\uff0c \u544a\u77e5\u670d\u52a1\u5668\u8981\u8fdb\u884c\u7684\u64cd\u4f5c\uff0cGET \u662f\u9ed8\u8ba4\u8bf7\u6c42\u65b9\u5f0f\uff0c\u610f\u601d\u662f\u4ece\u670d\u52a1\u7aef\u83b7\u53d6\u8d44\u6e90\uff0c\u53e6\u5916\u8fd8\u6709\u51e0\u4e2a\u5176\u4ed6\u5e38\u7528\u7684\u65b9\u5f0f\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"POST - \u521b\u5efa\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"PUT - \u66f4\u65b0\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"DELETE - \u5220\u9664\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u533a\u522b\u662f GET \u548c DELETE \u4e00\u822c\u6ca1\u6709\u8bf7\u6c42\u4f53\u3002\u800c POST \u548c PUT \u901a\u5e38\u5e26\u6709\u8bf7\u6c42\u4f53\uff0c\u7528\u4e8e\u5411\u670d\u52a1\u7aef\u53d1\u9001\u8d44\u6e90\u4fe1\u606f\u3002")))),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8d44\u6e90\u7684\u8def\u5f84\u548c\u67e5\u8be2\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"HTTP \u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5934\uff0c\u5305\u542b\u989d\u5916\u7684\u4fe1\u606f\u6765\u5e2e\u52a9\u670d\u52a1\u5668\u51b3\u5b9a\u5982\u4f55\u8fdb\u884c\u54cd\u5e94\uff0c\u6bd4\u5982\u4f7f\u7528 accept \u8bbe\u7f6e\u63a5\u6536\u54cd\u5e94\u8d44\u6e90\u7684\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4f53\uff0c\u662f\u9700\u8981\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7684\u6570\u636e")),(0,a.kt)("h2",{id:"\u63a5\u6536\u54cd\u5e94"},"\u63a5\u6536\u54cd\u5e94"),(0,a.kt)("p",null,"\u670d\u52a1\u7aef\u5728\u5904\u7406\u8bf7\u6c42\u4e4b\u540e\u53d1\u9001\u54cd\u5e94\u7ed9\u5ba2\u6237\u7aef\u3002\u5185\u5bb9\u6709\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Sat, 02 May 2020 08:21:09 GMT\nContent-Type: application/json; charset=utf-8\nCache-Control: max-age=14400\n\n[\n  {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  }\n]\n...\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTTP \u534f\u8bae\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u72b6\u6001\u7801\uff0c\u8868\u660e\u54cd\u5e94\u7684\u7ed3\u679c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"100-199 \u4e00\u822c\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"200-299 \u6210\u529f\u54cd\u5e94"),(0,a.kt)("li",{parentName:"ul"},"300-399 \u91cd\u5b9a\u5411"),(0,a.kt)("li",{parentName:"ul"},"400-499 \u5ba2\u6237\u7aef\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},"500-599 \u670d\u52a1\u7aef\u9519\u8bef")))),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7801\u542b\u4e49\u7684\u7b80\u8981\u63cf\u8ff0"),(0,a.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u5934\uff0c\u4e0e\u8bf7\u6c42\u5934\u7c7b\u4f3c\uff0c\u5305\u542b\u989d\u5916\u7684\u54cd\u5e94\u4fe1\u606f\uff0c\u6bd4\u5982\u544a\u77e5\u5ba2\u6237\u7aef\u5982\u4f55\u63a7\u5236\u7f13\u5b58\u548c cookie\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u4f53\uff08\u5982\u679c\u6709\uff09- \u662f\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u6570\u636e")),(0,a.kt)("h2",{id:"\u65e0\u72b6\u6001"},"\u65e0\u72b6\u6001"),(0,a.kt)("p",null,"HTTP \u534f\u8bae\u662f\u65e0\u72b6\u6001\u7684\uff0c\u6bcf\u6b21\u5ba2\u6237\u7aef\u53d1\u51fa\u7684\u8bf7\u6c42\u90fd\u88ab\u8ba4\u4e3a\u662f\u4ece\u5168\u65b0\u7684\u5ba2\u6237\u7aef\u53d1\u51fa\u6765\u7684\uff0c\u5982\u679c\u9700\u8981\u8bb0\u5f55\u72b6\u6001\u5219\u9700\u8981\u4f7f\u7528 cookie \u548c session \u6765\u4fdd\u6301\u4f1a\u8bdd\uff0c\u5b9e\u73b0\u767b\u5f55\u548c\u8d2d\u7269\u8f66\u4e4b\u7c7b\u7684\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"http2"},"HTTP/2"),(0,a.kt)("p",null,"\u73b0\u5728 HTTP/2 \u5df2\u7ecf\u53ef\u4ee5\u6b63\u5f0f\u5f00\u59cb\u4f7f\u7528\u4e86\uff0c\u5b83\u8ddf HTTP 1.1 \u4e0d\u540c\u7684\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u901a\u8fc7\u4e8c\u8fdb\u5236\u5f62\u5f0f\u4f20\u8f93\uff0c\u4e0d\u518d\u662f\u6587\u672c\u5f62\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u8def\u590d\u7528 - \u5efa\u7acb\u8fde\u63a5\u540e\u4e00\u6b21\u53ef\u4ee5\u53d1\u9001\u591a\u4e2a HTTP \u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u538b\u7f29 http headers\uff0c\u51cf\u5c11\u8d1f\u8f7d"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 server push")),(0,a.kt)("p",null,"\u597d\u4e86\uff0c\u8fd9\u5c31\u662f\u4eca\u5929\u7684\u524d\u540e\u7aef\u4ea4\u4e92\u4e4b HTTP \u534f\u8bae\uff0c\u770b\u5b8c\u8fd9\u4e9b\u4f60\u5e94\u8be5\u4e86\u89e3\u524d\u7aef\u5e94\u7528\u53d1\u9001\u8bf7\u6c42\u548c\u63a5\u6536\u54cd\u5e94\u65f6\uff0c\u5404\u9879\u53c2\u6570\u7684\u542b\u4e49\u4e86\u3002"),(0,a.kt)("p",null,"\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u5982\u679c\u6709\u95ee\u9898\uff0c\u6b22\u8fce\u901a\u8fc7\u4e0b\u65b9\u94fe\u63a5\u53c2\u4e0e\u8ba8\u8bba\u3002"))}d.isMDXComponent=!0}}]);