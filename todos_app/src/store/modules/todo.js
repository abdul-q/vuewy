import axios from "axios";

const state = {
    todo: [
    //     {
    //         id: 1,
    //         title: 'Todo One'
    //     },
    //     {
    //         id: 2,
    //         title: 'Todo Two'
    //     }
    ]
};

const getters = {
    allTodo: (state) => state.todo
};

const actions = {
    async fetchTodos( { commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        // console.log(response.data);
        commit('setTodos', response.data)
    },

    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
        { title, completed: false });

        commit('newTodo', response.data)
    }
};

const mutations = {
    setTodos: (state, todo) => (state.todo = todo),
    newTodo: (state, todo) => state.todo.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations
};
