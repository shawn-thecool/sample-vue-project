const state = {
  count: 0
}
const getters = {
  count: state => state.count
}
const mutations = {
  increasedBy(state, payload) {
    state.count += (payload || 1)
  },
  decreasedBy(state, payload) {
    state.count -= (payload || 1)
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
