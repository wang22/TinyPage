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
        <b-input v-model="post.title" autocomplete="off" size="lg" class="form-control-theme form-control no-bg no-shadow mb-5" style="text-align:center" placeholder="Post Title" />
        <t-editor />
        <div class="d-flex">
          <b-button block variant="outline-secondary" pill @click="savePost" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send mx-2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            Publish
          </b-button>
          <b-button v-b-modal.postSetting class="ml-2" variant="outline-primary" pill v-b-tooltip.hover title="Post setting">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </b-button>
        </div>
      </div>
    </div>
    <b-modal id="postSetting" title="Post Setting" size="lg" body-class="modal-no-padding" no-close-on-backdrop>
      <post-setting v-model="post"></post-setting>
    </b-modal>
  </t-main-container>
</template>
<script>
import PostSetting from './modal/PostSettinng'
import { save as savePost } from '@/api/post'

export default {
  components: {
    PostSetting
  },
  data () {
    return {
      layout: {
        hideAside: true
      },
      post: {
        title: '',
        content: '',
        autoImage: true,
        image: '',
        autoExcerpt: true,
        excerpt: '',
        url: '',
        channel: 0,
        tags: [],
        visible: 3,
        publishDate: null,
        publishTime: null,
        meta: {
          title: '',
          description: ''
        }
      }
    }
  },
  created () {
  },
  methods: {
    savePost () {
      this.editor.save().then(out => {
        this.post.content = out
        console.log(this.post)
        savePost(this.post).then(res => {
          if (res.code !== 0) {
            return
          }
          console.log('save ok')
        })
      })
    }
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
  padding: 2rem 1rem 1rem;
  box-shadow: 0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12);
}
</style>
