<template>
<div class="header">
<div class="header-left">
	<div class="iconfont back-icon" >&#xe624;</div>
</div>
<div class="header-input"><span class="iconfont">&#xe615;</span>请输入城市/主题/景点</div>
<div class="header-right">{{this.city}}<span class="iconfont  arrow-icon">&#xe64a;</span></div>

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
 		.arrow-icon
 			font-size:.24rem
	
</style>