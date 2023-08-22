<template>
	<view>
		<view class="search-view">
			<input class="search" :placeholder="placeholderTitle" confirm-type="search" @click="clickInput"/>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'SearchSearch',
		data () {
			return {
				placeholderTitle: '请输入关键词',
				searchKeyList: []
			}
		},
		props: {
			
		},
		methods: {
			clickInput() {
				console.log('输入框')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.search-view
		display: flex
		justify-content: center
		height: 60rpx
		line-height: 60rpx
		padding: 0 20rpx
		margin: 10rpx 20rpx
		.search
			width: 70%
			height: 100%
			padding: 0 60rpx
			border-radius: 30rpx
			font-size: 26rpx
			background: #F1F2F3
			background-image: url(../../../static/images/search_home.png)
			background-repeat: no-repeat
			background-position: 18rpx 14rpx
			background-size: 34rpx 34rpx
</style>
