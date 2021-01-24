<template>
  <b-card no-body class="mb-3">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button @click="visible = !visible" variant="white" size="sm" class="no-shadow text-left">{{value.key}}</b-button>
    </b-card-header>
    <b-collapse v-model="visible" accordion="my-accordion" role="tabpanel">
      <b-overlay :show="loading" rounded="sm">
        <b-card-body>
          <b-form-group
            label="Code Key:"
            label-for="seo-meta-title"
          >
            <b-form-input autocomplete="off" v-model="value.key" />
          </b-form-group>
          <b-form-group
            label="Description:"
            label-for="seo-meta-title"
          >
            <b-form-textarea rows="3" max-rows="6" v-model="value.description"></b-form-textarea>
          </b-form-group>
          <b-form-group
            label="Language:"
            label-for="seo-meta-title"
          >
            <b-form-select v-model="cmOption.mode" :options="modeOptions"></b-form-select>
          </b-form-group>
          <b-form-group
            label="Code:"
            label-for="seo-meta-title"
          >
            <div class="cmStyle">
              <codemirror ref="cmEditor" v-model="value.code" :options="cmOption" />
            </div>
          </b-form-group>
        </b-card-body>
        <b-card-body>
          <b-button variant="primary" size="sm" class="mr-1">Copy Template Tag</b-button>
          <b-button @click="save" variant="primary" size="sm" class="mr-1">Save</b-button>
          <b-button v-if="value.id" @click="deleteCode" variant="white" size="sm" class="mr-1">Delete</b-button>
        </b-card-body>
      </b-overlay>
    </b-collapse>
  </b-card>
</template>
<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/theme/solarized.css'

// hint
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/javascript-hint.js'
import 'codemirror/addon/hint/css-hint.js'
import 'codemirror/addon/hint/html-hint.js'
import 'codemirror/addon/selection/active-line.js'

import types from '../../../components/types'
import { saveCode, deleteCode } from '@/api/code'

export default {
  props: {
    value: types.Object()
  },
  components: {
    codemirror
  },
  data () {
    return {
      loading: false,
      visible: false,
      modeOptions: [
        { value: 'text/javascript', text: 'Javascript' },
        { value: 'text/css', text: 'css' },
        { value: 'text/html', text: 'html' },
        { value: 'text/x-markdown', text: 'markdown' },
        { value: 'custom', text: 'text' }
      ],
      cmOption: {
        tabSize: 2,
        styleActiveLine: false,
        lineNumbers: true,
        styleSelectedText: false,
        line: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        mode: 'text/javascript',
        hintOptions: {
          completeSingle: false
        },
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: 'base16-light',
        extraKeys: { Ctrl: 'autocomplete' }
      }
    }
  },
  mounted () {
    this.cmOption.mode = this.value.language
  },
  methods: {
    save () {
      this.loading = true
      saveCode(this.value).then(res => {
        this.loading = false
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        this.value.id = res.data.id
        this.$bvToast.toast('save code')
      })
    },
    deleteCode () {
      this.$bvModal.msgBoxConfirm('确定要删除这段代码吗？ ', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(val => {
        if (val) {
          deleteCode(this.value.id).then(res => {
            if (res.code !== 0) {
              // TODO ERROR
              return
            }
            this.$bvToast.toast('delete code')
            this.$emit('deleted', this.value.id)
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.cmStyle {
  border: 1px solid rgba(138, 148, 155, 0.15);
  border-radius: .3rem;
  overflow: hidden;
}
</style>
