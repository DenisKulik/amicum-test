<script>
import TimeInfo from "@/components/sidebarPanel/sidebarHeader/timeInfo/TimeInfo.vue";
import ExitLink from "@/components/sidebarPanel/sidebarHeader/exitLink/ExitLink.vue";

export default {
  components: {
    ExitLink,
    TimeInfo,
  },
};
</script>

<template>
  <div class="sidebarHeader">
    <TimeInfo />
    <ExitLink />
  </div>
</template>

<style scoped>
@import "./SidebarHeader.styles.scss";
</style>
