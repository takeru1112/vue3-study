<template>
  <div>
    <button @click="decrement" type="button">-</button>
    <span>{{ state.num }}</span>
    <button @click="increment" type="button">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
/*
 * Vue2.xでは
 * export default Vue.extend
 * としていた部分をdefineComponentに変更
 */
export default defineComponent({
  name: "CountComposite1",
  props: {
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      state: {
        num: this.defaultValue
      }
    };
  },
  methods: {
    increment() {
      this.state.num += 1;
    },
    decrement() {
      this.state.num -= 1;
    }
  }
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
