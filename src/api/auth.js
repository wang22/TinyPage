import request from '@/utils/request'

const authApi = {
  Signin: '/admin/auth/signin/json',
  Info: '/admin/auth/info/json'
}

export function signin (parameter) {
  return request({
    url: authApi.Signin,
    method: 'post',
    data: parameter
  })
}

export function info (full) {
  return request({
    url: authApi.Info + (full ? '&full=1' : ''),
    method: 'get'
  })
}
