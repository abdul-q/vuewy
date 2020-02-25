<template>
  <div>
    <div class="container">
      <h3>Product List</h3>
      <ol>
        <li v-for="product in remainder" :key="product.id">
          {{ product.title }} || ${{ product.price }} || {{ product.inventory }} remaining
          <button @click="addProductToCart(product)">Add to Cart</button>
        </li>
      </ol>
      <p><strong> Cart greater than 2</strong></p>
      <ol>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} || ${{ product.price }} || {{ product.inventory }} remaining
        </li>
      </ol>
    </div>  
  </div>
</template>

<script>
import { mapActions, mapGetters  } from "vuex";

export default {
  name: "ProductList",

  methods: {
    ...mapActions(['fetchProducts']),
    ...mapActions(['addProductToCart'])
    // ...mapActions(['incrementItemQuantity']),
    // ...mapActions(['decrementItemInventory']),
  },

  computed: {
    ...mapGetters({
      products: 'allProducts'
    }),
    ...mapGetters({
      remainder: 'remainingProducts'
    })
  },
  
  created() {
    this.fetchProducts();
  }

};
</script>
