import axios from 'axios'
import characters from './characters'
const state = {
  message: 'rien pour l\'instant'
}

const getters = {
  messageUppercase (state) {
    return state.message.toUpperCase()
  }
}

const mutations = {
  setMessage(state, msg) {
    state.message = msg
  }
}

const actions = {
  loadMessage({
    commit
  }, url) {
    setTimeout(() => {
      axios.get(url)
        .then((response) => {
          commit('setMessage', response.data.message)
        })
        .catch(console.error)
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  modules: {
    characters
  },
  namespaced: true
}