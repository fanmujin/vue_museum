import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import admin from "../components/admin"
import cultureType from "../components/CultureType"
import culture from "../components/Culture"
import address from "../components/addres"
import news from "../components/news"
import display from "../components/diaplay"
import digital from "../components/digital"
import music from "../components/music"
import report from "../components/introduction"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Admin',
      component:admin
    },{
      path:'/cultureType',
      component:cultureType
    },
    {
      path:'/culture',
      component:culture
    },
    {
      path:'/addres',
      component:address
    },
    {
      path:'/new',
      component:news
    },
    {
      path:'/digital',
      component:digital
    },
    {
      path:'/display',
      component:display
    },
    {
      path:'/music',
      component:music
    },
    {
      path:'/report',
      component:report
    }
  ],
  mode:'history'//处理路由不显示
})
