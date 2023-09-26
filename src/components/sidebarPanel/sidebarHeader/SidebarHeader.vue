<script>
import TimeInfo from "@/components/sidebarPanel/sidebarHeader/timeInfo/TimeInfo.vue";
import ExitLink from "@/components/sidebarPanel/sidebarHeader/exitButton/ExitButton.vue";

export default {
  name: "SidebarHeader",
  components: {
    ExitLink,
    TimeInfo,
  },
};
</script>

<template>
  <div class="sidebar-header">
    <TimeInfo />
    <ExitLink />
  </div>
</template>

<style scoped>
@import "./SidebarHeader.styles.scss";
</style>
