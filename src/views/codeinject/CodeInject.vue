<template>
  <t-main-container title="Code Inject" note="Enhance the functionality of your site">
    <b-card no-body class="mb-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="white" class="no-bg no-shadow">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
        <b-card-body>
          <a href="#" class="card-link">Copy Code</a>
          <a href="#" class="card-link">Copy Template Tag</a>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-3">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="white" class="no-bg no-shadow">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </t-main-container>
</template>
