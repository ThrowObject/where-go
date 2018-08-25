<template>
	<div class="list" ref="wrapper">
	  <div>
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
			<div class="button-warpper">
			<div class="button">北京</div>
			</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
			<div class="button-warpper">
			<div class="button">北京</div>
			</div>
			<div class="button-warpper">
			<div class="button">北京</div>
			</div>
			<div class="button-warpper">
			<div class="button">北京</div>
			</div>
			<div class="button-warpper">
			<div class="button">北京</div>
			</div>
			<div class="button-warpper">
			<div class="button">北京</div>
			</div>
			<div class="button-warpper">
			<div class="button">北京</div>
			</div>
			<div class="button-warpper">
			<div class="button">北京</div>
			</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
			</div>
				<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
				<div class="item  border-bottom">阿拉尔</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	import Bscroll from 'better-scroll'
	export default{
		name:'CityList',
		mounted () {
			// 创建scroll实例属性他等于new一个Bscroll同时把$refs.warpper传入进去
			this.scroll = new Bscroll(this.$refs.wrapper)
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
	// border-color: #ccc 下划线
	&:before
		border-color: #ccc
	&:after
		border-color: #ccc	
.border-bottom
	&:before
		border-color: #ccc
// 为了list块元素不撑出高度 使用overflow 和绝对定位
// overflow内容会被修剪，并且其余内容是不可见的。
.list
	overflow:hidden
	position: absolute
	top: 1.58rem
	left: 0
	right: 0
	bottom: 0
 .title
	line-height: .54rem
	background: #eee
	padding-left: .2rem
	color: #666
	font-size: .26rem
 .button-list
	overflow:hidden
	padding: .1rem .6rem .1rem .1rem
	 .button-warpper
		float: left
		width: 33.33%
		 .button
			margin: .1rem
			padding: .1rem 0
			text-align: center
			border: .02rem solid #eee
			border-radius: 0.6rem
 .item-list
	.item
		line-height: .76rem
		color: #666
		padding-left: .2rem
</style>