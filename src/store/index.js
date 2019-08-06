import Vue from 'vue'
import Vuex from 'vuex'
import loading from './modules/loading'
import user from './modules/user'
import meeting from './modules/meeting'
import speak from './modules/speak'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    loading,
    user,
    meeting,
    speak
  }
})

export default store
