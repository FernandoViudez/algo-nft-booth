(this["webpackJsonpnft-booth"]=this["webpackJsonpnft-booth"]||[]).push([[0],{150:function(e,t,n){},336:function(e,t){},338:function(e,t){},350:function(e,t){},352:function(e,t){},379:function(e,t){},380:function(e,t){},386:function(e,t){},388:function(e,t){},406:function(e,t){},422:function(e){e.exports=JSON.parse('[{"network":"TestNet","storageToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhmNUUzRTMwNUNmMjNmRmVDNzRBMUI5QkM2MDkwZUI0RTNhZWYyZEYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDEzOTEzMTM2ODAsIm5hbWUiOiJkcmwifQ.RSJ9x1H2W6malDU0w0706AL-R7FuPr7Gb_XZGepFnJg","ipfsGateway":"https://ipfs.io/ipfs/","algod":"https://testnet.algoexplorerapi.io","blockExplorer":"https://testnet.algoexplorer.io"},{"network":"MainNet","storageToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhmNUUzRTMwNUNmMjNmRmVDNzRBMUI5QkM2MDkwZUI0RTNhZWYyZEYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDEzOTEzMTM2ODAsIm5hbWUiOiJkcmwifQ.RSJ9x1H2W6malDU0w0706AL-R7FuPr7Gb_XZGepFnJg","ipfsGateway":"https://ipfs.io/ipfs/","algod":"https://algoexplorerapi.io","blockExplorer":"https://algoexplorer.io"}]')},47:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return v}));var a=n(7),r=n(8),i=n(2),c=n(0),s=n.n(c),o=n(80),u=n(53),l=(n(106),n(54)),d=n(48),f="#arc3",p="metadata.json",h="application/json";function m(e){return"ipfs://"+e}function b(e,t){t.endsWith(f)&&(t=t.slice(0,t.length-f.length));var n=t.split("://");if(n.length<2)return t;switch(n[0]){case"ipfs":return l.a[e].ipfsGateway+n[1];case"https":return t}return t}var j=function(){function e(t){Object(a.a)(this,e),this.id=void 0,this.name=void 0,this.unitName=void 0,this.url=void 0,this.metadataHash=void 0,this.total=void 0,this.decimals=void 0,this.creator=void 0,this.manager=void 0,this.reserve=void 0,this.clawback=void 0,this.freeze=void 0,this.defaultFrozen=void 0,this.id=t.id||0,this.name=t.name||"",this.unitName=t.unitName||"",this.url=t.url||"",this.metadataHash=t.metadataHash||"",this.total=t.total||0,this.decimals=t.decimals||0,this.creator=t.creator||"",this.manager=t.manager||"",this.reserve=t.reserve||"",this.clawback=t.clawback||"",this.freeze=t.freeze||"",this.defaultFrozen=t.defaultFrozen||!1}return Object(r.a)(e,[{key:"valid",value:function(){return this.id>0&&this.total>0&&""!==this.url}}],[{key:"fromParams",value:function(t){var n=t.params;return new e({id:t.index,name:n.name||"",unitName:n["unit-name"]||"",url:n.url||"",metadataHash:n["metadata-hash"]||"",total:n.total||0,decimals:n.decimals||0,creator:n.creator||"",manager:n.manager||"",reserve:n.reserve||"",clawback:n.clawback||"",freeze:n.freeze||"",defaultFrozen:n["default-frozen"]||!1})}}]),e}(),v=function(){function e(t,n,r){Object(a.a)(this,e),this.token=new j({}),this.metadata=new d.a,this.urlMimeType=void 0,this.metadata=t,this.token=n,this.urlMimeType=r}return Object(r.a)(e,[{key:"valid",value:function(){return this.token.valid()&&this.metadata.valid()}},{key:"name",value:function(){return this.metadata.valid()?this.metadata.name:this.token.valid()?this.token.name:""}},{key:"id",value:function(){return this.token.valid()?this.token.id:0}},{key:"imgURL",value:function(e){if(!this.valid())return"https://dummyimage.com/640x360/fff/aaa";var t=b(e,this.metadata.image);return t!==this.metadata.image?t:this.token.url.endsWith(p)?b(e,this.token.url.substring(0,this.token.url.length-p.length))+this.metadata.image:t}}],[{key:"create",value:function(){var t=Object(i.a)(s.a.mark((function t(n,a,r,i){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)(n,a,m(i),r);case 2:return c=t.sent,t.next=5,e.fromAssetId(a,c);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}()},{key:"fromAssetId",value:function(){var t=Object(i.a)(s.a.mark((function t(n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=n,t.next=4,Object(o.c)(n,a);case 4:return t.t2=t.sent,t.abrupt("return",t.t0.fromToken.call(t.t0,t.t1,t.t2));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"fromToken",value:function(){var t=Object(i.a)(s.a.mark((function t(n,a){var r,i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=j.fromParams(a),i=b(n,r.url),t.prev=2,t.next=5,Object(u.c)(i);case 5:c=t.sent,t.t0=c,t.next=t.t0===h?9:16;break;case 9:return t.t1=e,t.next=12,Object(u.b)(i);case 12:return t.t2=t.sent,t.t3=r,t.t4=c,t.abrupt("return",new t.t1(t.t2,t.t3,t.t4));case 16:return t.abrupt("return",new e(d.a.fromToken(r),r,c));case 19:return t.prev=19,t.t5=t.catch(2),t.abrupt("return",new e(new d.a,r));case 22:case"end":return t.stop()}}),t,null,[[2,19]])})));return function(e,n){return t.apply(this,arguments)}}()}]),e}()}).call(this,n(24).Buffer)},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(18),r=n(7),i=n(8),c=n(47),s=n(106);function o(e,t){if("_raw"!==e&&""!==t)return t}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(this,e),this._raw=void 0,this.name="",this.description="",this.image="",this.decimals=0,this.unitName="",this.image_integrity="",this.image_mimetype="",this.background_color="",this.external_url="",this.external_url_integrity="",this.external_url_mimetype="",this.animation_url="",this.animation_url_integrity="",this.animation_url_mimetype="",this.extra_metadata="",this.localization=void 0,this.properties=void 0,Object.assign(this,t)}return Object(i.a)(e,[{key:"toHash",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.hasOwnProperty("extra_metadata"),void 0===this._raw&&(this._raw=this.toString(!1));var t=s.sha256.create();return e?t.update(this.toString(!1)):t.update(this._raw),new Uint8Array(t.digest())}},{key:"valid",value:function(){return""!==this.image}},{key:"toFile",value:function(){var e=new Blob([this.toString()],{type:c.a});return new File([e],c.b)}},{key:"toString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return void 0===this._raw&&(this._raw=JSON.stringify(Object(a.a)({},this),o)),JSON.stringify(JSON.parse(this._raw),o,e?2:0)}}],[{key:"fromToken",value:function(t){return new e({name:t.name,image:t.url,decimals:t.decimals})}}]),e}()},516:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(35),c=n.n(i),s=(n(150),n(11)),o=n(520),u=n(62),l=n(68),d=n(47),f=n(53),p=n(6);function h(e){var t=r.a.useState([]),n=Object(s.a)(t,2),a=n[0],i=n[1],c=r.a.useState(!1),o=Object(s.a)(c,2),u=o[0],l=o[1];r.a.useEffect((function(){u||(Object(f.d)(e.activeConfig,144e5).then((function(t){t=t.splice(0,5);var n=[];for(var a in t){var r=t[a];n.push(Object(f.b)(Object(f.a)(e.activeConfig,r.cid)))}Promise.all(n).then((function(e){var n=[];for(var a in e)""!==e[a].name&&n.push({cid:t[a].cid,md:e[a]});i(n)}))})),l(!0))}),[e.activeConfig,u]);var d=a.map((function(e){return Object(p.jsx)(m,{cidmd:e},e.cid)}));return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"content content-collection",children:d})})}function m(e){return Object(p.jsx)(o.b,{className:"content-collection-item",elevation:u.a.TWO,children:Object(p.jsx)(l.b,{to:"/mint/"+e.cidmd.cid,children:Object(p.jsx)("img",{src:Object(d.e)(0,e.cidmd.md.image),alt:"nft"})})})}var b=n(90),j=n(72),v=n(2),O=n(18),x=n(0),g=n.n(x),w=n(48);function k(e){var t=r.a.useState(new w.a),n=Object(s.a)(t,2),a=n[0],i=n[1],c=r.a.useState(!1),l=Object(s.a)(c,2),d=l[0],h=l[1],m=r.a.useState(),b=Object(s.a)(m,2),j=b[0],x=b[1],k=r.a.useState(),N=Object(s.a)(k,2),I=N[0],T=N[1];function W(){return(W=Object(v.a)(g.a.mark((function t(){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),n=new w.a({name:"DRL Pilot NFTs",unitName:"drl-nft",description:"NFT Minted at DRL race in Las Vegas 1/5/22",decimals:0}),i(n),t.prev=3,t.next=6,Object(f.e)(e.activeConfig,I,n);case 6:h(!1),window.location.reload(),t.next=15;break;case 10:return t.prev=10,t.t0=t.catch(3),alert("Failed to upload image to ipfs :("),h(!1),t.abrupt("return");case 15:case"end":return t.stop()}}),t,null,[[3,10]])})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(o.b,{elevation:u.a.TWO,className:"mint-card",children:[Object(p.jsx)(y,Object(O.a)({imgSrc:j,setFile:function(e){T(e);var t=new FileReader;t.onload=function(e){x(e.target.result)},t.readAsDataURL(e),i((function(t){return new w.a(Object(O.a)(Object(O.a)({},t),{},{image:e.name,image_mimetype:e.type,properties:Object(O.a)(Object(O.a)({},t.properties),{},{size:e.size})}))}))}},a)),Object(p.jsx)(o.a,{intent:"success",style:{float:"right",margin:"15px"},loading:d,onClick:function(){return W.apply(this,arguments)},children:"Upload"})]})})}function y(e){return void 0===e.imgSrc||""===e.imgSrc?Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"content content-piece",children:Object(p.jsx)(o.d,{large:!0,disabled:!1,text:"Choose file...",onInputChange:function(t){t.stopPropagation(),t.preventDefault(),e.setFile(t.target.files.item(0))}})})}):Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"content content-piece",children:Object(p.jsx)("img",{id:"gateway-link",alt:"NFT",src:e.imgSrc})})})}var N=n(149),I=n(29),T=n(80),W=n(262),S=n.n(W),C=n(39),D=n.n(C),R=n(20);function A(e){var t=Object(I.f)().cid,n=r.a.useState(new w.a({})),a=Object(s.a)(n,2),i=a[0],c=a[1],o=r.a.useState(void 0),u=Object(s.a)(o,2),l=u[0],h=u[1],m=r.a.useState(void 0),b=Object(s.a)(m,2),j=b[0],O=b[1],x=r.a.useState(void 0),k=Object(s.a)(x,2),y=k[0],N=k[1],W=r.a.useState(!1),S=Object(s.a)(W,2),C=S[0],R=S[1];function A(){return(A=Object(v.a)(g.a.mark((function n(){var a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return R(!0),n.next=3,d.c.create(e.sw.wallet,e.activeConfig,i,t);case 3:a=n.sent,N(a),O(a.id());case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function F(){return(F=Object(v.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(void 0),t.next=3,Object(T.d)(e.sw.wallet,e.activeConfig,n,y.id());case 3:R(!1);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(){return(M=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(!0),t=D.a.generateAccount(),h(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(v.a)(g.a.mark((function n(){var a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.c.create(e.sw.wallet,e.activeConfig,i,t);case 2:return a=n.sent,n.next=5,Object(T.b)(e.sw.wallet,e.activeConfig,l,a.id());case 5:h(void 0),R(!1),window.location.href="/NFTBooth/";case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return r.a.useEffect((function(){void 0===i._raw&&Object(f.b)(Object(f.a)(e.activeConfig,t)).then((function(e){c(e)}))}),[e.activeConfig,t,i]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(_,{loading:C,cid:t,md:i,mintOnly:function(){return A.apply(this,arguments)},mintAndCreate:function(){return M.apply(this,arguments)}}),Object(p.jsx)(J,{importingAccount:l,cancelCreate:function(){R(!1),h(void 0)},continueCreate:function(){return E.apply(this,arguments)}}),Object(p.jsx)(z,{optIn:j,handleScanned:function(e){return F.apply(this,arguments)}})]})}function _(e){return Object(p.jsxs)(o.b,{elevation:u.a.THREE,children:[Object(p.jsx)("img",{src:Object(d.e)(0,e.md.image),style:{maxWidth:"500px"},alt:"nft"}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(o.a,{loading:e.loading,intent:"primary",onClick:e.mintOnly,children:"I have an account"}),Object(p.jsx)(o.a,{loading:e.loading,intent:"success",onClick:e.mintAndCreate,children:"Make me an account"})]})]})}function J(e){var t=r.a.useState(!1),n=Object(s.a)(t,2),a=n[0],i=n[1],c=r.a.useState(""),u=Object(s.a)(c,2),l=u[0],d=u[1],f=e.importingAccount;return r.a.useEffect((function(){void 0!==f&&(d(JSON.stringify({version:"1.0",mnemonic:Object(C.secretKeyToMnemonic)(f.sk)})),i(!0))}),[f]),Object(p.jsxs)(o.c,{isOpen:a,className:"content",children:[Object(p.jsx)("div",{className:R.DIALOG_BODY,children:Object(p.jsx)(S.a,{value:l})}),Object(p.jsx)("div",{className:R.DIALOG_FOOTER,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(o.a,{style:{margin:"0px 10px"},intent:"danger",onClick:function(){i(!1),e.cancelCreate()},children:"Cancel"}),Object(p.jsx)(o.a,{style:{margin:"0px 10px"},intent:"success",onClick:function(){i(!1),e.continueCreate()},children:"Ready!"})]})})]})}function z(e){var t=r.a.useRef(null),n=r.a.useState(void 0),a=Object(s.a)(n,2),i=a[0],c=a[1],u=r.a.useState(!1),l=Object(s.a)(u,2),d=l[0],f=l[1],h=void 0!==e.optIn&&e.optIn>0;r.a.useEffect((function(){f(h),null===i||void 0===i||i.stop(),null===i||void 0===i||i.start()}),[i,h]);var m="";return Object(p.jsx)(o.c,{isOpen:d,onOpened:function(){null!==t.current&&void 0===i&&c(new N.a(t.current,(function(n){m!==n&&(null===i||void 0===i||i.stop(),t.current=null,c(void 0),f(!1),m=n,e.handleScanned(n))})))},children:Object(p.jsxs)("div",{className:R.DIALOG_BODY,children:[Object(p.jsxs)("h3",{children:["Please Opt into Asset ID ",e.optIn]}),Object(p.jsx)("div",{className:"scanner-container",children:Object(p.jsx)("video",{style:{width:"100%"},ref:t})})]})})}N.a.WORKER_PATH="/qr-scanner-worker.min.js";var F=n(4);function M(e){var t=a.useState(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],c=e.sessionWallet,u=e.updateWallet;function l(e){return d.apply(this,arguments)}function d(){return(d=Object(v.a)(g.a.mark((function t(n){var a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=n.currentTarget.id)in j.allowedWallets){t.next=4;break}return void 0!==e.sessionWallet.wallet&&e.sessionWallet.disconnect(),t.abrupt("return",i(!1));case 4:return r=new j.SessionWallet(e.sessionWallet.network,e.sessionWallet.permissionCallback,a),t.next=7,r.connect();case 7:if(t.sent){t.next=9;break}r.disconnect();case 9:e.updateWallet(r),i(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}a.useEffect((function(){var e;if(!c.connected())return c.connect().then((function(t){t&&(e=setInterval((function(){c.connected()&&(clearInterval(e),u(c))}),500))})),function(){clearInterval(e)}}),[c,u]);for(var f=[],h=0,m=Object.entries(j.allowedWallets);h<m.length;h++){var b=Object(s.a)(m[h],2),O=b[0],x=b[1];f.push(Object(p.jsx)("li",{children:Object(p.jsx)(o.a,{id:O,large:!0,fill:!0,minimal:!0,outlined:!0,onClick:l,children:Object(p.jsxs)("div",{className:"wallet-option",children:[Object(p.jsx)("img",{alt:"wallet-branding",className:"wallet-branding",src:x.img(e.darkMode)}),Object(p.jsx)("h5",{children:x.displayName()})]})})},O))}if(!e.connected)return Object(p.jsxs)("div",{children:[Object(p.jsx)(o.a,{minimal:!0,rightIcon:"selection",intent:"warning",outlined:!0,onClick:function(){i(!0)},children:"Connect Wallet"}),Object(p.jsx)(o.c,{isOpen:r,title:"Select Wallet",onClose:l,children:Object(p.jsx)("div",{className:F.a.DIALOG_BODY,children:Object(p.jsx)("ul",{className:"wallet-option-list",children:f})})})]});var w=e.accts.map((function(e,t){return Object(p.jsxs)("option",{value:t,children:[" ",e.substr(0,8),"...  "]},t)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)(o.e,{onChange:function(t){e.sessionWallet.setAccountIndex(parseInt(t.target.value)),e.updateWallet(e.sessionWallet)},minimal:!0,iconProps:{icon:"symbol-circle",intent:"success"},defaultValue:e.sessionWallet.accountIndex(),children:w}),Object(p.jsx)(o.a,{icon:"log-out",minimal:!0,onClick:function(){e.sessionWallet.disconnect(),e.updateWallet(new j.SessionWallet(e.sessionWallet.network,e.sessionWallet.permissionCallback))}})]})}var E=n(54);var U=function(e){var t=Object(E.b)(),n=new j.SessionWallet(E.a[t].network),a=r.a.useState(n),i=Object(s.a)(a,2),c=i[0],u=i[1],d=r.a.useState(n.accountList()),f=Object(s.a)(d,2),m=f[0],v=f[1],O=r.a.useState(n.connected()),x=Object(s.a)(O,2),g=x[0],w=x[1];return Object(p.jsx)(l.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)(o.f,{children:[Object(p.jsxs)(o.f.Group,{align:b.a.LEFT,children:[Object(p.jsx)(o.f.Heading,{children:"Algorand NFT Minter"}),Object(p.jsx)(o.f.Divider,{}),Object(p.jsx)(l.b,{to:"/",children:Object(p.jsx)(o.a,{minimal:!0,icon:"search",children:"Choose"})}),Object(p.jsx)(l.b,{to:"/upload",children:Object(p.jsx)(o.a,{minimal:!0,icon:"upload",children:"Upload"})})]}),Object(p.jsx)(o.f.Group,{align:b.a.RIGHT,children:Object(p.jsx)(M,{darkMode:!1,sessionWallet:c,accts:m,connected:g,updateWallet:function(e){u(e),v(e.accountList()),w(e.connected())}})})]}),Object(p.jsxs)(I.c,{children:[Object(p.jsx)(I.a,{exact:!0,path:"/",children:Object(p.jsx)(h,{activeConfig:t,sw:c})}),Object(p.jsx)(I.a,{path:"/mint/:cid",children:Object(p.jsx)(A,{activeConfig:t,sw:c})}),Object(p.jsx)(I.a,{exact:!0,path:"/upload",children:Object(p.jsx)(k,{activeConfig:t})})]})]})})},P=n(37),L=Object(P.a)();c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(U,{history:L})}),document.getElementById("root"))},53:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return g}));var a=n(18),r=n(2),i=n(10),c=n(0),s=n.n(c),o=n(47),u=n(48),l=n(54),d=n(250),f=void 0;function p(e){return void 0===f&&(f=new d.a({token:l.a[e].storageToken})),f}function h(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(s.a.mark((function e(t,n,a){var r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p(t),e.next=3,r.put([n],{wrapWithDirectory:!1});case 3:return i=e.sent,a.image=Object(o.d)(i),e.next=7,r.put([a.toFile()],{wrapWithDirectory:!1});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(s.a.mark((function e(t,n){var a,r,c,o,u,l,d,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=p(t),r=[],c=!1,o=!1,e.prev=4,l=Object(i.a)(a.list());case 6:return e.next=8,l.next();case 8:if(!(c=!(d=e.sent).done)){e.next=18;break}if(f=d.value,!(Date.now()-Date.parse(f.updated)<n)){e.next=14;break}return r.push(f),e.abrupt("continue",15);case 14:return e.abrupt("return",r);case 15:c=!1,e.next=6;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(4),o=!0,u=e.t0;case 24:if(e.prev=24,e.prev=25,!c||null==l.return){e.next=29;break}return e.next=29,l.return();case 29:if(e.prev=29,!o){e.next=32;break}throw u;case 32:return e.finish(29);case 33:return e.finish(24);case 34:return e.abrupt("return",r);case 35:case"end":return e.stop()}}),e,null,[[4,20,24,34],[25,,29,33]])})))).apply(this,arguments)}function v(e,t){return l.a[e].ipfsGateway+t}function O(e){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Request(t,{method:"HEAD"}),e.next=3,fetch(n);case 3:return a=e.sent,e.abrupt("return",a.headers.get("Content-Type"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(r.a)(s.a.mark((function e(t){var n,r,i,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new Request(t),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.blob();case 7:return i=e.sent,e.next=10,i.text();case 10:return c=e.sent,o=JSON.parse(c),e.abrupt("return",new u.a(Object(a.a)({_raw:c},o)));case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:return e.abrupt("return",new u.a({}));case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=n(422);var r="active-conf";function i(){var e=sessionStorage.getItem(r);return void 0===e||null===e?0:parseInt(e)}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return x}));var a=n(18),r=n(11),i=n(2),c=n(0),s=n.n(c),o=n(39),u=n.n(o),l=(n(47),n(54));function d(e){return new u.a.Algodv2("",l.a[e].algod,"")}function f(e,t,n,a){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t,n,a,i){var c,u,l,d,f,p,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getDefaultAccount(),e.next=3,v(n,100);case 3:return u=e.sent,l=Object(o.makeAssetCreateTxnWithSuggestedParamsFromObject)({from:c,assetName:i.name,unitName:i.unitName,assetURL:a,assetMetadataHash:i.toHash(),manager:c,total:1,decimals:0,defaultFrozen:!1,suggestedParams:u}),e.next=7,t.signTxn([l]);case 7:return d=e.sent,f=Object(r.a)(d,1),p=f[0],e.next=12,w(n,[p]);case 12:return h=e.sent,e.abrupt("return",h["asset-index"]);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n,a){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t,n,a,i){var c,l,d,f,p,h,m,b,j,O,x;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getDefaultAccount(),e.next=3,v(n,100);case 3:return l=e.sent,d=Object(o.makePaymentTxnWithSuggestedParamsFromObject)({from:c,to:a.addr,amount:3e6,suggestedParams:l}),f=Object(o.makeAssetTransferTxnWithSuggestedParamsFromObject)({from:a.addr,to:a.addr,assetIndex:i,amount:0,suggestedParams:l}),p=Object(o.makeAssetTransferTxnWithSuggestedParamsFromObject)({from:c,to:a.addr,assetIndex:i,amount:1,suggestedParams:l}),h=[d,f,p],u.a.assignGroupID(h),e.next=11,t.signTxn(h);case 11:return m=e.sent,b=Object(r.a)(m,3),j=b[0],b[1],O=b[2],x=u.a.signTransaction(f,a.sk),e.next=19,w(n,[j,x,O]);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t,n,a){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(s.a.mark((function e(t,n,a,i){var c,u,l,d,f,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.getDefaultAccount(),e.next=3,v(n,100);case 3:return u=e.sent,l=Object(o.makeAssetTransferTxnWithSuggestedParamsFromObject)({from:c,to:a,assetIndex:i,amount:1,suggestedParams:u}),e.next=7,t.signTxn([l]);case 7:return d=e.sent,f=Object(r.a)(d,1),p=f[0],e.next=12,w(n,[p]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t).getTransactionParams().do();case 2:return r=e.sent,e.abrupt("return",Object(a.a)(Object(a.a)({},r),{},{lastRound:r.firstRound+n}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t).getAssetByID(n).do();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(s.a.mark((function e(t,n){var a,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d(t),e.prev=1,e.next=4,a.sendRawTransaction(n.map((function(e){return e.blob}))).do();case 4:return r=e.sent,i=r.txId,e.next=8,y(a,i,3);case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:return e.abrupt("return",void 0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function y(e,t,n){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(s.a.mark((function e(t,n,a){var r,i,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null==t||null==n||a<0)){e.next=2;break}throw new Error("Bad arguments.");case 2:return e.next=4,t.status().do();case 4:if("undefined"!==typeof(r=e.sent)){e.next=7;break}throw new Error("Unable to get node status");case 7:i=r["last-round"]+1,c=i;case 9:if(!(c<i+a)){e.next=23;break}return e.next=12,t.pendingTransactionInformation(n).do();case 12:if(void 0===(o=e.sent)){e.next=18;break}if(!(null!==o["confirmed-round"]&&o["confirmed-round"]>0)){e.next=16;break}return e.abrupt("return",o);case 16:if(!(null!=o["pool-error"]&&o["pool-error"].length>0)){e.next=18;break}throw new Error("Transaction Rejected pool error".concat(o["pool-error"]));case 18:return e.next=20,t.statusAfterBlock(c).do();case 20:c+=1,e.next=9;break;case 23:throw new Error("Transaction not confirmed after ".concat(a," rounds!"));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}},[[516,1,2]]]);
//# sourceMappingURL=main.7c5663cd.chunk.js.map