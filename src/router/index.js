import Vue from "vue";
import VueRouter from "vue-router";

import SidebarPanel from "@/components/sidebarPanel/SidebarPanel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: SidebarPanel,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
