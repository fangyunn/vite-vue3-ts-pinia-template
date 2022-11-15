import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const server = axios.create({
  // baseURL:'', // baseUrl将自动加在url前面,除非url是一个绝对URL
  // timeout:6000 / 超时中断请求
})

// 请求拦截
server.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 要做的操作
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// 响应拦截
server.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    if (response.status === 200) {
      return data
    } else {
      return Promise.reject(new Error(response.statusText || 'Error'))
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default server
