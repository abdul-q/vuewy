import Vue from "vue";
import VueRouter from "vue-router";

import Blank from "@/views/Blank.vue";
import Grid from "@/views/Grid.vue";
import Grid2 from "@/views/Grid2.vue";
import Grid3 from "@/views/Grid3.vue";
import Grid4 from "@/views/Grid4.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/Grid4", component: Grid4 },
    { path: "/Grid3", component: Grid3 },
    { path: "/Grid2", component: Grid2 },
    { path: "/Grid", component: Grid },
    { path: "/", component: Blank },

  ]
});
