<template>
	  <div class="singer" ref="singer">
	    <singer-list-view :data="singers" ref="list"></singer-list-view>
	  </div>
  <div>
 	
  </div>
</template>

<script type="text/ecmascript-6">
  	import singerListView from 'base/singerListView/singerListView';
	import { getSingerList } from "api/singer.js";
	export default {


		created () {
			this._getSingerList();

		},
		methods:{
			_getSingerList(){
				getSingerList().then( (result) => {
					console.log(result.data.list);
					console.log(this._dealSingList(result.data.list))

				} )
			},

			// 处理获取到的歌手列表数据,因为数据结构明显和我前端要渲染的数据结构不一样呀,要是是自己的后端的话,说一句就给我渲染了哈哈哈
			_dealSingList(singerArr) {
				// 1.定 义一个对象用来纯数据
				// 2.热门数据为11条
				// 3.然后其他是A_Z,用match(/\A-Z\/)
				var singerPage = {
		          hot: {
		            title: '热门',
		            items: []
		          }
		        };
		        // 遍历数据
		        // serverSingerList 服务器获取的对象,index第几条数据
		        // singerArr是数组数据
		        // serverSingerList = result.data.list下面的每一个对象 18行的
		    	singerArr.forEach(function(serverSingerList,index) {
		    		// console.log(serverSingerList)
				// 2.热门数据为11条
		    		if(index < 11) {
		    			singerPage.hot.items.push({
		    				singerName: serverSingerList.Fsinger_name,
		    				// 歌手id "002J4UUk29y8BY" 用来找图片
		    				singerMid: serverSingerList.Fsinger_mid,
		    				// 歌手头像
		    				singerAvatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${serverSingerList.Fsinger_mid}.jpg?max_age=2592000`

		    			})
		    		}

		    		// 拼接字符串A-Z,singerFirstWord歌手的首字母
		    		let singerFirstWord = serverSingerList.Findex
 					// 遍历加入push到一个A-Z的数组里面
			          if (!singerPage[singerFirstWord]) {
				          singerPage[singerFirstWord] = {
				           title: singerFirstWord,
				           items: []
				         }
				      }
				    // 加入到数组
			 	 singerPage[singerFirstWord].items.push({
    				singerName: serverSingerList.Fsinger_name,
    				// 歌手id "002J4UUk29y8BY" 用来找图片
    				singerMid: serverSingerList.Fsinger_mid,
    				// 歌手头像
    				singerAvatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${serverSingerList.Fsinger_mid}.jpg?max_age=2592000`
    			})

		    	})

		    	// console.log(singPage)

		    	// 对数据进行排序
		    	let [singerHot, singerListAZ] = [[],[]];
		    	// console.log(singerHot);
		    	for (let k  in singerPage) {
		    		let itemValue = singerPage[k];
		    		if(itemValue.title === "热门" ){
		    			// console.log("热门");
		    			singerHot.push(itemValue);
		    		}else if(itemValue.title.match(/[a-zA-Z]/)){
		    			// console.log("A-Z");
		    			singerListAZ.push(itemValue);  			
		    		}

		    	}

		    	// 1. 单独对A-Z排序,
		    	// 2. 最后把singerHot添加到A-Z的前面
		    	singerListAZ.sort(function (a,b) {
		    		// 正序 a-b
		    		return a.title.charCodeAt(0) -  b.title.charCodeAt(0);
		    	})
		    	// 合并数组
		    	singerPage = singerHot.concat(singerListAZ);





		    	return singerPage;
			}

		}
	}
</script>

<style lang="less" rel="stylesheet/less">
</style>