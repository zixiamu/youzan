webpackJsonp([3],{0:function(e,t,a){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",rank:"/category/rank",subList:"/category/subList",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+n[s]);t.a=n},10:function(e,t){},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom-nav"},[a("ul",[e._l(e.navConfig,function(t,n){return a("li",{class:{active:e.curIndex===n},on:{click:function(a){e.changeNav(t,n)}}},[a("a",[a("i",{class:t.icon}),a("div",[e._v(e._s(t.name))])])])}),e._v(">\n  ")],2)])},staticRenderFns:[]}},113:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(71),s=(a.n(n),a(86)),i=a.n(s),r=a(13),o=(a.n(r),a(83)),c=(a.n(o),a(3)),d=a(2),l=a.n(d),u=a(0),f=a(8),p=a.n(f),m=a(22),v=a.n(m);c.default.use(i.a);new c.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null},components:{Foot:p.a,Swipe:v.a},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var e=this;this.allLoaded||(this.loading=!0,l.a.get(u.a.hotLists,{pageNum:this.pageNum,pageSize:6}).then(function(t){var a=t.data.lists;a.length<e.pageSize&&(e.allLoaded=!0),e.lists?e.lists=e.lists.concat(a):e.lists=a,e.loading=!1,e.pageNum++}))},getBanner:function(){var e=this;l.a.get(u.a.banner).then(function(t){e.bannerLists=t.data.lists})}}})},13:function(e,t){},22:function(e,t,a){function n(e){a(39)}var s=a(6)(a(29),a(40),n,"data-v-0c8c7bd0",null);e.exports=s.exports},29:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(69),s=a(38);a.n(s);t.default={name:"swipe",props:{lists:{type:Array,required:!0},name:{}},mounted:function(){new n.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}},38:function(e,t){},39:function(e,t){},40:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},e._l(e.lists,function(e){return a("div",{staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"js-no-follow",attrs:{href:e.clickUrl}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}})])])})),e._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},71:function(e,t){},8:function(e,t,a){function n(e){a(10)}var s=a(6)(a(9),a(11),n,"data-v-7b656d70",null);e.exports=s.exports},83:function(e,t){},9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(12),s=a.n(n),i=s.a.parse(location.search.substr(1)),r=i.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];t.default={data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}}}},[113]);
//# sourceMappingURL=index.e66efedc8035e682bf80.js.map