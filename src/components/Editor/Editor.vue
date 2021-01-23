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
import types from '../types'
import { editorUpload } from '../../api/upload'

export default {
  data () {
    return {
      editor: null
    }
  },
  props: {
    placeholder: types.String('')
  },
  mounted () {
    this.initEditorr()
  },
  methods: {
    getContent () {
      return this.editor.save()
    },
    initEditorr () {
      this.editor = new EditorJS({
        placeholder: this.placeholder,
        holder: 'editor-holder',
        tools: {
          header: Header,
          list: List,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile (file) {
                  return editorUpload().then(res => {
                    if (res.code !== 0) {
                      // TODO 处理错误
                      return
                    }
                    return {
                      success: 1,
                      file: {
                        url: res.data.url
                      }
                    }
                  })
                },
                uploadByUrl (url) {
                  const promise = new Promise((resolve, reject) => {
                    resolve()
                  }).then(() => {
                    return {
                      success: 1,
                      file: {
                        url
                      }
                    }
                  })
                  return promise
                }
              }
            }
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
