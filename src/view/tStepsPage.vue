<template>
  <div class="tStepsPage">
    <t-steps>
      <t-stepsItem :step="'first'" :success="true">
        <div class="test">testhhh</div>
      </t-stepsItem>      
      <t-stepsItem :success="true">
        <div class="test3">testhhh</div>
      </t-stepsItem>
      <t-stepsItem :step="'last'">
        <div class="test2">testhhh</div>
      </t-stepsItem>
    </t-steps>
  </div>
</template>

<script>
import {tSteps, tStepsItem} from '@/tui'
export default {
  name: 'tStepsPage',
  components: {
    't-steps': tSteps,
    't-stepsItem': tStepsItem
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
  .tStepsPage{
    margin-top: 10rem;
  }
  .test{
    height: 10rem;
    background: green;
    color: #fff;
  }  
  .test2{
    height: 2rem;
    background: gray;
    color: #fff;
  }
  .test3{
    height: 10rem;
    background: red;
    color: #fff;
  }
</style>
