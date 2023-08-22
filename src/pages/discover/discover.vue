<template>
  <view class="container">
    <view class="address_view default_bg_color">
      {{ locationAddress }}
    </view>
    <discover-item :dataList="discoverData"></discover-item>
    <!-- <view class="publish_view" @click="publishClick">发布</view> -->
    <!-- <discover-publish-type class="publish_type_view" v-if="publishTypeShow" v-on:publishTypeCancelClick="publishTypeCancelClick"></discover-publish-type> -->
  </view>
</template>

<script>
import discoverData from "@/static/mock/discover.json";
import DiscoverItem from "pages/discover/components/discoverItem.vue";
import DiscoverPublishType from "pages/discover/components/discoverPublishType.vue";
import { getUniLocation } from "@/utils/location";
export default {
  data() {
    return {
      locationAddress: "",
      discoverData: discoverData.result.data,
      publishTypeShow: false,
    };
  },
  components: {
    DiscoverItem,
    DiscoverPublishType,
  },
  onReady() {
    uni.setNavigationBarTitle({
      title: "发现",
    });
  },
  mounted() {},
  methods: {
    publishClick() {
      this.publishTypeShow = true;
    },
    publishTypeCancelClick() {
      this.publishTypeShow = false;
    },
  },
  onPullDownRefresh() {
    uni.stopPullDownRefresh();
  },
  onLoad() {
    // getUniLocation().then(res => {
    // 	this.$qqmapsdk.reverseGeocoder({
    // 		location: {
    // 			latitude: res.latitude,
    // 			longitude: res.longitude
    // 		},
    // 		success: (res) => {
    // 			this.locationAddress = res.result.address;
    // 		},
    // 		fail: function(err) {
    // 			console.log(err);
    // 		}
    // 	})
    // })
  },
};
</script>

<style lang="stylus">
.container {
  width: 100%;

  .address_view {
    margin: 16rpx 20rpx;
    padding: 10rpx 14rpx;
    border-radius: 10rpx;
    font-size: 30rpx;
    color: #FFFFFF;
  }

  .publish_view {
    position: fixed;
    bottom: 60rpx;
    right: 30rpx;
    background: #DC3228;
    color: #FFFFFF;
    text-align: center;
    font-size: 28rpx;
    width: 120rpx;
    height: 120rpx;
    line-height: 120rpx;
    border-radius: 60rpx;
  }

  .publish_type_view {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>
