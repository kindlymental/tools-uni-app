<template>
  <view>
    <community-user-info :userInfo="userInfo"></community-user-info>
    <community-menu :menu="menu"></community-menu>
    <community-hot :hotData="hotList"></community-hot>
    <community-recommend :recommendData="recommendList"></community-recommend>
  </view>
</template>

<script>
import CommunityUserInfo from "@/pages/community/components/communityUserInfo.vue";
import CommunityMenu from "@/pages/community/components/communityMenu.vue";
import CommunityHot from "@/pages/community/components/communityHot.vue";
import CommunityRecommend from "@/pages/community/components/communityRecommend.vue";
import community from "@/static/mock/community.json";
export default {
  data() {
    return {
      community: {},
      userInfo: {},
      menu: {},
      hotList: [],
      recommendList: [],
    };
  },
  components: {
    CommunityUserInfo,
    CommunityMenu,
    CommunityHot,
    CommunityRecommend,
  },
  onReady() {
    uni.setNavigationBarTitle({
      title: "社区",
    });
    uni.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "rgb(91,180,180,0.6)",
      animation: {
        duration: 400,
        timingFunc: "easeIn",
      },
    });
  },
  mounted() {
    // uni
    //   .request({
    //     url: "",
    //     data: {},
    //   })
    //   .then((data) => {
    //     var [error, res] = data;
    //   });

    setTimeout(() => {
      this.community = community;
      this.userInfo = community.user_info;
      this.menu = community.menu;
      this.hotList = community.communityInfo.hot_list;
      this.recommendList = community.communityInfo.recommend_list;

      console.log(this.menu);
    }, 1000);
  },
  onPullDownRefresh() {
    uni.stopPullDownRefresh();
  },
};
</script>

<style scoped lang="stylus"></style>
