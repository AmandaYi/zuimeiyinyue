<template>
	<transition  name="toLeft" mode="out-in">
    <music-list class="singer-msg" :title="title" :bg-image="bgImage" :songs="songs"></music-list>
	</transition>
	

</template>
<script type="text/ecmascript-6">
	// 一个vuex的语法糖,胜过$stroe.一大堆
	import musicList  from "components/music-list/music-list.vue"
	import {mapGetters} from "vuex";

	import {getSingerMsg} from "api/singer.js";

  	import {createSong} from 'common/js/song.js'

	export default {
		data(){
			return {
				songs: []
			}
		},
		components:{
			musicList
		},
		computed: {	
			...mapGetters(['singer'])
		},
		created(){
			// console.log(this.singer)
			this.__getSingerMsg();
		},
		methods:{
			__getSingerMsg(){
				if(!this.singer.singerMid) {
					this.$router.push("/singer");
					return false;
				}
				getSingerMsg(this.singer.singerMid).then((result)=>{		
					 if(result.code === 0) {
					 	this.songs = this.__dealSingerMsg(result.data.list)
					 	console.log(this.songs);
					 }
				})
			},
			// 处理数据结构
			__dealSingerMsg(arr){
				let singerMsg = [];
				console.log(arr)
				arr.forEach( (item) => {
					let {musicData} = item;
					if (musicData.songid  && musicData.albummid) {
					  singerMsg.push(createSong(musicData))
					}
				} )
		        return singerMsg;

			}

		}
	}

</script>
<style lang="less">
	.singer-msg{
		position: fixed;
		z-index: 111;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: pink;
	}


	// 动画
	.toLeft-enter-active,.toLeft-leave-active{
		transition: all 0.3s;
	}	
	.toLeft-enter,.toLeft-leave-to{
		transform: translate3d(100%,0,0);
	}

</style>