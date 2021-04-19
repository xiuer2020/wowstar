<template>
  <div class="my">
    <van-nav-bar :border="false" left-text="个人中心" class="page-nav-bar"> 
    </van-nav-bar>
    <div class="head-port">
      <img src="../../assets/images/head-port.png" width="74" alt="" />
    </div>

    <div class="main">
      <van-cell
        title="我的订单"
        :is-link="true"
        :border="false"
        class="page-cell mt0"
      ></van-cell>
      <van-cell
        title="我的收货地址"
        :is-link="true"
        :border="false"
        class="page-cell"
      ></van-cell>
      <van-cell
        title="意见反馈"
        :is-link="true"
        :border="false"
        class="page-cell"
      ></van-cell>
      <van-cell
        title="邮费补缴"
        :is-link="true"
        :border="false"
        class="page-cell"
      ></van-cell>
    </div>

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
  data: () => ({
    footTabbInde: 1,
    // 底部选项栏下标
  }),
  computed: {
    ...mapGetters(["cPLg"]),
  },
};
</script>
<style lang="less">
// 样式
.my{
  padding-bottom: @tabb-heig;
}
.my .head-port {
  padding-top: 30px;
  padding-bottom: 36px;
  text-align: center;
}
.my .main .page-cell {
  margin-top: 24px;
}
</style>>


