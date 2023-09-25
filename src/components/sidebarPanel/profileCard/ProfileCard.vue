<script>
export default {
  computed: {
    profile() {
      return this.$store.getters.currentProfiles[0];
    },
  },
};
</script>

<template>
  <div class="profileCard">
    <h2 class="name">{{ profile.name }}</h2>
    <p class="birthdate">{{ profile.birthdate }}</p>
    <p class="report">{{ profile.report }}</p>
    <p class="position">{{ profile.position }}</p>
  </div>
</template>

<style scoped>
@import "./ProfileCard.styles.scss";
</style>
