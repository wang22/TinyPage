<template>
  <b-overlay :show="overlay" rounded="sm" variant="transparent" :opacity="0.55">
    <t-accordion title="Channel name" mark="channel name" :icon="icons.name">
      <template #right>
        <div style="width: 250px">
          <b-form-input placeholder="Enter channel name" v-model="channel.name"></b-form-input>
        </div>
      </template>
    </t-accordion>
    <t-accordion title="Channel path" mark="channel path" :icon="icons.path" ref="channelPath">
      <template #right>
        <div style="width: 250px">
          <b-input-group>
            <b-form-input placeholder="Enter channel path" v-model="channel.path"></b-form-input>
            <b-input-group-append>
              <b-button variant="white" @click="channelNameDetail(browerView = !browerView)">See Demo</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </template>
      <template #collapse>
        <h6>Browser Preview</h6>
        <t-v-browser :url="`https://localhost/${channel.path}`" />
      </template>
    </t-accordion>
    <t-accordion title="Visible" mark="options" :icon="icons.visible">
      <template #right>
        <div style="width: 250px">
          <b-badge>{{getVisible(channel.visible)}}</b-badge>
          <b-form-input v-model="channel.visible" type="range" min="0" max="3"></b-form-input>
        </div>
      </template>
    </t-accordion>
    <t-accordion title="SEO" mark="options" :icon="icons.seo">
      <template #collapse>
        <b-form-group
          label="Meta title:"
          label-for="seo-meta-title"
        >
          <b-form-input
            id="seo-meta-title"
            type="text"
            v-model="channel.meta_title"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Meta description:"
          label-for="seo-meta-description"
          description="Recommended: 156 characters. You’ve used 0"
        >
          <b-form-textarea
            id="seo-meta-description"
            rows="3"
            max-rows="6"
            v-model="channel.meta_description"
          ></b-form-textarea>
        </b-form-group>
      </template>
    </t-accordion>
    <t-accordion title="Avatar" mark="upload channel avatar" :icon="icons.avatar">
      <template #left>
        <b-avatar class="w-48 mr-3" src="https://placekitten.com/300/300" v-b-tooltip.hover title="Image Avatar"></b-avatar>
        <span v-html="avatar.svg" class="b-avatar-svg w-48 h-48" v-b-tooltip.hover title="SVG Avatar"></span>
      </template>
      <template #collapse>
        <b-form-group
          label="Upload image avatar:"
          label-for="seo-meta-title"
        >
          <b-form-file
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        </b-form-group>

        <b-form-group
          label="SVG avatar code:"
          label-for="seo-meta-title"
        >
          <b-form-textarea
            rows="3"
            max-rows="6"
            v-model="avatar.svg"
          ></b-form-textarea>
        </b-form-group>
      </template>
    </t-accordion>
    <!-- <t-accordion title="Extension Field" mark="options" :icon="icons.field">
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
    </t-accordion> -->
  </b-overlay>
</template>
<style>
.channel-avatar svg{
  margin-top: 10px;
  width: 100px;
  height: 100px;
}
</style>
<script>
import { save } from '@/api/channel'

export default {
  data () {
    return {
      avatar: {
        svg: '<svg t="1608866655524" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1157" width="200" height="200"><path d="M768.016 320a64 64 0 0 0-64-64h-640a64 64 0 0 0 0 128c-32 32-64 68.32-64 192 0 90.224 21.504 167.808 98.368 203.28-1.472 6.688-2.368 13.6-2.368 20.72 0 49.376 37.376 89.568 85.312 94.944C217.072 971.12 294.272 1024 384.016 1024s166.944-52.88 202.688-129.056c47.936-5.376 85.312-45.568 85.312-94.944 0-7.12-0.912-14.032-2.368-20.72 76.896-35.472 98.368-113.056 98.368-203.28 0-123.68-32-160-64-192a64 64 0 0 0 64-64z" fill="#DAE2E5" p-id="1158"></path><path d="M64.016 384v128c0 70.72 57.28 128 128 128s128-21.872 128-21.872c-3.008 30.88 28.624 53.872 64 53.872s68.496-24.992 64-53.872c0 0 57.28 21.872 128 21.872s128-57.28 128-128v-128h-640z" fill="#EDD87E" p-id="1159"></path><path d="M512.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="1160"></path><path d="M256.016 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" opacity=".1" p-id="1161"></path><path d="M288.016 704s0 96 96 96 96-96 96-96h-192z" fill="#EF4D4D" p-id="1162"></path><path d="M928.016 416m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" fill="#DAE2E5" p-id="1163"></path><path d="M928.016 480c-36.528 0-69.28-15.472-92.624-40.032 10.72 41.344 47.936 72.032 92.624 72.032s81.904-30.688 92.624-72.032C997.296 464.528 964.544 480 928.016 480z" opacity=".1" p-id="1164"></path><path d="M512.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="1165"></path><path d="M256.016 512m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#434854" p-id="1166"></path><path d="M474.384 736c5.568-17.632 5.632-32 5.632-32h-192s0.064 14.368 5.632 32h180.736z" opacity=".1" p-id="1167"></path><path d="M320.016 624a64 48 0 1 0 128 0 64 48 0 1 0-128 0Z" opacity=".1" p-id="1168"></path><path d="M64.016 384h640v32h-640z" opacity=".1" p-id="1169"></path><path d="M576.016 896c-18.288 0-49.44-23.12-64-32 10.496 20.496 32 44.496 60.528 56.32 5.216-8.16 10.032-16.56 14.16-25.376l0.128-0.032c-3.6 0.4-7.104 1.088-10.816 1.088zM181.2 894.912l0.128 0.032c4.128 8.816 8.944 17.216 14.16 25.376 28.528-11.808 50.032-35.808 60.528-56.32-14.56 8.88-45.712 32-64 32-3.712 0-7.216-0.688-10.816-1.088z" opacity=".1" p-id="1170"></path><path d="M862.272 346.368A95.328 95.328 0 0 1 928.016 320c24.496 0 46.592 9.44 63.568 24.56C985.2 129.712 826.96 0 608.016 0h-288c-160 0-256 96-256 256h640c100.4 0 149.712 64.128 158.256 90.368z" fill="#EF4D4D" p-id="1171"></path><path d="M248.336 96h387.376c121.84 0 229.376 30.288 314.56 85.776C888.896 66.16 764.048 0 608.016 0h-288C210.544 0 131.072 44.976 91.792 124.592 136.976 106.064 189.264 96 248.336 96z" fill="#FFFFFF" opacity=".1" p-id="1172"></path><path d="M862.272 346.336a95.12 95.12 0 0 1 29.632-19.184c1.024-0.432 2.192-0.624 3.216-0.992 4.592-1.68 9.184-3.28 14.096-4.256a93.232 93.232 0 0 1 37.152-0.064c4.16 0.816 8.064 2.192 12 3.536 1.536 0.496 3.152 0.816 4.656 1.44a94.032 94.032 0 0 1 14.944 7.568c4.88 2.976 9.376 6.4 13.632 10.16a417.376 417.376 0 0 0-3.216-40.752c-18.064-9.744-38.4-15.776-60.336-15.776-31.472 0-59.904 11.776-82.192 30.624 8.48 10.64 14.096 20.608 16.416 27.696z" opacity=".15" p-id="1173"></path></svg>'
      },
      browerView: false,
      overlay: false,
      icons: {
        avatar: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        name: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>',
        seo: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>',
        path: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
        visible: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>',
        field: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>'
      },
      channel: {
        name: '',
        path: '',
        visible: 3,
        meta_title: '',
        meta_description: ''
      }
    }
  },
  methods: {
    channelNameDetail (status) {
      this.$refs.channelPath.collapseStatus(status)
    },
    onVisibleChange (val) {
      console.log(val)
    },
    doSave (callback) {
      this.overlay = true
      const _this = this
      save(this.channel).then(resp => {
        _this.overlay = false
        if (resp.code !== 0) {
          _this.$bvToast.toast(resp.msg)
        } else {
          callback()
        }
      })
    },
    getVisible (type) {
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
