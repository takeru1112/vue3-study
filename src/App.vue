<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Vue 3 Study</h1>
  <h2>JS</h2>
  <Count :defaultValue="10" />
  <h2>TS</h2>
  <CountTs :defaultValue="10" />
  <h2>TS with setup</h2>
  <CountComposite1 :defaultValue="10" />
  <h2>TS with composables</h2>
  <CountComposite2 :defaultValue="10" />
</template>

<script>
import Count from './components/Count.vue'
import CountTs from './components/CountTs.vue'
import CountComposite1 from './components/CountComposite1.vue'
import CountComposite2 from './components/CountComposite2.vue'

export default {
  name: 'App',
  components: {
    Count,
    CountTs,
    CountComposite1,
    CountComposite2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
