<template>
  <div class="tFullHeadTabPasge">
   <t-fullHeadtab v-model="tabIndex" :list="tabList">
   </t-fullHeadtab>
   <p>t-headtab</p>
   <p>model: index(必须绑定)</p>
   <p>props: list(必传), <br>backgroundColor(背景颜色), <br>activeBottom(是否有底部)</p>
   <p>event: onClick, onChange</p>
  </div>
</template>

<script>
import { tFullHeadtab } from '@/tui'
export default {
  name: 'tFullHeadTabPasge',
  components: {
    tFullHeadtab
  },
  created () {

  },
  data () {
    return {
      tabIndex: 0,
      tabList: [
        {
          name: '123',
          id: '1'
        },
        {
          name: '123',
          id: '1'
        },
        {
          name: '123',
          id: '1'
        },
        {
          name: '123',
          id: '1'
        },
        {
          name: '123',
          id: '1'
        },
        {
          name: '123',
          id: '1'
        },
        {
          name: '123',
          id: '1'
        }
      ]
    }
  },
  methods: {

  },
  watch: {
  }
}
</script>
<style type="text/css">
  .tFullHeadTabPasge{
    margin-top: 2rem;
    height: 100%;
  }
</style>
