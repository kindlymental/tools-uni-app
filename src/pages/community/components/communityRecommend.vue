<template>
	<view class="container">
		<view class="titleView">
			<view class="leftView">
				<view class="title">{{recommendData.title}}</view>
				<view class="intro">{{recommendData.sub_title}}</view>
			</view>
		</view>

		<block v-for="(item, index) in recommendList" :key='index'>
			<view class="contentView">
				<image class="itemImage" :src="item.pic"></image>
				<view class="itemIntro">
					<view>{{item.title}}</view>
					<view>{{item.type}}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'CommunityRecommend',
		props: {
			recommendData: Object
		},
		data() {
			return {
				
			}
		},
		computed: {
			recommendList() {
				return this.recommendData.form_list
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="stylus">
	.container 
		display: flex 
		flex-direction: column
		margin: 10rpx 30rpx 30rpx 30rpx
		.titleView
			display: flex 
			justify-content: space-between 
			font-size: 34rpx 
			position: relative
			.leftView
				.title 
					font-size: 50rpx 
				.intro 
					margin-top: 10rpx
					font-size: 28rpx 
					color:#808080
			.filterView
				position: absolute
				bottom: 0
				right: 16rpx
				width: 220rpx
				height: 56rpx
				line-height: 56rpx
				border: 2rpx solid rgb(255,220,0)
				border-radius: 10rpx
				font-size: 28rpx
				font-weight: 400
				-webkit-box-shadow: 0 0 6rpx rgb(255,220,0)
				-moz-box-shadow: 0 0 6rpx rgb(255,220,0)
				box-shadow: 0 0 6rpx rgb(255,220,0)
				background: #FFFFFF
				.item 
					width: 50%
					float: left
					text-align: center
				.selected
					background: rgb(255,220,0)
		.contentView 
			display: flex 
			flex-direction: column 
			font-size 32rpx 
			margin: 20rpx 0
			.itemImage
				width: 100%
				border-radius: 8rpx
			.itemIntro 
				display: flex 
				justify-content: space-between 
				margin-top: 10rpx
				padding: 10rpx 0
				font-size: 28rpx
				color: #808080
</style>
