(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(e,a,t){"use strict";t.r(a);t(40),t(29),t(30),t(13),t(51);var n=t(263),r=t.n(n),c=(t(244),t(0)),l=t.n(c),i=t(208),s=t(318),o=t(218),u=t.n(o),d=t(564),f=t(574),m=t(232),g=t(408),b=t.n(g),p=t(404),y=(t(23),t(285)),w=t(587),h=t(569),v=t(571),E=t(576),_=t(577),q=t(407),j=t(397),x=t.n(j),k=t(400),O=t.n(k),N=t(398),C=t.n(N),S=t(401),V=t.n(S),T=t(322),W=t.n(T),P=t(399),z=t.n(P),D=t(402),B=t.n(D),F=t(405),H=t.n(F),I=t(406),A=t.n(I),G={start:l.a.createElement(x.a,null),overview:l.a.createElement(C.a,null),biography:l.a.createElement(z.a,null),workslist:l.a.createElement(O.a,null),gallery:l.a.createElement(V.a,null),video:l.a.createElement(W.a,null),map:l.a.createElement(B.a,null)},L=function(e,a){return Object.keys(e).map(function(t){return l.a.createElement(v.a,{button:!0,key:u()(),onClick:function(){return e=""+t,void s.scroller.scrollTo(e,{duration:1500,delay:100,smooth:!0,offset:-70});var e}},l.a.createElement(E.a,null,e[""+t]),l.a.createElement(_.a,{primary:a("director_"+t)}))})},M=Object(d.a)(function(e){return{root:{display:"flex"},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-start"})}}),U=function(e){var a=e.open,t=e.onClose,n=Object(i.b)("layout").t,r=M(),c=Object(y.a)();return l.a.createElement(w.a,{className:r.drawer,variant:"persistent",anchor:"right",open:a,onClose:function(){return t(!1)},styles:{paper:r.drawerPaper}},l.a.createElement("div",{className:r.drawerHeader},l.a.createElement(p.a,{onClick:function(){t(!1)}},"rtl"===c.direction?l.a.createElement(H.a,null):l.a.createElement(A.a,null))),l.a.createElement(q.a,null),l.a.createElement(h.a,{component:"nav"},L(G,n)))},Z=Object(d.a)({button:{position:"absolute",right:"2%"}}),K=function(){var e=Object(c.useState)(!1),a=e[0],t=e[1],n=Z();return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{className:n.button,"aria-label":"Menu",color:"inherit",onClick:function(){return t(!0)}},l.a.createElement(b.a,null)),l.a.createElement(U,{open:a,onClose:t}))},R=t(409),Y=t(413),J=function(e){var a=e.bio,t=Object(Y.a)("(max-width:520px)");return l.a.createElement(R.Timeline,{lineColor:"#dddddd"},function(e,a){return e.map(function(e){return l.a.createElement(R.TimelineItem,{key:u()(),dateText:e.date,style:{color:"#34515e"},dateInnerStyle:{fontSize:a?"1rem":"1.4rem",fontWeight:"400",color:"#ffffff",backgroundColor:"#607d8b",boxShadow:"0 2.5px 5px 2.5px #00000040"},bodyContainerStyle:{padding:"10px",fontSize:a?"0.9rem":"1.2rem",textAlign:"justify",boxShadow:"0 2.5px 5px 2.5px #00000040",borderRadius:"5px"}},l.a.createElement("p",null,e.description))})}(a,t))},X=t(578),Q=t(582),$=t(581),ee=t(579),ae=t(580),te=t(568),ne=Object(d.a)({root:{width:"80%",margin:"20px auto",overflowX:"auto",boxShadow:"0 2.5px 5px 2.5px #00000040",borderRadius:"5px","@media only screen and (max-width: 1024px)":{width:"100%"}},head:{backgroundColor:"#607d8b"},fontHeader:{fontSize:"24px",fontWeight:400,color:"#ffffff","@media only screen and (max-width: 520px)":{padding:"1% !important",fontSize:"18px",textAlign:"left"}},fontContent:{color:"#1e2a30",fontSize:"16px","@media only screen and (max-width: 520px)":{padding:"1% !important",fontSize:"14px",textAlign:"left"}}}),re=function(e){var a=e.works,t=Object(i.b)("layout").t,n=a.map(function(e){return a=e.date,t='"'+e.product.title+'" ('+e.product.author+")",n=e.role,{date:a,work:t,role:n};var a,t,n}),r=ne();return l.a.createElement(te.a,{className:r.root},l.a.createElement(X.a,{className:r.table},l.a.createElement(ee.a,null,l.a.createElement(ae.a,{className:r.head},l.a.createElement($.a,{align:"center",className:r.fontHeader},t("layout:table_column_data")),l.a.createElement($.a,{align:"center",className:r.fontHeader},t("layout:table_column_works")),l.a.createElement($.a,{align:"center",className:r.fontHeader},t("layout:table_column_role")))),l.a.createElement(Q.a,null,n.map(function(e){return l.a.createElement(ae.a,{key:u()()},l.a.createElement($.a,{component:"th",scope:"row",align:"center",className:r.fontContent},e.date),l.a.createElement($.a,{align:"center",className:r.fontContent},e.work),l.a.createElement($.a,{align:"center",className:r.fontContent},e.role))}))))},ce=t(414),le=t(239),ie=t(195),se=t.n(ie),oe=(t(196),function(e){var a=e.path,t=Object(le.a)();return l.a.createElement(ce.Carousel,{className:se.a.carousel},t[a].gallery.map(function(e){return l.a.createElement("img",{src:e,alt:"",key:u()()})}))}),ue=t(419),de=t.n(ue),fe=t(197),me=t.n(fe),ge=(t(198),function(e){var a=e.video,t=Object(i.b)("layout").t,n=Object(c.useState)(!1),r=n[0],s=n[1];return l.a.createElement("div",{className:me.a.video},l.a.createElement("button",{type:"button",className:me.a.videoButton,onClick:function(){return s(!r)}},l.a.createElement(W.a,{fontSize:"large",className:me.a.videoIcon}),t("layout:video_button")),l.a.createElement(de.a,{isOpen:r,onClose:function(){return s(!r)},channel:"youtube",videoId:a}))}),be=t(50),pe=t.n(be),ye=t(425),we=t(217),he=t(199),ve=t.n(he),Ee=function(e){return{center:e.coords,zoom:17}};Ee.propTypes={coords:pe.a.arrayOf(pe.a.number).isRequired};var _e=function(e){var a=e.mapData,t="en"===Object(we.a)()?"en":"ru";return l.a.createElement(ye.c,{query:{lang:t}},l.a.createElement(ye.a,{className:ve.a.map,state:Ee(a[0])},a.map(function(e){return t={geometry:(a=e).coords,properties:{hintContent:a.title},modules:["geoObject.addon.hint"]},l.a.createElement(ye.b,Object.assign({},t,{key:u()()}));var a,t})))},qe=t(247),je=t(230),xe=t(240),ke=t(250);function Oe(e,a,t,n,r,c,l){try{var i=e[c](l),s=i.value}catch(o){return void t(o)}i.done?a(s):Promise.resolve(s).then(n,r)}var Ne={margin:"0 auto",padding:"1%",fontSize:"32px"},Ce=Object(d.a)({wrapper:{"@media only screen and (min-width: 1024px)":{width:"80%"}}}),Se=function(e){var a=e.location,t=(Object(i.b)("layout").t,(a.state?a.state:null).director),n=Object(ke.a)(t),o=Ce(),d=Object(c.useState)(null),g=d[0],b=d[1];if(Object(c.useEffect)(function(){function e(){var a;return a=r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(null),e.next=3,Object(xe.a)(n);case 3:a=e.sent,b(a);case 5:case"end":return e.stop()}},e)}),(e=function(){var e=this,t=arguments;return new Promise(function(n,r){var c=a.apply(e,t);function l(e){Oe(c,n,r,l,i,"next",e)}function i(e){Oe(c,n,r,l,i,"throw",e)}l(void 0)})}).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[n]),null===g)return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(K,null)),l.a.createElement(je.a,null));var p={overview:l.a.createElement(qe.a,{id:g}),biography:l.a.createElement(J,{bio:g.bio}),workslist:l.a.createElement(re,{works:g.work}),gallery:l.a.createElement(oe,{path:g.path}),video:l.a.createElement(ge,{video:g.video}),map:l.a.createElement(_e,{mapData:g.mapData})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.Element,{name:"start"},l.a.createElement(m.a,null,l.a.createElement(K,null))),l.a.createElement(f.a,{component:"div",style:Ne,className:o.wrapper},Object.keys(p).map(function(e){return l.a.createElement(s.Element,{key:u()(),name:e},p[""+e])})))};a.default=function(e){var a=e.location;return l.a.createElement(l.a.Fragment,null,"undefined"!=typeof window&&l.a.createElement(c.Suspense,{fallback:l.a.createElement(je.a,null)},l.a.createElement(Se,{location:a})))}},217:function(e,a,t){"use strict";var n=t(271),r=t(257),c=t(258),l=t.n(c),i=t(208);n.a.use(r.a).use(l.a).use(i.a).init({returnObjects:!0,debug:!0,fallbackLng:"en",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"}});a.a=function(){return n.a.language.slice(0,2)}},219:function(e,a,t){var n;e.exports=(n=t(229))&&n.default||n},222:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(66),l=t.n(c);t.d(a,"a",function(){return l.a});t(219),t(9).default.enqueue,r.a.createContext({})},229:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),r=t.n(n),c=t(96);a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},230:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(564),l=t(575),i=Object(c.a)({loaderWrapper:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},loader:{color:"#607d8b"}});a.a=function(){var e=i();return r.a.createElement("div",{className:e.loaderWrapper},r.a.createElement(l.a,{className:e.loader,size:"10vmin"}))}},232:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(208),l=t(572),i=t(573),s=t(574),o=t(564),u=t(218),d=t.n(u),f=t(566),m=t(524),g=t(570),b=t(217),p=Object(o.a)({button:{fontSize:"14px",color:"#ffffff",backgroundColor:"#607d8b","&:hover":{backgroundColor:"#607d8b"}},listItem:{width:64,justifyContent:"center"}}),y=function(){var e=Object(n.useState)(null),a=e[0],t=e[1],l=Object(c.b)("layout").i18n,i=Object(b.a)(),s=p(),o=function(e,a,n){n&&l.changeLanguage(n),t(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:s.button,onClick:function(e){t(e.currentTarget)},"aria-controls":"simple-menu","aria-haspopup":"true"},i),r.a.createElement(m.a,{id:"simple-menu",open:Boolean(a),onClose:o,anchorEl:a,keepMounted:!0},["en","ru","by"].map(function(e){return r.a.createElement(g.a,{className:s.listItem,onClick:function(){return o(0,0,e)},key:d()()},e.toUpperCase())})))},w=(t(224),t(222)),h=Object(o.a)({container:{display:"flex",height:"10vh",justifyContent:"center",alignItems:"center",marginTop:"65px"},link:{textDecoration:"none"},button:{margin:"0 5vw"}}),v=function(){var e=Object(c.b)("layout").t,a=h();return r.a.createElement("div",{className:a.container},r.a.createElement(w.a,{className:a.link,to:"/"},r.a.createElement(f.a,{className:a.button,size:"large"},e("link_main-page"))),r.a.createElement(w.a,{className:a.link,to:"/search/"},r.a.createElement(f.a,{className:a.button,size:"large"},e("link_search"))))},E=Object(o.a)({appBar:{backgroundColor:"#34515e"},title:{margin:"0 4vw",color:"#ffffff","@media only screen and (max-width: 520px)":{fontSize:"1rem"}},toolBar:{position:"relative"}}),_=function(e){var a=e.children,t=Object(c.b)("layout").t,n=E();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:n.appBar,position:"fixed"},r.a.createElement(i.a,{className:n.toolBar},r.a.createElement(y,null),r.a.createElement(s.a,{variant:"h5",className:n.title},t("title_header")),a)),r.a.createElement(v,null))};_.defaultProps={children:null};a.a=_},239:function(e,a,t){"use strict";var n=t(246);a.a=function(){var e=n.data.allContentfulAsset.group,a={};return e.forEach(function(e){a[e.fieldValue]={gallery:[],main:null},e.nodes.forEach(function(t){var n=t.fluid.src;"gallery"===t.description?a[e.fieldValue].gallery.push(n):a[e.fieldValue].main=n})}),a}},240:function(e,a,t){"use strict";var n=t(308).createClient({space:"gwm80bq77yih",accessToken:"JfAKlnv_lv7iKnQg35R952YX0DNu5TWxzDvEx4kW7Os"});a.a=function(e){return n.getEntry(e).then(function(e){return e.fields.directorData})}},246:function(e){e.exports={data:{allContentfulAsset:{group:[{nodes:[{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/1YjCzNFREXLIhu33jBc6uL/0a3def736380bd9c3561054dcb62e81a/2a2ec6c4e359ec06d95f5247c8c29e6e.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/54mobuAGAqyFLp5sTbwRfM/9079bacd6ad7c276b7e59450d463ff6c/d769a003a660176919b2a5cb8fa96cb6.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/1xBBYqEyYpyONBe1ZYB0f8/2ffdfae0d9c4f000024a1dca5a1386e9/ddbf09bc5aa9a7039330b6ebe8505522.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/2Y4MtQ60tmwwKToReK22gN/e14582bd1d4b1510be3d5e9f755816dc/bc0db9c1de606f95be2f9cbab1d362fa.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/7uGoBbqDa5TPUsNvHbVpwP/0467d899a48490b5bf9ee8e59caf3379/d3fe6cd9626ee82429a5b1d8d1fe2578.jpg?w=800&q=50"}},{description:"main",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/2mrMJtiBmLTRhygBvRv1DU/e582e0a7fa9087ec8f3893b379fc5f52/267px-__arysa_Aleksandro__skaja.______________________________________________1937_.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/3NXcvFUFqst4D0ZaEdkpMb/38e7a0697e04f9ba17ef3285eb7f436b/3775af02273a590150a1e89012960225.jpg?w=800&q=50"}}],fieldValue:"alexandrovskaya"},{nodes:[{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/20POn7FmuBDpYE2z40TyM7/6609ba8358cae6302ac1419881a9b585/657067.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/6yH2dmmRFwk84qN1GqVIEa/a6c869277177911b48d87c43c6c09b10/380617.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/47TNGY1wWAg90bpdUVsbH/3823cbe8255e6560dcbc526f7e1445c3/582956.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/7yWpwUEco7FmWTXAoezBOH/bd6eb31742ec319ca11b4e08b27c01e2/583344.jpg?w=800&q=50"}},{description:"main",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/4pggoTG7h7PvDtz5MQ2ozX/6c75c5356b6d79fb695a4cf3f4c0f3bc/Vadzim_Dapkiunas__1_.jpg?w=800&q=50"}}],fieldValue:"dopkynas"},{nodes:[{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/49yFnzroB8BMTHtpPuHOUK/26a3c45c7861c5ce188f3fbd44eab828/1-1.jpeg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/6y1EzDqgES00tdqx7hW03F/791a1c9064fd3020c4da6713572982af/DSCN0572.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/7HVFitG8qS8J5Nbo2x9PnG/5509ce603cc772b57a7a3cc087a46e18/13_28_garcuev.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/2lOavjg8gyZ1SCG2lEU3uL/0a0eb2a9902b2ae075a5621e74a4316a/4e232e6d3bbea31e4bb4042cff2c7e5f.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/3syJjqPwgYXG7AW7KIEhFe/327296d4a83c8ac3fdfec680486a6fe6/______________.jpg?w=800&q=50"}},{description:"main",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/1oaWLwX9sZkOvTHsNYznCv/724573a15826898ad37dd089b7fc0d62/Znyatastudio_729_1.jpg?w=800&q=50"}}],fieldValue:"gartsuev"},{nodes:[{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/3W10emqw71mU2ah5wG9ADk/ee2cf05dc2dd83ea3c723724630ccf6c/01_mirovich_marka_620.jpg?w=800&q=50"}},{description:"main",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/2pcTkyT6SoEIaWBctKWQ9t/6faa11d7169950b3379c80f9bd82d2fd/Mirovich_03.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/40s7AlkgLxtc71tHhONgy2/9f4562e40d4940e192f2a8ec6bf906fd/08_mirovich-1952_620.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/7yTmrjqg24ThSgLnTPD3SO/850bdfe0999eee7c0fd9ce4e89e8cfa0/teatr_kupalovskiy_20.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/WKodixOV4oS8JO5nasYeB/410e9c214ec9d112a7afae56456750d4/217638-1533895431-big.jpg?w=800&q=50"}}],fieldValue:"mirovich"},{nodes:[{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/7EcTAoKXIpokiXPuzelkCS/b504ce25b3f6756cdeea39908e807329/img_4279.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/K9LYTast1hSUBslIGFIHm/0ab9be772a57d598a5291dc0d54c0276/inx960x640.jpg?w=800&q=50"}},{description:"main",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/4q8SzhLLurzb4H9yCe9Yjl/66f862abaeaf6bd6d03423aa13284aaf/Pinigin.JPG?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/3mN67leX9UF1xSYasZht5X/8e65a4f65ea0b9b42db2a3918000ddf5/Pinigin.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/67tW7Wi8lyiKvJVHW9ckkf/abb1c0b2560624465a52612bb95894ff/inx960x640.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/3l7EDzxlk0qjl5WMP7V2Cv/5af965b774dfa655cc04c44c16ea31c7/1441605725447336.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/BlLZIZqoItPBDGS7kPLjZ/00077d0ca6addd37fa0adde11ba4f67d/cms-image-000152301.jpg?w=800&q=50"}}],fieldValue:"pinigin"},{nodes:[{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/6hi87h5WFWUqBtyCoJ3TjF/a4d6c5310a8ed5d0eb970d2d05772e2b/562561.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/D91xMezDCtVm8p4rDbmKM/9c97c5b856044ec814805c82b3284629/515992.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/4IiwHDIeumyLG9IqbGZkTA/f1599d06a29dcc10a280531bf92fa059/63402.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/3k4mDy7Uly82acuOubyZbR/6280467a36c2776b51c7f7e6ed17ce5a/681767.jpg?w=800&q=50"}},{description:"gallery",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/5sWnUoGnboAvuWuxvUuOni/b52a00266acb31abe29e4612ebfd9e66/929953.jpg?w=800&q=50"}},{description:"main",fluid:{src:"//images.ctfassets.net/gwm80bq77yih/7AMhlLmKs9cy1kOWPiH4VA/435c5d12a4e7e037b5922dc11d5bab7f/fadc415520895b8cfdd9fa06a44e4251.jpg?w=800&q=50"}}],fieldValue:"shmakov"}]}}}},247:function(e,a,t){"use strict";t(40),t(13),t(39);var n=t(263),r=t.n(n),c=(t(244),t(0)),l=t.n(c),i=t(208),s=t(240),o=t(239),u=t(192),d=t.n(u);function f(e,a,t,n,r,c,l){try{var i=e[c](l),s=i.value}catch(o){return void t(o)}i.done?a(s):Promise.resolve(s).then(n,r)}a.a=function(e){var a=e.id,t=Object(c.useState)(null),n=t[0],u=t[1],m=Object(o.a)(),g=Object(i.b)("layout").t;if(Object(c.useEffect)(function(){var e,t;"object"!=typeof a?(e=r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)(a);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}},e)}),t=function(){var a=this,t=arguments;return new Promise(function(n,r){var c=e.apply(a,t);function l(e){f(c,n,r,l,i,"next",e)}function i(e){f(c,n,r,l,i,"throw",e)}l(void 0)})},function(){return t.apply(this,arguments)})():u(a)},[a]),null===n)return null;var b=g("birthplace")+": "+n.city;return l.a.createElement("div",{id:"overview",className:d.a.overviewWrapper},l.a.createElement("div",{className:d.a.container},l.a.createElement("img",{className:d.a.img,src:m[n.path].main,alt:"director"})),l.a.createElement("div",{className:d.a.info},l.a.createElement("h1",{className:d.a.name},n.name),l.a.createElement("span",{className:d.a.date},n.date),l.a.createElement("span",{className:d.a.birthplace},b),l.a.createElement("span",{className:d.a.description},n.description)))}},250:function(e,a,t){"use strict";var n=t(251),r=t(217);a.a=function(e){var a=n.data.allContentfulDirector.group,t={};a.forEach(function(e){t[e.fieldValue]={},e.nodes.forEach(function(a){t[e.fieldValue][a.lng]=a.contentful_id})});var c=Object(r.a)();return t[e][c]}},251:function(e){e.exports={data:{allContentfulDirector:{group:[{nodes:[{lng:"en",contentful_id:"LbxpMkmcSNWy34K4wuqcD"},{lng:"by",contentful_id:"7rZee2IU1DUnEpHnPFvu0b"},{lng:"ru",contentful_id:"4Ds4joHKc2GB9BtVNXNSVF"}],fieldValue:"alexandrovskaya"},{nodes:[{lng:"ru",contentful_id:"2TeYwWL8VAhT2f2GlukkZW"},{lng:"en",contentful_id:"1sMGgnyFBKRm98t0PPV4H8"},{lng:"by",contentful_id:"6VExxyZvgYTwPuH4hFIlrG"}],fieldValue:"dopkynas"},{nodes:[{lng:"en",contentful_id:"MfzKHSvDBeadRvrm7lORc"},{lng:"by",contentful_id:"1wLJMEddzViAXLWmwQIWpv"},{lng:"ru",contentful_id:"7nODF9Vt5h3pfacAi8w5hS"}],fieldValue:"gartsuev"},{nodes:[{lng:"ru",contentful_id:"5bqm1CpsXuNvr7FfdHbJGY"},{lng:"en",contentful_id:"3OOiP4yqq2P7usSIHkJpyK"},{lng:"by",contentful_id:"6QOaWTbNMSdNUSTgghgbcr"}],fieldValue:"mirovich"},{nodes:[{lng:"ru",contentful_id:"2WZJblKotmIM5OYb0J8IPG"},{lng:"en",contentful_id:"LoOZ0oCyF1CUCNKAt78uE"},{lng:"by",contentful_id:"4OVR7VyShh7tRBMufHrjJf"}],fieldValue:"pinigin"},{nodes:[{lng:"ru",contentful_id:"7nSgaoJP9PNzZaMG7h0IFZ"},{lng:"en",contentful_id:"hacyPITyE72nUi84UoTZB"},{lng:"by",contentful_id:"7rryW99ZEbyoimvd8ZCHWP"}],fieldValue:"shmakov"}]}}}},305:function(e,a){}}]);
//# sourceMappingURL=component---src-pages-director-jsx-c51b7a758e3045c1f99e.js.map