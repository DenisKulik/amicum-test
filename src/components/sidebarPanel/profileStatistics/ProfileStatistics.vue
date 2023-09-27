<script>
import ProgressBar from "@/components/sidebarPanel/profileStatistics/progressBar/ProgressBar.vue";
import InstructIcon from "@/assets/icons/components/InstructIcon.vue";
import TestIcon from "@/assets/icons/components/TestIcon.vue";

export default {
  name: "ProfileStatistics",
  components: {
    TestIcon,
    InstructIcon,
    ProgressBar,
  },
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
  <div class="profile-statistics">
    <div class="profile-statistics-item">
      <h3 class="profile-statistics-item-heading">Инструктаж</h3>
      <ProgressBar :currentValue="profile.isSuccessBriefing">
        <div class="slot"><InstructIcon height="4.35vw" width="4.35vw" /></div>
      </ProgressBar>
    </div>
    <div class="profile-statistics-item">
      <h3 class="profile-statistics-item-heading">Предсменный экзаменатор</h3>
      <ProgressBar :currentValue="profile.isSuccessExaminer">
        <div class="slot"><TestIcon height="4.35vw" width="4.35vw" /></div>
      </ProgressBar>
    </div>
    <div class="profile-statistics-item">
      <h3 class="profile-statistics-item-heading">Тестов выполнено</h3>
      <ProgressBar
        :currentValue="profile.successTestsCount"
        :type="`tests`"
        :minValue="0"
        :maxValue="profile.totalTestsCount"
      >
        <div class="slot">
          <h4>{{ profile.successTestsCount }}</h4>
        </div>
      </ProgressBar>
    </div>
    <div class="profile-statistics-item">
      <h3 class="profile-statistics-item-heading">Аттестация через</h3>
      <ProgressBar
        :currentValue="profile.daysBeforeCertification"
        :type="`certification`"
        :minValue="0"
        :maxValue="365"
      >
        <div class="slot">
          <h4>{{ profile.daysBeforeCertification }}</h4>
          <span>дней</span>
        </div>
      </ProgressBar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./ProfileStatistics.styles.scss";
</style>
