import shop from '@/api/shop';

const state = {
    // Equivalent to data()
    products: [],
    messages: 'Hello Happy People'
};

const getters = {
    //equi computed property    
    allProducts: (state) => state.products,

    availableProducts: (state) => {
        return state.products.filter(product => product.inventory > 0)
    },

    productsCount: (state) => {
        return state.products.length;
    },
    
    // getMessage: (state) => state.message
};

const actions = {
    // equi methods
    // actions decide when mutations are fired
    fetchProducts ({ commit }) {
        shop.getProducts(products => {
            commit('setProducts', products)
        });
    },

    // getMessage: (commit, value) => commit('updateMesage', value)
    // setMessage: (state, value) => state.message = value
};

// const actions = {
//     // equi methods
//     // actions decide when mutations are fired
//     fetchProducts ({ commit }) {
//         shop.getProducts(products => {
//             state.products = products;
//         });
//         commit('setProducts', state.products);
//     },    
// };

const mutations = {
    // responsible for Setting and Updating the state
    setProducts (state, products) {
        state.products = products;
    },
    
    decrementProductQuantity (state, product) {
        product.inventory--
    },

    updateMessage: (state, value) => state.message = value
    
};

export default {
    // namespadced: true,
    state,
    getters,
    actions,
    mutations
};
