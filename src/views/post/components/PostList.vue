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
          <div class="d-flex bd-highlight">
            <div class="mr-2 flex-shrink-1 bd-highlight">
              <span v-if="data.item.excerpt" v-html="icon.post"></span><span v-else v-html="icon.folder" style="cursor: pointer;"></span>
            </div>
            <div class="w-100 bd-highlight">
              <a href="#" class="item-title text-color">{{data.item.title}}</a>
              <div class="item-except text-muted text-sm h-1x">
                <span v-if="data.item.excerpt">{{data.item.excerpt}}</span>
                <span v-else>No Excerpt</span>
              </div>
            </div>
          </div>
        </template>
        <template #cell(author)="data">
          <div class="avatar-group">
            <b-avatar class="avatar w-32" v-b-tooltip.hover :title="data.item.author"></b-avatar>
          </div>
        </template>
        <template #cell(visible)="data">
          <h5>
            <b-badge v-if="data.item.visible == 0" variant="dark">Private</b-badge>
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
      loading: false,
      icon: {
        folder: '<svg t="1611498681066" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4998" width="40" height="40"><path d="M853.333333 256H469.333333l-85.333333-85.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v170.666667h853.333334v-85.333334c0-46.933333-38.4-85.333333-85.333334-85.333333z" fill="#FFA000" p-id="4999"></path><path d="M853.333333 256H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v426.666667c0 46.933333 38.4 85.333333 85.333334 85.333333h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333333V341.333333c0-46.933333-38.4-85.333333-85.333334-85.333333z" fill="#FFCA28" p-id="5000"></path></svg>',
        post: '<svg t="1611498739062" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5262" width="40" height="40"><path d="M85.333333 149.333333h853.333334v725.333334H85.333333z" fill="#BBDEFB" p-id="5263"></path><path d="M192 256h640v106.666667H192z" fill="#3F51B5" p-id="5264"></path><path d="M192 448h277.333333v341.333333H192zM554.666667 448h277.333333v341.333333H554.666667z" fill="#2196F3" p-id="5265"></path></svg>'
      }
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
    },
    setQueryParam (param) {
      const query = JSON.parse(JSON.stringify(this.query))
      for (const key in param) {
        query[key] = param[key]
      }
      this.query = query
      this.getPostPage(1, this.pageSize, 0)
    }
  }
}
</script>
