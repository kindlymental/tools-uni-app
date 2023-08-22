<template>
  <view class="content">
    <web-view :src="path"> </web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      path: "",
    };
  },
  onLoad: function (e) {
    this.path = e.path;
  },
  methods: {},
};
</script>

<style scoped lang="stylus">
.content {
  background: #4CD964;
}
</style>
