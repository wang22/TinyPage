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
          <b-dropdown-item href="#" @click="sortChannel = !sortChannel">Change Channel Sort</b-dropdown-item>
          <b-dropdown-item href="#" @click="editChannel = !editChannel">Edit Channel</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="scrollable hover">
        <div class="sidenav p-2">
          <nav class="nav-border b-primary auto-nav">
            <ul class="nav">
              <li><a href="javascript:void(0)"><span class="nav-text">All</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="javascript:void(0)"><span class="nav-text">Drafts</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="javascript:void(0)"><span class="nav-text">Scheduled</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <tree :value="channels">
                <li slot-scope="{node}" class="d-flex">
                  <a href="javascript:void(0)" class="flex-grow-1">
                    <span class="m-2">
                      <svg class="avatar-svg w-24 h-24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768.016 320a64 64 0 0 0-64-64h-640a64 64 0 0 0 0 128c-32 32-64 68.32-64 192 0 90.224 21.504 167.808 98.368 203.28-1.472 6.688-2.368 13.6-2.368 20.72 0 49.376 37.376 89.568 85.312 94.944C217.072 971.12 294.272 1024 384.016 1024s166.944-52.88 202.688-129.056c47.936-5.376 85.312-45.568 85.312-94.944 0-7.12-0.912-14.032-2.368-20.72 76.896-35.472 98.368-113.056 98.368-203.28 0-123.68-32-160-64-192a64 64 0 0 0 64-64z" fill="#DAE2E5" p-id="3708"></path><path d="M64.016 384v128c0 70.72 57.28 128 128 128s128-21.872 128-21.872c-3.008 30.88 28.624 53.872 64 53.872s68.496-24.992 64-53.872c0 0 57.28 21.872 128 21.872s128-57.28 128-128v-128h-640z" fill="#EDD87E" p-id="3709"></path><path d="M512.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="3710"></path><path d="M256.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="3711"></path><path d="M288.016 704s0 96 96 96 96-96 96-96h-192z" fill="#EF4D4D" p-id="3712"></path><path d="M928.016 416m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#DAE2E5" p-id="3713"></path><path d="M928.016 480c-36.528 0-69.28-15.472-92.624-40.032 10.72 41.344 47.936 72.032 92.624 72.032s81.904-30.688 92.624-72.032C997.296 464.528 964.544 480 928.016 480z" opacity=".1" p-id="3714"></path><path d="M512.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3715"></path><path d="M256.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3716"></path><path d="M474.384 736c5.568-17.632 5.632-32 5.632-32h-192s0.064 14.368 5.632 32h180.736z" opacity=".1" p-id="3717"></path><path d="M320.016 624a64 48 0 1 0 128 0 64 48 0 1 0-128 0Z" opacity=".1" p-id="3718"></path><path d="M64.016 384h640v32h-640z" opacity=".1" p-id="3719"></path><path d="M576.016 896c-18.288 0-49.44-23.12-64-32 10.496 20.496 32 44.496 60.528 56.32 5.216-8.16 10.032-16.56 14.16-25.376l0.128-0.032c-3.6 0.4-7.104 1.088-10.816 1.088zM181.2 894.912l0.128 0.032c4.128 8.816 8.944 17.216 14.16 25.376 28.528-11.808 50.032-35.808 60.528-56.32-14.56 8.88-45.712 32-64 32-3.712 0-7.216-0.688-10.816-1.088z" opacity=".1" p-id="3720"></path><path d="M862.272 346.368A95.328 95.328 0 0 1 928.016 320c24.496 0 46.592 9.44 63.568 24.56C985.2 129.712 826.96 0 608.016 0h-288c-160 0-256 96-256 256h640c100.4 0 149.712 64.128 158.256 90.368z" fill="#EF4D4D" p-id="3721"></path><path d="M248.336 96h387.376c121.84 0 229.376 30.288 314.56 85.776C888.896 66.16 764.048 0 608.016 0h-288C210.544 0 131.072 44.976 91.792 124.592 136.976 106.064 189.264 96 248.336 96z" fill="#FFFFFF" opacity=".1" p-id="3722"></path><path d="M862.272 346.336a95.12 95.12 0 0 1 29.632-19.184c1.024-0.432 2.192-0.624 3.216-0.992 4.592-1.68 9.184-3.28 14.096-4.256a93.232 93.232 0 0 1 37.152-0.064c4.16 0.816 8.064 2.192 12 3.536 1.536 0.496 3.152 0.816 4.656 1.44a94.032 94.032 0 0 1 14.944 7.568c4.88 2.976 9.376 6.4 13.632 10.16a417.376 417.376 0 0 0-3.216-40.752c-18.064-9.744-38.4-15.776-60.336-15.776-31.472 0-59.904 11.776-82.192 30.624 8.48 10.64 14.096 20.608 16.416 27.696z" opacity=".15" p-id="3723"></path></svg>
                    </span>
                    <span class="nav-text">{{ node.name }}</span>
                  </a>
                  <b-button v-if="sortChannel" size="sm" variant="white" class="no-bg no-shadow" style="cursor: move;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>
                  </b-button>
                </li>
              </tree>
              <!-- <li class="d-flex" v-for="item in channels" :key="item.id">
                <a href="javascript:void(0)" class="flex-grow-1">
                  <span class="m-2">
                    <b-avatar class="avatar w-24 overflow-hidden" src="https://placekitten.com/300/300"></b-avatar>
                    <svg class="avatar-svg w-24 h-24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512.016 672m-352 0a352 352 0 1 0 704 0 352 352 0 1 0-704 0Z" fill="#DAE2E5" p-id="3544"></path><path d="M512.016 224m-224 0a224 224 0 1 0 448 0 224 224 0 1 0-448 0Z" fill="#DAE2E5" p-id="3545"></path><path d="M992.016 288h-64v-64a32 32 0 1 0-64 0v82.752l-110.032 110.032a352.48 352.48 0 0 1 42.288 48.224l112.992-112.992h82.752a32 32 0 1 0 0-64.016zM160.016 224a32 32 0 1 0-64 0v64h-64a32 32 0 1 0 0 64h82.752l112.992 112.992a352.48 352.48 0 0 1 42.288-48.224l-110.032-110.016V224z" fill="#E29460" p-id="3546"></path><path d="M512.016 576m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" opacity=".1" p-id="3547"></path><path d="M512.016 704m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" opacity=".1" p-id="3548"></path><path d="M512.016 832m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" opacity=".1" p-id="3549"></path><path d="M576.016 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3550"></path><path d="M448.016 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3551"></path><path d="M685.328 365.84C644.272 416 581.888 448 512.016 448s-132.256-32-173.312-82.16c-9.344 5.312-18.432 10.976-27.216 17.056C358.384 442 430.672 480 512.016 480s153.632-38 200.528-97.088a357.92 357.92 0 0 0-27.216-17.072z" opacity=".1" p-id="3552"></path><path d="M534.736 293.632l-45.248 45.248a32 32 0 0 1-45.264 0 31.808 31.808 0 0 1-8.24-14.624 31.84 31.84 0 0 0 8.24 30.624 32 32 0 0 0 45.264 0l45.248-45.248a31.84 31.84 0 0 0 8.24-30.624 31.6 31.6 0 0 1-8.24 14.624z" opacity=".1" p-id="3553"></path><path d="M489.408 339.872a32 32 0 1 1-45.264-45.248l45.248-45.248a31.984 31.984 0 1 1 45.264 45.248l-45.248 45.248z" fill="#FC821F" p-id="3554"></path><path d="M512.016 896c-134.224 0-255.408-55.216-342.528-144 36.288 155.776 175.68 272 342.528 272s306.256-116.224 342.528-272c-87.12 88.784-208.304 144-342.528 144z" opacity=".05" p-id="3555"></path></svg>
                    <svg class="avatar-svg w-24 h-24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768.016 320a64 64 0 0 0-64-64h-640a64 64 0 0 0 0 128c-32 32-64 68.32-64 192 0 90.224 21.504 167.808 98.368 203.28-1.472 6.688-2.368 13.6-2.368 20.72 0 49.376 37.376 89.568 85.312 94.944C217.072 971.12 294.272 1024 384.016 1024s166.944-52.88 202.688-129.056c47.936-5.376 85.312-45.568 85.312-94.944 0-7.12-0.912-14.032-2.368-20.72 76.896-35.472 98.368-113.056 98.368-203.28 0-123.68-32-160-64-192a64 64 0 0 0 64-64z" fill="#DAE2E5" p-id="3708"></path><path d="M64.016 384v128c0 70.72 57.28 128 128 128s128-21.872 128-21.872c-3.008 30.88 28.624 53.872 64 53.872s68.496-24.992 64-53.872c0 0 57.28 21.872 128 21.872s128-57.28 128-128v-128h-640z" fill="#EDD87E" p-id="3709"></path><path d="M512.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="3710"></path><path d="M256.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="3711"></path><path d="M288.016 704s0 96 96 96 96-96 96-96h-192z" fill="#EF4D4D" p-id="3712"></path><path d="M928.016 416m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#DAE2E5" p-id="3713"></path><path d="M928.016 480c-36.528 0-69.28-15.472-92.624-40.032 10.72 41.344 47.936 72.032 92.624 72.032s81.904-30.688 92.624-72.032C997.296 464.528 964.544 480 928.016 480z" opacity=".1" p-id="3714"></path><path d="M512.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3715"></path><path d="M256.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3716"></path><path d="M474.384 736c5.568-17.632 5.632-32 5.632-32h-192s0.064 14.368 5.632 32h180.736z" opacity=".1" p-id="3717"></path><path d="M320.016 624a64 48 0 1 0 128 0 64 48 0 1 0-128 0Z" opacity=".1" p-id="3718"></path><path d="M64.016 384h640v32h-640z" opacity=".1" p-id="3719"></path><path d="M576.016 896c-18.288 0-49.44-23.12-64-32 10.496 20.496 32 44.496 60.528 56.32 5.216-8.16 10.032-16.56 14.16-25.376l0.128-0.032c-3.6 0.4-7.104 1.088-10.816 1.088zM181.2 894.912l0.128 0.032c4.128 8.816 8.944 17.216 14.16 25.376 28.528-11.808 50.032-35.808 60.528-56.32-14.56 8.88-45.712 32-64 32-3.712 0-7.216-0.688-10.816-1.088z" opacity=".1" p-id="3720"></path><path d="M862.272 346.368A95.328 95.328 0 0 1 928.016 320c24.496 0 46.592 9.44 63.568 24.56C985.2 129.712 826.96 0 608.016 0h-288c-160 0-256 96-256 256h640c100.4 0 149.712 64.128 158.256 90.368z" fill="#EF4D4D" p-id="3721"></path><path d="M248.336 96h387.376c121.84 0 229.376 30.288 314.56 85.776C888.896 66.16 764.048 0 608.016 0h-288C210.544 0 131.072 44.976 91.792 124.592 136.976 106.064 189.264 96 248.336 96z" fill="#FFFFFF" opacity=".1" p-id="3722"></path><path d="M862.272 346.336a95.12 95.12 0 0 1 29.632-19.184c1.024-0.432 2.192-0.624 3.216-0.992 4.592-1.68 9.184-3.28 14.096-4.256a93.232 93.232 0 0 1 37.152-0.064c4.16 0.816 8.064 2.192 12 3.536 1.536 0.496 3.152 0.816 4.656 1.44a94.032 94.032 0 0 1 14.944 7.568c4.88 2.976 9.376 6.4 13.632 10.16a417.376 417.376 0 0 0-3.216-40.752c-18.064-9.744-38.4-15.776-60.336-15.776-31.472 0-59.904 11.776-82.192 30.624 8.48 10.64 14.096 20.608 16.416 27.696z" opacity=".15" p-id="3723"></path></svg>
                  </span>
                  <span class="nav-text">{{ item.name }}</span>
                </a>
                <b-button v-if="editChannel" size="sm" variant="white" class="no-bg no-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit mx-2"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                </b-button>
                <b-avatar class="avatar w-24" badge-variant="info" src="https://placekitten.com/300/300">
                  <template #badge><b-icon icon="star-fill"></b-icon></template>
                </b-avatar>
                <a href="javascript:void(0)" class="flex-grow-1"><span class="nav-text">{{item.name}}</span></a>
                <b-button size="sm" variant="white" class="no-bg no-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit mx-2"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                </b-button>
              </li> -->
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
<style>
.he-tree--hidden{
  display: none;
}

.he-tree--rtl{
  direction: rtl;
}

.he-tree .tree-placeholder-node{
  background: #ddf2f9;
  border: 1px dashed #00d9ff;
  height: 40px;
}
.he-tree .dragging .tree-node-back:hover{
  background-color: inherit;
}
</style>
<script>
import AddChannel from '../modal/AddChannel.vue'
import { all as getAllChannel } from '@/api/channel'
import { Tree, Draggable } from 'he-tree-vue'

export default {
  components: {
    AddChannel,
    Tree: Tree.mixPlugins([Draggable])
  },
  data () {
    return {
      treeData: [{ text: 'node 1', children: [{ text: 'node 1-1' }, { text: 'node 1-2' }] }],
      channels: [],
      editChannel: false,
      sortChannel: false
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
