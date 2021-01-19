<template>
  <div>
    <p class="text-muted"><strong>Custom</strong></p>
    <b-card no-body>
      <t-accordion title="Website" mark="Choose upload server" :icon="icon.site.site">
        <template #collapse>
          <b-form-group
            label="Website Name:"
            label-for="seo-meta-description"
          >
            <b-form-input type="text" />
          </b-form-group>
          <b-form-group
            label="Website Domain:"
            label-for="seo-meta-description"
          >
            <b-form-input type="text" />
          </b-form-group>
          <b-button variant="primary">Save</b-button>
        </template>
      </t-accordion>
    </b-card>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      icon: {
        site: {
          site: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>',
          setting: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>'
        }
      }
    }
  }
}
</script>
