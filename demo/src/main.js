// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from  'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import VueResource from 'vue-resource'
//import axios from 'axios'
Vue.use(ElementUI);
Vue.use(VueRouter);
//Vue.use(VueResource);
//Vue.prototype.$http = axios;
//Vue.prototype.baseURL = process.env.API_ROOT;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
