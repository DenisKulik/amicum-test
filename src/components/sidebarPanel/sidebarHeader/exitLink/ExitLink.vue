<script>
import ExitIcon from "@/assets/icons/components/ExitIcon.vue";

export default {
  name: "ExitLink",
  components: { ExitIcon },
};
</script>

<template>
  <router-link to="/login" class="exitLink">
    <span class="linkText">Выход</span>
    <ExitIcon height="2.8vw" width="2.8vw" />
  </router-link>
</template>

<style scoped>
@import "./ExitLink.styles.scss";
</style>
