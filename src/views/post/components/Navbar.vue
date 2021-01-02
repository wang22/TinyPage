<template>
  <div class="fade aside aside-sm">
    <div class="modal-dialog d-flex flex-column w-md bg-body">
      <t-slide-nav title="Channel" :nav="nav">
        <template #titleButton>
          <b-dropdown size="sm" class="no-bg no-shadow no-caret" variant="icon">
            <template #button-content>
              <svg xmlns="http://www.w3.org/2000/svg"  white="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </template>
            <b-dropdown-item v-b-modal.addChannel>
              Add New Channel
            </b-dropdown-item>
            <b-dropdown-item href="#" @click="sortChannel = !sortChannel; editChannel = false">Change Channel Sort</b-dropdown-item>
            <b-dropdown-item href="#" @click="editChannel = !editChannel; sortChannel = false">Edit Channel</b-dropdown-item>
          </b-dropdown>
        </template>
        <template #channels>
          <b-overlay :show="sortable" rounded="sm">
            <draggable handle=".handle" v-model="channels" @update="channelSort">
              <t-slide-nav-item v-for="item in channels" :key="item.id" :avatarSVG="item.avatar_svg ? item.avatar_svg: defaultChannelAvatar" :title="item.name" >
                <template #right>
                  <b-button v-if="sortChannel && !editChannel" size="sm" variant="white" class="no-bg no-shadow handle" style="cursor: move;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>
                  </b-button>
                  <b-button v-if="editChannel && !sortChannel" size="sm" variant="white" class="no-bg no-shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </b-button>
                </template>
              </t-slide-nav-item>
              <!-- <li v-for="channel in channels" :key="channel.id" class="d-flex">
                <a href="javascript:void(0)" class="flex-grow-1">
                  <span class="m-2">
                    <svg class="b-avatar-svg w-24 h-24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768.016 320a64 64 0 0 0-64-64h-640a64 64 0 0 0 0 128c-32 32-64 68.32-64 192 0 90.224 21.504 167.808 98.368 203.28-1.472 6.688-2.368 13.6-2.368 20.72 0 49.376 37.376 89.568 85.312 94.944C217.072 971.12 294.272 1024 384.016 1024s166.944-52.88 202.688-129.056c47.936-5.376 85.312-45.568 85.312-94.944 0-7.12-0.912-14.032-2.368-20.72 76.896-35.472 98.368-113.056 98.368-203.28 0-123.68-32-160-64-192a64 64 0 0 0 64-64z" fill="#DAE2E5" p-id="3708"></path><path d="M64.016 384v128c0 70.72 57.28 128 128 128s128-21.872 128-21.872c-3.008 30.88 28.624 53.872 64 53.872s68.496-24.992 64-53.872c0 0 57.28 21.872 128 21.872s128-57.28 128-128v-128h-640z" fill="#EDD87E" p-id="3709"></path><path d="M512.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="3710"></path><path d="M256.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="3711"></path><path d="M288.016 704s0 96 96 96 96-96 96-96h-192z" fill="#EF4D4D" p-id="3712"></path><path d="M928.016 416m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#DAE2E5" p-id="3713"></path><path d="M928.016 480c-36.528 0-69.28-15.472-92.624-40.032 10.72 41.344 47.936 72.032 92.624 72.032s81.904-30.688 92.624-72.032C997.296 464.528 964.544 480 928.016 480z" opacity=".1" p-id="3714"></path><path d="M512.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3715"></path><path d="M256.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3716"></path><path d="M474.384 736c5.568-17.632 5.632-32 5.632-32h-192s0.064 14.368 5.632 32h180.736z" opacity=".1" p-id="3717"></path><path d="M320.016 624a64 48 0 1 0 128 0 64 48 0 1 0-128 0Z" opacity=".1" p-id="3718"></path><path d="M64.016 384h640v32h-640z" opacity=".1" p-id="3719"></path><path d="M576.016 896c-18.288 0-49.44-23.12-64-32 10.496 20.496 32 44.496 60.528 56.32 5.216-8.16 10.032-16.56 14.16-25.376l0.128-0.032c-3.6 0.4-7.104 1.088-10.816 1.088zM181.2 894.912l0.128 0.032c4.128 8.816 8.944 17.216 14.16 25.376 28.528-11.808 50.032-35.808 60.528-56.32-14.56 8.88-45.712 32-64 32-3.712 0-7.216-0.688-10.816-1.088z" opacity=".1" p-id="3720"></path><path d="M862.272 346.368A95.328 95.328 0 0 1 928.016 320c24.496 0 46.592 9.44 63.568 24.56C985.2 129.712 826.96 0 608.016 0h-288c-160 0-256 96-256 256h640c100.4 0 149.712 64.128 158.256 90.368z" fill="#EF4D4D" p-id="3721"></path><path d="M248.336 96h387.376c121.84 0 229.376 30.288 314.56 85.776C888.896 66.16 764.048 0 608.016 0h-288C210.544 0 131.072 44.976 91.792 124.592 136.976 106.064 189.264 96 248.336 96z" fill="#FFFFFF" opacity=".1" p-id="3722"></path><path d="M862.272 346.336a95.12 95.12 0 0 1 29.632-19.184c1.024-0.432 2.192-0.624 3.216-0.992 4.592-1.68 9.184-3.28 14.096-4.256a93.232 93.232 0 0 1 37.152-0.064c4.16 0.816 8.064 2.192 12 3.536 1.536 0.496 3.152 0.816 4.656 1.44a94.032 94.032 0 0 1 14.944 7.568c4.88 2.976 9.376 6.4 13.632 10.16a417.376 417.376 0 0 0-3.216-40.752c-18.064-9.744-38.4-15.776-60.336-15.776-31.472 0-59.904 11.776-82.192 30.624 8.48 10.64 14.096 20.608 16.416 27.696z" opacity=".15" p-id="3723"></path></svg>
                  </span>
                  <span class="nav-text">{{ channel.name }}</span>
                </a>
                <b-button v-if="sortChannel && !editChannel" size="sm" variant="white" class="no-bg no-shadow handle" style="cursor: move;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                  </svg>
                </b-button>
                <b-button v-if="editChannel && !sortChannel" size="sm" variant="white" class="no-bg no-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </b-button>
              </li> -->
            </draggable>
          </b-overlay>
        </template>
      </t-slide-nav>
      <!-- <div class="navbar">
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
          <b-dropdown-item href="#" @click="sortChannel = !sortChannel; editChannel = false">Change Channel Sort</b-dropdown-item>
          <b-dropdown-item href="#" @click="editChannel = !editChannel; sortChannel = false">Edit Channel</b-dropdown-item>
        </b-dropdown>
      </div> -->
      <!-- <div class="scrollable hover">
        <div class="sidenav p-2">
          <nav class="nav-border b-primary auto-nav">
            <ul class="nav">
              <li><a href="javascript:void(0)"><span class="nav-text">All</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="javascript:void(0)"><span class="nav-text">Drafts</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="javascript:void(0)"><span class="nav-text">Scheduled</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <b-overlay :show="sortable" rounded="sm">
                <draggable handle=".handle" v-model="channels" @update="channelSort">
                  <li v-for="channel in channels" :key="channel.id" class="d-flex">
                    <a href="javascript:void(0)" class="flex-grow-1">
                      <span class="m-2">
                        <svg class="b-avatar-svg w-24 h-24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768.016 320a64 64 0 0 0-64-64h-640a64 64 0 0 0 0 128c-32 32-64 68.32-64 192 0 90.224 21.504 167.808 98.368 203.28-1.472 6.688-2.368 13.6-2.368 20.72 0 49.376 37.376 89.568 85.312 94.944C217.072 971.12 294.272 1024 384.016 1024s166.944-52.88 202.688-129.056c47.936-5.376 85.312-45.568 85.312-94.944 0-7.12-0.912-14.032-2.368-20.72 76.896-35.472 98.368-113.056 98.368-203.28 0-123.68-32-160-64-192a64 64 0 0 0 64-64z" fill="#DAE2E5" p-id="3708"></path><path d="M64.016 384v128c0 70.72 57.28 128 128 128s128-21.872 128-21.872c-3.008 30.88 28.624 53.872 64 53.872s68.496-24.992 64-53.872c0 0 57.28 21.872 128 21.872s128-57.28 128-128v-128h-640z" fill="#EDD87E" p-id="3709"></path><path d="M512.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="3710"></path><path d="M256.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="3711"></path><path d="M288.016 704s0 96 96 96 96-96 96-96h-192z" fill="#EF4D4D" p-id="3712"></path><path d="M928.016 416m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#DAE2E5" p-id="3713"></path><path d="M928.016 480c-36.528 0-69.28-15.472-92.624-40.032 10.72 41.344 47.936 72.032 92.624 72.032s81.904-30.688 92.624-72.032C997.296 464.528 964.544 480 928.016 480z" opacity=".1" p-id="3714"></path><path d="M512.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3715"></path><path d="M256.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="3716"></path><path d="M474.384 736c5.568-17.632 5.632-32 5.632-32h-192s0.064 14.368 5.632 32h180.736z" opacity=".1" p-id="3717"></path><path d="M320.016 624a64 48 0 1 0 128 0 64 48 0 1 0-128 0Z" opacity=".1" p-id="3718"></path><path d="M64.016 384h640v32h-640z" opacity=".1" p-id="3719"></path><path d="M576.016 896c-18.288 0-49.44-23.12-64-32 10.496 20.496 32 44.496 60.528 56.32 5.216-8.16 10.032-16.56 14.16-25.376l0.128-0.032c-3.6 0.4-7.104 1.088-10.816 1.088zM181.2 894.912l0.128 0.032c4.128 8.816 8.944 17.216 14.16 25.376 28.528-11.808 50.032-35.808 60.528-56.32-14.56 8.88-45.712 32-64 32-3.712 0-7.216-0.688-10.816-1.088z" opacity=".1" p-id="3720"></path><path d="M862.272 346.368A95.328 95.328 0 0 1 928.016 320c24.496 0 46.592 9.44 63.568 24.56C985.2 129.712 826.96 0 608.016 0h-288c-160 0-256 96-256 256h640c100.4 0 149.712 64.128 158.256 90.368z" fill="#EF4D4D" p-id="3721"></path><path d="M248.336 96h387.376c121.84 0 229.376 30.288 314.56 85.776C888.896 66.16 764.048 0 608.016 0h-288C210.544 0 131.072 44.976 91.792 124.592 136.976 106.064 189.264 96 248.336 96z" fill="#FFFFFF" opacity=".1" p-id="3722"></path><path d="M862.272 346.336a95.12 95.12 0 0 1 29.632-19.184c1.024-0.432 2.192-0.624 3.216-0.992 4.592-1.68 9.184-3.28 14.096-4.256a93.232 93.232 0 0 1 37.152-0.064c4.16 0.816 8.064 2.192 12 3.536 1.536 0.496 3.152 0.816 4.656 1.44a94.032 94.032 0 0 1 14.944 7.568c4.88 2.976 9.376 6.4 13.632 10.16a417.376 417.376 0 0 0-3.216-40.752c-18.064-9.744-38.4-15.776-60.336-15.776-31.472 0-59.904 11.776-82.192 30.624 8.48 10.64 14.096 20.608 16.416 27.696z" opacity=".15" p-id="3723"></path></svg>
                      </span>
                      <span class="nav-text">{{ channel.name }}</span>
                    </a>
                    <b-button v-if="sortChannel && !editChannel" size="sm" variant="white" class="no-bg no-shadow handle" style="cursor: move;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                      </svg>
                    </b-button>
                    <b-button v-if="editChannel && !sortChannel" size="sm" variant="white" class="no-bg no-shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </b-button>
                  </li>
                </draggable>
              </b-overlay>
              <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Authors</span></li>
              <li class="active"><a href="javascript:void(0)"><span class="m-2"><b-avatar class="w-24"></b-avatar> </span><span class="nav-text">小王王</span></a></li>
              <li><a href="javascript:void(0)"><span class="m-2"><b-avatar class="w-24"></b-avatar> </span><span class="nav-text">kkkkkkkv</span></a></li>
              <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Tags</span></li>
              <li class="active"><a href="javascript:void(0)"><span class="mx-2"><b class="badge badge-circle sm text-primary"></b> </span><span class="nav-text">java</span></a></li>
              <li><a href="javascript:void(0)"><span class="mx-2"><b class="badge badge-circle sm text-primary"></b> </span><span class="nav-text">php</span></a></li>
            </ul>
          </nav>
        </div>
      </div> -->
    </div>
    <b-modal ref="channelModal" id="addChannel" size="lg" body-class="modal-no-padding" title="Add New Channel" no-close-on-backdrop @ok="onSaveChannel">
      <add-channel ref="addChannel" />
    </b-modal>
  </div>
</template>
<script>
import AddChannel from '../modal/AddChannel.vue'
import { all as getAllChannel, sort as sortChannel } from '@/api/channel'
import draggable from 'vuedraggable'

export default {
  components: {
    AddChannel,
    draggable
  },
  data () {
    return {
      treeData: [{ text: 'node 1', children: [{ text: 'node 1-1' }, { text: 'node 1-2' }] }],
      channels: [],
      editChannel: false,
      sortChannel: false,
      sortable: false,
      nav: [
        {
          title: 'All',
          active: true
        },
        {
          title: 'Drafts',
          badge: '1',
          badgeStyle: 'dark'
        },
        {
          title: 'Scheduled',
          badge: '11'
        },
        {
          title: 'NotChannel',
          badge: '11'
        },
        {
          title: 'channel',
          slotName: 'channels'
        },
        {
          title: 'Authors',
          subtitle: true
        },
        {
          title: 'Tags',
          subtitle: true
        }
      ],
      defaultChannelAvatar: '<svg t="1609484450355" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5167" width="200" height="200"><path d="M741.157282 465.512388a42.38167 42.38167 0 0 0 42.27231-42.252427 104.269049 104.269049 0 0 1 21.116272 63.378641c0 58.338175-47.282951 105.631068-105.631068 105.631068-58.338175 0-105.621126-47.292893-105.621126-105.631068S640.576621 381.007534 698.904854 381.007534c6.31301 0.029825 12.606136 0.596505 18.809787 1.680155a53.287767 53.287767 0 0 0-18.809787 40.56233c0.019883 7.436427 1.978408 14.713786 5.706563 21.136156H698.904854a42.252427 42.252427 0 1 0 36.555806 21.126213v-0.417553a54.679612 54.679612 0 0 0 5.696622 0.417553M318.63301 381.007534c58.358058 0 105.64101 47.292893 105.641009 105.631068S376.991068 592.26967 318.63301 592.26967c-58.338175 0-105.621126-47.292893-105.621127-105.631068a104.269049 104.269049 0 0 1 21.116272-63.378641 42.38167 42.38167 0 0 0 42.252428 42.252427c0.994175 0.029825 1.98835-0.039767 2.96264-0.208776l0.427495 5.070291a42.252427 42.252427 0 1 0 38.862292-25.987728h-5.696622a42.252427 42.252427 0 0 0 5.696622-21.126214 53.287767 53.287767 0 0 0-18.799845-40.572272 112.391456 112.391456 0 0 1 18.789903-1.690097" fill="#64A6F0" p-id="5168"></path><path d="M717.714641 382.687689a105.352699 105.352699 0 0 1 65.714951 40.56233 42.38167 42.38167 0 0 1-42.27231 42.262369 52.293592 52.293592 0 0 1-5.696622-0.427495 42.262369 42.262369 0 0 1-36.555806-41.834874 53.30765 53.30765 0 0 1 18.809787-40.56233M299.843107 382.687689a53.297709 53.297709 0 0 1 18.799844 40.56233 42.252427 42.252427 0 0 1-36.545864 41.834874c-0.845049 0-1.908816 0.208777-2.753864 0.208777a13.87868 13.87868 0 0 1-2.942757 0.218718 42.38167 42.38167 0 0 1-42.252427-42.252427 105.352699 105.352699 0 0 1 65.695068-40.56233" fill="#F8FAFD" p-id="5169"></path><path d="M994.671845 64.11433v887.300971a42.371728 42.371728 0 0 1-42.252428 42.252427H65.118447a42.371728 42.371728 0 0 1-42.232544-42.252427V64.11433a42.371728 42.371728 0 0 1 42.242485-42.252427H952.419417a42.371728 42.371728 0 0 1 42.252428 42.252427M717.724583 382.687689a112.41134 112.41134 0 0 0-18.809787-1.690097c-58.338175 0-105.621126 47.302835-105.621126 105.64101 0 58.338175 47.282951 105.631068 105.621126 105.631068 58.348117 0 105.631068-47.292893 105.631068-105.631068 0-51.100583-36.555806-94.854214-86.821281-103.950913m-417.881476 0a105.650951 105.650951 0 0 0 28.284272 209.164428c56.26035-5.070291 98.602252-53.516427 96.057165-109.96567a105.621126 105.621126 0 0 0-124.341437-99.198758" fill="#FFD0AA" p-id="5170"></path><path d="M312.011806 783.091573h405.712777V725.747573h-405.722719z" fill="#2F333A" p-id="5171"></path><path d="M973.565515 951.415301a21.136155 21.136155 0 0 1-21.136156 21.126214H65.118447a21.136155 21.136155 0 0 1-21.126214-21.126214V64.11433c0-11.671612 9.464544-21.126214 21.126214-21.126213H952.419417c11.671612 0 21.136155 9.44466 21.136156 21.126213v887.300971zM952.419417 0.735689H65.118447A63.378641 63.378641 0 0 0 1.749748 64.11433v887.300971a63.378641 63.378641 0 0 0 63.37864 63.378641H952.419417a63.378641 63.378641 0 0 0 63.378641-63.378641V64.11433A63.378641 63.378641 0 0 0 952.419417 0.735689z" fill="#2F333A" p-id="5172"></path><path d="M698.904854 571.143456a84.514796 84.514796 0 0 1-18.133747-166.902058 76.959068 76.959068 0 0 0-2.982524 19.018563c0 1.262602 0.427495 2.475495 0.487145 3.738097a63.249398 63.249398 0 1 0 84.007767 59.640544c0-1.272544-0.407612-2.485437-0.477204-3.738097a62.891495 62.891495 0 0 0 20.161864-11.542369c0.934524 5.040466 1.42167 10.140583 1.461437 15.280466 0 46.666563-37.848233 84.504854-84.514796 84.504854m62.036505-141.331883a20.927379 20.927379 0 0 1-19.784078 14.574602 27.409398 27.409398 0 0 1-2.992466-0.258486 21.086447 21.086447 0 0 1-18.123806-20.87767 36.187961 36.187961 0 0 1 4.791923-16.722019 83.321786 83.321786 0 0 1 36.118369 23.283573M721.333437 361.879612a131.350369 131.350369 0 0 0-22.418641-2.008233c-70.009786 0-126.757282 56.747495-126.757281 126.757281s56.747495 126.757282 126.757281 126.757282 126.757282-56.747495 126.757282-126.757282a124.86835 124.86835 0 0 0-25.351457-76.054369 126.240311 126.240311 0 0 0-78.987184-48.694679M318.63301 571.143456a84.514796 84.514796 0 0 1-84.504855-84.504854c0.039767-5.129942 0.536854-10.24 1.471379-15.280466 5.91534 5.050408 12.715495 8.947573 20.042563 11.522485 0 1.262602-0.377786 2.515262-0.377786 3.777864a63.368699 63.368699 0 0 0 56.200699 63.249398 63.368699 63.368699 0 0 0 27.817009-122.889941c0-1.262602 0.497087-2.485437 0.497088-3.738097a77.316971 77.316971 0 0 0-2.704156-19.018563 84.504854 84.504854 0 0 1-18.432 166.882174m-25.918135-164.635339c2.932816 5.110058 4.573204 10.856388 4.791922 16.751844a21.10633 21.10633 0 0 1-18.123806 20.867728 11.184466 11.184466 0 0 0-2.992466 0.258486 20.947262 20.947262 0 0 1-19.803961-14.614369 83.480854 83.480854 0 0 1 36.128311-23.263689m25.918135-46.626797c-7.56567 0.049709-15.121398 0.765515-22.567767 2.107651a126.160777 126.160777 0 0 0-78.838058 48.595262 124.937942 124.937942 0 0 0-25.351456 76.054369c0 70.009786 56.747495 126.757282 126.757281 126.757281S445.390291 556.638447 445.390291 486.638602s-56.747495-126.757282-126.757281-126.757282" fill="#2F333A" p-id="5173"></path></svg>'
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
      this.sortable = true
      const _this = this
      getAllChannel().then(res => {
        this.sortable = false
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        _this.channels = res.data.channels
      })
    },
    channelSort () {
      this.sortable = true
      const sortable = []
      for (const i in this.channels) {
        sortable.push({
          id: this.channels[i].id,
          sort: parseInt(i)
        })
      }
      sortChannel({
        sortable
      }).then(res => {
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        this.sortable = false
      })
    }
  }
}
</script>
