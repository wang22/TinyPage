<template>
  <li :class="classes" @click="onClick">
    <a href="javascript:void(0);" class="flex-grow-1">
      <span class="m-2 nav-list-avatar" v-if="svg" v-html="svg"></span>
      <span class="nav-text">{{ title }}</span>
      <span v-if="badge" class="nav-badge"><b class="badge badge-sm badge-pill gd-dark">{{ badge }}</b></span>
    </a>
    <slot></slot>
  </li>
</template>
<style scoped>
.nav-list-avatar >>> svg {
  width: 24px;
  height: 24px;
  position: relative;
  line-height: 1;
  white-space: nowrap;
  font-weight: 700;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
</style>
<script>
import types from '../types'

export default {
  props: {
    id: types.String(),
    title: types.String(''),
    badge: types.String(''),
    svg: types.String(''),
    active: types.Bool(false)
  },
  computed: {
    classes () {
      return [
        'd-flex',
        {
          'active ': this.active
        }
      ]
    }
  },
  methods: {
    onClick () {
      this.$emit('click', this.id)
    }
  }
}
</script>
