<script>
import SidebarHeader from "@/components/sidebarPanel/sidebarHeader/SidebarHeader.vue";
import ThemesSwitcher from "@/components/sidebarPanel/themeSwither/ThemesSwitcher.vue";
import ProfileCard from "@/components/sidebarPanel/profileCard/ProfileCard.vue";
import ProfileStatistics from "@/components/sidebarPanel/profileStatistics/ProfileStatistics.vue";

export default {
  name: "SidebarPanel",
  components: { ProfileStatistics, ProfileCard, ThemesSwitcher, SidebarHeader },
  computed: {
    theme() {
      return this.$store.getters.currentTheme;
    },
    themeClasses() {
      return {
        sidebar: true,
        "dark-theme-sidebar": this.theme === "dark",
        "light-theme-sidebar": this.theme === "light",
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
    <ProfileStatistics />
  </div>
</template>

<style scoped>
@import "./SidebarPanel.styles.scss";
</style>
