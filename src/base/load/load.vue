<template>
	
	<div class="loading">
		<img width="25" height="25" src="" alt="加载中">
		<p>{{loadText}}</p>
	</div>


</template>
<script>
	export default {
		props: {
			loadText:{
				type: String,default:"正在带你飞......"
			}
		}
		// },
		// data:function(){
		// 	return {
		// 		loadText:this.loadText
		// 	}
		// }
	}
</script>
<style scoped lang="less" ref="stylesheet/less">
  @import "~common/less/variable.less";
.loading {
	width: 100%;
	 
    text-align: center;
    img{
    	width: 25px;
    	height: 25px;
    }
    p {
		
      font-size: @font-size-small;
      color: @color-text-l;
    }

}

  
	

</style>
 