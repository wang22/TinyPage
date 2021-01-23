<template>
  <t-main-container title="Code Inject" note="Enhance the functionality of your site">
    <template #right>
      <a @click="$router.push('/')" class="btn btn-md text-muted">
        <span class="d-none d-sm-inline mx-1">New Code</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
      </a>
    </template>
    <Code v-for="item in codes" :value="item" :key="item.id" />
  </t-main-container>
</template>
<script>
import Code from './components/Code'
import { codeList } from '@/api/code'
export default {
  components: {
    Code
  },
  data () {
    return {
      codes: []
    }
  },
  mounted () {
    this.getCodeList()
  },
  methods: {
    getCodeList () {
      codeList().then(res => {
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        this.codes = res.data.codes
      })
    }
  }
}
</script>
