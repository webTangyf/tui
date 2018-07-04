<template>
  <div class="tButtonPasge">
   <t-button></t-button>
   <p>上为基本样式</p>
   <p>props: type, text, disabled, buttonClass, buttonFontColor, buttonColor</p>
   <p>slot: icon(按钮图标)</p>
   <p>event: onClick()[点击触发]</p>
  </div>
</template>
<script>
import { tButton } from '@/tui'
export default {
  name: 'HelloWorld',
  components: {
    tButton
  },
  created () {

  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style type="text/css">
  .tButtonPasge{
    margin-top: 2rem;
    height: 100%;
  }
</style>
