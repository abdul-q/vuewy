<template>
  <div>
    <div>Price: {{ price }}</div>
    <div>Total: {{ price * quantity }}</div>
    <div>Taxes: {{ totalPriceWithTax - total }}</div>
    <div>Grand Total: {{ totalPriceWithTax }}</div>
  </div>
</template>

<script>
export default {
  name: "Blank",
  data() {
    return {
      price: 10.00,
      quantity: 2      
    }    
  },
  computed: {
    total() {
      return this.price * this.quantity
      },
    totalPriceWithTax() {
      return this.total * 1.03
    }
  }
};
</script>

<style scoped>
</style>
