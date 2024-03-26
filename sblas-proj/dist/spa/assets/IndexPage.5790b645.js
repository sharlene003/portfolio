import{e as we,p as qe,h as $,c as Q,v as Ee,f as Ie,k as I,i as Se,a as Ae,Q as Pe}from"./QBtn.9e2f3574.js";import{k as L,n as ke,q as Ce,t as ee,u as oe,y as ve,s as se,z as ae,r as le,c as m,w as z,g as R,h,Z as Te,d as $e,a0 as Xe,a1 as Ve,o as xe,a as be,H as fe,a2 as Ne,_ as K,G as Y,R as G,Q as t,K as s,J as a,T as re,V as ce,W as de,e as De,f as ne,a3 as ye,B as Me,M as ze,P as te}from"./index.cec7f6e5.js";import{g as pe,s as me,c as Qe,u as ue,a as he,b as C,Q as T}from"./selection.8606c061.js";function Be(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((c,d)=>{const l=parseFloat(c);l&&(n[d]=l)}),n}var We=we({name:"touch-swipe",beforeMount(e,{value:n,arg:c,modifiers:d}){if(d.mouse!==!0&&L.has.touch!==!0)return;const l=d.mouseCapture===!0?"Capture":"",o={handler:n,sensitivity:Be(c),direction:pe(d),noop:ke,mouseStart(r){me(r,o)&&Ce(r)&&(ee(o,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),o.start(r,!0))},touchStart(r){if(me(r,o)){const u=r.target;ee(o,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","notPassiveCapture"],[u,"touchend","end","notPassiveCapture"]]),o.start(r)}},start(r,u){L.is.firefox===!0&&oe(e,!0);const _=ve(r);o.event={x:_.left,y:_.top,time:Date.now(),mouse:u===!0,dir:!1}},move(r){if(o.event===void 0)return;if(o.event.dir!==!1){se(r);return}const u=Date.now()-o.event.time;if(u===0)return;const _=ve(r),g=_.left-o.event.x,v=Math.abs(g),q=_.top-o.event.y,x=Math.abs(q);if(o.event.mouse!==!0){if(v<o.sensitivity[1]&&x<o.sensitivity[1]){o.end(r);return}}else if(window.getSelection().toString()!==""){o.end(r);return}else if(v<o.sensitivity[2]&&x<o.sensitivity[2])return;const E=v/u,A=x/u;o.direction.vertical===!0&&v<x&&v<100&&A>o.sensitivity[0]&&(o.event.dir=q<0?"up":"down"),o.direction.horizontal===!0&&v>x&&x<100&&E>o.sensitivity[0]&&(o.event.dir=g<0?"left":"right"),o.direction.up===!0&&v<x&&q<0&&v<100&&A>o.sensitivity[0]&&(o.event.dir="up"),o.direction.down===!0&&v<x&&q>0&&v<100&&A>o.sensitivity[0]&&(o.event.dir="down"),o.direction.left===!0&&v>x&&g<0&&x<100&&E>o.sensitivity[0]&&(o.event.dir="left"),o.direction.right===!0&&v>x&&g>0&&x<100&&E>o.sensitivity[0]&&(o.event.dir="right"),o.event.dir!==!1?(se(r),o.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Qe(),o.styleCleanup=D=>{o.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};D===!0?setTimeout(P,50):P()}),o.handler({evt:r,touch:o.event.mouse!==!0,mouse:o.event.mouse,direction:o.event.dir,duration:u,distance:{x:v,y:x}})):o.end(r)},end(r){o.event!==void 0&&(ae(o,"temp"),L.is.firefox===!0&&oe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(!0),r!==void 0&&o.event.dir!==!1&&se(r),o.event=void 0)}};if(e.__qtouchswipe=o,d.mouse===!0){const r=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";ee(o,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}L.has.touch===!0&&ee(o,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const c=e.__qtouchswipe;c!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&c.end(),c.handler=n.value),c.direction=pe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(ae(n,"main"),ae(n,"temp"),L.is.firefox===!0&&oe(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function je(){const e=new Map;return{getCache:function(n,c){return e[n]===void 0?e[n]=c:e[n]},getCacheWithFn:function(n,c){return e[n]===void 0?e[n]=c():e[n]}}}const He={name:{required:!0},disable:Boolean},_e={setup(e,{slots:n}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},$(n.default))}},Oe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Le=["update:modelValue","beforeTransition","transition"];function Fe(){const{props:e,emit:n,proxy:c}=R(),{getCacheWithFn:d}=je();let l,o;const r=le(null),u=le(null);function _(i){const p=e.vertical===!0?"up":"left";k((c.$q.lang.rtl===!0?-1:1)*(i.direction===p?1:-1))}const g=m(()=>[[We,_,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),q=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),x=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),E=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),A=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),D=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);z(()=>e.modelValue,(i,p)=>{const S=X(i)===!0?j(i):-1;o!==!0&&M(S===-1?0:S<j(p)?-1:1),r.value!==S&&(r.value=S,n("beforeTransition",i,p),$e(()=>{n("transition",i,p)}))});function P(){k(1)}function U(){k(-1)}function W(i){n("update:modelValue",i)}function X(i){return i!=null&&i!==""}function j(i){return l.findIndex(p=>p.props.name===i&&p.props.disable!==""&&p.props.disable!==!0)}function Z(){return l.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function M(i){const p=i!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(i===-1?v.value:q.value):null;u.value!==p&&(u.value=p)}function k(i,p=r.value){let S=p+i;for(;S>-1&&S<l.length;){const N=l[S];if(N!==void 0&&N.props.disable!==""&&N.props.disable!==!0){M(i),o=!0,n("update:modelValue",N.props.name),setTimeout(()=>{o=!1});return}S+=i}e.infinite===!0&&l.length!==0&&p!==-1&&p!==l.length&&k(i,i===-1?l.length:-1)}function H(){const i=j(e.modelValue);return r.value!==i&&(r.value=i),!0}function J(){const i=X(e.modelValue)===!0&&H()&&l[r.value];return e.keepAlive===!0?[h(Xe,A.value,[h(D.value===!0?d(E.value,()=>({..._e,name:E.value})):_e,{key:E.value,style:x.value},()=>i)])]:[h("div",{class:"q-panel scroll",style:x.value,key:E.value,role:"tabpanel"},[i])]}function b(){if(l.length!==0)return e.animated===!0?[h(Te,{name:u.value},J)]:J()}function V(i){return l=qe($(i.default,[])).filter(p=>p.props!==null&&p.props.slot===void 0&&X(p.props.name)===!0),l.length}function O(){return l}return Object.assign(c,{next:P,previous:U,goTo:W}),{panelIndex:r,panelDirectives:g,updatePanelsList:V,updatePanelIndex:H,getPanelContent:b,getEnabledPanels:Z,getPanels:O,isValidPanelName:X,keepAliveProps:A,needsUniqueKeepAliveWrapper:D,goToPanelByOffset:k,goToPanel:W,nextPanel:P,previousPanel:U}}var ge=Q({name:"QCarouselSlide",props:{...He,imgSrc:String},setup(e,{slots:n}){const c=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:c.value},$(n.default))}});let F=0;const Re={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ke=["update:fullscreen","fullscreen"];function Ye(){const e=R(),{props:n,emit:c,proxy:d}=e;let l,o,r;const u=le(!1);Ee(e)===!0&&z(()=>d.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&v()}),z(()=>n.fullscreen,q=>{u.value!==q&&_()}),z(u,q=>{c("update:fullscreen",q),c("fullscreen",q)});function _(){u.value===!0?v():g()}function g(){u.value!==!0&&(u.value=!0,r=d.$el.parentNode,r.replaceChild(o,d.$el),document.body.appendChild(d.$el),F++,F===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:v},fe.add(l))}function v(){u.value===!0&&(l!==void 0&&(fe.remove(l),l=void 0),r.replaceChild(d.$el,o),u.value=!1,F=Math.max(0,F-1),F===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Ve(()=>{o=document.createElement("span")}),xe(()=>{n.fullscreen===!0&&g()}),be(v),Object.assign(d,{toggleFullscreen:_,setFullscreen:g,exitFullscreen:v}),{inFullscreen:u,toggleFullscreen:_}}const Ge=["top","right","bottom","left"],Ue=["regular","flat","outline","push","unelevated"];var Ze=Q({name:"QCarousel",props:{...ue,...Oe,...Re,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ue.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ge.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ke,...Le],setup(e,{slots:n}){const{proxy:{$q:c}}=R(),d=he(e,c);let l=null,o;const{updatePanelsList:r,getPanelContent:u,panelDirectives:_,goToPanel:g,previousPanel:v,nextPanel:q,getEnabledPanels:x,panelIndex:E}=Fe(),{inFullscreen:A}=Ye(),D=m(()=>A.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=m(()=>e.vertical===!0?"vertical":"horizontal"),U=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(A.value===!0?" fullscreen":"")+(d.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Z.value}`:"")),W=m(()=>{const b=[e.prevIcon||c.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||c.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&c.lang.rtl===!0?b.reverse():b}),X=m(()=>e.navigationIcon||c.iconSet.carousel.navigationIcon),j=m(()=>e.navigationActiveIcon||X.value),Z=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),M=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));z(()=>e.modelValue,()=>{e.autoplay&&k()}),z(()=>e.autoplay,b=>{b?k():l!==null&&(clearTimeout(l),l=null)});function k(){const b=Ne(e.autoplay)===!0?Math.abs(e.autoplay):5e3;l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,b>=0?q():v()},b)}xe(()=>{e.autoplay&&k()}),be(()=>{l!==null&&clearTimeout(l)});function H(b,V){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${b} q-carousel__navigation--${Z.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},x().map(V))])}function J(){const b=[];if(e.navigation===!0){const V=n["navigation-icon"]!==void 0?n["navigation-icon"]:i=>h(I,{key:"nav"+i.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${i.active===!0?"":"in"}active`,...i.btnProps,onClick:i.onClick}),O=o-1;b.push(H("buttons",(i,p)=>{const S=i.props.name,N=E.value===p;return V({index:p,maxIndex:O,name:S,active:N,btnProps:{icon:N===!0?j.value:X.value,size:"sm",...M.value},onClick:()=>{g(S)}})}))}else if(e.thumbnails===!0){const V=e.controlColor!==void 0?` text-${e.controlColor}`:"";b.push(H("thumbnails",O=>{const i=O.props;return h("img",{key:"tmb#"+i.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${i.name===e.modelValue?"":"in"}active`+V,src:i.imgSrc||i["img-src"],onClick:()=>{g(i.name)}})}))}return e.arrows===!0&&E.value>=0&&((e.infinite===!0||E.value>0)&&b.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[h(I,{icon:W.value[0],...M.value,onClick:v})])),(e.infinite===!0||E.value<o-1)&&b.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[h(I,{icon:W.value[1],...M.value,onClick:q})]))),Se(n.control,b)}return()=>(o=r(n),h("div",{class:U.value,style:D.value},[Ie("div",{class:"q-carousel__slides-container"},u(),"sl-cont",e.swipeable,()=>_.value)].concat(J())))}}),y=Q({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const c=m(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(e.tag,{class:c.value},$(n.default))}}),w=Q({name:"QCard",props:{...ue,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:c}}=R(),d=he(e,c),l=m(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:l.value},$(n.default))}});const Je={},f=e=>(ce("data-v-6b56061a"),e=e(),de(),e),et=f(()=>t("div",{class:"text-weight-bold text-h5 text-primary q-mb-xl"}," HERE ARE SOME OF MY EXPERTISE ",-1)),tt={class:"row q-pt-xl"},ot={class:"col q-pa-md col-xs-12 col-md-3 box"},st=f(()=>t("img",{src:"https://static-00.iconduck.com/assets.00/vue-js-icon-256x221-i3um1pw0.png"},null,-1)),at=f(()=>t("div",{class:"row no-wrap items-center q-pt-xl"},[t("div",{class:"col text-h6 ellipsis text-center text-white"},"VueJS"),t("div",{class:"col-auto text-white text-caption q-pt-md row no-wrap items-center"})],-1)),nt=f(()=>t("div",{class:"text-caption text-white"}," is a library for building interactive web interfaces. The goal of Vue. js is to provide the benefits of reactive data binding and composable view components with an API that is as simple as possible. ",-1)),it={class:"col q-pa-md col-xs-12 col-md-3 box"},lt=f(()=>t("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png"},null,-1)),rt=f(()=>t("div",{class:"row no-wrap items-center q-pt-xl"},[t("div",{class:"col text-h6 ellipsis text-center text-white"}," NuxtJS "),t("div",{class:"col-auto text-white text-caption q-pt-md row no-wrap items-center"})],-1)),ct=f(()=>t("div",{class:"text-caption text-white"}," is a very popular SSR and statically generated frontend Vue framework. It doesn't only solve the problem of configuring and setting up SSR in Vue applications ",-1)),dt={class:"col q-pa-md col-xs-12 col-md-3 box"},ut=f(()=>t("img",{src:"https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png"},null,-1)),ht=f(()=>t("div",{class:"row no-wrap items-center q-pt-xl"},[t("div",{class:"col text-h6 ellipsis text-center text-white"}," Vuetify "),t("div",{class:"col-auto text-white text-caption q-pt-md row no-wrap items-center"})],-1)),vt=f(()=>t("div",{class:"text-caption text-white"}," is a collection of pre-made components paired with powerful features such dynamic themes , global defaults , application layouts , and more. ",-1)),ft={class:"col q-pa-md col-xs-12 col-md-3 box"},pt=f(()=>t("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo.svg"},null,-1)),mt=f(()=>t("div",{class:"row no-wrap items-center q-pt-xl"},[t("div",{class:"col text-h6 ellipsis text-center text-white"}," Quasar "),t("div",{class:"col-auto text-white text-caption q-pt-md row no-wrap items-center"})],-1)),_t=f(()=>t("div",{class:"text-caption text-white"}," is a popular open-source framework for building high-performance web apps and mobile applications using a single codebase. It is built on top of Vue. js, a progressive JavaScript framework, and provides a comprehensive set of tools and components for creating modern and responsive applications. ",-1)),gt={class:"row q-pt-xl"},xt={class:"col q-pa-md col-xs-12 col-md-3 box"},bt=f(()=>t("img",{src:"https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg"},null,-1)),yt=f(()=>t("div",{class:"row no-wrap items-center q-pt-xl"},[t("div",{class:"col text-h6 ellipsis text-center text-white"}," JavaScript "),t("div",{class:"col-auto text-white text-caption q-pt-md row no-wrap items-center"})],-1)),wt=f(()=>t("div",{class:"text-caption text-white"}," is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. ",-1)),qt={class:"col q-pa-md col-xs-12 col-md-3 box"},Et=f(()=>t("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"},null,-1)),It=f(()=>t("div",{class:"row no-wrap items-center q-pt-xl"},[t("div",{class:"col text-h6 ellipsis text-center text-white"},"HTML"),t("div",{class:"col-auto text-white text-caption q-pt-md row no-wrap items-center"})],-1)),St=f(()=>t("div",{class:"text-caption text-white"}," is the most basic building block of the Web. It defines the meaning and structure of web content. ",-1)),At={class:"col q-pa-md col-xs-12 col-md-3 box"},Pt=f(()=>t("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"},null,-1)),kt=f(()=>t("div",{class:"row no-wrap items-center q-pt-xl"},[t("div",{class:"col text-h6 ellipsis text-center text-white"},"CSS"),t("div",{class:"col-auto text-white text-caption q-pt-md row no-wrap items-center"})],-1)),Ct=f(()=>t("div",{class:"text-caption text-white"}," describes how HTML elements are to be displayed on screen, paper, or in other media. ",-1)),Tt={class:"col q-pa-md col-xs-12 col-md-3 box"},$t=f(()=>t("img",{src:"https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png"},null,-1)),Xt=f(()=>t("div",{class:"row no-wrap items-center q-pt-xl"},[t("div",{class:"col text-h6 ellipsis text-center text-white"}," Bootstrap "),t("div",{class:"col-auto text-white text-caption q-pt-md row no-wrap items-center"})],-1)),Vt=f(()=>t("div",{class:"text-caption text-white"}," is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs. ",-1));function Nt(e,n){return Y(),G(re,null,[et,t("div",tt,[t("div",ot,[s(w,{class:"my-card bg-color",style:{height:"260px"}},{default:a(()=>[s(y,null,{default:a(()=>[s(I,{round:"",style:{background:"#8c9a7c",top:"0",right:"35%",transform:"translateY(-50%)"},size:"30px",class:"absolute"},{default:a(()=>[s(C,{style:{"border-radius":"unset"}},{default:a(()=>[st]),_:1})]),_:1}),at]),_:1}),s(y,{class:"q-pt-none"},{default:a(()=>[nt]),_:1})]),_:1})]),t("div",it,[s(w,{class:"my-card bg-color",style:{height:"260px"}},{default:a(()=>[s(y,null,{default:a(()=>[s(I,{round:"",style:{background:"#ede6cf",top:"0",right:"35%",transform:"translateY(-50%)"},size:"30px",class:"absolute"},{default:a(()=>[s(C,{style:{"border-radius":"unset"}},{default:a(()=>[lt]),_:1})]),_:1}),rt]),_:1}),s(y,{class:"q-pt-none"},{default:a(()=>[ct]),_:1})]),_:1})]),t("div",dt,[s(w,{class:"my-card bg-color",style:{height:"260px"}},{default:a(()=>[s(y,null,{default:a(()=>[s(I,{round:"",style:{background:"#97bc82",top:"0",right:"35%",transform:"translateY(-50%)"},size:"30px",class:"absolute"},{default:a(()=>[s(C,{style:{"border-radius":"unset"}},{default:a(()=>[ut]),_:1})]),_:1}),ht]),_:1}),s(y,{class:"q-pt-none"},{default:a(()=>[vt]),_:1})]),_:1})]),t("div",ft,[s(w,{class:"my-card bg-color",style:{height:"260px"}},{default:a(()=>[s(y,null,{default:a(()=>[s(I,{round:"",style:{background:"#749679",top:"0",right:"35%",transform:"translateY(-50%)"},size:"30px",class:"absolute"},{default:a(()=>[s(C,{style:{"border-radius":"unset"}},{default:a(()=>[pt]),_:1})]),_:1}),mt]),_:1}),s(y,{class:"q-pt-none"},{default:a(()=>[_t]),_:1})]),_:1})])]),t("div",gt,[t("div",xt,[s(w,{class:"my-card bg-color",style:{height:"260px"}},{default:a(()=>[s(y,null,{default:a(()=>[s(I,{round:"",style:{background:"#eebcbc",top:"0",right:"35%",transform:"translateY(-50%)"},size:"30px",class:"absolute"},{default:a(()=>[s(C,{style:{"border-radius":"unset"}},{default:a(()=>[bt]),_:1})]),_:1}),yt]),_:1}),s(y,{class:"q-pt-none"},{default:a(()=>[wt]),_:1})]),_:1})]),t("div",qt,[s(w,{class:"my-card bg-color",style:{height:"260px"}},{default:a(()=>[s(y,null,{default:a(()=>[s(I,{round:"",style:{background:"#eedeab",top:"0",right:"35%",transform:"translateY(-50%)"},size:"30px",class:"absolute"},{default:a(()=>[s(C,{style:{"border-radius":"unset"}},{default:a(()=>[Et]),_:1})]),_:1}),It]),_:1}),s(y,{class:"q-pt-none"},{default:a(()=>[St]),_:1})]),_:1})]),t("div",At,[s(w,{class:"my-card bg-color",style:{height:"260px"}},{default:a(()=>[s(y,null,{default:a(()=>[s(I,{round:"",style:{background:"#c8ecb5",top:"0",right:"35%",transform:"translateY(-50%)"},size:"30px",class:"absolute"},{default:a(()=>[s(C,{style:{"border-radius":"unset"}},{default:a(()=>[Pt]),_:1})]),_:1}),kt]),_:1}),s(y,{class:"q-pt-none"},{default:a(()=>[Ct]),_:1})]),_:1})]),t("div",Tt,[s(w,{class:"my-card bg-color",style:{height:"260px"}},{default:a(()=>[s(y,null,{default:a(()=>[s(I,{round:"",style:{background:"#bcc2f2",top:"0",right:"35%",transform:"translateY(-50%)"},size:"30px",class:"absolute"},{default:a(()=>[s(C,{style:{"border-radius":"unset"}},{default:a(()=>[$t]),_:1})]),_:1}),Xt]),_:1}),s(y,{class:"q-pt-none"},{default:a(()=>[Vt]),_:1})]),_:1})])])],64)}var Dt=K(Je,[["render",Nt],["__scopeId","data-v-6b56061a"]]),ie=Q({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:n}){const c=De(ye,ne);if(c===ne)return console.error("QTimelineEntry needs to be child of QTimeline"),ne;const d=m(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),l=m(()=>`q-timeline__dot text-${e.color||c.color}`),o=m(()=>c.layout==="comfortable"&&c.side==="left");return()=>{const r=Ae(n.default,[]);if(e.body!==void 0&&r.unshift(e.body),e.heading===!0){const g=[h("div"),h("div"),h(e.tag,{class:"q-timeline__heading-title"},r)];return h("div",{class:"q-timeline__heading"},o.value===!0?g.reverse():g)}let u;e.icon!==void 0?u=[h(Pe,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(u=[h("img",{class:"q-timeline__dot-img",src:e.avatar})]);const _=[h("div",{class:"q-timeline__subtitle"},[h("span",{},$(n.subtitle,[e.subtitle]))]),h("div",{class:l.value},u),h("div",{class:"q-timeline__content"},[h("h6",{class:"q-timeline__title"},$(n.title,[e.title]))].concat(r))];return h("li",{class:d.value},o.value===!0?_.reverse():_)}}}),Mt=Q({name:"QTimeline",props:{...ue,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:n}){const c=R(),d=he(e,c.proxy.$q);Me(ye,e);const l=m(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(d.value===!0?" q-timeline--dark":""));return()=>h("ul",{class:l.value},$(n.default))}});const zt={setup(){return{position1:"Software Engineer",position2:"Frontend Web Developer",position3:"Fullstack Web Developer"}}},Qt=e=>(ce("data-v-1e18c34c"),e=e(),de(),e),Bt=Qt(()=>t("div",{class:"text-weight-bold text-h5 text-primary q-mb-xl"}," WORK EXPERIENCE ",-1)),Wt={class:"q-px-lg q-py-md"};function jt(e,n,c,d,l,o){return Y(),G(re,null,[Bt,t("div",Wt,[s(Mt,{color:"secondary"},{default:a(()=>[s(ie,{title:"Yondu Inc.",subtitle:"November 2020 - Present",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",body:d.position1},null,8,["body"]),s(ie,{title:"BigDish Plc.",subtitle:"February 2020 to November 2020",icon:"apartment",body:d.position2},null,8,["body"]),s(ie,{title:"Infotouch Inc.",subtitle:"June 2018 - October 2019",icon:"apartment",body:d.position3},null,8,["body"])]),_:1})])],64)}var Ht=K(zt,[["render",jt],["__scopeId","data-v-1e18c34c"]]);const Ot={},Lt={class:""},Ft=t("div",{class:"text-weight-bold text-h5 text-primary q-mb-xl"},"ABOUT ME",-1),Rt=t("div",{class:""},[t("span",{class:"text-weight-bold text-subtitle1"},"Hi I'm Sharlene"),t("span",{class:"text-h4 text-weight-thin"}),ze(" frontend web developer for 5 years focusing in VueJS using component base project for clean and reusable codes with experience in various types of project. ")],-1),Kt=[Ft,Rt];function Yt(e,n){return Y(),G("div",Lt,Kt)}var Gt=K(Ot,[["render",Yt]]),Ut="/assets/bsp_logo.9d2d0fc9.jpg",Zt="/assets/maynilad_logo.33c310a5.png",Jt="/assets/s&r_logo.404b8efd.jpg",eo="/assets/pitmasters_logo.f90c2763.jpg",to="/assets/yondu_logo.10f2e587.jpg",oo="/assets/bench_logo.5dad180a.png",so="data:image/png;base64,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",ao="/assets/bigdish_logo.69911c71.png";const no={},io=t("div",{class:"text-weight-bold text-h5 text-primary q-mb-xl"}," Recent Projects ",-1),lo={class:"row q-pt-xl animate-slide-left"},ro={class:"col q-pa-md col-xs-12 col-md-3"},co=t("div",{class:"absolute-bottom text-subtitle2 text-center"},"BSP",-1),uo={class:"col q-pa-md col-xs-12 col-md-3"},ho=t("div",{class:"absolute-bottom text-subtitle2 text-center"},"MAYNILAD",-1),vo={class:"col q-pa-md col-xs-12 col-md-3"},fo=t("div",{class:"absolute-bottom text-subtitle2 text-center"},"S&R",-1),po={class:"col q-pa-md col-xs-12 col-md-3"},mo=t("div",{class:"absolute-bottom text-subtitle2 text-center"}," PITMASTERS ",-1),_o={class:"row q-pt-xl animate-slide-right"},go={class:"col q-pa-md col-xs-12 col-md-3"},xo=t("div",{class:"absolute-bottom text-subtitle2 text-center"},"YONDU",-1),bo={class:"col q-pa-md col-xs-12 col-md-3"},yo=t("div",{class:"absolute-bottom text-subtitle2 text-center"},"BENCH",-1),wo={class:"col q-pa-md col-xs-12 col-md-3"},qo=t("div",{class:"absolute-bottom text-subtitle2 text-center"},"VIVO",-1),Eo={class:"col q-pa-md col-xs-12 col-md-3"},Io=t("div",{class:"absolute-bottom text-subtitle2 text-center"},"BIGDISH",-1);function So(e,n){return Y(),G(re,null,[io,t("div",lo,[t("div",ro,[s(w,{class:"my-card"},{default:a(()=>[s(T,{height:"230px",src:Ut},{default:a(()=>[co]),_:1})]),_:1})]),t("div",uo,[s(w,{class:"my-card"},{default:a(()=>[s(T,{height:"230px",src:Zt},{default:a(()=>[ho]),_:1})]),_:1})]),t("div",vo,[s(w,{class:"my-card"},{default:a(()=>[s(T,{height:"230px",src:Jt},{default:a(()=>[fo]),_:1})]),_:1})]),t("div",po,[s(w,{class:"my-card"},{default:a(()=>[s(T,{height:"230px",src:eo},{default:a(()=>[mo]),_:1})]),_:1})])]),t("div",_o,[t("div",go,[s(w,{class:"my-card"},{default:a(()=>[s(T,{height:"230px",src:to},{default:a(()=>[xo]),_:1})]),_:1})]),t("div",bo,[s(w,{class:"my-card"},{default:a(()=>[s(T,{height:"230px",src:oo},{default:a(()=>[yo]),_:1})]),_:1})]),t("div",wo,[s(w,{class:"my-card"},{default:a(()=>[s(T,{height:"230px",src:so},{default:a(()=>[qo]),_:1})]),_:1})]),t("div",Eo,[s(w,{class:"my-card"},{default:a(()=>[s(T,{height:"230px",src:ao},{default:a(()=>[Io]),_:1})]),_:1})])])],64)}var Ao=K(no,[["render",So]]);const Po={components:{ExpertiseSection:Dt,ExperienceSection:Ht,AboutSection:Gt,RecentWorkSection:Ao},data(){return{slide:"style",pdf:"../assets/sblas.pdf"}}},B=e=>(ce("data-v-3aa5e4f8"),e=e(),de(),e),ko={class:"q-pa-md"},Co={id:"content1"},To={class:"column",style:{height:"150px"}},$o={class:"col-4 col-md-6"},Xo={class:"offset-header"},Vo={class:"hero-header"},No=B(()=>t("span",{class:"offset-header"},[t("span",null,"Hi !")],-1)),Do=B(()=>t("span",{class:"offset-header"},[t("span",null,"I'm Sharlene")],-1)),Mo={href:"../../src/assets/cv/sblas.pdf",download:"sblas_CV",target:"_blank"},zo={class:"offset-header"},Qo={class:"column",style:{height:"150px"}},Bo={class:"col-4 col-md-6"},Wo={class:"offset-header"},jo={class:"hero-header"},Ho=B(()=>t("span",{class:"offset-header text-white"},[t("span",{class:"text-weight-thin"},"I am a")],-1)),Oo=B(()=>t("span",{class:"offset-header text-white"},[t("span",{class:"text-weight-thin"},"Web Developer")],-1)),Lo=B(()=>t("span",{class:"offset-header"},[t("span",{class:"text-subtitle2 text-white"},"100% Quasar Framework Made by sblas.com")],-1)),Fo={href:"../../src/assets/cv/sblas.pdf",download:"sblas_CV",target:"_blank"},Ro={class:"offset-header"},Ko={id:"content2",class:"q-mt-xl"},Yo={id:"content3",class:"q-mt-xl"},Go={id:"content5",class:"q-mt-xl"},Uo={id:"content4",class:"q-mt-xl"},Zo=B(()=>t("div",{class:"q-mt-xl"},[t("div",{class:"q-mt-xl"})],-1));function Jo(e,n,c,d,l,o){const r=te("AboutSection"),u=te("ExpertiseSection"),_=te("RecentWorkSection"),g=te("ExperienceSection");return Y(),G("div",ko,[t("div",Co,[s(Ze,{modelValue:l.slide,"onUpdate:modelValue":n[0]||(n[0]=v=>l.slide=v),vertical:"","transition-prev":"slide-down","transition-next":"slide-up",swipeable:"",autoplay:"",animated:"","control-color":"primary","control-type":"flat","navigation-icon":"radio_button_unchecked",navigation:"",padding:"",height:"500px",class:"text-white shadow-1 rounded-borders"},{default:a(()=>[s(ge,{name:"style",class:"bg bg1 column no-wrap flex-center"},{default:a(()=>[t("div",To,[t("div",$o,[t("div",Xo,[t("h1",Vo,[No,Do,t("a",Mo,[t("span",zo,[s(I,{color:"grey-4","text-color":"primary",glossy:"",unelevated:"",icon:"download",label:"DOWNLOAD CV"})])])])])])])]),_:1}),s(ge,{name:"tv",class:"bg bg2 column no-wrap flex-center"},{default:a(()=>[t("div",Qo,[t("div",Bo,[t("div",Wo,[t("h1",jo,[Ho,Oo,Lo,t("a",Fo,[t("span",Ro,[s(I,{color:"grey-4","text-color":"primary",glossy:"",unelevated:"",icon:"download",label:"DOWNLOAD CV"})])])])])])])]),_:1})]),_:1},8,["modelValue"])]),t("div",Ko,[s(r)]),t("div",Yo,[s(u)]),t("div",Go,[s(_)]),t("div",Uo,[s(g)]),Zo])}var ss=K(Po,[["render",Jo],["__scopeId","data-v-3aa5e4f8"]]);export{ss as default};
