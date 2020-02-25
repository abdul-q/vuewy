// import shop from "@/api/shop"

const state = {
  cart: []
}

const getters = {
  //
  cartProducts: (state, rootState) => {
    return state.cart.map(cartItem => {
      const product = rootState.products.find(product => product.id === cartItem.id)
      return {
        title: product.title,
        price: product.price,
        quantity: cartItem.quantity
      };
    })        
  }
}

const actions = {
  //
  addProductToCart(context, product) {
    if (product.inventory > 0) {
      // find cartItem
      const cartItem = context.state.cart.find(item => item.id === product.id)
      if (!cartItem) {
          //push to Product Cart
          context.commit('pushProductToCart', product.id)
      } else {
          // increement quantity
          context.commit('incrementItemQuantity', cartItem)
      }
      // if product is added to cart, reduce the product in the inventory
      context.commit('decrementProductQuantity', product, { root: true })
    }
  }
}

const mutations = {
  //
  pushProductToCart (state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
  },
  
  incrementItemQuantity: (state, cartItem) => {
    cartItem.quantity++
  },   
  
  setCartItems: (state, cart) => state.cart = cart,
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
