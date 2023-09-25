<script>
export default {
  data() {
    return {
      currentDate: "",
      currentTime: "",
    };
  },
  created() {
    this.timer = setInterval(this.updateDateTime, 1000);
    this.updateDateTime(); // Вызываем функцию один раз при создании компонента.
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      this.currentDate = this.formatDate(now);
      this.currentTime = this.formatTime(now);
    },
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      return date.toLocaleString("ru", options);
    },
    formatTime(date) {
      const options = {
        hour: "2-digit",
        minute: "2-digit",
      };
      return date.toLocaleString("ru", options);
    },
  },
};
</script>

<template>
  <div class="timeInfo">
    <p>{{ currentDate }}</p>
    <p>{{ currentTime }}</p>
  </div>
</template>

<style scoped>
@import "TimeInfo.styles.scss";
</style>
