import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication.module'
//import createPersistedState from 'vuex-persistedstate'
//import { mapMutations } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication
  },
  /*plugins: [
    createPersistedState({
      paths: ['authentication'],
    }),
  ],
  mutations: {
    ...mapMutations('authentication', [
      'setUser'
    ]),
  }*/

})
