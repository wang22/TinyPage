<template>
    <div class="layout-row">
        <t-navbar />
        <div class="layout-column flex">
            <t-main-header />
            <div class="flex">
                <router-view />
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
  }
}
</script>
