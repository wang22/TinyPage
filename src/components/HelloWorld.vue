<template>
<div>
  <div class="w-64 bg-white fixed inset-y-0 left-0 border-gray-400 shadow-md border-r-">
    <Navbar />
  </div>
  <div class="ml-64 bg-gray-100 min-h-screen">
    <div class="xl:w-3/4 lg:w-full md:w-full sm:w-full mx-auto px-5 h-screen min-h-screen">
      this is center content
    </div>
  </div>
</div>
</template>
<script>
  import Navbar from './Navbar';
  export default {
      name: 'HelloWorld',
      components: {
        Navbar
      }
  }
</script>
<style>
</style>