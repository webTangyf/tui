<template>
  <div class="tItemSwiperPage">
   <t-itemswiper></t-itemswiper>
   <p>上为基本样式(左右两侧 均可滑动)</p>
   <p>props:
    itemText,
    itemBackgroundColor,
    itemFontColor,
    itemBorder(Boolean),
    lockLeftSwiper(Boolean),
    lockRightSwiper(Boolean),
    scrollerToLeftEnd(Boolean),
   scrollerToRight(Boolean)</p>
   <p>slot: 默认， option-right， option-left</p>
   <p>event: onRightEnd()[打开左边触发], onLeftEnd()[打开右边触发]， onItemClick， onLeftClick， onRightClick</p>
  </div>
</template>

<script>
import {tItemswiper} from '@/tui'
export default {
  name: 'tItemSwiperPage',
  components: {
    tItemswiper
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
  .tItemSwiperPage{
    margin-top: 2rem;
    height: 100%;
  }
</style>
