<template>
	<div class="wrapper">
	 <swiper :options="swiperOption " v-if="showSwiper">
	 	<!-- v-for遍历swiperList做循环 循环每一项展示一个图片 循环里面最好有个key值 -->
    <swiper-slide v-for="item of list" :key="item.id">
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
		props:{
			list:Array
		},
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
	      	}
	      }
		},
		//computed 计算属性 让在获取ajax数据时 图片能够按顺序浏览
		computed:{
			showSwiper(){
				return this.list.length
			}
		}
	}
</script>
<style lang="stylus" scoped>
// >>>  穿透 不受scoped效果限制
  .wrapper >>> .swiper-pagination-bullet-active
  	background:#fff !important
.wrapper
	width 100%
    height 0
    padding-bottom 26.1%
    overflow hidden
	background:#fff
	.swiper-img
		width:100%
</style>

