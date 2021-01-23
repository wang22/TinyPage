import request from '@/utils/request'

export function editorUpload () {
  return request({
    url: '/admin/upload/editor/json',
    method: 'post'
  })
}
