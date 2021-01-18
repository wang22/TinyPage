<template>
  <b-overlay :show="overlay" rounded="sm" variant="transparent" :opacity="0.55">
    <t-accordion title="Post URL" mark="channel name" :icon="icons.path" ref="postPath">
      <template #right>
        <div style="width: 250px">
          <b-input-group>
            <b-form-input v-model="post.url"></b-form-input>
            <b-input-group-append>
              <b-button variant="white" @click="postPathDetail(browerView = !browerView)">See Demo</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </template>
      <template #collapse>
        <h6>Browser Preview</h6>
        <t-v-browser :url="`https://localhost/post/${post.url}`" />
      </template>
    </t-accordion>
    <t-accordion title="Channel" mark="channel name" :icon="icons.channel">
      <template #right>
        <div style="width: 250px">
          <multiselect v-model="channelValue" :options="channels" @select="selectChannel" :searchable="false" :limit="1" selectLabel='' deselectLabel=''>
            <template slot="singleLabel" slot-scope="props">
              <span class="channel" v-html="props.option.avatar_svg"></span>
              {{ props.option.name }}
            </template>
            <template slot="option" slot-scope="props">
              <span class="channel" v-html="props.option.avatar_svg"></span>
              {{ props.option.name }}
            </template>
          </multiselect>
        </div>
      </template>
    </t-accordion>
    <t-accordion title="Tags" mark="channel name" :icon="icons.tag">
      <template #right>
        <div style="width: 250px">
          <b-form-tags v-model="post.tags" tag-variant="light" ></b-form-tags>
        </div>
      </template>
    </t-accordion>
    <t-accordion title="Visible" mark="options" :icon="icons.visible">
      <template #right>
        <div style="width: 250px">
          <b-badge>{{getVisibility(post.visible)}}</b-badge>
          <b-form-input v-model="defaultVisible" @change="visibleChange" type="range" min="0" max="3"></b-form-input>
        </div>
      </template>
    </t-accordion>
    <t-accordion title="Publish Time" mark="channel name" :icon="icons.time">
      <template #right>
        <b-form-input type="datetime-local" />
      </template>
    </t-accordion>
    <t-accordion title="Post Image" mark="channel name" :icon="icons.img">
      <template #collapse>
        <b-form-group
          label-for="seo-meta-title"
        >
          <b-form-checkbox v-model="post.autoImage" switch size="sm">自动从文章中获取第一张图片</b-form-checkbox>
        </b-form-group>
        <b-form-group
          v-show="!post.autoImage"
          label="上传文章图片:"
          label-for="seo-meta-title"
        >
          <b-form-file accept="image/*"></b-form-file>
        </b-form-group>
      </template>
    </t-accordion>
    <t-accordion title="Excerpt" mark="channel name" :icon="icons.excerpt">
      <template #collapse>
        <b-form-group
          label-for="seo-meta-title"
        >
          <b-form-checkbox v-model="post.autoExcerpt" switch size="sm">自动从文章中获取简介</b-form-checkbox>
        </b-form-group>
        <b-form-group
          v-show="!post.autoExcerpt"
          label="Excerpt:"
          label-for="seo-meta-title"
        >
          <b-form-textarea
            v-model="post.excerpt"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </template>
    </t-accordion>
    <t-accordion title="Meta Data" mark="channel name" :icon="icons.meta">
      <template #collapse>
        <b-form-group
          label="Meta Title:"
          label-for="seo-meta-title"
        >
          <b-form-input v-model="post.meta.title"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Meta Description:"
          label-for="seo-meta-title"
        >
          <b-form-input v-model="post.meta.description"></b-form-input>
        </b-form-group>
      </template>
    </t-accordion>
  </b-overlay>
</template>
<style scoped>
.channel >>> svg {
  width: 20px;
  height: 20px;
}
</style>
<script>
import types from '../../../components/types'
import { all as getAllChannel } from '@/api/channel'
import Multiselect from 'vue-multiselect'
import '../../../css/multiselect.scss'

export default {
  model: {
    prop: 'post',
    event: 'change'
  },
  props: {
    post: types.Object()
  },
  components: {
    Multiselect
  },
  data () {
    return {
      overlay: false,
      icons: {
        time: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        visible: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
        path: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
        channel: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>',
        tag: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>',
        img: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
        meta: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>',
        excerpt: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>'
      },
      visibility: 3,
      channels: [],
      browerView: false,
      channelValue: {},
      defaultVisible: 3
    }
  },
  mounted () {
    this.channelList()
  },
  methods: {
    getVisibility (type) {
      switch (parseInt(type)) {
        case 0: return 'Private'
        case 1: return 'Paid Only'
        case 2: return 'Member Only'
        case 3: return 'Public'
      }
    },
    channelList () {
      getAllChannel().then(res => {
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        this.channels = res.data.channels
      })
    },
    postPathDetail (status) {
      this.$refs.postPath.collapseStatus(status)
    },
    selectChannel (sel) {
      this.post.channel = sel.id
      this.$emit('change', this.post)
    },
    visibleChange (val) {
      this.post.visible = parseInt(val)
      this.$emit('change', this.post)
    }
  }
}
</script>
