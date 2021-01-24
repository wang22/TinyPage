import request from '@/utils/request'

export function codeList () {
  return request({
    url: '/admin/code/json',
    method: 'get'
  })
}

export function saveCode (param) {
  return request({
    url: '/admin/code/json',
    method: 'post',
    data: param
  })
}

export function deleteCode (id) {
  return request({
    url: `/admin/code/${id}/json`,
    method: 'delete'
  })
}
