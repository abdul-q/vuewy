import App from "@/App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "@/router";
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
