"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9410],{33794:function(e,t){t.tT=t.PS=t.$G=void 0,t.$G={favorite:{label:"\u559c\u7231",description:"\u6211\u6700\u559c\u6b22\u7684\u7f51\u7ad9\uff0c\u4e00\u5b9a\u8981\u53bb\u770b\u770b!",color:"#e9669e"},opensource:{label:"\u5f00\u6e90",description:"\u5f00\u6e90\u9879\u76ee\u53ef\u4ee5\u63d0\u4f9b\u7075\u611f!",color:"#39ca30"},product:{label:"\u4ea7\u54c1",description:"\u4e0e\u4ea7\u54c1\u76f8\u5173\u7684\u9879\u76ee!",color:"#dfd545"},design:{label:"\u8bbe\u8ba1",description:"\u8bbe\u8ba1\u6f02\u4eae\u7684\u7f51\u7ad9!",color:"#a44fb7"},javascript:{label:"JavaScript",description:"JavaScript \u9879\u76ee",color:"#dfd545"}};var r=[{title:"\u5f85\u5b8c\u5584",description:"\u9879\u76ee\u4ecb\u7ecd\u6709\u5f85\u5c06\u6765\u5b8c\u5584",preview:"https://s1.ax1x.com/2022/09/14/vxu1u8.png",website:"",source:"",tags:["opensource","design","favorite"]}];t.PS=Object.keys(t.$G),t.tT=new Array(12).fill(r[0]).map((function(e){return Object.assign({},e,{tags:Object.keys(t.$G).filter((function(e){return Math.random()>.5}))})}))},9353:function(e,t,r){r.r(t),r.d(t,{default:function(){return F},prepareUserState:function(){return j}});var n=r(67294),a=r(78882),o=r(86010),c=r(63366),s={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"},i=r(35944),l=["svgClass","colorAttr","children","color","size","viewBox"];function u(e){var t=e.svgClass,r=e.colorAttr,n=e.children,a=e.color,u=void 0===a?"inherit":a,d=e.size,h=void 0===d?"medium":d,m=e.viewBox,f=void 0===m?"0 0 24 24":m,g=(0,c.Z)(e,l);return(0,i.tZ)("svg",Object.assign({viewBox:f,color:r,"aria-hidden":!0,className:(0,o.Z)(s.svgIcon,s[u],s[h],t)},g,{children:n}))}function d(e){return(0,i.tZ)(u,Object.assign({},e,{children:(0,i.tZ)("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})}))}var h="tags";function m(e){return new URLSearchParams(e).getAll(h)}var f="operator";function g(e){var t;return null!=(t=new URLSearchParams(e).get(f))?t:"OR"}var v=r(15944),p=r(83699),Z={showcaseCard:"showcaseCard_MkqL",showcaseCardImage:"showcaseCardImage_WoVb",showcaseCardHeader:"showcaseCardHeader_Mceh",showcaseCardTitle:"showcaseCardTitle_J7aP",svgIconFavorite:"svgIconFavorite_Xc7Y",showcaseCardSrcBtn:"showcaseCardSrcBtn_nptx",showcaseCardBody:"showcaseCardBody_R1Nj",cardFooter:"cardFooter_ODAT",tag:"tag_P8ik",textLabel:"textLabel_MjoO",colorLabel:"colorLabel_gM4S"},b=r(73935),w=r(66441),_="tooltip_LqSg",C="tooltipArrow_bmQN";function N(e){var t=e.children,r=e.id,a=e.anchorEl,o=e.text,c=e.delay,s=(0,n.useState)(!1),l=s[0],u=s[1],d=(0,n.useState)(null),h=d[0],m=d[1],f=(0,n.useState)(null),g=f[0],v=f[1],p=(0,n.useState)(null),Z=p[0],N=p[1],S=(0,n.useState)(null),y=S[0],B=S[1],L=(0,w.D)(h,g,{modifiers:[{name:"arrow",options:{element:Z}},{name:"offset",options:{offset:[0,8]}}]}),E=L.styles,T=L.attributes,I=(0,n.useRef)(null),x=r+"_tooltip";return(0,n.useEffect)((function(){B(a?"string"==typeof a?document.querySelector(a):a:document.body)}),[y,a]),(0,n.useEffect)((function(){var e=["mouseenter","focus"],t=["mouseleave","blur"],r=function(){""!==o&&(null==h||h.removeAttribute("title"),I.current=window.setTimeout((function(){u(!0)}),c||400))},n=function(){clearInterval(I.current),u(!1)};return h&&(e.forEach((function(e){h.addEventListener(e,r)})),t.forEach((function(e){h.addEventListener(e,n)}))),function(){h&&(e.forEach((function(e){h.removeEventListener(e,r)})),t.forEach((function(e){h.removeEventListener(e,n)})))}}),[h,o,c]),(0,i.BX)(i.HY,{children:[n.cloneElement(t,{ref:m,"aria-describedby":l?x:void 0}),y?b.createPortal(l&&(0,i.BX)("div",Object.assign({id:x,role:"tooltip",ref:v,className:_,style:E.popper},T.popper,{children:[o,(0,i.tZ)("span",{ref:N,className:C,style:E.arrow})]})),y):y]})}var S=r(33794);var y=n.forwardRef((function(e,t){var r=e.label,n=e.color,a=e.description;return(0,i.BX)("li",{ref:t,className:Z.tag,title:a,children:[(0,i.tZ)("span",{className:Z.textLabel,children:r.toLowerCase()}),(0,i.tZ)("span",{className:Z.colorLabel,style:{backgroundColor:n}})]})}));function B(e){var t,r,n=e.tags.map((function(e){return Object.assign({tag:e},S.$G[e])})),a=(t=function(e){return S.PS.indexOf(e.tag)},(r=[].concat(n)).sort((function(e,r){return t(e)>t(r)?1:t(r)>t(e)?-1:0})),r);return(0,i.tZ)(i.HY,{children:a.map((function(e,t){var r="showcase_card_tag_"+e.tag;return(0,i.tZ)(N,{text:e.description,anchorEl:"#__docusaurus",id:r,children:(0,i.tZ)(y,Object.assign({},e),t)},t)}))})}var L=(0,n.memo)((function(e){var t=e.user;return(0,i.BX)("li",{className:(0,o.Z)("card shadow--md",Z.showcaseCard),children:[(0,i.tZ)("div",{className:(0,o.Z)("card__image",Z.showcaseCardImage),children:(0,i.tZ)(v.Z,{img:t.preview,alt:t.title})}),(0,i.BX)("div",{className:"card__body",children:[(0,i.BX)("div",{className:(0,o.Z)(Z.showcaseCardHeader),children:[(0,i.tZ)("h4",{className:Z.showcaseCardTitle,children:(0,i.tZ)(p.Z,{href:t.website,className:Z.showcaseCardLink,children:t.title})}),t.tags.includes("favorite")&&(0,i.tZ)(d,{svgClass:Z.svgIconFavorite,size:"small"}),t.source&&(0,i.tZ)(p.Z,{href:t.source,className:(0,o.Z)("button button--secondary button--sm",Z.showcaseCardSrcBtn),children:"\u6e90\u7801"})]}),(0,i.tZ)("p",{className:Z.showcaseCardBody,children:t.description})]}),(0,i.tZ)("ul",{className:(0,o.Z)("card__footer",Z.cardFooter),children:(0,i.tZ)(B,{tags:t.tags})})]},t.title)})),E=r(36136),T=r(76775),I="showcaseList_mWrw",x="searchContainer_a2sm",O="showcaseFavoriteHeader_A4FS",P="\u9879\u76ee\u5c55\u793a",X="\u4ee5\u4e0b\u9879\u76ee\u5747\u7531\u672c\u4eba\u5f00\u53d1\uff0c\u5747\u53ef\u81ea\u7531\u4f7f\u7528\uff0c\u90e8\u5206\u5f00\u6e90\u3002";function j(){var e;if(E.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}var k="name";function A(e){return new URLSearchParams(e).get(k)}function H(){var e=(0,T.TH)(),t=(0,n.useState)("OR"),r=t[0],a=t[1],o=(0,n.useState)([]),c=o[0],s=o[1],i=(0,n.useState)(null),l=i[0],u=i[1];return(0,n.useEffect)((function(){var t,r,n,o,c;s(m(e.search)),a(g(e.search)),u(A(e.search)),t=e.state,o=(n=null!=t?t:{scrollTopPosition:0,focusedElementId:void 0}).scrollTopPosition,c=n.focusedElementId,null==(r=document.getElementById(c))||r.focus(),window.scrollTo({top:o})}),[e]),(0,n.useMemo)((function(){return function(e,t,r,n){return n&&(e=e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))),0===t.length?e:e.filter((function(e){return 0!==e.tags.length&&("AND"===r?t.every((function(t){return e.tags.includes(t)})):t.some((function(t){return e.tags.includes(t)})))}))}(S.tT,c,r,l)}),[c,r,l])}function R(){return(0,i.BX)("section",{className:"margin-top--lg margin-bottom--lg text--center",children:[(0,i.tZ)("h1",{children:P}),(0,i.tZ)("p",{children:X}),(0,i.tZ)("a",{className:"button button--primary",href:"https://github.com/MISfang",target:"_blank",rel:"noreferrer",children:"\u524d\u5f80 Github \u514b\u9686\u9879\u76ee"})]})}function M(){var e=(0,T.k6)(),t=(0,T.TH)(),r=(0,n.useState)(null),a=r[0],o=r[1];return(0,n.useEffect)((function(){o(A(t.search))}),[t]),(0,i.tZ)("div",{className:x,children:(0,i.tZ)("input",{id:"searchbar",placeholder:"\u641c\u7d22\u9879\u76ee",value:null!=a?a:void 0,onInput:function(r){o(r.currentTarget.value);var n=new URLSearchParams(t.search);n.delete(k),r.currentTarget.value&&n.set(k,r.currentTarget.value),e.push(Object.assign({},t,{search:n.toString(),state:j()})),setTimeout((function(){var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}})})}function U(){var e=H();return 0===e.length?(0,i.tZ)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,i.BX)("div",{className:"container padding-vert--md text--center",children:[(0,i.tZ)("h2",{children:"No result"}),(0,i.tZ)(M,{})]})}):(0,i.tZ)("section",{className:"margin-top--lg margin-bottom--xl",children:e.length===S.tT.length?(0,i.tZ)(i.HY,{children:(0,i.BX)("div",{className:"container margin-top--lg",children:[(0,i.BX)("div",{className:(0,o.Z)("margin-bottom--md",O),children:[(0,i.tZ)("h2",{children:"\u6240\u6709\u9879\u76ee"}),(0,i.tZ)(M,{})]}),(0,i.tZ)("ul",{className:I,children:S.tT.map((function(e){return(0,i.tZ)(L,{user:e},e.title)}))})]})}):(0,i.BX)("div",{className:"container",children:[(0,i.BX)("div",{className:(0,o.Z)("margin-bottom--md",O),children:[(0,i.tZ)("h2",{children:"\u6240\u6709\u9879\u76ee"}),(0,i.tZ)(M,{})]}),(0,i.tZ)("ul",{className:I,children:e.map((function(e){return(0,i.tZ)(L,{user:e},e.title)}))})]})})}var F=function(){return(0,i.tZ)(a.Z,{title:P,description:X,children:(0,i.BX)("main",{className:"margin-vert--lg",children:[(0,i.tZ)(R,{}),(0,i.tZ)(U,{})]})})}}}]);