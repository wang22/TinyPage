<template>
  <div>
    <div class="d-flex align-items-center px-4 py-3 b-t" style="cursor: pointer;" @click="showCollapse">
      <span v-html="icon"></span>
      <div class="px-3">
        <div>{{title}}</div>
        <div class="text-sm text-muted">{{mark}}</div>
      </div>
      <div class="flex"></div>
      <span v-if="$slots.right"><slot name="right"></slot></span>
      <span v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </span>
    </div>
    <b-collapse v-model="collapseVisible" class="p-4">
      <slot name="collapse"></slot>
    </b-collapse>
  </div>
</template>
<script>
import types from '../types'
export default {
  props: {
    icon: types.String(),
    title: types.String(),
    mark: types.String()
  },
  data () {
    return {
      collapseVisible: false
    }
  },
  methods: {
    showCollapse () {
      if (!this.$slots.right && this.$slots.collapse) {
        this.collapseVisible = !this.collapseVisible
      }
    },
    collapseStatus (status) {
      this.collapseVisible = status
    }
  }
}
</script>
