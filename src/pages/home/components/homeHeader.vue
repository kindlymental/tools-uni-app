<template>
	<view class="container">
		<view class="content">
			<view class="date-view">
				<label class="day">{{todayDay}}</label>
				<label class="date">{{todayDate}}</label>
			</view>
			<view class="title">{{pageTitle}}</view>
			<image class="category" src="/static/images/category_home.png" @click="categoryClick"></image>
		</view>
		<view class="bottom_line"></view>
	</view>
</template>

<script>
	export default {
		name: 'HomeHeader',
		data() {
			return {
				now: new Date()
			}
		},
		props: {
			pageTitle: String
		},
		computed: {
			todayDay() {
				return this.now.getDate()
			},
			todayDate() {
				return this.now.getFullYear()+ '.' + Number(this.now.getMonth()+1)
			}
		},
		methods: {
			categoryClick () {
				// wx.showToast({
				// 	title: '切换类别',
				// 	icon: 'none'
				// })
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container 
		display: flex 
		flex-direction: column 
		.content 
			display: flex 
			flex-direction: row
			justify-content: space-between
			align-items: center
			padding: 15rpx 20rpx
			.date-view
				display: flex
				flex-direction: column
				margin-left: 30rpx
				text-align: center
				font-size: 16rpx
				.day 
					font-size: 40rpx
					border-bottom: 1rpx dashed black
					font-family: 'KaiTi'
				.date
					height: 28rpx
					line-height: 28rpx
					font-family: 'KaiTi'
			.title
				font-size: 56rpx
				font-family: 'KaiTi'
			.category 
				width: 44rpx 
				height: 44rpx
				line-height: 44rpx
				margin-right: 30rpx
		.bottom_line
			height: 4rpx 
			margin: 6rpx 20rpx 
			background: black
</style>
