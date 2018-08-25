<!-- 这是一个区域列表字母组件 -->
<template>
<ul class="list">
	<li class="item">A</li>
	<li class="item">A</li>
	<li class="item">A</li>
	<li class="item">A</li>
	<li class="item">A</li>
	<li class="item">A</li>
</ul>
</template>
<script>
	export default{
		name:'CityAlphabet'
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	// flex垂直居中 flex盒子布局
	display: flex
	flex-direction: column
	justify-content: center
	position: absolute
	top: 1.58rem
	right: 0
	bottom: 0
	width: .4rem	
.item
	// 文字水平居中
	line-height: .4rem
	text-align: center
	color:green
</style>