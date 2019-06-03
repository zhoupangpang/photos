// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'
import store from './stores'
import router from './router'
import axios from 'axios'

// Vue.config.productionTip = false
Vue.use(Vuex)
Vue.prototype.$axios= axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  store: new Vuex.Store(store)
})
