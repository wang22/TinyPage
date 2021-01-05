<template>
  <!-- <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Tags</span></li> -->
  <li :class="classes" @click="onActive">
    <a href="javascript:void(0)" v-if="!this.subtitle" class="flex-grow-1">
      <span class="m-2 nav-list-avatar" v-if="avatarSVG" v-html="avatarSVG">
      </span>
      <span class="nav-text">{{ title }}</span>
      <span class="nav-badge" v-if="badgeText"><b :class="`badge badge-sm badge-pill gd-${badgeStyle}`">{{badgeText}}</b></span>
    </a>
    <span v-else class="d-block pt-1 text-sm text-muted">{{ title }}</span>
    <slot name="right"></slot>
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
  model: {
    prop: 'active',
    event: 'onActive'
  },
  props: {
    title: types.String(),
    badgeText: types.String(),
    badgeStyle: types.String('dark'),
    subtitle: types.Bool(false),
    active: types.Bool(false),
    avatarSVG: types.String()
  },
  computed: {
    classes () {
      return [
        {
          'nav-header hidden-folded mt-2': this.subtitle,
          'active ': this.active,
          'd-flex': this.avatarSVG
        }
      ]
    }
  },
  methods: {
    onActive () {
      // this.active = true
      this.$emit('onActive', !this.active)
    }
  }
}
</script>
