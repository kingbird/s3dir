(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mount"],{c78f:function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"mount"},[c("div",{staticClass:"tilte"},[t._v("增加挂载")]),c("div",{staticClass:"mount-add"},[c("input",{attrs:{type:"text",placeholder:"SecretId"}}),c("input",{attrs:{type:"text",placeholder:"SecretKey"}}),t._m(0),c("a",{attrs:{href:"javascript:;"},on:{click:t.getService}},[t._v("确定")])]),t._m(1)])},a=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("select",[c("option",{attrs:{value:"0"}},[t._v("选择bucket")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"mount-list"},[c("div",{staticClass:"tilte"},[t._v("挂载列表")])])}],r=c("3438"),s=c.n(r),i={name:"mount",components:{},data:function(){return{}},watch:{},created:function(){},methods:{getService:function(){var t=new s.a({SecretId:localStorage.getItem("SecretId"),SecretKey:localStorage.getItem("SecretKey")});t.getService({},(function(t,e){console.log(e)}))}}},l=i,o=c("2877"),u=Object(o["a"])(l,n,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=mount.7916947e.js.map