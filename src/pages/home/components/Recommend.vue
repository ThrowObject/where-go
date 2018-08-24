<template>
 <div>
   <div class="title">热销推荐</div>
   <ul>
   	<!-- 循环  recommendList  的img title desc-->
		<li class="item border-bottom" v-for="item of recommendList" key="item.id">	
		   <img class="item-img" :src="item.imgUrl">
	<div class="item-info">
		<p class="item-title">{{item.title}}</p>
		<p class="item-desc">{{item.desc}}</p>
		<button class="item-button">查看详情</button>
	</div>
	</li>
</ul>
</div>
</template>
<script>
	export default{
		name:'HomeRecommend',
		data () {
			return {
				"recommendList": [{
				"id":"0001",
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg",
				"title":"南山滑雪场",
				"desc":"北京专业级滑雪圣地"
			},{
				"id":"0002",
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg",
				"title":"南山滑雪场",
				"desc":"北京专业级滑雪圣地"
			},{
				"id":"0003",
				"imgUrl":"http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg",
				"title":"南山滑雪场",
				"desc":"北京专业级滑雪圣地"
			}]
		}
	}
}
</script>
<style lang="stylus" scoped>
	.title
		margin-top:.2rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item
		overflow:hidden
		display:flex
		height:1.9rem
	.item-img
		width:1.7rem
		height:1.7rem
		padding:0.1rem
	.item-info
		// flex等于1  就是等分模块
		flex:1
		padding:.1rem
		min-width:0
	.item-title
		line-height:.54rem
		font-size:.32rem
		ellipsis()
	.item-desc
		line-height:.4rem
		color:#ccc
		ellipsis()
	.item-button
		@import '~styles/mixins.styl'
		margin-top:.2rem
		background:#ff9300
		padding:0 .1rem
		border-radius: .06rem
</style>