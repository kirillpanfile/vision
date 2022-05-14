//create vue store
import { createStore } from "vuex";
const store = createStore({
  state: {
    sunglasses: [],
  },
  mutations: {
    setSunglasses(state, sunglasses) {
      state.sunglasses = sunglasses;
    },
  },
  actions: {
    async fetchSunglasses({ commit }) {
      const response = await fetch("/api/sunglasses");
      console.log(response);
      const sunglasses = await response.json();
      commit("setSunglasses", sunglasses);
    },
  },
  getters: {
    sunglasses(state) {
      return state.sunglasses;
    },
  },
});

export default store;
//# sourceMappingURL=index.js.map
