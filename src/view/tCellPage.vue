<template>
  <div class="tCellPasge">
    <t-cell :linkDirection="'right'" :title="'title'" :value="'test'"></t-cell>
    <p>t-cell</p>
    <p>
      props: <br>
      title(主标题),<br>
      desc(标题旁边的叙述), <br>
      value(右边的值), <br>
      isLink(最右边的箭头小标志： true, false), <br>
      linkDirection(最右边小箭头的方向： right, left, up, down), <br>
      borderWhere(border的位置 up, down, up-down)<br>
      borderType(是否为有间距的border: interval, no-interval), <br>
      goLink(跳转的外链链接, 如果在有外链的情况下 点击跳转外链)<br>
    </p>
    <p>event: onClick</p>
    <p>slot: 默认(标题), value</p>
  </div>
</template>

<script>
import { tCell } from '@/tui'
export default {
  name: 'tCellPasge',
  components: {
    tCell
  },
  created () {

  },
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  }
}
</script>
<style type="text/css">
  .tCellPasge{
    margin-top: 2rem;
    height: 100%;
  }
</style>
