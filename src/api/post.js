import request from '@/utils/request'

const postApi = {
  save: '/admin/post.json'
}

export function save (param) {
  return request({
    url: postApi.save,
    method: 'post',
    data: param
  })
}
