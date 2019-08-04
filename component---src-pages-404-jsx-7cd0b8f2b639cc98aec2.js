(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(232),o=a(564),c=a(389),i=a.n(c),u=a(568),s=a(574),m=a(208),f=Object(o.a)(function(){return{messageWrapper:{display:"flex",justifyContent:"center"},message:{padding:"1vw 1vw",width:"20vw",display:"flex",flexDirection:"column",alignItems:"center"},icon:{fontSize:"20vw",color:"#607d8b"}}}),d=function(){var e=Object(m.b)("layout").t,t=f();return r.a.createElement("div",{className:t.messageWrapper},r.a.createElement(u.a,{className:t.message},r.a.createElement(i.a,{className:t.icon}),r.a.createElement(s.a,{variant:"h3",component:"h2"},"404"),r.a.createElement(s.a,{component:"p"},e("error-message"))))},p=a(230),v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(d,null))};t.default=function(){return r.a.createElement(r.a.Fragment,null,"undefined"!=typeof window&&r.a.createElement(n.Suspense,{fallback:r.a.createElement(p.a,null)},r.a.createElement(v,null)))}},213:function(e,t,a){"use strict";a(91);var n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=l.default.memo(l.default.forwardRef(function(t,a){return l.default.createElement(o.default,(0,r.default)({ref:a},t),e)}));0;return a.muiName=o.default.muiName,a};var r=n(a(139)),l=n(a(0)),o=n(a(238))},217:function(e,t,a){"use strict";var n=a(271),r=a(257),l=a(258),o=a.n(l),c=a(208);n.a.use(r.a).use(o.a).use(c.a).init({returnObjects:!0,debug:!0,fallbackLng:"en",backend:{loadPath:"/culture-portal/locales/{{lng}}/{{ns}}.json"}});t.a=function(){return n.a.language.slice(0,2)}},219:function(e,t,a){var n;e.exports=(n=a(229))&&n.default||n},222:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(66),o=a.n(l);a.d(t,"a",function(){return o.a});a(219),a(9).default.enqueue,r.a.createContext({})},225:function(e,t,a){"use strict";var n=a(204),r=a(205),l=a(0),o=a.n(l),c=(a(50),a(206)),i=a(207),u=a(211),s=o.a.forwardRef(function(e,t){var a=e.children,l=e.classes,i=e.className,s=e.color,m=void 0===s?"inherit":s,f=e.component,d=void 0===f?"svg":f,p=e.fontSize,v=void 0===p?"default":p,b=e.htmlColor,g=e.titleAccess,h=e.viewBox,E=void 0===h?"0 0 24 24":h,y=Object(r.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.a.createElement(d,Object(n.a)({className:Object(c.a)(l.root,i,"inherit"!==m&&l["color".concat(Object(u.a)(m))],"default"!==v&&l["fontSize".concat(Object(u.a)(v))]),focusable:"false",viewBox:E,color:b,"aria-hidden":g?"false":"true",role:g?"img":"presentation",ref:t},y),a,g?o.a.createElement("title",null,g):null)});s.muiName="SvgIcon",t.a=Object(i.a)(function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}},{name:"MuiSvgIcon"})(s)},229:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(96);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},230:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(564),o=a(575),c=Object(l.a)({loaderWrapper:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},loader:{color:"#607d8b"}});t.a=function(){var e=c();return r.a.createElement("div",{className:e.loaderWrapper},r.a.createElement(o.a,{className:e.loader,size:"10vmin"}))}},232:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(208),o=a(572),c=a(573),i=a(574),u=a(564),s=a(218),m=a.n(s),f=a(566),d=a(524),p=a(570),v=a(217),b=Object(u.a)({button:{fontSize:"14px",color:"#ffffff",backgroundColor:"#607d8b","&:hover":{backgroundColor:"#607d8b"}},listItem:{width:64,justifyContent:"center"}}),g=function(){var e=Object(n.useState)(null),t=e[0],a=e[1],o=Object(l.b)("layout").i18n,c=Object(v.a)(),i=b(),u=function(e,t,n){n&&o.changeLanguage(n),a(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:i.button,onClick:function(e){a(e.currentTarget)},"aria-controls":"simple-menu","aria-haspopup":"true"},c),r.a.createElement(d.a,{id:"simple-menu",open:Boolean(t),onClose:u,anchorEl:t,keepMounted:!0},["en","ru","by"].map(function(e){return r.a.createElement(p.a,{className:i.listItem,onClick:function(){return u(0,0,e)},key:m()()},e.toUpperCase())})))},h=(a(224),a(222)),E=Object(u.a)({container:{display:"flex",height:"10vh",justifyContent:"center",alignItems:"center",marginTop:"65px"},link:{textDecoration:"none"},button:{margin:"0 5vw"}}),y=function(){var e=Object(l.b)("layout").t,t=E();return r.a.createElement("div",{className:t.container},r.a.createElement(h.a,{className:t.link,to:"/"},r.a.createElement(f.a,{className:t.button,size:"large"},e("link_main-page"))),r.a.createElement(h.a,{className:t.link,to:"/search/"},r.a.createElement(f.a,{className:t.button,size:"large"},e("link_search"))))},j=Object(u.a)({appBar:{backgroundColor:"#34515e"},title:{margin:"0 4vw",color:"#ffffff","@media only screen and (max-width: 520px)":{fontSize:"1rem"}},toolBar:{position:"relative"}}),w=function(e){var t=e.children,a=Object(l.b)("layout").t,n=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:n.appBar,position:"fixed"},r.a.createElement(c.a,{className:n.toolBar},r.a.createElement(g,null),r.a.createElement(i.a,{variant:"h5",className:n.title},a("title_header")),t)),r.a.createElement(y,null))};w.defaultProps={children:null};t.a=w},238:function(e,t,a){"use strict";a.r(t);var n=a(225);a.d(t,"default",function(){return n.a})},389:function(e,t,a){"use strict";a(91);var n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=(0,n(a(213)).default)(r.default.createElement("path",{d:"M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"AccessibilityNew");t.default=l}}]);
//# sourceMappingURL=component---src-pages-404-jsx-7cd0b8f2b639cc98aec2.js.map