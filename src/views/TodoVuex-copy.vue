<template>
  <h1>Thanos Todo List</h1>
  <h4>Tareas: {{pending.length}} / {{todos.length}}</h4>
  <hr>
  <button @click="setTab('all')" :class="{'active':currentTab == 'all'}">Todos</button>
  <button @click="setTab('pending')" :class="{'active':currentTab == 'pending'}">Pendientes</button>
  <button @click="setTab('completed')" :class="{'active':currentTab == 'completed'}">Completados</button>

  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{'completed':todo.completed}"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const currentTab = ref('all')

    const setTab = (tab) => {
      currentTab.value = tab
    }

    /* const toggleTodo = (id) => {
      store.commit('toggleTodo',id);
    } */

    return {
      currentTab,
      setTab,
      pending:computed(() => store.getters['pendingTodos']),
      completed:computed(() => store.getters['completedTodos']),
      allTodos: computed(() => store.getters['allTodos']),
      todos: computed(() => store.state.todos),
      toggleTodo:(id) => store.commit('toggleTodo',id),
      getTodosByTab:computed(() => store.getters['getTodosByTab'](currentTab.value))
    }
  }
}
</script>

<style scoped>
  div{
    display:flex;
    justify-content: center;
    text-align: center;
  }

  ul{
    width: 300px;
    text-align: left;
  }

  li{
    cursor:pointer; 
  }

  .active{
    background-color: #2c3e50;
    color:white;
  }
  .completed{
    text-decoration: line-through;
    color:#125496;
  }
</style>