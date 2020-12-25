import axios from 'axios'
import { VueAxios } from './axios'
import storage from 'store'

export const ACCESS_TOKEN = 'Access-Token'

const request = axios.create({
  // API 请求的默认前缀
  baseURL: 'http://127.0.0.1:8888',
  timeout: 6000 // 请求超时时间
})

// // 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    // const data = error.response.data
    // 从 localstorage 获取 token
    // const token = storage.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      // notification.error({
      //   message: 'Forbidden',
      //   description: data.message
      // })
    }
    if (error.response.status === 401) {
      window.location = '/auth/signin'
    }
  }
  return Promise.reject(error)
}

request.interceptors.request.use(config => {
  const token = storage.get(ACCESS_TOKEN)
  if (token) {
    config.headers.Authorization = 'TinyCMS ' + token
  }
  return config
}, errorHandler)

request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios
}