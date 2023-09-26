<script>
import BumperIcon from "@/assets/icons/components/BumperIcon.vue";
import NotificationIcon from "@/assets/icons/components/NotificationIcon.vue";
import StudyIcon from "@/assets/icons/components/StudyIcon.vue";
import AchievementsIcon from "@/assets/icons/components/AchievementsIcon.vue";

export default {
  name: "ButtonLinks",
  components: { AchievementsIcon, StudyIcon, NotificationIcon, BumperIcon },
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
  <div class="button-links">
    <router-link to="/work" class="button-link">
      <div class="content-wrapper">
        <h2 class="link-title">Начать работу</h2>
        <BumperIcon width="7vw" height="7vw" />
      </div>
    </router-link>

    <router-link to="/notifications" class="button-link">
      <span class="notifications-count" v-if="profile.notificationCount > 0">{{
        profile.notificationCount
      }}</span>
      <div class="content-wrapper">
        <h2 class="link-title">Уведомления</h2>
        <NotificationIcon width="7vw" height="7vw" />
      </div>
    </router-link>

    <router-link to="/study" class="button-link">
      <div class="content-wrapper">
        <h2 class="link-title">Обучение</h2>
        <StudyIcon width="7vw" height="7vw" />
      </div>
    </router-link>

    <router-link to="/achievements" class="button-link">
      <div class="content-wrapper">
        <h2 class="link-title">Достижения</h2>
        <AchievementsIcon width="7vw" height="7vw" />
      </div>
    </router-link>
  </div>
</template>

<style scoped>
@import "ButtonLinks.styles.scss";
</style>
