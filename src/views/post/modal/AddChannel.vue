<template>
  <div>
    <t-accordion title="Channel name" mark="channel name" :icon="icons.name">
      <template #right>
        <b-form-input placeholder="Enter channel name" v-model="channel.name"></b-form-input>
      </template>
    </t-accordion>
    <t-accordion title="Channel path" mark="channel path" :icon="icons.path" ref="channelPath">
      <template #right>
        <b-form-input placeholder="Enter channel path" v-model="channel.path" @focus="channelNameDetail(true)"></b-form-input>
      </template>
      <template #collapse>
        <t-v-browser :url="`https://localhost/${channel.path}`" />
      </template>
    </t-accordion>
    <t-accordion title="SEO" mark="options" :icon="icons.seo">
      <template #collapse>
        <b-form>
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </template>
    </t-accordion>
  </div>
</template>
<script>
export default {
  data () {
    return {
      icons: {
        name: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>',
        seo: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>',
        path: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>'
      },
      channel: {
        name: '',
        path: ''
      }
    }
  },
  methods: {
    channelNameDetail (status) {
      this.$refs.channelPath.collapseStatus(status)
    }
  }
}
</script>
