<template>
  <div>
    <div class="w-64 bg-white fixed inset-y-0 left-0 border-gray-400 shadow-md border-r-">
      <t-navbar />
    </div>
    <div class="ml-64 bg-gray-100 min-h-screen">
      <div class="xl:w-3/4 lg:w-full md:w-full sm:w-full mx-auto px-5 h-screen min-h-screen">
        this is center content
        <div class="mb-5">
            <a href="#" class="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-3 py-1 inline-block text-blue-100 hover:text-white rounded">Primary</a>
            <button type="submit" class="cursor-pointer bg-orange-600 hover:bg-orange-500 shadow-xl px-5 py-2 inline-block text-orange-100 hover:text-white rounded">Warning</button>
            <input type="button" class="cursor-pointer bg-red-600 hover:bg-red-500 shadow-xl px-5 py-2 inline-block text-orange-100 hover:text-white rounded" value="Danger">
            <a href="#" class="cursor-pointer bg-gray-700 hover:bg-gray-600 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded">Inverse</a>
            <a href="#" class="cursor-pointer bg-teal-600 hover:bg-teal-500 shadow-xl px-5 py-2 inline-block text-teal-100 hover:text-white rounded">Success</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>