<template>
  <div class="scroll-y mx-3 mb-0">
    <b-table class="table-theme table-row v-middle" :busy="false" :fields="fields" :items="items" sort-icon-left>
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner><br><br>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #head(title)="data">
        <span class="text-muted">{{data.label}}</span>
      </template>
      <template #head(author)="data">
        <span class="text-muted">{{data.label}}</span>
      </template>
      <template #head(status)="data">
        <span class="text-muted">{{data.label}}</span>
      </template>
      <template #head(lastUpdate)="data">
        <span class="text-muted">{{data.label}}</span>
      </template>
      <template #cell(title)="data">
        <a href="#" class="item-title text-color">{{data.item.title}}</a>
        <div class="item-except text-muted text-sm h-1x">{{data.item.description}}</div>
      </template>
      <template #cell(author)="">
        <div class="avatar-group">
          <b-avatar class="avatar w-32" v-b-tooltip.hover title="Tooltip directive content"></b-avatar>
        </div>
      </template>
      <template #cell(status)="data">
        <h5><b-badge variant="primary">{{data.item.status}}</b-badge></h5>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'title',
          label: 'Title'
        },
        {
          key: 'author',
          label: 'Author'
        },
        {
          key: 'status',
          label: 'Status'
        },
        {
          key: 'lastUpdate',
          label: 'Last Update'
        }
      ],
      items: [
        { status: true, author: '王小帅', title: 'Dickerson', description: 'data description', lastUpdate: 'Macdonald' },
        { status: false, author: '王小帅', title: 'Larsen', description: 'data description', lastUpdate: 'Shaw' },
        { status: false, author: '王小帅', title: 'Geneva', description: 'data description', lastUpdate: 'Wilson' },
        { status: true, author: '王小帅', title: 'Jami', description: 'data description', lastUpdate: 'Carney' }
      ]
    }
  }
}
</script>
<style>
.w-title {
  width: 20px;
}
.td-class {
  color: #000 !important;
}
</style>
