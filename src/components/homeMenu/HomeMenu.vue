<script>
import ButtonLinks from "@/components/homeMenu/ButtonLinks/ButtonLinks.vue";

export default {
  name: "HomeMenu",
  components: { ButtonLinks },
};
</script>

<template>
  <div class="home-menu"><ButtonLinks /></div>
</template>

<style scoped>
@import "./HomeMenu.styles.scss";
</style>
