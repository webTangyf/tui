<template>
  <div class="hello">
    <a @click="getadimglist()">getadimglist</a><br>
    <a @click="fundlist()">fundlist</a><br>
    <a @click="funddetail('213001')">funddetail213001</a><br>
    <a @click="funddetail('002482')">funddetail002482</a><br>
    <a @click="homepage()">homepage</a>
    <p>一.ajaxMap: 缓存的数组，数组中对应设置option项， 请求用的url（必填）</p>
    <p class="text-l">
      第一种申明option的方式<br>
      'key':{<br>
        url: 'interface',<br>
        catch: boolean // 是否缓存<br>
        publish: [] // 该接口刷新时对应需要重新刷新的接口<br>
      }
    </p>
    <p class="text-l">第二种申明option的方式 'key':'interface' </p>
    <p class="text-l"> 上面的key是 在 api.url中获取接口url的key ineterface 是对应的接口</p>
    <p class="text-l">二.activeDate: 设置超时时间</p>
    <p class="text-l">三.maxCacheSize: 设置最大的缓存数（超过最大缓存数的时候会自动清除时间最久的）</p>
    <p class="text-l">四.handleJudge: 用于判断返回的data中 是否去缓存的自定义方法 当然这个方法成功了 还是要走config中的cache的</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  created () {
  },
  data () {
    return {
    }
  },
  methods: {
    getadimglist () {
      this.$api.get(this.$api.url.getadimglist).then(({ data })=> {
        console.log('getadimglist', data)
      })
    },
    fundlist () {
      this.$api.get(this.$api.url.fundlist).then(({ data })=> {
        console.log('fundlist', data)
      })
    },
    funddetail (fundcode) {
      this.$api.get(this.$api.url.funddetail, {params: {fundcode}}).then(({ data })=> {
        console.log('funddetail', fundcode, data)
      })
    },
    homepage () {
      this.$api.get(this.$api.url.homepage).then(({ data })=> {
        console.log('homepage', data)
      })
    }
  }
}
</script>
<style type="text/css">
  .hello{
    text-align: center;
  }
  .text-l{
    text-align: left;
  }
</style>
