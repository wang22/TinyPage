<template>
  <div class="d-flex flex fixed-content">
    <!-- <post-navbar @changeChannel="onChangeChannel" @changeStatus="onChangeStatus" /> -->
    <div class="d-flex flex">
      <div class="d-flex flex-column flex">
        <div class="px-3 pt-3">
          <div class="toolbar">
            <b-button size="sm" variant="primary" style="white-space: nowrap;" @click="$router.push('/posts/publish')">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New
            </b-button>
            <b-button-group>
              <b-dropdown size="sm" variant="white" text="Access: All">
                <b-dropdown-item>All</b-dropdown-item>
                <b-dropdown-item>Public</b-dropdown-item>
                <b-dropdown-item>Members-only</b-dropdown-item>
                <b-dropdown-item>Private</b-dropdown-item>
              </b-dropdown>
              <b-dropdown size="sm" variant="white" text="Author: All">
                <b-dropdown-item>Newest</b-dropdown-item>
                <b-dropdown-item>Oldest</b-dropdown-item>
                <b-dropdown-item>Recently updated</b-dropdown-item>
              </b-dropdown>
              <b-dropdown size="sm" variant="white" text="Tag: All">
                <b-dropdown-item>Newest</b-dropdown-item>
                <b-dropdown-item>Oldest</b-dropdown-item>
                <b-dropdown-item>Recently updated</b-dropdown-item>
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
        <b-breadcrumb class="no-bg" :items="breadcrumb" style="margin-bottom: -1rem;"></b-breadcrumb>
        <post-list ref="postList" />
      </div>
    </div>
  </div>
</template>
<script>
// import PostNavbar from './components/Navbar'
import PostList from './components/PostList'

export default {
  data () {
    return {
      breadcrumb: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Manage',
          href: '#'
        },
        {
          text: 'Library',
          active: true
        }
      ]
    }
  },
  components: {
    // PostNavbar,
    PostList
  },
  methods: {
    onChangeChannel (id) {
      this.setPostParam(id, 0)
    },
    onChangeStatus (status) {
      this.setPostParam(0, status)
    },
    setPostParam (channel, status) {
      this.$refs.postList.setQueryParam({
        channelID: channel,
        status: status
      })
    }
  }
}
</script>
