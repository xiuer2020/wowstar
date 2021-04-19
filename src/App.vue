<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
// 重置样式
@import url("./assets/less/reset.css");
// 通用样式
@import url("./assets/less/common.css");
// 图标
@import url("./assets/less/iconfont.css");

// 重置样式
#app {
  font-size: 14px;
}

// 通用样式
.van-nav-bar.page-nav-bar .van-nav-bar__text{
  font-size: 16px;
  font-weight: 600;
  color: @c-p-lg;
}
.van-nav-bar.page-nav-bar .van-nav-bar__arrow{
  font-size: 19px;
  margin-right: 20px;
  color: @c-p-lg;
}

.van-cell.page-cell{
  padding: 10px 20px;
}

</style>
