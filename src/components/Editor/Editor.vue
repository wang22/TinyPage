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
                  console.log(file)
                  const uuu = 'http://wx2.sinaimg.cn/mw600/00893JKXly1gi57lo6saij31400mediz.jpg'
                  return new Promise((resolve, reject) => {
                    resolve(uuu)
                  }).then(url => {
                    console.log(111, url)
                    return {
                      success: 1,
                      file: {
                        url
                      }
                    }
                  })
                },
                uploadByUrl (url) {
                  return new Promise((resolve, reject) => {
                    resolve(url)
                  }).then(url => {
                    return {
                      success: 1,
                      file: {
                        url: url
                      }
                    }
                  })
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
