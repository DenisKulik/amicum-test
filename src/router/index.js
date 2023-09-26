import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";
import WorkView from "@/views/WorkView.vue";
import NotificationsView from "@/views/NotificationsView.vue";
import StudyView from "@/views/StudyView.vue";
import AchievementsView from "@/views/AchievementsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/work",
    name: "work",
    component: WorkView,
  },
  {
    path: "/notifications",
    name: "notifications",
    component: NotificationsView,
  },
  {
    path: "/study",
    name: "study",
    component: StudyView,
  },
  {
    path: "/achievements",
    name: "achievements",
    component: AchievementsView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
