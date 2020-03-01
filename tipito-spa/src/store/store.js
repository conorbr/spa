import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto';
import userModule from './modules/user';


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    
  },

  modules: {
    user: userModule,
  }

})
