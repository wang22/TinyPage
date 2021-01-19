import request from '@/utils/request'

const pluginApi = {
  type: '/admin/plugin/',
  updateParam: '/admin/plugin/params/json'
}

export function getByType (type) {
  return request({
    url: pluginApi.type + type + '/all/json',
    method: 'get'
  })
}

export function updateParam (param) {
  return request({
    url: pluginApi.updateParam,
    method: 'put',
    data: param
  })
}
