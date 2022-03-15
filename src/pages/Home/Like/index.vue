<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <img src="./images/尚品汇2.png" alt="" />
            <div class="like-text">
              <p>全新爱普生LQ-630KII 635K730K735K增值税控发票据平推针式打印机智赚 官方标配</p>
              <h3>¥128.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/尚品汇3.png" alt="" />
            <div class="like-text">
              <p>海尔 （Haier ）480升风冷无霜变频对开门冰箱90°开门悬停 厨装一体BCD-480WBPT）</p>
              <h3>¥168.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/尚品汇5.png" alt="" />
            <div class="like-text">
              <p>适用于洗车用品擦车拖把单子车巾除尘掸洗车刷子蜡刷用蜡拖汽车用品工具毛巾</p>
              <h3>¥99.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/尚品汇1.png" alt="" />
            <div class="like-text">
              <p>坚果G9投影机家用 卧室办公 (全自动六向梯形校正 双语音控制 丹拿专业调音 1080P高清)</p>
              <h3>¥139.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/尚品汇4.png" alt="" />
            <div class="like-text">
              <p>乖乖小鸭下蛋鸭探索生活馆周岁玩具早教子生活体验玩具 乖乖小鸭461146 赠送运费险</p>
              <h3>¥199.00</h3>
            </div>
          </li>
          <li>
            <img src="./images/尚品汇6.png" alt="" />
            <div class="like-text">
              <p>美斯尼 整套茶具套装玻璃 家用玻璃茶壶套装泡茶壶功夫茶具配件带竹木茶盘公道杯小品杯 九件套</p>
              <h3>¥116.00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Like",
};
</script>

<style lang="less" scoped>
.like {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      overflow: hidden;

      .fl {
        float: left;
        font-size: 20px;
        line-height: 30px;
      }

      .fr {
        float: right;
        background-image: url(./images/icons.png);
        width: 66px;
        height: 25px;
        background-position: 182px -104px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        text-decoration: none;
      }
    }

    .bd {
      .favourate {
        border: 1px solid #e4e4e4;
        overflow: hidden;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;

        li {
          height: 250px;
          margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          position: relative;
          width: 16.667%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 142px;
            height: 142px;
            transition: all 400ms;

            &:hover {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          .like-text {
            padding: 0;
            width: 142px;
            border-right: 1px solid #e4e4e4;

            p {
              margin: 5px 0;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>