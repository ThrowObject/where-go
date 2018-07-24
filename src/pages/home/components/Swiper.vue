<template>
	<div class="wrapper">
	 <swiper :options="swiperOption">
	 	<!-- v-for遍历swiperList做循环 循环每一项展示一个图片 循环里面最好有个key值 -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
    	<!-- 图片地址 绑定内容img.Url -->
    <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
	//导出这个组件 给这个组件起个名字HomeSwiper
	export default{
		name:'HomeSwrper',
		data(){
	      return{
	      	swiperOption:{
	      		notNextTick:true,
	      		pagination:'.swiper-pagination',
	      		// loop 让轮播支持循环轮播
	      		loop:true,
	      		autoplay:3000,
	      	// 	 // autoplay: true,//可选选项，自动滑动
	      	// autoplay:{
        //     stopOnLastSlide:false,
        //     disableOnInteraction:true,
        //     }
	      	},
	      	swiperList:[{
	      		id:'0001',
	      		imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/a9/21ee6215ad2cd402.jpg_890x330_6ed4ff05.jpg'
	      	},{
	      		id:'0002',
	      		imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/c7/ab25030019e67a02.jpg_890x330_0ebfc81f.jpg'
	      	},{
	      		id:'003',
	      		imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/ae/141a46f018aef002.jpg_890x330_dbaeeb01.jpg'
	      	}]
	      }
		}
	}
</script>
<style lang="stylus" scoped>
// >>>  穿透 不受scoped效果限制
  .wrapper >>> .swiper-pagination-bullet-active
  	background:#fff !important
.wrapper
	width:100%
	height:178.72px
	
	background:#fff
	.swiper-img
		width:100%
</style>

