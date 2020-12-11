<template>
  <div class="d-flex flex fixed-content">
    <post-navbar />
    <div class="d-flex flex">
      <div class="d-flex flex-column flex">
        <div class="p-3">
          <div class="toolbar">
            toolbars
          </div>
        </div>
        <post-list />
      </div>
    </div>
  </div>
</template>
<script>
import PostNavbar from './components/Navbar'
import PostList from './components/PostList'

export default {
  components: {
    PostNavbar,
    PostList
  }
}
</script>
