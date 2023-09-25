export default {
  state: {
    theme: "dark",
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
  getters: {
    currentTheme(state) {
      return state.theme;
    },
  },
};
