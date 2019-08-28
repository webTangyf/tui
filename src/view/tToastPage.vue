<template>
  <div class="tToastPage">
    <t-button @onClick="show">show</t-button>
    <p>点击后可查看基本样式</p>
    <p>method: show(text, option), close</p>
    <p>option</p>
    <p>autoClose(是否自动关闭, Boolean)默认自动关闭</p>
    <p>time(自动关闭的时间 Number)</p>
    <p>toastHtml(嵌入text上方的html代码 String)注意 样式写成内联 或者 写在全局</p>
    <p>styleOption(toast的样式 Object)</p>
  </div>
</template>

<script>
import {tToast, tButton} from '@/tui'
export default {
  name: 'tToastPage',
  components: {
    't-button': tButton,
    layoutPage
  },
  created () {
  },
  data () {
    return {
    }
  },
  methods: {
    show () {
      tToast.show('text')
    }
  },
  watch: {
  }
}
</script>
<style type="text/css">
  .tToastPage{
    margin-top: 2rem;
    height: 100%;
  }
</style>
