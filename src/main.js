import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
window.$ = require('jquery')

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
