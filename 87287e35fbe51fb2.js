(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[9222],{

/***/ 26998:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(558104);self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};(function(__c) {var D=__c.D;var z=__c.z;
var oCb=function(a,b,c,d){c=new nCb(c,d);z(1===a.count(),"Only single widget root element is supported");a=a.first();z(null!=a&&"layout"===a.type,`Unexpected widget root found: ${null===a||void 0===a?void 0:a.type}`);c.U9(a,b)},qCb=function(a){return{...__c.UK,...R6,top:0,left:0,width:a.width,height:a.height,viewBox:{top:0,left:0,width:a.S9.width,height:a.S9.height},ab:a.ab.map(pCb)}},rCb=function(a){switch(a.bG){case 0:var b=__c.wj.Ec().attrs({"font-size":a.fontSize,leading:a.lineHeight?1E3*a.lineHeight:
void 0,"text-align":a.textAlign||"start","font-weight":a.fontWeight,"font-family":a.fontFamily,"font-kerning":"normal","font-feature-liga":"on","font-feature-clig":"on","font-feature-calt":"on",direction:a.direction});a.color&&b.mh("color",a.color);b=b.$b(a.text.endsWith("\n")?a.text:`${a.text}\n`).build();var c;return{...__c.SN,...S6,...R6,Ka:null!==(c=a.Ka)&&void 0!==c?c:0,text:b,kh:2};case 1:return b=a.text,{...__c.SN,...S6,...R6,text:b,kh:2};default:throw new D(a);}},W6=function({content:a,fill:b,
border:c,N:d}){b={...__c.MYa,fill:T6(b),border:U6(c),N:V6(d)};switch(a.type){case "shape":return{...b,element:qCb(a)};case "text":return{...b,element:rCb(a)};case "layout":return{...b,element:sCb(a)};default:throw new D(a);}},sCb=function({cells:a,border:b,fill:c,N:d,gridTemplateColumns:e,gridTemplateRows:f,columnGap:g,rowGap:h}){return{...__c.NYa,...S6,...R6,G:S6.width,W:S6.height,fill:T6(c),border:U6(b),direction:1,N:V6(d),cells:new Map(a.map(k=>[k.id,W6(k)])),behavior:{rules:[{Mf:void 0,grid:{gridTemplateColumns:e,
gridTemplateRows:f,columnGap:null!==g&&void 0!==g?g:0,rowGap:null!==h&&void 0!==h?h:0,og:tCb(a)}}]},We:void 0}},tCb=function(a){return new Map(a.map(b=>[b.id,uCb(b)]))},uCb=function(a){const b=a.placement.padding;return{...__c.ND,...a.placement,alignSelf:"center",padding:{...__c.uT,...(null!=b?"number"===typeof b?{all:b}:b:{})}}},U6=function(a){var b;const c=null!==(b=null===a||void 0===a?void 0:a.color)&&void 0!==b?b:"#000000";var d;return{...__c.sT,all:a?{...__c.vT,weight:null!==(d=a.weight)&&void 0!==
d?d:1,color:c,wg:!0}:void 0}},V6=function(a){return{...__c.tT,...(null!=a?"number"===typeof a?{all:a}:a:{})}},pCb=function(a){return{...__c.VK,...a,fill:T6(a.fill),stroke:vCb(a.stroke)}},vCb=function(a){return a?{...__c.vT,color:a.color,weight:a.weight}:void 0},T6=function(a){var b;return{...__c.XK,color:null===a||void 0===a?void 0:a.color,Ka:null!==(b=null===a||void 0===a?void 0:a.Ka)&&void 0!==b?b:0}},BCb=function(a,b){const c=new Map(b.cells.map(e=>[e.id,e]));wCb(a.cells,c,(e,f)=>{let g=!1;xCb(e.element,
f.content,()=>{a.cells.delete(f.id);a.cells.set(f.id,W6(f));g=!0});g||(X6(e.fill,f.fill),yCb(e.border,f.border),zCb(e.N,f.N))},e=>W6(e));ACb(a.behavior,b,c);X6(a.fill,b.fill);zCb(a.N,b.N);yCb(a.border,b.border);var d;a.Ka=null!==(d=b.Ka)&&void 0!==d?d:0},ACb=function(a,b,c){Y6(a.rules,[b],d=>{CCb(d.grid.gridTemplateColumns,b.gridTemplateColumns)||(d.grid.gridTemplateColumns=b.gridTemplateColumns);CCb(d.grid.gridTemplateRows,b.gridTemplateRows)||(d.grid.gridTemplateRows=b.gridTemplateRows);var e;d.grid.columnGap=
null!==(e=b.columnGap)&&void 0!==e?e:0;var f;d.grid.rowGap=null!==(f=b.rowGap)&&void 0!==f?f:0;wCb(d.grid.og,c,(g,h)=>{const k=h.placement.padding,l=h.placement.gridColumnEnd,m=h.placement.gridRowStart,n=h.placement.gridRowEnd,p=h.placement.alignSelf;g.gridColumnStart=h.placement.gridColumnStart;g.gridColumnEnd=l;g.gridRowStart=m;g.gridRowEnd=n;"number"===typeof k&&g.padding.all!==k?g.padding.all=k:"number"!==typeof k&&(g.padding.ra=null===k||void 0===k?void 0:k.ra,g.padding.Fa=null===k||void 0===
k?void 0:k.Fa,g.padding.qa=null===k||void 0===k?void 0:k.qa,g.padding.Ja=null===k||void 0===k?void 0:k.Ja);g.alignSelf=p},g=>uCb(g))},d=>{var e,f;return{Mf:void 0,grid:{gridTemplateColumns:b.gridTemplateColumns,gridTemplateRows:b.gridTemplateRows,columnGap:null!==(e=b.columnGap)&&void 0!==e?e:0,rowGap:null!==(f=b.rowGap)&&void 0!==f?f:0,og:tCb(d.cells)}}})},DCb=function(a,b){Y6(a.ab,b.ab,(e,f)=>{e.d=f.d;X6(e.fill,f.fill);e.stroke.ref&&f.stroke?(e=e.stroke.ref,f=f.stroke,e.color=f.color,e.weight=f.weight):
e.stroke.set(vCb(f.stroke))},e=>pCb(e));const {viewBox:c,width:d}=qCb(b);a.width=d;__c.Vr(a.viewBox).equals(__c.Vr(c))||(a.viewBox=c)},xCb=function(a,b,c){switch(b.type){case "shape":"shape"===a.type?DCb(a,b):c();break;case "text":"text"===a.type&&__c.wj.domain.Hb(__c.wj.ya(a.text),rCb(b).text)||c();break;case "layout":"layout"===a.type?BCb(a,b):c();break;default:throw new D(b);}},wCb=function(a,b,c,d){const e=new Set(a.keys());for(const [f,g]of b)(b=a.get(f))?(e.delete(f),c(b,g)):a.set(f,d(g));e.forEach(f=>
a.delete(f))},Y6=function(a,b,c,d){const e=a.toArray();for(let f=0;f<Math.max(e.length,b.length);f++)if(f<e.length&&f<b.length)c(e[f],b[f]);else if(f<e.length&&f>=b.length)a.delete(e[f]);else if(f>=e.length&&f<b.length){const g=d(b[f]);a.append(g)}},X6=function(a,b){a.color=null===b||void 0===b?void 0:b.color;var c;a.Ka=null!==(c=null===b||void 0===b?void 0:b.Ka)&&void 0!==c?c:0},zCb=function(a,b){b=V6(b);a.all=b.all;a.wA=b.wA;a.uA=b.uA;a.vA=b.vA;a.tA=b.tA},yCb=function(a,b){b=U6(b).all;var c;if(c=
b)c=a.all.ref,c=!(c&&b?__c.eS.domain.Hb(__c.eS.ya(c),b):!c&&!b);c&&a.all.set(b)},CCb=function(a,b){return a.length===b.length&&a.every(c=>b.includes(c))},FCb=function(a,b,c,d){let e=a.fFa.get(b);if(e)return e;e={Qh:new ECb(c.tw,b,d,c.Iga),Sra:void 0,EAa:void 0,uBa:__c.sX.mode};a.fFa.set(b,e);return e},HCb=function(a,b,c,d,e){var f,g;e=FCb(a,c,b,e);const h=e.Qh,k=e.EAa,l=e.Sra,m=e.uBa;c=__c.dT.ya(c);const n=(null===(f=(g=a.Vw).zxa)||void 0===f?void 0:f.call(g,d))||__c.sX;h.Jf===k&&GCb.structural(c,
l)&&n.mode===m||(e.Sra=c,e.EAa=h.Jf,e.uBa=n.mode,b=b.render(h,n),a.h0a.update(d,b),oCb(d,b,(p,q)=>a.UK.Uga.set(p,q),(p,q,r)=>a.UK.refs.set(p,{ref:q,key:r})))},JCb=function(a,b){return{yM:({zk:c})=>{var d;const {Qh:e}=FCb(a.renderer,c,b,a.HV),f=__c.hT.create([]),g=[];g.push(ICb(()=>{var k,l;return[null===(k=(l=a.Vw).zxa)||void 0===k?void 0:k.call(l,f),__c.dT.ya(c),e.Jf]},()=>{HCb(a.renderer,b,c,f,a.HV)},{fireImmediately:!0,equals:GCb.structural}));const h=null===(d=b.aW)||void 0===d?void 0:d.call(b,
{Qh:e});h&&g.push(h);return{eb:f,Cr:()=>{g.forEach(k=>k())}}}}},LCb=function(a,b){let c=a.c_.get(b);c||(c=KCb("weakKey"),a.c_.set(b,c));c.reportObserved()},Z6=__webpack_require__(42782),$6=Z6.LO,MCb=Z6.Fl,GCb=Z6.p6,ICb=Z6.U5,KCb=Z6.cp;var NCb=class{static A(a){__c.P(a,{y2a:$6.ref,aW:$6.ref})}constructor(){NCb.A(this)}};var OCb=class{constructor(){this.sources=new WeakMap}},ECb=class{static A(a){__c.P(a,{vl:MCb})}get jia(){var a=this.HV,b=this.zk,c=this.Iga;let d=a.sources.get(b);d||(d=$6.box(c),a.sources.set(b,d));return d}get Jf(){return this.jia.get()}get vl(){return this.tw.Xr({type:"dict",value:this.zk})}wm(a){a instanceof Function?this.jia.set(a(this.Jf)):this.jia.set(a)}constructor(a,b,c,d){ECb.A(this);this.tw=a;this.zk=b;this.HV=c;this.Iga=d}};var nCb=class{jZ(a,b){this.YEa(a,b);b.ref&&this.xla(a,b.ref,b.key)}W9(a,b){b.ref&&this.xla(a.text,b.ref,b.key)}ipa(a,b){switch(b.content.type){case "shape":z("shape"===a.element.type);this.jZ(a.element,b.content);break;case "text":z("text"===a.element.type);this.W9(a.element,b.content);break;case "layout":z("layout"===a.element.type);this.U9(a.element,b.content);break;default:throw new D(b.content);}}U9(a,b){this.YEa(a,b);b.ref&&this.xla(a,b.ref,b.key);for(const [c,d]of a.cells)a=b.cells.find(e=>
e.id===c),z(!!d&&!!a),this.ipa(d,a)}constructor(a,b){this.YEa=a;this.xla=b}};var R6={locked:!0,lp:{eda:!1,W8:!1},xi:!0},S6={top:0,left:0,width:1,height:1};var PCb=class{constructor(a){this.sm=a;this.update=(b,c)=>{Y6(b,[c],(d,e)=>{switch(d.type){case "layout":BCb(d,e);break;default:throw Error(`Not supported element type: ${d.type}`);}},d=>{a:switch(d.type){case "layout":d={...sCb(d),width:d.minWidth,height:d.minHeight,G:d.minWidth,W:d.minHeight,locked:!1,xi:!1,lp:void 0};break a;default:throw new D(d.type);}return d});for(const d of b)z("layout"===d.type),d.width=c.minWidth,d.height=c.minHeight,d.G=c.minWidth,d.W=c.minHeight,c.direction&&(d.direction=
c.direction),this.sm.vla(d)}}};var QCb=class{constructor(a,b,c){this.h0a=a;this.UK=b;this.Vw=c;this.fFa=new WeakMap}};var RCb=!1,SCb=class{register(a,b){this.CA.has(a)||(this.CA.set(a,b),RCb||(__c.gT.set(a,JCb(this,b)),RCb=!0))}get(a){return this.CA.get(a)}constructor(a,b,c){this.renderer=a;this.HV=b;this.Vw=c;this.CA=new Map}};var TCb=class{delete(a){var b;const c=this.map.delete(a);c&&(null===(b=this.c_.get(a))||void 0===b?void 0:b.reportChanged());return c}get(a){LCb(this,a);return this.map.get(a)}has(a){LCb(this,a);return this.map.has(a)}set(a,b){if(!this.map.has(a)||this.map.get(a)!==b){var c;this.map.set(a,b);null===(c=this.c_.get(a))||void 0===c?void 0:c.reportChanged()}return this}constructor(){this.c_=new WeakMap;this.map=new WeakMap}};var UCb=class{constructor(){this.Uga=new TCb;this.refs=new TCb}},VCb=class{getContext(a){return this.UK.refs.get(a)}iI(a){return this.UK.Uga.get(a)}constructor(a,b,c){this.UK=a;this.HV=b;this.renderer=c}};__c.hva={mYa:function(a){const b=new NCb;switch(a.tc){case "fixed":const c=new UCb;a=new QCb(new PCb(a.sm),c,b);const d=new OCb;return{Vw:b,ttb:new VCb(c,d,a),L9a:new SCb(a,d,b),UK:c};case "responsive":throw Error("Not implemented");default:throw new D(a);}}};
}).call(self, self._fe4d99ebe0d2d259646a80d250150d47);}

}])
//# sourceMappingURL=sourcemaps/87287e35fbe51fb2.js.map