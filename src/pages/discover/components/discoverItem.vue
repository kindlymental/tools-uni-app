<template>
	<view class="container">
		<block v-for="(item,index) of dataList" :key='index'>
			<view class="item_view">
				<view class="userinfo">
					<image class="image" :src="item.avatarUrl"></image>
					<view class="user">
						<view class="name">{{item.nickName}}</view>
						<view class="tag default_bg_color">{{item.typeName}}</view>
					</view>
					<view v-if="item.phone" class="phone" @click="callPhone" :data-phone='item.phone'>
						拨打电话
					</view>
				</view>
				<view class="contentinfo">
					<view class="content" v-html="item.content">
					</view>
					<view class="related">
						<text class="text">{{item.datetime}}</text>
						<text class="text">{{item.readCount}}次浏览</text>
						<text class="text" style="color: #DC3228">{{item.areaName}}</text>
					</view>
				</view>
				<view class="praises">
					<view style="width: 50%"></view>
					<view class="item" @click="praiseClick(item, $event)">点赞({{item.praiseCount}})</view>
					<view class="item" @click="shareClick">转发({{item.shareCount}})</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'DiscoverItem',
		data() {
			return {
				
			}
		},
		props: {
			dataList: Array
		},
		methods: {
			callPhone(e) {
				if (!e.currentTarget.dataset.phone) {
					uni.showToast({
						title: '对方没有留下电话，您可以评论留言来联系他',
						icon: 'none'
					})
					return
				}
				uni.makePhoneCall({
					phoneNumber: e.currentTarget.dataset.phone
				})
			},
			praiseClick(data, e) {
				const list = data.praises ? data.praises.data : [];
				if (list && list.length > 0) {
					uni.navigateTo({
						url: '/pages/discover/praises?dataList=' + encodeURIComponent(JSON.stringify(list))
					})
				}
			},
			shareClick() {
				
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
			border-bottom: 10rpx solid #C8C7CC
			.userinfo
				display: flex
				align-items: center
				margin: 16rpx 24rpx
				position: relative
				.image
					width: 100rpx
					height: 100rpx
					border-radius: 20rpx
				.user
					margin-left: 20rpx
					.name
						font-size: 28rpx
					.tag
						font-size: 26rpx
						text-align: center
						padding: 8rpx 8rpx
						margin-top: 10rpx
						border-radius: 8rpx
						color: #FFFFFF
				.phone
					position: absolute
					right: 16rpx
					margin: auto
					
					margin-top: 6rpx
					width: 150rpx
					height: 46rpx
					line-height: 46rpx
					border-radius: 23rpx
					text-align: center
					background:#4CD964
					color: #FFFFFF
					font-size: 28rpx
			.contentinfo
				margin: 16rpx 24rpx
				.content
					font-size: 30rpx
				.related
					margin-top: 20rpx
					font-size: 26rpx
					.text 
						margin-left: 20rpx
			.praises
				display: flex
				justify-content: space-between
				margin: 10rpx 20rpx
				padding-top: 14rpx
				border-top: 1rpx solid #F1F2F3
				font-size: 30rpx
				height: 60rpx
				.item
					text-align: center
					width: 33%
</style>
