<template>
  <view>
    <view class="container default_bg_color">
      <view class="user_info">
        <view class="name_info">{{ userInfo.nickname }}</view>
        <view class="account_info">
          <block v-for="(item, index) of accountInfo" :key="index">
            <view class="account_item">
              <view style="margin-left: 6rpx">{{ item.number }}</view>
              <view style="margin-top: 12rpx">{{ item.title }}</view>
            </view>
          </block>
        </view>
      </view>
      <view class="icon_view">
        <image class="icon" :src="userInfo.headimgurl"></image>
      </view>
    </view>

    <!-- <canvas style="width: 400rpx; height: 160rpx;" canvas-id="canvas"></canvas> -->
  </view>
</template>

<script>
export default {
  name: "CommmunityUserInfo",
  data() {
    return {
      accountInfo: [
        {
          title: "粉丝",
          number: "0",
        },
        {
          title: "关注",
          number: "0",
        },
        {
          title: "点赞",
          number: "0",
        },
      ],
    };
  },
  props: {
    // XXX: 为什么必须要给定初始值 menu里就不用
    userInfo: {
      type: Object,
      default: function () {
        return {
          nickname: "",
          headimgurl: "",
        };
      },
    },
  },
  onReady: function (e) {
    console.log(this.props);

    var ctx = uni.createCanvasContext("canvas");
    ctx.setStrokeStyle("#4CD964");
    ctx.setLineWidth(2);
    ctx.moveTo(0, 100);
    ctx.lineTo(12, 200);
    ctx.stroke();
    ctx.draw();

    // 波浪大小
    // var boHeight = 10;
    // var posHeight = 90;
    // //初始角度为0
    // var step = 0;
    // //定义三条不同波浪的颜色
    // var lines = ["rgba(0,222,255, 0.8)",
    // 	"rgba(157,192,249, 0.8)",
    // 	"rgba(0,168,255, 0.8)"
    // ];
    // this.loop(ctx, step, lines, boHeight, posHeight)
  },
  methods: {
    loop(ctx, step, lines, boHeight, posHeight) {
      // ctx.clearRect(0,0,300,100);
      ctx.setStrokeStyle("#00ff00");
      ctx.setLineWidth(5);

      step++;
      //画3个不同颜色的矩形
      for (var j = lines.length - 1; j >= 0; j--) {
        ctx.setFillStyle(lines[j]);

        //每个矩形的角度都不同，每个之间相差45度
        var angle = ((step + j * 50) * Math.PI) / 180;
        var deltaHeight = Math.sin(angle) * boHeight;
        var deltaHeightRight = Math.cos(angle) * boHeight;

        ctx.beginPath();
        ctx.moveTo(0, posHeight + deltaHeight);
        ctx.bezierCurveTo(
          300 / 2,
          posHeight + deltaHeight - boHeight,
          300 / 2,
          posHeight + deltaHeightRight - boHeight,
          300,
          posHeight + deltaHeightRight
        );
        ctx.setStrokeStyle("#ff0000");
        ctx.stroke();

        ctx.lineTo(300, 100);
        ctx.lineTo(0, 100);
        ctx.lineTo(0, posHeight + deltaHeight);
        ctx.setStrokeStyle("#0000ff");
        ctx.stroke();
      }

      ctx.draw();
    },
    canvasIdErrorCallback: function (e) {
      console.error(e.detail.errMsg);
    },
  },
};
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

  .name_info {
    margin: 20rpx 0;
    font-size: 34rpx;
  }

  .account_info {
    display: flex;
    justify-content: space-between;
    margin: 30rpx 0;

    .account_item {
      font-weight: 400;
      font-size: 26rpx;
      font-family: 'KaiTi';
    }
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
