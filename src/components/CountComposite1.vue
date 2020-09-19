<template>
  <div>
    <button @click="decrement" type="button">-</button>
    <span>{{state.num}}</span>
    <button @click="increment" type="button">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: 'CountComposite1',
  setup(){
    // reactiveメソッドを用いてdataに引き渡す
    const state = reactive({
      num: 0
    })
    const increment = () => {
      state.num += 1
    }
    const decrement = () => {
      state.num -= 1
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
