import request from '@/utils/request'

const channelApi = {
  save: '/admin/channel.json'
}

export function save (parameter) {
  return request({
    url: channelApi.save,
    method: 'post',
    data: parameter
  })
}
