<template>
  <transition name="fade">
    <div class="t-message" v-if="isShow">
      <div class="mask" @click="maskClose"></div>
      <div class="body">
        <div class="body-text big-f">{{option.text}}</div>
        <div class="body-bottom tui-row">
          <div v-if="option.type == 'double'"
          class="button cancel-button mid-f flex-1"
          :style="{color: option.cancelColor}"
          @click="cancelFunc">
            {{option.cancelText}}
          </div>
          <div class="button confime-button mid-f flex-1"
          :style="{color: option.confimeColor}"
          @click="comfirmFunc">
            {{option.confimeText}}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const confirmText = '确认'
const cancelText = '取消'
export default {
  name: 'tMessage',
  data () {
    return {
      option: {
        text: '',
        confimeText: confirmText,
        cancelText: cancelText,
        confimeColor: '',
        cancelColor: '',
        type: 'double' // single, 一个按钮， double两个按钮
      },
      isShow: false,
      actionType: ''
    }
  },
  methods: {
    doClose () {
      this.isShow = false
    },
    comfirmFunc () {
      this.actionType = 'comfirm'
      this.doClose()
    },
    cancelFunc () {
      this.actionType = 'cancel'
      this.doClose()
    },
    maskClose () {
      this.actionType = ''
      this.doClose()
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>
