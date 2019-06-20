import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import moment from 'moment' // 加载moment时间日期处理插件
Vue.prototype.$moment = moment;

import vconsole from 'vconsole' // 移动端console调试日志
new vconsole();

import api from './server-api/api.js'   // 请求后端的服务器接口url地址
import flexible from './assets/js/flexible.js' // 引入rem换算px脚本  640设计稿 1rem=100px
import 'vant/lib/button/style'; // 引入vant全局内置样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
