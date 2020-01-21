
import Vue from 'vue'
import Vuex from 'vuex'
import agent from './modules/agent'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    agent
  },
  strict: debug,
})
