<template>
    <div>
        <h4>Todo</h4>
        <div class="todos">
            <div v-for="todos in allTodo" :key="todos.id" class="todo">{{ todos.id }}: {{ todos.title }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Todo",
    methods: {
        ...mapActions(['fetchTodos'])
    },
    computed: mapGetters(['allTodo']),

    created() {
        this.fetchTodos();
    }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>