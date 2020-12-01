<template>
  <div>
    <t-breadcrumb />
    <input class="text-5xl font-bold bg-transparent mb-5 w-full focus:outline-none" placeholder="(Untitled)" type="text" />
    <div id="editor" class="border bg-white"></div>
  </div>
</template>
<script>
import EditorJS from '@editorjs/editorjs';

export default {
    data() {
        return {
            contentEditor: ''
        }
    },
    mounted() {
        new EditorJS('editor');

    }
}
</script>