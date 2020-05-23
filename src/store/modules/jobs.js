import ajax from '../../ajax';

export default {
  namespaced: true,

  state: {

  },

  mutations: {
    set(state, data) {
      Object.assign(state, {
        data
      });
    },
  },

  actions: {
    clean({ commit }) {
      commit('set', {});
    },

    get({ commit }) {
      ajax.get('/jobs')
      .then((response) => { commit('set', response.data )})
      .catch((error) => { throw error })
    },

    // todo
    create({ dispatch }, payload) {
      ajax.post('/jobs', payload)
      .then(() => { dispatch("get") })
      .catch((error) => { throw error })
    },

    update({ commit }, payload) {
      ajax.put('/signup', payload)
      .then((response) => {commit('set', { name: response.data.name, email: response.data.email , auth_token: response.data.auth_token })})
      .catch((error) => { throw error })
    },
  },
};
