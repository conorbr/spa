import ajax from '../../ajax';

export default {
  namespaced: true,

  state: {

  },

  mutations: {
    set(state, data) {
      Object.assign(state, {
        name: data.name,
        email: data.email,
        auth_token: data.auth_token,
      });
    },
  },

  actions: {
    clean({ commit }) {
      commit('set', {});
    },

    signIn({ commit }, payload ) {
      console.log(payload) // eslint-disable-line
      ajax.post('/auth/login' , {email: payload.email, password: payload.password} )
      .then((response) => { commit('set', { name: response.data.name, email: response.data.email , auth_token: response.data.auth_token })})
      .catch((error) => { throw error })
    },

    // todo
    signUp({ commit }, payload) {
      ajax.post('/signup', payload)
      .then((response) => {commit('set', { name: response.data.name, email: response.data.email , auth_token: response.data.auth_token })})
      .catch((error) => { throw error })
    },

    signOut({ commit }) {
      commit('set', {});
    }
  },
};
