<script>
import SunIcon from "@/assets/icons/components/SunIcon.vue";

export default {
  components: { SunIcon },
  computed: {
    theme() {
      return this.$store.getters.currentTheme;
    },
    themeClasses() {
      return {
        thumb: true,
        darkThemeSwitcher: this.theme === "dark",
        lightThemeSwitcher: this.theme === "light",
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
  <div class="themesSwitcher">
    <div class="track" @click="toggleTheme">
      <SunIcon :class="themeClasses" height="7.9rem" width="7.9rem" />
    </div>
  </div>
</template>

<style scoped>
@import "./ThemesSwicher.styles.scss";
</style>
