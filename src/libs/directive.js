const directive = {
  install: function (Vue, options) {
    Vue.directive('updown', {
      inserted: function (el, { value = options.defaultColor || '#333' }) {
        updownHandle(el, Object.assign(options, { defaultColor: value.toString().replace(/('|")/g, '')}))
      },
      componentUpdated: function (el, { value = options.defaultColor || '#333' }) {
        console.log(value)
        updownHandle(el, Object.assign(options, { defaultColor: value.toString().replace(/('|")/g, '')}))
      },
    })
  }
}


const updownHandle = (el, { upColor, downColor, defaultColor }) => {
  let num = el.innerHTML
  num = num.replace(/(,|%|元|万|千|百|十|(<.*>))/g, '')
  if (Object.is(NaN, Number(num))) {
    el.style.color = defaultColor
    return
  }
  if (Number(num) > 0) {
    el.style.color = upColor
  } else if (Number(num) < 0) {
    el.style.color = downColor
  } else {
    el.style.color = defaultColor
    return
  }
}

export default directive
