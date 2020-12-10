<template>
  <li :class="(menu.muted ? 'nav-header hidden-folded' : '') + ' ' + (menu.active ? 'active': '')">
    <span v-if="menu.muted" class="text-muted" >{{ menu.name }}</span>
    <menu-item-text :menu="menu" v-else-if="menu.children" />
    <menu-item-router :menu="menu" v-else />
    <ul class="nav-sub nav-mega" v-if="menu.children">
      <menu-item v-for="(child, index) in menu.children" :key="index" :menu="child"  />
    </ul>
  </li>
</template>
<script>
import types from '../types'
import MenuItemText from './MenuItemText'
import MenuItemRouter from './MenuItemRouter'

export default {
  name: 'menu-item',
  props: {
    menu: types.Object()
  },
  components: {
    MenuItemText,
    MenuItemRouter
  },
  methods: {
  }
}
</script>
