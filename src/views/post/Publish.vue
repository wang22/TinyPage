<template>
  <t-main-container title="New Post" note="Let`s write an awesome story!">
    <b-input size="lg" class="form-control-theme form-control no-bg no-shadow" style="text-align:center" placeholder="Post Title" />
    <div class="editor"><div id="editorjs"></div></div>
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
      },
      placeholder: 'Let`s write an awesome story!'
    })
    console.log(editor)
  }
}
</script>
<style lang="scss" scoped>
.editor {
  margin-bottom: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,.05);
  border: 2px dashed #ced4da;
}
.cdx-block {
  background: #f00;
}
</style>
