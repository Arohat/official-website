(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(t,r,e){var content=e(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("4cf6854e",content,!0,{sourceMap:!1})},251:function(t,r,e){"use strict";var n=e(200);e.n(n).a},252:function(t,r,e){(r=e(22)(!1)).push([t.i,".wrapper{margin:12px auto}.wrapper .award-title{font-size:32px;font-weight:bolder}.wrapper .award-card{width:90%;padding:5%;cursor:pointer;box-shadow:0 0 20px rgba(73,72,72,.2);transition:.2s linear;border-radius:25px}.wrapper .award-card .card{max-height:250px!important}.wrapper .award-card .card:hover{transform:scale(1.01);box-shadow:0 0 20px hsla(0,0%,39.2%,.5)}.wrapper .award-card .award-image{max-width:inherit!important;padding:0!important}.wrapper .award-card .award-image *{padding:0!important}.wrapper .award-card .award-image .progressive-image-main,.wrapper .award-card .award-image .progressive-image-placeholder,.wrapper .award-card .award-image .progressive-image-wrapper{max-width:inherit!important;padding:0!important}.wrapper .award-card .award-image img{width:100%;-o-object-fit:cover;object-fit:cover}.wrapper .award-card .card-content{background:transparent;padding:0 5px;margin:0;font-size:18px;font-weight:400;text-align:center;color:#000}",""]),t.exports=r},328:function(t,r,e){"use strict";e.r(r);e(25),e(24),e(14),e(39),e(37);var n=e(5),c=e(38),o=e.n(c),d=e(192),w={fetch:function(t){var r=t.store;return o.a.get("https://api.github.com/repos/stacsnssce/webdata/contents/awards").then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data=e.data,t.t0=r,t.next=4,Promise.all(data.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(element){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(element.download_url).then((function(t){var r=d(t.data);return{attribute:r.attributes,desc:element.sha,body:r.body,id:element.name.slice(0,-3)}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()));case 4:t.t1=t.sent,t.t0.commit.call(t.t0,"Activities",t.t1);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())},computed:{awards:function(){return this.$store.state.activities}},head:function(){return{title:"Awards - STACS - NSS College of Engineering",meta:[{hid:"description",name:"description",content:"The Students Association of Computer Science (STACS) recognises the achievements of students and appreciate them for gaining the awards through their efforts and talents "}]}}},l=(e(251),e(10)),component=Object(l.a)(w,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("section",{staticClass:"wrapper container"},[e("h1",{staticClass:"award-title center-align"},[t._v("Achievements")]),t._v(" "),e("div",{staticClass:"container award-card"},[e("div",{staticClass:"row"},t._l(t.awards,(function(r){return e("div",{key:r.id,staticClass:"col s12"},[e("div",{staticClass:"card small"},[e("nuxt-link",{attrs:{to:{name:"awards-desc",params:{desc:r.desc,id:r.id}}}},[e("div",{staticClass:"card-image"},[e("progressive-img",{staticClass:"award-image center-align",attrs:{src:""+r.attribute.cover,placeholder:"/imageplaceholder800x500.png",blur:"30",delay:"200"}})],1),t._v(" "),e("div",{staticClass:"card-content"},[e("h5",[e("b",[t._v(t._s(r.attribute.title))])])])])],1)])})),0)])])}),[],!1,null,null,null);r.default=component.exports}}]);