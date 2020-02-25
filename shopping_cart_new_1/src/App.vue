<template>
  <div>
    <div class="container">
      <product-list />
      <shopping-cart />
      <router-view />
    </div>
  </div>
</template>

<script>

import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "app",
  components: {
    ProductList,
    ShoppingCart
  }  
}
</script>

<style>

</style>
