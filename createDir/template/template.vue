<template>
  <div class="{{name}}-page">
    I'm {{name}}
  </div>
</template>

<script>
export default {
  name: '{{name}}'
  created () {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "./{{name}}.scss";
</style>