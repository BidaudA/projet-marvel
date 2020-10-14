const state = {
  message: 'Personne'
}

const getters = {
}

const mutations = {
  setMessage(state, msg) {
    state.message = msg
  }
}

const actions = {
  loadMessage({ commit }, who) {
    setTimeout(() => {
        commit("setMessage", who)
    }, 1500)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,

  namespaced: true
}