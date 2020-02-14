import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import popup from './modules/popup'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { count, popup }
})

export default store
