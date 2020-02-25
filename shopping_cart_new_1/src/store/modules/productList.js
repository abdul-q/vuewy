import shop from '@/api/shop'

const state = {
    // same as data () 
    allItems: [],
    cart: []
}

const getters = {
    allProducts: (state) => state.allItems,

    remainingProducts: (state) => {
        return state.allItems.filter(product => product.inventory > 0)
    },

    cartProducts: (state) => {
        return state.cart.map(cartItem => {
            const product = state.allItems.find(product => product.id === cartItem.id)
            // console.log(product)
            return {
              title: product.title,
              price: product.price,
              quantity: cartItem.quantityto
            }
        })
    },

    cartTotal (state, getters) {
        return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    }
}

const actions = {
    fetchProducts: ({ commit }) => {
        shop.getProducts(products => {
            state.allItems = products;
        })
        commit('setProducts', state.allItems)
    },

    addProductToCart (context, product) {
        if (product.inventory > 0) {
            const cartItem = context.state.cart.find(item => item.id === product.id)
            // find cartItem
            if (!cartItem) {
                context.commit('pushProductToCart', product.id)
            } else {
                //
                context.commit('incrementItemQuantity', cartItem)
            }

            context.commit('decrementItemInventory', product)
        }
        
    }
}

const mutations = {
    setProducts (state, products) {
        state.allItems = products
    },

    pushProductToCart: (state, productId) => {
        state.cart.push({
            id: productId,
            quantity: 1
        })
    },

    incrementItemQuantity: (state, cartItem) => cartItem.quantity++,

    decrementItemInventory: (state, product) => product.inventory--
}

export default {
    state,
    getters,
    actions,
    mutations
}
