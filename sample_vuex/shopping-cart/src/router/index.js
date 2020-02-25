import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Products from "@/components/Products.vue";
// import Title from "@/components/Title.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Products",
  //   component: Products
  // },
  
  // {
  //   path: "/",
  //   name: "Title",
  //   component: Title
  // }
  
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
