<template>
<div class="header">
<div class="header-left">
	<div class="iconfont back-icon" >&#xe624;</div>
</div>
<div class="header-input"><span class="iconfont">&#xe615;</span>请输入城市/主题/景点</div>
<router-link to='/city'><div class="header-right">{{this.city}}<span class="iconfont  arrow-icon">&#xe64a;</span></div></router-link>
<!-- 点击header-right时使用 router-link做页面跳转 router-link是vue里面帮助我们做页面跳转的内设组件 to属性就是点击时候所跳转的页面-->
</div>
</template>
<script>
	export default{
	name:'HomeHeader',
	props:{
		city:String
	}
}
</script>
<style lang="stylus" scoped>
@import'~styles/varibles.styl'
 .header
 	display:flex
 	line-height:.86rem
 	background:#00bcd4
 	color:#fff
 	.header-left
 		width:.64rem
 		float:left
 		.back-icon
 			text-align:center
 			font-size:.4rem
 	.header-input
 		flex:1
 		height:.54rem
 		line-height:.64rem
 		margin-top:.12rem
 		margin-left:.4rem
 		padding-left:.2rem
 		background:#fff
 		border-radius: .1rem
 		width:1.24rem
 		float:right
 		text-align:left
 		color:#ccc
 	.header-right
 		width:1.24rem
 		float:right
 		text-align:center
 		color:#fff
 		.arrow-icon
 			font-size:.24rem
	
</style>