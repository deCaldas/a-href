(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4650)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,n=i(2648).Z,a=i(1598).Z,o=i(7273).Z,l=a(i(7294)),s=n(i(2636)),c=i(7757),d=i(3735),u=i(3341);i(4210);var h=n(i(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,n,a,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}function x(e){let[t,i]=l.version.split("."),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let y=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:n,widthInt:a,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:h,fetchPriority:f,fill:p,placeholder:g,loading:y,srcString:v,config:b,unoptimized:j,loader:w,onLoadRef:_,onLoadingCompleteRef:S,setBlurComplete:C,setShowAltText:E,onLoad:A,onError:k}=e,z=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return y=h?"lazy":y,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,x(f),{loading:y,width:a,height:n,decoding:"async","data-nimg":p?"fill":"1",className:c,style:r({},d,u)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,v,g,_,S,C,j))},[v,g,_,S,C,k,j,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,g,_,S,C,j)},onError:e=>{E(!0),"blur"===g&&C(!0),k&&k(e)}})))}),v=l.forwardRef((e,t)=>{let i,n;var a,{src:m,sizes:v,unoptimized:b=!1,priority:j=!1,loading:w,className:_,quality:S,width:C,height:E,fill:A,style:k,onLoad:z,onLoadingComplete:L,placeholder:I="empty",blurDataURL:P,fetchPriority:R,layout:O,objectFit:N,objectPosition:M,lazyBoundary:T,lazyRoot:D}=e,F=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let G=l.useContext(u.ImageConfigContext),W=l.useMemo(()=>{let e=f||G||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[G]),B=F,X=B.loader||h.default;delete B.loader;let Z="__next_img_default"in X;if(Z){if("custom"===W.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=X;X=t=>{let{config:i}=t,r=o(t,["config"]);return e(r)}}if(O){"fill"===O&&(A=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(k=r({},k,e));let t={responsive:"100vw",fill:"100vw"}[O];t&&!v&&(v=t)}let H="",q=g(C),V=g(E);if("object"==typeof(a=m)&&(p(a)||void 0!==a.src)){let e=p(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,n=e.blurHeight,P=P||e.blurDataURL,H=e.src,!A){if(q||V){if(q&&!V){let t=q/e.width;V=Math.round(e.height*t)}else if(!q&&V){let t=V/e.height;q=Math.round(e.width*t)}}else q=e.width,V=e.height}}let J=!j&&("lazy"===w||void 0===w);(!(m="string"==typeof m?m:H)||m.startsWith("data:")||m.startsWith("blob:"))&&(b=!0,J=!1),W.unoptimized&&(b=!0),Z&&m.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(b=!0),j&&(R="high");let[U,Y]=l.useState(!1),[$,K]=l.useState(!1),Q=g(S),ee=Object.assign(A?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:M}:{},$?{}:{color:"transparent"},k),et="blur"===I&&P&&!U?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:V,blurWidth:i,blurHeight:n,blurDataURL:P,objectFit:ee.objectFit}),'")')}:{},ei=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:a,sizes:o,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:a,kind:"x"}}(t,n,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:i,quality:a,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:i,quality:a,width:s[d]})}}({config:W,src:m,unoptimized:b,width:q,quality:Q,sizes:v,loader:X}),er=m,en=l.useRef(z);l.useEffect(()=>{en.current=z},[z]);let ea=l.useRef(L);l.useEffect(()=>{ea.current=L},[L]);let eo=r({isLazy:J,imgAttributes:ei,heightInt:V,widthInt:q,qualityInt:Q,className:_,imgStyle:ee,blurStyle:et,loading:w,config:W,fetchPriority:R,fill:A,unoptimized:b,placeholder:I,loader:X,srcString:er,onLoadRef:en,onLoadingCompleteRef:ea,setBlurComplete:Y,setShowAltText:K},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(y,Object.assign({},eo,{ref:t})),j?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src,imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:B.crossOrigin},x(R)))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:a,objectFit:o}=e,l=r||t,s=n||i,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},4650:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return X},default:function(){return Z}});var r=i(5893),n=i(4579),a=i(6979),o=i(3100),l=i(2498),s=i(4418),c=i(3838),d=i(6877),u=i(5227),h=i(2495),f=i(5059),p=i(4662),g=i(3179),[m,x]=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),y=(0,f.G)(function(e,t){let i=(0,p.jC)("List",e),{children:a,styleType:o="none",stylePosition:l,spacing:s,...c}=(0,g.Lr)(e),d=(0,h.W)(a);return(0,r.jsx)(m,{value:i,children:(0,r.jsx)(n.m.ul,{ref:t,listStyleType:o,listStylePosition:l,role:"list",__css:{...i.container,...s?{"& > *:not(style) ~ *:not(style)":{mt:s}}:{}},...c,children:d})})});y.displayName="List",(0,f.G)((e,t)=>{let{as:i,...n}=e;return(0,r.jsx)(y,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...n})}).displayName="OrderedList",(0,f.G)(function(e,t){let{as:i,...n}=e;return(0,r.jsx)(y,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...n})}).displayName="UnorderedList";var v=(0,f.G)(function(e,t){let i=x();return(0,r.jsx)(n.m.li,{ref:t,...e,__css:i.item})});v.displayName="ListItem",(0,f.G)(function(e,t){let i=x();return(0,r.jsx)(d.J,{ref:t,role:"presentation",...e,__css:i.icon})}).displayName="ListIcon";var b=i(9222),j=(0,i(78).I)({displayName:"EmailIcon",path:(0,r.jsxs)("g",{fill:"currentColor",children:[(0,r.jsx)("path",{d:"M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"}),(0,r.jsx)("path",{d:"M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"})]})});function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=i(6829);function S(){let e=w(["\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n"]);return S=function(){return e},e}let C=_.Z.p(S());function E(){let e=w(["\n  padding-left: 3.4em;\n  text-indent: -3.4em;\n"]);return E=function(){return e},e}function A(){let e=w(["\n  font-weight: bold;\n  margin-right: 1em;\n"]);return A=function(){return e},e}let k=(0,_.Z)(o.xu)(E()),z=_.Z.span(A());var L=i(1615),I=i(9008),P=i.n(I);let R={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},O=e=>{let{children:t,title:i}=e,n="".concat(i," - Diego Toro");return(0,r.jsx)(L.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:R,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsxs)(P(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"og:title",content:n})]}),t]})})};var N=i(4920);let M=(0,n.m)(L.E.div,{shouldForwardProp:e=>(0,N.x)(e)||"transition"===e}),T=e=>{let{children:t,delay:i=0}=e;return(0,r.jsx)(M,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:i},mb:6,children:t})};var D=i(2370),F=i(5675),G=i.n(F);let W=(0,n.m)(G(),{shouldForwardProp:e=>["width","height","src","alt"].includes(e)}),B=()=>(0,r.jsx)(O,{children:(0,r.jsxs)(a.W,{children:[(0,r.jsx)(o.xu,{borderRadius:"lg",mb:6,p:3,textAlign:"center",bg:(0,l.ff)("whiteAlpha.500","whiteAlpha.200"),css:{backdropFilter:"blur(10px)"},children:"Hi there!! Over here exist a web developer living in Colombia."}),(0,r.jsxs)(o.xu,{display:{md:"flex"},children:[(0,r.jsxs)(o.xu,{flexGrow:1,children:[(0,r.jsx)(s.X,{as:"h2",variant:"page-title",children:"Diego Toro C\xe1rdenas"}),(0,r.jsx)(C,{children:"Entrepreneurship"}),(0,r.jsx)(s.X,{as:"h6",variant:"caption",children:"[Artist | Researcher | Developer]"})]}),(0,r.jsx)(o.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},textAlign:"center",children:(0,r.jsx)(o.xu,{borderColor:(0,l.ff)("blackAlpha.900","whiteAlpha.900"),borderWidth:2,borderStyle:"solid",w:"auto",h:"auto",display:"inline-block",borderRadius:"full",overflow:"hidden",children:(0,r.jsx)(W,{src:"https://pbs.twimg.com/profile_images/1429605838419865602/v5TyrAVL_400x400.jpg",alt:"Profile image",borderRadius:"full",width:"100",height:"100"})})})]}),(0,r.jsxs)(T,{delay:.1,children:[(0,r.jsx)(s.X,{as:"h3",variant:"section-title",children:"Work"}),(0,r.jsx)(C,{children:"Diego is a JavaScript full-stack web developer based in Envigado with passion for the computing science. He is actually a beginner, however, he works with too much dedication to become a great developer. When he's not online, he loves to record your voice into the microphone."})]}),(0,r.jsxs)(T,{delay:.2,children:[(0,r.jsx)(s.X,{as:"h3",variant:"section-title",children:"Bio"}),(0,r.jsxs)(k,{children:[(0,r.jsx)(z,{children:"1984"}),"Born in Antioquia. Colombia."]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(z,{children:"2011"}),"He completed the Research Seed Program at the Furniture Technology Center. SENA Calatrava Itag\xfc\xed Antioquia Colombia."]}),(0,r.jsxs)(k,{children:[(0,r.jsx)(z,{children:"2023"}),"Today debuting in the digital world..."]})]}),(0,r.jsxs)(T,{delay:.3,children:[(0,r.jsx)(s.X,{as:"h3",variant:"section-title",children:"\uD83D\uDC98"}),(0,r.jsxs)(C,{children:[" ",(0,r.jsx)(c.r,{href:"https://hiphopaite.blogspot.com/",target:"_blank",children:"Hip Hop Art & Rap Music (LatAm)"})]})]}),(0,r.jsxs)(T,{delay:.3,children:[(0,r.jsx)(s.X,{as:"h3",variant:"section-title",children:"Follow me on Twitter"}),(0,r.jsx)(y,{children:(0,r.jsx)(v,{children:(0,r.jsx)(c.r,{href:"https://twitter.com/d_caldasCaridad",target:"_blank",children:(0,r.jsx)(b.z,{variant:"ghost",colorScheme:"teal",leftIcon:(0,r.jsx)(D.JUd,{}),children:"@d_caldasCaridad (LatAm)"})})})}),(0,r.jsx)(s.X,{as:"h3",variant:"section-title",children:"Contact me"}),(0,r.jsx)(o.xu,{align:"lefht",my:4,children:(0,r.jsx)(b.z,{rightIcon:(0,r.jsx)(j,{}),colorScheme:"teal",onClick:()=>alert("Say hello in the email inbox d.caldascaridad@gmail.com"),children:"Mailbox"})})]})]})});var X=!0,Z=B},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);