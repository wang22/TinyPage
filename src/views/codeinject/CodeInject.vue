<template>
  <t-main-container title="Code Inject" note="Enhance the functionality of your site">
    <b-button @click="addNewCode" block variant="white" class="mb-3">Add New Code</b-button>
    <Code v-for="(item, index) in newCodes" :value="item" :key="index" @deleted="onDeleted" />
    <Code v-for="item in codes" :value="item" :key="item.id" @deleted="onDeleted" />
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
      codes: [],
      newCodes: []
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
    },
    addNewCode () {
      this.newCodes.push({
        key: 'new_code',
        description: 'code description',
        language: 'text/javascript',
        code: 'console.log("hello TinyCMS");'
      })
    },
    onDeleted (id) {
      this.codes = this.codes.filter(val => {
        if (val.id === id) {
          return false
        }
        return val
      })
      this.newCodes = this.newCodes.filter(val => {
        if (val.id === id) {
          return false
        }
        return val
      })
    }
  }
}
</script>
