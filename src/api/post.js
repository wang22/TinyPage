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

export function page (page, size, lastID, query) {
  query.lastID = lastID
  return request({
    url: `/admin/post/${page}/${size}/page.json`,
    method: 'get',
    params: query
  })
}
