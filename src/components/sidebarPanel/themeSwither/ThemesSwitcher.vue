<script>
import SunIcon from "@/assets/icons/components/SunIcon.vue";

export default {
  name: "ThemesSwitcher",
  components: { SunIcon },
  computed: {
    theme() {
      return this.$store.getters.currentTheme;
    },
    themeClasses() {
      return {
        thumb: true,
        "dark-theme-switcher": this.theme === "dark",
        "light-theme-switcher": this.theme === "light",
      };
    },
  },
  methods: {
    toggleTheme() {
      this.$store.commit("toggleTheme");
    },
  },
};
</script>

<template>
  <div class="themes-switcher">
    <div class="track" @click="toggleTheme">
      <SunIcon :class="themeClasses" height="4.11vw" width="4.11vw" />
    </div>
  </div>
</template>

<style scoped>
@import "./ThemesSwicher.styles.scss";
</style>
