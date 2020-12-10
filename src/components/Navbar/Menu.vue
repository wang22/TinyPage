<template>
    <div class="flex scrollable hover">
        <div class="nav-active-text-primary">
          <ul class="nav">
            <menu-item v-for="(menu, index) in menus" :key="index" :menu="menu" />
          </ul>
        </div>
      </div>
</template>
<script>
import MenuItem from './MenuItem'

export default {
  components: {
    MenuItem
  },
  data () {
    return {
      menus: [
        {
          name: 'Manage',
          muted: true
        },
        {
          name: 'Calendar',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"   > <rect   x="3"   y="4"   width="18"   height="18"   rx="2"   ry="2" ></rect> <line x1="16" y1="2" x2="16" y2="6"></line> <line x1="8" y1="2" x2="8" y2="6"></line> <line x1="3" y1="10" x2="21" y2="10"></line></svg>',
          iconStyle: 'info',
          badge: '1',
          badgeStyle: 'danger'
        },
        {
          name: 'Users',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
          iconStyle: 'success'
        },
        {
          name: 'UI elements',
          muted: true
        },
        {
          name: 'Components',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
          active: true,
          children: [
            {
              name: 'Alert',
              active: true,
              router: '/components/alert'
            },
            {
              name: 'Badge',
              router: '/components/badge'
            }
          ]
        }
      ]
    }
  }
}
</script>
