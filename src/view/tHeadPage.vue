<template>
  <div class="tHeadPage">
    <t-head :isBack="false" :text="'我是标题'"><div slot="backicon">123</div>123<div slot="right">123</div></t-head>
     <p>t-head</p>
     <p>props: titleWidth(title区域的宽度)<br>text(title区域的文案)<br>isBack(是否有返回按钮) 默认true<br>headBackgroundColor(整个的背景颜色)<br>rightWidth(right区域的宽度)<br>leftWidth(left区域的宽度)</p>
     <p>event: onBack()，onClickLeft， onClickRight， onClickTitle </p>
     <p>slot: backicon(返回按钮的位置)，left， title， right </p>
  </div>
</template>

<script>
import { tHead } from '@/tui'
export default {
  name: 'tHeadPage',
  components: {
    tHead
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
  .tHeadPage{
    height: 100%;
    margin-top: 2rem;
  }
</style>
