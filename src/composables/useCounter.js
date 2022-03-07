import {ref} from 'vue';

const useCounter = (value = 5) => {
  const counter = ref(value) 

    return {
      counter,
      increase:() => counter.value++,
      decrease:() => counter.value--
    }
}

export default useCounter;