<template>
  <div>
    <button @click="decrement" type="button">-</button>
    <span>{{state.counter.num}}</span>
    <button @click="increment" type="button">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCounter from './composables/useCounter'
export default defineComponent({
  name: 'CountComposite2',
  setup(){
    const {count, increment, decrement} = useCounter()
    const state = {
      counter: count
    }
    return {
      state,
      increment,
      decrement
    }
  },
});
</script>

<style lang="css" scoped>
button {
  padding: 10px;
}
span {
  margin: 0 10px;
  font-weight: bold;
}
</style>
