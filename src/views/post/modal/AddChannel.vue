<template>
  <div>
    <t-accordion title="Channel name" mark="channel name" :icon="icons.name">
      <template #right>
        <div style="width: 200px">
          <b-form-input placeholder="Enter channel name" v-model="channel.name"></b-form-input>
        </div>
      </template>
    </t-accordion>
    <t-accordion title="Channel path" mark="channel path" :icon="icons.path" ref="channelPath">
      <template #right>
        <div style="width: 200px">
          <b-form-input placeholder="Enter channel path" v-model="channel.path" @focus="channelNameDetail(true)" @blur="channelNameDetail(false)"></b-form-input>
        </div>
      </template>
      <template #collapse>
        <h6>Browser Preview</h6>
        <t-v-browser :url="`https://localhost/${channel.path}`" />
      </template>
    </t-accordion>
    <t-accordion title="Visiable" mark="options" :icon="icons.visiable">
      <template #right>
        <div style="width: 200px">
          <t-slidebar :items="visiableItems" color="var(--blue)" />
          <!-- <b-badge>Public</b-badge>
          <b-form-input type="range" @change="onVisiableChange" min="0" max="3"></b-form-input> -->
        </div>
      </template>
    </t-accordion>
    <t-accordion title="SEO" mark="options" :icon="icons.seo">
      <template #collapse>
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Meta title:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Meta description:" label-for="input-2"  description="Recommended: 156 characters. You’ve used 0">
            <b-form-textarea
              id="textarea"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-form>
      </template>
    </t-accordion>
    <t-accordion title="Extension Field" mark="options" :icon="icons.field">
      <template #collapse>
        <b-tabs pills vertical>
          <b-tab title="Blog" active>
            <b-form-group
              description="template code: ${extField.title}"
              label-for="input-horizontal"
            >
              <b-form-input placeholder="Post Title" size="sm" disabled></b-form-input>
            </b-form-group>
            <b-form-group
              description="template code: ${extField.content}"
              label-for="input-horizontal"
            >
              <b-form-textarea
                placeholder="Post Content"
                rows="3"
                max-rows="6"
                disabled
              ></b-form-textarea>
            </b-form-group>
          </b-tab>
          <b-tab title="Download"><b-card-text>Tab contents 2</b-card-text></b-tab>
          <b-tab title="Add New"><b-card-text>Tab contents 3</b-card-text></b-tab>
        </b-tabs>
      </template>
    </t-accordion>
  </div>
</template>
<script>
import { save } from '@/api/channel'

export default {
  data () {
    return {
      icons: {
        name: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>',
        seo: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>',
        path: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
        visiable: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
        field: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>'
      },
      visiableItems: [
        {
          value: 1,
          name: 'Private',
          title: 'Private'
        },
        {
          value: 2,
          name: 'Paid Member Only',
          title: 'Paid'
        },
        {
          value: 3,
          name: 'Member Only',
          title: 'Member'
        },
        {
          value: 4,
          name: 'Public',
          title: 'Public'
        }
      ],
      channel: {
        name: '',
        path: ''
      }
    }
  },
  methods: {
    channelNameDetail (status) {
      this.$refs.channelPath.collapseStatus(status)
    },
    onVisiableChange (val) {
      console.log(val)
    },
    doSave () {
      const _this = this
      save({
        avatar: 'avatar',
        name: 'name',
        path: 'path',
        visibility: 4,
        meta_title: 'meta_title',
        meta_description: 'meta_description'
      }).then(resp => {
        if (resp.code !== 0) {
          _this.$bvToast.toast(resp.msg, {
            title: 'Warning'
          })
        }
      })
    }
  }
}
</script>
