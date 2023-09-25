import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTheme: "light",
  },
  mutations: {
    toggleTheme(state) {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    },
  },
  getters: {
    currentTheme(state) {
      return state.currentTheme;
    },
  },
});
