<template>
	<view class="container">
		<view class="titleView">
			{{menuTitle}}
		</view>
		<view class="menuView">
			<block v-for="(item,index) of menuList" :key='index'>
				<view class="menu_container">
					<view class="menu_item shadow_box" @click="menuClick(index)">
						<view class="menu_title">{{item.title}}</view>
						<view class="menu_intro">{{item.intro}}</view>
						<image class="menu_icon" :src="item.pic"></image>
					</view>
					<view v-if="item.tag" class="menu_tag">{{item.tag}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CommunityMenu',
		data() {
			return {
				menuTitle: '一起来看看圈里人分享的东西吧！',
				menuList:[
					{
						"title":"前端技术",
						"intro":"",
						"pic":"/static/images/community_hot.png",
						"tag": "热门"
					},
					{
						"title":"后端技术",
						"intro":"服务器端",
						"pic":""
					},
					{
						"title":"移动端",
						"intro":"移动开发",
						"pic":""
					},
					{
						"title":"小程序",
						"intro":"",
						"pic":"/static/images/community_store.png"
					}
				]
			}
		},
		props: {
			
		},
		methods: {
			menuClick(index) {
				switch(index) {
					case 0:
						uni.showToast({
							title: '敬请期待',
							icon: 'none'
						})
						break
					case 1:
						let param = {'id':'1', 'name':'2'}
						uni.navigateTo({
							url: '/pages/boon/boon?param=' + encodeURIComponent(JSON.stringify(param))
						})
						break
					case 2:
						uni.showToast({
							title: '敬请期待',
							icon: 'none'
						})
						break
					case 3:
						uni.showToast({
							title: '敬请期待',
							icon: 'none'
						})
						break
				}
					
			}
		}
	}
</script>

<style scoped lang="stylus">
	.container
		display: flex 
		flex-direction: column
		margin: 20rpx 30rpx 30rpx 30rpx
		.titleView  
			font-size: 40rpx 
			font-family: Geneva
			text-align: center
			height: 80rpx
			line-height: 80rpx
		.menuView
			display: flex
			justify-content: space-between
			align-items: center
			margin-top: 16rpx
			height: 140rpx
			.menu_container
				width: 22%
				position: relative
				overflow: hidden
				.menu_item
					height: 80rpx
					border: 1rpx solid #DCDCDC
					margin: 30rpx 0
					padding: 10rpx 8rpx
					border-radius: 10rpx
					position: relative
					.menu_title
						font-size: 28rpx
						font-weight: bold
					.menu_intro 
						font-size: 22rpx
						color: #808080
					.menu_icon
						width: 30rpx
						height 30rpx
						position: absolute
						right: 10rpx
						bottom: -4rpx
				.menu_tag
					position: absolute
					top: 0
					right: 6rpx
					padding: 6rpx 8rpx
					font-size: 18rpx
					text-align: center
					color: #FFFFFF
					border-radius: 8rpx
					background:linear-gradient(123deg,rgba(220,20,60,1) 0%,rgba(240,120,80,1) 61%,rgba(255,217,140,1) 100%)
				
</style>
