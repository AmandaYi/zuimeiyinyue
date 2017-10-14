import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import Vrouter from './router/index.js'
import store from "./store/index.js"
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
// 这里简直是所有的坑,

// 这些键是固定不变的,我一直都是想改变,所有就会这里找不到哪里找不到
new Vue({
  el: '#musicApp',
  router: Vrouter,
  store,
  render: h => h(App)
})
