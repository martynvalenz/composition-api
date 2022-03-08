import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {id:'1',text:'Recolectar las piedras del infinito',completed:false},
      {id:'2',text:'Recolectar Piedra del alma',completed:true},
      {id:'3',text:'Recolectar Piedra del poder',completed:true},
      {id:'4',text:'Recolectar piedra de la realidad',completed:false},
      {id:'5',text:'Conseguir nuevos compis',completed:false},
    ]
  },
  mutations: {
    toggleTodo(state, id){
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos[index].completed = !state.todos[index].completed
    }
  },
  actions: {
  },
  getters: {
    allTodos(state,getters,rootState){
      return [...state.todos]
    },

    pendingTodos(state,getters,rootState){
      return state.todos.filter(todo => !todo.completed)
    },

    completedTodos(state,getters,rootState){
      return state.todos.filter(todo => todo.completed)
    },

    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }
  },
  modules: {
  }
})
