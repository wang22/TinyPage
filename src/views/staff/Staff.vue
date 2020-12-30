<template>
  <div class="d-flex flex fixed-content">
    <t-slide-nav title="Staff" :nav="nav">
      <template #titleButton>
        <b-dropdown size="sm" class="no-bg no-shadow no-caret" variant="icon">
          <template #button-content>
            <svg xmlns="http://www.w3.org/2000/svg"  white="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </template>
          <b-dropdown-item v-b-modal.modal-2>
            Invite Staff By Email
          </b-dropdown-item>
        </b-dropdown>
      </template>
    </t-slide-nav>
    <div class="d-flex flex">
      <div class="d-flex flex-column flex">
        <div class="px-3 pt-3">
          <div class="toolbar">
            <b-input-group>
              <b-form-input class="form-control-theme" size="sm" placeholder="Search staff nickname or account"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" variant="white">Search</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
        <div>
          <staff-list/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StaffList from './components/StaffList'

export default {
  components: {
    StaffList
  },
  data () {
    return {
      nav: [
        {
          title: 'All',
          active: true
        },
        {
          title: 'The Owner',
          badge: '1',
          badgeStyle: 'dark'
        },
        {
          title: 'Administrators',
          badge: '11'
        },
        {
          title: 'Editors'
        },
        {
          title: 'Authors'
        },
        {
          title: 'Group',
          subtitle: true
        }
      ]
    }
  }
}
</script>
