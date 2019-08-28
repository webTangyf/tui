import axios from 'axios'
import ajaxCahche from './cacheAjax.js'
import cacheConFig from './config.js'

const decodeType = {
  rc4: true
}

const qs = require('qs')

let instance = axios.create({
  baseURL: '/DLMiddleware_by-controller/restful/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  transformRequest: [function (data) {
    return qs.stringify(data)
  }]
})

instance.interceptors.request.use(config => {
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((res) => {
  return res
}, (error) => {
  alert(error)
  const status = error.response ? error.response.status : 600
  switch (status) {
    case 404:
      alert('接口不存在')
      break
    case 500:
      alert('服务器错误')
      break
    default:
      alert('未知错误')
  }
  return Promise.reject(error)
})

instance = ajaxCahche(instance, {
  activeDate: 50 * 1000 * 60,
  maxCacheSize: 15,
  ajaxMap: cacheConFig,
  handleJudge: function (data, cb) {
    if (data.retcode === '0000') {
      cb && cb()
    }
  },
  handleIgnore: function (key) { // 定义不作为比较基准的参数 true 即忽略 false 即不忽略
    return (['appkey', 'appsecret', 'appversion', 'channel', 'market', 'sign'].join(',').includes(key))
  },
  handleGetParams: function (data) { // 当作缓存处理的参数 与 接口请求参数无关
    return data
    // return Object.assign({}, encrypt.getParams(data || {}))
  }
})

export default instance
