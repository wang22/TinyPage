<template>
  <t-main-container title="Code Inject" note="Enhance the functionality of your site">
    <template #right>
      <a @click="$router.push('/')" class="btn btn-md text-muted">
        <span class="d-none d-sm-inline mx-1">New Code</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
      </a>
    </template>
    <b-card no-body class="mb-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="white" class="no-bg no-shadow text-left">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
        <b-card-body>
          <!-- <a href="#" class="card-link">Copy Code</a>
          <a href="#" class="card-link">Copy Template Tag</a> -->
          <b-button variant="primary" class="mr-1">Copy Template Tag</b-button>
          <b-button variant="white" class="mr-1">Edit</b-button>
          <b-button variant="white" class="mr-1">Delete</b-button>
        </b-card-body>
      </b-collapse>
    </b-card>
  </t-main-container>
</template>
