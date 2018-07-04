<template>
  <div class="tHeadTabPasge">
   <t-headtab v-model="tabIndex" :list="tabList">
   </t-headtab>
   <p>t-headtab</p>
   <p>model: index(必须绑定)</p>
   <p>props: list(必传), <br>backgroundColor(背景颜色), <br>activeBottom(是否有底部)</p>
   <p>event: onClick, onChange</p>
  </div>
</template>

<script>
import { tHeadtab } from '@/tui'
export default {
  name: 'tHeadTabPasge',
  components: {
    tHeadtab
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
  .tHeadTabPasge{
    margin-top: 2rem;
    height: 100%;
  }
</style>
