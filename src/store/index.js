//create vue store
import { createStore } from "vuex";
const store = createStore({
  state: {
    sunglasses: [],
    prescriptionframes: [],
    protectiveeyeware: [],
    categories: [],
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
    setCategories(state, categories) {
      state.categories = categories;
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
      const cat = await fetch("/api/categories");
      const categories = await cat.json();
      commit("setCategories", categories);
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
    categories(state) {
      return state.categories;
    },
  },
});

export default store;
