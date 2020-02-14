import { STYLE } from '@const'
import uuidv4 from 'uuid/v4'

const { Z_INDEX } = STYLE.POPUP.DIMMED

const state = {
  popups: [],
  zIndex: Z_INDEX
}
const getters = {
  popups: state => state.popups,
  hasPopup: state => state.popups.length > 0,
  zIndex: state => state.zIndex
}
const mutations = {
  increaseZIndex(state) {
    return state.zIndex
  },
  addPopup(state, payload) {
    const id = `popup-id-${uuidv4()}`
    const zIndex = (state.zIndex += 1)
    const opts = payload || {}
    const newPopup = {
      id,
      zIndex,
      ...opts
    }
    state.popups = [...state.popups, newPopup]
  },
  removePopup(state, payload) {
    state.popups = state.popups.filter(popup => popup.id !== payload.id)
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
