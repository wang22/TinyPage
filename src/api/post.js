import request from '@/utils/request'

const postApi = {
  save: '/admin/post.json',
  page: '/admin/post/'
}

export function save (param) {
  return request({
    url: postApi.save,
    method: 'post',
    data: param
  })
}

export function page (page, size, lastID) {
  return request({
    url: `${postApi.page}${page}/${size}/list.json?lastID=${lastID}`,
    method: 'get'
  })
}
