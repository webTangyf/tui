export default function ajaxCahche (axios, option) {

  let { ajaxMap } = option
  let _activeDate = option.activeDate || 30 * 1000
  let _maxCacheSize = option.maxCacheSize || 15
  let handleJudge = option.handleJudge || handleJudgeDefault
  let handleIgnore = option.handleIgnore
  let handleGetParams = option.handleGetParams
  
  // 缓存的map
  const resultCache = new Map()

  // 需要去进行的网络请求格式 默认是这两个 暂时不想做成配置的 因为怕有问题
  const cacheMethods = ['post', 'get']

  let _cacheConFig = JSON.parse(JSON.stringify(ajaxMap))

  let url = {}

  let formatObject = {}

  // 格式化相关的缓存配置
  let cacheKeys = Object.keys(_cacheConFig)
  cacheKeys.forEach(key => {
    if (typeof _cacheConFig[key] === 'string') {
      formatObject[_cacheConFig[key]] = {
        url: _cacheConFig[key],
        cachetype: 'baseurl',
        cache: false,                         // 是否做缓存处理
        publish: [],                          // 如果该接口更新了的话 需要去更新的接口
      }
      url[key] = _cacheConFig[key]
    } else if (typeof _cacheConFig[key] === 'object') {
      formatObject[_cacheConFig[key]['url']] = Object.assign({
        cache: false,
        cachetype: 'baseurl',
        publish: [],
      }, _cacheConFig[key])
      url[key] = _cacheConFig[key]['url']
    } else {
      console.error(`${key} 不是合法的缓存格式`)
      delete _cacheConFig[key]
    }
  })

  _cacheConFig = formatObject

  // 对外接口请求的api
  axiosWithCache.url = JSON.parse(JSON.stringify(url))
  
  function axiosWithCache (...arg) {
    return axios(...arg)
  }

  // 缓存结果项
  axiosWithCache.__resultCache = resultCache

  axiosWithCache.getCacheMap = function () {
    return resultCache
  }

  // 缓存清除方法
  // 入参为对应的参数
  axiosWithCache.clearCache = function (ajaxUrl) {
    return resultCache.delete(ajaxUrl)
  }

  // 缓存配置项
  axiosWithCache.__cacheConFig = _cacheConFig

  axiosWithCache.getCacheConfig = function () {
    return _cacheConFig
  }

  // 检查状态是否需要重新请求 不需要返回false 需要返回true
  function checkCacheStatus ({ url, cachetype }, params) {
    if (cachetype === 'baseurl') {
      return !(
        resultCache.has(url) &&
        resultCache.get(url).timeStamp &&
        (new Date().getTime() - resultCache.get(url).timeStamp) < _activeDate
      ) 
    } else if (cachetype === 'paramsurl') {
      // 对参数进行过滤处理
      return !(
        resultCache.has(`${url}${JSON.stringify(params)}`) &&
        resultCache.get(`${url}${JSON.stringify(params)}`).timeStamp &&
        (new Date().getTime() - resultCache.get(`${url}${JSON.stringify(params)}`).timeStamp) < _activeDate
      ) 
    }
    return true
  } 

  // 清除依赖于这个接口的接口的相关缓存
  function clearWatchCatch ({ publish }) {
    if (publish.length !== 0) {
      let publishLength = publish.length
      for (let i = 0; i < publishLength; i++) {
        let ajaxUrl = url[publish[i]]
        if (_cacheConFig[ajaxUrl].cachetype === 'baseurl') {
          resultCache.delete(ajaxUrl)
        } else if (_cacheConFig[ajaxUrl].cachetype === 'paramsurl') {
          let keys = [...resultCache.keys()] 
          keys.forEach(d => {
            if (d.includes(ajaxUrl)) {
              resultCache.delete(d)
            }
          })
        }
        // 清除依赖的依赖
        clearWatchCatch(_cacheConFig[ajaxUrl] || [])
      }
    }
  }

  // 默认的判断本次请求是否成功的方式
  function handleJudgeDefault (data, cb) {
    if (data.retcode === '0000' || data.code === '0000') {
      cb&&cb()
    }
  }

  //  对原生的方法请求的结果进行处理
  async function nativePromiseHandle (nativeFunc, params) {
    let [ cacheStr ] = params
    try{
      let res = await nativeFunc(...params)
      let { data, config } = res
      if (typeof data === 'string'){
        data = JSON.parse(data)
      }
      handleJudge(data, () => {
        let cacheOption = _cacheConFig[cacheStr]
        if (cacheOption.cache) {
          if (cacheOption.cachetype === 'baseurl') {
            resultCache.set(cacheStr, {res, timeStamp: new Date().getTime()})
          } else if (cacheOption.cachetype === 'paramsurl') {
            let handleParams = JSON.parse(JSON.stringify(config.params))
            let keys = Object.keys(handleParams)
            keys.forEach(d => {
              if (handleIgnore(d)) {
                delete handleParams[d]
              }
            })
            resultCache.set(`${cacheStr}${JSON.stringify(handleParams)}`, {res, timeStamp: new Date().getTime()})
          }
          // 检查是否超出最大缓存数
          mapSizeCheck()
        }
        clearWatchCatch(cacheOption || [])
      })
      // 返回原始数据
      return res
    } catch(e) {
      console.error(e)
    }
  }

  // 检查是否超出最大缓存数
  function mapSizeCheck () {
    if (resultCache.size > _maxCacheSize) {
      let earlyMap = {
        key: '',
        timeStamp: new Date().getTime()
      }
      let keys = [...resultCache.keys()]
      for (let i = 0; i < keys.length; i++) {
        let currKey = keys[i]
        let result = resultCache.get(currKey)
        if (result.timeStamp !== 0 && result.timeStamp < earlyMap.timeStamp) {
          earlyMap.key = currKey
          earlyMap.timeStamp = result.timeStamp
        }
      }
      if (earlyMap.key) {
        resultCache.delete(earlyMap.key)
      }
    }
  }

  let cacheStr = cacheMethods.join(',')

  // 注册相关方法 
  for (let key in axios) {
    if (cacheStr.includes(key)) {
      // 正常缓存流程
      axiosWithCache[key] = function (...arg) {
        let ajaxUrl = arg[0]
        let params = arg[1]
        // 处理参数
        // 如果是get 要获取第二个参数里面的params
        if (key === 'get') {
          params = params && params.params ? params.params : {}
        }
        let handleParams = handleGetParams(params)
        let keys = Object.keys(handleParams)
        keys.forEach(d => {
          if (handleIgnore(d)) {
            delete handleParams[d]
          }
        })
        let cacheOption = _cacheConFig[ajaxUrl]
        if (!arg || arg.length === 0) {
          console.error(`${key} 方法的参数不合法，并未填写相关链接`)
          return false
        }
        if (!cacheOption) {
          console.error(`config中并未设置相关请求 option 请查看相关文档后修改`)
          return false
        }
        // 接着判断是需要从缓存中获取 还是 从接口处获取
        if (cacheOption.cache && !checkCacheStatus(cacheOption, handleParams)) {
          // 如果缓存中存在的话就
          if (cacheOption.cachetype === 'baseurl') {
            return Promise.resolve(resultCache.get(ajaxUrl).res)
          } else if (cacheOption.cachetype === 'paramsurl') {
            return Promise.resolve(resultCache.get(`${ajaxUrl}${JSON.stringify(handleParams)}`).res)
          }
          console.warn(`相关缓存类型出错 或 配置有问题`)
        }
        // 如果是需要从接口获取的那就去 调用axios相关请求方法
        return nativePromiseHandle(axios[key], arg)
      }
      // 直接去请求 不走缓存
      axiosWithCache[`${key}Native`] = function (...arg) {
        // 首先先判断参数合法
        if (!arg || arg.length === 0) {
          console.error(`${key} 方法的参数不合法，并未填写相关链接`)
          return false
        }
        if (!cacheOption) {
          console.error(`config中并未设置相关请求 option 请查看相关文档后修改`)
          return false
        }
        return nativePromiseHandle(axios[key], arg)
      }
    } else {
      if (typeof axios[key] === 'function') {
        axiosWithCache[key] = function (...arg) {
          return axios[key](...arg)
        }
      } else {
        axiosWithCache[key] = axios[key]
      }
    }
  }
  return axiosWithCache
}