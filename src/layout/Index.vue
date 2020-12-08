<template>
  <div class="bg-gray-100 min-w-screen min-h-screen">
    <div class="fixed bg-white w-80 h-full block shadow-right">
      <t-navbar />
    </div>
    <div class="ml-80">
      <div class="container mx-auto p-10">
        <router-view />
      </div>
    </div>
  </div>
</template>