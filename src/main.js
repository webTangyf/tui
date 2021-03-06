// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import directive from './libs/directive.js'
import api from './api/ajax.js'

import './tui/style/css/base.css'

Vue.config.productionTip = false

// Vue.component('textp', {
//   render: function (createElement, context) {
//     return createElement('p', '1111')
//   },
//   props: {
//     textString: {
//       type: String
//     }
//   }
// })
Vue.use(directive, {
  defaultColor: '#E8E8E8',
  upColor: '#B71C1C',
  downColor: '#1CAA2A'
})
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
