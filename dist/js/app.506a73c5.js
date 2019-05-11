(function(e){function t(t){for(var n,o,i=t[0],u=t[1],l=t[2],d=0,p=[];d<i.length;d++)o=i[d],s[o]&&p.push(s[o][0]),s[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"083c":function(e,t,r){"use strict";var n=r("a841"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("CoursesComponent",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-row",{staticClass:"margin-10",attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[r("el-input",{attrs:{placeholder:"search by Provider"},on:{change:function(t){e.filterTableDataBasedOn("Provider",t)}},model:{value:e.ProviderSearch,callback:function(t){e.ProviderSearch=t},expression:"ProviderSearch"}})],1)]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[r("el-input",{attrs:{placeholder:"search by Universities"},on:{change:function(t){e.filterTableDataBasedOn("Universities",t)}},model:{value:e.UniversitiesSearch,callback:function(t){e.UniversitiesSearch=t},expression:"UniversitiesSearch"}})],1)])],1),r("el-row",{staticClass:"margin-10",attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[r("el-input",{attrs:{placeholder:"search by Parent Subject"},on:{change:function(t){e.filterTableDataBasedOn("Parent Subject",t)}},model:{value:e.PSubjectSearch,callback:function(t){e.PSubjectSearch=t},expression:"PSubjectSearch"}})],1)]),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"grid-content"},[r("el-input",{attrs:{placeholder:"search by ParChildent Subject"},on:{change:function(t){e.filterTableDataBasedOn("Child Subject",t)}},model:{value:e.CSubjectSearch,callback:function(t){e.CSubjectSearch=t},expression:"CSubjectSearch"}})],1)])],1),r("el-row",{staticClass:"margin-10",attrs:{type:"flex",gutter:10,justify:"center"}},[r("el-col",{attrs:{span:1}},[r("el-tag",{staticClass:"coursesCount"},[e._v(e._s(e.parsedCourses.length))])],1)],1),r("courses-table-component")],1)},i=[],u=(r("6762"),r("2fdb"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.parsedCourses.length>0?r("el-table",{attrs:{data:e.parsedCourses,height:e.height-200}},[r("el-table-column",{attrs:{prop:"Course Id",label:"Course Id",width:"80"}}),r("el-table-column",{attrs:{prop:"Course Name",label:"Course Name",width:"200"}}),r("el-table-column",{attrs:{prop:"Provider",label:"Provider",width:"100"}}),r("el-table-column",{attrs:{prop:"Universities",label:"Institutions"}}),r("el-table-column",{attrs:{prop:"Parent Subject",label:"Parent Subject"}}),r("el-table-column",{attrs:{prop:"Child Subject",label:"Child Subject"}}),r("el-table-column",{attrs:{prop:"Url",label:"Url"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("a",{attrs:{href:t.row.Url,target:"_blank"}},[e._v("Click here")])]}}],null,!1,2232509022)}),r("el-table-column",{attrs:{sortable:"",prop:"Next Session Date",label:"Next Session Date","min-width":"100"}}),r("el-table-column",{attrs:{sortable:"",prop:"Length",label:"Length","min-width":"60"}}),r("el-table-column",{attrs:{prop:"videoUrl",label:"Video(Url)"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("a",{attrs:{href:t.row.videoUrl,target:"_blank"}},[e._v("Click here to video")])]}}],null,!1,3502103013)})],1):e._e()],1)}),l=[],c=r("cebc"),d=r("2f62"),p={name:"CoursesTableComponent",data:function(){return{flag:""}},computed:Object(c["a"])({},Object(d["b"])(["parsedCourses","height"]))},f=p,h=(r("083c"),r("2877")),b=Object(h["a"])(f,u,l,!1,null,null,null),C=b.exports,v=r("f2ef"),m={name:"CoursesComponent",data:function(){return{ProviderSearch:"",UniversitiesSearch:"",PSubjectSearch:"",CSubjectSearch:""}},components:{CoursesTableComponent:C},mounted:function(){var e=this.$loading({lock:!0,text:"Loading",spinner:"spinner-border",background:"#fff"});this.$store.dispatch("loadCoursesData").then(function(t){t&&e.close()},function(t){e.close(t)})},methods:{filterTableDataBasedOn:function(e,t){var r=this;r.parsedCourses=r.$_.filter(r.courses,function(e){return e["Provider"].toLowerCase().includes(r.ProviderSearch.toLowerCase())}),r.parsedCourses=r.parsedCourses.length>0?r.$_.filter(r.parsedCourses,function(e){return e["Universities"].toLowerCase().includes(r.UniversitiesSearch.toLowerCase())}):"",r.parsedCourses=r.parsedCourses.length>0?r.$_.filter(r.parsedCourses,function(e){return e["Parent Subject"].toLowerCase().includes(r.PSubjectSearch.toLowerCase())}):"",r.parsedCourses=r.parsedCourses.length>0?r.$_.filter(r.parsedCourses,function(e){return e["Child Subject"].toLowerCase().includes(r.CSubjectSearch.toLowerCase())}):""}},computed:{courses:function(){return this.$store.state.courses},parsedCourses:{get:function(){return this.$store.state.parsedCourses},set:function(e){this.$store.state.parsedCourses=e}}}},S=m,g=(r("9fd2"),Object(h["a"])(S,o,i,!1,null,null,null)),j=g.exports,w={name:"app",components:{CoursesComponent:j},created:function(){this.$store.commit("setHeight",{})}},P=w,y=Object(h["a"])(P,s,a,!1,null,null,null),_=y.exports,U=(r("ac6a"),r("bc3a")),x=r.n(U),O=r("a7fe"),k=r.n(O);n["default"].use(d["a"]),n["default"].use(k.a,x.a);var L=new d["a"].Store({state:{courses:[],parsedCourses:[],height:0},actions:{loadCoursesData:function(e){var t=e.commit;return new Promise(function(e,r){x.a.get("https://api.myjson.com/bins/1fq8pm").then(function(e){return e.data}).then(function(r){t("SetCourses",r),e(r)},function(e){r(e)})})}},mutations:{SetCourses:function(e,t){e.courses=[],t.forEach(function(t){e.courses.push({"Course Id":t["Course Id"],"Course Name":t["Course Name"],Provider:t["Provider"],Universities:t["Universities"]["Institutions"],"Parent Subject":t["Parent Subject"],"Child Subject":t["Child Subject"],Url:t["Url"],"Next Session Date":t["Next Session Date"],Length:t.Length?t.Length:0,videoUrl:""!=t["Video(Url)"]?t["Video(Url)"]:"https://www.youtube.com"})})},setHeight:function(e,t){e.height=window.innerHeight}}}),$=r("5c96"),D=r.n($);r("0fae");n["default"].use(D.a),n["default"].use(v["a"]);var T=new n["default"]({store:L,render:function(e){return e(_)}}).$mount("#app");window.Cypress&&(window.app=T)},"9fd2":function(e,t,r){"use strict";var n=r("dbcf"),s=r.n(n);s.a},a841:function(e,t,r){},dbcf:function(e,t,r){}});
//# sourceMappingURL=app.506a73c5.js.map