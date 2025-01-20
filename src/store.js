// filepath: /c:/Users/edu_n/Documents/Doc-Imaps/Cayambe/Sistema/Vue3Vuetify3/catastro_vue3_003/src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    idPredio: null,
    idTenencia: null, // Añadir esta línea
  },
  mutations: {
    setIdPredio(state, id) {
      state.idPredio = id;
    },
    setIdTenencia(state, id) { // Añadir esta mutación
      state.idTenencia = id;
    },
  },
  actions: {
    updateIdPredio({ commit }, id) {
      commit('setIdPredio', id);
    },
    updateIdTenencia({ commit }, id) { // Añadir esta acción
      commit('setIdTenencia', id);
    },
  },
  getters: {
    getIdPredio: (state) => state.idPredio,
    getIdTenencia: (state) => state.idTenencia, // Añadir este getter
  },
});