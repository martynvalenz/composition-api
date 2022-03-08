import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
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

export default useTodos;