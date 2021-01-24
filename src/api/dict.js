import request from '@/utils/request'

const dictApi = {
  update: '/admin/dict/json'
}

export function update (key, value) {
  return request({
    url: dictApi.update,
    method: 'put',
    data: {
      key,
      value
    }
  })
}

export function get (key) {
  return request({
    url: `/admin/dict/${key}/json`,
    method: 'get'
  })
}
