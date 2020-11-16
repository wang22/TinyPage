<template>
  <div>
    <div class="w-64 bg-white fixed inset-y-0 left-0 border-gray-400 shadow-md border-r-">
      <t-navbar />
    </div>
    <div class="ml-64 bg-gray-100 min-h-screen">
      <div class="xl:w-3/4 lg:w-full md:w-full sm:w-full mx-auto px-5 h-screen min-h-screen">
        <t-breadcrumb />
        <t-dropdata>
          hello world
          <template v-slot:data>
            dddd
          </template>
        </t-dropdata>

        <t-dropdata>
          <div>fffff</div>
          <template v-slot:data>
            dddd
          </template>
        </t-dropdata>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>