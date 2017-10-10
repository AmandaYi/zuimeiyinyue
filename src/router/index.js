import Vue from 'vue'
import VueRouter from 'vue-router'
// 推荐页面
import Recommend from 'components/recommend/recommend.vue'
// 歌手页面
import Singer from 'components/singer/singer.vue'
// 排行页面
import Rank from 'components/rank/rank.vue'
// 搜索页面
import Search from 'components/search/search.vue'



import SingerMsg from 'components/singermsg/singermsg.vue'
Vue.use(VueRouter)

export default new VueRouter({
	// 强制设定H5
	mode: "history",

  routes: [
  // 默认进入路由
  	{
  		path: "/",
  		redirect: '/recommend'
  	},
    {
    // 推荐页面
      path: '/recommend',
      component: Recommend
    },
    {
    // 歌手页面
      path: '/singer',
      component: Singer,
      children:[
        {
          path: ':id',
          component: SingerMsg
        }
      ]
    },
    {
    // 排行页面
      path: '/rank',
      component: Rank
    },
     {
     // 搜索页面
      path: '/search',
      component: Search
    }
  ]
})
