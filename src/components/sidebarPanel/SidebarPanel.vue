<script>
import SidebarHeader from "@/components/sidebarPanel/sidebarHeader/SidebarHeader.vue";
import ThemesSwitcher from "@/components/sidebarPanel/themeSwither/ThemesSwitcher.vue";
import ProfileCard from "@/components/sidebarPanel/profileCard/ProfileCard.vue";
export default {
  components: { ProfileCard, ThemesSwitcher, SidebarHeader },
  computed: {
    theme() {
      return this.$store.getters.currentTheme;
    },
    themeClasses() {
      return {
        sidebar: true,
        darkThemeSidebar: this.theme === "dark",
        lightThemeSidebar: this.theme === "light",
      };
    },
  },
};
</script>

<template>
  <div :class="themeClasses">
    <SidebarHeader />
    <ThemesSwitcher />
    <ProfileCard />
  </div>
</template>

<style scoped>
@import "@/assets/styles/theme.scss";
@import "./Sidebar.styles.scss";
</style>
