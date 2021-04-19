<template>
  <div class="good-deta">
    <van-nav-bar
      left-text="商品详情"
      :border="false"
      :left-arrow="true"
      @click-left="$router.push('home')"
      class="page-nav-bar"
    >
    </van-nav-bar>

    <div class="good-deti-image-layo">
      <van-image
        src="../../assets/images/good-deta.png"
        class="good-deti-image"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.good-deta .good-deti-image-layo {
  padding: 0 20px;
  border-radius: 4px;
}

</style>