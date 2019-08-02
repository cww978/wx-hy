// const loadSymbol = Symbol
// const Load = {
//   [loadSymbol]: null
// }
export default {
  namespaced: true,
  state: {
    load: false
  },
  mutations: {
    SHOW_LOAD: state => {
      state.load = true
    },
    CLOSE_LOAD: state => {
      state.load = false
    }
  },
  actions: {
    showLoad: ({ commit }) => {
      commit('SHOW_LOAD')
      console.log('load:', true)
    },
    closeLoad: ({ commit }) => {
      commit('CLOSE_LOAD')
      console.log('load:', false)
    }
  }
}
