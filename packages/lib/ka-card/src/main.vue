<template>
  <div class="Ka-card-container" :style="width ? { width: width + 'px' } : {}">
    <div
      class="m-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgUrl" alt="" />
    </div>
    <div v-if="summary" class="ka-card-summary">
      {{ summary }}
    </div>
    <div v-else class="ka-card-summary">
      <slot></slot>
    </div>
    <slot class="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'KaCard',
  props: {
    // 卡片的宽度
    width: {
      type: Number,
      default: 0,
    },
    // 卡片图片资源地址
    imgUrl: {
      type: String,
      default:
        'https://iconfont.alicdn.com/s/74fe46d1-9ff6-4442-ac06-3b344531ea66_origin.svg',
    },
    // 卡片图片的高度
    imgHeight: {
      type: Number,
      default: 0,
    },
    // 卡片的概要
    summary: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.Ka-card-container {
  width: 270px;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.15);
  padding-bottom: 8px;

  &-img {
    height: 152px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-summary {
    padding: 8px;
    text-align: left;
    font-size: 14px;
  }
}
</style>
