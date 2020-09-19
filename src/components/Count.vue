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
  name: 'Count',
  setup(){
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

<style></style>
