(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{301:function(t,e,n){var content=n(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("790a7675",content,!0,{sourceMap:!1})},302:function(t,e,n){"use strict";var o=n(301);n.n(o).a},303:function(t,e,n){(e=n(11)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},304:function(t,e,n){"use strict";var o=n(0).a.extend({props:{icon:{type:String}}}),r=(n(302),n(8)),c=n(44),l=n.n(c),d=n(289),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;l()(component,{VIcon:d.a})},345:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/26","url":"https://www.seisakukikaku.metro.tokyo.lg.jp/information/message.html","text":"１都４県知事共同メッセージ"},{"date":"2020/03/26","url":"https://www.seisakukikaku.metro.tokyo.lg.jp/information/20200326youbou.html","text":"新型コロナウイルス感染症への対応に関する緊急要望（令和2年３月２６日）"}]}')},353:function(t,e,n){var content=n(468);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5abdac94",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";var o={components:{MapCard:n(318).a}},r=n(8),c=n(44),l=n.n(c),d=n(297),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"12"}},[e("map-card",{attrs:{title:"",caption:this.$t("※7:30〜8:30の平均値"),"title-id":"tokyo-city-heatmap","chart-id":"tokyo-city-chart","map-id":"tokyo-city-map","initial-bounds":[[139.695239,35.676437],[139.773774,35.694493]],"map-height":640,"map-options":{interactive:!0},unit:"人",url:"https://ds.yahoo.co.jp/datapolicy/","source-link-header":this.$t("※本データは2020年3月31日までの掲載となります"),"heatmap-legend":[2e4,4e4,6e4],"link-string":this.$t("ヤフー・データソリューション"),date:""}})],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:d.a})},467:function(t,e,n){"use strict";var o=n(353);n.n(o).a},468:function(t,e,n){(e=n(11)(!1)).push([t.i,".MainPage .DataBlock[data-v-52592c90]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:4px 8px}}",""]),t.exports=e},552:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(304),c=n(305),l=n(345),d=n(371),h=o.a.extend({components:{PageHeader:r.a,TokyoCityMapCard:d.a},data:function(){var data={Data:c,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("東京都23区の人口推移（参考値）"),date:c.lastUpdate},newsItems:l.newsItems};return data},head:function(){return{title:this.$t("東京都23区の人口推移（参考値）")}}}),m=(n(467),n(8)),f=n(44),v=n.n(f),x=n(298),component=Object(m.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MainPage"},[e("page-header",{attrs:{icon:this.headerItem.icon}},[this._v("\n    "+this._s(this.headerItem.title)+"\n  ")]),this._v(" "),e("v-row",{staticClass:"DataBlock"},[e("tokyo-city-map-card")],1)],1)}),[],!1,null,"52592c90",null);e.default=component.exports;v()(component,{VRow:x.a})}}]);