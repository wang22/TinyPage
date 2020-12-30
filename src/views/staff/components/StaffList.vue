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
              <div class="item-mail text-muted h-1x d-none d-sm-block">{{ data.item.account }}</div>
            </div>
          </div>
        </template>
        <template #cell(role)="data">
          <h5><b-badge variant="primary">{{data.item.role}}</b-badge></h5>
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
      items: [
        { role: true, nickname: '王小帅', account: 'Dickerson', posts: 3, avatar: 'http://wx2.sinaimg.cn/mw600/00869HDlly1gm55pjcr38j30bi0eq0t5.jpg' },
        { role: false, nickname: '王小帅', account: 'Larsen', posts: 3, avatar: 'http://wx2.sinaimg.cn/mw600/00869HDlly1gm55pjcr38j30bi0eq0t5.jpg' },
        { role: false, nickname: '王小帅', account: 'Geneva', posts: 3, avatar: 'http://wx2.sinaimg.cn/mw600/00869HDlly1gm55pjcr38j30bi0eq0t5.jpg' },
        { role: true, nickname: '王小帅', account: 'Jami', posts: 3, avatar: 'http://wx2.sinaimg.cn/mw600/00869HDlly1gm55pjcr38j30bi0eq0t5.jpg' }
      ]
    }
  }
}
</script>
