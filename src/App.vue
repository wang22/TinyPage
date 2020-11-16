<template>
  <div>
    <div class="w-64 bg-white fixed inset-y-0 left-0 border-gray-400 shadow-md border-r-">
      <t-navbar />
    </div>
    <div class="ml-64 bg-gray-100 min-h-screen">
      <div class="xl:w-3/4 lg:w-full md:w-full sm:w-full mx-auto px-5 h-screen min-h-screen">
        <t-breadcrumb>
          <template v-slot:right>
            <t-dropdown-group>
              <t-dropdown direction="right" :list="[{name: 'All posts'},{name: 'Draft posts'}, {name: 'Published posts'}]" />
              <t-dropdown direction="right" :list="[{name: 'All access'},{name: 'Draft Posts'}, {name: 'Published Posts'}]" />
              <t-dropdown direction="right" :list="[{name: 'All authors'},{name: 'Draft Posts'}, {name: 'Published Posts'}]" />
              <t-dropdown direction="right" :list="[{name: 'All tags'},{name: 'Draft Posts'}, {name: 'Published Posts'}]" />
              <t-dropdown direction="right" :list="[{name: 'Newest'},{name: 'Draft Posts'}, {name: 'Published Posts'}]" />
            </t-dropdown-group>
            <t-button color="green" class="ml-2">New Post</t-button>
          </template>
        </t-breadcrumb>
        <t-table></t-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>