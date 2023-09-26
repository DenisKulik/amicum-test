<script>
import ExitIcon from "@/assets/icons/components/ExitIcon.vue";

export default {
  name: "NotificationsView",
  components: { ExitIcon },
  computed: {
    profileIndex() {
      return this.$store.getters.currentProfile;
    },
    profile() {
      return this.$store.getters.allProfiles[this.profileIndex];
    },
    theme() {
      return this.$store.getters.currentTheme;
    },
    themeClasses() {
      return {
        "content-page": true,
        "dark-theme": this.theme === "dark",
        "light-theme": this.theme === "light",
      };
    },
  },
};
</script>

<template>
  <div :class="themeClasses">
    <router-link to="/" class="home-link">
      <ExitIcon height="1.8vw" width="1.8vw" />
      <span class="link-text">Назад</span>
    </router-link>
    <h1 class="page-heading">Уведомления</h1>
    <p class="page-info">Новых уведомлений: {{ profile.notificationCount }}</p>
  </div>
</template>

<style scoped>
@import "@/styles/theme.scss";
@import "./styles.scss";
</style>
