import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    setToken: (state, type) => {
      state.token = type;
    },
  },
  getters: {
    getToken: state => {
      return state.token
    }
  }
})
