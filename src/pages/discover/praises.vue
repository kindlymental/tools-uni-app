<template>
	<view class="container">
		<block v-for="(item,index) of dataList" :key='index'>
			<view class="item_view">
				<view class="userinfo">
					<image class="image" :src="item.avatar_url"></image>
					<view class="name">{{item.nick_name}}</view>
					<view class="tag default_bg_color">{{item.userId}}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'praises',
		data() {
			return {
				dataList: []
			}
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: '点赞'
			})
		},
		onLoad: function (option) {
			if (option && option.dataList) {
				const list = JSON.parse(decodeURIComponent(option.dataList));
				this.dataList = list;
			}
		}
	}
</script>

<style scoped lang="stylus">
	.container
		display: flex
		flex-direction: column
		.item_view
			display: flex
			flex-direction: column
			border-bottom: 1rpx solid #C8C7CC
			.userinfo
				display: flex
				align-items: center
				margin: 16rpx 28rpx
				.image
					width: 100rpx
					height: 100rpx
					border-radius: 20rpx
				.name
					font-size: 28rpx
					margin: 0 28rpx
				.tag
					font-size: 26rpx
					text-align: center
					padding: 8rpx 8rpx
					margin-top: 10rpx
					border-radius: 8rpx
					color: #FFFFFF
</style>
