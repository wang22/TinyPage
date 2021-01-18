<template>
  <div id="editor-holder"></div>
</template>
<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import ImageTool from '@editorjs/image'
import InlineCode from '@editorjs/inline-code'
import Embed from '@editorjs/embed'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import LinkTool from '@editorjs/link'
import Delimiter from '@editorjs/delimiter'
import Table from '@editorjs/table'
import CheckList from '@editorjs/checklist'

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
      this.editor = new EditorJS({
        holder: 'editor-holder',
        tools: {
          header: Header,
          list: List,
          image: {
            class: ImageTool
          },
          inlineCode: {
            class: InlineCode
          },
          embed: {
            class: Embed
          },
          quote: Quote,
          marker: {
            class: Marker
          },
          linkTool: {
            class: LinkTool
          },
          delimiter: Delimiter,
          table: {
            class: Table
          },
          checklist: {
            class: CheckList,
            inlineToolbar: true
          }
        }
      })
    }
  }
}
</script>
