<template>
	<view class="page-body">
		<view>
			<map style="width: 100%; height: 100vh;" :scale="scale" :latitude="latitude" :longitude="longitude"
				:markers="markers" :covers="covers">
			</map>
			<view class="location-wraper">
				<view class="location-icon" @click="getLocation">
					<image src="../../static/images/map_location.png" />
				</view>
				<!-- <view class="location-icon" style="margin-top: 20rpx;" @click="getLocation">
					<image src="../../static/images/map_location.png" />
				</view> -->
			</view>
			<view class="sign-wrapper">
				<view class="sign-btn" @click="toSign">
					去打卡
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getUniLocation
	} from '@/utils/location';
	export default {
		data() {
			return {
				latitude: null,
				longitude: null,
				scale: 15,
				markers: [],
				covers: []
			}
		},
		onLoad() {
			this.getLocation();
		},
		methods: {
			// 获取当前位置
			async getLocation() {
				const res = await getUniLocation();
				if (res.success) {
					console.log('res', res);
					this.longitude = res.longitude;
					this.latitude = res.latitude;
					// 标记点
					this.markers = [{
						id: 1,
						longitude: res.longitude,
						latitude: res.latitude,
						title: '我的位置',
						iconPath: '/static/images/map_market.png',
						width: 30,
						height: 30,
						callout: {
							content: '这是一个标记点',
							fontSize: 14,
							color: '#000',
							bgColor: '#fff',
							padding: 6,
							borderRadius: 4,
							boxShadow: '4px 4px 10px rgba(0, 0, 0, .3)'
						}
					}];
					// 覆盖物
					this.covers = [{
						type: 'circle',
						longitude: res.longitude,
						latitude: res.latitude,
						radius: 50,
						fillColor: '#000',
						strokeWidth: 2,
						strokeColor: '#f00',
						zIndex: 1
					}]
				}
			},
			// 打卡
			async toSign() {
				uni.showToast({
					title: '打卡成功'
				})
			}
		},
	}
</script>

<style lang="less" scoped>
	.page-body {
		.location-wraper {
			position: fixed;
			bottom: 140rpx;
			right: 20rpx;
			border-radius: 10rpx;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 20rpx 10px;
			box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
		}

		.location-icon {
			width: 60rpx;
			height: 60rpx;
		}

		.location-icon image {
			width: 100%;
			height: 100%;
		}

		.sign-wrapper {
			position: fixed;
			bottom: 20rpx;
			right: 40rpx;
			left: 40rpx;
			height: 80rpx;
			border-radius: 10rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
		}
		.sign-btn {
		}
	}
</style>