<template>
  <t-main-container title="New Post" note="Let`s write an awesome story!">
    <template #right>
      <a @click="$router.push('/')" class="btn btn-md text-muted">
        <span class="d-none d-sm-inline mx-1">Back To Post Lists</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
      </a>
    </template>
    <div class="editor">
      <div class="editor-content">
        <b-input size="lg" class="form-control-theme form-control no-bg no-shadow mb-5" style="text-align:center" placeholder="Post Title" />
        <div id="editorjs"></div>
      </div>
    </div>
  </t-main-container>
</template>
<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'

export default {
  data () {
    return {
      layout: {
        hideAside: true
      }
    }
  },
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
  background: #fff;
  border-radius: 5rem;
  border: 3.5rem solid #eef5fa;
}
.editor-content {
  border-radius: 1rem;
  background: #fff;
  padding: 2rem 1rem 5rem;
  box-shadow: 0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12);
}
</style>
