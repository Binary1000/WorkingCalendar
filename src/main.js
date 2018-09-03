// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    show: false,
    current: {}
  },
  mutations: {
    toggle (state, flag) {
      state.show = flag
    },
    setCurrent (state, current) {
      state.current = current
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
