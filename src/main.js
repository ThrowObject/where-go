// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
Vue.config.productionTip = false
// 使用fastClick 解决移动端300延迟
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
	// el 挂载index.html app元素
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
