<template>
  <div class="hello">
    <div @click="goLink('tMessagePage')">t-message</div>
    <div @click="goLink('tButtonPage')">t-button</div>
    <div @click="goLink('tTabPage')">t-tab t-tabitem</div>
    <div @click="goLink('tHeadPage')">t-head</div>
    <div @click="goLink('tItemswiperPage')">t-itemswiper</div>
    <div @click="goLink('tRecordPage')">t-record</div>
    <div @click="goLink('tCellPage')">t-cell</div>
    <div @click="goLink('tPopPickerPage')">t-poppick</div>
    <div @click="goLink('tInputPage')">t-input</div>
    <div @click="goLink('tToastPage')">t-toast</div>
    <div @click="goLink('tActionSheetPage')">t-actionsheet</div>
    <div @click="goLink('tHeadTabPage')">t-headtab</div>
    <div @click="goLink('tFullHeadTabPage')">t-fullheadtab</div>
    <div @click="goLink('tSwiperPage')">t-swiper</div>
    <div @click="goLink('tStepsPage')">t-steps</div>
    <div @click="goLink('directive')">directive</div>
    <div @click="goLink('api')">api</div>
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
    }
  },
  methods: {
    goLink (page) {
      this.$router.push({name: page})
    }
  }
}
</script>
<style type="text/css">
  .hello{
    text-align: center;
  }
</style>
