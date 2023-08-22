<template>
	<view class="container" v-if="noticeText">
		<uni-notice-bar scrollable="true" single="true" :text="noticeText" speed="70" show-icon="true" @click="noticeClick"></uni-notice-bar>
	</view>
</template>

<script >
	import uniNoticeBar from '../../../components/notice-bar/uni-notice-bar/uni-notice-bar.vue'
	export default {
		name: 'HomeNoticeBar',
		data () {
			return {
			};
		},
		props: {
			noticeText: String
		},
		components: {
			uniNoticeBar
		},
		methods: {
			noticeClick() {
				uni.showToast({
					title:'通知',
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.container >>> .uni-noticebar
		border-radius: 20rpx
	.container 
		overflow: hidden
</style>
