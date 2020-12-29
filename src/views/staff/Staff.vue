<template>
  <div class="d-flex flex fixed-content">
    <t-slide-nav title="Staff" :nav="nav">
      <template #titleButton>
        <b-dropdown size="sm" class="no-bg no-shadow no-caret" variant="icon">
          <template #button-content>
            <svg xmlns="http://www.w3.org/2000/svg"  white="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </template>
          <b-dropdown-item v-b-modal.modal-1>
            Add New Channel
          </b-dropdown-item>
          <b-dropdown-item href="#" @click="sortChannel = !sortChannel; editChannel = false">Change Channel Sort</b-dropdown-item>
          <b-dropdown-item href="#" @click="editChannel = !editChannel; sortChannel = false">Edit Channel</b-dropdown-item>
        </b-dropdown>
      </template>
    </t-slide-nav>
    <div class="d-flex flex">
      <div class="d-flex flex-column flex">
        <div class="px-3 pt-3">
          <div class="toolbar">
            <b-button size="sm" variant="primary" style="white-space: nowrap;" @click="$router.push('/posts/publish')">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Post
            </b-button>
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
        <div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nav: [
        {
          title: 'All'
        },
        {
          title: 'All1',
          badge: '121'
        },
        {
          title: 'All2',
          badge: '11'
        }
      ]
    }
  }
}
</script>
