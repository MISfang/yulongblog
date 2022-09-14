"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[280],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,g=s["".concat(o,".").concat(d)]||s[d]||c[d]||a;return n?i.createElement(g,l(l({ref:t},m),{},{components:n})):i.createElement(g,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],p={slug:"thinkphp-deploy",title:"\u8bb0 ThinkPHP \u9879\u76ee\u90e8\u7f72",date:new Date("2021-09-25T00:00:00.000Z"),authors:"kuizuo",tags:["php","develop"]},o=void 0,u={permalink:"/thinkphp-deploy",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program\\\u8bb0ThinkPHP\u9879\u76ee\u90e8\u7f72.md",source:"@site/blog\\program\\\u8bb0ThinkPHP\u9879\u76ee\u90e8\u7f72.md",title:"\u8bb0 ThinkPHP \u9879\u76ee\u90e8\u7f72",description:"\u4e8b\u60c5\u80cc\u666f",date:"2021-09-25T00:00:00.000Z",formattedDate:"2021\u5e749\u670825\u65e5",tags:[{label:"php",permalink:"/tags/php"},{label:"develop",permalink:"/tags/develop"}],readingTime:3.526666666666667,truncated:!0,authors:[{name:"\u65b9\u5b87\u9f99",title:"\u7f16\u7a0b\u7231\u597d\u8005 / \u5b66\u751f",url:"https://github.com/MISfang",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"thinkphp-deploy",title:"\u8bb0 ThinkPHP \u9879\u76ee\u90e8\u7f72",date:"2021-09-25T00:00:00.000Z",authors:"kuizuo",tags:["php","develop"]},prevItem:{title:"RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570",permalink:"/remote-call-browser-function"},nextItem:{title:"\u4f7f\u7528JSONPath\u89e3\u6790json\u6570\u636e",permalink:"/use-jsonpath-to-parse-json-data"}},m={authorsImageUrls:[void 0]},c=[{value:"\u4e8b\u60c5\u80cc\u666f",id:"\u4e8b\u60c5\u80cc\u666f",level:2},{value:"Windows \u90e8\u7f72",id:"windows-\u90e8\u7f72",level:2},{value:"\u521d\u6b21\u542f\u52a8 Not Found",id:"\u521d\u6b21\u542f\u52a8-not-found",level:3},{value:"\u9875\u9762\u62a5\u9519 \u5f00\u542f Debug",id:"\u9875\u9762\u62a5\u9519-\u5f00\u542f-debug",level:3},{value:"\u914d\u7f6e\u6570\u636e\u5e93",id:"\u914d\u7f6e\u6570\u636e\u5e93",level:3},{value:"Linux \u90e8\u7f72",id:"linux-\u90e8\u7f72",level:2},{value:"\u5173\u95ed\u9632\u8de8\u7ad9\u653b\u51fb",id:"\u5173\u95ed\u9632\u8de8\u7ad9\u653b\u51fb",level:3},{value:"\u8bbe\u7f6e\u4f2a\u9759\u6001",id:"\u8bbe\u7f6e\u4f2a\u9759\u6001",level:3}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e8b\u60c5\u80cc\u666f"},"\u4e8b\u60c5\u80cc\u666f"),(0,a.kt)("p",null,"\u7528\u6237\u82b1\u4e86\u51e0\u767e\u5757\u8d2d\u4e70\u4e86\u4e00\u4efd ThinkPHP \u4e00\u4e2a\u540e\u53f0\u7ba1\u7406\u7684\u7f51\u7ad9\u6e90\u7801\uff0c\u8981\u6c42\u66f4\u6362\u4e0b\u90e8\u5206\u5931\u6548\u63a5\u53e3\uff0c\u6216\u662f\u91cd\u5199\u4e00\u4e2a\u7c7b\u4f3c\u8fd9\u6837\u7684\u7f51\u7ad9\u3002\u6211\u60f3\u65e2\u7136\u90fd\u6709\u6e90\u7801\u4e86\uff0c\u6211\u6539\u6539\u4e0d\u5c31\u5b8c\u4e8b\u4e86\uff0c\u8fd9\u4e0d\u6bd4\u91cd\u5199\u4e00\u4e2a\u6765\u7684\u7701\u4e8b\u3002\u867d\u8bf4\u6211\u4e0d\u662f\u4e3b\u5b66 PHP \u7684\uff0c\u4f46\u81f3\u5c11\u6211\u5b66\u8fc7\u4e00\u4e22\u4e22\u7684 PHP\uff0c\u63a5\u89e6\u8fc7 ThinkPHP \u9879\u76ee\u7684\u3002\u4e0d\u8fc7\u5c42\u9762\u90fd\u662f\u5c40\u9650\u5728\u672c\u5730\uff0c\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u4e0e\u672c\u5730\u8fd8\u662f\u6709\u6bd4\u8f83\u5927\u7684\u5dee\u522b\u7684\uff0c\u4e8e\u662f\u4fbf\u6709\u4e86\u8fd9\u7bc7\u6587\u7ae0\u6765\u8bb0\u5f55\u4e00\u4e0b\u81ea\u5df1\u90e8\u7f72 ThinkPHP \u6240\u9047\u5230\u7684\u4e00\u4e9b\u5751\u3002"),(0,a.kt)("h2",{id:"windows-\u90e8\u7f72"},"Windows \u90e8\u7f72"),(0,a.kt)("p",null,"\u4e5f\u53ef\u7406\u89e3\u4e3a\u672c\u5730\u90e8\u7f72\uff0c\u672c\u5730\u90e8\u7f72\u5c31\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\u7684\u4e86\u3002\u4e0d\u8fc7\u9700\u8981\u4e00\u4e2a\u5de5\u5177\uff0cPHPStudy\uff0c\u6765\u5e2e\u52a9\u6211\u4eec\u914d\u7f6e\u672c\u5730\u7684\u73af\u5883\uff08Apache\u3001Nginx\u3001PHP\u3001Mysql\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.xp.cn/"},"\u5c0f\u76ae\u9762\u677f(phpstudy) - \u8ba9\u5929\u4e0b\u6ca1\u6709\u96be\u914d\u7684\u670d\u52a1\u5668\u73af\u5883\uff01 (xp.cn)")),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5b89\u88c5\u6253\u5f00\u754c\u9762\uff0c\u9009\u62e9\u7f51\u7ad9\uff0c\u521b\u5efa\u7f51\u7ad9"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210925143601530.png",alt:"image-20210925143601530"})),(0,a.kt)("p",null,"\u7531\u4e8e\u662f\u672c\u673a\uff0c\u6240\u4ee5\u57df\u540d\u5c31\u586b\u5199 localhost \u6216 127.0.0.1\uff0c\u7aef\u53e3\u7684\u8bdd\u8fd9\u8fb9\u6240\u586b\u5199\u7684\u662f 4200\uff0c\u522b\u548c\u5176\u4ed6\u7aef\u53e3\u51b2\u7a81\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e ThinkPHP \u7684\u6839\u76ee\u5f55\u8981\u9009\u62e9\u7684\u662f\u6839\u76ee\u5f55\u4e0b\u7684 public \u76ee\u5f55\uff0c\u4e0d\u7136\u627e\u4e0d\u5230 index.php \u8fd9\u4e2a\u6587\u4ef6\uff0c\u6240\u4ee5\u8fd9\u91cc\u6839\u76ee\u5f55\u81ea\u5df1\u6307\u5b9a\u4e00\u4e0b\u6e90\u7801\u7684\u4f4d\u7f6e\uff0c\u70b9\u51fb\u786e\u8ba4\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u521d\u6b21\u542f\u52a8-not-found"},"\u521d\u6b21\u542f\u52a8 Not Found"),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u8bbf\u95ee http://localhost:4200 \u63d0\u793a\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210925143752775.png",alt:"image-20210925143752775"})),(0,a.kt)("p",null,"\u672c\u7740\u4e0d\u4f1a\u5c31\u767e\u5ea6\u7684\u539f\u5219\uff0c\u5f88\u5feb\u5c31\u627e\u5230\u4e86\u89e3\u51b3\u529e\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_42940241/article/details/112461625"},"ThinkPHP \u62a5\u9519 The requested URL /index/index/xxx.html was not found on this server")),(0,a.kt)("p",null,"\u5728\u5165\u53e3\u6587\u4ef6\u5939 public \u4e0b\u67e5\u770b.htaccess \u662f\u5426\u5b58\u5728\u3002\u4e0d\u5b58\u5728\u5219\u65b0\u5efa\uff0c\u5b58\u5728\u7684\u8bdd\uff0c\u90a3\u5185\u5bb9\u66ff\u6362\u4e3a\u4e0b\u9762\u8fd9\u4e32\u4ee3\u7801 \u5c31\u53ef\u4ee5\u89e3\u51b3 Not Fund \u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"#<IfModule mod_rewrite.c>\n#  Options +FollowSymlinks -Multiviews\n#  RewriteEngine On\n#\n#  RewriteCond %{REQUEST_FILENAME} !-d\n#  RewriteCond %{REQUEST_FILENAME} !-f\n#  RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]\n#</IfModule>\n<IfModule mod_rewrite.c>\nRewriteEngine on\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]\n</IfModule>\n")),(0,a.kt)("h3",{id:"\u9875\u9762\u62a5\u9519-\u5f00\u542f-debug"},"\u9875\u9762\u62a5\u9519 \u5f00\u542f Debug"),(0,a.kt)("p",null,"\u4e0a\u9762\u914d\u7f6e\u5b8c\u6bd5\u540e\uff0c\u518d\u6b21\u6253\u5f00\u51fa\u73b0\u5982\u4e0b\u63d0\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210925144143248.png",alt:"image-20210925144143248"})),(0,a.kt)("p",null,"\u9047\u5230\u9519\u8bef\u662f\u5f88\u6b63\u5e38\u7684\uff0c\u73b0\u5728\u8981\u505a\u7684\u5c31\u662f\u8f93\u51fa\u62a5\u9519\u4fe1\u606f\uff0c\u800c\u4e0d\u662f\u7b80\u77ed\u7684\u6587\u5b57\u3002\u5230\u6839\u76ee\u5f55\u4e0b config/app.php \u4e2d\uff0c\u5c06\u8c03\u8bd5\u66f4\u6539\u4e3a true\uff08\u5207\u8bb0\uff0c\u751f\u4ea7\u73af\u5883\u4e2d\u4e00\u5b9a\u8981\u66f4\u6539\u4e3a false\uff0c\u4e0d\u7136\u7528\u6237\u5c31\u80fd\u67e5\u770b\u62a5\u9519\u8be6\u60c5\u4ee5\u53ca\u5bf9\u5e94\u4ee3\u7801\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210925144424361.png",alt:"image-20210925144424361"})),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6570\u636e\u5e93"},"\u914d\u7f6e\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u518d\u6b21\u8bbf\u95ee\u9875\u9762\u63d0\u793a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("img",{parentName:"strong",src:"https://img.kuizuo.cn/image-20210925144620953.png",alt:"image-20210925144620953"}))),(0,a.kt)("p",null,"\u62a5\u9519\u4fe1\u606f\u5012\u662f\u5f88\u5168\uff0c\u4e0d\u8fc7\u8981\u5173\u6ce8\u7684\u662f\u62a5\u9519\u884c\u548c\u63d0\u793a\uff0c\u5927\u81f4\u610f\u601d\u5c31\u662f\u6ca1\u6709\u5b9a\u4e49\u6570\u636e\u5e93\u7528\u6237\u540d ml \u4ee5\u53ca\u5bc6\u7801\uff0c\u6bd5\u7adf\u6570\u636e\u5e93\u5565\u7684\u90fd\u597d\u50cf\u6ca1\u914d\u7f6e\uff0c\u8981\u662f\u80fd\u542f\u52a8\u8d77\u6765\u90a3\u4f30\u8ba1\u5c31\u771f\u662f\u4e00\u4e2a bug \u4e86\uff0c\u90a3\u5c31\u5148\u627e\u5230\u914d\u7f6e\u6587\u4ef6\uff0c\u770b\u770b\u539f\u672c\u7684\u8d26\u53f7\u5bc6\u7801\u662f\u591a\u5c11\uff0c\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"config/database.php")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210925145740851.png",alt:"image-20210925145740851"})),(0,a.kt)("p",null,"\u4e0d\u8fc7 PHPstudy \u7528\u6237\u540d\u548c\u5bc6\u7801\u957f\u5ea6\u90fd\u8981\u5728 6 \u4f4d\u4ee5\u4e0a\uff08Linux \u5012\u662f\u4e0d\u7528\uff09\uff0c\u6240\u4ee5\u52c9\u4e3a\u5176\u96be\uff0c\u628a\u7528\u6237\u540d\u548c\u5bc6\u7801\u90fd\u6539\u6210 ml1234\uff0c\u63a5\u7740 Mysql \u5bfc\u5165\u6e90\u7801\u7ed9\u5b9a\u7684\u6570\u636e\u5e93\u6587\u4ef6(sql \u6587\u4ef6)\uff0c\u4ec0\u4e48\uff0c\u4f60\u8bf4\u6e90\u7801\u6ca1\u6709\u7ed9\u6570\u636e\u5e93\u6587\u4ef6\uff0c\u90a3\u6211\u5efa\u8bae\u76f4\u63a5\u5220\u6e90\u7801\uff0c\u5e76\u4e14\u63a5\u4e0b\u6765\u7684\u5185\u5bb9\u4e5f\u53ef\u4ee5\u4e0d\u7528\u770b\u4e86\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u5bfc\u5165\u5b8c\u6bd5\u540e\uff0c\u518d\u6b21\u8bbf\u95ee\u4fbf\u80fd\u770b\u5230\u6b63\u5e38\u7684\u9996\u9875\u4e86\uff0c\u5c31\u6b64\u5c31\u7b97\u90e8\u7f72\u5b8c\u6bd5\u4e86\uff0c\u8fd9\u91cc\u5c31\u4e0d\u653e\u9996\u9875\u56fe\u4e86\u3002"),(0,a.kt)("h2",{id:"linux-\u90e8\u7f72"},"Linux \u90e8\u7f72"),(0,a.kt)("p",null,"Linux \u90e8\u7f72\u548c Windows \u90e8\u7f72\u662f\u6709\u4e00\u4e22\u4e22\u5dee\u522b\u7684\uff0c\u8fd9\u91cc\u6211\u4e5f\u5217\u4e3e\u4e00\u4e0b\uff0c\u73af\u5883\u662f CentOS 7.6\uff0c\u5b89\u88c5\u4e86\u5b9d\u5854\u9762\u677f"),(0,a.kt)("p",null,"\u5728\u5b9d\u5854\u9762\u677f\u51fa\u7f51\u7ad9\uff0c\u6dfb\u52a0\u7f51\u7ad9\uff0c\u5982\u540c PHPstudy\uff0c\u914d\u7f6e\u5927\u81f4\u76f8\u540c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210926050508693.png",alt:"image-20210926050508693"})),(0,a.kt)("h3",{id:"\u5173\u95ed\u9632\u8de8\u7ad9\u653b\u51fb"},"\u5173\u95ed\u9632\u8de8\u7ad9\u653b\u51fb"),(0,a.kt)("p",null,"\u60c5\u51b5 1\uff0c\u5982\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210925155027023.png",alt:"image-20210925155027023"})),(0,a.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a\u70b9\u51fb\u7f51\u7ad9\uff0c\u8bbe\u7f6e\uff0c\u5c06\u9632\u8de8\u7ad9\u653b\u51fb\u5173\u95ed\u5e76\u4fdd\u6301\uff0c\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210925155445084.png",alt:"image-20210925155445084"})),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u4f2a\u9759\u6001"},"\u8bbe\u7f6e\u4f2a\u9759\u6001"),(0,a.kt)("p",null,"\u63a5\u7740\u518d\u6b21\u8bbf\u95ee\u7f51\u7ad9\u4f1a\u51fa\u73b0 404 \u9875\u9762\u4e0d\u5b58\u5728\u62a5\u9519\uff0c\u5728\u8bbe\u7f6e\u4e2d\u627e\u5230\u4f2a\u9759\u6001\uff0c\u6dfb\u52a0\u4e00\u4e2a thinkphp \u7684\u914d\u7f6e\uff0c\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210925155705573.png",alt:"image-20210925155705573"})),(0,a.kt)("p",null,"\u518d\u6b21\u8bbf\u95ee\u540e\uff0c\u51fa\u73b0\u7684\u5c31\u662f\u6570\u636e\u5e93\u914d\u7f6e\u7684\u95ee\u9898\uff0c\u914d\u7f6e\u4e00\u4e0b\u6570\u636e\u5e93\uff0c\u5bfc\u5165\u6570\u636e\uff0c\u7136\u540e\u518d\u6b21\u8bbf\u95ee\u4fbf\u53ef\u3002"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u518d\u6b21\u63d0\u9192\uff0c\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u8bf7\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"app_debug"),"\u8bbe\u7f6e\u4e3a false\uff0c\u4e0d\u7136\u975e\u6cd5\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4eba\u4e3a\u8bd5\u9519\uff0c\u67e5\u8be2\u5bf9\u5e94\u62a5\u9519\u4ee3\u7801\u3002"))))}d.isMDXComponent=!0}}]);