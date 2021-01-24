import request from '@/utils/request'

export function all (key) {
  return request({
    url: '/admin/template/json',
    method: 'get'
  })
}
