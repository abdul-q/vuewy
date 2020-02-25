<template>
  <div class="container">
    <h4 class="container">List of Products</h4>
    <ul>
      <li :v-for="product in productList()">
        {{ product }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
import shop from "@/api/shop";

export default {
  setup() {
    const shopping = reactive({
      products: []

      // products1: () => {
      //   shop.getProducts(products => {
      //     shopping.products = products;
      //   })
      // }
    });

    function productList() {
      shop.getProducts(products => {
        shopping.products = products;
      });
    }

    return { ...toRefs(shopping), productList };
  }
};
</script>
