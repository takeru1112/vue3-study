<template>
  <div class="count">
    <button @click="decrement" type="button">-</button>
    <span>{{ state.num }}</span>
    <button @click="increment" type="button">+</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  props: {
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    const state = {
      num: this.defaultValue
    };
    return {
      state
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
};
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
