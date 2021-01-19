import request from '@/utils/request'

export function page (page, size, lastID, query) {
  return request({
    url: `/admin/staff/${page}/${size}/page/json?lastID=${lastID}`,
    method: 'get',
    params: query
  })
}
