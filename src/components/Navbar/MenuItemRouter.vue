<template>
  <router-link :to="{path: menu.router}">
    <span
      v-if="menu.icon"
      :class="`nav-icon text-${
        menu.iconStyle ? menu.iconStyle : 'secondary'
      }`"
      v-html="menu.icon"
    ></span>
    <span class="nav-text">{{ menu.name }}</span>
    <span class="nav-badge" v-if="menu.badge">
      <b-badge pill :variant="menu.badgeStyle">1</b-badge>
    </span>
    <span class="nav-caret" v-if="menu.children"></span>
  </router-link>
</template>
<script>
import types from '../types'

export default {
  props: {
    menu: types.Object()
  }
}
</script>
