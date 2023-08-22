<template>
	<view class="container">
		<block v-for="(item, index) of topNewsList" :key='index'>
			<navigator :url='"/pages/webview/webview?id=" + item.id+"&webUrl="+item.webUrl'>
				<view class="header-view">{{newsTitle}}</view>
				<view class="detail-view">
					<image class="image-view" :src="item.imgUrl"></image>
					<view class="news-view">
						<view class="hot">
							<image class="image" src="/static/images/hot_home.png"></image>
							<label>{{item.hot}}</label>
						</view>
						<view class="title">{{item.title}}</view>
					</view>
				</view>
				<view class="intro-view">
					{{item.detail}}
				</view>
			</navigator>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'HomeTopNews',
		data () {
			return {
				
			};
		},
		props: {
			newsTitle: String,
			topNewsList: Array
		}
	}
</script>

<style lang="stylus" scoped>
	.container 
		display: flex
		flex-direction: column
		margin: 10rpx 20rpx 4rpx 20rpx
		border-bottom: 1rpx solid #C0C0C0
		.header-view
			font-size: 36rpx
			font-weight: 900
			margin-left: 10rpx
		.detail-view
			font-size: 30rpx 
			margin: 15rpx 0
			position: relative
			.image-view
				width: 100%
				image: 200rpx
				border-radius: 10rpx
			.news-view
				position: absolute
				left: 25rpx
				right: 25rpx
				bottom: 20rpx
				color: white
				.hot
					font-size: 26rpx
					height: 72rpx
					display: flex
					align-items: center
					.image 
						width: 44rpx
						height: 44rpx
				.title
					margin-top: 10rpx
					font-size: 40rpx
					font-weight: 900
		.intro-view
			margin: 0 10rpx 10rpx 10rpx
			font-size: 26rpx
			color: #555555
			
</style>
