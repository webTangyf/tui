<template>
  <transition name="fade">
    <div class="t-toast" v-if="isShow">
      <section class="body"
      :style="styleOption">
        <div v-html="toastHtml"></div>
        <p class="toast-text">{{text}}</p>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'tToast',
  data () {
    return {
      isShow: false,
      text: '',
      toastHtml: '',
      styleOption: {}
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>
