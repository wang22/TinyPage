<template>
  <div>
    <div class="page-hero page-container">
      <div class="padding d-flex">
        <div class="page-title">
          <h2 class="text-md text-highlight">{{ title }}</h2>
          <small class="text-muted">{{ note }}</small>
        </div>
        <div class="flex"></div>
        <div>
        </div>
      </div>
    </div>
    <div class="page-content page-container">
      <div class="padding">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import types from '../types'
export default {
  props: {
    title: types.String('title'),
    note: types.String('note')
  }
}
</script>
