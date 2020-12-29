<template>
  <li>
    <a href="javascript:void(0)"
      ><span class="nav-text">{{ title }}</span>
      <span class="nav-badge">
        <b v-if="badgeText" :class="`badge badge-sm badge-pill gd-${badgeStyle}`">{{
          badgeText
        }}</b></span
      ></a>
  </li>
</template>
<script>
import types from '../types'

export default {
  props: {
    title: types.String(),
    badgeText: types.String(),
    badgeStyle: types.String('danger')
  }
}
</script>
