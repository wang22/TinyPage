<template>
    <t-content-header title="Posts > Publish">
    </t-content-header>
    <div style="width: 740px">
        <input type="text" class="p-3 text-3xl rounded shadow w-full focus:outline-none" placeholder="Post Title" />
        <div id="editorjs" class="editor bg-white shadow rounded mt-3 p-5"></div>
    </div>
</template>
<script>
import EditorJS from '@editorjs/editorjs'
import EditorHeader from '@editorjs/header'
export default {
    created() {
        const editor = new EditorJS({
            holder: 'editorjs',
            tools: {
                header: {
                    class: EditorHeader
                }
            }
        });
    }
}
</script>