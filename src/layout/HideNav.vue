<template>
    <div class="layout-row">
        <t-navbar :class="navClass" @mouseover="navStatus(true)" @mouseout="navStatus(false)"/>
        <div class="layout-column flex">
            <t-main-header />
            <div class="flex">
                <router-view  ref="page"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      navClass: '',
      isHideAside: false
    }
  },
  mounted () {
    this.getNavStatus()
  },
  methods: {
    getNavStatus () {
      if (this.$refs.page.$data && this.$refs.page.$data.layout) {
        const layout = this.$refs.page.$data.layout
        if (layout.hideAside) {
          this.navClass = 'folded'
          this.isHideAside = true
        }
      }
    },
    navStatus (status) {
      if (this.isHideAside && status) {
        this.navClass = ''
      }
      if (this.isHideAside && !status) {
        this.navClass = 'folded'
      }
    }
  }
}
</script>
