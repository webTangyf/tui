<template>
  <div class="tRecordPage">
    <t-button :buttonClass="'buttonClass'" :text="isDrag ? '开启拖拽': '关闭拖拽'" @onClick="isDrag = !isDrag"></t-button>
    <t-record :isDrag="isDrag" @onDragend="dragEnd">
      <t-recorditem>
        <t-itemswiper></t-itemswiper>
      </t-recorditem>
      <t-recorditem>
        <t-itemswiper></t-itemswiper>
      </t-recorditem>
      <t-recorditem>
        <t-itemswiper></t-itemswiper>
      </t-recorditem>
    </t-record>
  </div>
</template>

<script>
import {tButton, tRecord, tRecorditem, tItemswiper} from '@/tui'
export default {
  name: 'tRecordPage',
  components: {
    tButton,
    tRecord,
    tRecorditem,
    tItemswiper
  },
  created () {
  },
  data () {
    return {
      isDrag: false
    }
  },
  methods: {
    dragEnd (list) {
      console.log(list)
    }
  }
}
</script>
<style type="text/css">
  .tRecordPage{
    height: 100%;
  }
  .buttonClass{
    max-width: 100%!important;
  }
</style>
