import ajax from '../../ajax';

export default {
  namespaced: true,

  state: {
    jobs: {

    },
  },

  mutations: {
    set(state, data) {
      state.jobs = data;
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
    create({ commit }, payload) {
      debugger // eslint-disable-line
      ajax.post('/jobs', payload)
      .then((response) => {commit('set', { name: response.data.name, email: response.data.email , auth_token: response.data.auth_token })})
      .catch((error) => { throw error })
    },

    update({ commit }, payload) {
      ajax.put('/signup', payload)
      .then((response) => {commit('set', { name: response.data.name, email: response.data.email , auth_token: response.data.auth_token })})
      .catch((error) => { throw error })
    },
  },
};
