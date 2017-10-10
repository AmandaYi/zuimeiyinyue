<template>
	

</template>
<script>
	import {mapGetters} from "vuex"

	export default {
		computed : {



			...mapGetters([
				'singer'
			])
		},
		created(){
			console.log(this.singer)
		}
	}

</script>
<style></style>