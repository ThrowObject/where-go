<template>
	<div>
	<city-header></city-header>
	<city-search></city-search>
	<city-list 
	:cities="cities" 
	:hot="hotCities"
	:letter="letter"></city-list>
	<city-alphabet :cities="cities"
	@change="handleLetterChange"></city-alphabet>
</div>
</template>
<script>
	import axios from 'axios'
	import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import CityAlphabet from './components/Alphabet'
	export default{
		name:'City',
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data () {
			return {
				cities: {},
				// 热门城市
				hotCities: [],
				letter: ''
			}
		},
		// method定义getCityInfo方法
		methods: {
			getCityInfo () {
				axios.get('/api/city.json')
				 .then(this.handleGetCityInfoSucc)
			},
		handleGetCityInfoSucc (res) {
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			  }
			},
			handleLetterChange (letter) {
				this.letter = letter
			}
		},
		// 使用ajax请求模拟数据，需要写一个生命周期  created或者mounted
		mounted () {
			this.getCityInfo ()
		}
	}
</script>
<style lang="stylus" scoped>
	
</style>