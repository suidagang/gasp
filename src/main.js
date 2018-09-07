import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//封装axios  ajax请求
import axios from 'axios'
import {post,get} from './axios/api'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;

//去除覆盖浏览器默认样式
import "./less/framework.less";

import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
