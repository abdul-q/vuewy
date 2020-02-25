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
import { computed, reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const bills = reactive({
      price: 100,
      quantity: 50,
      taxRate: 0.075,

      total: computed(() => { return bills.price * bills.quantity; }),

      taxes: computed(() => {
        return bills.total * bills.taxRate;
      }),

      grandTotal: computed(() => {
        return bills.total + bills.taxes;
      })
    })

    // function grandTotal() {
    //   total.value + taxes.value;
    // }
    return { ...toRefs(bills) };
  }
};
</script>
