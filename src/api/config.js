export default {
  getadimglist: {
    url: '/customization/getadimglist',
    cachetype: 'baseurl',                          // 缓存方式 如果为 baseurl 就是 以url作为 基础进行记录缓存 （默认）， 如果以paramsurl 就是以requesturl来作为基础进行缓存 注意 以requesturl作为缓存 是指 不同的 request 都会被缓存下来 以map的形式进行报错 
    cache: false,                                  // 是否做缓存处理
    publish: ['funddetail']                          // 如果该接口更新了的话 需要去更新的接口
  }, 
  fundlist: { 
    url: '/query/fundlist',
    cachetype: 'paramsurl',
    cache: true,                        
  }, 
  funddetail : {
    url: '/query/queryfunddetail',
    cachetype: 'paramsurl',
    cache: true,                        
  },
  homepage: { 
    url: '/customization/homepage',
    cache: true,                        
    publish: []                         
  }
}