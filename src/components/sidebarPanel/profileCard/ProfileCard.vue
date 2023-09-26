<script>
export default {
  name: "ProfileCard",
  computed: {
    profileIndex() {
      return this.$store.getters.currentProfile;
    },
    profile() {
      return this.$store.getters.allProfiles[this.profileIndex];
    },
  },
};
</script>

<template>
  <div class="profile-card">
    <h2 class="name">{{ profile.name }}</h2>
    <p class="birthdate">{{ profile.birthdate }}</p>
    <p class="report">{{ profile.report }}</p>
    <p class="position">{{ profile.position }}</p>
  </div>
</template>

<style scoped>
@import "ProfileCard.styles.scss";
</style>
