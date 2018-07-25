<template>
<div>
	<home-header :city="city"></home-header>
	<home-swiper :list="swiperList"></home-swiper>
	<home-icons :list="iconList"></home-icons>
</div>
</template>
<script>
	//导入组件
	import HomeHeader from'@/pages/home/components/Header'
	import HomeSwiper from'@/pages/home/components/Swiper'
	import HomeIcons from'@/pages/home/components/Icons'
	import axios from'axios'
	export default{
		name:'Home',
		data(){
			return{
				city:'',
				swiperList:[],
				iconList:[]
			}
		},
		components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons
	},
	methods:{
		getHomeInfo(){
			axios.get('/api/index.json')
			
			.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc(res){
			res = res.data
			if(res.ret && res.data){
				// 可以定义一个res变量 省略res 直接用data.city
				// this.city = res.data.city
				const data = res.data
				this.city = data.city
				this.swiperList = data.swiperList
				this.iconList = data.iconList
			}
			}
		},
	mounted() {
		this.getHomeInfo()
	}
}
</script>
<style >
	
</style>