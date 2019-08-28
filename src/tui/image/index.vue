<script>
const DPR = window.devicePixelRatio || window.devicePixelRatio < 2 ? 2 : Math.round(window.devicePixelRatio)
export default {
  name: 'DlImage',
  functional: true,
  props: {
    source: String
  },
  render: function (createElement, context) {
    if (!context.props.source) {
      return
    }
    return createElement('img', {
      attrs: {
        src: context.props.source && context.props.source.replace(/(\.png|.jpg)$/, `@${DPR}x$1`)
      }
    })
  }
}
</script>
