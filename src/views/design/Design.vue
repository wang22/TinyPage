<template>
  <t-main-container title="Design" note="Choose your best theme">
    <b-row>
      <b-col cols="6" v-for="tmpl in templates" :key="tmpl.name">
        <b-card>
          <b-carousel fade indicators>
            <b-carousel-slide v-for="(img, i) in tmpl.preview_img" :key="i" :img-src="`http://localhost:8888${img}`"></b-carousel-slide>
          </b-carousel>
          <b-card-body>
              <b-card-title><h5>{{tmpl.name}}</h5></b-card-title>
          </b-card-body>

          <b-card-body>
              <a href="#" class="card-link">Preview</a>
              <a href="#" class="card-link">Use Theme</a>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </t-main-container>
</template>
<script>
import { all as getAllTemplate } from '@/api/template'
export default {
  data () {
    return {
      templates: []
    }
  },
  mounted () {
    this.getTemplates()
  },
  methods: {
    getTemplates () {
      getAllTemplate().then(res => {
        if (res.code !== 0) {
          // TODO ERR
          return
        }
        this.templates = res.data.templates
      })
    }
  }
}
</script>
