<template>
  <div>
    <h4>Forming</h4>
    <input type="text" v-model="filled">> {{ filled }}
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "FormCart",
  computed: {
    // message: {
    //   set (value) {
    //     this.$store.commit('updateMessage', value)
    //     },

    //   get () {
    //     return this.$store.state.message
    //   }
    // },
    ...mapFields(["filled"])
  }
};
</script>
