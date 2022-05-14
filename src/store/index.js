//create vue store
import { createStore } from "vuex";
const store = createStore({
  state: {
    sunglasses: [],
    prescriptionframes: [],
    protectiveeyeware: [],
  },
  mutations: {
    setSunglasses(state, sunglasses) {
      state.sunglasses = sunglasses;
    },
    setPrescriptionframes(state, prescriptionframes) {
      state.prescriptionframes = prescriptionframes;
    },
    setProtectiveeyeware(state, protectiveeyeware) {
      state.protectiveeyeware = protectiveeyeware;
    },
  },
  actions: {
    async fetchAll({ commit }) {
      const sun = await fetch("/api/sunglasses");
      const sunGlasses = await sun.json();
      commit("setSunglasses", sunGlasses);
      const pres = await fetch("/api/prescriptionframes");
      const presFrames = await pres.json();
      commit("setPrescriptionframes", presFrames);
      const pro = await fetch("/api/protectiveeyeware");
      const proEyewear = await pro.json();
      commit("setProtectiveeyeware", proEyewear);
    },
  },
  getters: {
    sunglasses(state) {
      return state.sunglasses;
    },
    prescriptionframes(state) {
      return state.prescriptionframes;
    },
    protectiveeyeware(state) {
      return state.protectiveeyeware;
    },
  },
});

export default store;
