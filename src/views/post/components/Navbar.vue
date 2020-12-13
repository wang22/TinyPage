<template>
  <div class="fade aside aside-sm">
    <div class="modal-dialog d-flex flex-column w-md bg-body">
      <div class="navbar">
        <span class="text-md mx-2">Channels</span>
        <b-dropdown size="sm" class="no-bg no-shadow no-caret" variant="icon">
          <template #button-content>
            <svg xmlns="http://www.w3.org/2000/svg"  white="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </template>
          <b-dropdown-item v-b-modal.modal-1>
            Add New Channel
          </b-dropdown-item>
          <b-dropdown-item href="#">Channel Management</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="scrollable hover">
        <div class="sidenav p-2">
          <nav class="nav-active-text-primary">
            <ul class="nav">
              <li><a href="app.user.html#all"><span class="nav-text">All</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="app.user.html#all"><span class="nav-text">Drafts</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="app.user.html#all"><span class="nav-text">Scheduled</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Authors</span></li>
              <li><a href="app.user.html#client"><span class="m-2"><b-avatar class="avatar w-24"></b-avatar> </span><span class="nav-text">小王王</span></a></li>
              <li><a href="app.user.html#client"><span class="m-2"><b-avatar class="avatar w-24"></b-avatar> </span><span class="nav-text">kkkkkkkv</span></a></li>
              <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Tags</span></li>
              <li><a href="app.user.html#client"><span class="mx-2"><b class="badge badge-circle sm text-primary"></b> </span><span class="nav-text">java</span></a></li>
              <li><a href="app.user.html#client"><span class="mx-2"><b class="badge badge-circle sm text-primary"></b> </span><span class="nav-text">php</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <b-modal id="modal-1" body-class="modal-no-padding" title="Add New Channel" no-close-on-backdrop>
      <add-channel />
    </b-modal>
  </div>
</template>
<script>
import AddChannel from '../modal/AddChannel.vue'
export default {
  components: {
    AddChannel
  }
}
</script>
