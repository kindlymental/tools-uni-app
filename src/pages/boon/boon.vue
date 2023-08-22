<template>
	<view class="container">
		<boon-header></boon-header>
		<boon-list :dataList="boonList"></boon-list>
	</view>
</template>

<script>
	import BoonHeader from 'pages/boon/components/boonHeader.vue'
	import BoonList from 'pages/boon/components/boonList.vue'
	import boonData from '../../static/mock/boon.json'
	export default {
		name: 'Boon',
		data() {
			return {
				boonList: boonData.list
			}
		},
		props: {

		},
		components: {
			BoonHeader,
			BoonList
		},
		onLoad: function(option) {
			if (option && option.param) {
				const param = JSON.parse(decodeURIComponent(option.param))
				console.log(param)
			}
			
			console.log(this.boon)
		}
	}
</script>

<style scoped lang="stylus">
	.container
		background: rgb(255,220,0)
		padding-bottom: 30rpx
</style>
