(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views"],{2188:function(t,e,a){"use strict";a("af11")},"696f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("basic-container",[a("div",{staticClass:"banner-text"},[a("span",[a("a",{attrs:{href:"https://avue.top/#/pay",target:"_blank"}},[a("img",{attrs:{src:"https://img.shields.io/badge/Element-2.13.6-green.svg",alt:"Build Status"}})]),a("img",{attrs:{src:"https://img.shields.io/badge/Spring%20Boot-2.4.5-yellowgreen.svg",alt:"Downloads"}}),a("img",{attrs:{src:"https://img.shields.io/badge/Spring%20Cloud-2020-blue.svg",alt:"Coverage Status"}})]),a("br"),a("span",[a("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("el-collapse-item",{attrs:{name:"1"}},[a("div",[t._v("基于Spring Cloud 2020")]),a("div",[t._v("基于Spring Boot 2.4.5")])]),a("el-collapse-item",{attrs:{name:"2"}},[a("div",[t._v("支持docker部署")]),a("div",[t._v("支持Rancher2 + Kubernetes部署")])]),a("el-collapse-item",{attrs:{name:"3"}},[a("div",[t._v("基于Spring Security OAuth 2.0 深度定制")]),a("div",[t._v("完美兼容2.X，优化集群部署，提升性能")])]),a("el-collapse-item",{attrs:{name:"4"}},[a("div",[t._v("深度定制 Spring Cloud Alibaba 便于开发使用")]),a("div",[t._v("完善监控流程，支持微服务全组件接入监控")]),a("div",[a("a",{attrs:{href:"https://pig4cloud.com",target:"_blank"}},[t._v("详细介绍")])])])],1)],1)])])],1)},i=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"wel",data:function(){return{activeNames:["1","2","3","4"],DATA:[],text:"",actor:"",count:0,isText:!1}},computed:c({},Object(n["b"])(["website"])),methods:{getData:function(){this.count<this.DATA.length-1?this.count++:this.count=0,this.isText=!0,this.actor=this.DATA[this.count]},setData:function(){var t=this,e=0,a=0,r=!1,i=5e3,s=1e3,n=10;setInterval((function(){t.isText&&(r=a==t.actor.length,r?(e--,t.text=t.actor.substr(0,e),0==e&&(t.isText=!1,setTimeout((function(){a=0,t.getData()}),s))):(e++,t.text=t.actor.substr(0,e),e==t.actor.length&&(t.isText=!1,setTimeout((function(){t.isText=!0,a=t.actor.length}),i))))}),n)}}},u=l,p=(a("2188"),a("2877")),v=Object(p["a"])(u,r,i,!1,null,"0be7d5f0",null);e["default"]=v.exports},af11:function(t,e,a){}}]);