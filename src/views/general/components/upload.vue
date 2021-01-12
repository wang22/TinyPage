<template>
  <div>
    <p class="text-muted"><strong>Upload</strong></p>
    <b-card no-body>
      <t-accordion title="Upload Server" mark="Choose upload server" :icon="icon.upload.server">
        <template #collapse>
          <b-overlay :show="saveServerLoading" rounded="sm" :opacity="0.5">
            <b-form-group
              label="Choose Server:"
              label-for="seo-meta-description"
            >
              <b-form-select :options="server" v-model="uploadServer" @change="changeServer"></b-form-select>
            </b-form-group>
            <div v-for="(form, index) in paramForms" :key="index">
              <b-form-group
                :label="form.description"
                :description="form.key"
                label-for="seo-meta-description"
              >
                <b-form-input type="text" v-model="form.value" ></b-form-input>
              </b-form-group>
            </div>
            <b-button variant="primary" @click="saveParam">Save</b-button>
          </b-overlay>
        </template>
      </t-accordion>
      <t-accordion title="Upload Setting" mark="Choose upload server" :icon="icon.upload.setting">
        <template #collapse>
          <b-overlay :show="saveParamLoading" rounded="sm" :opacity="0.5">
            <b-form-group
              label="Max File Size:"
              label-for="seo-meta-description"
              :description="`Max upload file size: ${fileMaxSize}MB`"
            >
              <b-form-input type="number" v-model="fileMaxSize"></b-form-input>
            </b-form-group>
            <b-form-group
              label="File Type:"
              label-for="seo-meta-description"
              description="* is all type"
            >
              <multiselect v-model="fileType.value" tag-placeholder="选择上传文件类型" placeholder="手动输入类型" label="name" track-by="name" :options="fileType.options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </b-form-group>
            <b-button variant="primary" @click="saveUploadParam">Save</b-button>
          </b-overlay>
        </template>
      </t-accordion>
    </b-card>
  </div>
</template>
<script>
import { getByType, updateParam } from '@/api/plugin'
import { update as updateDict, get as getDictByKey } from '@/api/dict'
import Multiselect from 'vue-multiselect'
import '../../../css/multiselect.scss'

const uploadDictKey = 'upload:plugin'
const uploadFileTypeKey = 'upload:file_type'
const uploadFileMaxSizeKey = 'upload:file_max_size'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      icon: {
        upload: {
          server: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>',
          setting: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>'
        }
      },
      uploadServer: 0,
      server: [],
      params: {},
      paramForms: [],
      saveServerLoading: false,
      saveParamLoading: false,
      fileType: {
        value: [],
        options: [
          { name: '*' },
          { name: '3gpp' },
          { name: 'ac3' },
          { name: 'asf' },
          { name: 'au' },
          { name: 'css' },
          { name: 'csv' },
          { name: 'doc' },
          { name: 'dot' },
          { name: 'dtd' },
          { name: 'dwg' },
          { name: 'dxf' },
          { name: 'gif' },
          { name: 'htm' },
          { name: 'html' },
          { name: 'jp2' },
          { name: 'jpe' },
          { name: 'jpeg' },
          { name: 'jpg' },
          { name: 'js' },
          { name: 'json' },
          { name: 'mp2' },
          { name: 'mp3' },
          { name: 'mp4' },
          { name: 'mpeg' },
          { name: 'mpg' },
          { name: 'mpp' },
          { name: 'ogg' },
          { name: 'pdf' },
          { name: 'png' },
          { name: 'pot' },
          { name: 'pps' },
          { name: 'ppt' },
          { name: 'rtf' },
          { name: 'svf' },
          { name: 'tif' },
          { name: 'tiff' },
          { name: 'txt' },
          { name: 'wdb' },
          { name: 'wps' },
          { name: 'xhtml' },
          { name: 'xlc' },
          { name: 'xlm' },
          { name: 'xls' },
          { name: 'xlt' },
          { name: 'xlw' },
          { name: 'xml' },
          { name: 'zip' }
        ]
      },
      fileMaxSize: 0
    }
  },
  mounted () {
    this.getUploadPlugin()
    this.getUploadParam()
  },
  methods: {
    getUploadPlugin () {
      getByType('upload').then(res => {
        const plugins = res.data.plugins
        for (const i in plugins) {
          const info = plugins[i]
          this.server.push({
            text: info.plugin.name,
            value: info.plugin.id
          })
          this.params[info.plugin.id] = info.param
        }
        getDictByKey(uploadDictKey).then(res => {
          if (res.code !== 0) {
            // TODO 处理错误
            return
          }
          const dict = res.data.dict
          this.uploadServer = dict.value
          this.paramForms = this.params[dict.value]
        })
      })
    },
    getUploadParam () {
      getDictByKey(uploadFileMaxSizeKey).then(res => {
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        const dict = res.data.dict
        this.fileMaxSize = parseInt(dict.value)
      })
      getDictByKey(uploadFileTypeKey).then(res => {
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        const dict = res.data.dict
        const types = dict.value.split(',')
        for (const i in types) {
          this.fileType.value.push({
            name: types[i]
          })
        }
      })
    },
    changeServer () {
      this.paramForms = this.params[this.uploadServer]
    },
    saveParam () {
      this.saveServerLoading = true
      updateParam(this.paramForms).then(res => {
        this.saveServerLoading = false
        if (res.code !== 0) {
          // TODO 处理错误
          return
        }
        updateDict(uploadDictKey, this.uploadServer.toString()).then(res => {
          console.log(res)
        })
      })
    },
    addTag (newTag) {
      const tag = {
        name: newTag
      }
      this.fileType.options.push(tag)
      this.fileType.value.push(tag)
    },
    saveUploadParam () {
      this.saveParamLoading = true
      updateDict(uploadFileMaxSizeKey, this.fileMaxSize.toString()).then(() => {
        updateDict(uploadFileTypeKey, this.fileType.value.map(t => t.name).join(',')).then(() => {
          this.saveParamLoading = false
        })
      })
    }
  }
}
</script>
