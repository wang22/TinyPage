<template>
  <div id="editor-holder"></div>
</template>
<script>
import EditorJS from '@editorjs/editorjs'

export default {
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.initEditorr()
  },
  methods: {
    initEditorr () {
      this.editor = new EditorJS('editor-holder')
    }
  }
}
</script>
