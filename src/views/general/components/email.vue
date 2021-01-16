<template>
  <div>
    <p class="text-muted"><strong>Email</strong></p>
    <b-card no-body>
      <t-accordion title="Email Send Server" mark="Choose upload server" :icon="icon">
        <template #collapse>
          <b-form-group
            label="Choose Server:"
            label-for="seo-meta-description"
          >
            <b-form-input type="text" ></b-form-input>
          </b-form-group>
          <b-button variant="primary">Save</b-button>
        </template>
      </t-accordion>
    </b-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
    }
  }
}
</script>
