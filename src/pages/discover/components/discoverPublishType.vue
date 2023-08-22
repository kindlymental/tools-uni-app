<template>
	<view class="container">
		<view class="content_view">
			<view class="title_view">
				—— 请选择你要发布的栏目 ——
			</view>
			<view class="type_view">
				<block v-for="(item,index) of typeList" :key='index'>
					<view class="item_view" @click="typeClick" v-bind:id="index">
						<image class="image" :src="item.icon"></image>
						<view class="type">{{item.type}}</view>
					</view>
				</block>
			</view>
			<view class="cancel_view" @click="cancelClick">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'DoscoverPublishType',
		data() {
			return {
				typeList: [
					{
						"icon":"../../../static/images/community-selected.png",
						"type":"趣闻趣味"
					},
					{
						"icon":"../../../static/images/community-selected.png",
						"type":"身边事"
					},
					{
						"icon":"../../../static/images/community-selected.png",
						"type":"互联网"
					},
					{
						"icon":"../../../static/images/community-selected.png",
						"type":"程序猿"
					},
					{
						"icon":"../../../static/images/community-selected.png",
						"type":"面试宝典"
					},
					{
						"icon":"../../../static/images/community-selected.png",
						"type":"沸点"
					},{
						"icon":"../../../static/images/community-selected.png",
						"type":"转手卖"
					}
				]
			}
		},
		methods: {
			cancelClick() {
				this.$emit("publishTypeCancelClick")
			},
			typeClick(e) {
				let that = this
				let index = e.currentTarget.id
				uni.navigateTo({
					url: '/pages/discover/republish',
					complete() {
						that.cancelClick()
					}
				})
			}
		}
	}
</script>

<style scoped lang="stylus">
	.container
		background: rgba(100,100,100,0.2)
		width: 100%
		height: 100%
		display: flex
		align-items: center
		.content_view
			display: block
			margin: auto
			width: 90%
			background: #FFFFFF
			border-radius: 16rpx
			.title_view
				font-size: 30rpx
				text-align: center
				height: 90rpx
				line-height: 90rpx
			.type_view
				display: flex
				align-items: center
				flex-wrap: wrap
				margin: 20rpx 0
				.item_view
					width: 20%
					font-size: 26rpx
					text-align: center
					margin: 16rpx 0
					.image
						width: 80rpx
						height: 80rpx
						border-radius: 40rpx
			.cancel_view
				background: #F1F1F1
				text-align: center
				height: 80rpx
				line-height: 80rpx
				font-size: 30rpx
</style>
