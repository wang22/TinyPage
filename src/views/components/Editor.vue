<template>
  <t-main-container>
    <div id="editorjs">

    </div>
  </t-main-container>
</template>
<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'

export default {
  created () {
    const editor = new EditorJS({
      tools: {
        header: Header
      }
    })
    console.log(editor)
  }
}
</script>
