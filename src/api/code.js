import request from '@/utils/request'

export function codeList () {
  return request({
    url: '/admin/code/json',
    method: 'get'
  })
}
