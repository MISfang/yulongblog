"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3330],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={id:"mysql-like-optimization",title:"mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316",date:new Date("2021-01-07T00:00:00.000Z"),tags:["mysql","database"]},s=void 0,c={unversionedId:"skill/database/mysql/mysql-like-optimization",id:"skill/database/mysql/mysql-like-optimization",title:"mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316",description:"1\u3001\u524d\u8a00",source:"@site/docs\\skill\\database\\mysql\\Mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316.md",sourceDirName:"skill/database/mysql",slug:"/skill/database/mysql/mysql-like-optimization",permalink:"/docs/skill/database/mysql/mysql-like-optimization",draft:!1,tags:[{label:"mysql",permalink:"/docs/tags/mysql"},{label:"database",permalink:"/docs/tags/database"}],version:"current",frontMatter:{id:"mysql-like-optimization",title:"mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316",date:"2021-01-07T00:00:00.000Z",tags:["mysql","database"]},sidebar:"skill",previous:{title:"mysql\u66ff\u6362\u51fd\u6570replace",permalink:"/docs/skill/database/mysql/mysql-replace-function"},next:{title:"MySql\u7b14\u8bb0",permalink:"/docs/skill/database/mysql"}},u={},p=[{value:"1\u3001\u524d\u8a00",id:"1\u524d\u8a00",level:2},{value:"2\u3001LIKE &#39;%keyword%&#39;",id:"2like-keyword",level:2},{value:"3\u3001\u6dfb\u52a0\u524d\u7f00",id:"3\u6dfb\u52a0\u524d\u7f00",level:2},{value:"4\u3001\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u524d\u7f00",id:"4\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u524d\u7f00",level:2},{value:"\u7136\u800c\u3002\u3002\u3002",id:"\u7136\u800c",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u524d\u8a00"},"1\u3001\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u6211\u5b58\u50a8\u9898\u5e93\u7684\u65f6\u5019\uff0c\u641c\u9898\u80af\u5b9a\u8981\u7528\u6a21\u7cca\u641c\u7d22\u9898\u76ee\uff0c\u4f46\u4e00\u822c\u60c5\u51b5\u4e0b like \u6a21\u7cca\u67e5\u8be2\u7684\u5199\u6cd5\u4e3a\uff08field \u5df2\u5efa\u7acb\u7d22\u5f15\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT `column` FROM `table` WHERE `field` LIKE '%keyword%';\n")),(0,a.kt)("p",null,"\u4f46\u662f\u95ee\u9898\u6765\u4e86\uff0c\u56e0\u4e3a\u662f\u6a21\u7cca\u641c\u7d22\uff0c\u4e00\u65e6\u6570\u636e\u8fc7\u5927\uff0c\u67e5\u8be2\u901f\u5ea6\u5c06\u4f1a\u975e\u5e38\u6162\uff0c\u540c\u65f6\u8bf7\u6c42\u8fc7\u591a\u8fd8\u4f1a\u5bfc\u81f4\u670d\u52a1\u5668\u8d1f\u8f7d\uff08\u6211\u7684\u9898\u5e93 API \u63a5\u53e3\u5c31\u662f\u8fd9\u6837\uff09\uff0c\u5b9d\u5854\u9762\u677f\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210116000628122.png",alt:"image-20210116000628122"})),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u8981\u4fdd\u8bc1\u591a\u5e76\u53d1\u67e5\u9898\u67e5\u9898\u7684\u540c\u65f6\uff0c\u6709\u80fd\u5feb\u901f\u641c\u7d22\u5230\u5bf9\u5e94\u7684\u9898\u76ee\uff0c\u6570\u636e\u5e93\u63d0\u901f\u5c31\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u4e86\uff0c\u5728\u7ffb\u770b\u76f8\u5173\u6587\u7ae0\u89e3\u51b3\u4e86\u6211\u8fd9\u4e00\u95ee\u9898\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u94fe\u63a5 ",(0,a.kt)("a",{parentName:"p",href:"https://www.imooc.com/article/300874"},"MySql \u6a21\u7cca\u67e5\u8be2 LIKE \u4f18\u5316"))),(0,a.kt)("h2",{id:"2like-keyword"},"2\u3001LIKE '%keyword%'"),(0,a.kt)("p",null,"\u5728\u6ca1\u600e\u4e48\u4e86\u89e3 LIKE \u6a21\u7cca\u67e5\u8be2\u524d\uff0c\u4e00\u76f4\u4ee5\u4e3a LIKE \u4f1a\u7528\u5230\u7d22\u5f15\uff0c\u641c\u7d22\u4e86\u76f8\u5173\u8d44\u6599\u624d\u53d1\u73b0\uff0c%keyword% \u5bf9\u5e94\u8fd9\u79cd\u7684\u6a21\u7cca\u641c\u7d22\uff0c\u7528\u4e0d\u5230\u7d22\u5f15\uff0c\u800c\u662f\u5168\u8868\u626b\u63cf\uff0c\u4e5f\u5c31\u5bfc\u81f4\u67e5\u8be2\u901f\u5ea6\u7279\u522b\u6162\u3002"),(0,a.kt)("h2",{id:"3\u6dfb\u52a0\u524d\u7f00"},"3\u3001\u6dfb\u52a0\u524d\u7f00"),(0,a.kt)("p",null,"\u4e0a\u9762\u5199\u5230 %keyword% \u7528\u4e0d\u5230\u7d22\u5f15\uff0c\u4f46\u5982\u679c\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u4e00\u4e2a\u524d\u7f00\u6587\u672c\uff0c\u6bd4\u5982\u6211\u8fd9\u91cc\u6dfb\u52a0\u4e3a KZTK","_","(\u6127\u600d\u9898\u5e93)\uff0c\u7136\u540e\u62fc\u63a5\u4e3a KZTK","_","%keyword%"),(0,a.kt)("h2",{id:"4\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u524d\u7f00"},"4\u3001\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u524d\u7f00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE kz_answer SET `topic` = CONCAT('KZTK_',topic)\n")),(0,a.kt)("h2",{id:"\u7136\u800c"},"\u7136\u800c\u3002\u3002\u3002"),(0,a.kt)("p",null,"\u7136\u800c\u4e0a\u9762\u7684\u90a3\u4e9b\u64cd\u4f5c\u5bf9\u767e\u4e07\u7ea7\u522b\u7684\u6570\u636e\u6765\u8bf4\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u901f\u5ea6\u7684\u63d0\u5347\uff0c\u56e0\u4e3a Like \u641c\u7d22\u672c\u6765\u5c31\u5f88\u6162\u3002\u4e0a\u9762\u6240\u8bf4\u7684\u9700\u6c42\u5176\u5b9e\u66f4\u5e94\u8be5\u6362\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f elasticsearch\u3002\u60f3\u5236\u4f5c\u4e00\u4e2a\u641c\u7d22\u5f15\u64ce\u4f3c\u7684\u6570\u636e\u5e93\uff0c\u5e76\u4e14\u6709\u9ad8\u6548\u7684\u67e5\u8be2\u901f\u5ea6\uff0c\u5e76\u4e14\u53ef\u9488\u5bf9\u5173\u952e\u8bcd\uff0c\u6a21\u7cca\u641c\u7d22\uff0c\u6b63\u597d\u5c31\u7b26\u5408\u8fd9\u4e2a\u573a\u666f\u3002"))}d.isMDXComponent=!0}}]);