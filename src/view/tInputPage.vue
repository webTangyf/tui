<template>
  <div class="tInputPage">
    <t-input v-model="value"></t-input>
    <p>props:<br>
    disabled(Boolean)<br>
    placeholder(String)<br>
    type(String)
    </p>
    <p>slot: prefix(前缀), suffix(后缀)</p>
    <p>event: onChange, onKeydown, onKeydown</p>
  </div>
</template>

<script>
import {tInput} from '@/tui'
export default {
  name: 'tInputPage',
  components: {
    tInput
  },
  created () {

  },
  data () {
    return {
      value: null
    }
  },
  methods: {

  },
  watch: {
  }
}
</script>
<style type="text/css">
  .tInputPage{
    margin-top: 2rem;
    height: 100%;
  }
</style>
