<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
      
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
            <keep-alive>
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <!-- 添加needsclick类名 -->
                <img class="needsclick"  @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </slider>
               </keep-alive>
        </div>
 
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li @click="selectItem(item)" v-for="item in discList" class="item">
              <!-- 遍历图标 -->
              <div class="icon">
                <img width="70" height="70" v-lazy="item.imgurl">
              </div>
              <!-- 遍历文字标题进行html转义 -->
              <div class="text">
                <h2 class="title" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <app-load></app-load>
<!--       <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div> -->
    </scroll>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script type="text/ecmascript-6">

  import Slider from 'base/slider/slider'
  import {getRecommend, getDiscList} from 'api/recommend.js'
  import {ERR_OK} from 'api/config'  
  import AppLoad from 'base/load/load'
  // 插槽SCROLL,必要条件,在外边有wrapper
  import Scroll from 'base/scroll/scroll'
  // import {playlistMixin} from 'common/js/mixin'
  // import {mapMutations} from 'vuex'
  export default {
    // mixins: [playlistMixin],
    data() {
      return {
        recommends: [],
        discList: []
      }
    },
    created() {
      this._getRecommend()

      this._getDiscList()
    },
    methods: {
      // handlePlaylist(playlist) {
      //   const bottom = playlist.length > 0 ? '60px' : ''

      //   this.$refs.recommend.style.bottom = bottom
      //   this.$refs.scroll.refresh()
      // },
      // loadImage() {
      //   if (!this.checkloaded) {
      //     this.checkloaded = true
      //     this.$refs.scroll.refresh()
      //   }
      // },
      // selectItem(item) {
      //   this.$router.push({
      //     path: `/recommend/${item.dissid}`
      //   })
      //   this.setDisc(item)
      // },
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },

      _getDiscList() {
        getDiscList().then((res) => {

          if (res.code === ERR_OK) {
            console.log(res);
            this.discList = res.data.list
          }else{
             console.log("失败了");
          }

        })
      },

      // 图片加载成功的方法
      loadImage(){
          if (!this.checkloaded) {
          this.checkloaded = true
          this.$refs.scroll.refresh()
        }
      }


      // ...mapMutations({
      //   setDisc: 'SET_DISC'
      // })
    },
    components: {
      Slider,
      AppLoad,
      Scroll
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable";

  .recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content{
      height: 100%;
      overflow: hidden;
      .slider-wrapper{
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .recommend-list{
        .list-title{
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: @font-size-large;
          color: @color-theme;
        }
        .item{
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
          .icon{
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
            // border: 1px solid #000;
          }
          .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: @font-size-medium;
          }
            .title{
              margin-bottom: 10px;
              color: @color-text;
              font-size: @font-size-large;
            }
            .desc{
              color: @color-text-ll;
            }
        }
      }
      .loading-container{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>