<template>
  <div>
    <button @click="decrement" type="button">-</button>
    <span>{{state.counter.num}}</span>
    <span>{{state.counter.text}}</span>
    <button @click="increment" type="button">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCounter from './composables/useCounter'

export default defineComponent({
  name: 'CountComposite2',
  props: {
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  setup(props){
    // 利用したいcomposableを実行して機能を取り出す
    const { count, increment, decrement } = useCounter(props.defaultValue)
    const state = {
      counter: count,
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
