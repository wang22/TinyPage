<template>
  <!-- <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Tags</span></li> -->
  <li :class="classes">
    <a href="javascript:void(0)" v-if="!this.subtitle"><span class="nav-text">{{ title }}</span>
      <span class="nav-badge">
        <b v-if="badgeText" :class="`badge badge-sm badge-pill gd-${badgeStyle}`">
          {{ badgeText }}
        </b>
      </span>
    </a>
    <span v-else class="d-block pt-1 text-sm text-muted">{{ title }}</span>
  </li>
</template>
<script>
import types from '../types'

export default {
  props: {
    title: types.String(),
    badgeText: types.String(),
    badgeStyle: types.String('danger'),
    subtitle: types.Bool(false),
    active: types.Bool(false)
  },
  computed: {
    classes () {
      return [
        {
          'nav-header hidden-folded mt-2': this.subtitle,
          'active ': this.active
        }
      ]
    }
  }
}
</script>
