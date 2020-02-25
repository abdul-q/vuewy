<template>
  <div id="app">
    <div class="container">
      <Title />
      <Products />
      <router-view />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import Products from '@/components/Products.vue';

export default {
  name: 'app',
  components: {
    Title,
    Products
  }
  
}
</script>