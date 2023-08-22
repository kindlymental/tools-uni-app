<template>
	<view class="container">
		<view class="banner_view">
			<image class="image" :src="boonItem.bannerUrl"></image>
		</view>
		
		<view class="item_container">
			<block v-for="(item, index) of boonItem.items" :key='index'>
				<view class="item_view" @click="itemClick">
					<image class="image_view" :src="item.icon"></image>
					<view class="title">{{item.title}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'BoonHeader',
		data() {
			return {
				boonItem: {
					"bannerUrl": "/static/images/boon_header.png",   
					"items": [{
						"title": "每日霸王餐",
						"icon": "/static/images/boon1.png"
					}, {
						"title": "集字福袋",
						"icon": "/static/images/boon2.png"
					}, {
						"title": "砍价",
						"icon": "/static/images/boon3.png"
					}, {
						"title": "摇一摇",
						"icon": "/static/images/boon4.png"
					}]
				},
			}
		},
		mounted() {
			console.log(this.boonItem.items)
		},
		methods: {
			itemClick () {
				console.log('-----')
			}
		}
	}
</script>

<style scoped lang="stylus">
	.container
		background: rgb(255,220,0)
		.banner_view
			width: 100%
			height: 0
			overflow: hidden
			position: relative
			padding-bottom: 56%
			.image
				width: 100%
				height: 100%
				position: absolute
				top: 0
				left: 0
		.item_container
			margin: 20rpx 20rpx
			display: flex
			align-items: center
			justify-content: space-between
			.item_view 
				width: 25%
				display: flex
				flex-direction: column
				align-items: center
				.image_view
					width: 100rpx
					height: 100rpx
					border-radius: 50rpx
				.title
					margin: 20rpx
					text-align: center
					font-size: 26rpx
					font-weight: bold

</style>
