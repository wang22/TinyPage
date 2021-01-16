<template>
  <t-aside>
    <t-aside-header title="Channel">
      <template #button>
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
    </t-aside-header>
    <t-aside-item-list>
      <t-aside-item v-for="item in nav" :key="item.title" :id="item.title" :title="item.title" :active="item.active" :badge="item.badge" @click="channelClick(item)" />
      <b-overlay :show="sortable" rounded="lg">
        <draggable handle=".handle" v-model="channels" @update="channelSort" class="nav-border b-primary nav">
          <t-aside-item v-for="channel in channels" :class="sortChannel ? 'handle' : ''" :key="channel.id" :id="channel.id.toString()" :title="channel.name" :active="channel.active" :badge="channel.badge" :svg="channel.avatar_svg ? channel.avatar_svg: defaultChannelAvatar" @click="channelClick(channel)">
            <template>
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
          </t-aside-item>
        </draggable>
      </b-overlay>
    </t-aside-item-list>
    <b-modal ref="channelModal" id="addChannel" size="lg" body-class="modal-no-padding" title="Add New Channel" no-close-on-backdrop @ok="onSaveChannel">
      <add-channel ref="addChannel" />
    </b-modal>
  </t-aside>
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
          active: true,
          status: 0
        },
        {
          title: 'Drafts',
          badge: '1',
          active: false,
          status: 2
        },
        {
          title: 'Scheduled',
          badge: '11',
          active: false,
          status: 3
        }
      ],
      authors: [],
      defaultChannelAvatar: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'
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
        const tmp = []
        for (const index in res.data.channels) {
          res.data.channels[index].active = false
          tmp.push(res.data.channels[index])
        }
        _this.channels = tmp
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
          this.$bvToast.toast(res.msg)
          return
        }
        this.$bvToast.toast('change sort success')
        this.sortable = false
      })
    },
    channelClick (curr) {
      for (const index in this.nav) {
        const item = this.nav[index]
        if (curr.title) {
          item.active = curr.title === item.title
          if (item.active) {
            this.$emit('changeStatus', item.status)
          }
        } else {
          item.active = false
        }
      }
      for (const index in this.channels) {
        const item = this.channels[index]
        if (curr.name) {
          item.active = curr.name === item.name
          if (item.active) {
            this.$emit('changeChannel', item.id)
          }
        } else {
          item.active = false
        }
      }
    }
  }
}
</script>
