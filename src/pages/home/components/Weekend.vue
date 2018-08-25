<template>
 <div>
   <div class="title">周末去哪儿</div>
   <ul>
   	<!-- 循环  recommendList  的img title desc-->
		<li class="item border-bottom" v-for="item of recommendList">	
			<div class="item-img-wrapper">
		   <img class="item-img" :src="item.imgUrl">
		</div>
	<div class="item-info">
		<p class="item-title">{{item.title}}</p>
		<p class="item-desc">{{item.desc}}</p>
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
				"imgUrl":"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"title":"北京天安门",
				"desc":"东方宫殿建筑代表，世界宫殿建筑典范"
			},{
				"id":"0002",
				"imgUrl":"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"title":"北京天安门",
				"desc":"东方宫殿建筑代表，世界宫殿建筑典范"
			},{
				"id":"0003",
				"imgUrl":"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
				"title":"北京天安门",
				"desc":"东方宫殿建筑代表，世界宫殿建筑典范"
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
		// 文字缩进
		text-indent:.2rem
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:33.9%
		
	.item-img
		width:100%
	.item-info
		// flex等于1  就是等分模块
		padding:.1rem
	.item-title
		line-height:.54rem
		font-size:.32rem
		ellipsis()
	.item-desc
		line-height:.4rem
		color:#ccc
		ellipsis()
</style>