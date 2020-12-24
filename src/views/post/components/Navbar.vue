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
          <b-dropdown-item href="#">Change Channel Sort</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="scrollable hover">
        <div class="sidenav p-2">
          <nav class="nav-border b-primary auto-nav">
            <ul class="nav">
              <li><a href="javascript:void(0)"><span class="nav-text">All</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="javascript:void(0)"><span class="nav-text">Drafts</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="javascript:void(0)"><span class="nav-text">Scheduled</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li class="d-flex" v-for="item in channels" :key="item.id">
                <a href="javascript:void(0)" class="flex-grow-1"><span class="nav-text">{{item.name}}</span></a>
                <b-button size="sm" variant="white" class="no-bg no-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit mx-2"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                </b-button>
              </li>
              <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Authors</span></li>
              <li class="active"><a href="javascript:void(0)"><span class="m-2"><b-avatar class="avatar w-24"></b-avatar> </span><span class="nav-text">小王王</span></a></li>
              <li><a href="javascript:void(0)"><span class="m-2"><b-avatar class="avatar w-24"></b-avatar> </span><span class="nav-text">kkkkkkkv</span></a></li>
              <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Tags</span></li>
              <li class="active"><a href="javascript:void(0)"><span class="mx-2"><b class="badge badge-circle sm text-primary"></b> </span><span class="nav-text">java</span></a></li>
              <li><a href="javascript:void(0)"><span class="mx-2"><b class="badge badge-circle sm text-primary"></b> </span><span class="nav-text">php</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <b-modal ref="channelModal" id="modal-1" size="lg" body-class="modal-no-padding" title="Add New Channel" no-close-on-backdrop @ok="onSaveChannel">
      <add-channel ref="addChannel" />
    </b-modal>
  </div>
</template>
<script>
import AddChannel from '../modal/AddChannel.vue'
import { all as getAllChannel } from '@/api/channel'

export default {
  components: {
    AddChannel
  },
  data () {
    return {
      channels: []
    }
  },
  mounted () {
    this.channelList()
  },
  methods: {
    onSaveChannel (bvModalEvent) {
      bvModalEvent.preventDefault()
      this.$refs.addChannel.doSave(() => {
        this.$refs.channelModal.hide()
        this.$bvToast.toast('success')
      })
    },
    channelList () {
      const _this = this
      getAllChannel().then(res => {
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        _this.channels = res.data.channels
      })
    }
  }
}
</script>
