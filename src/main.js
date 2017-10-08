import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import Vrouter from './router/index.js'
Vue.config.productionTip = false
// 鼠标延迟200ms解决
import fastclick from 'fastclick'

fastclick.attach(document.body);

// 导入主样式
import "common/less/index.less";

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
	preLoad: 1.1,
  	loading: require("./base/load/loading.gif"),
 	attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#musicApp',
  router: Vrouter,
  render: h => h(App)
})
