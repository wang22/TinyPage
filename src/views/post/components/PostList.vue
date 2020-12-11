<template>
  <b-table class="table-theme table-row v-middle" :items="items" :fields="fields">
    <template #cell(title)="data">
      {{ data.author + 'dd' }}
    </template>
  </b-table>
</template>
<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'title',
          label: 'Title',
          sortable: true
        },
        {
          key: 'status',
          label: 'Status',
          sortable: false
        },
        {
          key: 'lastUpdate',
          label: 'Last Update',
          sortable: true
        }
      ],
      items: [
        { status: true, author: '王小帅', title: 'Dickerson', last_name: 'Macdonald' },
        { status: false, author: '王小帅', title: 'Larsen', last_name: 'Shaw' },
        { status: false, author: '王小帅', title: 'Geneva', last_name: 'Wilson' },
        { status: true, author: '王小帅', title: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>
