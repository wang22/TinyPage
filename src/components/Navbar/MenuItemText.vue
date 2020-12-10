<template>
  <a href="javascript:void(0);">
    <span
      v-if="menu.icon"
      :class="`nav-icon ${menu.iconStyle ? `text-${menu.iconStyle}`: ''}`"
      v-html="menu.icon"
    ></span>
    <span class="nav-text">{{ menu.name }}</span>
    <span class="nav-badge" v-if="menu.badge">
      <b-badge :variant="menu.badgeStyle">1</b-badge>
    </span>
    <span class="nav-caret" v-if="menu.children"></span>
  </a>
</template>
<script>
import types from '../types'

export default {
  props: {
    menu: types.Object()
  }
}
</script>
