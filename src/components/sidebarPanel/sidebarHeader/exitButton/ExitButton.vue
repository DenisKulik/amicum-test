<script>
import ExitIcon from "@/assets/icons/components/ExitIcon.vue";

export default {
  name: "ExitButton",
  components: { ExitIcon },
  computed: {
    isLoginRoute() {
      return this.$route.name === "login";
    },
  },
  methods: {
    redirectToLogin() {
      this.$store.commit("changeCurrentProfile", 3);

      setTimeout(() => {
        this.$router.push({ name: "login" });
      }, 100);
    },
  },
};
</script>

<template>
  <button class="exit-button" @click="redirectToLogin" :disabled="isLoginRoute">
    <span class="text">Выход</span>
    <ExitIcon height="2.8vw" width="2.8vw" />
  </button>
</template>

<style scoped>
@import "ExitButton.styles.scss";
</style>
