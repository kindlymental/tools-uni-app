<template>
  <view class="container">
    <scroll-view
      class="scroll-view"
      @scrolltolower="onLoadMore"
      @scrolltoupper="onRefresh"
    >
      <block v-for="(item, index) of list" :key="index">
        <view
          class="list"
          :style="index < list.length - 1 ? listStyle : ''"
          @click="itemClick(index)"
        >
          <view class="rank-view" :style="index < 2 ? rankStyle : ''">
            {{ item.id }}
          </view>
          <view class="intro-view">
            <label class="title">{{ item.title }}</label>
            <label class="hot">{{ item.detail }}</label>
          </view>
          <image
            v-if="item.imgUrl"
            class="image-view"
            :src="item.imgUrl"
          ></image>
        </view>
      </block>

      <!-- XXX: uni-load-more如何使用 -->
      <!-- 加载更多提示 -->
      <uni-load-more
        v-if="isLoading"
        :loading="isLoading"
        :tips="hasMore ? '正在加载...' : '没有更多数据了'"
      ></uni-load-more>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "HomeNormalNews",
  data() {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
      },
      isLoading: false,
      hasMore: true,
      list: [],
    };
  },
  props: {
    newsList: Array,
  },
  computed: {
    listStyle() {
      return "border-bottom: 1px solid #C0C0C0";
    },
    rankStyle() {
      return "color: red";
    },
  },
  mounted() {
    this.list = this.newsList;
  },
  methods: {
    itemClick(index) {
      uni.navigateTo({
        url: "/pages/home/home_detail?path=" + this.list[index].webUrl,
      });
    },
    async getListData(pageNum, pageSize) {
      // ...
    },
    onRefresh() {
      console.log("onRefresh");
    },
    async onLoadMore() {
      console.log("onLoadMore");
      // 如果已经在加载中或者没有更多数据了，则不再请求
      if (this.isLoading || !this.hasMore) return;
      this.isLoading = true;

      // 请求数据
      const res = await this.getListData(
        this.pageInfo.pageNum,
        this.pageInfo.pageSize
      );
      const data = res.data;

      // 如果请求得到数据，则将数据合并存储到列表数组中
      if (data.length) {
        this.list = this.list.concat(data);
        this.pageInfo.total = res.total;
        this.pageInfo.pageNum++;
      }
      // 如果没有更多数据，则设置 hasMore 为 false，提示没有更多数据
      if (!data.length || this.list.length === this.pageInfo.total) {
        this.hasMore = false;
        uni.showToast({
          title: "没有更多数据了",
          icon: "none",
        });
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding-bottom: 20rpx;

  .scroll-view {
    height: 100%;

    .list {
      display: flex;
      justify-content: flex-start;
      margin: 20rpx 20rpx 0 20rpx;

      .rank-view {
        font-size: 26rpx;
        color: black;
        margin-top: 10rpx;
      }

      .intro-view {
        display: flex;
        flex-direction: column;
        min-width: 60%;
        margin: 0 20rpx 10rpx 20rpx;

        .title {
          font-size: 32rpx;
          font-weight: 500;
        }

        .hot {
          font-size: 26rpx;
          font-weight: 500;
          color: #808080;
        }
      }

      .image-view {
        margin-top: 4rpx;
        border-radius: 10rpx;
        height: 150rpx;
      }
    }
  }
}
</style>