<template>
  <div id="musicApp">
   <!-- 头部 -->
   <app-header></app-header>
   <!-- 主导航   -->
   <app-nav></app-nav>
   <!-- 主路由 -->
   <transition name="tabContent" mode="out-in">
      <router-view></router-view>
   </transition>
  </div>
</template>

<script type="text/ecmascript-6">
// 头部
import AppHeader from "components/appheader/appheader"
// nav部分
import AppNav from "components/appnav/appnav"

export default {
  components: {
    // 头部
    AppHeader,
    // nav部分
    AppNav
  }
}
</script>
<style scope lang="less">
  .tabContent-enter-active,.tabContent-leave-active{
  transition: all 0.5s;
  }
  .tabContent-enter,.tabContent-leave-to{
    transform: translate3d(-100%,0,0);
  }
</style>