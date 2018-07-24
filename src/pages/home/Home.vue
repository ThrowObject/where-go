<template>
<div>
	<home-header></home-header>
	<home-swiper></home-swiper>
	<home-icons></home-icons>
</div>
</template>
<script>
	//导入组件
	import HomeHeader from'@/pages/home/components/Header'
	import HomeSwiper from'@/pages/home/components/Swiper'
	import HomeIcons from'@/pages/home/components/Icons'
	export default{
		name:'Home',
		// 导入组件后声明组件
		components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons
	}
	}
	
</script>
<style >
	
</style>