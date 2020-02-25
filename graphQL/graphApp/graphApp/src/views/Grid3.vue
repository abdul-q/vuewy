<template>
  <div>
    <div>Price: {{ price }}</div>
    <div>Quantity: {{ quantity }}</div>
    <div>Tax Rate: {{ taxRate }}</div>
    <div>Total: {{ total }}</div>
    <div>Taxes: {{ taxes }}</div>
    <div>Grand Total: {{ grandTotal }}</div>
  </div>
</template>

<script>
import { ref, computed } from "@vue/composition-api";

export default {
  setup() {
    var price = ref(10);
    var quantity = ref(5);
    const taxRate = ref(0.075);

    const total = computed(() => {
      return price.value * quantity.value;
    });

    const taxes = computed(() => {
      return total.value * taxRate.value;
    });

    const grandTotal = computed(() => {
      return total.value + taxes.value;
    });

    // function grandTotal() {
    //   total.value + taxes.value;
    // }
    return { 
      price, 
      quantity, 
      taxRate, 
      total, 
      taxes, 
      grandTotal 
    };
  }
};
</script>
