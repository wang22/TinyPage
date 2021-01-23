<template>
  <b-card no-body class="mb-3">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button @click="visible = !visible" variant="white" class="no-bg no-shadow text-left">{{value.key}}</b-button>
    </b-card-header>
    <b-collapse v-model="visible" accordion="my-accordion" role="tabpanel">
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
        <b-button variant="primary" class="mr-1">Copy Template Tag</b-button>
        <b-button variant="white" class="mr-1">Delete</b-button>
      </b-card-body>
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

export default {
  props: {
    value: types.Object()
  },
  components: {
    codemirror
  },
  data () {
    return {
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
