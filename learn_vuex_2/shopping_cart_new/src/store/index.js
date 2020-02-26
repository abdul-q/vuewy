import Vue from "vue";
import Vuex from "vuex";
import productList from "@/store/modules/productList";
import cart from "@/store/modules/cart";
import formc from "@/store/modules/cart";

// import { getField, updateField } from "vuex-map-fields"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    productList,
    cart,
    formc
  },
  getters: {}
});
