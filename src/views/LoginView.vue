<script>
export default {
  name: "LoginView",
  data() {
    return {
      profileIndex: 0,
    };
  },
  computed: {
    theme() {
      return this.$store.getters.currentTheme;
    },
    themeClasses() {
      return {
        "content-page": true,
        "dark-theme": this.theme === "dark",
        "light-theme": this.theme === "light",
      };
    },
  },
  methods: {
    redirectToHome(profileIndex) {
      this.$store.commit("changeCurrentProfile", profileIndex);

      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 100);
    },
  },
};
</script>

<template>
  <div :class="themeClasses">
    <img class="logo" src="@/assets/img/logo.png" alt="logo" />
    <h2>Введите индекс пользователя от 0 до 2</h2>
    <input v-model="profileIndex" type="number" class="input" />
    <button @click="redirectToHome(profileIndex)" class="button">Войти</button>
  </div>
</template>

<style scoped>
@import "@/styles/theme.scss";
@import "./styles.scss";
</style>
