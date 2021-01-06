<template>
  <div class="scrollable hover">
    <div class="sidenav p-2">
      <nav class="nav-border b-primary auto-nav">
        <ul class="nav">
          <li v-if="title" class="nav-header hidden-folded"><span class="d-block pt-1 text-sm text-muted">{{title}}</span></li>
          <slot></slot>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import types from '../types'
export default {
  props: {
    title: types.String('')
  }
}
</script>
