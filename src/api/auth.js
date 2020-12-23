import request from '@/utils/request'

const authApi = {
  Signin: '/admin/auth/signin.json'
}

export function signin (parameter) {
  return request({
    url: authApi.Signin,
    method: 'post',
    data: parameter
  })
}
