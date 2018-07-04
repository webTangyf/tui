<template>
  <div class="hello">
    <p>v-updown指令 参数颜色控制。 自动过滤（,|%|元|万|千|百|十）字符</p>
    <span v-updown="'#666'">{{num}}千万%</span>
    <span v-test="'123123'">{{num}}千万%</span>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  created () {
  },
  data () {
    return {
      num: 0
    }
  },
  methods: {
  }
}
</script>
<style type="text/css">
  .hello{
    text-align: center;
  }
</style>
