<template>
  <div class="home">
    Reactive vs Ref
  </div>
  <h3>{{ironman}}</h3>
  <h3>{{hulk}}</h3>

  <button @click="changeIronman">Cambiar Ironman</button>
  <button @click="changeHulk">Cambiar hulk</button>

  <h3>Ironman {{ironmanIsAlive}}</h3>
  <h3>Hulk {{hulkIsAlive}}</h3>
  <button @click="changeStatus">Change Status</button>
</template>

<script>
// @ is an alias to /src

import { ref,reactive } from "vue"

export default {
  name: 'HomeView',

  setup(){
    const ironman = ref({name:'Tony',age:50})
    const hulk = reactive({name:'Bruce',age:45})

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = reactive(true)

    const changeStatus = () => {
      hulk.value = !hulk.value
    }
    
    return{
      ironman,
      hulk,

      ironmanIsAlive,
      hulkIsAlive,

      changeIronman:() => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeHulk:() => {
        hulk.name = 'Bruce Banner'
        hulk.age = 52
      },

      changeStatus
    }
  }
}
</script>
