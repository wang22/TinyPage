<template>
  <t-main-container>
    <p class="text-muted"><strong>Upload</strong></p>
    <b-card no-body>
      <t-accordion title="Upload Server" mark="Choose upload server" :icon="icon.upload.server">
        <template #collapse>
          <b-form-group
            label="Choose Server:"
            label-for="seo-meta-description"
          >
            <b-form-select :options="server"></b-form-select>
          </b-form-group>
          <b-form-group
            label="User Name:"
            label-for="seo-meta-description"
          >
            <b-form-input type="text" ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Password:"
            label-for="seo-meta-description"
          >
            <b-form-input type="text" ></b-form-input>
          </b-form-group>
          <b-button variant="primary">Save</b-button>
        </template>
      </t-accordion>
      <t-accordion title="Upload Setting" mark="Choose upload server" :icon="icon.upload.setting">
        <template #collapse>
          <b-form-group
            label="Max File Size:"
            label-for="seo-meta-description"
            description="Max upload file size: 100MB"
          >
            <b-form-input type="number" ></b-form-input>
          </b-form-group>
          <b-form-group
            label="File Type:"
            label-for="seo-meta-description"
            description="* is all type"
          >
            <b-form-input type="text" value="jpg;jpge;png;pdf;" ></b-form-input>
          </b-form-group>
          <b-button variant="primary">Save</b-button>
        </template>
      </t-accordion>
    </b-card>
  </t-main-container>
</template>
<script>
export default {
  data () {
    return {
      icon: {
        upload: {
          server: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>',
          setting: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>'
        }
      },
      server: [
        { text: 'Local', value: 'local' },
        { text: 'Upyun', value: 'upyun' },
        { text: 'AliyunOSS', value: 'aliyunOSS' },
        { text: 'TcloudOSS', value: 'tcloudOSS' }
      ]
    }
  }
}
</script>
