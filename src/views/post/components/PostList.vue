<template>
  <div>
    <div class="scroll-y mx-3 mb-0">
      <b-table class="table-theme table-row v-middle" :busy="false" :fields="fields" :items="items">
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
        <template #head(visible)="data">
          <span class="text-muted">{{data.label}}</span>
        </template>
        <template #head(modified)="data">
          <span class="text-muted">{{data.label}}</span>
        </template>
        <template #cell(title)="data">
          <a href="#" class="item-title text-color">{{data.item.title}}</a>
          <div class="item-except text-muted text-sm h-1x">{{data.item.title}} description</div>
        </template>
        <template #cell(author)="data">
          <div class="avatar-group">
            <b-avatar class="avatar w-32" v-b-tooltip.hover :title="data.item.author"></b-avatar>
          </div>
        </template>
        <template #cell(visible)="data">
          <h5>
            <b-badge v-if="data.item.visible == 0" variant="dark">Private</b-badge>
            <b-badge v-if="data.item.visible == 1" variant="primary">Paid Member</b-badge>
            <b-badge v-if="data.item.visible == 2" variant="info">Member</b-badge>
            <b-badge v-if="data.item.visible == 3" variant="success">Public</b-badge>
          </h5>
        </template>
      </b-table>
    </div>
    <div class="px-3 mt-auto">
      <div class="d-flex align-items-center">
        <div class="flex d-flex flex-row">
          <b-pagination
            :total-rows="30"
            :per-page="1"
            :limit="10"
            size="sm"
          ></b-pagination>
        </div>
        <div><span class="text-muted">Total:</span> <span id="count">20</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import { page as getPostPage } from '@/api/post'
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
          label: 'Author',
          thClass: 'w-muted'
        },
        {
          key: 'visible',
          label: 'Visible',
          thClass: 'w-muted'
        },
        {
          key: 'modified',
          label: 'Last Update',
          thClass: 'w-muted'
        }
      ],
      items: []
      // items: [
      //   { status: true, author: '王小帅', title: 'Dickerson', description: 'data description', lastUpdate: 'Macdonald' },
      //   { status: false, author: '王小帅', title: 'Larsen', description: 'data description', lastUpdate: 'Shaw' },
      //   { status: false, author: '王小帅', title: 'Geneva', description: 'data description', lastUpdate: 'Wilson' },
      //   { status: true, author: '王小帅', title: 'Jami', description: 'data description', lastUpdate: 'Carney' }
      // ]
    }
  },
  mounted () {
    this.getPostPage()
  },
  methods: {
    getPostPage () {
      getPostPage(1, 10, 0).then(res => {
        console.log(res)
        this.items = res.data.page.list
      })
    }
  }
}
</script>
