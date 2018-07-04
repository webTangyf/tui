<template>
  <div class="tTabPasge">
   <t-tab v-model="tabitem" border tabBackgroundColor="#666">
      <t-tabitem tabItemBackgroundColor="#999"></t-tabitem>
      <t-tabitem></t-tabitem>
      <t-tabitem></t-tabitem>
   </t-tab>
   <p>t-tab t-tabitem</p>
   <p>t-tab</p>
   <p>提供 v-model 可以绑定当前聚焦的tab</p>
   <p>props: tabBackgroundColor(tab的整体背景颜色)</p>
   <p>attr: border(上下border)</p>
   <p>event: onChange(activeId)</p>
   <p>t-tabitem</p>
   <p>slot: icon(默认图标), activeicon(激活图标图标)</p>
   <p>props: text(文案), tabItemFontColor(字体颜色), tabItemBackgroundColor(背景色) </p>
   <p>event: onFocus()[当聚焦],onClick()[当主动点击]</p>
  </div>
</template>

<script>
import {tTab, tTabitem} from '@/tui'
export default {
  name: 'tTabPasge',
  components: {
    tTab,
    tTabitem
  },
  created () {

  },
  data () {
    return {
      tabitem: 2
    }
  },
  methods: {

  },
  watch: {
  }
}
</script>
<style type="text/css">
  .tTabPasge{
    margin-top: 2rem;
    height: 100%;
  }
</style>
