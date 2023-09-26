<script>
import ExitIcon from "@/assets/icons/components/ExitIcon.vue";

export default {
  name: "StudyView",
  components: { ExitIcon },
  computed: {
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
    <img class="logo" src="@/assets/img/logo.png" alt="logo" />
    <router-link to="/" class="home-link">
      <ExitIcon height="1.8vw" width="1.8vw" />
      <span class="link-text">Назад</span>
    </router-link>
    <h1 class="page-heading">Обучение</h1>
    <p class="page-info">Нет данных</p>
  </div>
</template>

<style scoped>
@import "@/styles/theme.scss";
@import "./styles.scss";
</style>
