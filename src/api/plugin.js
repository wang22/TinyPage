import request from '@/utils/request'

const pluginApi = {
  type: '/admin/plugin/'
}

export function getByType (type) {
  return request({
    url: pluginApi.type + type + '/all.json',
    method: 'get'
  })
}
