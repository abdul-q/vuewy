import Vue from "vue";
import Vuex from "vuex";

import productList from "@/store/modules/productList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    productList
  }
});
