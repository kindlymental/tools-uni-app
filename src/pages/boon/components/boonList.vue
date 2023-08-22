<template>
	<view class="container">
		<block v-for="(item,index) of dataList" :key="index">
			<view class="item_view">
				<view class="image_view">
					<image class="image" :src="item.pic"></image>
				</view>
				<view class="info_view">
					<view class="top_view text_ellipsis2">{{item.title}}</view>
					<view class="center_view">
						<view>{{item.start_time}}自动开奖</view>
						<view>x️{{item.total_kucun}}份</view>
					</view>
					<view class="bottom_view">
						<view class="price">
							<text>价值：</text>
							<text>{{item.price}}</text>
							<text>元</text>
						</view>
						<view class="buyBtn" @click="boonClick">免费抽奖</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'BoonList',
		data() {
			return {
				
			}
		},
		props: {
			dataList: Array
		},
		methods: {
			boonClick() {
				
			}
		},
		mounted() {
			console.log(this.dataList)
		}
	}
</script>

<style scoped lang="stylus">
	.container
		background: #FFFFFF
		margin: 20rpx 40rpx
		padding: 20rpx 40rpx
		.item_view
			display: flex
			justify-content: flex-start
			border-bottom: 1rpx solid #F1F2F3
			.image_view
				width: 30%
				position: relative
				.image
					width: 180rpx
					height: 180rpx
					position: absolute
					top: 50%
					transform:translateY(-50%)
			.info_view
				width: 60%
				margin: 20rpx 30rpx
				.top_view
					font-size: 28rpx
					font-weight: 400
				.center_view
					margin-top: 14rpx
					font-size: 26rpx
					color:#555555
				.bottom_view
					margin-top: 14rpx
					height: 70rpx
					line-height: 70rpx
					.price
						display: inline-block
						font-size: 24rpx
						color: #555555
					.buyBtn
						float: right
						padding: 0 20rpx
						height: 60rpx
						line-height: 60rpx
						border-radius: 30rpx
						color: #FFFFFF
						background: #DC3228
						font-size: 30rpx
</style>
