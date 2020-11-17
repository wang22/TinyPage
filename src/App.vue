<template>
  <div id="app">
    <router-link to="/ddd">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link><br>
    ==============================================
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>