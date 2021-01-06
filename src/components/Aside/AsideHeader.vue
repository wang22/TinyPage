<template>
  <div class="navbar">
    <span class="text-md mx-2">{{ title }}</span>
    <slot name="button"></slot>
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
