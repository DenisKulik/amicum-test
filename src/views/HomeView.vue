<script>
import HomeMenu from "@/components/homeMenu/HomeMenu.vue";

export default {
  name: "HomeView",
  components: { HomeMenu },
  computed: {
    theme() {
      return this.$store.getters.currentTheme;
    },
    themeClasses() {
      return {
        "home-page": true,
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
    <HomeMenu />
  </div>
</template>

<style scoped>
@import "@/styles/theme.scss";
@import "./styles.scss";
</style>
