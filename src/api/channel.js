import request from '@/utils/request'

const channelApi = {
  save: '/admin/channel/json',
  all: '/admin/channels/json',
  sort: '/admin/channels/sort/json'
}

export function save (parameter) {
  return request({
    url: channelApi.save,
    method: 'post',
    data: parameter
  })
}

export function all () {
  return request({
    url: channelApi.all,
    method: 'get'
  })
}

export function sort (parameter) {
  return request({
    url: channelApi.sort,
    method: 'put',
    data: parameter
  })
}
