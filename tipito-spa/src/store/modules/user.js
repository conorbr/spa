import ajax from '../../ajax';

export default {
  namespaced: true,

  state: {
    currentUser: {

    },
  },

  mutations: {
    set(state, data) {
      state.currentUser = data;
    },
  },

  actions: {
    clean({ commit }) {
      commit('set', {});
    },

    signIn({ commit }, payload ) {
      ajax.post('/auth/login' , payload )
      .then((response) => {commit('set', { name: response.data.name, email: response.data.email , auth_token: response.data.auth_token })})
      .catch((error) => { throw error })
    },

    // todo
    signUp({ commit }, payload) {
      ajax.post('/signup', payload)
      .then((response) => {commit('set', { name: response.data.name, email: response.data.email , auth_token: response.data.auth_token })})
      .catch((error) => { throw error })
    },
  },
};
