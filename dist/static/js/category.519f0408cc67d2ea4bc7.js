webpackJsonp([6],{0:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",rank:"/category/rank",subList:"/category/subList",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+n[s]);e.a=n},10:function(t,e){},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",[t._l(t.navConfig,function(e,n){return a("li",{class:{active:t.curIndex===n},on:{click:function(a){t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),a("div",[t._v(t._s(e.name))])])])}),t._v(">\n  ")],2)])},staticRenderFns:[]}},111:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(13),s=(a.n(n),a(75)),r=(a.n(s),a(3)),i=a(2),c=a.n(i),o=a(7),d=a(0);new r.default({el:"#app",data:{topLists:null,topIndex:0,subData:null,rankData:null},created:function(){this.getTopList(),this.getSubList(0,0)},methods:{getTopList:function(){var t=this;c.a.get(d.a.topList).then(function(e){t.topLists=e.data.lists}).catch(function(t){})},getSubList:function(t,e){var a=this;this.topIndex=e,0===e?this.getRank():c.a.get(d.a.subList,{id:t}).then(function(t){a.subData=t.data.data}).catch(function(t){})},getRank:function(){var t=this;c.a.get(d.a.rank).then(function(e){t.rankData=e.data.data}).catch(function(t){})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},mixins:[o.a]})},13:function(t,e){},7:function(t,e,a){"use strict";var n=a(8),s=a.n(n),r={filters:{currency:function(t){var e=""+t;if(e.indexOf(".")>-1){var a=e.split(".");return a[0]+"."+(a[1]+"0").substr(0,2)}return e+".00"}},components:{Foot:s.a}};e.a=r},75:function(t,e){},8:function(t,e,a){function n(t){a(10)}var s=a(6)(a(9),a(11),n,"data-v-7b656d70",null);t.exports=s.exports},9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(12),s=a.n(n),r=s.a.parse(location.search.substr(1)),i=r.index,c=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];e.default={data:function(){return{navConfig:c,curIndex:parseInt(i)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}}}},[111]);
//# sourceMappingURL=category.519f0408cc67d2ea4bc7.js.map