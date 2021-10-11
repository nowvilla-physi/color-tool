(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[0],{130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(7),l=a.n(n),o=(a(46),a(12)),s=(a(51),a(52),"Web Design Palette"),i="\u80cc\u666f\u8272\u304c\u88dc\u8272\u3067\u3059\uff01\uff01\uff01",h=a.p+"static/media/logo.25a25603.svg",b=a(2),d=function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{className:"header__logo",children:Object(b.jsx)("img",{className:"header__img",src:h,alt:s})}),Object(b.jsx)("p",{className:"header__title",children:s})]})},j=(a(54),a(55),a(56),function(e){var t=e.color,a=e.height,c={height:"".concat(a,"px"),backgroundColor:"#".concat(t)};return Object(b.jsx)("div",{className:"base-color",style:c})}),u=(a(57),function(e){var t=e.hex,a=e.complementaryColor,c={area:{background:"#".concat(a)},font:{color:"#".concat(t)}};return Object(b.jsxs)("div",{className:"complementary-color-area",style:c.area,children:[Object(b.jsx)("p",{className:"complementary-color-area__description",style:c.font,children:i}),Object(b.jsx)("p",{className:"complementary-color-area__description",style:c.font,children:i}),Object(b.jsx)("p",{className:"complementary-color-area__description",style:c.font,children:i})]})}),p=(a(58),function(e){var t=e.hex,a=e.isReadOnly,c=e.handleChange;return Object(b.jsxs)("div",{className:"hex-text-field",children:[Object(b.jsx)("label",{className:"hex-text-field__label",htmlFor:"hex",children:"#"}),Object(b.jsx)("input",{className:"hex-text-field__input",id:"hex",type:"text",value:t,readOnly:a,onChange:function(e){return c?c(e):console.log(e)}})]})}),x=(a(59),function(e){var t=e.label,a=e.height,c={height:{height:"".concat(a,"px")}};return Object(b.jsx)("div",{className:"palette-label",style:c.height,children:Object(b.jsx)("p",{children:t})})}),m=(a(60),function(e){var t=e.id,a=e.label,c=e.color;return Object(b.jsxs)("div",{className:"rgb-text-field",children:[Object(b.jsx)("label",{className:"rgb-text-field__label",htmlFor:t,children:"".concat(a," : ")}),Object(b.jsx)("input",{className:"rgb-text-field__input--".concat(t),id:t,type:"text",value:c,readOnly:!0})]})}),O=a(41),g=(a(129),a(130),function(e){var t=e.id,a=e.label,c=e.max,r=e.color,n=e.handleChange;return Object(b.jsxs)("div",{className:"slider--".concat(t),children:[Object(b.jsx)("span",{children:a}),Object(b.jsx)(O.a,{min:0,max:c,value:r,onChange:function(e){return n(e)}})]})}),v={updateR:"UPDATE_R",updateG:"UPDATE_G",updateB:"UPDATE_B",updateH:"UPDATE_H",updateS:"UPDATE_S",updateV:"UPDATE_V",updateHex:"UPDATE_HEX",updateHexForHsv:"UPDATE_HEX_FOR_HSV",updateComplementaryColor:"UPDATE_COMPLEMENTARY_COLOR"},f=function(e){return{type:v.updateR,payload:e}},_=function(e){return{type:v.updateG,payload:e}},y=function(e){return{type:v.updateB,payload:e}},N=function(e){return{type:v.updateH,payload:e}},C=function(e){return{type:v.updateS,payload:e}},H=function(e){return{type:v.updateV,payload:e}},E=function(e){return{type:v.updateHex,payload:e}},k=function(){return{type:v.updateHexForHsv}},R=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,P=function(e,t,a){return M(e)+M(t)+M(a)},M=function(e){var t=e.toString(16);return 1===t.length?"0".concat(t):t.toString()},T=function(e){var t=R.exec("#".concat(e)),a=[];if(null!==t)for(var c=0;c<3;c+=1)a[c]=parseInt(t[c+1],16);return a},A=function(e){var t=T(e),a=t[0],c=t[1],r=t[2];if(a>=0&&a<=255&&c>=0&&c<=255&&r>=0&&r<=255){var n=Math.max(a,c,r)+Math.min(a,c,r),l=t.map((function(e){return n-e}));return P(l[0],l[1],l[2])}return P(t[0],t[1],t[2])},D=function(e){var t,a=e[0]/60,c=e[1]/100,r=e[2]/100;if(0===c)t=[r,r,r];else{var n=Math.floor(a),l=a-n,o=r*(1-c),s=r*(1-c*l),i=r*(1-c*(1-l));switch(n){case 0:case 6:t=[r,i,o];break;case 1:t=[s,r,o];break;case 2:t=[o,r,i];break;case 3:t=[o,s,r];break;case 4:t=[i,o,r];break;case 5:t=[r,o,s];break;default:t=[r,r,r]}}return t.map((function(e){return Math.floor(255*e)}))},S=function(){var e=Object(o.c)((function(e){return e.colors})),t=Object(o.b)();Object(c.useEffect)((function(){var a=T(e.hex);if(3===a.length){t(f(a[0])),t(_(a[1])),t(y(a[2])),t({type:v.updateComplementaryColor});var c=function(e){var t,a=e[0]/255,c=e[1]/255,r=e[2]/255,n=Math.max(a,c,r),l=Math.min(a,c,r),o=n-l;switch(l){case n:t=0;break;case r:t=(c-a)/o*60+60;break;case a:t=(r-c)/o*60+180;break;case c:t=(a-r)/o*60+300;break;default:t=0,console.log("unexpected error.")}var s=0!==n?(n-l)/n*100:0,i=100*n;return[Math.floor(t),Math.floor(s),Math.floor(i)]}(a);t(N(c[0])),t(C(c[1])),t(H(c[2]))}}),[e.hex]);return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("p",{className:"home__description",children:"RGB\u3084HSV\u304b\u3089\u300e\u8fd1\u4f3c\u8272\u300f\u3068\u300e\u88dc\u8272\u300f\u3092\u751f\u6210\u3057\u307e\u3059\u3002"}),Object(b.jsx)("p",{className:"home__description",children:"\u30ab\u30e9\u30fc\u30b3\u30fc\u30c9\u306e\u5165\u529b or \u30b9\u30e9\u30a4\u30c0\u30fc\u306b\u3088\u3063\u3066\u751f\u6210\u3067\u304d\u307e\u3059\u3002"}),Object(b.jsx)("p",{className:"home__description",children:"RGB(10\u9032\u6570)\u3001\u3082\u3057\u304f\u306fHEX(16\u9032\u6570)\u3092\u5165\u529b\u3057\u3066\u4e0b\u3055\u3044\u3002"}),Object(b.jsxs)("div",{className:"home__to-hex",children:[Object(b.jsx)(p,{hex:e.hex,isReadOnly:!1,handleChange:function(e){var a=e.target.value;a.length<=6&&t(E(a))}}),Object(b.jsx)("p",{className:"home__arrow",children:" \u2192 "}),Object(b.jsx)(m,{id:"red",label:"R",color:e.rgb.r}),Object(b.jsx)(m,{id:"green",label:"G",color:e.rgb.g}),Object(b.jsx)(m,{id:"blue",label:"B",color:e.rgb.b})]}),Object(b.jsx)("p",{className:"home__approximate_color-label",children:"\u8fd1\u4f3c\u8272\u5909\u63db"}),Object(b.jsxs)("div",{className:"home__slider",children:[Object(b.jsx)(g,{id:"r",label:"R:",max:255,color:e.rgb.r,handleChange:function(e){t(f(e)),t(E())}}),Object(b.jsx)(g,{id:"g",label:"G:",max:255,color:e.rgb.g,handleChange:function(e){t(_(e)),t(E())}}),Object(b.jsx)(g,{id:"b",label:"B:",max:255,color:e.rgb.b,handleChange:function(e){t(y(e)),t(E())}}),Object(b.jsx)(g,{id:"h",label:"H:",max:359,color:e.hsv.h,handleChange:function(e){t(N(e)),t(k())}}),Object(b.jsx)(g,{id:"s",label:"S:",max:100,color:e.hsv.s,handleChange:function(e){t(C(e)),t(k())}}),Object(b.jsx)(g,{id:"v",label:"V:",max:100,color:e.hsv.v,handleChange:function(e){t(H(e)),t(k())}})]}),Object(b.jsxs)("div",{className:"home__approximate-color",children:[Object(b.jsxs)("div",{className:"home__approximate-color-row",children:[Object(b.jsx)(x,{label:"",height:40}),Object(b.jsx)(j,{color:e.hex,height:40})]}),Object(b.jsx)("div",{children:Object(b.jsx)(x,{label:"\u8272\u76f8",height:96})}),Object(b.jsxs)("div",{className:"home__approximate-color-row",children:[Object(b.jsx)(x,{label:"",height:40}),Object(b.jsx)(j,{color:e.hex,height:40})]}),Object(b.jsx)("div",{children:Object(b.jsx)(x,{label:"\u5f69\u5ea6",height:96})}),Object(b.jsxs)("div",{className:"home__approximate-color-row",children:[Object(b.jsx)(x,{label:"",height:40}),Object(b.jsx)(j,{color:e.hex,height:40})]}),Object(b.jsx)("div",{children:Object(b.jsx)(x,{label:"\u660e\u5ea6",height:96})}),Object(b.jsxs)("div",{className:"home__approximate-color-row",children:[Object(b.jsx)(x,{label:"",height:40}),Object(b.jsx)(j,{color:e.hex,height:40})]})]}),Object(b.jsx)("p",{className:"home__complementary_color-label",children:"\u88dc\u8272\u5909\u63db"}),Object(b.jsx)(p,{hex:e.complementaryColor,isReadOnly:!1}),Object(b.jsx)(u,{hex:e.hex,complementaryColor:e.complementaryColor})]})};var w=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsx)("main",{className:"main",children:Object(b.jsx)(S,{})})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,132)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),r(e),n(e),l(e)}))},F=a(25),U=a(6),G={rgb:{r:0,g:0,b:0},hsv:{h:0,s:0,v:0},hex:"000000",complementaryColor:"000000",approximateColors:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.updateR:return Object(U.a)(Object(U.a)({},e),{},{rgb:{r:t.payload,g:e.rgb.g,b:e.rgb.b}});case v.updateG:return Object(U.a)(Object(U.a)({},e),{},{rgb:{r:e.rgb.r,g:t.payload,b:e.rgb.b}});case v.updateB:return Object(U.a)(Object(U.a)({},e),{},{rgb:{r:e.rgb.r,g:e.rgb.g,b:t.payload}});case v.updateH:return Object(U.a)(Object(U.a)({},e),{},{hsv:{h:t.payload,s:e.hsv.s,v:e.hsv.v}});case v.updateS:return Object(U.a)(Object(U.a)({},e),{},{hsv:{h:e.hsv.h,s:t.payload,v:e.hsv.v}});case v.updateV:return Object(U.a)(Object(U.a)({},e),{},{hsv:{h:e.hsv.h,s:e.hsv.s,v:t.payload}});case v.updateHex:var a;return a=void 0===t.payload?P(e.rgb.r,e.rgb.g,e.rgb.b):t.payload,Object(U.a)(Object(U.a)({},e),{},{hex:a});case v.updateHexForHsv:var c=D([e.hsv.h,e.hsv.s,e.hsv.v]),r=P(c[0],c[1],c[2]);return Object(U.a)(Object(U.a)({},e),{},{hex:r});case v.updateComplementaryColor:var n=A(e.hex);return Object(U.a)(Object(U.a)({},e),{},{complementaryColor:n});default:return e}},L=Object(F.a)({colors:V}),I=Object(F.b)(L);l.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(o.a,{store:I,children:Object(b.jsx)(w,{})})}),document.getElementById("root")),B()},46:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.5b214b71.chunk.js.map