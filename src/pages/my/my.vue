<template>
  <view class="container">
    <view class="user_info" v-loading="loading">
      <view>{{ userInfo.username }}</view>
      <view v-permission="'vip'">
        <view>{{ userInfo.loginId }}</view>
        <view>{{ userInfo.vipLevel }}</view>
      </view>
      <view class="icon_view">
        <image class="icon" :src="userInfo.headimgurl"></image>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, onMounted } from "vue";

const loading = ref<boolean>(false);
const userInfo = ref({
  username: "",
  loginId: "",
  headimgurl: "",
  vipLevel: "",
});

onMounted(() => {
  getUserInfo();
});

const getUserInfo = () => {
  loading.value = true;
  setTimeout(() => {
    userInfo.value = {
      username: "刘怡兰",
      loginId: "123",
      headimgurl: "123123123",
      vipLevel: "3",
    };
  }, 1000);
};

const updatePassword = () => {};
</script>

<style scoped lang="stylus">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 30rpx;

  .user_info {
    width: 60%;
  }

  .icon_view {
    width: 120rpx;
    height: 120rpx;

    .icon {
      width: 100%;
      height: 100%;
      border-radius: 60rpx;
    }
  }
}
</style>