<template>
  <div>
    <div class="scroll-y mx-3 mb-0">
      <b-table class="table-theme table-row v-middle" :busy="false" :fields="fields" :items="page.list">
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle"></b-spinner><br><br>
            <strong>Loading...</strong>
          </div>
        </template>
        <template #head(staff)="data">
          <span class="text-muted">{{data.label}}</span>
        </template>
        <template #head(role)="data">
          <span class="text-muted">{{data.label}}</span>
        </template>
        <template #head(posts)="data">
          <span class="text-muted">{{data.label}}</span>
        </template>
        <template #cell(staff)="data">
          <div class="d-flex">
            <b-avatar class="w-40 mr-2" :src="data.item.avatar" ></b-avatar>
            <div class="flex">
              <a href="#" class="item-author text-color">{{ data.item.nickname }}</a>
              <div class="item-mail text-muted h-1x d-none d-sm-block">{{ data.item.username }}</div>
            </div>
          </div>
        </template>
        <template #cell(role)="data">
          <b-badge variant="primary" v-if="data.item.role === 1">Owner</b-badge>
          <b-badge variant="info" v-if="data.item.role === 2">Administrator</b-badge>
          <b-badge variant="secondary" v-if="data.item.role === 3">Editor</b-badge>
          <b-badge variant="secondary" v-if="data.item.role === 4">Author</b-badge>
        </template>
        <template #cell(posts)="data">
          <a href="#" class="text-muted">{{data.item.posts}}</a>
        </template>
      </b-table>
    </div>
    <div class="px-3 mt-auto">
      <div class="d-flex align-items-center">
        <div class="flex d-flex flex-row">
          <b-pagination
            v-model="page.page"
            :total-rows="page.count"
            :per-page="page.size"
            :limit="10"
          ></b-pagination>
        </div>
        <div><span class="text-muted">Total:</span> <span id="count">{{page.count}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import { page as getPageData } from '@/api/member'
export default {
  data () {
    return {
      fields: [
        {
          key: 'staff',
          label: 'Staff',
          thClass: 'w-muted'
        },
        {
          key: 'role',
          label: 'Role',
          thClass: 'w-muted'
        },
        {
          key: 'posts',
          label: 'Posts',
          thClass: 'w-muted'
        }
      ],
      page: {},
      pageSize: 20,
      query: {}
    }
  },
  mounted () {
    this.getMemberPage(1, this.pageSize, 0)
  },
  methods: {
    getMemberPage (page, size, lastID) {
      getPageData(page, size, lastID, this.query).then(res => {
        this.page = res.data.page
        window.scrollTo(0, 0)
      })
    },
    setQueryParam (param) {
      const query = JSON.parse(JSON.stringify(this.query))
      for (const key in param) {
        query[key] = param[key]
      }
      this.query = query
      this.getMemberPage(1, this.pageSize, 0)
    }
  }
}
</script>
