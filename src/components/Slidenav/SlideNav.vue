<template>
  <div class="fade aside aside-sm">
    <div class="modal-dialog d-flex flex-column w-md bg-body">
      <div class="navbar">
        <span class="text-md mx-2">{{title}}</span>
        <slot name="titleButton"></slot>
      </div>
      <div class="scrollable hover">
        <div class="sidenav p-2">
          <nav class="nav-border b-primary auto-nav">
            <ul class="nav">
              <div v-for="(item, index) in nav" :key="index" >
                <t-slide-nav-item v-if="!item.slotName" :subtitle="item.subtitle" :active="item.active" :title="item.title" :badgeText="item.badge" :badgeStyle="item.badgeStyle" />
                <slot v-else :name="item.slotName"></slot>
              </div>
              <!-- <li><a href="javascript:void(0)"><span class="nav-text">All</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="javascript:void(0)"><span class="nav-text">Drafts</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li><a href="javascript:void(0)"><span class="nav-text">Scheduled</span> <span class="nav-badge"><b class="badge badge-sm badge-pill gd-danger">15</b></span></a></li>
              <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Authors</span></li>
              <li class="active"><a href="javascript:void(0)"><span class="m-2"><b-avatar class="w-24"></b-avatar> </span><span class="nav-text">小王王</span></a></li>
              <li><a href="javascript:void(0)"><span class="m-2"><b-avatar class="w-24"></b-avatar> </span><span class="nav-text">kkkkkkkv</span></a></li>
              <li class="nav-header hidden-folded mt-2"><span class="d-block pt-1 text-sm text-muted">Tags</span></li>
              <li class="active"><a href="javascript:void(0)"><span class="mx-2"><b class="badge badge-circle sm text-primary"></b> </span><span class="nav-text">java</span></a></li>
              <li><a href="javascript:void(0)"><span class="mx-2"><b class="badge badge-circle sm text-primary"></b> </span><span class="nav-text">php</span></a></li> -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import types from '../types'
export default {
  props: {
    title: types.String(),
    nav: types.Array()
  }
}
</script>
