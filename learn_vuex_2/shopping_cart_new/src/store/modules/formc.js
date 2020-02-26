import { getField, updateField } from "vuex-map-fields"

const state = {
  filled: "Hello Happy People"
}

const getters = {
//   getMessage: (state) => {
//     return getField(state)}
  getField
}

const actions = {
  // setMessage: (commit, value) => commit('updateMesage', value)
}

const mutations = {
  // updateMesage: (state, value) => state.filled = value
  updateField
}


export default {
  state,
  getters,
  actions,
  mutations
}
