<template>
  <div class="d-flex flex fixed-content">
    <post-navbar />
    <div class="d-flex flex">
      <div class="d-flex flex-column flex">
        <div class="px-3 pt-3">
          <div class="toolbar">
            <b-button-group>
              <b-dropdown size="sm" variant="white" text="Access">
                <b-dropdown-item>All</b-dropdown-item>
                <b-dropdown-item>Public</b-dropdown-item>
                <b-dropdown-item>Members-only</b-dropdown-item>
              </b-dropdown>
              <b-dropdown size="sm" variant="white" text="Sort by: Newest">
                <b-dropdown-item>Newest</b-dropdown-item>
                <b-dropdown-item>Oldest</b-dropdown-item>
                <b-dropdown-item>Recently updated</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
             <b-input-group>
              <b-form-input class="form-control-theme" size="sm" placeholder="Search posts title or description"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" variant="white">Search</b-button>
              </b-input-group-append>
            </b-input-group>
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
