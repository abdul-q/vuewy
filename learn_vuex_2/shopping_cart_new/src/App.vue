<template>
  <div id="app">
    <div id="nav">
      <ProductList />
      <hr>
      <shopping-cart />
      <hr>
      <form-cart></form-cart>
    </div>
    <router-view />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import FormCart from "@/components/FormCart.vue";

export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart,
    FormCart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
