<template>
  <div class="tPopPickerPasge">
    <t-cell :title="'poppick'" @onClick="show"></t-cell>
  </div>
</template>

<script>
import {tCell, tPoppicker} from '@/tui'
export default {
  name: 'tPopPickerPasge',
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
    show () {
      tPoppicker.show({
        list: [
          {
            val: '1',
            key: '1',
            parent: '0'
          },
          {
            val: '1',
            key: '11',
            parent: '1'
          },
          {
            val: '2',
            key: '2',
            parent: '0'
          },
          {
            val: '2',
            key: '22',
            parent: '2'
          },
          {
            val: '22',
            key: '222',
            parent: '2'
          },
          {
            val: '3',
            key: '3',
            parent: '0'
          },
          {
            val: '3',
            key: '33',
            parent: '3'
          }
        ],
        type: 'PARENTPOP',
        init: ['2', '22']
      }, finishList => {
        console.log(finishList)
      })
      // poppicker.show({
      //   list: [['1','2','4'],['2','3','5']],
      //   init: ['2','3']
      // }, finishList => {
      //   console.log(finishList)
      // })
    }
  },
  watch: {
  }
}
</script>
<style type="text/css">
  .tPopPickerPasge{
    margin-top: 2rem;
    height: 100%;
  }
</style>
