(function(t){function e(e){for(var n,r,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2c3aa97a"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",c.name="ChunkLoadError",c.type=n,c.request=s,a[1](c)}o[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/web/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"01bf":function(t,e,a){"use strict";a("b714")},1058:function(t,e,a){"use strict";a("72b6")},"152a":function(t,e,a){},"27dc":function(t,e,a){},"3df5":function(t,e,a){},"4ca2":function(t,e,a){"use strict";a("54e9")},"54e9":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"72b6":function(t,e,a){},"7d46":function(t,e,a){},8003:function(t,e,a){},"9c0c":function(t,e,a){},b2b6:function(t,e,a){"use strict";a("152a")},b714:function(t,e,a){},c16d:function(t,e,a){"use strict";a("8003")},c71c:function(t,e,a){"use strict";a("3df5")},cba3:function(t,e,a){"use strict";a("7d46")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.isLoggedIn?[a("el-container",[a("el-header",[a("Header")],1),a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("Aside")],1),a("el-main",[a("router-view",{staticClass:"content"})],1)],1)],1)]:a("div",[a("router-view")],1)],2)},s=[],r=a("d4ec"),i=a("262e"),l=a("2caf"),c=a("9ab4"),u=a("1b40"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-menu",{staticClass:"header",attrs:{"default-active":t.defaultIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",with:"100%"}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("div",{staticClass:"user-info"}),a("el-avatar",{attrs:{size:40}}),a("span",{staticStyle:{"margin-left":"15px"}},[t._v(" "+t._s(t.user.name)+" ")])],1),a("el-menu-item",{attrs:{index:"1-1"},on:{click:function(e){return t.openInfoDialog()}}},[t._v("用戶編輯")]),a("el-menu-item",{attrs:{index:"1-2"},on:{click:function(e){return t.openPasswordDialog()}}},[t._v("密碼編輯")])],2),a("el-menu-item",[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.logout()}}},[t._v("登出")])],1),a("UserInfoDialog",{ref:"infoDialog"}),a("UserPasswordDialog",{ref:"passwordDialog"})],1)},p=[],f=a("bee2"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"用戶編輯",visible:t.visible,width:"30%"},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"form",attrs:{loading:t.loading},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("el-form-item",{attrs:{label:"暱稱"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"電子郵件"}},[a("el-input",{model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.close()}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.submit()}}},[t._v("確定")])],1)],1)},v=[],m=(a("b0c0"),a("d3b7"),a("bc3a")),b=a.n(m);function h(){var t=localStorage.getItem("user"),e=localStorage.getItem("token"),a=JSON.parse(t||"");return a&&e?{Authorization:"Bearer "+e,Accept:"application/json","Content-type":"application/json"}:{}}var y="https://system-project.herokuapp.com/api/",j=function(){function t(){Object(r["a"])(this,t)}return Object(f["a"])(t,[{key:"post",value:function(t,e){return b()({method:"post",headers:h(),baseURL:y,url:t,data:e})}},{key:"get",value:function(t,e){return b()({method:"get",headers:h(),baseURL:y,url:t,params:e})}}]),t}(),O=new j,k=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("div",[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("h1",[t._v("管理系統")])])],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"row",attrs:{span:24}},[a("el-input",{attrs:{placeholder:"請輸入密碼"},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"row",attrs:{span:24}},[a("el-input",{attrs:{placeholder:"請輸入帳號"},on:{change:t.handleLogin},model:{value:t.data.account,callback:function(e){t.$set(t.data,"account",e)},expression:"data.account"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"center",gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-button",{on:{click:t.handleLogin}},[t._v("登入")])],1),a("el-col",{attrs:{span:12}},[a("el-button",{on:{click:t.goRigster}},[t._v("註冊")])],1)],1)],1)])},_=[],x=a("4bb5"),C=Object(x["a"])("Auth"),S=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.data={password:"",email:"",account:""},t.loading=!1,t.message="",t}return Object(f["a"])(a,[{key:"mounted",value:function(){this.isLoggedIn&&this.$router.push("home")}},{key:"handleLogin",value:function(){var t=this;this.loading=!0,this.login(this.data).then((function(e){t.$router.push("home")}),(function(e){t.loading=!1,t.message=e}))}},{key:"goRigster",value:function(){this.$router.push("register")}}]),a}(u["b"]);Object(c["a"])([C.Getter],S.prototype,"isLoggedIn",void 0),Object(c["a"])([C.Action],S.prototype,"login",void 0),Object(c["a"])([C.State("user")],S.prototype,"currentUser",void 0),S=Object(c["a"])([Object(u["a"])({components:{}})],S);var $=S,P=$,I=(a("c71c"),a("2877")),A=Object(I["a"])(P,w,_,!1,null,null,null),E=A.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("el-row",[a("el-col",[a("el-card",{staticClass:"box-card pointer message-card",attrs:{"body-style":"text-align:left; position:relative;"}},[a("div",{staticClass:"message-click",on:{click:function(e){return t.toMessageBoard()}}}),t._v(' In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself! '),a("div",{staticClass:"auther"},[t._v("— admin "),a("span",[t._v(" 2020/07/06")])])])],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[t._v("ss")]),a("el-col",{attrs:{span:12}},[t._v("dd")]),a("el-col",{attrs:{span:12}},[t._v("aa")]),a("el-col",{attrs:{span:12}},[t._v("qq")])],1)],1)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-title"},[a("span",[t._v(" 重要訊息 ")])])}],T=Object(x["a"])("Auth"),M=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(f["a"])(a,[{key:"toMessageBoard",value:function(){console.log("ss"),this.$router.push("message-board")}}]),a}(u["b"]);Object(c["a"])([T.State("user")],M.prototype,"currentUser",void 0),M=Object(c["a"])([Object(u["a"])({components:{Header:Nt}})],M);var U=M,R=U,z=(a("01bf"),Object(I["a"])(R,D,L,!1,null,null,null)),F=z.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"messageBoard"},[a("h1",[t._v("留言板")]),a("el-input",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"textarea",rows:2,placeholder:"請輸入內容",disabled:t.loading},model:{value:t.data.message,callback:function(e){t.$set(t.data,"message",e)},expression:"data.message"}}),a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-button",{attrs:{size:"mini",loading:t.loading},on:{click:function(e){return t.clear()}}},[t._v("清除")]),a("el-button",{attrs:{size:"mini",type:"primary",loading:t.loading},on:{click:function(e){return t.submit()}}},[t._v("確認")])],1),a("hr"),a("h1",[t._v("留言紀錄")]),a("el-timeline",{attrs:{reverse:!0,loading:t.loading}},t._l(t.response,(function(e,n){return a("el-timeline-item",{key:n,attrs:{timestamp:e.date,color:e.color}},[a("el-card",{staticClass:"box-card pointer message-card"},[a("div",{staticClass:"message-click",on:{click:function(a){return t.toDetail(e.id)}}}),t._v(" "+t._s(e.content)+" "),a("div",{staticClass:"auther text-gray"},[t._v("- "+t._s(e.user.name))]),a("div",{staticClass:"reply text-gray"},[t._v("回應: "+t._s(e.replyCount))]),e.user_id===t.user.id?a("div",{staticClass:"edit"},[a("div",{on:{click:function(a){return t.edit(e)}}},[t._v("編輯")]),a("div",{on:{click:function(a){return t.remove(e)}}},[t._v("刪除")])]):t._e()])],1)})),1),a("MessageDialog",{ref:"dialog",on:{submit:function(e){return t.reload()},close:function(e){return t.reload()}}}),a("MessageEditDialog",{ref:"editDialog"})],1)},B=[],N=(a("ac1f"),a("5319"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"message-dialog",attrs:{visible:t.visible,width:"650px"},on:{"update:visible":function(e){t.visible=e}}},[a("el-card",{staticClass:"box-card message-card content"},[t._v(" "+t._s(t.response.content)+" "),a("div",{staticClass:"auther text-gray"},[t._v("- "+t._s(t.response.user.name))]),a("div",{staticClass:"date text-gray"},[t._v(t._s(t.response.date))])]),t.response.replies.length>0?a("div",{staticClass:"reply-contain"},t._l(t.response.replies,(function(e,n){return a("el-row",{key:n,staticStyle:{"margin-bottom":"5px"}},[e.user_id!==t.user.id?a("el-row",{attrs:{gutter:10}},[a("el-col",{staticClass:"other message-card",attrs:{span:16}},[t._v(" "+t._s(e.content)+" "),a("div",{staticClass:"auther text-gray"},[t._v("- "+t._s(e.user.name))]),a("div",{staticClass:"date text-gray"},[t._v(t._s(e.date))])]),a("el-col",{attrs:{span:8}})],1):a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}}),a("el-col",{staticClass:"mine message-card",attrs:{span:16}},[t._v(" "+t._s(e.content)+" "),a("div",{staticClass:"auther text-gray"},[t._v("- 自己")]),a("div",{staticClass:"date text-gray"},[t._v(t._s(e.date))])])],1)],1)})),1):a("div",{staticClass:"no-data"},[t._v("暫無回應")]),a("hr"),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-input",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"textarea",rows:1,placeholder:"請輸入內容",disabled:t.loading},model:{value:t.reply,callback:function(e){t.reply=e},expression:"reply"}}),a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.close()}}},[t._v("取消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("確定")])],1)],1)}),J=[],q=Object(x["a"])("Auth"),G=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.visible=!1,t.response={content:"",date:"",user_id:0,id:0,replies:[],user:{account:"",id:0,name:""}},t.loading=!1,t.reply="",t}return Object(f["a"])(a,[{key:"open",value:function(t){this.visible=!0,this.response={content:"",date:"",user_id:0,id:0,replies:[],user:{account:"",id:0,name:""}},this.reload(t)}},{key:"reload",value:function(t){var e=this;this.loading=!0;var a={id:t};O.get("message/find",a).then((function(t){e.response=t.data[0]})).finally((function(){console.log(e.response),e.loading=!1}))}},{key:"submit",value:function(){var t=this,e={reply:this.reply,message_id:this.response.id};O.post("message/reply/add",e).then((function(e){t.reply="",t.reload(t.response.id)}))}},{key:"close",value:function(){this.visible=!1,this.$emit("close")}}]),a}(u["b"]);Object(c["a"])([q.State],G.prototype,"user",void 0),G=Object(c["a"])([Object(u["a"])({components:{}})],G);var W=G,Y=W,K=(a("c16d"),Object(I["a"])(Y,N,J,!1,null,null,null)),Q=K.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"編輯",visible:t.visible,width:"30%"},on:{"update:visible":function(e){t.visible=e}}},[a("el-row",[a("el-input",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"textarea",rows:2,placeholder:"請輸入內容",disabled:t.loading},model:{value:t.data.content,callback:function(e){t.$set(t.data,"content",e)},expression:"data.content"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.close()}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.submit()}}},[t._v("確定")])],1)],1)},X=[],Z=a("5530"),tt=(Object(x["a"])("Auth"),{content:"",date:"",user_id:0,id:0}),et=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.visible=!1,t.loading=!1,t.data=Object(Z["a"])({},tt),t}return Object(f["a"])(a,[{key:"open",value:function(t){this.visible=!0,console.log(t),this.data=t}},{key:"close",value:function(){this.visible=!1}},{key:"submit",value:function(){var t=this;this.loading=!0;var e=this.data;O.post("message/edit",e).then((function(e){t.loading=!1,t.close(),t.$emit("submit")}))}}]),a}(u["b"]);et=Object(c["a"])([Object(u["a"])({components:{}})],et);var at=et,nt=at,ot=Object(I["a"])(nt,V,X,!1,null,null,null),st=ot.exports,rt=Object(x["a"])("Auth"),it=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.data={message:""},t.response=[],t.loading=!1,t}return Object(f["a"])(a,[{key:"mounted",value:function(){this.reload()}},{key:"reload",value:function(){var t=this;this.loading=!0,O.get("message/index",{}).then((function(e){t.response=e.data,t.response.forEach((function(e){var a=t.isToday(e.date);return e.isToday=a,a&&(e.color="rgb(245, 162, 8)"),e.isEdit&&(e.date=e.date+" (已編輯)"),e}))})).finally((function(){t.loading=!1}))}},{key:"isToday",value:function(t){var e=new Date(t.replace(/-/g,"/")),a=new Date;return e.setHours(0,0,0,0)==a.setHours(0,0,0,0)}},{key:"clear",value:function(){this.data.message=""}},{key:"submit",value:function(){var t=this,e=this.data;O.post("message/add",e).then((function(e){t.data.message="",t.reload()}))}},{key:"toDetail",value:function(t){this.$refs.dialog.open(t)}},{key:"remove",value:function(t){var e=this;console.log("delete",t),O.post("message/delete",t).then((function(t){e.reload()}))}},{key:"edit",value:function(t){this.$refs.editDialog.open(t)}}]),a}(u["b"]);Object(c["a"])([rt.State],it.prototype,"user",void 0),Object(c["a"])([rt.State],it.prototype,"token",void 0),it=Object(c["a"])([Object(u["a"])({components:{MessageDialog:Q,MessageEditDialog:st}})],it);var lt=it,ct=lt,ut=(a("cba3"),Object(I["a"])(ct,H,B,!1,null,null,null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Register"},[a("div",[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("h1",[t._v("歡迎註冊")])])],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"row",attrs:{span:24}},[a("el-input",{attrs:{placeholder:"請輸入帳號"},on:{change:t.handleLogin},model:{value:t.data.account,callback:function(e){t.$set(t.data,"account",e)},expression:"data.account"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"row",attrs:{span:24}},[a("el-input",{attrs:{placeholder:"請輸入電子郵件"},model:{value:t.data.email,callback:function(e){t.$set(t.data,"email",e)},expression:"data.email"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"row",attrs:{span:24}},[a("el-input",{attrs:{placeholder:"請輸入暱稱"},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"row",attrs:{span:24}},[a("el-input",{attrs:{placeholder:"請輸入密碼"},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"row",attrs:{span:24}},[a("el-input",{attrs:{placeholder:"密碼確認"},model:{value:t.data.c_password,callback:function(e){t.$set(t.data,"c_password",e)},expression:"data.c_password"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("el-button",{on:{click:t.handleRegister}},[t._v("註冊")])],1)],1)],1)])},ft=[],gt=Object(x["a"])("Auth"),vt=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.data={password:"",email:"",account:"",name:"",c_password:""},t.loading=!1,t.message="",t}return Object(f["a"])(a,[{key:"mounted",value:function(){this.isLoggedIn&&this.$router.push("home")}},{key:"handleRegister",value:function(){var t=this;this.loading=!0,this.register(this.data).then((function(e){t.login(t.data).then((function(){t.$router.push("home")}))}),(function(e){t.loading=!1,t.message=e}))}}]),a}(u["b"]);Object(c["a"])([gt.Getter],vt.prototype,"isLoggedIn",void 0),Object(c["a"])([gt.Action],vt.prototype,"register",void 0),Object(c["a"])([gt.Action],vt.prototype,"login",void 0),Object(c["a"])([gt.State("user")],vt.prototype,"currentUser",void 0),vt=Object(c["a"])([Object(u["a"])({components:{}})],vt);var mt=vt,bt=mt,ht=(a("4ca2"),Object(I["a"])(bt,pt,ft,!1,null,null,null)),yt=ht.exports;n["default"].use(k["a"]);var jt=[{path:"/",name:"Index",component:E},{path:"/register",name:"Register",component:yt},{path:"/home",name:"Home",component:F,meta:{title:"首頁",needLogin:!0}},{path:"/message-board",name:"MessageBoard",component:dt,meta:{needLogin:!0}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Ot=new k["a"]({mode:"hash",base:"/web/",routes:jt});Ot.beforeEach((function(t,e,a){var n=localStorage.getItem("token");t.meta.needLogin?n?a():a({path:"/"}):a()}));var kt=Ot,wt=Object(x["a"])("Auth"),_t=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.visible=!1,t.loading=!1,t.form={name:"",email:""},t}return Object(f["a"])(a,[{key:"open",value:function(){this.visible=!0,this.form.name=this.user.name,this.form.email=this.user.email}},{key:"close",value:function(){this.visible=!1}},{key:"submit",value:function(){var t=this;this.loading=!0;var e=this.form;O.post("user/edit",e).then((function(e){t.loading=!1})).finally((function(){t.signOut(),kt.push("/")}))}}]),a}(u["b"]);Object(c["a"])([wt.State],_t.prototype,"user",void 0),Object(c["a"])([wt.Action],_t.prototype,"signOut",void 0),_t=Object(c["a"])([Object(u["a"])({components:{}})],_t);var xt=_t,Ct=xt,St=Object(I["a"])(Ct,g,v,!1,null,null,null),$t=St.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"密碼編輯",visible:t.visible,width:"30%"},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"form",attrs:{loading:t.loading},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("el-form-item",{attrs:{label:"舊密碼"}},[a("el-input",{model:{value:t.form.oldPassword,callback:function(e){t.$set(t.form,"oldPassword",e)},expression:"form.oldPassword"}})],1),a("el-form-item",{attrs:{label:"新密碼"}},[a("el-input",{model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}})],1),a("el-form-item",{attrs:{label:"密碼驗證"}},[a("el-input",{model:{value:t.form.confirmPassword,callback:function(e){t.$set(t.form,"confirmPassword",e)},expression:"form.confirmPassword"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.close()}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.submit()}}},[t._v("確定")])],1)],1)},It=[],At=Object(x["a"])("Auth"),Et={oldPassword:"",newPassword:"",confirmPassword:""},Dt=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.visible=!1,t.loading=!1,t.form=Object(Z["a"])({},Et),t}return Object(f["a"])(a,[{key:"open",value:function(){this.visible=!0}},{key:"close",value:function(){this.visible=!1}},{key:"submit",value:function(){this.loading=!0;var t=this.form;O.post("user/password-edit",t).then((function(t){})).finally((function(){}))}}]),a}(u["b"]);Object(c["a"])([At.State],Dt.prototype,"user",void 0),Object(c["a"])([At.Action],Dt.prototype,"signOut",void 0),Dt=Object(c["a"])([Object(u["a"])({components:{}})],Dt);var Lt=Dt,Tt=Lt,Mt=Object(I["a"])(Tt,Pt,It,!1,null,null,null),Ut=Mt.exports,Rt=Object(x["a"])("Auth"),zt=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.defaultIndex="1",t.loading=!1,t}return Object(f["a"])(a,[{key:"logout",value:function(){this.signOut(),kt.push("/")}},{key:"openInfoDialog",value:function(){this.$refs.infoDialog.open()}},{key:"openPasswordDialog",value:function(){this.$refs.passwordDialog.open()}}]),a}(u["b"]);Object(c["a"])([Rt.Action],zt.prototype,"signOut",void 0),Object(c["a"])([Rt.State],zt.prototype,"user",void 0),zt=Object(c["a"])([Object(u["a"])({components:{UserInfoDialog:$t,UserPasswordDialog:Ut}})],zt);var Ft=zt,Ht=Ft,Bt=(a("1058"),Object(I["a"])(Ht,d,p,!1,null,"0896a068",null)),Nt=Bt.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.curPage,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.goToPage("home")}}},[a("i",{staticClass:"el-icon-s-home"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("首頁")])]),a("el-menu-item",{attrs:{index:"message-board"},on:{click:function(e){return t.goToPage("message-board")}}},[a("i",{staticClass:"el-icon-tickets"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("留言板")])])],1)],1)},qt=[],Gt=(a("1276"),function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(f["a"])(a,[{key:"curPage",get:function(){var t=this.$route.path;return t=t.split("/")[1],console.log("path",t),t}},{key:"goToPage",value:function(t){kt.push(t)}}]),a}(u["b"]));Gt=Object(c["a"])([Object(u["a"])({components:{}})],Gt);var Wt=Gt,Yt=Wt,Kt=(a("b2b6"),Object(I["a"])(Yt,Jt,qt,!1,null,null,null)),Qt=Kt.exports,Vt=Object(x["a"])("Auth"),Xt=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["b"]);Object(c["a"])([Vt.Getter],Xt.prototype,"isLoggedIn",void 0),Xt=Object(c["a"])([Object(u["a"])({components:{Header:Nt,Aside:Qt}})],Xt);var Zt=Xt,te=Zt,ee=(a("5c0b"),Object(I["a"])(te,o,s,!1,null,null,null)),ae=ee.exports,ne=a("9483");Object(ne["a"])("".concat("/web/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var oe=a("2f62"),se=(a("25f0"),a("6fc5")),re="https://system-project.herokuapp.com/api/",ie=function(){function t(){Object(r["a"])(this,t)}return Object(f["a"])(t,[{key:"login",value:function(t,e){return b.a.post(re+"login",{account:t,password:e}).then((function(t){if(t.data.success){var e=t.data.data.token;localStorage.setItem("token",e),localStorage.setItem("user",JSON.stringify(t.data.data.user))}return t.data}))}},{key:"logout",value:function(){return b()({method:"post",headers:h(),baseURL:re,url:"logout"}).then((function(){localStorage.removeItem("user"),localStorage.removeItem("token")}))}},{key:"register",value:function(t,e,a,n,o){return b.a.post(re+"register",{account:t,email:e,password:a,c_password:n,name:o})}}]),t}(),le=new ie,ce=localStorage.getItem("user"),ue=localStorage.getItem("token"),de=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.status=ce?{loggedIn:!0}:{loggedIn:!1},t.user=ce?JSON.parse(ce):null,t.token=ue||null,t}return Object(f["a"])(a,[{key:"loginSuccess",value:function(t){console.log("login",t),this.status.loggedIn=!0,this.user=t.user,this.token=t.token}},{key:"loginFailure",value:function(){this.status.loggedIn=!1,this.user=null}},{key:"logout",value:function(){this.status.loggedIn=!1,this.user=null,this.token=null}},{key:"registerSuccess",value:function(){this.status.loggedIn=!1}},{key:"registerFailure",value:function(){this.status.loggedIn=!1}},{key:"login",value:function(t){var e=this;return le.login(t.account,t.password).then((function(t){return e.context.commit("loginSuccess",t.data),Promise.resolve(t.data.user)}),(function(t){e.context.commit("loginFailure");var a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return Promise.reject(a)}))}},{key:"signOut",value:function(){le.logout(),this.context.commit("logout")}},{key:"register",value:function(t){var e=this;return le.register(t.account,t.email,t.password,t.c_password,t.name).then((function(t){return e.context.commit("registerSuccess"),Promise.resolve(t.data)}),(function(t){e.context.commit("registerFailure");var a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return Promise.reject(a)}))}},{key:"isLoggedIn",get:function(){return this.status.loggedIn}}]),a}(se["d"]);Object(c["a"])([se["c"]],de.prototype,"loginSuccess",null),Object(c["a"])([se["c"]],de.prototype,"loginFailure",null),Object(c["a"])([se["c"]],de.prototype,"logout",null),Object(c["a"])([se["c"]],de.prototype,"registerSuccess",null),Object(c["a"])([se["c"]],de.prototype,"registerFailure",null),Object(c["a"])([Object(se["a"])({rawError:!0})],de.prototype,"login",null),Object(c["a"])([se["a"]],de.prototype,"signOut",null),Object(c["a"])([Object(se["a"])({rawError:!0})],de.prototype,"register",null),de=Object(c["a"])([Object(se["b"])({namespaced:!0})],de);var pe=de;n["default"].use(oe["a"]);var fe=new oe["a"].Store({state:{user:{}},mutations:{},actions:{},modules:{Auth:pe},getters:{}}),ge=a("5c96"),ve=a.n(ge);a("0fae"),a("27dc");n["default"].config.productionTip=!1,n["default"].use(ve.a),n["default"].use(oe["a"]),new n["default"]({router:kt,store:fe,render:function(t){return t(ae)}}).$mount("#app")}});
//# sourceMappingURL=app.a7563502.js.map