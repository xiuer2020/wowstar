<template>
  <div class="home">
    <div class="head"></div>
    <van-tabs :line-height="2" :line-width="26" :color="cPLg" class="tabs-home">
      <van-tab title="最新上架" class="home-tab">
        <van-row :gutter="8">
          <van-col span="12" @click="$router.push('good-deta')">
            <img src="../../assets/images/item-tab.png" class="item-imag" />
            <van-cell title="" class="text-cell">
              <template #title>
                <span>唐晓天</span>
                <span class="pl-base pr-base">|</span>
                <span>作为演员</span>
              </template>
              <template #label>
                <span>唐晓天</span>
                <span class="pl-base">2794</span>
              </template>
            </van-cell>
          </van-col>
          <van-col span="12">
            <img src="../../assets/images/item-tab.png" class="item-imag" />
            <van-cell title="" class="text-cell">
              <template #title>
                <span>唐晓天</span>
                <span class="pl-base pr-base">|</span>
                <span>作为演员</span>
              </template>
              <template #label>
                <span>唐晓天</span>
                <span class="pl-base">2794</span>
              </template>
            </van-cell>
          </van-col>
          <van-col span="12" class="pt-sm">
            <img src="../../assets/images/item-tab.png" class="item-imag" />
            <van-cell title="" class="text-cell">
              <template #title>
                <span>唐晓天</span>
                <span class="pl-base pr-base">|</span>
                <span>作为演员</span>
              </template>
              <template #label>
                <span>唐晓天</span>
                <span class="pl-base">2794</span>
              </template>
            </van-cell>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="《漫游》">内容 2</van-tab>
      <van-tab title="《1626》">内容 3</van-tab>
    </van-tabs>

    <van-tabbar :active-color="cPLg" v-model="footTabbInde">
      <van-tabbar-item to="/home">
        <template #icon>
          <van-icon class="iconfont" :color="cPLg" v-if="footTabbInde == 0"
            >&#xe622;</van-icon
          >
          <van-icon class="iconfont" :color="cPLg" v-else>&#xe60b;</van-icon>
        </template>
        <template #default> 首页 </template>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <template #icon>
          <van-icon class="iconfont" :color="cPLg" v-if="footTabbInde == 1"
            >&#xe620;</van-icon
          >
          <van-icon class="iconfont" :color="cPLg" v-else>&#xe687;</van-icon>
        </template>
        <template #default> 我的 </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>



<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data: () => ({
    footTabbInde: 0,
    // 底部选项栏下标
  }),
  computed: {
    ...mapGetters(["cPLg"]),
  },
};
</script>
<style lang="less">
// ui 重置
.van-tabs.tabs-home .van-tabs__wrap {
  height: 34px;
}

// 通用样式

// 样式
.home {
  padding-bottom: @tabb-heig;
}

.home .head {
  margin: 0 20px;
  height: 34px;
  background: url("../../assets/images/head-home.png") top left / auto 100%
    no-repeat;
}

.home .tabs-home .home-tab {
  padding: 16px 20px;
}
.home .tabs-home .item-imag {
  display: block;
  width: 100%;
}

.home .tabs-home .text-cell {
  padding: 12px 8px;
  border: 1px solid #ededed;
}

.home .tabs-home .van-col {
}
</style>