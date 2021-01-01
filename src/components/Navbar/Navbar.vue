<template>
  <div class="page-sidenav no-shrink bg-light nav-dropdown fade sticky" @mouseover="$emit('mouseover')" @mouseout="$emit('mouseout')">
    <div class="sidenav h-100 modal-dialog bg-light">
      <logo />
      <nav-menu />
    </div>
  </div>
</template>
<script>
import Logo from './Logo.vue'
import NavMenu from './Menu.vue'
export default {
  components: {
    Logo,
    NavMenu
  }
}
</script>
