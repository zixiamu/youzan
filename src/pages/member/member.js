

//使用vue-router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes =[{
  path:'/',
  component:require('./components/member.vue' )
},{
  path:'/address',
  component:require('./components/address'),
  children:[{
    path:'',
    // component:require('./components/all')
    redirect:'all'
  },{
    path:'all',
    name:'all',
    component:require('./components/all')
  },{
    path:'form',
    name:'form',
    component:require('./components/form')
  }]
  }]
//创建实例
let router = new Router({
    routes
})
//根组件注入
new Vue({
  el:'#app',
  router
})
