<script>
import ProgressBar from "@/components/sidebarPanel/profileStatistics/progressBar/ProgressBar.vue";
import InstructIcon from "@/assets/icons/components/InstructIcon.vue";
import TestIcon from "@/assets/icons/components/TestIcon.vue";

export default {
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
      <ProgressBar
        :currentValue="Number(profile.isSuccessBriefing)"
        :minValue="0"
        :maxValue="1"
      >
        <div class="slot"><InstructIcon height="4.35vw" width="4.35vw" /></div>
      </ProgressBar>
    </div>
    <div class="profile-statistics-item">
      <h3 class="profile-statistics-item-heading">Предсменный экзаменатор</h3>
      <ProgressBar
        :currentValue="Number(profile.isSuccessExaminer)"
        :minValue="0"
        :maxValue="1"
      >
        <div class="slot"><TestIcon height="4.35vw" width="4.35vw" /></div>
      </ProgressBar>
    </div>
    <div class="profile-statistics-item">
      <h3 class="profile-statistics-item-heading">Тестов выполнено</h3>
      <ProgressBar
        :currentValue="profile.successTestsCount"
        :minValue="0"
        :maxValue="500"
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
        :minValue="0"
        :maxValue="10000"
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
