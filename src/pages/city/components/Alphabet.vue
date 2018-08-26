<!-- 这是一个区域列表字母组件 -->
<template>
<ul class="list">
	<li class="item" v-for="item of letters" :key="item" 
	@touchstart="handleTouchStart"
	@touchMove="handleTouchMove"
	@touchhend="handleletterClick"
	@click="handleLetterClick"
	>
	{{item}}</li>
</ul>
</template>
<script>
	export default{
		name:'CityAlphabet',
		// Alphabet.vue 接收cities的一个对象object 就可以做循环了
		props: {
			cities: Object
		},
		computed: {
			letters(){
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters
			}
		},
		data () {
			return {
				touchStatus: false,
				startY: 0,
			}
		},
		updated () {
			this.startY = this.$refs['A'][0].offsetTop
		},
		methods: {
			handleLetterClick (e) {
				this.$emit('change',e.target.innerText)
			},
			handleTouchStart () {
				this.touchstart = true 
			},
			handleTouchMove () {
				if (this.touchStatus) {
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - this.startY) / 20 )
					if (index >=0 && index < this.letters.length) {}
					this.$emit('change', this.letters[index])
				}
			},
			handleTouchEnd () {
				this.touchStatus = false
			}
		}
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