<template>
    <div>
      <input type="text" v-model="messages"> {{ messages }}
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['messages']),

    message: {
      set (value) {
        this.$store.commit('updateMessage', value)
        },

      get () {
        return this.$store.state.message
      }
    }
  }
}
</script>
