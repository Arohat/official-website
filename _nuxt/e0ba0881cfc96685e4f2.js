(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{213:function(t,e,n){var content=n(328);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5ed1098e",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";var r=n(213);n.n(r).a},328:function(t,e,n){(e=n(22)(!1)).push([t.i,".description{box-sizing:border-box;min-width:200px;margin:0;padding-bottom:200px}.description .description-cover{background-position-x:center;background-size:100% 350px;background-repeat:no-repeat;align-self:center}.description .description-content{margin:12px auto;padding:20px 0;box-shadow:0 0 10px rgba(73,72,72,.2);transition:.1s linear;border-radius:25px;top:200px;cursor:pointer}.description .description-content:hover{scale:1.02;box-shadow:0 0 30px hsla(0,0%,39.2%,.2)}.description .description-content .description-text{padding:0 40px;margin:0 auto;justify-content:center;text-align:justify}.description .description-content .description-text .description-header{font-weight:700;text-align:center}.description .description-content .description-text .description-date{text-align:center;font-size:1.2em;font-style:italic;color:#554f4f}",""]),t.exports=e},341:function(t,e,n){"use strict";n.r(e);n(37);var r=n(5),o=n(38),c=n.n(o),d=n(192),l=n(198)({html:!0,typographer:!0}),x={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,!(r=t.payload)){e.next=5;break}return e.abrupt("return",{title:r.title,content:r.body});case 5:return e.next=7,c.a.get("https://raw.githubusercontent.com/stacsnssce/webdata/master/awards/".concat(n.id,".md")).then((function(t){var e=d(t.data);return{title:e.attributes,content:l.render(e.body)}}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{content:""}}},f=(n(327),n(10)),component=Object(f.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"description"},[n("div",{staticClass:"description-cover",style:"background-image: url('"+t.title.cover+"');"},[n("div",{staticClass:"container card description-content"},[n("div",{staticClass:"col description-text"},[n("h3",{staticClass:"container description-header"},[n("b",[t._v(t._s(t.title.title))])]),t._v(" "),t._v("\n        "+t._s()+"\n        "),n("div",[t._v("\n          "+t._s()+"\n          "),n("div",{domProps:{innerHTML:t._s(t.content)}})])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);