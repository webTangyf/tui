<template>
  <div class="tMessagePage">
    <div @click="singleOpen">single</div>
    <div @click="doubleOpen">double</div>
    <p>点击查看基本样式 默认值类型single</p>
    <p>option: type, text, confimeText, cancelText, confimeColor, cancelColor</p>
    <p>callback: callback(当为单个按钮时 以及double的右侧按钮), errorcallback(仅当double的左边按钮)</p>
    <p>使用tMessage.show('text'|{type, text, confimeText, cancelText, confimeColor, cancelColor}, callback, errorcallback)</p>
  </div>
</template>

<script>
import {tMessage} from '@/tui'
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
    singleOpen () {
      tMessage.show('single')
    },
    doubleOpen () {
      tMessage.show({text: 'double', type: 'double'})
    }
  }
}
</script>
<style type="text/css">
  .tMessagePage{
    height: 100%;
    margin-top: 2rem;
  }
</style>
