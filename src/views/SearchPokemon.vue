<template>
  <h1>Buscar Pokemon...</h1>
  <form @submit.prevent="onSubmit">

    <input
      type="number"
      placeholder="Número del Pokemon"
      v-model="pokemonId"
      ref="txtSearchId"
    >
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from "vue"
import {useRouter} from 'vue-router'

export default {
  setup () {
    const pokemonId = ref(1)
    const router = useRouter()
    const txtSearchId = ref()

    onActivated(() => {
      // txtSearchId.value.focus()
      txtSearchId.value.select()
    })

    return {
      pokemonId,
      txtSearchId,
      onSubmit:() => {
        router.push({name:'pokemon-id',params:{id:pokemonId.value}})
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>