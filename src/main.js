// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './index.vue'
import mindex from './mindex.vue'
/*首页导航路由*/
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(iView);


import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';


// router.afterEach((to, from, next) => {
//     window.scrollTo(0, 0);
// });
/* eslint-disable no-new */
if(navigator.userAgent.search('Windows')!=-1){
  let container = () => import('./components/container.vue')
  let aboutUs = () => import('./components/homePageNavigation/aboutUs.vue')
  let web = () => import('./components/homePageNavigation/aboutUsMenu/web.vue')
  let bigData = () => import('./components/homePageNavigation/aboutUsMenu/bigData.vue')
  let dbaData = () => import('./components/homePageNavigation/aboutUsMenu/dbaData.vue')
  let destManage = () => import('./components/homePageNavigation/aboutUsMenu/destManage.vue')
  let itDesign = () => import('./components/homePageNavigation/aboutUsMenu/itDesign.vue')
  let javaDesign = () => import('./components/homePageNavigation/aboutUsMenu/javaDesign.vue')
  let move = () => import('./components/homePageNavigation/aboutUsMenu/move.vue')
  let net = () => import('./components/homePageNavigation/aboutUsMenu/net.vue')
  let workMan = () => import('./components/homePageNavigation/aboutUsMenu/workMan.vue')
  let workManage = () => import('./components/homePageNavigation/aboutUsMenu/workManage.vue')
  let OperationPlatform = () => import('./components/homePageNavigation/OperationPlatform.vue')
  let OpenPlatform = () => import('./components/homePageNavigation/OpenPlatform.vue')
  let VideoCloud = () => import('./components/homePageNavigation/VideoCloud.vue')
  let wisdom = () => import('./components/homePageNavigation/wisdom.vue')
  let hotel = () => import('./components/homePageNavigation/solution/hotel.vue')
  let meeting = () => import('./components/homePageNavigation/solution/meeting.vue')
  let city = () => import('./components/homePageNavigation/solution/city.vue')
  let fire = () => import('./components/homePageNavigation/solution/fire.vue')
  let help = () => import('./components/homePageNavigation/help.vue')
  let cooperation = () => import('./components/homePageNavigation/cooperation.vue')
  const routes = [
    /*添加导航路由*/
    { path: '/index', component: container },//首页内容区域
    {
      path:'/aboutUs',component:aboutUs,
      children:[
        {path:"/aboutUs",component:web},
        {path:"/bigData",component:bigData},
        {path:"/dbaData",component:dbaData},
        {path:"/destManage",component:destManage},
        {path:"/itDesign",component:itDesign},
        {path:"/javaDesign",component:javaDesign},
        {path:"/move",component:move},
        {path:"/net",component:net},
        {path:"/workMan",component:workMan},
        {path:"/workManage",component:workManage}
      ]
    },
    { path: '/product/OperationPlatform', component: OperationPlatform },
    { path: '/product/OpenPlatform', component: OpenPlatform },
    { path: '/VideoCloud', component: VideoCloud },
    { path: '/wisdom', component: wisdom },
    {path:'/help',component:help},
    {path:'/solution/',component:container},
    {path:'/solution/hotel',component:hotel},
    {path:'/solution/meeting',component:meeting},
    {path:'/solution/city',component:city},
    {path:'/solution/fire',component:fire},
    {path:'/cooperation',component:cooperation},
    {path:'/',redirect:'/index'} 
  ]
  const router = new VueRouter({
    routes
  })
  new Vue({
    router,
    el: '#app',
    template: '<index/>',
    components: { index }
  })
}else{
  let container = () => import('./mindex/components/container.vue')
  let OperationPlatform = () => import('./mindex/components/homePageNavigation/OperationPlatform.vue')
  let OpenPlatform = () => import('./mindex/components/homePageNavigation/OpenPlatform.vue')
  let help = () => import('./mindex/components/homePageNavigation/help.vue')
  let aboutUs = () => import('./mindex/components/homePageNavigation/aboutUs.vue')
  let cooperation = () => import('./mindex/components/homePageNavigation/cooperation.vue')
  let city = () => import('./mindex/components/homePageNavigation/solution/city.vue')
  let hotel = () => import('./mindex/components/homePageNavigation/solution/hotel.vue')
  let meeting = () => import('./mindex/components/homePageNavigation/solution/meeting.vue')
  const routes = [
    /*添加导航路由*/
    {path:'/',redirect:'/index'},
    {path:'/index', component: container },//首页内容区域
    {path:'/product/OperationPlatform', component: OperationPlatform },
    {path:'/product/OpenPlatform', component: OpenPlatform },
    {path:'/help',component:help},
    {path:'/aboutUs',component:aboutUs},
    {path:'/cooperation',component:cooperation},
    {path:'/solution/city',component:city},
    {path:'/solution/hotel',component:hotel},
    {path:'/solution/meeting',component:meeting},
  ]
  const router = new VueRouter({
    routes 
  })
  new Vue({
    router,
    el: '#app',
    template: '<mindex/>',
    components: { mindex }
  })
}

