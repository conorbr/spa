import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto';
import createPersistedState from "vuex-persistedstate";
import userModule from './modules/user';
import jobsModule from './modules/jobs';



Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    auth_token: ''
  },

  modules: {
    user: userModule,
    jobs: jobsModule,
  },
})
