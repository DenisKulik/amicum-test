import Vue from "vue";

import router from "@/router";
import store from "@/store";
import App from "@/App.vue";

import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@/assets/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
