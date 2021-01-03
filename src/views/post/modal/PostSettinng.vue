<template>
  <b-overlay :show="overlay" rounded="sm" variant="transparent" :opacity="0.55">
    <t-accordion title="Channel" mark="channel name" :icon="icons.channel">
      <template #right>
        <div style="width: 250px">
          <b-form-input v-model="post.channel" placeholder="Enter channel name"></b-form-input>
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
          <b-form-input v-model="post.visible" type="range" min="0" max="3"></b-form-input>
        </div>
      </template>
    </t-accordion>
    <t-accordion title="Publish Time" mark="channel name" :icon="icons.time">
      <template #collapse>
        <b-form-group
          label="选择发布日期:"
          label-for="seo-meta-title"
        >
          <b-form-datepicker v-model="post.publishDate"></b-form-datepicker>
        </b-form-group>
        <b-form-group
          label="选择发布时间:"
          label-for="seo-meta-title"
        >
          <b-form-timepicker v-model="post.publishTime" locale="en"></b-form-timepicker>
        </b-form-group>
      </template>
    </t-accordion>
  </b-overlay>
</template>
<script>
import types from '../../../components/types'
export default {
  model: {
    prop: 'post',
    event: 'change'
  },
  props: {
    post: types.Object()
  },
  data () {
    return {
      overlay: false,
      icons: {
        time: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        visible: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
        channel: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>',
        tag: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>'
      },
      visibility: 3
    }
  },
  methods: {
    getVisibility (type) {
      switch (parseInt(type)) {
        case 0: return 'Private'
        case 1: return 'Paid Only'
        case 2: return 'Member Only'
        case 3: return 'Public'
      }
    }
  }
}
</script>
