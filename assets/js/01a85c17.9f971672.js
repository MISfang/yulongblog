"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4013],{22324:function(e,t,n){var r,i=n(67294),l=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){var t=e.title,n=e.titleId,s=c(e,l);return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},s),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M16 20h4v-4h-4v4Zm0-6h4v-4h-4v4Zm-6-6h4V4h-4v4Zm6 0h4V4h-4v4Zm-6 6h4v-4h-4v4Zm-6 0h4v-4H4v4Zm0 6h4v-4H4v4Zm6 0h4v-4h-4v4ZM4 8h4V4H4v4Z"})))}},71212:function(e,t,n){var r,i=n(67294),l=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){var t=e.title,n=e.titleId,s=c(e,l);return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},s),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M3 4h4v4H3V4Zm6 1v2h12V5H9Zm-6 5h4v4H3v-4Zm6 1v2h12v-2H9Zm-6 5h4v4H3v-4Zm6 1v2h12v-2H9Z"})))}},6718:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(63366),i=(n(67294),n(86010)),l=n(78882),a=n(13488),c=n(83699),s=n(97325),o="sidebar_brwN",u="sidebarItemTitle_r4Q1",h="sidebarItemList_QwSx",m="sidebarItem_lnhn",d="sidebarItemLink_yNGZ",v="sidebarItemLinkActive_oSRm",f=n(35944);function g(e){var t=e.sidebar;return(0,f.tZ)("aside",{className:"col col--3",children:(0,f.BX)("nav",{className:(0,i.Z)(o,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,f.tZ)("div",{className:(0,i.Z)(u,"margin-bottom--md"),children:t.title}),(0,f.tZ)("ul",{className:(0,i.Z)(h,"clean-list"),children:t.items.map((function(e){return(0,f.tZ)("li",{className:m,children:(0,f.tZ)(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:v,children:e.title})},e.permalink)}))})]})})}var Z=n(53086);function b(e){var t=e.sidebar;return(0,f.tZ)("ul",{className:"menu__list",children:t.items.map((function(e){return(0,f.tZ)("li",{className:"menu__list-item",children:(0,f.tZ)(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function p(e){return(0,f.tZ)(Z.Zo,{component:b,props:e})}function w(e){var t=e.sidebar,n=(0,a.i)();return null!=t&&t.items.length?"mobile"===n?(0,f.tZ)(p,{sidebar:t}):(0,f.tZ)(g,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,n=e.toc,a=e.children,c=(0,r.Z)(e,N),s=t&&t.items.length>0;return(0,f.tZ)(l.Z,Object.assign({},c,{children:(0,f.tZ)("div",{className:"container margin-vert--lg",children:(0,f.BX)("div",{className:"row",children:[(0,f.tZ)(w,{sidebar:t}),(0,f.tZ)("main",{className:(0,i.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog",children:a}),n&&(0,f.tZ)("div",{className:"col col--2",children:n})]})})}))}},53852:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var r=n(86010),i=n(83699),l="tag_zVej",a="tagRegular_sFm0",c="tagWithCount_h2kH",s=n(35944);function o(e){var t=e.permalink,n=e.label,o=e.count;return(0,s.BX)(i.Z,{href:t,className:(0,r.Z)(l,o?c:a),children:[n,o&&(0,s.tZ)("span",{children:o})]})}},45565:function(e,t,n){n.d(t,{M:function(){return i},P:function(){return l}});var r=n(97325),i=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],r=t[0];return n.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}},19588:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(67294),i=n(86010),l=n(45565),a=n(79488),c=n(23702),s=n(6718),o=n(46080),u=n(33647),h=n(71212),m=n(22324),d=n(35944);function v(e){var t=e.tags,n=e.sidebar,v=(0,l.M)(),f=(0,r.useState)("flat"),g=f[0],Z=f[1];return(0,d.BX)(a.FG,{className:(0,i.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage),children:[(0,d.tZ)(a.d,{title:v}),(0,d.tZ)(u.Z,{tag:"blog_tags_list"}),(0,d.BX)(s.Z,{sidebar:n,children:[(0,d.BX)("div",{className:"blogtag__swith-view",children:[(0,d.tZ)("h1",{children:v}),(0,d.BX)("div",{children:[(0,d.tZ)(m.Z,{onClick:function(){return Z("flat")},className:"flat"===g?"bloghome__switch--selected":"bloghome__switch"}),(0,d.tZ)(h.Z,{onClick:function(){return Z("letter")},className:"letter"===g?"bloghome__switch--selected":"bloghome__switch"})]})]}),"letter"===g&&(0,d.tZ)(o.Z,{tags:t}),"flat"===g&&(0,d.tZ)(o.D,{tags:t})]})]})}},46080:function(e,t,n){n.d(t,{D:function(){return o},Z:function(){return s}});n(67294);var r=n(45565),i=n(53852),l="tag_Yyuv",a=n(35944);function c(e){var t=e.letterEntry;return(0,a.BX)("article",{children:[(0,a.tZ)("h2",{children:t.letter}),(0,a.tZ)("ul",{className:"padding--none",children:t.tags.map((function(e){return(0,a.tZ)("li",{className:l,children:(0,a.tZ)(i.Z,Object.assign({},e))},e.permalink)}))}),(0,a.tZ)("hr",{})]})}function s(e){var t=e.tags,n=(0,r.P)(t);return(0,a.tZ)("section",{className:"margin-vert--lg",children:n.map((function(e){return(0,a.tZ)(c,{letterEntry:e},e.letter)}))})}function o(e){var t=e.tags;return console.log(t),(0,a.tZ)("section",{className:"margin-vert--lg",children:(0,a.tZ)("ul",{className:"padding--none",children:t.map((function(e){return(0,a.tZ)("li",{className:l,children:(0,a.tZ)(i.Z,Object.assign({},e))},e.permalink)}))})})}}}]);