(function(t){function e(e){for(var r,i,s=e[0],u=e[1],l=e[2],f=0,p=[];f<s.length;f++)i=s[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={1:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([3,0]),n()})({3:function(t,e,n){t.exports=n("Vtdi")},"3PmO":function(t,e,n){"use strict";var r=n("AyLk"),a=n.n(r);a.a},"9OSz":function(t,e,n){},AyLk:function(t,e,n){},J6bE:function(t,e,n){"use strict";var r=n("9OSz"),a=n.n(r);a.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n("zwU1")}}),r("Planner",{attrs:{msg:"Make your instagram awesome"}}),r("Content"),r("hr"),r("div",{staticClass:"images"},t._l(t.images,function(t,e){return r("img",{key:e,attrs:{src:t.url,width:t.width,height:"auto",alt:""}})}))],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h3",[t._v(t._s(t.msg))])])},s=[],u={name:"HelloWorld",props:{msg:String}},l=u,c=(n("J6bE"),n("KHd+")),f=Object(c["a"])(l,i,s,!1,null,"d4be8860",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h5",[t._v(t._s(t.msg))]),n("input",{attrs:{type:"file",multiple:""},on:{change:t.getImages}}),n("draggable",{model:{value:t.images,callback:function(e){t.images=e},expression:"images"}},[n("transition-group",t._l(t.images,function(t,e){return n("div",{key:e},[n("img",{attrs:{src:t,alt:""}})])}))],1)],1)},g=[],m=n("FRYs"),h=n.n(m),v={name:"Content",data:function(){return{msg:"Download images:",images:[]}},components:{draggable:h.a},methods:{getImages:function(t){for(var e=t.target.files,n=this.images,r=0;r<e.length;r+=1){var a=new FileReader;a.readAsDataURL(e[r]),a.onload=function(t){n.push(t.target.result)}}}}},b=v,y=(n("3PmO"),Object(c["a"])(b,d,g,!1,null,"1af88b32",null)),_=y.exports,w={name:"app",components:{Planner:p,Content:_},data:function(){return{token:"1478292659.1677ed0.45b0a26e1e1a4c30a3a85e62931265e0",api:"https://api.instagram.com/v1/users/self/media/recent",images:[]}},mounted:function(){var t=this;this.axios.get(this.api,{params:{access_token:this.token,count:"15"}}).then(function(e){console.log(e.data.data),e.data.data.map(function(e){return t.images.push(e.images.standard_resolution)})})}},O=w,j=(n("ZL7j"),Object(c["a"])(O,a,o,!1,null,null,null)),x=j.exports,k=n("vDqi"),P=n.n(k),S=n("p/7L"),C=n.n(S);r["a"].use(C.a,P.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app")},ZL7j:function(t,e,n){"use strict";var r=n("slcd"),a=n.n(r);a.a},slcd:function(t,e,n){},zwU1:function(t,e,n){t.exports=n.p+"img/logo.d755510a.png"}});
//# sourceMappingURL=app.9fcc3b97.js.map