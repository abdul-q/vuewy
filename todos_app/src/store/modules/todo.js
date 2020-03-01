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
    ],

    filVal: [
        {
            id: 0,
            limit: 200
        },
        {
            id: 1,
            limit: 100
        },
        {
            id: 2,
            limit: 50
        },
        {
            id: 3,
            limit: 10
        },
        {
            id: 4,
            limit: 5
        }
    ]
};

const getters = {
    allTodo: (state) => state.todo,
    chooseLimits: (state) => state.filVal
};

const actions = {
    async fetchTodos( { commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        // console.log(response.data);
        commit('setTodos', response.data)
    },

    async addTodo({ commit }, title) {
        // payload = {
        //     title: "",
        //     completed: false
        // }
        // const response = await axios.post('https://jsonplaceholder.typicode.com/todos', payload);
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
        { title, completed: false });

        commit('newTodo', response.data)
    },

    async removeTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/id`);

        commit('deleteTodo', id)
    },

    async filterTodo({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        // console.log(e)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);

        // console.log(limit)
        commit('setTodos', response.data)
    },

    async updateTodo({ commit}, updTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);

        console.log(response.data)
        commit('updatedTodo', response.data)
    }
};

const mutations = {
    setTodos: (state, todo) => (state.todo = todo),
    newTodo: (state, todo) => state.todo.unshift(todo),
    deleteTodo: (state, id) => state.todo = state.todo.filter(todo => todo.id !== id),

    setLimits: (state, value) => state.filVal = value,

    updatedTodo: (state, updTodo, index) => {
        state.todo.findIndex(todo => todo.id === updTodo.id);
        if (index) {
            state.todo.splice(index, 1, updTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
