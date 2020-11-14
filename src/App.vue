<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Inter:400,500,600,700,900&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>