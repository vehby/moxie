(function(e){function t(t){for(var a,s,o=t[0],l=t[1],u=t[2],m=0,p=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},n={app:0},r=[];function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("NavBar")],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.text,attrs:{router:"",to:t.route,link:""}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.text)+" ")])],1)],1)})),1)],1),a("v-app-bar",{staticClass:"white--text",attrs:{app:"","clipped-left":"",color:"red",elevation:2,dense:"",height:"65"}},[a("v-app-bar-nav-icon",{attrs:{dark:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-img",{staticClass:"mr-2",attrs:{src:i("993b"),"lazy-src":i("993b"),"aspect-ratio":"1","max-width":"24","max-height":"24"}}),a("v-toolbar-title",{staticClass:"mr-12 align-center"},[a("span",{staticClass:"title font-weight-light"},[e._v("MOXIE ")]),e._v("STUDIO ")]),a("v-spacer"),a("v-btn",{staticClass:"pr-4",attrs:{dark:"",icon:""}},[a("v-badge",{attrs:{color:"white red--text"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("0")]},proxy:!0}])},[a("v-icon",[e._v("notifications_none")])],1)],1),a("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;t.attrs;return[a("v-btn",e._g({staticClass:"white--text text-capitalize font-weight-light",attrs:{text:""}},i),[a("v-icon",{attrs:{left:""}},[e._v("account_circle")]),a("span",[e._v("Hi, John Doe")]),a("v-icon",[e._v("keyboard_arrow_down")])],1)]}}])},[a("v-list",[a("v-subheader",[e._v("My Account")]),a("v-list-item",{attrs:{link:""},on:{click:e.method}},[a("v-list-item-title",[e._v("Log Out")])],1),a("router-link",{attrs:{to:"/settings"}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-title",[e._v(" Settings ")])],1)],1)],1)],1)],1),a("v-content",{staticClass:"mx-4 my-4"},[a("router-view")],1)],1)},o=[],l={props:{source:String},data:function(){return{drawer:null,items:[{icon:"dashboard",text:"Dashboard",route:"/dashboard"},{icon:"laptop_mac",text:"Agent",route:"/agent"},{icon:"queue_play_next",text:"Script",route:"/scripts"},{icon:"playlist_add_check",text:"Tasks",route:"/tasks"},{icon:"playlist_play",text:"Trigger",route:"/trigger"},{icon:"supervisor_account",text:"User Manager",route:"/usermanager"},{icon:"mdi-settings",text:"Settings",route:"/settings"}]}},created:function(){this.$vuetify.theme.dark=!1}},u=l,c=i("2877"),m=i("6544"),p=i.n(m),v=i("7496"),d=i("40dc"),f=i("5bc1"),b=i("4ca6"),_=i("8336"),g=i("a75b"),h=i("132d"),x=i("adda"),y=i("8860"),q=i("da13"),w=i("1800"),C=i("5d23"),V=i("e449"),E=i("f774"),O=i("2fa4"),k=i("e0c7"),L=i("2a7f"),S=Object(c["a"])(u,s,o,!1,null,null,null),j=S.exports;p()(S,{VApp:v["a"],VAppBar:d["a"],VAppBarNavIcon:f["a"],VBadge:b["a"],VBtn:_["a"],VContent:g["a"],VIcon:h["a"],VImg:x["a"],VList:y["a"],VListItem:q["a"],VListItemAction:w["a"],VListItemContent:C["a"],VListItemTitle:C["c"],VMenu:V["a"],VNavigationDrawer:E["a"],VSpacer:O["a"],VSubheader:k["a"],VToolbarTitle:L["a"]});var A={name:"App",components:{NavBar:j},data:function(){return{}}},P=A,$=Object(c["a"])(P,n,r,!1,null,null,null),I=$.exports;p()($,{VApp:v["a"]});var M=i("8c4f"),T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-container",{staticClass:"grey lighten-5"},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-card",{staticClass:"mx-auto",attrs:{elevation:4,outlined:""}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}}),i("v-list-item-content",[i("div",{staticClass:"overline mb-4"},[e._v("AGENT")]),i("v-list-item-title",{staticClass:"headline mb-1"},[e._v("12")]),i("v-list-item-subtitle",[e._v("Greyhound divisely hello coldly fonwderfully")])],1)],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-card",{staticClass:"mx-auto",attrs:{elevation:4,outlined:""}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}}),i("v-list-item-content",[i("div",{staticClass:"overline mb-4"},[e._v("SCRIPTS")]),i("v-list-item-title",{staticClass:"headline mb-1"},[e._v("21")]),i("v-list-item-subtitle",[e._v("Greyhound divisely hello coldly fonwderfully")])],1)],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-card",{staticClass:"mx-auto",attrs:{elevation:4,outlined:""}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}}),i("v-list-item-content",[i("div",{staticClass:"overline mb-4"},[e._v("TASKS")]),i("v-list-item-title",{staticClass:"headline mb-1"},[e._v("9")]),i("v-list-item-subtitle",[e._v("Greyhound divisely hello coldly fonwderfully")])],1)],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"3"}},[i("GChart",{attrs:{type:"ColumnChart",data:e.chartData,options:e.chartOptions}})],1)],1)],1)],1)},B=[],D={data:function(){return{chartData:[["Year","Sales","Expenses","Profit"],["2014",1e3,400,200],["2015",1170,460,250],["2016",660,1120,300],["2017",1030,540,350]],chartOptions:{chart:{title:"Company Performance",subtitle:"Sales, Expenses, and Profit: 2014-2017"}}}}},Q=D,z=i("b0af"),G=i("62ad"),N=i("a523"),J=i("8270"),U=i("0fd9"),R=Object(c["a"])(Q,T,B,!1,null,null,null),H=R.exports;p()(R,{VCard:z["a"],VCol:G["a"],VContainer:N["a"],VListItem:q["a"],VListItemAvatar:J["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VRow:U["a"]});var K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Agent Page")]),i("h2",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illum minus nemo laborum rem adipisci, ipsam eius tempore libero eum obcaecati sint. Atque assumenda qui excepturi aperiam. Quam, numquam error.")]),i("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet deserunt ab velit similique excepturi veniam nobis voluptatem ipsum doloremque, eaque, incidunt enim beatae et atque consequatur est sunt magni.")])])}],Y={},F=Y,W=Object(c["a"])(F,K,X,!1,null,null,null),Z=W.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Scripts Page")]),i("h2",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illum minus nemo laborum rem adipisci, ipsam eius tempore libero eum obcaecati sint. Atque assumenda qui excepturi aperiam. Quam, numquam error.")]),i("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet deserunt ab velit similique excepturi veniam nobis voluptatem ipsum doloremque, eaque, incidunt enim beatae et atque consequatur est sunt magni.")])])}],ie={},ae=ie,ne=Object(c["a"])(ae,ee,te,!1,null,null,null),re=ne.exports,se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},oe=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Tasks Page")]),i("h2",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illum minus nemo laborum rem adipisci, ipsam eius tempore libero eum obcaecati sint. Atque assumenda qui excepturi aperiam. Quam, numquam error.")]),i("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet deserunt ab velit similique excepturi veniam nobis voluptatem ipsum doloremque, eaque, incidunt enim beatae et atque consequatur est sunt magni.")])])}],le={},ue=le,ce=Object(c["a"])(ue,se,oe,!1,null,null,null),me=ce.exports,pe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ve=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Trigger Page")]),i("h2",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illum minus nemo laborum rem adipisci, ipsam eius tempore libero eum obcaecati sint. Atque assumenda qui excepturi aperiam. Quam, numquam error.")]),i("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet deserunt ab velit similique excepturi veniam nobis voluptatem ipsum doloremque, eaque, incidunt enim beatae et atque consequatur est sunt magni.")])])}],de={},fe=de,be=Object(c["a"])(fe,pe,ve,!1,null,null,null),_e=be.exports,ge=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},he=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("User Manager Page")]),i("h2",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illum minus nemo laborum rem adipisci, ipsam eius tempore libero eum obcaecati sint. Atque assumenda qui excepturi aperiam. Quam, numquam error.")]),i("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet deserunt ab velit similique excepturi veniam nobis voluptatem ipsum doloremque, eaque, incidunt enim beatae et atque consequatur est sunt magni.")])])}],xe={},ye=xe,qe=Object(c["a"])(ye,ge,he,!1,null,null,null),we=qe.exports,Ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ve=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Settings Page")]),i("h2",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illum minus nemo laborum rem adipisci, ipsam eius tempore libero eum obcaecati sint. Atque assumenda qui excepturi aperiam. Quam, numquam error.")]),i("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet deserunt ab velit similique excepturi veniam nobis voluptatem ipsum doloremque, eaque, incidunt enim beatae et atque consequatur est sunt magni.")])])}],Ee={},Oe=Ee,ke=Object(c["a"])(Oe,Ce,Ve,!1,null,null,null),Le=ke.exports;a["a"].use(M["a"]);var Se=new M["a"]({mode:"history",base:"/",routes:[{path:"/dashboard",name:"dashboard",component:H},{path:"/agent",name:"agent",component:Z},{path:"/scripts",name:"scripts",component:re},{path:"/tasks",name:"tasks",component:me},{path:"/trigger",name:"trigger",component:_e},{path:"/usermanager",name:"usermanager",component:we},{path:"/settings",name:"settings",component:Le}]}),je=(i("d1e78"),i("15f5"),i("f309"));a["a"].use(je["a"]);var Ae=new je["a"]({icons:{iconfont:"fa"}});a["a"].config.productionTip=!1,new a["a"]({router:Se,vuetify:Ae,render:function(e){return e(I)}}).$mount("#app")},"993b":function(e,t,i){e.exports=i.p+"img/moxie-logo.e0cd373c.png"}});
//# sourceMappingURL=app.93c8d9a0.js.map