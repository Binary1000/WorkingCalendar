import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

export default store
