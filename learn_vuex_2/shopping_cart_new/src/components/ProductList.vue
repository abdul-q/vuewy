<template>
    <div>
        <div>
            <h3>Product List</h3>
        </div>
        <!-- <div>
            <ul>
                <li v-for="product in products" :key="product.id">
                  {{ product.title }} | ${{ product.price }}
                </li>
            </ul>
        </div> -->
        <div>
            <ul>
                <li v-for="product in allProducts" :key="product.id">
                  {{ product.title }} || ${{ product.price }} || {{ product.inventory }} remaining
                  <button @click="addProductToCart(product)">Add to Cart</button>
                </li>
            </ul>
            <ul>
                <li v-for="product in availableProducts" :key="product.id">
                  {{ product.title }} | ${{ product.price }}
                </li>
            </ul>
            <div>
                <p>We have {{ productsCount }} type of products</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'ProductList',
    // data() {
    //     return {
    //         products: []
    //     }
    // },
    methods: {
        ...mapActions(['fetchProducts']),
        ...mapActions( 'cart', [
            'addProductToCart'
        ])
    },

    computed: {
        ...mapGetters(['allProducts']),
        ...mapGetters(['availableProducts']),
        ...mapGetters(['productsCount']),
    },

    created() {
        this.fetchProducts();
    }
    // created() {
        // shop.getProducts(products => {
        //     this.products = products;
        // }),
    // } 
}
</script>

<style scoped>

</style>