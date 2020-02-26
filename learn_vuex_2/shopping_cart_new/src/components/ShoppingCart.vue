<template>
    <div>
        <h3>Shopping Cart</h3>
        <ul>
            <li v-for="product in cartProducts" :key="product.id">
                {{ product.title }} - {{ product.price}} - {{ product.quantity}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ShoppingCart',

  computed: {
    ...mapGetters('cart', [ 'cartProducts' ])
  }
}
</script>
