import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    less: {
      state: {
        cPLg: '#2c2c2c'
      },
      mutations: {},
      actions: {},
    }
  },
  getters: {
    cPLg: stat => stat.less.cPLg,
    // 主题色
  }
});