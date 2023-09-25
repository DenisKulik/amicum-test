import Vue from "vue";
import Vuex from "vuex";

import theme from "@/store/theme";
import profiles from "@/store/profiles";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    profiles,
  },
});
