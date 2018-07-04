<template>
  <div class="tActionSheetPage">
    <t-button @onClick="show">show</t-button>
    <p>点击后可查看基本样式</p>
    <p>method: show(list), close()</p>
    <p>list:[item]</p>
    <p>title: string</p>
    <p>handle: function()</p>
    <p>innerhtml: string</p>
  </div>
</template>

<script>
import { tActionSheet } from '@/tui'
export default {
  name: 'tActionSheetPage',
  components: {
    // vue的异步组件仅限制于 vue 的 css 组件
    tButton: () => import('@/tui/t-button'),
    // 't-button': tButton
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    show () {
      tActionSheet.show([
        {
          title: '按钮名字',
          handle: () => {
            console.log('123')
          },
          innerhtml: '<div>123</div>'
        },
        {
          title: 'abcd',
          handle: () => {
            console.log('abcd')
          }
        }
      ])
    }
  },
  watch: {
  }
}
</script>
<style type="text/css">
  .tActionSheetPage{
    margin-top: 2rem;
    height: 100%;
  }
</style>
