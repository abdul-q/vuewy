<template>
  <div id="app">
    <div class="container">
    <add-todo />
      <Todo />
    </div>   
    <router-view />
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
import AddTodo from '@/components/AddTodo.vue'

export default {
  name: 'app',
  components: {
    Todo,
    AddTodo
  }
  
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>