(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{206:function(t,e,n){var content=n(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("137986a6",content,!0,{sourceMap:!1})},265:function(t,e,n){"use strict";var r=n(206);n.n(r).a},266:function(t,e,n){(e=n(22)(!1)).push([t.i,".heading[data-v-77fc6061]{margin:15px;font-size:40px;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif}.allth[data-v-77fc6061]{padding-left:15px}.allth[data-v-77fc6061],.title[data-v-77fc6061]{font-size:30px;color:#000;width:auto;height:4m0px}.title[data-v-77fc6061]{background-color:#e0e0e0;padding:5px 5px 5px 15px;padding-right:15px!important;box-shadow:2px 2px 2px rgba(0,0,0,.5)}.img[data-v-77fc6061],.title[data-v-77fc6061]{border-radius:5px;transition:all .25s ease-in-out}.img[data-v-77fc6061]{margin:0 1.5rem 1.5rem 0;display:inline-block;padding:10px;box-sizing:border-box}",""]),t.exports=e},336:function(t,e,n){"use strict";n.r(e);n(37);var r=n(5),c=n(38),l=n.n(c),o={fetch:function(t){var e=t.store;return l.a.get("https://raw.githubusercontent.com/stacsnssce/webdata/master/gallery.json").then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data=n.data,t.next=3,e.commit("Gallery",data.gallery);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){}))},computed:{gallery:function(){return this.$store.state.gallery}},head:function(){return{title:"STACS Gallery",meta:[{hid:"description",name:"description",content:"Photo gallery showcasing events and activities of STACS"}]}}},d=(n(265),n(10)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"heading"},[t._v("Gallery")]),t._v(" "),t._l(t.gallery,(function(e){return n("section",{key:e.title,staticClass:"allth"},[n("h4",{staticClass:"title"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"allimg row"},t._l(e.images,(function(t){return n("img",{key:t,staticClass:"col img s12 m4 l3 card",attrs:{src:t}})})),0)])}))],2)}),[],!1,null,"77fc6061",null);e.default=component.exports}}]);