<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
  <!-- <div id="app">
    <div class="w-64 bg-white fixed inset-y-0 left-0 border-gray-400 shadow-md border-r-">
      <t-navbar />
    </div>
    <div class="ml-64 bg-gray-100 min-h-screen pb-20">
      <div class="xl:w-3/4 lg:w-full md:w-full sm:w-full mx-auto px-5 min-h-screen">
        <router-view></router-view>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'App',
}
</script>