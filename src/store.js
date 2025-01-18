// filepath: /c:/Users/edu_n/Documents/Doc-Imaps/Cayambe/Sistema/Vue3Vuetify3/catastro_vue3_003/src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    idPredio: null,
  },
  mutations: {
    setIdPredio(state, id) {
      state.idPredio = id;
    },
  },
  actions: {
    updateIdPredio({ commit }, id) {
      commit('setIdPredio', id);
    },
  },
  getters: {
    getIdPredio: (state) => state.idPredio,
  },
});