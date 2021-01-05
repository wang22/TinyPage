<template>
  <b-overlay :show="loading" rounded="sm">
    <div class="scroll-y mx-3 mb-0">
      <b-jumbotron v-show="!page.list" class="mt-3" header="Empty" lead="You can publish first post for now!">
        <b-button size="sm" variant="primary" style="white-space: nowrap;" @click="$router.push('/posts/publish')">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          New Post
        </b-button>
      </b-jumbotron>
      <b-table v-show="page.list" class="table-theme table-row v-middle" :busy="false" :fields="fields" :items="page.list">
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
          <div class="item-except text-muted text-sm h-1x">{{data.item.excerpt}}</div>
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
    <div class="px-3 mt-auto" v-show="page.list">
      <div class="d-flex align-items-center">
        <div class="flex d-flex flex-row">
          <b-pagination
            v-model="page.page"
            :total-rows="page.count"
            :per-page="page.size"
            :limit="10"
            @change="pageChange"
          ></b-pagination>
        </div>
        <div><span class="text-muted">Total:</span> <span id="count">{{page.count}}</span></div>
      </div>
    </div>
  </b-overlay>
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
      page: {},
      query: {},
      pageSize: 20,
      loading: false
    }
  },
  mounted () {
    this.getPostPage(1, this.pageSize, 0)
  },
  methods: {
    getPostPage (page, size, lastID) {
      this.loading = true
      getPostPage(page, size, lastID, this.query).then(res => {
        this.loading = false
        this.page = res.data.page
        window.scrollTo(0, 0)
      })
    },
    pageChange (num) {
      const lastID = this.page.list[this.page.list.length - 1].id
      this.getPostPage(num, this.pageSize, lastID)
    }
  }
}
</script>
